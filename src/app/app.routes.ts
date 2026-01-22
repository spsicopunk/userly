import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'users',
    loadComponent: () => import('./features/users/users.component').then(m => m.UsersComponent)
  },
  {
    path: 'users/:id',
    loadComponent: () => import('./features/user-detail/user-detail.component').then(m => m.UserDetailComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
