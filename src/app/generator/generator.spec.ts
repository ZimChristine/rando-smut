import { GeneratorService } from './generator.service';
import { ParserService } from './common/parser.service';
import { CompilerService } from './common/compiler.service';

import { appVocabulary } from './common/content/vocabulary';
import { appGrammar } from './common/content/grammar';
import { appSentences } from './common/content/sentences';

import testContent from './generator.spec.testContent';

describe('Generator', () => {
  const parser: ParserService = new ParserService(testContent.testGrammar);
  const compiler: CompilerService = new CompilerService(testContent.testVocabulary);
  const generator: GeneratorService = new GeneratorService(parser, compiler, testContent.testSentence.generatorArray);

  it('should correctly parse a basic string', () => 
    expect(parser.parseSmut(testContent.testSentence.testString)).toEqual(testContent.testSentence.testAST)
  ) 

  it('should correctly compile a basic AST', () => 
  expect(compiler.compileSmut(testContent.testSentence.testAST)).toEqual(testContent.testSentence.testResult)
) 

  it('should correctly generate a basic sentence from a given string', () => 
    expect(generator.generateSmut(testContent.testSentence.testString)).toBe(testContent.testSentence.testResult)
  )

  it('should correctly generate a basic sentence from its own sentences', () => 
    expect(generator.getSmut()).toBe(testContent.testSentence.testResult)
  )
});

describe('The content', () => {
  const parser: ParserService = new ParserService(appGrammar);
  const compiler: CompilerService = new CompilerService(appVocabulary);
  const generator: GeneratorService = new GeneratorService(parser, compiler, appSentences);

  it('should load without error', () => {
    expect(generator).toBeTruthy();
  });

  it('should contain valid sentences with only valid non-terminal symbols', () => {
    appSentences.forEach(sentence => {
      expect(sentence).not.toContain('[');
      expect(() => generator.generateSmut(sentence)).not.toThrow();
    });
  });

  it('should have a valid grammar with no dead ends', () => {
    const allGrammarSymbols: Array<string> = resolveSymbols(appGrammar, []);
    allGrammarSymbols.forEach(symbol => {
      expect(() => generator.generateSmut(symbol)).not.toThrow();
    });
    
    
    function resolveSymbols(grammar: object, arr: string[]): string[] {
      for (const symbol in grammar) {
        if (Array.isArray(grammar[symbol])) {
          arr.push(...grammar[symbol])
        } else {
          arr.push(...resolveSymbols(grammar[symbol], arr));
        }
      }
      return arr;
    }
  });

});
