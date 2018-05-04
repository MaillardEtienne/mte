import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ActivitiesPage } from '../activities/activities';
import { SelectCalendarComponent } from '../../components/select-calendar/select-calendar';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  daysName = [
    {full: "Lundi",     min: "Lu"},
    {full: "Mardi",     min: "Ma"},
    {full: "Mercredi",  min: "Me"},
    {full: "Jeudi",     min: "Je"},
    {full: "Vendredi",  min: "Ve"},
    {full: "Samedi",    min: "Sa"},
    {full: "Dimanche",  min: "Di"}
  ];

  monthsName = [
    {full: "Janvier",   min: "Janv"},
    {full: "Février",   min: "Févr"},
    {full: "Mars",      min: "Mars"},
    {full: "Avril",     min: "Avri"},
    {full: "Mai",       min: "Mai"},
    {full: "Juin",      min: "Juin"},
    {full: "Juillet",   min: "Juil"},
    {full: "Août",      min: "Août"},
    {full: "Septembre", min: "Sept"},
    {full: "Octobre",   min: "Oct"},
    {full: "Novembre",  min: "Nov"},
    {full: "Decembre",  min: "Dec"}
  ];

  workouts = [
    {icon: "body", time: "01:00", intensite: 7, forme: 6},
    {icon: "walk", time: "01:00", intensite: 7, forme: 6},
    {icon: "bicycle", time: "01:00", intensite: 7, forme: 6},
    {icon: "water", time: "01:00", intensite: 7, forme: 6},
    {icon: "water", time: "01:00", intensite: 7, forme: 6},
    {icon: "water", time: "01:00", intensite: 7, forme: 6},
  ];
  
  month: any;
  date: Date;
  year: any;
  monthDays: any;
  weekDays: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.calendarMonth(new Date());
    this.calendarWeek(new Date());
    console.log(this.workouts);
    let mobHeight = (window.innerHeight);
    let mobWidth = (window.innerWidth);
    console.log(mobWidth+"x"+mobHeight);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  openSelectCalendar(){
    let modal = this.modalCtrl.create(SelectCalendarComponent, undefined, { cssClass: "modal-test" });
    modal.present();
  }

  goToActivities(d){
    this.navCtrl.push(ActivitiesPage, {date: d});
  }

  popMonth(){
    this.date.setDate(this.date.getDate()-1);
    this.calendarMonth(this.date);
  }

  addMonth(){
    this.date.setDate(this.date.getDate()+31);
    this.calendarMonth(this.date)
  }

  popWeek(){
    this.date.setDate(this.date.getDate()-2);
    this.calendarWeek(this.date);
  }

  addWeek(){
    this.date.setDate(this.date.getDate()+7);
    this.calendarWeek(this.date)
  }

  calendarMonth(day){
    this.date = new Date(day.getFullYear(), day.getMonth(), 1);
    this.month = day.getMonth();
    this.year = day.getFullYear();
    let tempDate: Date = new Date(day.getFullYear(), day.getMonth(), 1);
    let firstDay = (tempDate.getDay()+6) % 7;
    tempDate.setDate(tempDate.getDate()-firstDay);
    this.monthDays = [];

    for(let i = 0 ; i < 6 ; i++){
      let weekDay = [];
      for(let j = 0 ; j < 7 ; j++){
        weekDay.push({
          day: tempDate.getDate(),
          month: tempDate.getMonth() == day.getMonth(),
          date: new Date(tempDate),
          time: this.getRandomInt(4)+":"+this.getRandomInt(6)+this.getRandomInt(10),
          feeling: this.getRandomInt(11),
          dist: 11+this.getRandomInt(100),
          nbAct: this.getRandomInt(5)
        });
        tempDate.setDate(tempDate.getDate()+1);
      }
      this.monthDays.push(weekDay);
    }
  }

  calendarWeek(day){
    let dayDay = (day.getDay()+6) % 7;
    day.setDate(day.getDate()-dayDay);
    this.date = new Date(day);
    this.weekDays = [];
    
    for(let i = 0 ; i < 7 ; i++){
      this.weekDays.push({
        day: day.getDate(),
        month: day.getMonth() == day.getMonth(),
        date: new Date(day),
        time: this.getRandomInt(4)+":"+this.getRandomInt(6)+this.getRandomInt(10),
        feeling: this.getRandomInt(11),
        dist: 11+this.getRandomInt(1000),
        nbAct: this.getRandomInt(5)
      })
      day.setDate(day.getDate()+1);
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
