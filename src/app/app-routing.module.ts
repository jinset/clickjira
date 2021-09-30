import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JiraComponent } from './pages/jira/jira.component';
import { JiraSecondComponent } from './pages/jira-second/jira-second.component';

const routes: Routes = [
  { path: 'jira', component: JiraComponent},
  { path: 'jira-second', component: JiraSecondComponent},

  { path: '',   redirectTo: '/jira', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
