import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly _countrieService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
  ) {}

  ngOnInit() {
    this._countrieService.getCountries().subscribe((countriesResponse) => {
      console.log('countriesResponse', countriesResponse);
    });

    this._statesService.getStates('Brazil').subscribe((statesResponse) => {
      console.log('statesResponse', statesResponse);
    });

    this._citiesService.getCities('Brazil', 'São Paulo').subscribe((citiesResponse) => {
      console.log('citiesResponse', citiesResponse);
    });
  }
}
