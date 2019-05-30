import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-article-pagination',
  templateUrl: './article-pagination.component.html',
  styleUrls: ['./article-pagination.component.scss']
})
export class ArticlePaginationComponent implements OnInit {

  pageNumbers = []

  @Input()
  initialPage
  @Output()
  pageChange = new EventEmitter<number>()

  constructor() {
  }
  @Input()
  set totalPages(value) {
    for (let i = 0; i < value; i++) {
      this.pageNumbers.push(i)
    }
  }

  ngOnInit() {
  }

}
