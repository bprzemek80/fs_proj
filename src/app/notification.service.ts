import {Injectable} from '@angular/core'
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {

  }

  private _messages$ = new Subject<string>()

  get messages$() {
    return this._messages$.asObservable()
  }
}
