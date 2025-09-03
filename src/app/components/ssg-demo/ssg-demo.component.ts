import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ssg-demo',
  imports: [CommonModule],
  templateUrl: './ssg-demo.component.html',
  styleUrl: './ssg-demo.component.css',
})
export class SsgDemoComponent implements OnInit {
 public readonly staticCategories = signal([
    {
      id: 1,
      name: 'Electronics',
      image: 'https://picsum.photos/200/200?random=1',
      description: 'Latest gadgets and electronic devices',
    },
    {
      id: 2,
      name: 'Clothing',
      image: 'https://picsum.photos/200/200?random=2',
      description: 'Fashion and apparel for all seasons',
    },
    {
      id: 3,
      name: 'Home & Garden',
      image: 'https://picsum.photos/200/200?random=3',
      description: 'Everything for your home and garden',
    },
    {
      id: 4,
      name: 'Sports',
      image: 'https://picsum.photos/200/200?random=4',
      description: 'Sports equipment and fitness gear',
    },
  ]);

  ngOnInit(): void {
    console.log('SSG initialized');
  }
}
