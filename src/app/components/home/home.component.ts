import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges{
  @Input() events: Event[];
  @Output() onEventsChange = new EventEmitter<Event[]>(); // outputs to root component
  
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges)
  {
    // console.log("Home ngOnChanges called");
    var updatedEvents = changes["events"].currentValue;
    this.eventsChange(updatedEvents);
    return;
  }

  // receives output from maps component
  eventsChange(updatedEvents: Event[])
  { 
    // console.log("Home received events change from maps: ")
  	this.events = updatedEvents; 
  	// console.log("Home events after update: ");
  	// console.log(this.events);
    this.onEventsChange.emit(this.events)
  }
}
