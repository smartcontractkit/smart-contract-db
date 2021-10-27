import * as Resources from './resources.json';

export interface Course {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const courses: Course[] = Resources.Courses;
