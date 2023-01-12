import { Component } from '@angular/core';
import {AccountsService} from "@poalim/auth";

@Component({
  selector: 'poalim-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rb';
  constructor(public accountsService: AccountsService) {}
}
