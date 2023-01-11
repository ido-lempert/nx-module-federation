import { Component, ViewEncapsulation } from '@angular/core';
import {AccountsService} from "@poalim/auth";

/* eslint-disable */

@Component({
  selector: 'poalim-nx-welcome',
  template: `
    <p>loan-request works!</p>

    <pre>
  Account: {{selectedAccount}}
</pre>

  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  selectedAccount?: string;

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit(): void {
    this.selectedAccount = this.accountsService.selectedAccount;
  }
}
