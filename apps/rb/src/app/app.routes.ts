import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import {LoanRequestModule} from "../../../credit/src/app/loan-request/loan-request.module";

export const appRoutes: Route[] = [
  {
    path: 'capital-market',
    loadChildren: () =>
      import('capital-market/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'credit',
    loadChildren: () =>
      import('credit/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'credit/loans/request',
    loadChildren: () =>
      import('credit/loan-request.module').then((m) => m.LoanRequestModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
