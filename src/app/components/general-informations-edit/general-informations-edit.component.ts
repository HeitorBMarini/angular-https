import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-general-informations-edit',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatAutocompleteModule, MatRadioModule, MatDatepickerModule, ReactiveFormsModule, CommonModule],
    providers: [provideNativeDateAdapter()],
  templateUrl: './general-informations-edit.component.html',
  styleUrl: './general-informations-edit.component.css'
})
export class GeneralInformationsEditComponent {

  @Input({required: true }) userForm!: FormGroup;

  get emailControl(): FormControl {
    return this.userForm.get('generalInformations.email') as FormControl;
  }
}

