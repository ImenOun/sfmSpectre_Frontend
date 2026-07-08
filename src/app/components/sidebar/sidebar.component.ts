import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  navItems = [
    { label: 'Tableau de bord', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', route: '/dashboard' },
    { label: 'Utilisateurs', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', route: '/users' },
    { label: 'Autorisations', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 014 10c0 .991.13 1.953.376 2.879.444 1.666 1.157 3.208 2.079 4.549A9 9 0 0012 21a9 9 0 005.545-3.572c.922-1.34 1.635-2.883 2.08-4.55A11.955 11.955 0 0120 10a11.955 11.955 0 01-5.382-2.016z', route: '/authorizations' },
    { label: 'Factures & Redevances', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', route: '/invoices' },
    { label: 'Prévisions (IA)', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', route: '/forecasting' },
    { label: 'Rapports Annuels', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', route: '/reports' }
  ];
}
