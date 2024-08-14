import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-dry-fruits-list',
  standalone: true,
  imports: [],
  templateUrl: './dry-fruits-list.component.html',
  styleUrl: './dry-fruits-list.component.scss'
})
export class DryFruitsListComponent {


  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
