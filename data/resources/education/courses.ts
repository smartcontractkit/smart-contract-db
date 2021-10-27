import * as Courses from './courses.json';

export interface Course {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const courses: Course[] = Courses;
