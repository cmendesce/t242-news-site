import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarCategoriasComponent } from './sidebar-categorias/sidebar-categorias.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TeamsComponent } from './teams/teams.component';
import { AdComponent } from './ad/ad.component';
import { HomeComponent } from './home/home.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarCategoriasComponent,
    NewsletterComponent,
    TeamsComponent,
    AdComponent,
    HomeComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
