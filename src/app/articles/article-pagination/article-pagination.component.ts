import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
  selector: 'app-article-pagination',
  templateUrl: './article-pagination.component.html',
  styleUrls: ['./article-pagination.component.scss']
})
export class ArticlePaginationComponent {

  @Input()
  initialPage
  @Output()
  pageChange = new EventEmitter<number>()

  @Input()
  totalPages: number

  onPageChange(pageNumber: number) {
    this.pageChange.emit(pageNumber)
  }

}
