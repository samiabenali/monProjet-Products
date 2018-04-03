import { Injectable } from '@angular/core';
import {Product} from '../domain/product';

@Injectable()
export class ProductService {

  constructor() { }

public getProducts(): Product[]{
  return[
    {code: 'P100', libelle: 'cafe', prixUnitaire: 500.5},
      {code: 'P200', libelle: 'cafe', prixUnitaire: 500.5},
      {code: 'P300', libelle: 'cafe', prixUnitaire: 500.5},
      {code: 'P400', libelle: 'cafe', prixUnitaire: 500.5},
      {code: 'P500', libelle: 'eau gazifiée', prixUnitaire: 500.5}
  ];
}

}
