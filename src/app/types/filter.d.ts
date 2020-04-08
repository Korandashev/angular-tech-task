export interface Filter {
  id: string;
  title: string;
  active?: boolean;
}

export interface ActiveFilter {
  name: string;
  value: string | string[];
}
