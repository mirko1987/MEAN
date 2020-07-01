import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {title :"Prova", content:"prova"},
    {title :"Prova", content:"prova"},
    {title :"Prova", content:"prova"}

    ];


  constructor() { }

  ngOnInit() {
  }

}
