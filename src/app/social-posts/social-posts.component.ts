import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/Post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})

export class SocialPostsComponent implements OnInit {
  posts: Post[];

  constructor() { }

  ngOnInit() {
    
    this.posts = [
      title: 'Grand Circus',
      thought: 'Grand Circus is cool.'
    ],
    [
      title: 'Ritual',
      thought: 'Ritual is a well developped app.'
    ],
    [
      title: 'Scott',
      thought: 'Scott rides scooters'
    ]

  }


}
