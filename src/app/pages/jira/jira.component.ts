import { Component, OnInit } from '@angular/core';
import { JiraService } from '../../services/jira.service';

@Component({
  selector: 'app-jira',
  templateUrl: './jira.component.html',
  styleUrls: ['./jira.component.scss']
})
export class JiraComponent implements OnInit {
  text: string;
  errorLink: string;
  jiraHTML: any;

  constructor(private jiraService: JiraService) { }

  ngOnInit(): void {
 
  }

  onCall() {
    this.text = "The app is loading..."
    this.jiraService.getAccess().subscribe(
      data => { this.text = "The app loads correctly", console.log(data) },
      error => {
        this.text = `error check`, this.errorLink = error.url, console.log(error)
      });
  }

}
