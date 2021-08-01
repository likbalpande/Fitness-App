import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page implements OnInit {
  activityLevel: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;

  constructor() { }

  ngOnInit() {
  }

  activity(active: string) {
    console.log(active);
    this.activityLevel = active;
    if(active === 'not very active'){
      this.color1 = 'success';
      this.color2 = 'white';
      this.color3 = 'white';
      this.color4 = 'white';
    }
    else if(active === 'lightly active'){
      this.color1 = 'white';
      this.color2 = 'success';
      this.color3 = 'white';
      this.color4 = 'white';
    }
    else if(active === 'active'){
      this.color1 = 'white';
      this.color2 = 'white';
      this.color3 = 'success';
      this.color4 = 'white';
    }
    else if(active === 'very active'){
      this.color1 = 'white';
      this.color2 = 'white';
      this.color3 = 'white';
      this.color4 = 'success';
    }
  }

}
