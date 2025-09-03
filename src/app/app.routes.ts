import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CsrDemoComponent } from './components/csr-demo/csr-demo.component';
import { SsrDemoComponent } from './components/ssr-demo/ssr-demo.component';
import { SsgDemoComponent } from './components/ssg-demo/ssg-demo.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { EventReplayComponent } from './components/event-replay/event-replay.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'csr', component: CsrDemoComponent },
  { path: 'ssr', component: SsrDemoComponent },
  { path: 'ssg', component: SsgDemoComponent },
  { path: 'event-replay', component: EventReplayComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];
