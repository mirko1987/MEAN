import { PostsService } from './post.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {

 posts:Post[]=[];
 private  postSub:Subscription;
  postService:PostsService;


  constructor(postService:PostsService) { }

  ngOnInit() {
    this.posts=this.postService.getPosts();
    this.postService.getPostsUpdate()
    .subscribe((posts:Post[])=>{
      this.posts;
    });
  }

  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
