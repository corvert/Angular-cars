import { Component } from '@angular/core';

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
  styleUrls: ['./view-cars.component.css']
})
export class ViewCarsComponent {

  cars: any[] = [];


  ngOnInit(): void {
    const carsLS = localStorage.getItem("cars");
    if (carsLS){
      this.cars = JSON.parse(carsLS);
    }
  }

}
