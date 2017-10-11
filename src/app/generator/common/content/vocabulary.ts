import { InjectionToken } from '@angular/core';

export const appVocabulary: object = {
  adjective: {
    general: ['remarkable', 'glorious', 'surprisingly furry', 'precocious', 'finger lickin\'', 'wanton'],
    bodypart: {
      generic: ['slender', 'exquisite'],
      orifice: ['gaping', 'wanton', 'chafed', 'covetous', 'impatient', 'cavernous', 'inviting', 'unremarkable but available', 'heavily bleached'],
    },
  },
  sexyBanter: [''],
  endearment: ['bitch'],
  adverb: {
    act: ['roughly', 'gayly', 'left-handedly', 'expertly', 'spasmodically', 'unceasingly', 'fiendishly', 'dispassoinately', 'vigorously', 'feverishly'],
    speech: ['coquettishly', 'huskily', '(amplified by a Tuba)'],
  },
  superlative: {
    singular: ['a truly extraordinary', 'an earth-shattering'],
    plural: [],
  },
  preface: ['With great effort,', 'Hanging from the ceiling,', 'With a wink and two fingers of gin,', 'Cracking open a much-loved book,', 'Leaning back, sighing deeply,'],
  addendum: ['and stroking a previously unseen guinea pig,'],
  inserted: ['forced', 'pounded'],
  orgasm: ['orgasm'],
  bodypart: {
    orifice: ['hole', 'meat sandwich', 'gammon flaps', 'tunnel of love', 'Hobbit Hole'],
    penis: [
      'bellend',
      'warm, crusty love baguette',
      'beef baton',
      'flesh of mankind', /* https://inews.co.uk/essentials/culture/books/my-dad-wrote-a-porno-podcast-interview/ */
      'felonious dong',
      'average-sized but nevertheless pleasing penis',   
    ]
  },
  insertable: {
    singular: [
      'staff',
      'supple 11 inch wand of holly with a phoenix feather core',
      'Dick King Smith',
      'TV remote with a condom on it',
      '(hopefully splinter-free) broom handle',
    ],
    plural: [
      'felonious dongs',
      'average-sized but nevertheless pleasing penises',
      'supple 11 inch wands of holly with a phoenix feather core',
      'lubricated porcelain dolls',
    ],
  },
  furniture: [
    'pedal-bin shaped like R2D2',
    'gramophone',
    'armoire',
    'chaise longue',
    'slightly wobbly IKEA coffee table (LACK)'
  ],
  funtimez: [
    'fuckfest',
    'trip to Paris with panties down',
    'session of afternoon delight',
  ]
};

export const VocabInjectable = new InjectionToken<object>('appVocabulary');
