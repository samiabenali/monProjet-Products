import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

data: Product[];

  constructor() {
    this.data = [
      {code: 'P100', libelle: 'cafe', prixUnitaire: 500.5},
      {code: 'P200', libelle: 'cafe', prixUnitaire: 500.5},
      {code: 'P300', libelle: 'cafe', prixUnitaire: 500.5},
      {code: 'P400', libelle: 'cafe', prixUnitaire: 500.5},
      {code: 'P500', libelle: 'eau gazifiée', prixUnitaire: 500.5}
    ];
  }

  ngOnInit() {
  }

}
