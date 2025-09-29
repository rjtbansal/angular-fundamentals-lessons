import { Injectable } from '@angular/core';
import { data, User } from './data';

// Injectable decorator marks a class as available to be provided and injected as a dependency.
@Injectable({
  // providedIn specifies the provider scope of the service.
  // by setting it to 'root', Angular creates a single, shared instance of UserService and injects it into any class that asks for it.
  // note that this is singleton scope so entire application will have only one instance of UserService.
  // Angular does support multiple instances of a service but that is a more advanced topic.
  providedIn: 'root',
})
export class UserService {
  private userData: User[] = data;

  constructor() {}

  getUserData(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.userData);
    });
  }
}
