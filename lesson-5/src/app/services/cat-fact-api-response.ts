export interface CatFactApiResponse {
  data: FactInfo[];
}

export interface FactInfo {
  fact: string;
  length: number;
}
