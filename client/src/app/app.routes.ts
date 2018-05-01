import {Routes} from '@angular/router';

import {ContainerComponent} from 'app/components/container/container.component';
import {HomeComponent} from 'app/components/home/home.component';
import {NotFoundComponent} from 'app/components/home/notfound/notfound.component';
import {IntroComponent} from 'app/components/home/intro/intro.component';
import {SignUpComponent} from 'app/components/home/signup/signup.component';
import {SignInComponent} from 'app/components/home/signin/signin.component';
import {TermsComponent} from 'app/components/home/terms/terms.component';
import {PrivacyComponent} from 'app/components/home/privacy/privacy.component';
import {PrivacyEnglishComponent} from 'app/components/home/privacy/privacy-en.component';
import {SettingsComponent} from 'app/components/home/settings/settings.component';
import {AppsComponent} from 'app/components/home/apps/apps.component';
import {AppComponent} from 'app/components/home/app/app.component';
import {AppHomeComponent} from 'app/components/home/app/home/app-home.component';
import {AppSettingsComponent} from 'app/components/home/app/settings/app-settings.component';

// Integrations
import {IntegrationsComponent} from 'app/components/home/app/integrations/integrations.component';
import {WebsiteIntegrationComponent} from 'app/components/home/app/integrations/website/website.component';
import {WebsiteSetupIntegrationComponent} from 'app/components/home/app/integrations/website/setup/website-setup.component';
import {WordPressIntegrationComponent} from 'app/components/home/app/integrations/wordpress/wordpress.component';
import {WordPressSetupIntegrationComponent} from 'app/components/home/app/integrations/wordpress/setup/wordpress-setup.component';
import {AndroidIntegrationComponent} from 'app/components/home/app/integrations/android/android.component';
import {AndroidSetupIntegrationComponent} from 'app/components/home/app/integrations/android/setup/android-setup.component';
import {MessengerIntegrationComponent} from 'app/components/home/app/integrations/messenger/messenger.component';
import {MessengerSetupIntegrationComponent} from 'app/components/home/app/integrations/messenger/setup/messenger-setup.component';
import {SlackIntegrationComponent} from 'app/components/home/app/integrations/slack/slack.component';
import {SlackSetupIntegrationComponent} from 'app/components/home/app/integrations/slack/setup/slack-setup.component';

// Plugins
import {PluginsComponent} from 'app/components/home/app/plugins/plugins.component';
import {OfficeHoursPluginComponent} from 'app/components/home/app/plugins/office-hours/office-hours.component';
import {OfficeHoursSetupPluginComponent} from 'app/components/home/app/plugins/office-hours/setup/office-hours-setup.component';
import {GreetingsMessagePluginComponent} from 'app/components/home/app/plugins/greetings-message/greetings-message.component';
import {GreetingsMessageSetupPluginComponent} from 'app/components/home/app/plugins/greetings-message/setup/greetings-message-setup.component';

// Guides
import {GuidesComponent} from 'app/components/home/guides/guides.component';
import {UserIdentityGuideComponent} from 'app/components/home/guides/user-identity/user-identity-guide.component';
import {UserInformationGuideComponent} from 'app/components/home/guides/user-information/user-information-guide.component';
import {WebsiteGuideComponent} from 'app/components/home/guides/website/website-guide.component';
import {WordPressGuideComponent} from 'app/components/home/guides/wordpress/wordpress-guide.component';
import {AndroidGuideComponent} from 'app/components/home/guides/android/android-guide.component';
import {SlackGuideComponent} from 'app/components/home/guides/slack/slack-guide.component';

export const AppRoutes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: IntroComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'terms', component: TermsComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'en/privacy', component: PrivacyEnglishComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'apps', component: AppsComponent},
    {path: 'apps/integrations', component: ContainerComponent, children: [
      {path: '', component: IntegrationsComponent},
      {path: 'website', component: WebsiteIntegrationComponent},
      {path: 'wordpress', component: WordPressIntegrationComponent},
      {path: 'android', component: AndroidIntegrationComponent},
      {path: 'messenger', component: MessengerIntegrationComponent},
      {path: 'slack', component: SlackIntegrationComponent},
    ]},
    {path: 'apps/:app', component: AppComponent, children: [
      {path: '', component: AppHomeComponent},
      {path: 'settings', component: AppSettingsComponent},
      {path: 'integrations', component: IntegrationsComponent},
      {path: 'integrations/website', component: WebsiteIntegrationComponent},
      {path: 'integrations/website/setup', component: WebsiteSetupIntegrationComponent},
      {path: 'integrations/wordpress', component: WordPressIntegrationComponent},
      {path: 'integrations/wordpress/setup', component: WordPressSetupIntegrationComponent},
      {path: 'integrations/android', component: AndroidIntegrationComponent},
      {path: 'integrations/android/setup', component: AndroidSetupIntegrationComponent},
      {path: 'integrations/messenger', component: MessengerIntegrationComponent},
      {path: 'integrations/messenger/setup', component: MessengerSetupIntegrationComponent},
      {path: 'integrations/slack', component: SlackIntegrationComponent},
      {path: 'integrations/slack/setup', component: SlackSetupIntegrationComponent},
      {path: 'plugins', component: PluginsComponent},
      {path: 'plugins/office-hours', component: OfficeHoursPluginComponent},
      {path: 'plugins/office-hours/setup', component: OfficeHoursSetupPluginComponent},
      {path: 'plugins/greetings-message', component: GreetingsMessagePluginComponent},
      {path: 'plugins/greetings-message/setup', component: GreetingsMessageSetupPluginComponent},
    ]},
    {path: 'guides', component: GuidesComponent, children: [
      {path: 'user-identity', component: UserIdentityGuideComponent},
      {path: 'user-information', component: UserInformationGuideComponent},
      {path: 'website', component: WebsiteGuideComponent},
      {path: 'wordpress', component: WordPressGuideComponent},
      {path: 'android', component: AndroidGuideComponent},
      {path: 'slack', component: SlackGuideComponent},
    ]},
    {path: '**', component: NotFoundComponent},
  ]},
];
