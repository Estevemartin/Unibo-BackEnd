import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostService } from './posts/posts.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';
@Module({
  imports: [],
  controllers: [AppController, PostsController, UsersController, CommentsController],
  providers: [AppService, PostService, UsersService, CommentsService],
})
export class AppModule {}
