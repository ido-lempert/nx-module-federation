import { Component } from '@angular/core';
import {AccountsService} from "@poalim/auth";
import {NavigationError, Router, RouterEvent} from "@angular/router";
import {filter, Subscription} from "rxjs";
import {setRemoteDefinitions} from "@nrwl/angular/mf";

@Component({
  selector: 'poalim-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rb';
  private router$: Subscription;

  constructor(public accountsService: AccountsService, private router: Router){
    this.router$ = this.router.events.pipe(
      filter((e) => e instanceof RouterEvent),
      filter((e) => e.constructor.name === 'NavigationError')
    ).subscribe((e: any) => {
      console.error(`Could not load URL "${e.url}" ${e.error}`);

      const d = (new Date).getTime() + '.js';
      setRemoteDefinitions({
          "credit": `http://localhost:4201/remoteEntry.mjs?d=${d}`,
          "capital-market": `http://localhost:4202/remoteEntry.mjs?d=${d}`,
        }
      );

      setTimeout(()=>{
        this.router.navigate([`/${e.url}`]);
      }, 100)

    });
  }

  ngOnDestroy() {
    this.router$?.unsubscribe();
  }
}
