import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-csr-demo',
  imports: [CommonModule, RouterLink],
  templateUrl: './csr-demo.component.html',
  styleUrl: './csr-demo.component.css',
})
export class CsrDemoComponent implements OnInit {
  products = signal<Product[]>([]);
  loading = signal(true);

  private readonly productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });

    console.log('CSR initialized');
  }
}
