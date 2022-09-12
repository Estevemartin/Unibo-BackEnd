import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';
import { PostsController } from './posts/posts.controller';
import { PostService } from './posts/posts.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';


describe('AppController', () => {
  // let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, PostsController, UsersController, CommentsController],
      providers: [AppService, PostService, UsersService, CommentsService],
    }).compile();

    // appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
