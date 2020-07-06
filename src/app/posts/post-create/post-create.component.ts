import { PostsService } from './../post-list/post.service';
import { Component, OnInit} from '@angular/core';
import { Post } from '../post-list/post.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle='';
  enteredContent = "";

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/notif.mp3";
    audio.load();
    audio.play();
  }

  onAddPost(form: NgForm){
    if (form.invalid) {
      return;
    }
    const post :Post = {
      title : form.value.title,
      content : form.value.content}
    this.playAudio();
    this.postsService.addPost(form.value.title,form.value.content);
    form.resetForm();
  }

  constructor(public postsService:PostsService) { }

  ngOnInit() {
  }




}
