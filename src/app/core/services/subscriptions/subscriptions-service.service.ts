import { Injectable } from '@angular/core';
import { notificationModel, recentsModel } from 'src/app/shared/models/subscriptions.model';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsServiceService {

  constructor() { }

  // private notification = new BehaviorSubject([])
  // currentNotification = this.notification.asObservable()

  updateNotification(notifications: notificationModel){
   
    var notificationsArray = JSON.parse(localStorage.getItem('notifications') || '[]');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    notificationsArray = notificationsArray ? notificationsArray : [];

    // Add new data to localStorage Array
    notificationsArray.push(notifications);

    // Save back to localStorage
    localStorage.setItem('notifications', JSON.stringify(notificationsArray));
  }
  
  getNotifications(){
    return JSON.parse(localStorage.getItem('notifications') || '{}');
  }

  saveRecents(recents: recentsModel) {
    //  get recents from local storage
    var recentsArray = JSON.parse(localStorage.getItem('recents') || '[]');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    recentsArray = recentsArray ? recentsArray : [];

    // Add new data to localStorage Array
    recentsArray.push(recents);

    // Save back to localStorage
    localStorage.setItem('recents', JSON.stringify(recentsArray));

  }

  viewRecents() {
    return JSON.parse(localStorage.getItem('recents') || '{}');
  }
}
