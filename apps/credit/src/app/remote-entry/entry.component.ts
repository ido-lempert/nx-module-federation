import { Component } from '@angular/core';
import {AccountsService} from "@poalim/auth";

@Component({
  selector: 'poalim-credit-entry',
  template: `Credit remote component 111
  <pre>Account: {{accountsService.selectedAccount}}</pre>
  `,
})
export class RemoteEntryComponent {
  constructor(public accountsService: AccountsService) {}

}
