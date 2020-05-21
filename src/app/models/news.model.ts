import { Category } from './category';

export interface News {
  title: string;
  article: string;
  source: string;
  image: string;
  categories: Array<Category>;
  teams: Array<string>;
}
