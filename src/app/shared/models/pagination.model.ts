import { IProduct } from "./product.model";

export interface IPagination {
  pageIndex: number;
  pagSize: number;
  count: number;
  data: IProduct[];
}
