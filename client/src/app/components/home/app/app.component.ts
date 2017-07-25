
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {AppService} from 'app/services/app.service';
import {IntegrationService} from 'app/services/integration.service';
import {Channel} from 'app/models/channel.model';
import {App} from 'app/models/app.model';

@Component({
  selector: 'chz-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  public app: App;

  constructor(private appService: AppService, private integrationService: IntegrationService, private activatedRoute: ActivatedRoute) {

  }

  public ngOnInit() {
    this.activatedRoute.params.subscribe((params: {app: string}) => {
      this.appService.getApp(params.app).subscribe((app: App) => {
        this.app = app;
      });
    });
  }

  public getChannel(id: string): Channel {
    return this.integrationService.getChannel(id);
  }
}
