import {Component, Input, OnInit, Renderer2, ViewChild} from '@angular/core'
import {Article} from '../../model/article'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article

  closeFunction = v => v

  @ViewChild('dialog')
  dialog

  constructor() {
  }

  ngOnInit() {

  }
}
