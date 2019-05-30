import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core'
import {NotificationComponent} from '../notification/notification.component'
import {NotificationService} from '../../notification.service'

@Component({
  selector: 'app-notification-containter',
  templateUrl: './notification-containter.component.html',
  styleUrls: ['./notification-containter.component.scss']
})
export class NotificationContainterComponent implements OnInit {

  @ViewChild('container', {
    read: ViewContainerRef
  })
  container: ViewContainerRef

  constructor(private resolver: ComponentFactoryResolver,
              private notificationService: NotificationService) {
  }

  ngOnInit() {

    const factory = this.resolver.resolveComponentFactory(NotificationComponent)
    const componentRef = this.container.createComponent(factory)
    componentRef.instance.message = 'dsaasd'
    componentRef.instance.closeFunction = () => {
      componentRef.destroy()
    }

    /*this.notificationService.messages$
      .subscribe(message => {
        const factory = this.resolver.resolveComponentFactory(NotificationComponent)
        const componentRef = this.container.createComponent(factory)
        componentRef.instance.message = message
        componentRef.instance.closeFunction = () => {
          componentRef.destroy()
        }
      })*/


  }

}
