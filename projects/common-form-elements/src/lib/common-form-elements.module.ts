import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CommonFormElementsComponent } from './common-form-elements.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextboxComponent } from './textbox/textbox.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormComponent } from './form/form.component';
import { OptionGroupComponent } from './option-group/option-group.component';

@NgModule({
  declarations: [CommonFormElementsComponent, DropdownComponent, TextboxComponent,
     TextareaComponent, CheckboxComponent, FormComponent, OptionGroupComponent],
  imports: [ CommonModule
  ],
  exports: [ CommonFormElementsComponent , DropdownComponent,
            TextboxComponent, TextareaComponent, CheckboxComponent, FormComponent, OptionGroupComponent]
})
export class CommonFormElementsModule { }
