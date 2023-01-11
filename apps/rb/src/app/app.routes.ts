import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'credit',
    loadChildren: () =>
      import('credit/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'credit/loans/request',
    loadChildren: () =>
      import('credit/loan-request').then((m) => m.LoanRequestModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
