import { Component  } from '@angular/core';
import { AccountPage } from '../account/account';
import { DashboardPage } from '../dashboard/dashboard';
import { AthletePage } from '../athlete/athlete';
import { CoachPage } from '../coach/coach';
import { NavController, NavParams, FabContainer } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Tab } from 'ionic-angular/navigation/nav-interfaces';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1Root = DashboardPage;
    tab2Root = AthletePage;
    tab3Root = CoachPage;
    title: String;
    user: any;

    constructor(public navCtrl: NavController, private navParams: NavParams){
        this.user = this.navParams.get('user');
        console.log(this.user);
    }

    changeTitle(tab: Tab){
        this.title = tab.tabTitle;
    }

    goToAccount(fab: FabContainer){
        fab.close();
        this.navCtrl.push(AccountPage);
    }

    logout(fab: FabContainer){
        fab.close();
        this.navCtrl.setRoot(HomePage,{logout: true});
        console.log("coucou");
    }
}