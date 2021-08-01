import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  eventSource=[];
  viewTitle: string;

  calendar = {
    mode:'month',
    currentDate:new Date()
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  constructor() { }

  ngOnInit() {
  }

}
