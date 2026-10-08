import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Latestreleases } from '../models copy/latestreleases';
import { Retroandclassicgems } from '../models copy/retroandclassicgems';

@Injectable({
  providedIn: 'root'
})
export class RetroandclassicgemsService {
  private baseurl="assets/retroandclassicgems.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Retroandclassicgems[]>{
    return this.http.get<Retroandclassicgems[]>(this.baseurl);
  }
}
