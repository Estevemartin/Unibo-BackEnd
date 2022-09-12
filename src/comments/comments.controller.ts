import { Controller, Get, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { comment } from 'src/types';

@Controller('comments')
export class CommentsController {
  constructor(private readonly CommentsService: CommentsService) {}

  @Get(":postId")
  async getUser(@Param() params):Promise<comment[]>{
    return await this.CommentsService.getPostsComments(params.postId.toString())
  }
}
