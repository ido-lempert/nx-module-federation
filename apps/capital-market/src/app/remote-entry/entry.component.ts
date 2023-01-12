import { Component } from '@angular/core';
import {AccountsService} from "@poalim/auth";

@Component({
  selector: 'poalim-capital-market-entry',
  template: `
    <h1>Capital Market - remote module</h1>
    <pre>Account: {{accountsService.selectedAccount}}</pre>
    <router-outlet></router-outlet>
  `,
})
export class RemoteEntryComponent {
  constructor(public accountsService: AccountsService) {}
}
