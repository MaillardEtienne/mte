import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TabsPage } from '../pages/tabs/tabs';
import { CoachPage } from '../pages/coach/coach';
import { AthletePage } from '../pages/athlete/athlete';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';
import { ActivitiesPage } from '../pages/activities/activities';
import { SelectCalendarComponent } from '../components/select-calendar/select-calendar';

var config = {
  apiKey: "AIzaSyAisjnM5ZYmRc3eeEsoQRQjMxXbgVBZYgo",
  authDomain: "mtev0-220ce.firebaseapp.com",
  databaseURL: "https://mtev0-220ce.firebaseio.com",
  projectId: "mtev0-220ce",
  storageBucket: "mtev0-220ce.appspot.com",
  messagingSenderId: "834890528676"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountPage,
    DashboardPage,
    TabsPage,
    CoachPage,
    AthletePage,
    ActivitiesPage,
    SelectCalendarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccountPage,
    DashboardPage,
    TabsPage,
    CoachPage,
    AthletePage,
    ActivitiesPage,
    SelectCalendarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
