import { Component, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader/skeleton-loader.component';
import * as XLSX from 'xlsx';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, SkeletonLoaderComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users = signal<User[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);
  searchTerm = signal<string>('');
  currentPage = signal<number>(1);
  itemsPerPage = signal<number>(10);

  filteredUsers = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    // Eliminar duplicados por ID antes de filtrar
    const uniqueUsers = Array.from(
      new Map(this.users().map(user => [user.id, user])).values()
    );
    
    return uniqueUsers.filter(user => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      const email = user.email.toLowerCase();
      const country = user.location.country.toLowerCase();
      
      const matchesSearch = !term || 
        fullName.includes(term) || 
        email.includes(term) || 
        country.includes(term);
      
      return matchesSearch;
    });
  });

  paginatedUsers = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    const end = start + this.itemsPerPage();
    return this.filteredUsers().slice(start, end);
  });

  totalPages = computed(() => {
    return Math.ceil(this.filteredUsers().length / this.itemsPerPage());
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading.set(true);
    this.error.set(null);
    this.userService.getUsers().pipe(
      delay(1500)
    ).subscribe({
      next: (users) => {
        const uniqueUsers = Array.from(
          new Map(users.map(user => [user.id, user])).values()
        );
        
        this.users.set(uniqueUsers);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los usuarios');
        this.loading.set(false);
        console.error(err);
      }
    });
  }

  getFullName(user: User): string {
    return `${user.name.first} ${user.name.last}`;
  }

  getInitials(user: User): string {
    return `${user.name.first[0]}${user.name.last[0]}`.toUpperCase();
  }

  getAddress(user: User): string {
    const street = `${user.location.street.number} ${user.location.street.name}`;
    const city = user.location.city;
    const state = user.location.state;
    const postcode = user.location.postcode;
    return `${street}, ${city}, ${state} ${postcode}`;
  }

  getCountryCode(countryName: string): string {
    // Mapeo de nombres de países a códigos ISO 3166-1 alpha-2
    const countryMap: { [key: string]: string } = {
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
      'South Korea': 'kr',
      'India': 'in',
      'Thailand': 'th',
      'Philippines': 'ph',
      'Indonesia': 'id',
      'Malaysia': 'my',
      'Singapore': 'sg',
      'New Zealand': 'nz',
      'South Africa': 'za',
      'Egypt': 'eg',
      'Ireland': 'ie',
      'Israel': 'il',
      'Saudi Arabia': 'sa',
      'United Arab Emirates': 'ae',
      'Ukraine': 'ua'
    };

    return countryMap[countryName] || countryName.substring(0, 2).toLowerCase();
  }

  getFlagUrl(countryName: string): string {
    const countryCode = this.getCountryCode(countryName);
    return `https://flagcdn.com/w40/${countryCode}.png`;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    const initials = img.getAttribute('data-initials') || 'U';
    img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%236b7280'%3E${initials}%3C/text%3E%3C/svg%3E`;
  }

  onSearch(value: string): void {
    this.searchTerm.set(value);
    this.currentPage.set(1);
  }

  goToDetail(userId: string): void {
    this.router.navigate(['/users', userId]);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(page => page - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(page => page + 1);
    }
  }

  exportToExcel(): void {
    if (this.filteredUsers().length === 0) {
      alert('No hay usuarios para exportar');
      return;
    }

    try {
      const data = this.filteredUsers().map(user => ({
        'Nombre': `${user.name.first} ${user.name.last}`,
        'Email': user.email,
        'País': user.location.country
      }));

      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Usuarios');
      
      const colWidths = [
        { wch: 25 }, // Nombre
        { wch: 35 }, // Email
        { wch: 20 }  // País
      ];
      worksheet['!cols'] = colWidths;

      const date = new Date();
      const dateStr = date.toISOString().split('T')[0];
      const timeStr = date.toTimeString().split(' ')[0].replace(/:/g, '-');
      const filename = `usuarios_${dateStr}_${timeStr}.xlsx`;

      XLSX.writeFile(workbook, filename);
    } catch (error) {
      console.error('Error al exportar a Excel:', error);
      alert('Error al exportar el archivo. Por favor, intenta nuevamente.');
    }
  }

  get Math() {
    return Math;
  }
}
