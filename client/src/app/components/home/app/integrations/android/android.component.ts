import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {AppService} from 'app/services/app.service';
import {IntegrationService} from 'app/services/integration.service';
import {Channel} from 'app/models/channel.model';
import {App} from 'app/models/app.model';
import {Integration} from 'app/models/integration.model';

@Component({
  selector: 'chz-android',
  templateUrl: './android.component.html',
})
export class AndroidIntegrationComponent implements OnInit {

  public app: App;
  public channel: Channel;

  constructor(private appService: AppService, private integrationService: IntegrationService, private activatedRoute: ActivatedRoute) {

  }

  public ngOnInit() {
    this.channel = this.integrationService.getChannel(Integration.CHANNEL_ANDROID);
    const appId = this.activatedRoute.parent.snapshot.paramMap.get('app');
    this.appService.getApp(appId).subscribe((app: App) => {
      this.app = app;
    });
  }

  public hasIntegration() {
    return this.app.getIntegration(Integration.CHANNEL_ANDROID) !== null;
  }
}
