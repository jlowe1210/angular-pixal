import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PixalModule} from './pixal/pixal.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PixalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
