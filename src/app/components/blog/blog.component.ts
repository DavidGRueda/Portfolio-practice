import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { IPost } from '../home/posts/post';

@Component({
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {
  constructor(private postService: PostsService) {}
  blogPosts: IPost[] = [];
  subscriber!: Subscription;
  errorMessage: string = '';

  ngOnInit(): void {
    this.subscriber = this.postService.getPosts().subscribe({
      next: (posts) => (this.blogPosts = posts),
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
