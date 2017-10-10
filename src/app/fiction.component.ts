import { Component } from '@angular/core';

import { GeneratorService } from './generator';

@Component({
  selector: 'erotic-fiction',
  template: '<div id="fiction">{{smut}}</div>'
})
export class FictionComponent {
  public smut: string;

  constructor(private _fictionGenerator: GeneratorService) {
    this.smut = _fictionGenerator.getSmut();
  }
};
