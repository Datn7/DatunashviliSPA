import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShpComponent } from "./shp.component";
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [ShpComponent, ProductItemComponent],
  imports: [CommonModule],
  exports: [ShpComponent],
})
export class ShopModule {}
