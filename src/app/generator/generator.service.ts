import { Injectable } from '@angular/core';

import { ParserService } from './common/parser.service';
import { CompilerService } from './common/compiler.service';

@Injectable()
export class GeneratorService {
  constructor(private _parser: ParserService, private _compiler: CompilerService) {}

  public generateSmut(str: string): string {
    return this._compiler.compileSmut(this._parser.parseSmut(str));
  }
}
