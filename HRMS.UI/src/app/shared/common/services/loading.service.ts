import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private activeRequests = 0;
  readonly isLoading = signal(false);

  show(): void {
    this.activeRequests += 1;
    this.isLoading.set(true);
  }

  hide(): void {
    this.activeRequests = Math.max(0, this.activeRequests - 1);
    this.isLoading.set(this.activeRequests > 0);
  }

  reset(): void {
    this.activeRequests = 0;
    this.isLoading.set(false);
  }

  async withLoading<T>(work: Promise<T>): Promise<T> {
    this.show();

    try {
      return await work;
    } finally {
      this.hide();
    }
  }
}
