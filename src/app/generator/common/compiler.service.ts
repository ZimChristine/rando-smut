import { Injectable } from '@angular/core';
import { Token, TokenType } from './token.model';

@Injectable()
export class CompilerService {
  private _vocab: object;

  public constructor(vocab: object) {
    this._vocab = vocab;
  }

  private _getFromVocab(token: string): string {
    const tokens = this._vocab[token];
    return tokens[Math.floor(Math.random() * tokens.length)];
  }

  public compileSmut(ast: Token): string {
    return ast.components.reduce((acc, token) => {
      // Base cases -- Text token or terminal BNF
      if (token.type === TokenType.TEXT) {
        return acc + token.value;
      }
      if (token.bnfTerminal) {
        return acc + this._getFromVocab(token.value);
      }
      // Recursive step -- Non-terminal BNF
      return acc + this.compileSmut(token);
    }, ast.value || '');
  }
}
