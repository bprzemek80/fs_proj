import {Injectable} from '@angular/core'
import {HttpClient, HttpResponse} from '@angular/common/http'
import {Article} from '../model/article'
import {Observable} from 'rxjs'
import {Page} from '../model/page'
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl


@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient) {
  }

  getArticles(page: number = 1, limit: number = 10): Observable<Page<Article>> {
    return this.http.get<Article[]>(`${apiUrl}/articles`, {
      observe: 'response',
      params: {
        _page: String(page),
        _limit: String(limit)
      }
    }).pipe(
      map((res: HttpResponse<any>) => ({
          totalCount: Math.ceil(+res.headers.get('x-total-count') / 10),
          data: res.body
        })
      ))
  }
}
