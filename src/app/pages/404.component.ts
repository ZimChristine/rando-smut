import { Component } from '@angular/core';

import { GeneratorService } from '../generator';

@Component({
  template: `
    <div style="margin:auto; width: 70%;">
      <h1>404</h1>
      {{message}}
    </div>
  `
})
export class Error404Component {
  public message: string;

  constructor(private _generator: GeneratorService) {
    this.message = _generator.generateSmut('You <fuck-past> it right in the <bodypart-orifice>, <endearment-phrase>');
  } 
}
