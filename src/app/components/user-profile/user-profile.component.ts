import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';
import { Event } from '../../models/event';
import { User } from '../../models/user';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnChanges {
  @Input() events: Event[];
  @Output() onEventsChange = new EventEmitter<Event[]>();

  event: Event = {
    name: '',
    longitude: 0,
    latitude: 0,
    like: 0,
    dislike:0
  }

  user: any;

  constructor(
    private firebaseService: FirebaseService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.firebaseService.getUser().subscribe(user => {
      this.user = user;
      const userEvents = [];
      for (let i = 0; i < this.events.length; i++) {
        if (this.events[i].uid === this.user.uid) {
            userEvents.push(this.events[i]);
          }
      }
      this.events = userEvents;

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
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Profile ngOnChanges called');
    const updatedEvents = changes["events"].currentValue;
    // if(this.events == updatedEvents || updatedEvents == null) { return; }
    this.events = updatedEvents;
    console.log("Profile events after ngOnChanges: ");
    console.log(this.events);

    const userEvents = [];
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i].uid === this.user.uid) {
          userEvents.push(this.events[i]);
        }
    }
    this.events = userEvents;
    return;
  }

  eventsChange(updatedEvents: Event[]) {
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
  }


  likeUpdate(event: Event) {

    const likelen = event.userlikelist.length;
    const dislikelen = event.userdislikelist.length;
    let len;

    if (likelen > dislikelen) {
      len = likelen;
    } else {
      len = dislikelen;
    }

    for (let i = 0; i < len; i++) {
      if (event.userlikelist[i] === this.user.uid) {
          return;
      } else if (event.userdislikelist[i] === this.user.uid) {
          event.dislike--;
          event.userdislikelist.splice(i, 1);
      }
    }

    event.userlikelist[likelen] = this.user.uid;
    event.like++;


    const total = event.like + event.dislike;
    const likePercentToShow = event.like / total * 100;
    const dislikePercentToShow = event.dislike / total * 100;
    event.likePercent = Math.round(likePercentToShow);
    event.dislikePercent = Math.round(dislikePercentToShow);

    this.firebaseService.updateEvent(event);
  }

  dislikeUpdate(event: Event) {

    const likelen = event.userlikelist.length;
    const dislikelen = event.userdislikelist.length;
    let len;
    if (likelen > dislikelen) {
      len = likelen;
    } else {
      len = dislikelen;
    }

    for (let i = 0; i < len; i++) {
      if (event.userdislikelist[i] === this.user.uid) {
          return;
      } else if (event.userlikelist[i] === this.user.uid) {
          event.like--;
          event.userlikelist.splice(i, 1);
      }
    }

    event.userdislikelist[dislikelen] = this.user.uid;
    event.dislike++;

    const total = event.like + event.dislike;
    const likePercentToShow = event.like / total * 100;
    const dislikePercentToShow = event.dislike / total * 100;
    event.likePercent = Math.round(likePercentToShow);
    event.dislikePercent = Math.round(dislikePercentToShow);

    this.firebaseService.updateEvent(event);

    if (event.dislike - event.like >= 10) {
      this.firebaseService.deleteEvent(event);
    }

  }

  deleteEvent(event: Event) {
    this.firebaseService.deleteEvent(event);
    const index = this.events.indexOf(event);
    this.events.splice(index, 1);
    this.onEventsChange.emit(this.events);
  }


}
