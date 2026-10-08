import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mostrewathedgems } from '../models copy/mostrewathedgems';

@Injectable({
  providedIn: 'root'
})
export class MostrewatchedgemsService {
  private baseurl="assets/mostrewatchedgems.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Mostrewathedgems[]>{
    return this.http.get<Mostrewathedgems[]>(this.baseurl);
  }
}
