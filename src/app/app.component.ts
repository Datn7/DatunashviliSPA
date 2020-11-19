import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { IPagination } from "./shared/models/pagination.model";
import { IProduct } from "./shared/models/product.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "DatunashviliSPA";
  products: IProduct[];
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get("http://localhost:5000/api/products?pageSize=50").subscribe(
      (response: IPagination) => {
        this.products = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
