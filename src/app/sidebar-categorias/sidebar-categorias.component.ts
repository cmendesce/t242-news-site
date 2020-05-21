import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-categorias',
  templateUrl: './sidebar-categorias.component.html',
  styleUrls: ['./sidebar-categorias.component.css']
})
export class SidebarCategoriasComponent implements OnInit {


  categories = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.categories = this.newsService.findCategories();
  }

}
