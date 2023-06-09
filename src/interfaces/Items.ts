// Generated by https://quicktype.io

export interface ItemsResult {
  name: string;
  imgSrc: string;
}

export interface ItemsResponse {
  results: ItemsResult[];
}

export interface Items {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
