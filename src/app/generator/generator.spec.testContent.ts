import { IToken, TokenType } from './common/token.model';

const testSentence: {
  testString: string,
  testAST: IToken,
  testResult: string,
} = {
  testString: 'this sentence has <token>s that should be <parse>d',
  testAST: <IToken>{
    type: TokenType.SENTENCE,
    components: <IToken[]>[
      {
        type: TokenType.TEXT,
        value: 'this sentence has ',
        components: [],
      },
      {
        type: TokenType.BNF,
        value: 'token',
        bnfTerminal: false,
        components: [
          {
            type: TokenType.BNF,
            value: 'final',
            bnfTerminal: true,
            components: [],
          },
          {
            type: TokenType.BNF,
            value: 'expression',
            bnfTerminal: true,
            components: [],
          }
        ],
      },
      {
        type: TokenType.TEXT,
        value: 's that should be ',
        components: [],
      },
      {
        type: TokenType.BNF,
        value: 'parse',
        bnfTerminal: false,
        components: [
          {
            type: TokenType.BNF,
            value: 'another',
            bnfTerminal: true,
            components: [],
          },
          {
            type: TokenType.BNF,
            value: 'example',
            bnfTerminal: true,
            components: [],
          }
        ],
      },
      {
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
