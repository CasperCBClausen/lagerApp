import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {InputTextModule, GrowlModule, CalendarModule, ButtonModule, CheckboxModule, DropdownModule, Button} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LagerComponent } from './components/lager/lager.component';
import { InfoboardComponent } from './components/infoboard/infoboard.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: InfoboardComponent,
    data: { title: 'home' }
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
    LagerComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
