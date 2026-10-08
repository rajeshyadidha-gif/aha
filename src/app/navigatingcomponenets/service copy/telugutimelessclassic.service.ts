import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Telugutimelessclassic } from '../models copy/telugutimelessclassic';

@Injectable({
  providedIn: 'root'
})
export class TelugutimelessclassicService {
  private baseurl="assets/telugutimelessclassics.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Telugutimelessclassic[]>{
    return this.http.get<Telugutimelessclassic[]>(this.baseurl);
  }
}
