import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredValue='';
  enteredContent = " ";
  @Output() postCreated = new EventEmitter();
  newPost='NO CONTENT';
  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/notif.mp3";
    audio.load();
    audio.play();
  }

  onAddPost(){
    const post = {
      title : this.enteredValue,
      content : this.enteredContent}
    console.log(this.post);
    this.postCreated.emit(post);
    this.playAudio();
  }

  constructor() { }

  ngOnInit() {
  }

}
