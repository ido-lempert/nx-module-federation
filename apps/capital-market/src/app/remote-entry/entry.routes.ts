import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent, children: [
      {path: '', loadChildren: () => import('credit/loan-request.module').then((m) => m.LoanRequestModule)}
  ] },
];
