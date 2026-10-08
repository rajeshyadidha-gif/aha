import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Latestreleases } from '../models copy/latestreleases';

@Injectable({
  providedIn: 'root'
})
export class LatestreleasesService {
  private baseurl="assets/latestreleases.json";
  constructor(private http:HttpClient) {}
  onsubmit():Observable<Latestreleases[]>{
    return this.http.get<Latestreleases[]>(this.baseurl);
  }
  }
