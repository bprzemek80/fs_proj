import {ModuleWithProviders, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RepeatDirective} from './directive/repeat.directive'
import {HighlightDirective} from './directive/highlight.directive'
import {NotificationService} from './notification.service'
import {NotificationComponent} from './component/notification/notification.component'
import {NotificationContainterComponent} from './component/notification-containter/notification-containter.component'

const directives = [
  RepeatDirective,
  HighlightDirective,
]

@NgModule({
  declarations: [
    ...directives,
    NotificationComponent,
    NotificationContainterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...directives,
    NotificationContainterComponent
  ],
  entryComponents: [
    NotificationComponent
  ]
})


export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        NotificationService
      ]
    }
  }
}
