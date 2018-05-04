import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {

  date: Date;
  dateToString: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.date = this.navParams.get('date');
    this.dateToString = this.date.toDateString();
    console.log(this.date);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }

  goBack(){
    console.log("coucou");
    this.navCtrl.pop();
  }

  ionViewWillEnter(){
    this.navCtrl.swipeBackEnabled = true;
  }

  ionViewDidLeave(){
    this.navCtrl.swipeBackEnabled = false;
  }

}
