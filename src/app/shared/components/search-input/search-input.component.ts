import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  @Input() placeholder: string = 'Buscar...';
  @Output() searchValue = new EventEmitter<string>();

  searchTerm: string = '';

  onInputChange(): void {
    this.searchValue.emit(this.searchTerm);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchValue.emit('');
  }
}
