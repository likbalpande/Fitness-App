import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.page.html',
  styleUrls: ['./signup1.page.scss'],
})
export class Signup1Page implements OnInit {
  goal: string;
  buttonColor: string;
  color1: string;
  color2: string;
  color3: string;

  constructor() { }

  ngOnInit() {
  }

  weight(wt: string) {
    this.goal = wt;
    if(wt === 'lose'){
      this.color1 = 'success';
      this.color2 = 'white';
      this.color3 = 'white';
    }
    else if(wt === 'maintain'){
      this.color1 = 'white';
      this.color2 = 'success';
      this.color3 = 'white';
    }
    else if(wt === 'gain'){
      this.color1 = 'white';
      this.color2 = 'white';
      this.color3 = 'success';
    }
    console.log(this.goal);
  }

}
