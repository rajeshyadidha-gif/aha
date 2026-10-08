import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heartbeatstories } from '../models copy/heartbeatstories';

@Injectable({
  providedIn: 'root'
})
export class HeartbeatstoriesService {
  private baseurl="assets/heartbeatstories.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Heartbeatstories[]>{
    return this.http.get<Heartbeatstories[]>(this.baseurl);
  }
}
