import { Component, OnInit, Input, Output,
  EventEmitter, OnChanges, SimpleChanges, AfterContentInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine'
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs/Observable';
import { Event } from '../../models/event';
import { User } from '../../models/user';
import { MapsEventsListComponent } from '../maps-events-list/maps-events-list.component';
import { switchMap } from 'rxjs/operators';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() events: Event[];
  @Output() eventsChange = new EventEmitter<Event[]>();


  // UCF coordinates
  lat: number = 28.6024;
  lng: number = -81.2001;
  zoom: number = 15;

  event: Event = {
    eid: '',
    uid: '',
    name: '',
    longitude: 0,
    latitude: 0,
    like: 0,
    dislike: 0
  }
  eventForm: FormGroup;

  mouselat: any;
  mouselng: any;
  user;
  map;

  userEvents: any;

  constructor(private fb: FormBuilder,
    private firebaseService: FirebaseService) { }

  ngOnInit()
  {
    this.buildMap();
    this.getMarkers();

    this.user = this.firebaseService.getUser().subscribe(user => {
      this.user = user;
      this.userEvents = this.firebaseService.getEvents().subscribe(events => {
        let userEvents = new Array();
        for (var i = 0; i < events.length; i++) {
          if (events[i].uid == this.user.uid) {
            userEvents.push(events[i]);
          }
        }
        this.userEvents = userEvents;
      });
    });
  }

  ngOnChanges(changes: SimpleChanges)
  {
    var change = changes["events"].currentValue
    this.events = change;
    this.updateMarkers();
    return;
  }

  ngAfterContentInit() {}

  updateMarkers()
  {
    if(this.events == null) { return; }
    for(var i=0; i<this.events.length; i++)
    {
      var event = this.events[i];
      var index = this.events.indexOf(event);
      if(index < 0)
      {
        // console.log(this.events[i])
        var lng = this.events[i].longitude;
        var lat = this.events[i].latitude;
        var popupContent = '<div><p class="wordwrap"><strong>' + this.events[i].name + '</strong></p></div>'
        var marker = new L.marker({ lng, lat })
          .bindPopup(popupContent, { maxWidth: 250 })
          .addTo(this.map);
      }
    }
    return;
  }

  buildMap() {
    var UCFcoords = L.latLng(28.6014, -81.2001);
    var topLeft = L.latLng(28.6116, -81.2073);
    var bottomRight = L.latLng(28.5912, -81.1929);
    var bounds = L.latLngBounds(topLeft, bottomRight);

    var mymap = L.map('mapid', {
      center: UCFcoords,
      zoom: 16,
      minZoom: 16,
      maxBounds: bounds
    });
    this.map = mymap;

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibm90YWthbmUiLCJhIjoiY2plNHdqeXphMnBjbzJ4bW9kNDJxZHk2eSJ9.pViraf7NrFYgzmnqTd_vgQ', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);

    var prevDirections = 0;
    var directions;
    var userloc;

    // create popup onclick
    this.map.on('click', click => {
      var coordDest = mymap.mouseEventToLatLng(click.originalEvent);

      this.mouselat = coordDest.lat;
      this.mouselng = coordDest.lng;

      if(this.user != null)
      {
        var popup = L.popup()
          .setLatLng(coordDest)
          .setContent('<h6>You will be placing a marker here</h6>')
          .openOn(mymap);
      }
    });
  }

  getMarkers() {
    if(this.events != null )
    {
      for(var i=0; i<this.events.length; i++)
      {
        // console.log(this.events[i])
        var lng = this.events[i].longitude;
        var lat = this.events[i].latitude;
        var popupContent = '<div><p class="wordwrap"><strong>' + this.events[i].name + '</strong></p></div>'

        var marker = new L.marker({ lng, lat })
          .bindPopup(popupContent, { maxWidth: 250 })
          .addTo(this.map);
      }
      return;
    }
  }


  // maps events list functions

  onEventsChange(updatedEvents: Event[])
  {
    this.eventsChange.emit(updatedEvents)
  }

  flyTo(data: Event) {
    this.lng = data.longitude
    this.lat = data.latitude
    var latlng = L.latLng(this.lat, this.lng)
    console.log(latlng)
    this.map.flyTo(latlng, 18)
  }

}
