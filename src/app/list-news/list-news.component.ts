import { Category } from './../models/category.model';
import { TeamsService } from './../services/teams.service';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  category: Category;
  term = '';
  team: Team;
  newsList = [];

  constructor(private route: ActivatedRoute, private service: NewsService, private teamsService: TeamsService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(param => {
      this.category = this.service.findCategoryById(Number(param.category));
      this.term = param.term;
      this.team = this.teamsService.findTeamByKey(param.team);

      if (this.category) {
        this.newsList = this.service.findNewsByCategory(this.category);
      } else if (this.term) {
        this.newsList = this.service.filterNews(this.term);
      } else if (this.team && this.team) {
        this.newsList = this.service.findNewsByTeam(this.team?.key);
      }
    });
  }


}
