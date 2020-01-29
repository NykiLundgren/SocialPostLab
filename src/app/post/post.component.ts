import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../Models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() deletePost: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onDelete(post) {
    this.deletePost.emit(post);
  }
}
