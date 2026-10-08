import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Killertwists } from '../models copy/killertwists';

@Injectable({
  providedIn: 'root'
})
export class KillertwistsService {
  private baseurl="assets/killertwists.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Killertwists[]>{
    return this.http.get<Killertwists[]>(this.baseurl);
  }
}
