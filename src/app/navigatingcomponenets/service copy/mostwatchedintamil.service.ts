import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mostwatchedintamil } from '../models copy/mostwatchedintamil';

@Injectable({
  providedIn: 'root'
})
export class MostwatchedintamilService {
  private baseurl="assets/mostwatchedintamil.json";
  constructor(private http:HttpClient ){}
  ram():Observable<Mostwatchedintamil[]>{
    return this.http.get<Mostwatchedintamil[]>(this.baseurl);
  }
}
