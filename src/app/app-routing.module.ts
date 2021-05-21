import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { LoginGuard } from "./core/guards/login.guard";
import { LoggedGuard } from "./core/guards/logged.guard";
import { SearchComponent } from "./pages/search/search.component";
import { AddDataComponent } from "./pages/add-data/add-data.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [LoginGuard] },
  { path: "search", component: SearchComponent, canActivate: [LoginGuard] },
  { path: "add", component: AddDataComponent, canActivate: [LoginGuard] },
  { path: "login", component: LoginComponent, canActivate: [LoggedGuard] },
  { path: "*", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
