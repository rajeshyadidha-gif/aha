import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laughterloaded } from '../models copy/laughterloaded';

@Injectable({
  providedIn: 'root'
})
export class LaughterloadedService {
  private baseurl="assets/laughterloaded.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Laughterloaded[]>{
    return this.http.get<Laughterloaded[]>(this.baseurl);
  }
}
