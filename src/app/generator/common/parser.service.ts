import { Injectable } from '@angular/core';

import { IToken, TokenType } from './token.model';

@Injectable()
export class ParserService {
  private _grammar: object;

  public constructor(grammar: object) {
    this._grammar = grammar;
  }

  public parseSmut(str: string): IToken {
    return {
      type: TokenType.SENTENCE,
      value: '',
      components: [],
    }
  }
}
