import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { IPost } from './post';

@Component({
  selector: 'pf-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostsService) {}

  innerWidth: any;
  blogPosts: IPost[] = [];
  subscriber!: Subscription;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.subscriber = this.postService.getPosts().subscribe({
      next: (posts) => (this.blogPosts = posts),
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  resize(): boolean {
    return this.innerWidth > 991;
  }
}
