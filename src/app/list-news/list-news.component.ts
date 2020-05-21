import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  category;
  term = '';
  newsList = [];

  constructor(private route: ActivatedRoute, private service: NewsService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(param => {
      this.category = this.service.findCategoryById(Number(param.category));
      this.term = param.term;
      if (this.category) {
        this.newsList = this.service.findNewsByCategory(this.category);
      } else if (this.term) {
        this.newsList = this.service.filterNews(this.term);
      }
    });
  }


}
