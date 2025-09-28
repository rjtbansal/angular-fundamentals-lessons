import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  // template-driven form. No explicit form model in the component class
  // Angular infers the form model from the template directives
  // template driven forms are simpler to set up for simple forms or one time forms such as a login form
  // but less scalable for complex forms compared to reactive forms
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
         <!-- ngModel creates binding between title and input -->
          <!-- 
         ngModel vs React's onChange
            ngModel in Angular
              1. Two-way binding: [(ngModel)]="title" handles both reading and writing
              2. Automatic: You don't write event handlers - Angular manages the synchronization
              3. Declarative: You just declare what property to bind to
            onChange in React
              1. One-way binding: Only handles the "writing" part (user input → state)
              2. Manual: You must write event handlers to update state
              3. Imperative: You explicitly handle the state updates
          -->
         <input type="text" id="title" [(ngModel)]="title" />
        <label for="body">Post Body</label>
        <textarea id="body" [(ngModel)]="body"></textarea>
      </section>
      <section>
        <p>{{ title }}</p>
        <p>{{ body }}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '';
  body = '';
}
