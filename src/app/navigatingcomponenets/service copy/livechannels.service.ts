import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livechannels } from '../models copy/livechannels';

@Injectable({
  providedIn: 'root'
})
export class LivechannelsService {
  private baseurl="assets/livechannels.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Livechannels[]>{
    return this.http.get<Livechannels[]>(this.baseurl);
  }
}
