import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleComponent} from './article/article.component'
import {ArticleFrameComponent} from './article-frame/article-frame.component'
import {ArticleListComponent} from './article-list/article-list.component'
import {ArticlePaginationComponent} from './article-pagination/article-pagination.component'
import {ArticleTableComponent} from './article-table/article-table.component'

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleFrameComponent,
    ArticleListComponent,
    ArticlePaginationComponent,
    ArticleTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticlesModule { }
