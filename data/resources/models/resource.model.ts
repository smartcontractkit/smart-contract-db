export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  src?: string;
  tag?: string;
  type?: string;
}

export interface TaggedResource {
  tag?: string;
  data: Resource[];
}

export interface ResourceParam {
  id: string;
  title: string;
  data: Resource[] | TaggedResource[];
}
