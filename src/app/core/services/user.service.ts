import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User, RandomUserResponse } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersList: User[] = [];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<RandomUserResponse>(`${environment.apiUrl}/?results=50`).pipe(
      map(response => {
        const users = response.results.map((user, index) => ({
          ...user,
          id: `${user.name.first}-${user.name.last}-${index}`
        }));
        this.usersList = users;
        return users;
      }),
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]);
      })
    );
  }

  getUserById(id: string): User | null {
    const user = this.usersList.find(u => u.id === id);
    if (user) {
      return user;
    }
    
    const parts = id.split('-');
    if (parts.length >= 3) {
      const index = parseInt(parts[parts.length - 1], 10);
      if (!isNaN(index) && this.usersList.length > 0) {
        return null;
      }
    }
    
    return null;
  }
}
