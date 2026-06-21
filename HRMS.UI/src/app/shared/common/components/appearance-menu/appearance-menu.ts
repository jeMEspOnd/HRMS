import { Component, inject, input } from '@angular/core';

import {
  AppearanceService,
  FontFamily,
  LayoutDensity,
  ThemeName,
} from '../../services/appearance.service';

@Component({
  selector: 'app-appearance-menu',
  templateUrl: './appearance-menu.html',
  styleUrl: './appearance-menu.css',
})
export class AppearanceMenu {
  readonly label = input('Theme');
  protected readonly appearance = inject(AppearanceService);
  protected isOpen = false;

  protected toggle(): void {
    this.isOpen = !this.isOpen;
  }

  protected setTheme(theme: ThemeName): void {
    this.appearance.setTheme(theme);
  }

  protected setLayout(layout: LayoutDensity): void {
    this.appearance.setLayout(layout);
  }

  protected setFont(font: FontFamily): void {
    this.appearance.setFont(font);
  }
}
