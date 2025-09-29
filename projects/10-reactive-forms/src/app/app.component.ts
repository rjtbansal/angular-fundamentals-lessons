import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <!-- Reactive Forms: A formGroup is a collection of form controls -->
      <form name="blogForm" [formGroup]="blogForm" (ngSubmit)="handleFormSubmit()">
        <section>
          <label for="title">Post Title</label>
          <!-- formControlName directive binds the input to the form control 
          formControlName must match the name in the formGroup object defined in the component class
          For example: formControlName="title" matches title: new FormControl('') in the blogForm FormGroup object 
          -->
          <input type="text" id="title" formControlName="title" />

          <label for="body">Post Body</label>
          <textarea id="body" formControlName="body" cols="30" rows="10"></textarea>
        </section>
        <button type="submit">Submit Post</button>
      </form>
    </article>
  `,
  styles: [],
})
export class AppComponent {
  blogForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  }); 
  handleFormSubmit() {
    const { title, body } = this.blogForm.value;
    this.postBlog(title, body);
  }

  postBlog(title: string | null | undefined, body: string | null | undefined) {
    console.log(`Posting blog titles ${title}, with the contents ${body}.`);
    this.blogForm.reset();
  }
}
