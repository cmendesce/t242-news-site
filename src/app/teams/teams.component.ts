import { TeamsService } from './../services/teams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private teamsService: TeamsService) { }

  teams;

  ngOnInit(): void {
    this.teams = this.teamsService.findTeams();
  }

}
