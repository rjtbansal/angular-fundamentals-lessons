import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // routermodule is needed to use <router-outlet>
  imports: [CommonModule, RouterModule],
  template: ` <h1>Enable routing to see the greeting below</h1> 
  <!-- router outlet displays the component for the active route -->
  <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = '07-routing-basics';
}
