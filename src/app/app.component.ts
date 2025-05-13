import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly _countrieService: CountriesService,
    private readonly _statesService: StatesService
  ) {}

  ngOnInit() {
    this._countrieService.getCountries().subscribe((countriesResponse) => {
      console.log('countriesResponse', countriesResponse);
    });

    this._statesService.getStates('Brazil').subscribe((statesResponse) => {
      console.log('statesResponse', statesResponse);
    });
  }
}
