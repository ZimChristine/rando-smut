import { InjectionToken } from '@angular/core';

export const appSentences: Array<string> = [
  `<preface> he <sexact-male>`,
  `<preface> he <sexact-male>, then sighed deeply before submitting to <superlative-singular> [orgasm]`,
  `She <sexact-female>`,
  `But before he <sexact-male>, he [adverb-act] threw her onto the <furniture> and whispered <adverb-speech> into her ear: '<sexyBanter>'.`,
  `
    She had seen a good many <insertable-plural> in her life, but this was <adjective-general>.
    Now, she was expecting <superlative-singular> <funtimez>.
  `
];

export const SentencesInjectable = new InjectionToken<string[]>('sentences');
