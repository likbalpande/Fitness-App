import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add1',
  templateUrl: './add1.page.html',
  styleUrls: ['./add1.page.scss'],
})
export class Add1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  trial(){
    console.log('I AM HERE BRO!!!');
  }

}
