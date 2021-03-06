import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Data } from "../models/data";

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
      return this.http.get<any>(`${this.baseUrl}/country/${country}`);
    }
  }

  getDataByContinent(continent: string) {
    if (continent) {
      return this.http.get<any>(`${this.baseUrl}/continent/${continent}`);
    }
  }

  getDataCountriesMap() {
    return this.http.get<any>(`${this.baseUrl}/get/countries`);
  }

  addData(data: Data) {
    return this.http.post<Data>(`${this.baseUrl}/post`, data);
  }

  deleteData(id: string) {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`);
  }
}
