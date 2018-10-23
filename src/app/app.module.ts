import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule, GrowlModule, CalendarModule, ButtonModule, CheckboxModule, DropdownModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { IndComponent } from './components/ind/ind.component';
import { UdComponent } from './components/ud/ud/ud.component';
import { StatusComponent } from './components/status/status/status.component';
import { LagerComponent } from './components/lager/lager/lager.component';
import { InfoboardComponent } from './components/infoboard/infoboard.component';

import {IndService} from './services/ind/ind.service';
import {StatusService} from './services/status/status.service';
import {NotificationService} from './services/notification/notification.service';
import {SpinnerService} from './services/spinner/spinner.service';


import {BaseApiService} from './services/apiservices/base/base-api.service';
import {ProductApiService} from './services/apiservices/product/product-api.service';
const appRoutes: Routes = [
  {
    path: 'home',
    component: InfoboardComponent,
    data: { title: 'home' }
  },
  {
    path: 'ind',
    component: IndComponent,
    data: { title: 'Ind' }
  },
  {
    path: 'ud',
    component: UdComponent,
    data: { title: 'Ud' }
  },
  {
    path: 'status',
    component: StatusComponent,
    data: { title: 'Status' }
  },
  {
    path: 'lager',
    component: LagerComponent,
    data: { title: 'Lager' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: InfoboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndComponent,
    InfoboardComponent,
    UdComponent,
    StatusComponent,
    LagerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    GrowlModule
  ],
  providers: [
    IndService,
    StatusService,
    NotificationService,
    SpinnerService,
    ProductApiService,
    BaseApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
