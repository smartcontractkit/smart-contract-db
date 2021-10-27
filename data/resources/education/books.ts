import * as Books from './books.json';

export interface Book {
  id: string;
  title: string;
  description: string;
  link: string;
  src: string;
}

export const books: Book[] = Books;
