import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DataService {
  baseUrl = environment.baseUrl + "/covid/data";

  constructor(private http: HttpClient) {}

  getDataContinents() {
    return this.http.get<any>(`${this.baseUrl}/get/continents`);
  }

  getDataCountry(country: string) {
    if (country) {
      return this.http.get(`${this.baseUrl}/country/${country}`);
    }
  }

  getDataCountriesMap() {
    return this.http.get<any>(`${this.baseUrl}/get/countries`);
  }
}
