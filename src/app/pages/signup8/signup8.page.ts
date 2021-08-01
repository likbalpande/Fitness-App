import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';

import { Add2Page } from '../add2/add2.page';
import { EventEditPage } from '../event-edit/event-edit.page';

@Component({
  selector: 'app-signup8',
  templateUrl: './signup8.page.html',
  styleUrls: ['./signup8.page.scss'],
})
export class Signup8Page implements OnInit {
  eventSource=[];
  viewTitle: string;

  calendar = {
    mode:'month',
    currentDate:new Date()
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  next(){
    this.myCal.slideNext();
  }

  back(){
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  onEventSelected = (event) => {
    console.log(event.title);
};

createRandomEvents() {
  var events = [];
  for (var i = 0; i < 50; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
          startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
          if (endDay === startDay) {
              endDay += 1;
          }
          endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
          events.push({
              title: 'All Day - ' + i,
              startTime: startTime,
              endTime: endTime,
              allDay: true
          });
      } else {
          var startMinute = Math.floor(Math.random() * 24 * 60);
          var endMinute = Math.floor(Math.random() * 180) + startMinute;
          startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
          endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
          events.push({
              title: 'Event - ' + i,
              startTime: startTime,
              endTime: endTime,
              allDay: false
          });
      }
  }
  this.eventSource = events;
}

removeEvents(){
  this.eventSource=[];
}

async openCalModal(){
  const modal = await this.modalCtrl.create({
    component: Add2Page,
    cssClass: 'cal-modal',
    backdropDismiss: true
  });

  await modal.present();

  modal.onDidDismiss().then((result)=>{
    if(result.data && result.data.event){
      let event=result.data.event;
      if (event.allDay){
        let start=event.startTime;
        event.startTime=new Date(
          Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate()
          )
        );
        event.endTime = new Date(
          Date.UTC(
            start.getUTCFullYear(),
            start.getUTCMonth(),
            start.getUTCDate() + 1
          )
        );
      }
      this.eventSource.push(result.data.event);
      this.myCal.loadEvents();
    }
  });
}

async openEventModal(){
  const modal = await this.modalCtrl.create({
    component: EventEditPage,
    cssClass: 'cal-modal',
    backdropDismiss: true
  });

  await modal.present();

}

}
//   createRandomEvents(){
//     let events = [];
//     for (let i=0; i<50; i+=1){
//       let date = new Date();
//       let eventType=Math.floor(Math.random()*2);
//       let startDay=Math.floor(Math.random()*90)-45;
//       let endDay=Math.floor(Math.random()*2)+startDay;
//       let startTime;
//       let endTime;
//       if(eventType===0){
//         startTime = new Date(
//           Date.UTC(
//             date.getUTCFullYear(),
//             date.getUTCMonth(),
//             date.getUTCDate + startDay
//           )

//         );
//         if (endDay === startDay) {
//           endDay += 1;
//       }
//       endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
//       events.push({
//           title: 'All Day - ' + i,
//           startTime: startTime,
//           endTime: endTime,
//           allDay: true
//       });
//   } else {
//       var startMinute = Math.floor(Math.random() * 24 * 60);
//       var endMinute = Math.floor(Math.random() * 180) + startMinute;
//       startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
//       endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
//       events.push({
//           title: 'Event - ' + i,
//           startTime: startTime,
//           endTime: endTime,
//           allDay: false
//       });
//   }
// }
// this.eventSource = events;
// }
//       }

//     }
//   }

// }
