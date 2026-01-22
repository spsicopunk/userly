import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  user = signal<User | null>(null);
  error = signal<string | null>(null);

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      const user = this.userService.getUserById(userId);
      if (user) {
        this.user.set(user);
      } else {
        this.error.set('Usuario no encontrado, intenta con uno nuevo');
      }
    } else {
      this.router.navigate(['/users']);
    }
  }

  getFullName(): string {
    const user = this.user();
    return user ? `${user.name.first} ${user.name.last}` : '';
  }

  getFullAddress(): string {
    const user = this.user();
    if (!user) return '';
    return `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}`;
  }

  getInitials(): string {
    const user = this.user();
    if (!user) return '';
    return `${user.name.first.charAt(0)}${user.name.last.charAt(0)}`.toUpperCase();
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
      // Crear un div con las iniciales como fallback
      const parent = img.parentElement;
      if (parent && !parent.querySelector('.initials-fallback')) {
        const fallback = document.createElement('div');
        fallback.className = 'initials-fallback flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl font-bold border-3 border-white shadow-sm';
        fallback.textContent = this.getInitials();
        parent.appendChild(fallback);
      }
    }
  }

  onFlagError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
    }
  }

  getFlagUrl(country: string): string {
    const countryCodeMap: { [key: string]: string } = {
      'United States': 'us',
      'United Kingdom': 'gb',
      'Canada': 'ca',
      'Australia': 'au',
      'Germany': 'de',
      'France': 'fr',
      'Spain': 'es',
      'Italy': 'it',
      'Brazil': 'br',
      'Mexico': 'mx',
      'Argentina': 'ar',
      'Chile': 'cl',
      'Colombia': 'co',
      'Peru': 'pe',
      'Venezuela': 've',
      'Ecuador': 'ec',
      'Uruguay': 'uy',
      'Paraguay': 'py',
      'Bolivia': 'bo',
      'Netherlands': 'nl',
      'Belgium': 'be',
      'Switzerland': 'ch',
      'Austria': 'at',
      'Sweden': 'se',
      'Norway': 'no',
      'Denmark': 'dk',
      'Finland': 'fi',
      'Poland': 'pl',
      'Portugal': 'pt',
      'Greece': 'gr',
      'Turkey': 'tr',
      'Russia': 'ru',
      'China': 'cn',
      'Japan': 'jp',
      'India': 'in',
      'South Korea': 'kr',
      'Thailand': 'th',
      'Philippines': 'ph',
      'Indonesia': 'id',
      'Malaysia': 'my',
      'Singapore': 'sg',
      'New Zealand': 'nz',
      'South Africa': 'za',
      'Egypt': 'eg',
      'Israel': 'il',
      'Saudi Arabia': 'sa',
      'United Arab Emirates': 'ae',
      'Ireland': 'ie',
    };

    const countryCode = countryCodeMap[country] || country.toLowerCase().substring(0, 2);
    return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
  }
}
