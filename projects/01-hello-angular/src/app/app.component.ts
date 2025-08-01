import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <ol>
    <h3> My Favorite Movies </h3>
     <li> Invictus </li>
     <li> The Pursuit of Happiness </li>
     <li> Bourne Ultimatum </li>
    </ol>
  `,
  styles: `
    ol {
      color: blue;
      font-size: 20px;
      list-style-type: upper-roman;
    }
      `,
})
export class AppComponent {}
