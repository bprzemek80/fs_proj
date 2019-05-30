import {Component, OnInit} from '@angular/core'
import {ArticlesService} from '../articles.service'
import {Article} from '../model/article'
import {Page} from '../model/page'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articlePage: Page<Article> = {
    totalCount: 0,
    data: []
  }

  constructor(private articleService: ArticlesService) {
  }

  ngOnInit() {
    this.loadPage(1)
  }

  onPageChange(pageNumber) {
    this.loadPage(pageNumber)
  }

  private loadPage(pageNumber) {
    this.articleService.getArticles(pageNumber)
      .subscribe(articles => {
        this.articlePage = articles
      })
  }

}
