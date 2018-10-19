import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {InputTextModule, GrowlModule, CalendarModule, ButtonModule, CheckboxModule, DropdownModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { IndComponent } from './components/ind/ind.component';
import { InfoboardComponent } from './components/infoboard/infoboard.component';

import {IndService} from './services/ind/ind.service';
import {NotificationService} from './services/notification/notification.service';

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
    InfoboardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
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
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
