import { InjectionToken } from '@angular/core';

export const appSentences: Array<string> = [
  'insert into <orifice>',
  '<preface> he <sexact-male>',
  '<preface> he <sexact-male> before submitting to [superlative-singular] [orgasm]',
  'But before he <sexact-male>, he [adverb] threw her onto the <furniture>',
];

export const SentencesInjectable = new InjectionToken<string[]>('sentences');
