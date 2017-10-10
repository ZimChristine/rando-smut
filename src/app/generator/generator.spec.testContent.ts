import { Token, TokenType } from './common/token.model';

const testSentence: {
  testString: string,
  testAST: Token,
  testResult: string,
} = {
  testString: 'this sentence has <token>s that should be <parse>d',
  testAST: new Token(TokenType.SENTENCE),
  testResult: 'this sentence has tokens that should be parsed',
}

testSentence.testAST.components = [
  <Token>{
    type: TokenType.TEXT,
    value: 'this sentence has ',
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
      },
      <Token>{
        type: TokenType.BNF,
        value: 'expression',
        bnfTerminal: true,
      }
    ],
  },
  <Token>{
    type: TokenType.TEXT,
    value: 's that should be ',
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
      },
      <Token>{
        type: TokenType.BNF,
        value: 'example',
        bnfTerminal: true,
      }
    ],
  },
  <Token>{
    type: TokenType.TEXT,
    value: 'd',
  }
]

const testGrammar = {
  token: ['[final][expression]'],
  parse: ['[another][example]'],
};

const testVocabulary = {
  final: ['tok'],
  expression: ['en'],
  another: ['par'],
  example: ['se'],
};

export default {
  testSentence,
  testGrammar,
  testVocabulary,
}
