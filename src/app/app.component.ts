import { Component} from '@angular/core';
import { Post } from './posts/post-list/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts:Post[]=[];
  title = 'mean';

  onPostAdded(post) {
    this.storedPosts.push(post);
    console.log(this.storedPosts);
  }
}
