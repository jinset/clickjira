import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JiraComponent } from './pages/jira/jira.component';
import { JiraSecondComponent } from './pages/jira-second/jira-second.component';

@NgModule({
  declarations: [
    AppComponent,
    JiraComponent,
    JiraSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
