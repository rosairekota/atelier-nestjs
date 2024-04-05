import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  private posts = new Array<any>([]);
  constructor() {
    this.posts = [
      {
        id: 1,
        title: 'Blog 1',
        content: 'Blog 1 content',
      },
      {
        id: 2,
        title: 'Blog 2',
        content: 'Blog 2 content',
      },
      {
        id: 3,
        title: 'Blog 3',
        content: 'Blog 3 content',
      },
      {
        id: 4,
        title: 'Blog 4',
        content: 'Blog 4 content',
      },
      {
        id: 5,
        title: 'Blog 5',
        content: 'Blog 5 content',
      },
    ];
  }
  getAllPosts() {
    return { posts: this.posts };
  }

  getOnePost(id: number) {
    const post = this.posts.find((post: any) => post.id === id);
    return post;
  }
}
