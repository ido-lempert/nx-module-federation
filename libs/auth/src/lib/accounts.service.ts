import { Injectable } from '@angular/core';

const getRandomNumber = (length = 1) => {
  return Math.floor(Math.random()*length*10);
};

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  selectedAccount: string;
  constructor() {
    // 12-123-12345
    this.selectedAccount = `${getRandomNumber(2)}-${getRandomNumber(3)}-${getRandomNumber(5)}`;
  }

}
