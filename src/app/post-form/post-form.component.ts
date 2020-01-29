import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../Models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted: EventEmitter<any> = new EventEmitter();
  title: string;
  thought: string;

  constructor() { }

  ngOnInit() {
  }

  submitPost(){
    const post = {
      title: this.title,
      thought: this.thought
    }

    this.submitted.emit(post);
  }
}
