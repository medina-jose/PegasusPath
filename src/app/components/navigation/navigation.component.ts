import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Event } from '../../models/event';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Output() createComponent = new EventEmitter<string>();


  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private firebaseService: FirebaseService
  ) { }

  changeComponent(type: string) {
    this.createComponent.emit(type);
    return;
  }

}
