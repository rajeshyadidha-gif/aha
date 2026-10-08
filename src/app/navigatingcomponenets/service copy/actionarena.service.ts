import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actionarena } from '../models copy/actionarena';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionarenaService {
  private baseurl="assets/actionarena.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Actionarena[]>{
    return this.http.get<Actionarena[]>(this.baseurl);
  }
}
