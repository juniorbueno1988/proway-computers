import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  protudos: IProduto[] = produtos;
  produtos: any;

  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find((produto: { id: number; }) => produto.id = produtoId);
  }
}
