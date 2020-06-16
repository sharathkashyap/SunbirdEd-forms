import { Component, OnInit, Input } from '@angular/core';
import { FieldConfigInputType, FieldConfigValidationType } from '../interface/formConfigInterface';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  @Input() config;
  configInputType: any;
  validationType: any;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.configInputType = FieldConfigInputType;
    this.validationType = FieldConfigValidationType;
    this.initilizeForm();
  }

  initilizeForm() {
    if (!this.config.length) {
      console.error('FORM LIST IS EMPTY');
      return;
    }
    const formGroupData = {};
    this.config.forEach((element: any, index) => {
      if (element.type !== FieldConfigInputType.LABEL) {
        const formValueList = this.prepareFormValidationData(element, index);
        formGroupData[element.code] = formValueList;
      }
    });

    this.formGroup = this.formBuilder.group(formGroupData);

  }


  private prepareFormValidationData(element, index) {
    const formValueList = [];
    const validationList = [];

    let defaultVal: any = '';
    switch (element.type) {
      case FieldConfigInputType.INPUT:
        defaultVal = element.templateOptions.type === 'number' ?
          (element.defaultVal && Number.isInteger(element.defaultVal) ? element.defaultVal : 0) : '';
        break;
      case FieldConfigInputType.SELECT:
        defaultVal = element.templateOptions.multiple ?
        (element.defaultVal && Array.isArray(element.defaultVal) ? element.defaultVal : []) : '';
        break;
      case FieldConfigInputType.CHECKBOX:
        defaultVal = false || !!element.defaultVal;
        break;
    }

    formValueList.push(defaultVal || element.default);

    if (element.validations && element.validations.length) {
      element.validations.forEach((data, i) => {
        switch (data.type) {
          case FieldConfigValidationType.REQUIRED:
            validationList.push(element.type === FieldConfigInputType.CHECKBOX ? Validators.requiredTrue : Validators.required);
            // if (this.config[index].templateOptions && this.config[index].templateOptions.label) {
            //   this.config[index].templateOptions.label =
            //     // this.commonUtilService.translateMessage(this.config[index].templateOptions.label) + ' *';
            // }
            break;
          case FieldConfigValidationType.PATTERN:
            validationList.push(Validators.pattern(element.validations[i].value));
            break;
          case FieldConfigValidationType.MINLENGTH:
            validationList.push(Validators.minLength(element.validations[i].value));
            break;
          case FieldConfigValidationType.MAXLENGTH:
            validationList.push(Validators.maxLength(element.validations[i].value));
            break;
        }
      });
    }

    formValueList.push(Validators.compose(validationList));

    return formValueList;
  }

}
