import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regionalmix } from '../models copy/regionalmix';

@Injectable({
  providedIn: 'root'
})
export class RegionalmixService {
  private baseurl="assets/regionalmix.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Regionalmix[]>{
    return this.http.get<Regionalmix[]>(this.baseurl);
  }
}
