import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { FormComponent } from './form/form.component';
import { CommonFormElementsComponent } from './common-form-elements.component';


@NgModule({
  declarations: [CommonFormElementsComponent, DropdownsComponent, FormComponent],
  imports: [CommonModule],
  exports: [CommonFormElementsComponent , DropdownsComponent, FormComponent]
})
export class CommonFormElementsModule { }
