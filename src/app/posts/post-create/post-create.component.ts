import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle='';
  enteredContent = "";
  @Output() postCreated = new EventEmitter();

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/notif.mp3";
    audio.load();
    audio.play();
  }

  onAddPost(){
    const post = {
      title : this.enteredTitle,
      content : this.enteredContent}
    this.playAudio();
    this.postCreated.emit(post);
  }

  constructor() { }

  ngOnInit() {
  }

}
