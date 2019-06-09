import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AuthService} from './service/auth.service'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptor} from './service/auth-interceptor.service'
import {AuthGuard} from './service/auth.guard'


@NgModule({
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
