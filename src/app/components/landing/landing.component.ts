import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @Output() createComponent = new EventEmitter<string>();
  images: string[] = ['https://www.ucf.edu/files/2012/08/regional-campuses.jpg', 'https://www.ucf.edu/files/2012/08/downtown.jpg', 'https://www.ucffoundation.org/view.image?Id=620', 
'https://undergrad.ucf.edu/whatsnext/wp-content/uploads/2016/02/About.jpg'];


  constructor(
    private firebaseService: FirebaseService,
    private fb: FormBuilder,
    private router: Router,
    private _http: HttpClient,
    private config: NgbCarouselConfig
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
   }

  ngOnInit() {
  }

  changeComponent(type: string) {
    this.createComponent.emit(type);
    return;
  }

}
