import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Trip} from '../trip';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  trips: Object;
  selectedTrip:Trip;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getList().subscribe(data => {
      this.trips = data
      console.log(this.trips);
    }
  );
  }
}
