import { Injectable } from '@angular/core';
import { recentsModel } from 'src/app/shared/models/subscriptions.model';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionsServiceService {

  constructor() { }

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
