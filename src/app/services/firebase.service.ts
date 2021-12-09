import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { NotifyService } from './notify.service';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { Event } from '../models/event';


@Injectable()
export class FirebaseService {

  user: Observable<User | null>;
  // userCollection: AngularFirestoreCollection<User>;

  eventsCollection: AngularFirestoreCollection<Event>;
  events: Observable<Event[]>;
  eventDocument: AngularFirestoreDocument<Event>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private notify: NotifyService) {

    this.user = this.afAuth.authState
      .switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });

    this.eventsCollection = this.afs.collection('events');

    this.events = this.eventsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Event;
        data.eid = a.payload.doc.id;
        return data;
      });
    });



  }


  ////// OAuth Methods /////
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.notify.update('Welcome to Firestarter!!!', 'success');
        return this.updateUserData(credential.user);
      })
      .catch((error) => this.handleError(error) );
  }

  //// Anonymous Auth ////
  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.notify.update('Welcome to Firestarter!!!', 'success');
        return this.updateUserData(user); // if using firestore
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
        this.handleError(error);
      });
  }

  //// Email/Password Auth ////
  emailSignUp(firstname: string, lastname: string, email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      user.firstname = firstname;
      user.lastname = lastname;
      this.notify.update('Welcome to Firestarter!!!', 'success');
      return this.updateUserData(user); // if using firestore
    })
    .catch((error) => this.handleError(error) );
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.notify.update('Welcome to Firestarter!!!', 'success');
        return this.updateUserData(user); // if using firestore
      })
      .catch((error) => this.handleError(error) );
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => this.notify.update('Password update email sent', 'info'))
      .catch((error) => this.handleError(error));
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }

  // Sets user data to firestore after succesful login
  private updateUserData(user: User) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    if (user.firstname === '') {
      user.firstname = 'N/A';
    }
    if (user.lastname === '') {
      user.lastname = 'N/A';
    }
    const data: User = {
      uid: user.uid,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email || null
    };
    return userRef.set(data);
  }

  // // Get user data from firestore
  getUser() {
    return this.user;
  }

  getEvents() {
    return this.events;
  }

  addEvent(event: Event) {
    this.eventsCollection.add(event);
  }

  deleteEvent(event: Event) {
    this.eventDocument = this.afs.doc(`events/${event.eid}`);
    this.eventDocument.delete();
  }

  updateEvent(event: Event) {
    this.eventDocument = this.afs.doc(`events/${event.eid}`);
    this.eventDocument.update(event);
  }


  updateUser(user: User) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    return userRef.update(user);
  }


}
