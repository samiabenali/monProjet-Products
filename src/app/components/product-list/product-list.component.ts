import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

public data: Product[];

  constructor(private _service: ProductService) {// déclarer une dépendance sur

  }

  ngOnInit() { // Equivalent @PostConstruct de Java EE
    // this.data = this._service.getProducts();
    this._service.getProducts().subscribe(result => {this.data = result; }
    );
  }

}
