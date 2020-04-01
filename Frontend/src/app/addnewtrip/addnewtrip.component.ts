import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addnewtrip',
  templateUrl: './addnewtrip.component.html',
  styleUrls: ['./addnewtrip.component.scss']
})
export class AddnewtripComponent implements OnInit {
  trip: Trip = new Trip();
  submitted = false;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }
  newTrip(): void {
    this.submitted = false;
    this.trip = new Trip();
  }

  save() {
    this._http.createTrip(this.trip)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.trip = new Trip();
  }

  onSubmit() {
    this.save();
  }
}
