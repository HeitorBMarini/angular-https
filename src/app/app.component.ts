import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListResponse } from './types/users-list';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { GeneralInformationsComponent } from "./components/general-informations/general-informations.component";
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UsersListComponent, CommonModule, MatTabsModule, GeneralInformationsComponent],
})
export class AppComponent implements OnInit {
  usersList: UsersListResponse = [];
  currentTabIndex: number = 0;

  constructor(
    private readonly _countrieService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService
  ) {}

  ngOnInit(): void {
    this._countrieService.getCountries().subscribe((countriesResponse) => {
      console.log('countriesResponse', countriesResponse);
    });

    this._statesService.getStates('Brazil').subscribe((statesResponse) => {
      console.log('statesResponse', statesResponse);
    });

    this._citiesService
      .getCities('Brazil', 'São Paulo')
      .subscribe((citiesResponse) => {
        console.log('citiesResponse', citiesResponse);
      });

    this._usersService
      .getUsers()
      .pipe(take(1))
      .subscribe((usersListResponse) => {
        this.usersList = usersListResponse;
      });
  }
}
