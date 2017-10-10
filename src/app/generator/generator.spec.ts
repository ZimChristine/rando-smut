import { GeneratorService } from './generator.service';
import { ParserService } from './common/parser.service';
import { CompilerService } from './common/compiler.service';

import testContent from './generator.spec.testContent';

describe('Generator', () => {
  let parser: ParserService = new ParserService(testContent.testGrammar);
  let compiler: CompilerService = new CompilerService(testContent.testVocabulary);
  let generator: GeneratorService = new GeneratorService(parser, compiler);

  it('should correctly parse a basic string', () => 
    expect(parser.parseSmut(testContent.testSentence.testString)).toEqual(testContent.testSentence.testAST)
  ) 

  it('should correctly compile a basic AST', () => 
  expect(compiler.compileSmut(testContent.testSentence.testAST)).toEqual(testContent.testSentence.testResult)
) 

  it('should correctly generate a basic sentence', () => 
    expect(generator.generateSmut(testContent.testSentence.testString)).toBe(testContent.testSentence.testResult)
  )
});
