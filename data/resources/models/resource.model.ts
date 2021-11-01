export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  startDate?: Date | string;
  endDate?: Date | string;
  location?: string;
  src?: string;
}

export interface TaggedResource {
  tag?: string;
  data: Resource[];
}
