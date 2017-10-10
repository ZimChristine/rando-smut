import { Injectable } from '@angular/core';
import { IToken, TokenType } from './token.model';

@Injectable()
export class CompilerService {
  private _vocab: object;

  public constructor(vocab: object) {
    this._vocab = vocab;
  }

  public compileSmut(ast: IToken): string {
    return '';
  }
}
