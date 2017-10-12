import { InjectionToken } from '@angular/core';

export const appVocabulary: object = {
  adjective: {
    general: ['remarkable', 'glorious',  'delectable', 'resplendent', 'surprisingly furry', 'precocious', 'finger lickin\'', 'wanton', 'turgid'],
    bodypart: {
      superlative: ['finest', 'tastiest'],
      generic: ['slender', 'delectable', 'exquisite', 'ladylike'],
      orifice: ['gaping', 'delectable', 'tight', 'greedy', 'resplendent', 'virginal',
        'wanton', 'chafed', 'covetous', 'impatient', 'cavernous', 'inviting', 'unremarkable but available',
        'heavily bleached', 'warm', 'lubricated'],
    },
  },
  sexyBanter: ['Teach me how to make the finest houmous', 'Take me to the Vulcan Academy of Love'],
  endearment: ['bitch', 'daddy', 'babe', 'sexy ass mothafucka', 'shawty'],
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
  funtimez: [
    'fuckfest',
    'panties-down Paris trip',
    'session of afternoon delight',
  ],

  /*
    VERBS
  */
  react: {
    past: ['writhed', 'moaned', 'quivered'],
  },
  squirt: {
    past: ['oozed', 'dribbled', 'sprayed', 'pumped', 'ejected', 'gushed'],
  },
  fuck: {
    past: ['fucked', 'pounded', 'rammed', 'deflowered', 'penetrated', 'pleasured', 'tamed', 'rode'],
  },
  insert: {
    present: ['forcing', 'inserting', 'plunging', 'ramming', 'thrusting', 'easing', 'sliding'],
    past: ['forced', 'inserted', 'plunged', 'rammed', 'thrust', 'eased', 'slid'],
  },
  clothing: {
    item: ['Lion King dressing gown', 'gardening trousers', 'thermal underwear', 'swimwear'],
  },

  /*
    NOUNS
  */
  /* ---PERSONAL---*/
  orgasm: ['orgasm', 'ecstasy'],
  bodypart: {
    orifice: ['hole', 'meat sandwich', 'gammon flaps', 'tunnel of love', 'Hobbit Hole', 'pudendum'],
    penis: [
      'bellend',
      'warm, crusty love baguette',
      'beef baton',
      'flesh of mankind', /* https://inews.co.uk/essentials/culture/books/my-dad-wrote-a-porno-podcast-interview/ */
      'felonious dong',
      'average-sized but nevertheless pleasing penis',   
    ]
  },
  /* ---OBJECTS---*/
  insertable: {
    singular: [
      'staff',
      'supple 11 inch wand of holly with a phoenix feather core',
      'Dick King Smith',
      'condom-topped Ketchup bottle',
      '(hopefully splinter-free) broom handle',
    ],
    plural: [
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
  fluid: [
    'semen',
    'lovejuice',
    'jism',
    'spaff',
    'delicious caesar dressing',
  ],
};

export const VocabInjectable = new InjectionToken<object>('appVocabulary');
