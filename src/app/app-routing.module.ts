import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import {HomeComponent} from './home/home.component'
import {ContactComponent} from './contact/contact.component'
import {ArticleComponent} from './articles/article/article.component'
import {ArticleListComponent} from './articles/article-list/article-list.component'
import {AdminComponent} from './admin/admin.component'
import {AuthGuard} from './core/service/auth.guard'
import {LogoutComponent} from './logout/logout.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
  },
  {
    path: 'articles',
    component: ArticleListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
