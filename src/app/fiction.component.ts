import { Component } from '@angular/core';

import { GeneratorService } from './generator';

@Component({
  selector: 'erotic-fiction',
  template: `
    <div id="fiction">{{smut}}</div>
    <button (click)="_updateSmut()">More please</button>
  `
})
export class FictionComponent {
  public smut: string;

  constructor(private _fictionGenerator: GeneratorService) {
    this._updateSmut();
  }

  private _updateSmut() {
    this.smut = this._fictionGenerator.getSmut();
  }
};
