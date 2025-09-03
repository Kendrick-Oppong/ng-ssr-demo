import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-ssr-demo',
  imports: [CommonModule, RouterLink],
  templateUrl: './ssr-demo.component.html',
  styleUrl: './ssr-demo.component.css',
})
export class SsrDemoComponent implements OnInit {
  public products = signal<Product[]>([]);

  private readonly productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => this.products.set(products),
    });
    console.log('SSR initialized');
  }
}
