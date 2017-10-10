export enum TokenType { 'SENTENCE', 'TEXT', 'BNF' }

export class Token {
  public components: Array<Token>;

  constructor(public type: TokenType, public value?: string, public bnfTerminal?: boolean) {}
}
