import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { post } from '../types';

const Axios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

@Injectable()
export class PostService {

  async getPosts(): Promise<post[]> {
    const data: post[] = await Axios.get("/").then(res=>res.data)
    return data
  }
  async getPost(id):Promise<post>{
    const data:post = await Axios.get(`/${id}`).then(res=>res.data)
    return data
  }

  async createPost(post:post): Promise<number>{
    const status: number = await Axios.post("/",{post}).then(res=>res.status)
    return status
  }

  async editPost(post:post): Promise<post>{
    const data: post = await Axios.put(`/${post.id}`,post).then(res=>res.data)
    return data
  }
}