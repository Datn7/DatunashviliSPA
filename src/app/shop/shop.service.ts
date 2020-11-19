import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IPagination } from "../shared/models/pagination.model";
import { IWineTypes } from "../shared/models/wineTypes.model";
import { IWineYears } from "../shared/models/wineYears.model";

import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ShopService {
  baseUrl = "http://localhost:5000/api/";

  constructor(private _http: HttpClient) {}

  getProducts(wineType?: number, wineYear?: number) {
    let params = new HttpParams();

    if (wineType) {
      params = params.append("types", wineType.toString());
    }

    if (wineYear) {
      params = params.append("years", wineYear.toString());
    }

    return this._http
      .get<IPagination>(this.baseUrl + "products", {
        observe: "response",
        params,
      })
      .pipe(
        map((res) => {
          return res.body;
        })
      );
  }

  getTypes() {
    return this._http.get<IWineTypes[]>(this.baseUrl + "products/types");
  }

  getYears() {
    return this._http.get<IWineYears[]>(this.baseUrl + "products/years");
  }
}
