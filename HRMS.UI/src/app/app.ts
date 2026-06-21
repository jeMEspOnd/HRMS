import { Component, inject, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';

import { GlobalLoader } from './shared/common/components/global-loader/global-loader';
import { AppearanceMenu } from './shared/common/components/appearance-menu/appearance-menu';
import { LoadingService } from './shared/common/services/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GlobalLoader, AppearanceMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HRMS.UI');
  private readonly loadingService = inject(LoadingService);
  private readonly router = inject(Router);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.show();
        return;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loadingService.hide();
      }
    });
  }
}
