import {Component, OnInit} from '@angular/core';
import {Forecast} from "./forecast";
import {ForecastService} from "./forecast.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public forecast: Forecast;
  public cityToFind: string;

  ngOnInit(): void {
    //this.getForecast();
  }

  constructor(private forecastService: ForecastService) {
  }

  public getForecast(): void {
    this.forecastService.getForecast().subscribe(
      (response: Forecast) => {
        this.forecast = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message + "jestem w getForecast");
      }
    )
  }


  public onOpenModal(forecast: Forecast, mode: string): void {

    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('data-toggle', 'modal');


  }

  title = 'openweatherapp';

  onCheckForecast() {

  }

  onCheckWeather(checkWeather: string) : void {
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
