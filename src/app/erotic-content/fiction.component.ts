import { Component } from '@angular/core';

import { GeneratorService } from '../generator';

@Component({
  selector: 'erotic-fiction',
  template: `
    <h2>Here is some erotic fiction to help you start: </h2>
    <div class="content" id="fiction">{{smut}}</div>
    <button (click)="updateSmut()">More please</button>
  `,
  styleUrls: ['./content.styles.css']
})
export class FictionComponent {
  public smut: string;

  constructor(private _fictionGenerator: GeneratorService) {
    this.updateSmut();
  }

  public updateSmut() {
    this.smut = this._fictionGenerator.getSmut();
  }
};
