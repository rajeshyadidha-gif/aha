import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Highvoltage } from '../models copy/highvoltage';

@Injectable({
  providedIn: 'root'
})
export class HighvoltageService {
  private baseurl="assets/highvoltage.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Highvoltage[]>{
    return this.http.get<Highvoltage[]>(this.baseurl);
  }
}
