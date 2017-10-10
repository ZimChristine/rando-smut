import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GeneratorService } from './generator/generator.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
