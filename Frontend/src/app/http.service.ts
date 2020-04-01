import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Trip} from './trip';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getList(){
    return this.http.get('http://127.0.0.1:8000/trips/');
  }

  createTrip(trip: Object): Observable<object> {
    return this.http.post('http://127.0.0.1:8000/trips/', trip);
  }

  getTrip(id: number): Observable<object>{
    return this.http.get('http://127.0.0.1:8000/trips/');
  }
}
