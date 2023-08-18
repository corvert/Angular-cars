import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewCarsComponent } from './view-cars/view-cars.component';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "view", component: ViewCarsComponent},
  {path: "add", component: AddCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
