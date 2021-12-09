import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './components/maps/maps.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FirebaseService } from './services/firebase.service';
import { NotifyService } from './services/notify.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MapsEventsListComponent } from './components/maps-events-list/maps-events-list.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NotificationMessageComponent } from './components/notification-message/notification-message.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-profile', component: UserProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    MapsComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserProfileComponent,
    MapsEventsListComponent,
    LandingComponent,
    NotificationMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuu4TRrEA0mMTH3pf4tlbylX0JnpOFVqI'
    }),
    NgbModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [FirebaseService, NotifyService, NgbCarouselConfig],
  bootstrap: [AppComponent],
  entryComponents: [
    NavigationComponent,
    HomeComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserProfileComponent,
    LandingComponent]
})
export class AppModule { }
