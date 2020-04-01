import { Component, OnInit,Input } from '@angular/core';
import {Trip} from './../trip';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id:number;
  data:any;
  trips: Object;
  constructor(
    private route:ActivatedRoute,
    private HttpService:HttpService

  ) { }

  ngOnInit() {
    this.id=0;
  }
  private TripDetails() {
    this.trips = [];
    this.HttpService.getTrip(this.id)
      .subscribe(_trips => this.trips = this.data);
  }
  onSubmit() {
    this.TripDetails();
  }
}

