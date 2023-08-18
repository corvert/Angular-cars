import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  onSubmit(addCarForm: NgForm) {
    if(addCarForm.valid){
      console.log(addCarForm.value);
      let cars = [];
      const carsLS = localStorage.getItem("cars");
      if (carsLS){
        cars = JSON.parse(carsLS);
      }
      cars.push(addCarForm.value);
      localStorage.setItem("cars", JSON.stringify(cars));
    }
    
  }

}
