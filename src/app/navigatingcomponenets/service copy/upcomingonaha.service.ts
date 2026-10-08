import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingonahaService {
  private baseurl="assets/upcomingonaha.json";
  constructor(private http:HttpClient ){}
  ram():Observable<UpcomingonahaService[]>{
    return this.http.get<UpcomingonahaService[]>(this.baseurl);
  }
}