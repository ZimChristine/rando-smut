import { Token, TokenType } from './common/token.model';

const testSentence: {
  testString: string,
  testAST: Token,
  testResult: string,
} = {
  testString: 'this sentence has <token>s that should be <parse>d',
  testAST: <Token>{
    type: TokenType.SENTENCE,
    components: <Token[]>[
      <Token>{
        type: TokenType.TEXT,
        value: 'this sentence has ',
        components: [],
      },
      <Token>{
        type: TokenType.BNF,
        value: 'token',
        bnfTerminal: false,
        components: [
          <Token>{
            type: TokenType.BNF,
            value: 'final',
            bnfTerminal: true,
            components: [],
          },
          <Token>{
            type: TokenType.BNF,
            value: 'expression',
            bnfTerminal: true,
            components: [],
          }
        ],
      },
      <Token>{
        type: TokenType.TEXT,
        value: 's that should be ',
        components: [],
      },
      <Token>{
        type: TokenType.BNF,
        value: 'parse',
        bnfTerminal: false,
        components: [
          <Token>{
            type: TokenType.BNF,
            value: 'another',
            bnfTerminal: true,
            components: [],
          },
          <Token>{
            type: TokenType.BNF,
            value: 'example',
            bnfTerminal: true,
            components: [],
          }
        ],
      },
      <Token>{
        type: TokenType.TEXT,
        value: 'd',
        components: [],
      }
    ],
  },
  testResult: 'this sentence has tokens that should be parsed',
}

const testGrammar = {
  token: ['[final][expression]'],
  parse: ['[another][example]'],
};

const testVocabulary = {
  final: 'tok',
  expression: 'en',
  another: 'par',
  example: 'se',
};

export default {
  testSentence,
  testGrammar,
  testVocabulary,
}
