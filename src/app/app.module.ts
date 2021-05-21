import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material.module";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./pages/login/login.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { NgxSpinnerModule } from "ngx-spinner";
import { InterceptorService } from "./core/interceptors/interceptor.service";
import { MapComponent } from "./components/map/map.component";
import { ChartContinentComponent } from "./components/chart-continent/chart-continent.component";
import { ChartsModule } from "ng2-charts";
import { ChartBarContinentComponent } from './components/chart-bar-continent/chart-bar-continent.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchComponent } from './pages/search/search.component';
import { TableComponent } from './components/table/table.component';
import { AddDataComponent } from './pages/add-data/add-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    MapComponent,
    ChartContinentComponent,
    ChartBarContinentComponent,
    SearchBarComponent,
    SearchComponent,
    TableComponent,
    AddDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ChartsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
