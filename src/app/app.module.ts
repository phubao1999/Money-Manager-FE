import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageErrorComponent } from './theme/page-error/page-error.component';
import { DefaultComponent } from './theme/default/default.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    PageErrorComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
