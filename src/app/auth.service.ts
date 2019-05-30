import {Injectable} from '@angular/core'
import {BehaviorSubject, ReplaySubject} from 'rxjs'
import {Router} from '@angular/router'

@Injectable()
export class AuthService {

  private _tokenSubject = new BehaviorSubject<string>('')

  constructor(private router: Router) {
  }

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)

  get isLoggedIn$(): BehaviorSubject<boolean> {
    return this._isLoggedIn$
  }

  private _token = 'sdfslkdfjsdff398239f823ue38ue2938dh9238u'

  get token(): BehaviorSubject<string> {
    return this._tokenSubject
  }

  logIn() {
    this._isLoggedIn$.next(true)
    this._tokenSubject.next(this._token)
  }

  logOut() {
    this._isLoggedIn$.next(false)
    this.router.navigateByUrl('/')
    this._tokenSubject.next('')
  }
}
