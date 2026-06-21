import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

export type ThemeName = 'light' | 'dark' | 'teal' | 'indigo';
export type LayoutDensity = 'comfortable' | 'compact' | 'wide';
export type FontFamily = 'system' | 'arial' | 'georgia' | 'mono';

export interface ThemeOption {
  label: string;
  value: ThemeName;
}

export interface LayoutOption {
  label: string;
  value: LayoutDensity;
}

export interface FontOption {
  label: string;
  value: FontFamily;
}

@Injectable({ providedIn: 'root' })
export class AppearanceService {
  private readonly document = inject(DOCUMENT);
  private readonly themeStorageKey = 'hrms-theme';
  private readonly layoutStorageKey = 'hrms-layout';
  private readonly fontStorageKey = 'hrms-font';

  readonly themes: ThemeOption[] = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Teal', value: 'teal' },
    { label: 'Indigo', value: 'indigo' },
  ];

  readonly layouts: LayoutOption[] = [
    { label: 'Comfortable', value: 'comfortable' },
    { label: 'Compact', value: 'compact' },
    { label: 'Wide', value: 'wide' },
  ];

  readonly fonts: FontOption[] = [
    { label: 'System', value: 'system' },
    { label: 'Arial', value: 'arial' },
    { label: 'Georgia', value: 'georgia' },
    { label: 'Mono', value: 'mono' },
  ];

  readonly theme = signal<ThemeName>(this.readStoredValue(this.themeStorageKey, 'light'));
  readonly layout = signal<LayoutDensity>(this.readStoredValue(this.layoutStorageKey, 'comfortable'));
  readonly font = signal<FontFamily>(this.readStoredValue(this.fontStorageKey, 'system'));
  readonly activeThemeLabel = computed(
    () => this.themes.find((theme) => theme.value === this.theme())?.label ?? 'Light',
  );
  readonly activeLayoutLabel = computed(
    () => this.layouts.find((layout) => layout.value === this.layout())?.label ?? 'Comfortable',
  );
  readonly activeFontLabel = computed(
    () => this.fonts.find((font) => font.value === this.font())?.label ?? 'System',
  );

  constructor() {
    this.applyAppearance();
  }

  setTheme(theme: ThemeName): void {
    this.theme.set(theme);
    this.writeStoredValue(this.themeStorageKey, theme);
    this.applyAppearance();
  }

  setLayout(layout: LayoutDensity): void {
    this.layout.set(layout);
    this.writeStoredValue(this.layoutStorageKey, layout);
    this.applyAppearance();
  }

  setFont(font: FontFamily): void {
    this.font.set(font);
    this.writeStoredValue(this.fontStorageKey, font);
    this.applyAppearance();
  }

  private applyAppearance(): void {
    const body = this.document.body;
    body.classList.remove(
      'theme-light',
      'theme-dark',
      'theme-teal',
      'theme-indigo',
      'layout-comfortable',
      'layout-compact',
      'layout-wide',
      'font-system',
      'font-arial',
      'font-georgia',
      'font-mono',
    );
    body.classList.add(`theme-${this.theme()}`, `layout-${this.layout()}`, `font-${this.font()}`);
  }

  private readStoredValue<T extends string>(key: string, fallback: T): T {
    if (typeof localStorage === 'undefined') {
      return fallback;
    }

    return (localStorage.getItem(key) as T | null) ?? fallback;
  }

  private writeStoredValue(key: string, value: string): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(key, value);
  }
}
