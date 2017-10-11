import { InjectionToken } from '@angular/core';

export const appVocabulary: object = {
  orifice: ['hole', 'meat sandwich', 'gammon flaps', 'tunnel of love', 'Hobbit Hole'],
  adjective: {
    general: ['remarkable', 'glorious', 'surprisingly furry'],
    openDesirous: ['gaping', 'wanton', 'covetous', 'impatient', 'cavernous'],
  },
  adverb: ['roughly', 'gayly'],
  superlative: {
    singular: ['truly extraordinary', 'earth-shattering'],
    plural: [],
  },
  preface: ['With great effort,', 'Hanging from the ceiling,'],
  inserted: ['forced', 'pounded'],
  orgasm: ['orgasm'],
  insertable: {
    singular: [
      'flesh of mankind' /* https://inews.co.uk/essentials/culture/books/my-dad-wrote-a-porno-podcast-interview/ */,
      'felonious dong',
      'average-sized but nevertheless pleasing penis',
      'staff',
      'supple 11 inch wand of holly with a phoenix feather core',
    ],
    plural: [
      'felonious dongs',
      'average-sized but nevertheless pleasing penises',
      'staves',
      'supple 11 inch wands of holly with a phoenix feather core',
    ],
  },
  furniture: [
    'pedal-bin shaped like R2D2',
    'gramophone',
    'armoire',
    'chaise longue',
    'slightly wobbly IKEA coffee table (LACK)'
  ]
};

export const VocabInjectable = new InjectionToken<object>('appVocabulary');
