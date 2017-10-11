import { InjectionToken } from '@angular/core';

export const appGrammar: object = {
  orifice: ['[adjective-openDesirous] [orifice]', '[orifice]'],
  sexact: {
    male: ['<inserted> his <insertable-singular> into the <orifice> before him'],
  },
  preface: ['[preface]', '[preface] and clutching two [insertable-plural],'],
  inserted: ['[inserted]', '[adverb] [inserted]'],
  insertable: {
    singular: ['[adjective-general] [insertable-singular]', '[insertable-singular]'],
    plural: ['[adjective-general] [insertable-plural]', '[insertable-plural]'],
  },
  furniture: ['[furniture]'],
};

export const GrammarInjectable = new InjectionToken<object>('appGrammar');
