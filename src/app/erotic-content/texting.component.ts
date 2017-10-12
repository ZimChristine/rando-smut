import { Component } from '@angular/core';

import { GeneratorService } from '../generator';

@Component({
  selector: 'texting-advice',
  template: `
    <h2>Texting advice to seduce and enthrall</h2>
    <p>{{adviceIntro}}</p>
    <p>Try texting them some of our patented sexybantz for guaranteed success:</p>
    <div class="content" id="texting">{{advice}}</div>
    <button (click)="updateAdvice()">More advice</button>
    <p><strong>Disclaimer:</strong> Please do not actually send anything from this site to a real human. That would almost certainly be harassment.</p>
  `,
  styleUrls: ['./content.styles.css']
})
export class TextingAdviceComponent {
  public advice: string;
  public adviceIntro: string;
  constructor(private _generator: GeneratorService) {
    this.updateAdvice();
    this.adviceIntro = this._generator.generateSmut(`
    If you're struggling to get a potential suitor on board with the idea of your tying them down and <insert-present> your <insertable-singular> into their <bodypart-orifice>,
    then maybe you need some texting advice!
    `);
  }

  public updateAdvice() {
    this.advice = this._generator.generateSmut('<sexyBanter>');
  }
}
