import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchinteluguandtamil } from '../models/watchinteluguandtamil';

@Injectable({
  providedIn: 'root'
})
export class WatchinteluguandtamilService {
  private baseurl="assets/watchinteluguandtamil.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Watchinteluguandtamil[]>{
    return this.http.get<Watchinteluguandtamil[]>(this.baseurl);
  }
}