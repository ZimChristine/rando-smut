import { Injectable, Inject } from '@angular/core';

import { Token, TokenType } from './token.model';
import { appGrammar, GrammarInjectable } from './content/grammar';

@Injectable()
export class ParserService {
  public constructor(@Inject(GrammarInjectable) private _grammar: object) {}

  private _getFromGrammar(token: string): string {
    const tokens = this._grammar[token];
    return tokens[Math.floor(Math.random() * tokens.length)];
  }

  private _tokeniseText(str: string): Array<Token> {
    const tokens: Array<Token> = [];
    let chunk: string = '';

    // Iterate through str, creating appropriate tokens and adding to return array
    for (const char of str) {
      if (/[\[<]/.test(char)) {
        if (chunk) {
          tokens.push(new Token(TokenType.TEXT, chunk));
          chunk = '';
        }
      } else if (/[\]>]/.test(char)) {
        const newToken = new Token(TokenType.BNF, chunk, char == ']');
        tokens.push(newToken);
        if (!newToken.bnfTerminal) {
          newToken.components = this._tokeniseText(this._getFromGrammar(chunk));
        }
        chunk = '';
      } else {
        chunk += char;
      }
    }
    chunk && tokens.push(new Token(TokenType.TEXT, chunk));
    return tokens;
  }

  public parseSmut(str: string): Token {
    const root: Token = new Token(TokenType.SENTENCE);
    root.components = this._tokeniseText(str);
    return root;
  }

}
