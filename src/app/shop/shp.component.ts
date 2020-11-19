import { Component, OnInit } from "@angular/core";
import { IProduct } from "../shared/models/product.model";
import { IWineTypes } from "../shared/models/wineTypes.model";
import { IWineYears } from "../shared/models/wineYears.model";
import { ShopService } from "./shop.service";

@Component({
  selector: "app-shp",
  templateUrl: "./shp.component.html",
  styleUrls: ["./shp.component.scss"],
})
export class ShpComponent implements OnInit {
  products: IProduct[];
  types: IWineTypes[];
  years: IWineYears[];
  wineTypeSelected: number;
  wineYearSelected: number;

  constructor(private _shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getTypes();
    this.getYears();
  }

  getProducts() {
    this._shopService
      .getProducts(this.wineTypeSelected, this.wineYearSelected)
      .subscribe(
        (res) => {
          this.products = res.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getTypes() {
    this._shopService.getTypes().subscribe(
      (res) => {
        this.types = [{ id: 0, name: "ყველა" }, ...res];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getYears() {
    this._shopService.getYears().subscribe(
      (res) => {
        this.years = [{ id: 0, name: "ყველაყისა" }, ...res];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onWineTypeSelected(wineType: number) {
    this.wineTypeSelected = wineType;
    this.getProducts();
  }

  onWineYearSelected(wineYear: number) {
    this.wineYearSelected = wineYear;
    this.getProducts();
  }
}
