import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
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
import { StatesList } from '../../types/states-list';
import { maritalStatusArray } from '../../utils/marital-status-description-map';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

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
    NgxMaskDirective,
  ],
  providers: [provideNativeDateAdapter(), provideNgxMask()],
  templateUrl: './general-informations-edit.component.html',
  styleUrl: './general-informations-edit.component.css',
})
export class GeneralInformationsEditComponent implements OnInit, OnChanges {

  countriesListFiltered: CountriesList = [];

  statesListFiltered: StatesList = [];

  @Input({ required: true }) userForm!: FormGroup;
  @Input({ required: true }) countriesList: CountriesList = [];
    @Input({ required: true }) statesList: StatesList = [];

    @Output('onCountrySelected') onCountrySelectedEmitt = new EventEmitter<string>();

  ngOnInit(){
        this.watchCountryFormChangesAndFilter();

        this.watchStatesFormChangesAndFilter();
  }
 

  ngOnChanges() {

    this.countriesListFiltered = this.countriesList;
    this.statesListFiltered = this.statesList;
  }

  get maritalStatusArray() {
    return maritalStatusArray;
  } 



  get emailControl(): FormControl {
    return this.userForm.get('generalInformations.email') as FormControl;
  }

  get countryControl(): FormControl {
    return this.userForm.get('generalInformations.country') as FormControl;
  }

  
  get stateControl(): FormControl {
    return this.userForm.get('generalInformations.states') as FormControl;
  }

  onCountrySelected(event: MatAutocompleteSelectedEvent) {
this.onCountrySelectedEmitt.emit(event.option.value);
}

onStatesSelected(event: MatAutocompleteSelectedEvent) {
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

  
 private  watchStatesFormChangesAndFilter() {
    this.stateControl.valueChanges.subscribe(this.filterStatesList.bind(this));
  }

  private filterStatesList(searchTerm:string){
 this.statesListFiltered = this.statesList.filter((state) =>
      state.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  }
}
