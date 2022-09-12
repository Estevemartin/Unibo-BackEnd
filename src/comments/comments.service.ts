import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { comment } from '../types';

const Axios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/comments'
});

@Injectable()
export class CommentsService {

  async getPostsComments(postId:string): Promise<comment[]> {
    const data: comment[] = await Axios.get("/").then(res=>res.data)
    const filteredData: comment[] = data.filter(post=>post.postId==postId)
    
    return filteredData
  }
}
