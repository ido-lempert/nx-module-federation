import {Component, OnInit} from '@angular/core';
import {AccountsService} from "@poalim/auth";


@Component({
  selector: 'poalim-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.scss'],
})
export class LoanRequestComponent implements OnInit{
  selectedAccount?: string;

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit(): void {
    this.selectedAccount = this.accountsService.selectedAccount;
  }

}
