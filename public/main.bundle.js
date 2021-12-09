webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation (createComponent)=\"createComponent($event)\"></app-navigation>\n<ng-template #componentContainer></ng-template>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_profile_user_profile_component__ = __webpack_require__("./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_user_register_component__ = __webpack_require__("./src/app/components/user-register/user-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_login_user_login_component__ = __webpack_require__("./src/app/components/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_landing_landing_component__ = __webpack_require__("./src/app/components/landing/landing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = /** @class */ (function () {
    function AppComponent(db, resolver, router, afAuth, firebaseService) {
        this.resolver = resolver;
        this.router = router;
        this.afAuth = afAuth;
        this.firebaseService = firebaseService;
        this.title = 'app';
        this.componentType = 'LandingComponent';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getEvents().subscribe(function (events) {
            _this.events = events;
            console.log('root components = ');
            console.log(_this.events);
            _this.createComponent(_this.componentType); // always make the home component first
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.componentRef.destroy();
    };
    AppComponent.prototype.createComponent = function (type) {
        console.log('Root creating ' + type);
        this.componentType = type;
        switch (type) {
            case 'HomeComponent':
                this.createHomeComponent();
                break;
            case 'LoginComponent':
                this.createLoginComponent();
                break;
            case 'ProfileComponent':
                this.createProfileComponent();
                break;
            case 'RegisterComponent':
                this.createRegisterComponent();
                break;
            case 'LandingComponent':
                this.createLandingComponent();
        }
    };
    AppComponent.prototype.createHomeComponent = function () {
        var _this = this;
        // console.log("createHomeComponent called");
        this.container.clear();
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.events = this.events;
        this.componentRef.instance.onEventsChange.subscribe(function (events) { return _this.eventsChange(events); });
    };
    AppComponent.prototype.createLoginComponent = function () {
        var _this = this;
        // console.log("createLoginComponent called");
        this.container.clear();
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__components_user_login_user_login_component__["a" /* UserLoginComponent */]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.events = this.events;
        this.componentRef.instance.createComponent.subscribe(function (type) { return _this.createComponent(type); });
    };
    AppComponent.prototype.createProfileComponent = function () {
        var _this = this;
        // console.log("createProfileComponent called");
        this.container.clear();
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__components_user_profile_user_profile_component__["a" /* UserProfileComponent */]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.events = this.events;
        this.componentRef.instance.onEventsChange.subscribe(function (events) { return _this.eventsChange(events); });
    };
    AppComponent.prototype.createRegisterComponent = function () {
        var _this = this;
        // console.log("createRegisterComponent called");
        this.container.clear();
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__components_user_register_user_register_component__["a" /* UserRegisterComponent */]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.events = this.events;
        this.componentRef.instance.createComponent.subscribe(function (type) { return _this.createComponent(type); });
    };
    AppComponent.prototype.createLandingComponent = function () {
        var _this = this;
        console.log('createLandingComponent called');
        this.container.clear();
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_9__components_landing_landing_component__["a" /* LandingComponent */]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.events = this.events;
        this.componentRef.instance.createComponent.subscribe(function (type) { return _this.createComponent(type); });
    };
    AppComponent.prototype.eventsChange = function (updatedEvents) {
        console.log('Root eventsChange called');
        this.events = updatedEvents;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('componentContainer', {
            read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */]
        }),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "container", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_7__services_firebase_service__["a" /* FirebaseService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navigation_navigation_component__ = __webpack_require__("./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_maps_maps_component__ = __webpack_require__("./src/app/components/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_register_user_register_component__ = __webpack_require__("./src/app/components/user-register/user-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_login_user_login_component__ = __webpack_require__("./src/app/components/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_notify_service__ = __webpack_require__("./src/app/services/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_profile_user_profile_component__ = __webpack_require__("./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_maps_events_list_maps_events_list_component__ = __webpack_require__("./src/app/components/maps-events-list/maps-events-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_landing_landing_component__ = __webpack_require__("./src/app/components/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_notification_message_notification_message_component__ = __webpack_require__("./src/app/components/notification-message/notification-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */] },
    { path: 'user-register', component: __WEBPACK_IMPORTED_MODULE_14__components_user_register_user_register_component__["a" /* UserRegisterComponent */] },
    { path: 'user-login', component: __WEBPACK_IMPORTED_MODULE_15__components_user_login_user_login_component__["a" /* UserLoginComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_19__components_user_profile_user_profile_component__["a" /* UserProfileComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_user_register_user_register_component__["a" /* UserRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_maps_events_list_maps_events_list_component__["a" /* MapsEventsListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_notification_message_notification_message_component__["a" /* NotificationMessageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDuu4TRrEA0mMTH3pf4tlbylX0JnpOFVqI'
                }),
                __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24_ng2_search_filter__["a" /* Ng2SearchPipeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_17__services_notify_service__["a" /* NotifyService */], __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__components_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_user_register_user_register_component__["a" /* UserRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_landing_landing_component__["a" /* LandingComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#right-menu {\n  position: absolute;\n  right: 0;\n  top: 4em;\n  z-index: 1;\n  margin: 30px;\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<app-maps [events]=\"events\" (eventsChange)=\"eventsChange($event)\"></app-maps>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.onEventsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](); // outputs to root component
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.ngOnChanges = function (changes) {
        // console.log("Home ngOnChanges called");
        var updatedEvents = changes["events"].currentValue;
        this.eventsChange(updatedEvents);
        return;
    };
    // receives output from maps component
    HomeComponent.prototype.eventsChange = function (updatedEvents) {
        // console.log("Home received events change from maps: ")
        this.events = updatedEvents;
        // console.log("Home events after update: ");
        // console.log(this.events);
        this.onEventsChange.emit(this.events);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], HomeComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "onEventsChange", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/***/ (function(module, exports) {

module.exports = "#main {\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n}\n\n.images {\n  width: 100vw;\n  height: 70vh;\n}\n\n.carousel-caption {\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.testimonials_images {\n  width: 15vw;\n  display: block;\n  margin: auto;\n}\n\nhr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #212529;\n}\n\nhr.light {\n  border-color: #fff;\n}\n\na {\n  color: #212529;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\na:hover {\n  color: #212529;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n}\n\n.bg-primary {\n  background-color: #212529 !important;\n}\n\n.bg-dark {\n  background-color: #212529 !important;\n}\n\n.text-faded {\n  color: rgba(255, 255, 255, 0.7);\n}\n\nsection {\n  padding: 8rem 0;\n}\n\n.section-heading {\n  margin-top: 0;\n}\n\n::-moz-selection {\n  color: #fff;\n  background: #212529;\n  text-shadow: none;\n}\n\n::selection {\n  color: #fff;\n  background: #212529;\n  text-shadow: none;\n}\n\nimg::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\nimg::selection {\n  color: #fff;\n  background: transparent;\n}\n\nimg::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\nheader.masthead {\n  padding-top: 10rem;\n  padding-bottom: calc(10rem - 56px);\n  /* background-image: url(\"../img/header.jpg\"); */\n  background-position: center center;\n  background-size: cover;\n}\n\nheader.masthead hr {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\nheader.masthead h1 {\n  font-size: 2rem;\n}\n\nheader.masthead p {\n  font-weight: 300;\n}\n\n@media (min-width: 768px) {\n  header.masthead p {\n    font-size: 1.15rem;\n  }\n}\n\n@media (min-width: 992px) {\n  header.masthead {\n    height: 100vh;\n    min-height: 650px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  header.masthead h1 {\n    font-size: 3rem;\n  }\n}\n\n@media (min-width: 1200px) {\n  header.masthead h1 {\n    font-size: 4rem;\n  }\n}\n\n.service-box {\n  max-width: 400px;\n}\n\n.portfolio-box {\n  position: relative;\n  display: block;\n  max-width: 650px;\n  margin: 0 auto;\n}\n\n.portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #fff;\n  background:#212529;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n}\n\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category,\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {\n  padding: 0 15px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n}\n\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {\n  font-size: 18px;\n}\n\n.portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n}\n\n.portfolio-box:focus {\n  outline: none;\n}\n\n@media (min-width: 768px) {\n  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {\n    font-size: 16px;\n  }\n  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {\n    font-size: 22px;\n  }\n}\n\n.text-primary {\n  color: #212529 !important;\n}\n\n.btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n}\n\n.btn-xl {\n  padding: 1rem 2rem;\n}\n\n.btn-primary {\n  background-color: #212529;\n  border-color: #212529;\n}\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active {\n  color: #fff;\n  background-color: #212529 !important;\n}\n\n.btn-primary:active,\n.btn-primary:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(240, 95, 64, 0.5) !important;\n          box-shadow: 0 0 0 0.2rem rgba(240, 95, 64, 0.5) !important;\n}\n\nh3{\n  text-shadow:\n\t\t-1px -1px 0 #000,\n\t\t1px -1px 0 #000,\n\t\t-1px 1px 0 #000,\n\t\t1px 1px 0 #000;\n}"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n  <div class=\"header\">\n    <ngb-carousel *ngIf=\"images\">\n      <ng-template ngbSlide>\n        <img [src]=\"images[0]\" alt=\"Random first slide\" class=\"images\">\n        <div class=\"carousel-caption\">\n          <h3>Get around campus easily</h3>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <img [src]=\"images[3]\" alt=\"Random second slide\" class=\"images\">\n        <div class=\"carousel-caption\">\n          <h3>Avoid the crowds</h3>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <img [src]=\"images[2]\" alt=\"Random third slide\" class=\"images\">\n        <div class=\"carousel-caption\">\n          <h3>Easy to use interface</h3>\n        </div>\n      </ng-template>\n    </ngb-carousel>\n  </div>\n\n  <div class=\"bg-dark\" id=\"about\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto text-center\">\n          <br>\n          <h2 class=\"section-heading text-white\">Hassle-free Campus Maps</h2>\n          <hr class=\"light my-4\">\n          <p class=\"text-faded mb-4\">See where all the annoying people are around campus! Get around campus a lot quicker!</p>\n          <button class=\"btn btn-light btn-xl\" (click)=\"changeComponent('HomeComponent')\">Get Started!</button>\n          <br>\n          <br>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"services\">\n    <br>\n    <br>\n    <br>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2 class=\"section-heading\">Instructions</h2>\n          <hr class=\"my-4\">\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6 text-center\">\n          <div class=\"service-box mt-5 mx-auto\">\n            <i class=\"fa fa-4x fa-diamond text-primary mb-3 sr-icons\"></i>\n            <img src=\"assets/1.png\" class=\"testimonials_images\">\n            <h3 class=\"mb-3\">1. Select a Point</h3>\n            <p class=\"text-muted mb-0\">Select a point on the map that you wish to create an obstacle at.</p>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 text-center\">\n          <div class=\"service-box mt-5 mx-auto\">\n            <i class=\"fa fa-4x fa-paper-plane text-primary mb-3 sr-icons\"></i>\n            <img src=\"assets/2.png\" class=\"testimonials_images\">\n            <h3 class=\"mb-3\">2. Description</h3>\n            <p class=\"text-muted mb-0\">Type in a quick description of the obstacle or event so others will know what is going on.</p>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 text-center\">\n          <div class=\"service-box mt-5 mx-auto\">\n            <i class=\"fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons\"></i>\n            <img src=\"assets/3.png\" class=\"testimonials_images\">\n            <h3 class=\"mb-3\">3. Like or Dislike</h3>\n            <p class=\"text-muted mb-0\">Like or dislike events to rate the obstacle or event and help other knights!</p>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 text-center\">\n          <div class=\"service-box mt-5 mx-auto\">\n            <i class=\"fa fa-4x fa-heart text-primary mb-3 sr-icons\"></i>\n            <img src=\"assets/4.png\" class=\"testimonials_images\">\n            <h3 class=\"mb-3\">4. Delete</h3>\n            <p class=\"text-muted mb-0\">The event will automatically delete itself when it reaches 100 dislikes or can be manually deleted by the creator.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <br>\n    <br>\n  </div>\n\n  <div class=\"bg-dark text-white\">\n    <br>\n    <br>\n    <br>\n    <div class=\"container text-center\">\n      <h2 class=\"mb-4\">Testimonials</h2>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <img src=\"assets/woman2.png\" class=\"testimonials_images\">\n          <blockquote class=\"quote text-center\">\n            <p class=\"mb-0\">\"I will recommend you to my colleagues. Pegasus Path should be nominated for service of the year. I'd be lost\n              without Pegasus Path. Without Pegasus Path, we would have gone bankrupt by now.\"</p>\n            <footer class=\"blockquote-footer\">\n              <cite title=\"Source Title\">Christie I</cite>\n            </footer>\n          </blockquote>\n        </div>\n\n        <div class=\"col-sm\">\n          <img src=\"assets/man1.png\" class=\"testimonials_images\">\n          <blockquote class=\"quote text-center\">\n            <p class=\"mb-0\">\"Thank you so much for your help. Wow what great service, I love it! I'd be lost without Pegasus Path.\"</p>\n            <footer class=\"blockquote-footer\">\n              <cite title=\"Source Title\">Rodolph C.</cite>\n            </footer>\n          </blockquote>\n        </div>\n\n        <div class=\"col-sm\">\n          <img src=\"assets/woman1.png\" class=\"testimonials_images\">\n          <blockquote class=\"quote text-center\">\n            <p class=\"mb-0\">\"It fits our needs perfectly. I would like to personally thank you for your outstanding product. I will refer\n              everyone I know. I don't know what else to say.\"</p>\n            <footer class=\"blockquote-footer\">\n              <cite title=\"Source Title\">Catharina M.</cite>\n            </footer>\n          </blockquote>\n        </div>\n\n        <div class=\"col-sm\">\n          <img src=\"assets/man2.png\" class=\"testimonials_images\">\n          <blockquote class=\"quote text-center\">\n            <p class=\"mb-0\">\"If you aren't sure, always go for Pegasus Path. Pegasus Path impressed me on multiple levels. Man, this thing\n              is getting better and better as I learn more about it.\"</p>\n            <footer class=\"blockquote-footer\">\n              <cite title=\"Source Title\">Jack F.</cite>\n            </footer>\n          </blockquote>\n        </div>\n\n      </div>\n    </div>\n    <br>\n  </div>\n\n  <div id=\"contact\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto text-center\">\n          <br>\n          <br>\n          <h2 class=\"section-heading\">Feedback!</h2>\n          <hr class=\"my-4\">\n          <p class=\"mb-5\">If you would like to provide feedback to report problems or feature requests about our application, give us a call\n            or send us an email!</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 ml-auto text-center\">\n          <i class=\"fa fa-phone fa-3x mb-3 sr-contact\"></i>\n          <p>123-456-6789</p>\n        </div>\n        <div class=\"col-lg-4 mr-auto text-center\">\n          <i class=\"fa fa-envelope-o fa-3x mb-3 sr-contact\"></i>\n          <p>\n            <a href=\"mailto:feedbackl@pegasuspath.com\">feedback@pegasuspath.com</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LandingComponent = /** @class */ (function () {
    function LandingComponent(firebaseService, fb, router, _http, config) {
        this.firebaseService = firebaseService;
        this.fb = fb;
        this.router = router;
        this._http = _http;
        this.config = config;
        this.createComponent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.images = ['https://www.ucf.edu/files/2012/08/regional-campuses.jpg', 'https://www.ucf.edu/files/2012/08/downtown.jpg', 'https://www.ucffoundation.org/view.image?Id=620',
            'https://undergrad.ucf.edu/whatsnext/wp-content/uploads/2016/02/About.jpg'];
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.changeComponent = function (type) {
        this.createComponent.emit(type);
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], LandingComponent.prototype, "createComponent", void 0);
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__("./src/app/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/maps-events-list/maps-events-list.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 20pt;\n}\n\n.up{\n  background-color:#0f0;\n  width:35px;\n  height:35px;\n  text-align:center;\n  display:inline-block;\n  border-radius:6px;\n  padding:5px;\n}\n\n.down{\n  background-color:#0f0;\n  width:35px;\n  height:35px;\n  text-align:center;\n  display:inline-block;\n  border-radius:6px;\n  padding:5px;\n}\n\n.search:after {\n  background: linear-gradient(-45deg, #ffffff 16px, transparent 0), linear-gradient(45deg, #ffffff 16px, transparent 0);\n  background-position: left-bottom;\n  background-repeat: repeat-x;\n  background-size: 35px 35px;\n  content: \" \";\n  display: block;\n  right: 0px;\n  position: absolute;\n  top: 27vh;\n  width: 100%;\n  height: 32px;\n  padding-bottom:0px;\n}\n\n.bottom {\n  margin-right: 5px;\n  margin-left: 5px;\n  vertical-align:center;\n}\n\nh1 {\n\n  font-size: 20pt;\n  text-align: center;\n  margin-bottom: -20px;\n  margin-top: -10px;\n}\n\n#events {\n  padding-top:10px;\n  background: #FFFFFF;\n  text-align: center;\n  overflow-y: scroll;\n  height: 56vh;\n  width: 28vw;\n  padding-right: 25px;\n  right: -10px;\n  position:relative;\n}\n\n#ghettoImSorry {\n  position: fixed;\n  background-color: #495159;\n  width: 31vw;\n  height: 31.5vh;\n  right: 0px;\n  top: 0px;\n}\n\nh6 {\n  font-size:15px;\n}\n\n#floatingwhatever{\n  color:#fff;\n  -webkit-transition-duration: 0.4s;\n  /* Safari */\n  transition-duration: 0.4s;\n  opacity:0.87;\n  position:absolute;\n  width:250px;\n  padding:10px;\n  background-color:#495159;\n  left:2px;\n  bottom:2px;\n  z-index:1000;\n  border-radius:6px;\n}\n\nh2{\n  font-weight: bold;\n  font-size:12pt;\n}"

/***/ }),

/***/ "./src/app/components/maps-events-list/maps-events-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ghettoImSorry\"></div>\n\n<div class=\"search\">\n\n  <div class=\"card mb-4\" style=\"padding: 20px;\">\n    <h1>Search for an Event</h1>\n    <br>\n    <input type=\"text\" [(ngModel)]=\"term\" class=\"form-control\" placeholder=\"Search for an event...\">\n  </div>\n</div>\n\n<br>\n<br>\n<h1>Active Events</h1>\n<br>\n<hr>\n<div id=\"events\">\n\n  <div *ngIf=\"events?.length > 0\" class=\"container\">\n    <div *ngFor=\"let event of events | filter:term\" class=\"collection\">\n      <div class=\"card mb-4\">\n    <div *ngIf=\"events?.length > 0\" class=\"container\">\n      <div *ngFor=\"let event of events | filter:term\" class=\"collection\">\n          <div class=\"card mb-4\">\n            <br>\n            <h2>{{event.name}}</h2>\n            <br>\n            <table>\n              <tr>\n              <button class=\"upvote\" (click)=\"likeUpdate(event)\">🌟</button>　{{event.like}}\n              　　\n              <button class=\"downvote\" (click)=\"dislikeUpdate(event)\">💥</button>　{{event.dislike}}\n              </tr>\n              </table>\n        <br>\n        <h2>{{event.name}}</h2>\n        <br>\n        <table>\n          <tr>\n            <button class=\"btn btn-primary\" (click)=\"flyToOnClick(event)\">Fly Here!</button>\n\n          </tr>\n        </table>\n        <br>\n      </div>\n    </div>\n\n    <br>\n  </div>\n</div>\n\n\n<div *ngIf=\"firebaseService.user | async; then authenticated else guest\"></div>\n\n<ng-template #guest>\n  <div id=\"floatingwhatever\">\n    <h6>Welcome, Guest!</h6>\n    <h6>Please login to get started.</h6>\n  </div>>\n</ng-template>\n\n<ng-template #authenticated>\n  <div id=\"floatingwhatever\">\n\n    <form [formGroup]=\"eventForm\" (ngSubmit)=\"registerEvent()\">\n      <div *ngIf=\"latitude && longitude; then point else nopoint\">\n      </div>\n      <ng-template #point>\n        <h6>Point selected on map</h6>\n        <div class=\"form-group\">\n          <input type=\"name\" id=\"name\" class=\"form-control\" formControlName=\"name\" placeholder=\"Name of event\">\n        </div>\n        <div class=\"form-group\" style=\"display: none;\">\n          <input type=\"latitude\" id=\"latitude\" class=\"form-control\" formControlName=\"latitude\">\n        </div>\n        <div class=\"form-group\" style=\"display: none;\">\n          <input type=\"longitude\" id=\"longitude\" class=\"form-control\" formControlName=\"longitude\">\n        </div>\n        <div align=\"center\">\n          <button [disabled]=\"!eventForm.valid\" type=\"submit\" class=\"btn btn-primary\">Add Event</button>\n        </div>\n      </ng-template>\n      <ng-template #nopoint>\n        <h6>Hi, {{ user.firstname }} {{ user.lastname }}!</h6>\n        <h6>Click where you would like to drop a pin.</h6>\n      </ng-template>\n\n    </form>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/maps-events-list/maps-events-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsEventsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TODO: Move all form functionality to separate component
var MapsEventsListComponent = /** @class */ (function () {
    function MapsEventsListComponent(fb, firebaseService) {
        this.fb = fb;
        this.firebaseService = firebaseService;
        this.eventsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.flyTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    MapsEventsListComponent.prototype.ngOnInit = function () { this.buildForm(); };
    MapsEventsListComponent.prototype.ngOnChanges = function (changes) {
        var updatedEvents = changes['events'];
        var updatedLatitude = changes['latitude'];
        var updatedLongitude = changes['longitude'];
        var updatedUser = changes['user'];
        if (updatedEvents != null) {
            this.events = updatedEvents.currentValue;
        }
        if (updatedLatitude != null) {
            this.latitude = updatedLatitude.currentValue;
            this.eventForm.patchValue({
                latitude: this.latitude
            });
        }
        if (updatedLongitude != null) {
            this.longitude = updatedLongitude.currentValue;
            this.eventForm.patchValue({
                longitude: this.longitude
            });
        }
        if (updatedUser != null) {
            this.user = updatedUser.currentValue;
        }
        return;
    };
    MapsEventsListComponent.prototype.buildForm = function () {
        this.eventForm = this.fb.group({
            'name': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            'latitude': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            'longitude': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    };
    MapsEventsListComponent.prototype.deleteEvent = function (event) {
        this.firebaseService.deleteEvent(event);
        var index = this.events.indexOf(event);
        this.events.splice(index, 1);
        this.eventsChange.emit(this.events);
    };
    MapsEventsListComponent.prototype.flyToOnClick = function (event) { this.flyTo.emit(event); };
    MapsEventsListComponent.prototype.registerEvent = function () {
        // users
        var data = {
            name: this.eventForm.value['name'],
            uid: this.user.uid,
            longitude: this.longitude,
            latitude: this.latitude,
            like: 1,
            dislike: 0,
            userlikelist: [],
            userdislikelist: []
        };
        data.userlikelist.push(this.user.uid);
        this.firebaseService.addEvent(data);
        this.events.push(data);
        this.eventsChange.emit(this.events);
    };
    MapsEventsListComponent.prototype.likeUpdate = function (event) {
        var likelen = event.userlikelist.length;
        var dislikelen = event.userdislikelist.length;
        var len;
        if (likelen > dislikelen) {
            len = likelen;
        }
        else {
            len = dislikelen;
        }
        for (var i = 0; i < len; i++) {
            if (event.userlikelist[i] === this.user.uid) {
                return;
            }
            else if (event.userdislikelist[i] === this.user.uid) {
                event.dislike--;
                event.userdislikelist.splice(i, 1);
            }
        }
        event.userlikelist[likelen] = this.user.uid;
        event.like++;
        var total = event.like + event.dislike;
        var likePercentToShow = event.like / total * 100;
        var dislikePercentToShow = event.dislike / total * 100;
        event.likePercent = Math.round(likePercentToShow);
        event.dislikePercent = Math.round(dislikePercentToShow);
        this.firebaseService.updateEvent(event);
    };
    MapsEventsListComponent.prototype.dislikeUpdate = function (event) {
        var likelen = event.userlikelist.length;
        var dislikelen = event.userdislikelist.length;
        var len;
        if (likelen > dislikelen) {
            len = likelen;
        }
        else {
            len = dislikelen;
        }
        for (var i = 0; i < len; i++) {
            if (event.userdislikelist[i] === this.user.uid) {
                return;
            }
            else if (event.userlikelist[i] === this.user.uid) {
                event.like--;
                event.userlikelist.splice(i, 1);
            }
        }
        event.userdislikelist[dislikelen] = this.user.uid;
        event.dislike++;
        var total = event.like + event.dislike;
        var likePercentToShow = event.like / total * 100;
        var dislikePercentToShow = event.dislike / total * 100;
        event.likePercent = Math.round(likePercentToShow);
        event.dislikePercent = Math.round(dislikePercentToShow);
        this.firebaseService.updateEvent(event);
        if (event.dislike - event.like >= 10) {
            this.firebaseService.deleteEvent(event);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], MapsEventsListComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], MapsEventsListComponent.prototype, "latitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], MapsEventsListComponent.prototype, "longitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], MapsEventsListComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], MapsEventsListComponent.prototype, "eventsChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], MapsEventsListComponent.prototype, "flyTo", void 0);
    MapsEventsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-maps-events-list',
            template: __webpack_require__("./src/app/components/maps-events-list/maps-events-list.component.html"),
            styles: [__webpack_require__("./src/app/components/maps-events-list/maps-events-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]])
    ], MapsEventsListComponent);
    return MapsEventsListComponent;
}());



/***/ }),

/***/ "./src/app/components/maps/maps.component.css":
/***/ (function(module, exports) {

module.exports = "\n#mapid {\n  height:93vh;\n  width:70vw;\n  left:-15px;\n  top:-24px;\n  z-index:100;\n  /* position:fixed; */\n}\n.row {\n  width: 98%;\n  height: 100vh;\n  margin: auto;\n}\n/*\n.col-4 {\n  overflow-y: scroll;\n}\n*/"

/***/ }),

/***/ "./src/app/components/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n  \n  <div id=\"mapid\"></div>\n\n  \n  <!-- <div class=\"col-4\"> -->\n    <app-maps-events-list [events]=\"events\" [latitude]=\"mouselat\" [longitude]=\"mouselng\" [user]=\"user\"\n    (flyTo)=\"flyTo($event)\" (eventsChange)=\"onEventsChange($event)\"></app-maps-events-list>\n    \n  </div>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/components/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_routing_machine__ = __webpack_require__("./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_routing_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet_routing_machine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapsComponent = /** @class */ (function () {
    function MapsComponent(fb, firebaseService) {
        this.fb = fb;
        this.firebaseService = firebaseService;
        this.eventsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // UCF coordinates
        this.lat = 28.6024;
        this.lng = -81.2001;
        this.zoom = 15;
        this.event = {
            eid: '',
            uid: '',
            name: '',
            longitude: 0,
            latitude: 0,
            like: 0,
            dislike: 0
        };
    }
    MapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildMap();
        this.getMarkers();
        this.user = this.firebaseService.getUser().subscribe(function (user) {
            _this.user = user;
            _this.userEvents = _this.firebaseService.getEvents().subscribe(function (events) {
                var userEvents = new Array();
                for (var i = 0; i < events.length; i++) {
                    if (events[i].uid == _this.user.uid) {
                        userEvents.push(events[i]);
                    }
                }
                _this.userEvents = userEvents;
            });
        });
    };
    MapsComponent.prototype.ngOnChanges = function (changes) {
        var change = changes["events"].currentValue;
        this.events = change;
        this.updateMarkers();
        return;
    };
    MapsComponent.prototype.ngAfterContentInit = function () { };
    MapsComponent.prototype.updateMarkers = function () {
        if (this.events == null) {
            return;
        }
        for (var i = 0; i < this.events.length; i++) {
            var event = this.events[i];
            var index = this.events.indexOf(event);
            if (index < 0) {
                // console.log(this.events[i])
                var lng = this.events[i].longitude;
                var lat = this.events[i].latitude;
                var popupContent = '<div><p class="wordwrap"><strong>' + this.events[i].name + '</strong></p></div>';
                var marker = new __WEBPACK_IMPORTED_MODULE_1_leaflet__["marker"]({ lng: lng, lat: lat })
                    .bindPopup(popupContent, { maxWidth: 250 })
                    .addTo(this.map);
            }
        }
        return;
    };
    MapsComponent.prototype.buildMap = function () {
        var _this = this;
        var UCFcoords = __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"](28.6014, -81.2001);
        var topLeft = __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"](28.6116, -81.2073);
        var bottomRight = __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"](28.5912, -81.1929);
        var bounds = __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLngBounds"](topLeft, bottomRight);
        var mymap = __WEBPACK_IMPORTED_MODULE_1_leaflet__["map"]('mapid', {
            center: UCFcoords,
            zoom: 16,
            minZoom: 16,
            maxBounds: bounds
        });
        this.map = mymap;
        __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibm90YWthbmUiLCJhIjoiY2plNHdqeXphMnBjbzJ4bW9kNDJxZHk2eSJ9.pViraf7NrFYgzmnqTd_vgQ', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        }).addTo(mymap);
        var prevDirections = 0;
        var directions;
        var userloc;
        // create popup onclick
        this.map.on('click', function (click) {
            var coordDest = mymap.mouseEventToLatLng(click.originalEvent);
            _this.mouselat = coordDest.lat;
            _this.mouselng = coordDest.lng;
            if (_this.user != null) {
                var popup = __WEBPACK_IMPORTED_MODULE_1_leaflet__["popup"]()
                    .setLatLng(coordDest)
                    .setContent('<h6>You will be placing a marker here</h6>')
                    .openOn(mymap);
            }
        });
    };
    MapsComponent.prototype.getMarkers = function () {
        if (this.events != null) {
            for (var i = 0; i < this.events.length; i++) {
                // console.log(this.events[i])
                var lng = this.events[i].longitude;
                var lat = this.events[i].latitude;
                var popupContent = '<div><p class="wordwrap"><strong>' + this.events[i].name + '</strong></p></div>';
                var marker = new __WEBPACK_IMPORTED_MODULE_1_leaflet__["marker"]({ lng: lng, lat: lat })
                    .bindPopup(popupContent, { maxWidth: 250 })
                    .addTo(this.map);
            }
            return;
        }
    };
    // maps events list functions
    MapsComponent.prototype.onEventsChange = function (updatedEvents) {
        this.eventsChange.emit(updatedEvents);
    };
    MapsComponent.prototype.flyTo = function (data) {
        this.lng = data.longitude;
        this.lat = data.latitude;
        var latlng = __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"](this.lat, this.lng);
        console.log(latlng);
        this.map.flyTo(latlng, 18);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], MapsComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], MapsComponent.prototype, "eventsChange", void 0);
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-maps',
            template: __webpack_require__("./src/app/components/maps/maps.component.html"),
            styles: [__webpack_require__("./src/app/components/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  font-family: Pattaya;\n  font-size: 40pt;\n  line-height: 1pt;\n  text-shadow: 1px 1px 25px rgb(134, 134, 134);\n}\n\nbutton {\n  font-family: Pattaya;\n  font-size: 15pt;\n  line-height: 12pt;\n  letter-spacing: 3px;\n  color: #FFF;\n  background-color: transparent;\n  border: none;\n}\n\nbutton:hover,\n.navbar-brand:hover {\n  -webkit-transition-duration: 0.4s;\n  /* Safari */\n  transition-duration: 0.4s;\n  text-shadow: 1px 1px 20px rgba(255, 255, 48, 0.945);\n}\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n  <a class=\"navbar-brand\" (click)=\"changeComponent('LandingComponent')\" style=\"color: #ffffff;\">Pegasus Path\n    <font size=\"5px\" color=\"#FFE34D\">✶</font>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div *ngIf=\"firebaseService.user | async; then authenticated else guest\">\n  </div>\n\n  <ng-template #guest>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarCollapse\">\n      <button (click)=\"changeComponent('LandingComponent')\" class=\"nav-link\">Home</button>\n      <button (click)=\"changeComponent('HomeComponent')\" class=\"nav-link\">Map</button>\n      <button (click)=\"changeComponent('LoginComponent')\" class=\"nav-link\">Login</button>\n      <button (click)=\"changeComponent('RegisterComponent')\" class=\"nav-link\">Register</button>\n    </div>\n  </ng-template>\n\n  <ng-template #authenticated>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarCollapse\">\n      <button (click)=\"changeComponent('LandingComponent')\" class=\"nav-link\">Home</button>\n      <button (click)=\"changeComponent('HomeComponent')\" class=\"nav-link\">Map</button>\n      <button (click)=\"changeComponent('ProfileComponent')\" class=\"nav-link\">Profile</button>\n      <button (click)=\"firebaseService.signOut()\" href=\"\" class=\"nav-link\">Logout</button>\n    </div>\n  </ng-template>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, afAuth, firebaseService) {
        this.router = router;
        this.afAuth = afAuth;
        this.firebaseService = firebaseService;
        this.createComponent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    NavigationComponent.prototype.changeComponent = function (type) {
        this.createComponent.emit(type);
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "createComponent", void 0);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/components/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification-message/notification-message.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notification-message/notification-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"notify.msg | async as msg\" class=\"notification\"\n  [ngClass]=\"{ \n    'is-danger': msg.style == 'error',\n    'is-success': msg.style == 'success',\n    'is-info': msg.style == 'info'\n  }\">\n  <button class=\"delete\" (click)=\"notify.clear()\"></button>\n  {{ msg.content }}\n</div>"

/***/ }),

/***/ "./src/app/components/notification-message/notification-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notify_service__ = __webpack_require__("./src/app/services/notify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationMessageComponent = /** @class */ (function () {
    function NotificationMessageComponent(notify) {
        this.notify = notify;
    }
    NotificationMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notification-message',
            template: __webpack_require__("./src/app/components/notification-message/notification-message.component.html"),
            styles: [__webpack_require__("./src/app/components/notification-message/notification-message.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notify_service__["a" /* NotifyService */]])
    ], NotificationMessageComponent);
    return NotificationMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/user-login/user-login.component.css":
/***/ (function(module, exports) {

module.exports = "#bg{\n  background-image:url(\"https://coderspaghetti.files.wordpress.com/2015/07/starmap03b.jpg\");\n  width:100vw;\n  height:100vh;\n  background-repeat:no-repeat;\n  background-position:center;\n}\n\n.mid{\n  color:#fff;\n  width:40vw;\n  left:30vw;\n  top:29vh;\n  position:fixed;\n  text-align:center;\n  border-radius:6px;\n  background-color:#495159;\n  padding:20px;\n  z-index:10;\n\n}\n\nh4{\n  font-family:Pattaya;\n}"

/***/ }),

/***/ "./src/app/components/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bg\"></div>\n<br>\n<br>\n<br>\n<br>\n  <div class=\"mid\">\n    <h4>Login with Email</h4>\n    <br>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"loginUser()\">\n\n      <div class=\"form-group\">\n        <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n        <div *ngIf=\"formErrors.email\" class=\"notification is-danger\">\n          {{ formErrors.email }}\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n        <div *ngIf=\"formErrors.password\" class=\"notification is-danger\">\n          {{ formErrors.password }}\n        </div>\n      </div>\n      <br>\n      <button type=\"submit\" class=\"prim\" [disabled]=\"!userForm.valid\">Login</button>\n      　　\n      <!-- <button class=\"btn btn-primary\" [routerLink]=\"['/user-register']\" >New User?</button> -->\n      <button class=\"prim\" (click)=\"this.createComponent.emit('RegisterComponent')\">New User?</button>\n\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(firebaseService, fb, router) {
        this.firebaseService = firebaseService;
        this.fb = fb;
        this.router = router;
        this.createComponent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email',
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 6 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            },
        };
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserLoginComponent.prototype.loginUser = function () {
        var _this = this;
        // users
        this.firebaseService.emailLogin(this.userForm.value['email'], this.userForm.value['password'])
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email,
                ]],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25),
                ]]
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    UserLoginComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    if (control.errors) {
                        for (var key in control.errors) {
                            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                                this.formErrors[field] += messages[key] + " ";
                            }
                        }
                    }
                }
            }
        }
    };
    UserLoginComponent.prototype.afterSignIn = function () {
        //this.router.navigate(['/user-profile']);
        this.createComponent.emit('ProfileComponent');
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], UserLoginComponent.prototype, "createComponent", void 0);
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-login',
            template: __webpack_require__("./src/app/components/user-login/user-login.component.html"),
            styles: [__webpack_require__("./src/app/components/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = "\n#eventsList {\n  overflow-y: scroll;\n  height: 45vh;\n  width:90vw;\n  left:7vw;\n  position:relative;\n}\n\n.bottom {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\nh1 {\n  font-size: 20pt;\n  text-align: center;\n}\n\n.del{\n  bottom:0px;\n  position:relative;\n}\n\n.welcome{\n  color:#fff;\n  width:50vw;\n  left:25vw;\n  height:30vh;\n  top:0px;\n  position:relative;\n}\n\n.welcome:after {\n  background: linear-gradient(-45deg, #ffffff 16px, transparent 0), linear-gradient(45deg, #ffffff 16px, transparent 0);\n  background-position: left-bottom;\n  background-repeat: repeat-x;\n  background-size: 35px 35px;\n  content: \" \";\n  display: block;\n  right: 0px;\n  position: absolute;\n  top: 22vh;\n  width: 50vw;\n  height: 32px;\n  padding-bottom:0px;\n}\n\n#ghettoimsorry {\n  position: fixed;\n  background-color: #495159;\n  width: 50vw;\n  height: 40vh;\n  left: 25vw;\n  top: 0px;\n  -webkit-transition:height 2x;\n  -webkit-transition:height 2s;\n  transition:height 2s;\n}\n"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bg\"></div>\n<div id=\"ghettoimsorry\"></div>\n<br>\n<br>\n<br>\n<br>\n<div *ngIf=\"firebaseService.user | async; then authenticated else guest\">\n  <!-- template will replace this div -->\n</div>\n\n<!-- User NOT logged in -->\n<ng-template #guest>\n  <div class=\"welcome\">\n  <h3>Welcome, Guest</h3>\n  <hr>\n  <p>Please login to get started.</p>\n  </div>\n  <!-- <button (click)=\"firebaseService.googleLogin()\">\n        <i class=\"fa fa-google\"></i> Connect Google\n    </button> -->\n\n</ng-template>\n\n\n<!-- User logged in -->\n<ng-template #authenticated>\n  <div class=\"welcome\" *ngIf=\"firebaseService.user | async as user\">\n    <h3>{{ user.firstname }} {{user.lastname}}'s Profile</h3>\n    <hr>\n    <b>Email:</b> {{ user.email }}<br>\n    <b>User ID:</b> {{ user.uid}}\n  </div>\n\n  <h1>My Active Events</h1>\n<input type=\"text\" [(ngModel)]=\"term\" style=\"width:81vw;position:relative;left:10vw;\" class=\"form-control\" placeholder=\"Search for an event...\">\n\n  <div id=\"eventsList\">\n    <div *ngIf=\"events?.length > 0\" class=\"container\">\n      <div *ngFor=\"let event of events | filter:term\" class=\"collection\">\n        <div class=\"card mb-4\" style=\"margin:20px;height:20vh;width:25vw; align:center;float:left;\">\n            <div><b>{{event.name}}</b></div>\n          <br>\n          <table>\n              <tr>\n              <button class=\"upvote\" (click)=\"likeUpdate(event)\">🌟</button>\n               {{event.like}}\n              　　\n              <button class=\"downvote\" (click)=\"dislikeUpdate(event)\">💥</button>\n               {{event.dislike}}\n              </tr>\n         </table>\n         <br>\n         <button class=\"del\" (click)=\"deleteEvent(event)\">delete?</button>\n        </div>\n        </div>\n    </div>\n  </div>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(firebaseService, fb, router) {
        this.firebaseService = firebaseService;
        this.fb = fb;
        this.router = router;
        this.onEventsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.event = {
            name: '',
            longitude: 0,
            latitude: 0,
            like: 0,
            dislike: 0
        };
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.firebaseService.getUser().subscribe(function (user) {
            _this.user = user;
            var userEvents = [];
            for (var i = 0; i < _this.events.length; i++) {
                if (_this.events[i].uid === _this.user.uid) {
                    userEvents.push(_this.events[i]);
                }
            }
            _this.events = userEvents;
        });
        // this.user = this.firebaseService.getUser().subscribe(user => {
        //   this.user = user;
        //   this.events = this.firebaseService.getEvents().subscribe(events => {
        //     let userEvents = new Array();
        //     for (var i = 0; i < events.length; i++) {
        //       if (events[i].uid == this.user.uid) {
        //         userEvents.push(events[i]);
        //       }
        //     }
        //     this.events = userEvents;
        //   });
        // });
    };
    UserProfileComponent.prototype.ngOnChanges = function (changes) {
        console.log('Profile ngOnChanges called');
        var updatedEvents = changes["events"].currentValue;
        // if(this.events == updatedEvents || updatedEvents == null) { return; }
        this.events = updatedEvents;
        console.log("Profile events after ngOnChanges: ");
        console.log(this.events);
        var userEvents = [];
        for (var i = 0; i < this.events.length; i++) {
            if (this.events[i].uid === this.user.uid) {
                userEvents.push(this.events[i]);
            }
        }
        this.events = userEvents;
        return;
    };
    UserProfileComponent.prototype.eventsChange = function (updatedEvents) {
        // this.events = updatedEvents;
        // console.log("Updated profile component events: ");
        // console.log(this.events);
        // var userEvents = []
        // for (var i = 0; i < this.events.length; i++)
        // {
        //   if (this.events[i].uid == this.user.uid)
        //     {
        //       userEvents.push(this.events[i]);
        //     }
        // }
        // this.events = userEvents;
        // return;
    };
    UserProfileComponent.prototype.likeUpdate = function (event) {
        var likelen = event.userlikelist.length;
        var dislikelen = event.userdislikelist.length;
        var len;
        if (likelen > dislikelen) {
            len = likelen;
        }
        else {
            len = dislikelen;
        }
        for (var i = 0; i < len; i++) {
            if (event.userlikelist[i] === this.user.uid) {
                return;
            }
            else if (event.userdislikelist[i] === this.user.uid) {
                event.dislike--;
                event.userdislikelist.splice(i, 1);
            }
        }
        event.userlikelist[likelen] = this.user.uid;
        event.like++;
        var total = event.like + event.dislike;
        var likePercentToShow = event.like / total * 100;
        var dislikePercentToShow = event.dislike / total * 100;
        event.likePercent = Math.round(likePercentToShow);
        event.dislikePercent = Math.round(dislikePercentToShow);
        this.firebaseService.updateEvent(event);
    };
    UserProfileComponent.prototype.dislikeUpdate = function (event) {
        var likelen = event.userlikelist.length;
        var dislikelen = event.userdislikelist.length;
        var len;
        if (likelen > dislikelen) {
            len = likelen;
        }
        else {
            len = dislikelen;
        }
        for (var i = 0; i < len; i++) {
            if (event.userdislikelist[i] === this.user.uid) {
                return;
            }
            else if (event.userlikelist[i] === this.user.uid) {
                event.like--;
                event.userlikelist.splice(i, 1);
            }
        }
        event.userdislikelist[dislikelen] = this.user.uid;
        event.dislike++;
        var total = event.like + event.dislike;
        var likePercentToShow = event.like / total * 100;
        var dislikePercentToShow = event.dislike / total * 100;
        event.likePercent = Math.round(likePercentToShow);
        event.dislikePercent = Math.round(dislikePercentToShow);
        this.firebaseService.updateEvent(event);
        if (event.dislike - event.like >= 10) {
            this.firebaseService.deleteEvent(event);
        }
    };
    UserProfileComponent.prototype.deleteEvent = function (event) {
        this.firebaseService.deleteEvent(event);
        var index = this.events.indexOf(event);
        this.events.splice(index, 1);
        this.onEventsChange.emit(this.events);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], UserProfileComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], UserProfileComponent.prototype, "onEventsChange", void 0);
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user-register/user-register.component.css":
/***/ (function(module, exports) {

module.exports = "#bg{\n  background-image:url(\"https://coderspaghetti.files.wordpress.com/2015/07/starmap03b.jpg\");\n  width:100vw;\n  height:100vh;\n  background-repeat:no-repeat;\n  background-position:center;\n}\n\n.mid{\n  color:#fff;\n  width:40vw;\n  left:30vw;\n  top:25vh;\n  position:fixed;\n  text-align:center;\n  border-radius:6px;\n  background-color:#495159;\n  padding:20px;\n  z-index:10;\n\n}\n\nh4{\n  font-family:Pattaya;\n}"

/***/ }),

/***/ "./src/app/components/user-register/user-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bg\"></div>\n\n<br><br><br><br>\n<div class=\"mid\">\n    <h4>Register with Email</h4>\n    <br>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"registerUser()\">\n      <div class=\"form-group\">\n        <input type=\"firstname\" id=\"firstname\" class=\"form-control\" formControlName=\"firstname\" placeholder=\"First Name\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"lastname\" id=\"lastname\" class=\"form-control\" formControlName=\"lastname\" placeholder=\"Last Name\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n        <div *ngIf=\"formErrors.email\" class=\"notification is-danger\">\n          {{ formErrors.email }}\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n        <div *ngIf=\"formErrors.password\" class=\"notification is-danger\">\n          {{ formErrors.password }}\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"prim\" [disabled]=\"!userForm.valid\">Sign Up</button>\n      　　\n      <!--  <button class=\"btn btn-primary\" [routerLink]=\"['/user-login']\" >Already a User?</button> -->\n      <button class=\"prim\" (click)=\"this.createComponent.emit('LoginComponent')\" >Already a User?</button>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-register/user-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(firebaseService, fb, router) {
        this.firebaseService = firebaseService;
        this.fb = fb;
        this.router = router;
        this.createComponent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email',
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 6 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            },
        };
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserRegisterComponent.prototype.registerUser = function () {
        var _this = this;
        // users
        this.firebaseService.emailSignUp(this.userForm.value['firstname'], this.userForm.value['lastname'], this.userForm.value['email'], this.userForm.value['password']);
        // this.router.navigate(['/user-login']);
        this.firebaseService.emailLogin(this.userForm.value['email'], this.userForm.value['password'])
            .then(function () { return _this.afterSignIn(); });
        return;
    };
    UserRegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'firstname': ['', []],
            'lastname': ['', []],
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email,
                ]],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25),
                ]]
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    UserRegisterComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    if (control.errors) {
                        for (var key in control.errors) {
                            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                                this.formErrors[field] += messages[key] + " ";
                            }
                        }
                    }
                }
            }
        }
    };
    UserRegisterComponent.prototype.afterSignIn = function () {
        this.createComponent.emit('HomeComponent');
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], UserRegisterComponent.prototype, "createComponent", void 0);
    UserRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-register',
            template: __webpack_require__("./src/app/components/user-register/user-register.component.html"),
            styles: [__webpack_require__("./src/app/components/user-register/user-register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notify_service__ = __webpack_require__("./src/app/services/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FirebaseService = /** @class */ (function () {
    function FirebaseService(afAuth, afs, router, notify) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.notify = notify;
        this.user = this.afAuth.authState
            .switchMap(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].of(null);
            }
        });
        this.eventsCollection = this.afs.collection('events');
        this.events = this.eventsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.eid = a.payload.doc.id;
                return data;
            });
        });
    }
    ////// OAuth Methods /////
    FirebaseService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    FirebaseService.prototype.githubLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GithubAuthProvider();
        return this.oAuthLogin(provider);
    };
    FirebaseService.prototype.facebookLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider();
        return this.oAuthLogin(provider);
    };
    FirebaseService.prototype.twitterLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider();
        return this.oAuthLogin(provider);
    };
    FirebaseService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    //// Anonymous Auth ////
    FirebaseService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth.signInAnonymously()
            .then(function (user) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(user); // if using firestore
        })
            .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            _this.handleError(error);
        });
    };
    //// Email/Password Auth ////
    FirebaseService.prototype.emailSignUp = function (firstname, lastname, email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            user.firstname = firstname;
            user.lastname = lastname;
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(user); // if using firestore
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    FirebaseService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(user); // if using firestore
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Sends email allowing user to reset password
    FirebaseService.prototype.resetPassword = function (email) {
        var _this = this;
        var fbAuth = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]();
        return fbAuth.sendPasswordResetEmail(email)
            .then(function () { return _this.notify.update('Password update email sent', 'info'); })
            .catch(function (error) { return _this.handleError(error); });
    };
    FirebaseService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    // If error, console log and notify user
    FirebaseService.prototype.handleError = function (error) {
        console.error(error);
        this.notify.update(error.message, 'error');
    };
    // Sets user data to firestore after succesful login
    FirebaseService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        if (user.firstname === '') {
            user.firstname = 'N/A';
        }
        if (user.lastname === '') {
            user.lastname = 'N/A';
        }
        var data = {
            uid: user.uid,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email || null
        };
        return userRef.set(data);
    };
    // // Get user data from firestore
    FirebaseService.prototype.getUser = function () {
        return this.user;
    };
    FirebaseService.prototype.getEvents = function () {
        return this.events;
    };
    FirebaseService.prototype.addEvent = function (event) {
        this.eventsCollection.add(event);
    };
    FirebaseService.prototype.deleteEvent = function (event) {
        this.eventDocument = this.afs.doc("events/" + event.eid);
        this.eventDocument.delete();
    };
    FirebaseService.prototype.updateEvent = function (event) {
        this.eventDocument = this.afs.doc("events/" + event.eid);
        this.eventDocument.update(event);
    };
    FirebaseService.prototype.updateUser = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        return userRef.update(user);
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__notify_service__["a" /* NotifyService */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/services/notify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotifyService = /** @class */ (function () {
    function NotifyService() {
        this._msgSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.msg = this._msgSource.asObservable();
    }
    NotifyService.prototype.update = function (content, style) {
        var msg = { content: content, style: style };
        this._msgSource.next(msg);
    };
    NotifyService.prototype.clear = function () {
        this._msgSource.next(null);
    };
    NotifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCBPQsgFMNj9JRGM1u9JInc9qdtolGwfh8",
        authDomain: "cop4331c.firebaseapp.com",
        databaseURL: "https://cop4331c.firebaseio.com",
        projectId: "cop4331c",
        storageBucket: "cop4331c.appspot.com",
        messagingSenderId: "200522304857"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map