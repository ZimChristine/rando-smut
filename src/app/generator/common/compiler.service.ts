import { Injectable, Inject } from '@angular/core';

import { appVocabulary, VocabInjectable } from './content/vocabulary';
import { Token, TokenType } from './token.model';

@Injectable()
export class CompilerService {
  public constructor(@Inject(VocabInjectable) private _vocab: object) {}

  private _getFromVocab(token: string): string {
    const tokenParts: Array<string> = token.split('-');
    let tokens: any = this._vocab[tokenParts.shift()];
    while (tokenParts.length) {
      tokens = tokens[tokenParts.shift()];
    }
    return tokens[Math.floor(Math.random() * tokens.length)];
  }

  public compileSmut(ast: Token): string {
    return ast.components.reduce((acc, token) => {
      // Base cases -- Text token or terminal BNF
      if (token.type === TokenType.TEXT) {
        return acc + token.value;
      }
      if (token.bnfTerminal) {
        console.log(`Compile: \t Token: ${token.value}`);
        return acc + this._getFromVocab(token.value);
      }
      // Recursive step -- Non-terminal BNF
      return acc + this.compileSmut(token);
    }, (ast.type == TokenType.TEXT && ast.value) || '');
  }
}
