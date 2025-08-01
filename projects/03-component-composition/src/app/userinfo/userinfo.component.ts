import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // selector below will be used whenever this component needs to be rendered
  // in the template of another component.
  // For example, in app.component.ts, we will use <app-userinfo />
  // to render this component.
  // This is the same as using <app-userinfo></app-userinfo>
  // in the template of another component.
  selector: 'app-userinfo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      userinfo works!
    </p>
  `,
  styles: ``
})
export class UserinfoComponent {

}
