import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FictionComponent } from './fiction.component';

import { GeneratorService } from './generator';
import { ParserService } from './generator/common/parser.service';
import { CompilerService } from './generator/common/compiler.service';

import testContent from './generator/generator.spec.testContent';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const parser: ParserService = new ParserService(testContent.testGrammar);
    const compiler: CompilerService = new CompilerService(testContent.testVocabulary);
    const generator: GeneratorService = new GeneratorService(parser, compiler, testContent.testSentence.generatorArray);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FictionComponent,
      ],
      providers: [
        { provide: ParserService, useValue: parser },
        { provide: CompilerService, useValue: compiler },
        { provide: GeneratorService, useValue: generator },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
