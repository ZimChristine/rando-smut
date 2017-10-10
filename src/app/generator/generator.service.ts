import { Injectable } from '@angular/core';

import { IToken, TokenType } from './common/token.model';

@Injectable()
export class GeneratorService {

  public generateSmut(str: string): string {
    return '';
  }

  private _parseSmut(str: string): IToken {
    return {
      type: TokenType.SENTENCE,
      value: '',
      components: [],
    }
  }
}
