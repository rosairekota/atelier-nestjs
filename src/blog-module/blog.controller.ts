import { BlogService } from './blog.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('blog')
@ApiTags('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}
  @Get()
  getAllPosts() {
    return this.blogService.getAllPosts();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
   
    return this.blogService.getOnePost(Number(id));
  }
}
