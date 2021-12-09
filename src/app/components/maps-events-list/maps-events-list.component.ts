import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs/Observable';
import { Event } from '../../models/event';
import { User } from '../../models/user';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


// TODO: Move all form functionality to separate component

@Component({
  selector: 'app-maps-events-list',
  templateUrl: './maps-events-list.component.html',
  styleUrls: ['./maps-events-list.component.css']
})
export class MapsEventsListComponent implements OnInit, OnChanges {
  @Input() events: Event[];
  @Input() latitude: any;
  @Input() longitude: any;
  @Input() user: User;

  @Output() eventsChange = new EventEmitter<Event[]>();
  @Output() flyTo = new EventEmitter<Event>();

  eventForm: FormGroup;

  constructor(private fb: FormBuilder,
    private firebaseService: FirebaseService) { }

  ngOnInit() { this.buildForm(); }

  ngOnChanges(changes: SimpleChanges) {
    const updatedEvents = changes['events'];
    const updatedLatitude = changes['latitude'];
    const updatedLongitude = changes['longitude'];
    const updatedUser = changes['user'];

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
  }

  buildForm() {
    this.eventForm = this.fb.group({
      'name': ['', [Validators.required]],
      'latitude': ['', [Validators.required]],
      'longitude': ['', [Validators.required]]
    });
  }

  deleteEvent(event: Event) {
    this.firebaseService.deleteEvent(event);
    const index = this.events.indexOf(event);
    this.events.splice(index, 1);
    this.eventsChange.emit(this.events);
  }

  flyToOnClick(event: Event) { this.flyTo.emit(event); }


  registerEvent() {
    // users
    const data: Event = {
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


}
