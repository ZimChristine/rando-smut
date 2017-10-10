import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GeneratorService } from './generator/generator.service';
import { ParserService } from './generator/common/parser.service';
import { CompilerService } from './generator/common/compiler.service';

import { appSentences, SentencesInjectable } from './generator/common/content/sentences';
import { appVocabulary, VocabInjectable } from './generator/common/content/vocabulary';
import { appGrammar, GrammarInjectable } from './generator/common/content/grammar';

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
    { provide: GrammarInjectable, useValue: appGrammar },
    { provide: VocabInjectable, useValue: appVocabulary },
    { provide: SentencesInjectable, useValue: appSentences },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
