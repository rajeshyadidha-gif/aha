import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchbylanguage } from '../models copy/watchbylanguage';

@Injectable({
  providedIn: 'root'
})
export class WatchbylanguageService {
  private baseurl="assets/watchbylanguage.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Watchbylanguage[]>{
    return this.http.get<Watchbylanguage[]>(this.baseurl);
  }
}
