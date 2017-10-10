import { Injectable, Optional, Inject } from '@angular/core';

import { ParserService } from './common/parser.service';
import { CompilerService } from './common/compiler.service';

import { SentencesInjectable, appSentences } from './common/content/sentences';

@Injectable()
export class GeneratorService {
  constructor(private _parser: ParserService, private _compiler: CompilerService, @Inject(SentencesInjectable) private _sentences: Array<string>) {}

  public getSmut(): string {
    const randomSentence = this._sentences[Math.floor(Math.random() * this._sentences.length)];
    return this.generateSmut(randomSentence);
  }

  public generateSmut(str: string): string {
    return this._compiler.compileSmut(this._parser.parseSmut(str));
  }
}
