import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef,
  ViewChild,
  ChangeDetectorRef,
  TemplateRef
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';
import {
  NavigationComponent
} from './components/navigation/navigation.component';
import {
  HomeComponent
} from './components/home/home.component';
import {
  UserProfileComponent
} from './components/user-profile/user-profile.component';
import {
  UserRegisterComponent
} from './components/user-register/user-register.component';
import {
  UserLoginComponent
} from './components/user-login/user-login.component';
import {
  Router
} from '@angular/router';
import {
  AngularFireAuth
} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {
  FirebaseService
} from './services/firebase.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import {
  Event
} from './models/event';
import {
  LandingComponent
} from './components/landing/landing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  componentType = 'LandingComponent';
  componentRef: ComponentRef < any > ;
  events: Event[];

  @ViewChild('componentContainer', {
    read: ViewContainerRef
  }) container;

  constructor(db: AngularFirestore,
    private resolver: ComponentFactoryResolver,
    private router: Router,
    public afAuth: AngularFireAuth,
    private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getEvents().subscribe(events => {
      this.events = events;
      console.log('root components = ');
      console.log(this.events);
      this.createComponent(this.componentType); // always make the home component first
    });
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  createComponent(type: string) {
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
  }

  createHomeComponent() {
    // console.log("createHomeComponent called");
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(HomeComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.events = this.events;
    this.componentRef.instance.onEventsChange.subscribe(events => this.eventsChange(events));
  }

  createLoginComponent() {
    // console.log("createLoginComponent called");
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(UserLoginComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.events = this.events;
    this.componentRef.instance.createComponent.subscribe(type => this.createComponent(type));
  }

  createProfileComponent() {
    // console.log("createProfileComponent called");
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(UserProfileComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.events = this.events;
    this.componentRef.instance.onEventsChange.subscribe(events => this.eventsChange(events));
  }

  createRegisterComponent() {
    // console.log("createRegisterComponent called");
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(UserRegisterComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.events = this.events;
    this.componentRef.instance.createComponent.subscribe(type => this.createComponent(type));
  }

  createLandingComponent() {
    console.log('createLandingComponent called');
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(LandingComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.events = this.events;
    this.componentRef.instance.createComponent.subscribe(type => this.createComponent(type));
  }

  eventsChange(updatedEvents: Event[]) {
    console.log('Root eventsChange called');
    this.events = updatedEvents;
  }
}
