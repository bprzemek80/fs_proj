import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.component'
import {ContactComponent} from './contact/contact.component'
import {AdminComponent} from './admin/admin.component'
import {NavigationComponent} from './navigation/navigation.component'
import {HttpClientModule} from '@angular/common/http'
import {ArticlesService} from './articles.service'
import {LogoutComponent} from './logout/logout.component'
import {NotificationContainterComponent} from './shared/component/notification-containter/notification-containter.component'
import {NotificationComponent} from './shared/component/notification/notification.component'
import {SharedModule} from './shared/shared.module'
import {CoreModule} from './core/core.module'

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
  ],
  providers: [
    ArticlesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
