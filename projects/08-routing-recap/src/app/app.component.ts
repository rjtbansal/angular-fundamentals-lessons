import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: ` <h1>Welcome to {{ title }}!</h1> 
  @for(title of productTitles; track title) {
    <p>
      <!-- $index is in context of for -->
      <a [routerLink]="['details',$index]">{{ title }}</a>
    </p>
  }
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
