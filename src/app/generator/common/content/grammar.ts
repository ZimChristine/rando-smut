import { InjectionToken } from '@angular/core';

export const appGrammar: object = {
  orifice: ['[open-desirous] [orifice]', '[orifice]'],
  'sex-act-male': ['<inserted> his <insertable> into the <orifice> before him.'],
  preface: ['[preface]', '[preface] and clutching two [insertables],'],
  inserted: ['[inserted]', '[adverb] [inserted]'],
  insertable: ['[adjective] [insertable]', '[insertable]'],
};

export const GrammarInjectable = new InjectionToken<object>('appGrammar');
