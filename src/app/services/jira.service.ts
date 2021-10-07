import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JiraService {
  

  constructor(private http: HttpClient) { }


  getAccess() {
    return this.http.get<any>('https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=zoub2nqucACRiRjxUHHCcwaW3z4qTGj8&scope=read%3Ajira-user&redirect_uri=https%3A%2F%2Fwww.clicklease.com%2F&state=12222&response_type=code&prompt=consent');
    // return this.http.get<any>(`https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=zoub2nqucACRiRjxUHHCcwaW3z4qTGj8&scope=read:jira-user&redirect_uri=https://www.clicklease.com&state=1202929&response_type=code&prompt=consent`);
  }
}
