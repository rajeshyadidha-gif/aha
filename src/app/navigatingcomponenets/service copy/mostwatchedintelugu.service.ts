import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mostwatchedintelugu } from '../models copy/mostwatchedintelugu';

@Injectable({
  providedIn: 'root'
})
export class MostwatchedinteluguService {
  private baseurl="";
  constructor(private http:HttpClient ){}
  ram():Observable<Mostwatchedintelugu[]>{
    return this.http.get<Mostwatchedintelugu[]>(this.baseurl);
  }
}
