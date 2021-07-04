import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TharComponent } from './thar/thar.component';
import { RangeComponent } from './range/range.component';
import { KiaComponent } from './kia/kia.component';

@NgModule({
  declarations: [
    AppComponent,
    TharComponent,
    RangeComponent,
    KiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
