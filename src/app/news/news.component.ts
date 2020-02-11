import { Component, OnInit } from '@angular/core';
import { News } from './news';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  newsList: News[];

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
	this.newsService.get()
		.subscribe(news => this.newsList = news);
  }
}
