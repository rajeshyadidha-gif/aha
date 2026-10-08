import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inthespotlight } from '../models copy/inthespotlight';

@Injectable({
  providedIn: 'root'
})
export class InthespotlightService {
  private baseurl="assets/inthespotlight.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Inthespotlight[]>{
    return this.http.get<Inthespotlight[]>(this.baseurl);
  }
}
