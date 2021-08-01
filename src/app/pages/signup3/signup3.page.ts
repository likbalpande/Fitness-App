import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.page.html',
  styleUrls: ['./signup3.page.scss'],
})
export class Signup3Page implements OnInit {
  genders: string;
  color1: string;
  color2: string;
  birthDate: string = "2003-06-17T15:03:46.789+05:30";//new Date(2003, 5, 17, 10, 33, 30, 0);
  homeCountry: string = "Singapore";

  constructor() { }

  ngOnInit() {
    console.log(this.birthDate);
  }

  setGender(gen: string){
    console.log(gen);
    this.genders = gen;
    if(gen === 'male'){
      this.color1 = 'success';
      this.color2 = 'white';
    }
    else if(gen === 'female'){
      this.color1 = 'white';
      this.color2 = 'success';
    }
  }

  updateMyDate($event) {
    console.log($event); // --> wil contains $event.day.value, $event.month.value and $event.year.value
  }

}
