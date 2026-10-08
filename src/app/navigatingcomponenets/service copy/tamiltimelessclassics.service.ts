import { Injectable } from '@angular/core';
import { Tamiltimelessclassics } from '../models copy/tamiltimelessclassics';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TamiltimelessclassicService {
  private baseurl="assets/tamiltimelessclassic.json";;
  constructor(private http:HttpClient ){}
  onsubmit():Observable<Tamiltimelessclassics[]>{
    return this.http.get<Tamiltimelessclassics[]>(this.baseurl);
  }
}
