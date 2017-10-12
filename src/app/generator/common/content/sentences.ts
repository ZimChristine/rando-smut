import { InjectionToken } from '@angular/core';

export const appSentences: Array<string> = [
  `<preface> he <sexact-male>`,
  `<preface> he <sexact-male>, then sighed deeply before submitting to <superlative-singular> [orgasm]`,
  `She <sexact-female>`,
  `But before he <sexact-male>, he <adverb-pleasure> threw her onto the <furniture> and whispered <adverb-speech> into her ear: '<sexyBanter>'.`,
  `
    She had seen a good many <insertable-plural> in her life, but this was <adjective-general>.
    Now, she was expecting <superlative-singular> <funtimez>.
  `,
  `
    She <fuck-past> him <adverb-pleasure> with her <insertable-singular>, possessing his <bodypart-orifice> completely.
    He clearly needed training. She took his <bodypart-random> in her hands and <adverb-pleasure> tweaked him to <superlative-singular> <orgasm>.
    "<sexyBanter>" she <adverb-speech> informed him, releasing her grasp.
  `
];

export const SentencesInjectable = new InjectionToken<string[]>('sentences');
