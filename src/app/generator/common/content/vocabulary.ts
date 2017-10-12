import { InjectionToken } from '@angular/core';

export const appVocabulary: object = {
  adjective: {
    general: ['remarkable', 'glorious', 'surprisingly furry', 'precocious', 'finger lickin\'', 'wanton', 'turgid'],
    bodypart: {
      generic: ['slender', 'exquisite', 'ladylike'],
      orifice: ['gaping', 'tight', 'greedy', 'virginal', 'wanton', 'chafed', 'covetous', 'impatient', 'cavernous', 'inviting', 'unremarkable but available', 'heavily bleached'],
    },
  },
  sexyBanter: ['Teach me how to make the finest houmous.'],
  endearment: ['bitch'],
  fuck: {
    past: ['fucked', 'pounded', 'rammed', 'deflowered', 'penetrated'],
  },
  adverb: {
    pleasure: ['roughly', 'gayly', 'left-handedly', 'expertly', 'spasmodically', 'unceasingly', 'fiendishly', 'dispassionately', 'vigorously', 'feverishly'],
    speech: ['coquettishly', 'huskily', '(amplified by a Tuba)'],
  },
  superlative: {
    singular: ['a truly extraordinary', 'an earth-shattering'],
    plural: [],
  },
  preface: [
    'With great effort,',
    'Hanging from the ceiling,',
    'With a wink and two fingers of gin,',
    'Cracking open a much-loved book,',
    'Leaning back, sighing deeply,',
    'Wearing only suspenders and a top hat,'
  ],
  addendum: ['and stroking a previously unseen guinea pig,'],
  inserted: ['forced', 'pounded', 'plunged', 'rammed', 'thrust'],
  orgasm: ['orgasm', 'ecstasy'],
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
      'condom-topped Ketchup bottle',
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
    'panties-down Paris trip',
    'session of afternoon delight',
  ]
};

export const VocabInjectable = new InjectionToken<object>('appVocabulary');
