import { Component, inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoComponent],
  template: ` 
  <h1>User Listing</h1>
  @for(user of userData; track user.id) {
    <app-user-info [user]="user" />
  } `,
})
export class AppComponent {
  // inject UserService using Angular's dependency injection 
  // using inject function 
  userService = inject(UserService);
  userData: User[] = [];

  async ngOnInit() {
    this.userData = await this.userService.getUserData();
  };

  constructor() {
    // note in constructor we cant use async await syntax
    // because constructor cannot be async
    // so we use .then() syntax to handle the promise
    // as an alternative we can use ngOnInit lifecycle hook
    // this.userService.getUserData().then((data) => {
    //   this.userData = data;
    // });
  }
}
