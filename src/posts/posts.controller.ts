import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { PostService } from './posts.service';
import { post } from '../types';
import { editPostDto } from './dto/editPost.dto';
@Controller('posts')
export class PostsController {
  constructor(private readonly PostService: PostService) {}
  
  // 1. Una entrada para mostrar la totalidad de Posts (https://jsonplaceholder.typicode.com/posts)
  @Get()
  async getPosts():Promise<post[]> {
    return await this.PostService.getPosts();
  }
  // 2. Una entrada para crear un Post
  @Post()
  async createPost(post:post):Promise<Number>{
    return await this.PostService.createPost(post)
  }
  // 3. Una entrada para editar un Post
  @Put()
  async editPost( @Body() post:editPostDto){
    return await this.PostService.editPost( post)
  }

  // 4. Una entrada de lectura del detalle del Post
  @Get(":id")
  async getPost(@Param() params):Promise<post>{
    return await this.PostService.getPost(params.id)
  }
 
}
