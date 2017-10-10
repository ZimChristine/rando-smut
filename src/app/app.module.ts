import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GeneratorService } from './generator/generator.service';
import { ParserService } from './generator/common/parser.service';
import { CompilerService } from './generator/common/compiler.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GeneratorService,
    ParserService,
    CompilerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
