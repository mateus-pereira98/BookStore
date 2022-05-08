import { Component, OnInit, Input } from '@angular/core';
import { book } from '../model/book';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  livro!: book;
  constructor() { }

  ngOnInit(): void {
  }

}
