import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

import { PeopleModule } from './people/people.module';

// Always include app level routing AFTER any feature/child modules otherwise wildcards etc. will stop the child routes working!
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    PeopleModule,
    BrowserAnimationsModule,
    SidebarModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
