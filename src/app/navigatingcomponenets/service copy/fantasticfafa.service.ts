import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fantasticfafa } from '../models copy/fantasticfafa';

@Injectable({
  providedIn: 'root'
})
export class FantasticfafaService {
  private baseurl="assets/fantasticfafa.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Fantasticfafa[]>{
    return this.http.get<Fantasticfafa[]>(this.baseurl);
  }
}
