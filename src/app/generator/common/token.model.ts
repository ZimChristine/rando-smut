export enum TokenType { 'SENTENCE', 'TEXT', 'BNF' }

export interface IToken {
  type: TokenType,
  value: string,
  bnfTerminal?: boolean,
  components: Array<IToken>,
}
