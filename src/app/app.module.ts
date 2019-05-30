import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { ArticleComponent } from './article/article.component'
import { ArticleListComponent } from './article-list/article-list.component'
import { AdminComponent } from './admin/admin.component'
import { NavigationComponent } from './navigation/navigation.component'
import {AuthService} from './auth.service'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {ArticlesService} from './articles.service'
import {AuthInterceptor} from './auth-interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { ArticleTableComponent } from './article-table/article-table.component';
import { ArticlePaginationComponent } from './article-pagination/article-pagination.component';
import { RepeatDirective } from './repeat.directive';
import { HighlightDirective } from './highlight.directive';
import { ArticleFrameComponent } from './article-frame/article-frame.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ArticleComponent,
    ArticleListComponent,
    AdminComponent,
    NavigationComponent,
    LogoutComponent,
    ArticleTableComponent,
    ArticlePaginationComponent,
    RepeatDirective,
    HighlightDirective,
    ArticleFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, ArticlesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
