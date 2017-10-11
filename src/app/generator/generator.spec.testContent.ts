import { Token, TokenType } from './common/token.model';

const testSentence: {
  generatorArray: Array<string>,
  testString: string,
  testAST: Token,
  testResult: string,
} = {
  generatorArray: ['this sentence has <token>s that should be <parse>d'],
  testString: 'this sentence has <token>s that should be <parse>d',
  testAST: new Token(TokenType.SENTENCE),
  testResult: 'this sentence has tokens that should be parsed',
}

const bnf1 = new Token(TokenType.BNF, 'token', false);
bnf1.components = [new Token(TokenType.BNF, 'final', true), new Token(TokenType.BNF, 'expression', true)];
const bnf2 = new Token(TokenType.BNF, 'parse', false);
bnf2.components = [new Token(TokenType.BNF, 'another', true), new Token(TokenType.BNF, 'example', true)]

testSentence.testAST.components = [
  new Token(TokenType.TEXT, 'this sentence has '),
  bnf1,
  new Token(TokenType.TEXT, 's that should be '),
  bnf2,
  new Token(TokenType.TEXT, 'd'),
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
