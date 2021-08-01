import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-add2',
  templateUrl: './add2.page.html',
  styleUrls: ['./add2.page.scss'],
})
export class Add2Page implements OnInit {

  time1='';
  time2='';

  eventSource=[];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate:new Date()
  };

  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };

modalReady = false;

// eslint-disable-next-line @typescript-eslint/member-ordering
@ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    setTimeout(()=>{
      this.modalReady=true;
    }, 0);
  }

  save(){
    console.log(this.time1);

    // this.event.startTime = this.time1.getString().toDate();
    // this.event.endTime = this.time.getString().toDate();
    this.event.startTime =this.time1;
    this.event.endTime =this.time2;
    this.modalCtrl.dismiss({event: this.event});
  }

  onViewTitleChanged(title){
    this.viewTitle=title;
  }

  onEventSelected = (event) => {
    console.log(event.title);
};

  onTimeSelected(ev){
    console.log('ev: ',ev);
    this.event.startTime = new Date (ev.selectedTime);
  }

  close(){
    this.modalCtrl.dismiss();
  }

  next(){
    this.myCal.slideNext();
  }

  back(){
    this.myCal.slidePrev();
  }


}
