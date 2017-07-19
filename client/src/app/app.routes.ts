import {Routes} from '@angular/router';

import {SignUpComponent} from 'app/components/signup/signup.component';
import {SignInComponent} from 'app/components/signin/signin.component';
import {HomeComponent} from 'app/components/home/home.component';
import {DashboardComponent} from 'app/components/home/dashboard/dashboard.component';
import {AppComponent} from 'app/components/home/app/app.component';
import {IntegrationsComponent} from 'app/components/home/integrations/integrations.component';

export const AppRoutes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: '', component: HomeComponent, children: [
    {path: '', component: DashboardComponent},
    {path: 'apps/:id', component: AppComponent},
    {path: 'apps/:id/integrations', component: IntegrationsComponent},
  ]},
];
