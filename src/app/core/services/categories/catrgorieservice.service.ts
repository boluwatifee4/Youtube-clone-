import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatrgorieserviceService {
  private category = new BehaviorSubject('all');
  currentCategory = this.category.asObservable();

  private notification = new BehaviorSubject([])
  currentNotification = this.notification.asObservable()
  changeCategory(category: any) {
    this.category.next(category);
  }

  getcurrentCategoryWithObservable(): BehaviorSubject<any> {
    return this.category;
  }
updateNotification(notification: any){
  this.notification.next(notification);
}

getNotifications(){
  return this.notification;
}


  constructor() { }

 

}
