import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.component'
import {ContactComponent} from './contact/contact.component'
import {AdminComponent} from './admin/admin.component'
import {NavigationComponent} from './navigation/navigation.component'
import {HttpClientModule} from '@angular/common/http'
import {LogoutComponent} from './logout/logout.component'
import {SharedModule} from './shared/shared.module'
import {CoreModule} from './core/core.module'
import {ArticlesModule} from './articles/articles.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    NavigationComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule.forRoot(),
    ArticlesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
