import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hiddengems } from '../models copy/hiddengems';

@Injectable({
  providedIn: 'root'
})
export class HiddengemsService {
  private baseurl="assets/hiddengems.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Hiddengems[]>{
    return this.http.get<Hiddengems[]>(this.baseurl);
  }
}
