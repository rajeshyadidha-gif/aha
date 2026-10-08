import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lovediaries } from '../models copy/lovediaries';

@Injectable({
  providedIn: 'root'
})
export class LovediariesService {
  private baseurl="assets/lovediaries.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Lovediaries[]>{
    return this.http.get<Lovediaries[]>(this.baseurl);
  }
}
