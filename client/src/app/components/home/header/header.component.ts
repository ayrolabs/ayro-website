import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {AuthService} from 'app/services/auth.service';
import {AccountService} from 'app/services/account.service';
import {EventService, IEvent} from 'app/services/event.service';
import {Account} from 'app/models/account.model';

@Component({
  selector: 'chz-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  public account: Account;

  private subscriptions: Subscription[] = [];

  constructor(private authService: AuthService, private accountService: AccountService, private eventService: EventService, private router: Router) {

  }

  public ngOnInit() {
    this.accountService.getAuthenticatedAccount().subscribe(
      (account: Account) => {
        if (account) {
          this.account = account;
          this.subscriptions.push(this.eventService.subscribe('account_name_changed', (event: IEvent) => {
            this.account.name = event.value;
          }));
          this.subscriptions.push(this.eventService.subscribe('account_logo_changed', (event: IEvent) => {
            this.account.logo = event.value;
          }));
        }
      }
    );
  }

  public ngOnDestroy() {
    this.unsubscribeEvents();
  }

  public signOut() {
    this.authService.signOut().subscribe(() => {
      this.account = null;
      this.unsubscribeEvents();
      this.router.navigate(['/']);
    });
  }

  private unsubscribeEvents() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
