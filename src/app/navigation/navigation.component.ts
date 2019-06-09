import { Component, OnInit } from '@angular/core'
import {AuthService} from '../core/service/auth.service'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn = false
  isLoggedIn$: Observable<boolean>

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(value => this.isLoggedIn = value)
    this.isLoggedIn$ = this.authService.isLoggedIn$
  }

  logIn() {
    this.authService.logIn()
  }

  logOut() {
    this.authService.logOut()
  }

}
