import { TeamsService } from './../services/teams.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService) { }

  team;

  ngOnInit(): void {
    const key = this.route.snapshot.paramMap.get('team');
    this.team = this.teamsService.findTeamByKey(key);
  }

}
