import { TestBed } from '@angular/core/testing';

import { FictionComponent } from './fiction.component';
import { GeneratorService } from './generator';
import { ParserService } from './generator/common/parser.service';
import { CompilerService } from './generator/common/compiler.service';

import testContent from './generator/generator.spec.testContent';

describe('Fiction copmonent', () => {
  beforeEach(() => {
    const parser: ParserService = new ParserService(testContent.testGrammar);
    const compiler: CompilerService = new CompilerService(testContent.testVocabulary);
    const generator: GeneratorService = new GeneratorService(parser, compiler, testContent.testSentence.generatorArray);

    TestBed.configureTestingModule({
      declarations: [
        FictionComponent,
      ],
      providers: [
        { provide: ParserService, useValue:  parser },
        { provide: CompilerService, useValue: compiler },
        { provide: GeneratorService, useValue: generator },
      ],
    });
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(FictionComponent);
    const fiction = fixture.debugElement.componentInstance;
    expect(fiction).toBeTruthy();
  });

  it('has erotic fiction', () => {
    const fixture = TestBed.createComponent(FictionComponent);
    const fiction = fixture.debugElement.nativeElement;
    expect(fiction.querySelector('#fiction').textContent).toContain('test');
  });
});
