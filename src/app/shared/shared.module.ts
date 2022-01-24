import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateComponent } from './components/date/date.component';
import { InputComponent } from './components/input/input.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectComponent } from './components/select/select.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    DynamicFormComponent
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ]
})
export class SharedModule { }
