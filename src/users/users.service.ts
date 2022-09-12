import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { user } from '../types';

const Axios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users'
});

@Injectable()
export class UsersService {

  async getUsers(): Promise<user[]> {
    const data: user[] = await Axios.get("/").then(res=>res.data)
    return data
  }
  async getUser(id:number): Promise<user> {
    const data: user = await Axios.get(`/${id}`).then(res=>res.data)
    return data
  }

}