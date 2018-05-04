import { Component, ViewChild  } from '@angular/core';
import { Slides, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  pageSignIn = false;
  firstPage = true;
  key = "userData";

  private auth = {
    loggedin: false,
    name: '',
    profilePicture: '',
    email: ''
  } 

  constructor( private fire: AngularFireAuth, public NavCtrl: NavController, 
    public navParams : NavParams, private storage: Storage) {
      if(this.navParams.get('logout') != undefined){
        this.logout();
        storage.remove(this.key);
      }

      fire.auth.onAuthStateChanged(function(user){
        if(user){
          NavCtrl.setRoot(TabsPage, {user: user});
        }
      })
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad HomePage');
  }

  //login with Facebook's auth services
  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res => {
      this.login(res);
    })
  }

  //login with google's auth services
  loginWithGoogle(){
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( res => {
      this.login(res);
    })
  }

  //définir les paramètres de l'utilisateur
  login(param){
    if(param.user != undefined){
      this.auth.loggedin = true;
      this.auth.name = param.user.displayName;
      this.auth.email = param.user.email;
      this.auth.profilePicture = param.user.photoURL;
      this.storage.set(this.key, this.auth);
      console.log(param);
      console.log("Home : You have logged in the app.")
      this.NavCtrl.setRoot(TabsPage, {user: this.auth});
    }
  }

  //se déconnecter de l'application
  logout(){
    this.fire.auth.signOut();
    this.auth = {
      loggedin: false,
      name: '',
      profilePicture: '',
      email: ''
    }
    console.log("Home : You have been logged out the app.");
  }

  //passe the slide until the end's one
  goToSignIn(){
    while(!this.slides.isEnd())
      this.slides.slideNext(1500);
  }

  //go to next slide
  goToNext(){
    this.slides.slideNext(600);
  }

  //go to previous slide
  goToPrevious(){
    this.slides.slidePrev(600);
  }

  //check var at each slide action
  whichPage(){
    this.pageSignIn = this.slides.isEnd();
    this.firstPage = this.slides.isBeginning();
  }

}