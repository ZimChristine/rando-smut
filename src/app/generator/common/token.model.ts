export enum TokenType { 'SENTENCE', 'TEXT', 'BNF' }

export class Token {
  public type: TokenType;
  public value?: string;
  public bnfTerminal?: boolean;
  public components: Array<Token>;

  constructor(type: TokenType, value?: string, bnfTerminal?: boolean) {
    this.type = type;
    if (value !== undefined) {
      this.value = value;
    }
    if (bnfTerminal !== undefined) {
      this.bnfTerminal = bnfTerminal;
    }
  }
}
