import { Injectable } from '@angular/core';
import { Token, TokenType } from './token.model';

@Injectable()
export class CompilerService {
  private _vocab: object;

  public constructor(vocab: object) {
    this._vocab = vocab;
  }

  public compileSmut(ast: Token): string {
    return '';
  }
}
