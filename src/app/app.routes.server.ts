import { RenderMode, ServerRoute } from '@angular/ssr';
import { inject } from '@angular/core';
import { ProductService } from './services/product.service';
import { firstValueFrom } from 'rxjs';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'csr',
    renderMode: RenderMode.Client,
  },
  {
    path: 'ssr',
    renderMode: RenderMode.Server,
  },
  {
    path: 'ssg',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,

    // async getPrerenderParams() {
    //   const productService = inject(ProductService);
    //   const products = await firstValueFrom(productService.getProducts());
    //   return products.map((product) => ({ id: product.id.toString() }));
    // },
  },
];
