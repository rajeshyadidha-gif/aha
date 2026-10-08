import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Houseofhorrors } from '../models copy/houseofhorrors';

@Injectable({
  providedIn: 'root'
})
export class HouseofhorrorsService {
  private baseurl="assets/houseofhorrors.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Houseofhorrors[]>{
    return this.http.get<Houseofhorrors[]>(this.baseurl);
  }
}
