import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-jira',
  templateUrl: './jira.component.html',
  styleUrls: ['./jira.component.scss']
})
export class JiraComponent implements OnInit {
  projects: any;
  loading = false;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllProjects();
    this.loading = true;
  }

  getAllProjects() {
    this.projectService.getAllProjects().subscribe(projects => {
      console.log(projects.body[1]);
      this.projects = projects.body;
    });

  }

}
