import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FieldConfig, FieldConfigInputType, FieldConfigValidationType} from '../common-form-config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Subscription} from 'rxjs';
import {distinctUntilChanged, map, scan, tap} from 'rxjs/operators';

@Component({
  selector: 'sb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  @Output() valueChanges = new EventEmitter();
  @Output() initialize = new EventEmitter();
  @Output() statusChanges = new EventEmitter();
  @Input() onDataLoading?: () => void;
  @Input() onDataLoaded?: () => void;
  @Input() config;

  dataLoadStatusDelegate = new Subject<'LOADING' | 'LOADED'>();

  formGroup: FormGroup;
  configInputType: any;
  validationType: any;

  private statusChangesSubscription: Subscription;
  private valueChangesSubscription: Subscription;
  private dataLoadStatusSinkSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder
  ) {
    if (!window['forms']) {
      window['forms'] = [];
    }
    window['forms'].push(this);
  }

  ngOnDestroy(): void {
    if (this.statusChangesSubscription) {
      this.statusChangesSubscription.unsubscribe();
    }

    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }

    if (this.dataLoadStatusSinkSubscription) {
      this.dataLoadStatusSinkSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.configInputType = FieldConfigInputType;
    this.validationType = FieldConfigValidationType;
    this.initilizeForm();
    this.statusChangesSubscription = this.formGroup.valueChanges.pipe(
      tap((v) => {
        this.statusChanges.emit({
          isPristine: this.formGroup.pristine,
          isDirty: this.formGroup.dirty,
          isInvalid: this.formGroup.invalid,
          isValid: this.formGroup.valid
        });
      })
    ).subscribe();

    this.valueChangesSubscription = this.formGroup.valueChanges.pipe(
      tap((v) => {
        this.valueChanges.emit(v);
      })
    ).subscribe();

    this.dataLoadStatusSinkSubscription = this.dataLoadStatusDelegate.pipe(
      scan<'LOADING' | 'LOADED', { loadingCount: 0, loadedCount: 0 }>((acc, event) => {
        if (event === 'LOADED') {
          acc.loadedCount++;
          return acc;
        }

        acc.loadingCount++;
        return acc;
      }, {loadingCount: 0, loadedCount: 0}),
      map<{ loadingCount: 0, loadedCount: 0 }, 'LOADING' | 'LOADED'>((aggregates) => {
        if (aggregates.loadingCount !== aggregates.loadedCount) {
          return 'LOADING';
        }

        return 'LOADED';
      }),
      distinctUntilChanged(),
      tap((result) => {
        if (result === 'LOADING') {
          this.onDataLoading();
        } else {
          this.onDataLoaded();
        }
      })
    ).subscribe();
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
    this.initialize.emit(this.formGroup);
  }

  onNestedFormInitialize(nestedFormGroup: FormGroup, fieldConfig: FieldConfig<any>) {
    this.formGroup.addControl(fieldConfig.code + nestedFormGroup.value, nestedFormGroup);
  }

  private prepareFormValidationData(element: FieldConfig<any>, index) {
    const formValueList = [];
    const validationList = [];

    let defaultVal: any = '';
    switch (element.type) {
      case FieldConfigInputType.INPUT:
        defaultVal = element.templateOptions.type === 'number' ?
          (element.default && Number.isInteger(element.default) ? element.default : 0) : null;
        break;
      case FieldConfigInputType.SELECT:
      case FieldConfigInputType.NESTED_SELECT:
        defaultVal = element.templateOptions.multiple ?
          (element.default && Array.isArray(element.default) ? element.default : []) : (element.default || null);
        break;
      case FieldConfigInputType.CHECKBOX:
        defaultVal = false || !!element.default;
        break;
    }

    formValueList.push(defaultVal);

    if (element.validations && element.validations.length) {
      element.validations.forEach((data, i) => {
        switch (data.type) {
          case FieldConfigValidationType.REQUIRED:
            if (element.type === FieldConfigInputType.CHECKBOX) {
              validationList.push(Validators.requiredTrue);
            } else if (element.type === FieldConfigInputType.SELECT || element.type === FieldConfigInputType.NESTED_SELECT) {
              validationList.push((c) => {
                if (element.templateOptions.multiple) {
                  return c.value && c.value.length ? null : 'error';
                }
                return !!c.value ? null : 'error';
              });
            } else {
              validationList.push(Validators.required);
            }
            break;
          case FieldConfigValidationType.PATTERN:
            validationList.push(Validators.pattern(element.validations[i].value as string));
            break;
          case FieldConfigValidationType.MINLENGTH:
            validationList.push(Validators.minLength(element.validations[i].value as number));
            break;
          case FieldConfigValidationType.MAXLENGTH:
            validationList.push(Validators.maxLength(element.validations[i].value as number));
            break;
        }
      });
    }

    formValueList.push(Validators.compose(validationList));

    return formValueList;
  }
}
