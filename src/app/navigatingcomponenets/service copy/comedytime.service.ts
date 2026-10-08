import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comedytime } from '../models copy/comedytime';

@Injectable({
  providedIn: 'root'
})
export class ComedytimeService {
  private baseurl="assets/comedytime.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Comedytime[]>{
    return this.http.get<Comedytime[]>(this.baseurl);
  }
}
