import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';



@Component({
  selector: 'app-general-informations-edit',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatAutocompleteModule, MatRadioModule, MatDatepickerModule],
    providers: [provideNativeDateAdapter()],
  templateUrl: './general-informations-edit.component.html',
  styleUrl: './general-informations-edit.component.css'
})
export class GeneralInformationsEditComponent {

}

