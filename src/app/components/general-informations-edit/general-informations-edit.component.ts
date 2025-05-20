import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { CountriesList } from '../../types/countries-list';

@Component({
  selector: 'app-general-informations-edit',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './general-informations-edit.component.html',
  styleUrl: './general-informations-edit.component.css',
})
export class GeneralInformationsEditComponent implements OnInit, OnChanges {


  countriesListFiltered: CountriesList = [];

  @Input({ required: true }) userForm!: FormGroup;
  @Input({ required: true }) countriesList: CountriesList = [];

  ngOnInit(){
        this.watchCountryFormChangesAndFilter();

  }

  ngOnChanges() {
    console.log(this.userForm);

    this.countriesListFiltered = this.countriesList;
  }

  get emailControl(): FormControl {
    return this.userForm.get('generalInformations.email') as FormControl;
  }

  get countryControl(): FormControl {
    return this.userForm.get('generalInformations.country') as FormControl;
  }

  onCountrySelected(event: MatAutocompleteSelectedEvent) {
console.log(event.option.value)
}

  private watchCountryFormChangesAndFilter() {
    this.countryControl.valueChanges.subscribe(this.filterCountriesList.bind(this));
  }

  private filterCountriesList(searchTerm:string){
 this.countriesListFiltered = this.countriesList.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  }
}
