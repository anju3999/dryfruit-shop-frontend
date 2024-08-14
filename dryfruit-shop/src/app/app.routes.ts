import { Routes } from '@angular/router';
import { DryFruitsComponent } from './dry-fruits/dry-fruits/dry-fruits.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'dry-fruits', component: DryFruitsComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dry-fruits', pathMatch: 'full' },
  { path: '**', redirectTo: '/dry-fruits' },
];
