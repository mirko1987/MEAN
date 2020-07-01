import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post=[];
  title = 'mean';

  onPostAdded(post) {
    this.post.push(post);
  }
}
