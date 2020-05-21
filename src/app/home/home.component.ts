import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  breakingNews = {};
  relatedNews = [];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    const news = this.service.findBreakingNews();
    this.breakingNews = news[0];
    this.relatedNews = news.slice(1 , news.length - 1);
  }
}
