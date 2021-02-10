import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Forecast} from "./forecast";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ForecastService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getForecastById(city: string): Observable<Forecast> {
    return this.http.get<Forecast>(`${this.apiServerUrl}/weather/city/${city}`);
  }
}
