import { API_URL } from '../constants';
import { Post } from '../types';

export class DemoApiService {
  static async getPosts(): Promise<Post[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data;
  }
}
