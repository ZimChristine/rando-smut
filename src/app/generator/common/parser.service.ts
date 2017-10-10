import { Injectable } from '@angular/core';

import { Token, TokenType } from './token.model';

@Injectable()
export class ParserService {
  private _grammar: object;

  public constructor(grammar: object) {
    this._grammar = grammar;
  }

  public parseSmut(str: string, sentence=true): Token {
    const root: Token = new Token(TokenType.SENTENCE);

    // Iterate through str, adding correct components to root IToken
    for (const char of str) {
      if (/[\[<]/.test(char)) {

      }
    }

    return root;
  }
}
