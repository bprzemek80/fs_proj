import {Component, Input} from '@angular/core'
import {Article} from '../model/article'

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.scss']
})
export class ArticleTableComponent {

  @Input()
  articleList: Article[] = []

}
