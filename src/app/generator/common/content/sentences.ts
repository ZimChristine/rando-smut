import { InjectionToken } from '@angular/core';

export const appSentences: Array<string> = [
  'a sentence'
];

export const SentencesInjectable = new InjectionToken<Array<string>>('sentences');
