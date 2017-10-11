import { Injectable, Inject } from '@angular/core';

import { appVocabulary, VocabInjectable } from './content/vocabulary';
import { Token, TokenType } from './token.model';

@Injectable()
export class CompilerService {
  public constructor(@Inject(VocabInjectable) private _vocab: object) {}

  private _getFromVocab(token: string): string {
    console.log('token', token);
    const tokenParts = token.split('-');
    const tokens = tokenParts.length === 2 ? this._vocab[tokenParts[0]][tokenParts[1]] : this._vocab[tokenParts[0]];
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
    }, (ast.type == TokenType.TEXT && ast.value) || '');
  }
}
