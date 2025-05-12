import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido aqui
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private readonly _countrieService: CountriesService
  ) {}

  ngOnInit() {
    this._countrieService.getCountries().subscribe((countriesResponse) => {
      console.log('countriesResponse', countriesResponse);
    });
  }
}
