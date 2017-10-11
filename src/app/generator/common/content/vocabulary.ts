import { InjectionToken } from '@angular/core';

export const appVocabulary: object = {
  orifice: ['hole', 'meat sandwich', 'gammon flaps', 'tunnel of love', 'Hobbit Hole'],
  adjective: ['remarkable', 'glorious', 'surprisingly furry'],
  adverb: ['roughly', 'gayly'],
  superlative: ['truly extraordinary'],
  'open-desirous': ['gaping', 'wanton', 'covetous', 'impatient'],
  preface: ['With great effort,', 'Hanging from the ceiling,'],
  inserted: ['forced', 'pounded'],
  insertable: [
    'flesh of mankind' /* https://inews.co.uk/essentials/culture/books/my-dad-wrote-a-porno-podcast-interview/ */,
    'felonious dong',
    'average-sized but nevertheless pleasing penis',
    'staff',
    'supple 11 inch wand of holly with a phoenix feather core'
  ],
  insertables: [
    'felonious dongs',
    'average-sized but nevertheless pleasing penises',
    'staves',
    'supple 11 inch wands of holly with a phoenix feather core'
  ]
};

export const VocabInjectable = new InjectionToken<object>('appVocabulary');
