import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private APIURL = 'https://clicknodejira.herokuapp.com/api/project/';

  constructor(private http:HttpClient) { }

  getAllProjects() {
    return this.http.get<any>(`${this.APIURL}getAll`);
  }
}
