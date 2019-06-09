import {Component, ComponentFactoryResolver, ContentChild, Input, Renderer2, ViewChild, ViewContainerRef} from '@angular/core'
import {Article} from '../../model/article'
import {ArticleComponent} from '../article/article.component'

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.scss']
})
export class ArticleTableComponent {

  @Input()
  articleList: Article[] = []

  @ViewChild('articlemodalcontainer', {read: ViewContainerRef})
  entry: ViewContainerRef


  constructor(private resolver: ComponentFactoryResolver,
              private renderer: Renderer2) {
  }

  onArticleClick(article: Article) {
    this.entry.clear()
    const factory = this.resolver.resolveComponentFactory(ArticleComponent)
    const componentRef = this.entry.createComponent(factory)
    componentRef.instance.article = article
    componentRef.instance.closeFunction = () => {
      componentRef.destroy()
    }

    this.renderer.addClass(componentRef.location.nativeElement, 'show-dialog')
  }

}
