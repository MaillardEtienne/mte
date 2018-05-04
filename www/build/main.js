webpackJsonp([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(fire, NavCtrl, navParams, storage) {
        this.fire = fire;
        this.NavCtrl = NavCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.pageSignIn = false;
        this.firstPage = true;
        this.key = "userData";
        this.auth = {
            loggedin: false,
            name: '',
            profilePicture: '',
            email: ''
        };
        if (this.navParams.get('logout') != undefined) {
            this.logout();
            storage.remove(this.key);
        }
        fire.auth.onAuthStateChanged(function (user) {
            if (user) {
                NavCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { user: user });
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    //login with Facebook's auth services
    HomePage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.FacebookAuthProvider())
            .then(function (res) {
            _this.login(res);
        });
    };
    //login with google's auth services
    HomePage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider())
            .then(function (res) {
            _this.login(res);
        });
    };
    //définir les paramètres de l'utilisateur
    HomePage.prototype.login = function (param) {
        if (param.user != undefined) {
            this.auth.loggedin = true;
            this.auth.name = param.user.displayName;
            this.auth.email = param.user.email;
            this.auth.profilePicture = param.user.photoURL;
            this.storage.set(this.key, this.auth);
            console.log(param);
            console.log("Home : You have logged in the app.");
            this.NavCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { user: this.auth });
        }
    };
    //se déconnecter de l'application
    HomePage.prototype.logout = function () {
        this.fire.auth.signOut();
        this.auth = {
            loggedin: false,
            name: '',
            profilePicture: '',
            email: ''
        };
        console.log("Home : You have been logged out the app.");
    };
    //passe the slide until the end's one
    HomePage.prototype.goToSignIn = function () {
        while (!this.slides.isEnd())
            this.slides.slideNext(1500);
    };
    //go to next slide
    HomePage.prototype.goToNext = function () {
        this.slides.slideNext(600);
    };
    //go to previous slide
    HomePage.prototype.goToPrevious = function () {
        this.slides.slidePrev(600);
    };
    //check var at each slide action
    HomePage.prototype.whichPage = function () {
        this.pageSignIn = this.slides.isEnd();
        this.firstPage = this.slides.isBeginning();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\home\home.html"*/'<ion-content class="ion-content">\n\n  <!--START OF THE SLIDE-->\n  <ion-slides pager class="ion-slides" (ionSlideDidChange)="whichPage()" ionSlideWillChange="hideButton = true;">\n\n    <!--SLIDE 1-->\n    <ion-slide class="ion-slide slideAccueil" style="background-image: url(\'../../assets/imgs/slide1.jpg\');" padding>\n      <div class="darkCardBackground contentText">\n          <h1>Bienvenu sur l\'application <strong>My Training Experience</strong></h1>\n          <br>\n          <p>Vous retrouver sur cette application de <strong>nombreuses</strong> fonctions vous permettant d\'avoir un \n            <strong>suivi</strong><br>\n          de vos entrainements avec votre/vos <strong>coach</strong>.</p>\n      </div>\n    </ion-slide>\n  \n    <!--SLIDE 2-->\n    <ion-slide class="ion-slide" style="background-image: url(\'../../assets/imgs/slide2.jpg\');" padding>\n      <div class="darkCardBackground contentText">\n        <h1>Plus de personnalisation</h1>\n        <br>\n        <p>Grâce à notre application, vous pourrez <strong>suivre</strong> vos plans d\'entrainement <strong>à la lettre</strong><br>\n        tout en ayant un suivi de <strong>vos séances réalisés</strong> pour effectuer <strong>une analyse</strong>.</p>\n      </div>\n    </ion-slide>\n  \n    <!--SLIDE 3-->\n    <ion-slide class="ion-slide" style="background-image: url(\'../../assets/imgs/slide3.jpg\');">\n      <div class="darkCardBackground contentText">\n          <h1>Ne perdez pas de temps</h1>\n          <br>\n          <p><strong>Ajoutez</strong> vos coach lors de votre <strong>connexion</strong> pour pouvoir profiter de \n            <strong>toutes</strong> les fonctionnalitées de l\'application.</p>\n      </div>\n    </ion-slide>\n\n    <!--SLIDE 4-->\n    <ion-slide class="ion-slide" style="background-image: url(\'../../assets/imgs/slide4.jpg\');">\n      <div class="darkCardBackground contentText">\n      <h1>Connectez vous et essayez notre application dès maintenant</h1>\n      <br>\n      <p><strong>Utilisez</strong></p>\n      <button ion-button icon-right color="light" round large (click)="loginWithFacebook()">\n        Facebook <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <p><strong>ou</strong></p>\n      <button ion-button icon-right color="light" round large (click)="loginWithGoogle()">\n        Google <ion-icon name="logo-google"></ion-icon>\n      </button>\n      <p>pour vous connecter <strong>plus facilement</strong>.</p>\n    </div>\n    </ion-slide>\n\n  </ion-slides>\n  <!--END OF THE SLIDE--> \n\n  <!--BUTTON FOR THE CONNEXION-->\n  <button class="buttonConnexion"     [hidden]="pageSignIn" ion-button color="light" round (click)="goToSignIn($event)">\n    Se connecter\n  </button>\n\n  <!--BUTTON PREVIOUS AND NEXT SLIDE-->\n  <button class="prevNextButton prev" [hidden]="firstPage"  ion-button color="light" icon-only clear (click)="goToPrevious()">\n    <ion-icon name="arrow-back"></ion-icon>\n  </button>\n  <button class="prevNextButton next" [hidden]="pageSignIn" ion-button color="light" icon-only clear (click)="goToNext()">\n    <ion-icon name="arrow-forward"></ion-icon>\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\account\account.html"*/'<ion-header>\n    <ion-navbar swipeBackEnabled="true">\n        <ion-title>coucou</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivitiesPage = /** @class */ (function () {
    function ActivitiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.date = this.navParams.get('date');
        this.dateToString = this.date.toDateString();
        console.log(this.date);
    }
    ActivitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitiesPage');
    };
    ActivitiesPage.prototype.goBack = function () {
        console.log("coucou");
        this.navCtrl.pop();
    };
    ActivitiesPage.prototype.ionViewWillEnter = function () {
        this.navCtrl.swipeBackEnabled = true;
    };
    ActivitiesPage.prototype.ionViewDidLeave = function () {
        this.navCtrl.swipeBackEnabled = false;
    };
    ActivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activities',template:/*ion-inline-start:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\activities\activities.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="false" swipeBackEnabled="true">\n    <ion-title style="max-width: 980px; margin: auto;">\n      <button ion-button icon-only clear color="light" (click)="goBack()" class="backButton">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n      <div>Activities</div>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  {{dateToString}}\n</ion-content>\n'/*ion-inline-end:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\activities\activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CoachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachPage = /** @class */ (function () {
    function CoachPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoachPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachPage');
    };
    CoachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach',template:/*ion-inline-start:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\coach\coach.html"*/'<ion-header>\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\coach\coach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CoachPage);
    return CoachPage;
}());

//# sourceMappingURL=coach.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AthletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AthletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AthletePage = /** @class */ (function () {
    function AthletePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AthletePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AthletePage');
    };
    AthletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-athlete',template:/*ion-inline-start:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\athlete\athlete.html"*/'<ion-header>\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\athlete\athlete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AthletePage);
    return AthletePage;
}());

//# sourceMappingURL=athlete.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities_activities__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_select_calendar_select_calendar__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.daysName = [
            { full: "Lundi", min: "Lu" },
            { full: "Mardi", min: "Ma" },
            { full: "Mercredi", min: "Me" },
            { full: "Jeudi", min: "Je" },
            { full: "Vendredi", min: "Ve" },
            { full: "Samedi", min: "Sa" },
            { full: "Dimanche", min: "Di" }
        ];
        this.monthsName = [
            { full: "Janvier", min: "Janv" },
            { full: "Février", min: "Févr" },
            { full: "Mars", min: "Mars" },
            { full: "Avril", min: "Avri" },
            { full: "Mai", min: "Mai" },
            { full: "Juin", min: "Juin" },
            { full: "Juillet", min: "Juil" },
            { full: "Août", min: "Août" },
            { full: "Septembre", min: "Sept" },
            { full: "Octobre", min: "Oct" },
            { full: "Novembre", min: "Nov" },
            { full: "Decembre", min: "Dec" }
        ];
        this.workouts = [
            { icon: "body", time: "01:00", intensite: 7, forme: 6 },
            { icon: "walk", time: "01:00", intensite: 7, forme: 6 },
            { icon: "bicycle", time: "01:00", intensite: 7, forme: 6 },
            { icon: "water", time: "01:00", intensite: 7, forme: 6 },
            { icon: "water", time: "01:00", intensite: 7, forme: 6 },
            { icon: "water", time: "01:00", intensite: 7, forme: 6 },
        ];
        this.calendarMonth(new Date());
        this.calendarWeek(new Date());
        console.log(this.workouts);
        var mobHeight = (window.innerHeight);
        var mobWidth = (window.innerWidth);
        console.log(mobWidth + "x" + mobHeight);
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.openSelectCalendar = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_select_calendar_select_calendar__["a" /* SelectCalendarComponent */], undefined, { cssClass: "modal-test" });
        modal.present();
    };
    DashboardPage.prototype.goToActivities = function (d) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__activities_activities__["a" /* ActivitiesPage */], { date: d });
    };
    DashboardPage.prototype.popMonth = function () {
        this.date.setDate(this.date.getDate() - 1);
        this.calendarMonth(this.date);
    };
    DashboardPage.prototype.addMonth = function () {
        this.date.setDate(this.date.getDate() + 31);
        this.calendarMonth(this.date);
    };
    DashboardPage.prototype.popWeek = function () {
        this.date.setDate(this.date.getDate() - 2);
        this.calendarWeek(this.date);
    };
    DashboardPage.prototype.addWeek = function () {
        this.date.setDate(this.date.getDate() + 7);
        this.calendarWeek(this.date);
    };
    DashboardPage.prototype.calendarMonth = function (day) {
        this.date = new Date(day.getFullYear(), day.getMonth(), 1);
        this.month = day.getMonth();
        this.year = day.getFullYear();
        var tempDate = new Date(day.getFullYear(), day.getMonth(), 1);
        var firstDay = (tempDate.getDay() + 6) % 7;
        tempDate.setDate(tempDate.getDate() - firstDay);
        this.monthDays = [];
        for (var i = 0; i < 6; i++) {
            var weekDay = [];
            for (var j = 0; j < 7; j++) {
                weekDay.push({
                    day: tempDate.getDate(),
                    month: tempDate.getMonth() == day.getMonth(),
                    date: new Date(tempDate),
                    time: this.getRandomInt(4) + ":" + this.getRandomInt(6) + this.getRandomInt(10),
                    feeling: this.getRandomInt(11),
                    dist: 11 + this.getRandomInt(100),
                    nbAct: this.getRandomInt(5)
                });
                tempDate.setDate(tempDate.getDate() + 1);
            }
            this.monthDays.push(weekDay);
        }
    };
    DashboardPage.prototype.calendarWeek = function (day) {
        var dayDay = (day.getDay() + 6) % 7;
        day.setDate(day.getDate() - dayDay);
        this.date = new Date(day);
        this.weekDays = [];
        for (var i = 0; i < 7; i++) {
            this.weekDays.push({
                day: day.getDate(),
                month: day.getMonth() == day.getMonth(),
                date: new Date(day),
                time: this.getRandomInt(4) + ":" + this.getRandomInt(6) + this.getRandomInt(10),
                feeling: this.getRandomInt(11),
                dist: 11 + this.getRandomInt(1000),
                nbAct: this.getRandomInt(5)
            });
            day.setDate(day.getDate() + 1);
        }
    };
    DashboardPage.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\dashboard\dashboard.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title style="max-width: 980px; margin: auto;">Calendrier</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list class="headerTable">\n        <ion-list-header class="largeMonth">\n            <div style="display: flex; justify-content: space-around; align-items: center;">\n                <button ion-button icon-only clear round class="prevNextButton" (click)="popMonth()">\n                    <ion-icon name="arrow-back"></ion-icon>                        \n                </button>\n                <h2>\n                    {{monthsName[month].full}} - {{year}}\n                </h2>\n                <button ion-button icon-only clear round class="prevNextButton" (click)="addMonth()">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                </button>\n            </div>\n        </ion-list-header>\n        <ion-list-header class="tinyWeek">\n            <div style="display: flex; justify-content: space-around; align-items: center;">\n                <button ion-button icon-only clear round class="prevNextButton" (click)="popWeek()">\n                    <ion-icon name="arrow-back"></ion-icon>                        \n                </button>\n                <h2>\n                    Du {{weekDays[0].date | date:\'dd/MM/yy\'}} au {{weekDays[6].date | date:\'dd/MM/yy\'}}\n                </h2>\n                <button ion-button icon-only clear round class="prevNextButton" (click)="addWeek()">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                </button>\n            </div>\n        </ion-list-header>\n    </ion-list>\n    <ion-card class="tinyWeek">\n        <ion-list>\n            <ion-item *ngFor="let day of weekDays; let i = index" (click)="goToActivities(day.date)">\n        \n                <p class="dayBackground" style="position: absolute; width: 170px; font-size: 4.2rem;">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col col-6>{{daysName[i].min}}</ion-col>\n                            <ion-col col-6>{{day.day}}</ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </p>\n                <div class="dayData">\n                    <ion-badge title="Durée totale" class="standard">\n                        {{day.time}}&nbsp;<ion-icon name="stopwatch"></ion-icon><!--stopwatch-->\n                    </ion-badge>\n                    <ion-badge title="Distance totale" class="dist standard">\n                        {{day.dist}}&nbsp;km<!--ion-icon name="map"></ion-icon><!--stopwatch-->\n                    </ion-badge>\n                    <ion-badge title="Ressenti moyen" class="standard" [ngClass]="day.feeling < 4 ? \'badFeeling\' : (day.feeling <7 ? \'mediumFeeling\' : \'goodFeeling\')">\n                        {{day.feeling}}&nbsp;\n                        <ion-icon name="thumbs-down" *ngIf="day.feeling < 5"></ion-icon>\n                        <ion-icon name="thumbs-up" *ngIf="day.feeling >= 5"></ion-icon>\n                    </ion-badge>\n                    <div title="Liste des activités" class="standardIcon">\n                        <ion-icon name="water"></ion-icon> \n                        <ion-icon name="bicycle"></ion-icon> \n                        <ion-icon name="walk"></ion-icon> \n                        <ion-icon name="body"></ion-icon>\n                    </div>\n                </div>\n\n            </ion-item>\n        </ion-list>\n    </ion-card>\n    <table class="largeMonth">\n        <thead>\n            <tr>\n                <th *ngFor="let day of daysName">\n                    <ion-card style="height: auto;">\n                        {{day.full}}\n                    </ion-card>\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor="let week of monthDays">\n                <td *ngFor="let day of week">\n                    <ion-card [ngClass]="day.month? \'dayCard\' : \'dayCard otherMonth\'" (click)="goToActivities(day.date)">\n                        <p class="dayBackground" style="position: absolute;">{{day.day}}</p>\n                        <div class="dayData">\n                            <div><ion-badge title="Durée totale" class="standard">\n                                {{day.time}}&nbsp;<ion-icon name="time"></ion-icon><!--stopwatch-->\n                            </ion-badge></div>\n                            <div><ion-badge title="Distance totale" class="dist standard">\n                                {{day.dist}}&nbsp;km<!--ion-icon name="map"></ion-icon><!--stopwatch-->\n                            </ion-badge></div>\n                            <div><ion-badge title="Ressenti moyen" class="standard" [ngClass]="day.feeling < 4 ? \'badFeeling\' : (day.feeling <7 ? \'mediumFeeling\' : \'goodFeeling\')">\n                                {{day.feeling}}&nbsp;\n                                <ion-icon name="thumbs-down" *ngIf="day.feeling < 5"></ion-icon>\n                                <ion-icon name="thumbs-up" *ngIf="day.feeling >= 5"></ion-icon>\n                            </ion-badge></div>\n                            <div title="Liste des activités" class="standardIcon">\n                                <ion-icon name="water"></ion-icon> \n                                <ion-icon name="bicycle"></ion-icon> \n                                <ion-icon name="walk"></ion-icon> \n                                <ion-icon name="body"></ion-icon>\n                            </div>\n                        </div>\n                    </ion-card>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <button ion-button round (click)="openSelectCalendar();">test</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _c || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		449,
		4
	],
	"../pages/activities/activities.module": [
		450,
		3
	],
	"../pages/athlete/athlete.module": [
		452,
		2
	],
	"../pages/coach/coach.module": [
		451,
		1
	],
	"../pages/dashboard/dashboard.module": [
		453,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectCalendarComponent = /** @class */ (function () {
    function SelectCalendarComponent() {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__();
        this.dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.weeks = [];
        this.sortedDates = [];
        this.selectedDates = [];
        this.onSelectDate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SelectCalendarComponent.prototype.ngOnInit = function () {
        this.generateCalendar();
    };
    SelectCalendarComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedDates &&
            changes.selectedDates.currentValue &&
            changes.selectedDates.currentValue.length > 1) {
            // sort on date changes for better performance when range checking
            this.sortedDates = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](changes.selectedDates.currentValue, function (m) { return m.mDate.valueOf(); });
            this.generateCalendar();
        }
    };
    // date checkers
    SelectCalendarComponent.prototype.isToday = function (date) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__().isSame(__WEBPACK_IMPORTED_MODULE_1_moment__(date), 'day');
    };
    SelectCalendarComponent.prototype.isSelected = function (date) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"](this.selectedDates, function (selectedDate) {
            return __WEBPACK_IMPORTED_MODULE_1_moment__(date).isSame(selectedDate.mDate, 'day');
        }) > -1;
    };
    SelectCalendarComponent.prototype.isSelectedMonth = function (date) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(date).isSame(this.currentDate, 'month');
    };
    SelectCalendarComponent.prototype.selectDate = function (date) {
        this.onSelectDate.emit(date);
    };
    // actions from calendar
    SelectCalendarComponent.prototype.prevMonth = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).subtract(1, 'months');
        this.generateCalendar();
    };
    SelectCalendarComponent.prototype.nextMonth = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).add(1, 'months');
        this.generateCalendar();
    };
    SelectCalendarComponent.prototype.firstMonth = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).startOf('year');
        this.generateCalendar();
    };
    SelectCalendarComponent.prototype.lastMonth = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).endOf('year');
        this.generateCalendar();
    };
    SelectCalendarComponent.prototype.prevYear = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).subtract(1, 'year');
        this.generateCalendar();
    };
    SelectCalendarComponent.prototype.nextYear = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).add(1, 'year');
        this.generateCalendar();
    };
    // generate the calendar grid
    SelectCalendarComponent.prototype.generateCalendar = function () {
        var dates = this.fillDates(this.currentDate);
        var weeks = [];
        while (dates.length > 0) {
            weeks.push(dates.splice(0, 7));
        }
        this.weeks = weeks;
    };
    SelectCalendarComponent.prototype.fillDates = function (currentMoment) {
        var _this = this;
        var firstOfMonth = __WEBPACK_IMPORTED_MODULE_1_moment__(currentMoment).startOf('month').day();
        var firstDayOfGrid = __WEBPACK_IMPORTED_MODULE_1_moment__(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
        var start = firstDayOfGrid.date();
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](start, start + 42)
            .map(function (date) {
            var d = __WEBPACK_IMPORTED_MODULE_1_moment__(firstDayOfGrid).date(date);
            return {
                today: _this.isToday(d),
                selected: _this.isSelected(d),
                mDate: d,
            };
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectCalendarComponent.prototype, "selectedDates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectCalendarComponent.prototype, "onSelectDate", void 0);
    SelectCalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'select-calendar',template:/*ion-inline-start:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\components\select-calendar\select-calendar.html"*/'<div class="calendar">\n  <div class="calendar-navs">\n    <div class="year-nav">\n      <button (click)="prevYear()">&lt;</button>\n      <span>{{ currentDate | date:\'yyyy\' }}</span>\n      <button (click)="nextYear()">&gt;</button>\n    </div>\n    <div class="month-nav">\n      <button (click)="prevMonth()">&lt;</button>\n      <span class="p4">{{ currentDate | date:\'MMMM\' }}</span>\n      <button (click)="nextMonth()">&gt;</button>\n    </div>\n  </div>\n  <div class="month-grid">\n    <div class="day-names">\n      <div *ngFor="let name of dayNames" class="day-name p9">\n        {{ name }}\n      </div>\n    </div>\n    <div class="weeks">\n      <div *ngFor="let week of weeks" class="week">\n        <ng-container *ngFor="let day of week">\n          <div class="week-date disabled" *ngIf="!isSelectedMonth(day.mDate)">\n            <span class="date-text">{{ day.mDate.date() }}</span>\n          </div>\n          <div class="week-date enabled"\n                *ngIf="isSelectedMonth(day.mDate)"\n                (click)="selectDate(day)"\n                [ngClass]="{ today: day.today, selected: day.selected }">\n            <span class="date-text">{{ day.mDate.date() }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\components\select-calendar\select-calendar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SelectCalendarComponent);
    return SelectCalendarComponent;
}());

//# sourceMappingURL=select-calendar.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__athlete_athlete__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coach_coach__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__athlete_athlete__["a" /* AthletePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__coach_coach__["a" /* CoachPage */];
        this.user = this.navParams.get('user');
        console.log(this.user);
    }
    TabsPage.prototype.changeTitle = function (tab) {
        this.title = tab.tabTitle;
    };
    TabsPage.prototype.goToAccount = function (fab) {
        fab.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__account_account__["a" /* AccountPage */]);
    };
    TabsPage.prototype.logout = function (fab) {
        fab.close();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], { logout: true });
        console.log("coucou");
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\tabs\tabs.html"*/'<ion-fab top right #fab style="right: 20px;">\n\n    <button ion-fab class="steelgrayButton">\n\n        <img src="{{user.photoURL}}">\n\n    </button>\n\n    <ion-fab-list style="right: 0px; align-items: flex-end;">\n\n        <button ion-button round icon-start class="steelgrayButton" (click)="goToAccount(fab)"><ion-icon name="person"></ion-icon>Mon compte</button>\n\n        <button ion-button round icon-start class="steelgrayButton" (click)="goToAccount(fab)"><ion-icon name="information-circle"></ion-icon>A propos</button>\n\n        <button ion-button round icon-start class="steelgrayButton" (click)="logout(fab)"><ion-icon name="log-out"></ion-icon>Se déconnecter</button>\n\n    </ion-fab-list>\n\n</ion-fab>\n\n\n\n<ion-tabs (ionChange)="changeTitle($event)">\n\n    <ion-tab tabIcon="calendar" tabTitle="Accueil" [root]="tab1Root"></ion-tab>\n\n    <ion-tab tabIcon="contact" tabTitle="Mes athlètes" [root]="tab2Root"></ion-tab>\n\n    <ion-tab tabIcon="contact" tabTitle="Mes coachs" [root]="tab3Root"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_coach_coach__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_athlete_athlete__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_activities_activities__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_select_calendar_select_calendar__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var config = {
    apiKey: "AIzaSyAisjnM5ZYmRc3eeEsoQRQjMxXbgVBZYgo",
    authDomain: "mtev0-220ce.firebaseapp.com",
    databaseURL: "https://mtev0-220ce.firebaseio.com",
    projectId: "mtev0-220ce",
    storageBucket: "mtev0-220ce.appspot.com",
    messagingSenderId: "834890528676"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_coach_coach__["a" /* CoachPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_athlete_athlete__["a" /* AthletePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_select_calendar_select_calendar__["a" /* SelectCalendarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/activities.module#ActivitiesPageModule', name: 'ActivitiesPage', segment: 'activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach/coach.module#CoachPageModule', name: 'CoachPage', segment: 'coach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/athlete/athlete.module#AthletePageModule', name: 'AthletePage', segment: 'athlete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_coach_coach__["a" /* CoachPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_athlete_athlete__["a" /* AthletePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_select_calendar_select_calendar__["a" /* SelectCalendarComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 164,
	"./af.js": 164,
	"./ar": 165,
	"./ar-dz": 166,
	"./ar-dz.js": 166,
	"./ar-kw": 167,
	"./ar-kw.js": 167,
	"./ar-ly": 168,
	"./ar-ly.js": 168,
	"./ar-ma": 169,
	"./ar-ma.js": 169,
	"./ar-sa": 170,
	"./ar-sa.js": 170,
	"./ar-tn": 171,
	"./ar-tn.js": 171,
	"./ar.js": 165,
	"./az": 172,
	"./az.js": 172,
	"./be": 173,
	"./be.js": 173,
	"./bg": 174,
	"./bg.js": 174,
	"./bm": 175,
	"./bm.js": 175,
	"./bn": 176,
	"./bn.js": 176,
	"./bo": 177,
	"./bo.js": 177,
	"./br": 178,
	"./br.js": 178,
	"./bs": 179,
	"./bs.js": 179,
	"./ca": 180,
	"./ca.js": 180,
	"./cs": 181,
	"./cs.js": 181,
	"./cv": 182,
	"./cv.js": 182,
	"./cy": 183,
	"./cy.js": 183,
	"./da": 184,
	"./da.js": 184,
	"./de": 185,
	"./de-at": 186,
	"./de-at.js": 186,
	"./de-ch": 187,
	"./de-ch.js": 187,
	"./de.js": 185,
	"./dv": 188,
	"./dv.js": 188,
	"./el": 189,
	"./el.js": 189,
	"./en-au": 190,
	"./en-au.js": 190,
	"./en-ca": 191,
	"./en-ca.js": 191,
	"./en-gb": 192,
	"./en-gb.js": 192,
	"./en-ie": 193,
	"./en-ie.js": 193,
	"./en-il": 194,
	"./en-il.js": 194,
	"./en-nz": 195,
	"./en-nz.js": 195,
	"./eo": 196,
	"./eo.js": 196,
	"./es": 197,
	"./es-do": 198,
	"./es-do.js": 198,
	"./es-us": 199,
	"./es-us.js": 199,
	"./es.js": 197,
	"./et": 200,
	"./et.js": 200,
	"./eu": 201,
	"./eu.js": 201,
	"./fa": 202,
	"./fa.js": 202,
	"./fi": 203,
	"./fi.js": 203,
	"./fo": 204,
	"./fo.js": 204,
	"./fr": 205,
	"./fr-ca": 206,
	"./fr-ca.js": 206,
	"./fr-ch": 207,
	"./fr-ch.js": 207,
	"./fr.js": 205,
	"./fy": 208,
	"./fy.js": 208,
	"./gd": 209,
	"./gd.js": 209,
	"./gl": 210,
	"./gl.js": 210,
	"./gom-latn": 211,
	"./gom-latn.js": 211,
	"./gu": 212,
	"./gu.js": 212,
	"./he": 213,
	"./he.js": 213,
	"./hi": 214,
	"./hi.js": 214,
	"./hr": 215,
	"./hr.js": 215,
	"./hu": 216,
	"./hu.js": 216,
	"./hy-am": 217,
	"./hy-am.js": 217,
	"./id": 218,
	"./id.js": 218,
	"./is": 219,
	"./is.js": 219,
	"./it": 220,
	"./it.js": 220,
	"./ja": 221,
	"./ja.js": 221,
	"./jv": 222,
	"./jv.js": 222,
	"./ka": 223,
	"./ka.js": 223,
	"./kk": 224,
	"./kk.js": 224,
	"./km": 225,
	"./km.js": 225,
	"./kn": 226,
	"./kn.js": 226,
	"./ko": 227,
	"./ko.js": 227,
	"./ky": 228,
	"./ky.js": 228,
	"./lb": 229,
	"./lb.js": 229,
	"./lo": 230,
	"./lo.js": 230,
	"./lt": 231,
	"./lt.js": 231,
	"./lv": 232,
	"./lv.js": 232,
	"./me": 233,
	"./me.js": 233,
	"./mi": 234,
	"./mi.js": 234,
	"./mk": 235,
	"./mk.js": 235,
	"./ml": 236,
	"./ml.js": 236,
	"./mn": 237,
	"./mn.js": 237,
	"./mr": 238,
	"./mr.js": 238,
	"./ms": 239,
	"./ms-my": 240,
	"./ms-my.js": 240,
	"./ms.js": 239,
	"./mt": 241,
	"./mt.js": 241,
	"./my": 242,
	"./my.js": 242,
	"./nb": 243,
	"./nb.js": 243,
	"./ne": 244,
	"./ne.js": 244,
	"./nl": 245,
	"./nl-be": 246,
	"./nl-be.js": 246,
	"./nl.js": 245,
	"./nn": 247,
	"./nn.js": 247,
	"./pa-in": 248,
	"./pa-in.js": 248,
	"./pl": 249,
	"./pl.js": 249,
	"./pt": 250,
	"./pt-br": 251,
	"./pt-br.js": 251,
	"./pt.js": 250,
	"./ro": 252,
	"./ro.js": 252,
	"./ru": 253,
	"./ru.js": 253,
	"./sd": 254,
	"./sd.js": 254,
	"./se": 255,
	"./se.js": 255,
	"./si": 256,
	"./si.js": 256,
	"./sk": 257,
	"./sk.js": 257,
	"./sl": 258,
	"./sl.js": 258,
	"./sq": 259,
	"./sq.js": 259,
	"./sr": 260,
	"./sr-cyrl": 261,
	"./sr-cyrl.js": 261,
	"./sr.js": 260,
	"./ss": 262,
	"./ss.js": 262,
	"./sv": 263,
	"./sv.js": 263,
	"./sw": 264,
	"./sw.js": 264,
	"./ta": 265,
	"./ta.js": 265,
	"./te": 266,
	"./te.js": 266,
	"./tet": 267,
	"./tet.js": 267,
	"./tg": 268,
	"./tg.js": 268,
	"./th": 269,
	"./th.js": 269,
	"./tl-ph": 270,
	"./tl-ph.js": 270,
	"./tlh": 271,
	"./tlh.js": 271,
	"./tr": 272,
	"./tr.js": 272,
	"./tzl": 273,
	"./tzl.js": 273,
	"./tzm": 274,
	"./tzm-latn": 275,
	"./tzm-latn.js": 275,
	"./tzm.js": 274,
	"./ug-cn": 276,
	"./ug-cn.js": 276,
	"./uk": 277,
	"./uk.js": 277,
	"./ur": 278,
	"./ur.js": 278,
	"./uz": 279,
	"./uz-latn": 280,
	"./uz-latn.js": 280,
	"./uz.js": 279,
	"./vi": 281,
	"./vi.js": 281,
	"./x-pseudo": 282,
	"./x-pseudo.js": 282,
	"./yo": 283,
	"./yo.js": 283,
	"./zh-cn": 284,
	"./zh-cn.js": 284,
	"./zh-hk": 285,
	"./zh-hk.js": 285,
	"./zh-tw": 286,
	"./zh-tw.js": 286
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 384;

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Documents\ProjetPerso\MTEv1\mte_v0.4\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[337]);
//# sourceMappingURL=main.js.map