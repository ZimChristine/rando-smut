import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GeneratorService } from './generator/generator.service';
import { ParserService } from './generator/common/parser.service';
import { CompilerService } from './generator/common/compiler.service';

import { appSentences, SentencesInjectable } from './generator/common/content/sentences';
import { appVocabulary, VocabInjectable } from './generator/common/content/vocabulary';
import { appGrammar, GrammarInjectable } from './generator/common/content/grammar';

import { AppComponent } from './app.component';
import { FictionComponent, TextingAdviceComponent } from './erotic-content';
import { Error404Component } from './pages';

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    FictionComponent,
    TextingAdviceComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
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
