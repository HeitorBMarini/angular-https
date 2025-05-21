import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { GeneralInformationsComponent } from '../general-informations/general-informations.component';
import { ContactInformationsComponent } from '../contact-informations/contact-informations.component';
import { DependentsListComponent } from '../dependents-list/dependents-list.component';
import { GeneralInformationsEditComponent } from '../general-informations-edit/general-informations-edit.component';
import { ContactInformationsEditComponent } from '../contact-informations-edit/contact-informations-edit.component';
import { DependentsListEditComponent } from '../dependents-list-edit/dependents-list-edit.component';
import { UserFormController } from './user.form-controller';
import { CountriesService } from '../../services/countries.service';
import { take } from 'rxjs';
import { CountriesList } from '../../types/countries-list';
import { StatesService } from '../../services/states.service';
import { StatesList } from '../../types/states-list';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-user-infomations-container',
  imports: [
    CommonModule,
    MatTabsModule,
    GeneralInformationsComponent,
    ContactInformationsComponent,
    DependentsListComponent,
    GeneralInformationsEditComponent,
    ContactInformationsEditComponent,
    DependentsListEditComponent,
  ],
  providers: [ provideNativeDateAdapter(),
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
   ],
  templateUrl: './user-infomations-container.component.html',
  styleUrl: './user-infomations-container.component.css',
})
export class UserInfomationsContainerComponent
  extends UserFormController
  implements OnInit, OnChanges
{

  currentTabIndex: number = 0;

  countriesList: CountriesList = [];
  statesList: StatesList = [];

  private readonly _countriesService = inject(CountriesService);

  private readonly _statesService = inject(StatesService);

  @Input({ required: true }) isInEditMode: boolean = false;
  @Input({ required: true }) userSelected: IUser = {} as IUser;

  ngOnInit() {
    this.getCountriesList();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentTabIndex = 0;

    const HAS_USER_SELECTED =
      changes['userSelected'] &&
      Object.keys(changes['userSelected'].currentValue).length > 0;

    if (HAS_USER_SELECTED) {
      this.fulfillUserForm(this.userSelected);

      this.getStatesList(this.userSelected.country);
    }
  }

  onCountrySelected(countryName: string) {
    this.getStatesList(countryName);
  }

  private getStatesList(country: string) {
    this._statesService
      .getStates(country)
      .pipe(take(1))
      .subscribe((statesList: StatesList) => {
        this.statesList = statesList;
      });
  }

  private getCountriesList() {
    this._countriesService
      .getCountries()
      .pipe(take(1))
      .subscribe((countriesList: CountriesList) => {
        this.countriesList = countriesList;
      });
  }

  mostrarUserForm() {
throw new Error('Method not implemented.');
}
}
