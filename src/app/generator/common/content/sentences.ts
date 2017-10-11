import { InjectionToken } from '@angular/core';

export const appSentences: Array<string> = [
  'insert into <orifice>',
  '<preface> he <sex-act-male>',
  '<preface> he <sex-act-male> before submitting to [superlative-singular] [orgasm]'
];

export const SentencesInjectable = new InjectionToken<string[]>('sentences');
