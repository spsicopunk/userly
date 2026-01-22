import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly THEME_KEY = 'theme';
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';

  currentTheme = signal<'light' | 'dark'>(this.getInitialTheme());

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme(this.currentTheme());
    }
  }

  private getInitialTheme(): 'light' | 'dark' {
    if (!isPlatformBrowser(this.platformId)) {
      return this.LIGHT_THEME as 'light';
    }

    try {
      const savedTheme = localStorage.getItem(this.THEME_KEY);
      if (savedTheme === this.DARK_THEME || savedTheme === this.LIGHT_THEME) {
        return savedTheme as 'light' | 'dark';
      }
    } catch (e) {
      // Continuar con la preferencia del sistema si hay error con localStorage
    }

    try {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return this.DARK_THEME as 'dark';
      }
    } catch (e) {
      // Usar tema claro por defecto si hay error
    }

    return this.LIGHT_THEME as 'light';
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.currentTheme.set(theme);
    
    // Solo guardar en localStorage si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(this.THEME_KEY, theme);
      } catch (e) {
        // Si hay algún error con localStorage, continuar sin guardar
        console.warn('No se pudo guardar el tema en localStorage:', e);
      }
      this.applyTheme(theme);
    }
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      const htmlElement = document.documentElement;
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    } catch (e) {
      console.warn('No se pudo aplicar el tema:', e);
    }
  }
}
