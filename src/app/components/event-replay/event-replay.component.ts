import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-replay',
  imports: [CommonModule, RouterLink],
  templateUrl: './event-replay.component.html',
  styleUrl: './event-replay.component.css',
})
export class EventReplayComponent {
  private readonly platformId = inject(PLATFORM_ID);

  public showAlert(): void {
    if (isPlatformBrowser(this.platformId)) {
      alert('Hello from browser!');
    } else {
      console.log('Alert not available during SSR');
    }
  }
}
