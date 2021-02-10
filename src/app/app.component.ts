import {Component, OnInit} from '@angular/core';
import {Forecast} from "./forecast";
import {ForecastService} from "./forecast.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public forecast: Forecast;

  ngOnInit(): void {
  }

  constructor(private forecastService: ForecastService) {
  }

  title = 'openweatherapp';

  onCheckWeather(checkWeather: string): void {
    this.forecastService.getForecastById(checkWeather).subscribe(
      (response: Forecast) => {
        console.log(response);
        this.forecast = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message + "jestem w onCheckWeather");
      }
    );
  }
}
