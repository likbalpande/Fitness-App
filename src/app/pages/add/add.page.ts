import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements AfterViewInit {
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

  ngAfterViewInit() {
    setTimeout(()=>{
      this.modalReady=true;
    }, 0);
  }

  save(){
    this.modalCtrl.dismiss({event: this.event});
  }

  onViewTitleChanged(title){
    this.viewTitle=title;
  }

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
