import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthorizationsComponent } from './pages/authorizations/authorizations.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ForecastingComponent } from './pages/forecasting/forecasting.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'authorizations', component: AuthorizationsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'forecasting', component: ForecastingComponent },
  { path: '**', redirectTo: '/login' } // Basic 404 fallback
];
