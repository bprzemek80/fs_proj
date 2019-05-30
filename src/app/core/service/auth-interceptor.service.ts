import {Injectable} from '@angular/core'
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {


  constructor(private authService: AuthService,
              private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = this.authService.token.getValue()

    if (authToken) {
      const changedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      })
      return next.handle(changedReq)
    }

    const noTokenReq = req.clone({
      url: 'logout'
    })

    return next.handle(noTokenReq).pipe(
      catchError(err => {
        if (err.status === 404) {
          this.router.navigateByUrl('/logout')
        }
        return throwError(err)
      })
    )
  }
}
