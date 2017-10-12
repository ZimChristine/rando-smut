import { InjectionToken } from '@angular/core';

export const appGrammar: object = {
  sexact: {
    male: [
      `<inserted> his <insertable-singular> into the <bodypart-orifice> before him`,
    ],
    female: [
      `<inserted> her <insertable-singular> into the <bodypart-orifice> before her`,
      `kissed down his <adjective-bodypart-generic> body until her lips met his <bodypart-orifice>.`
    ],
  },
  preface: ['[preface]', '[preface] <addendum>', '[preface] [addendum]', 'Leaning coyly on the <furniture>,'],
  addendum: ['[addendum]', 'and clutching two [insertable-plural],', 'and pounding [adverb-pleasure] on a xylophone,'],
  sexyBanter: [
    `[sexyBanter].`,
    `I long to make your <bodypart-orifice> mine`,
    `Tell me how you want it, <endearment>.`,
    `Before this night is over, you will beg for my <insertable-singular>. If you're lucky, I might give it to you. Are you feeling lucky?`,
  ],
  inserted: ['[inserted]', '[adverb-pleasure] [inserted]'],
  insertable: {
    singular: ['[adjective-general] [insertable-singular]', '[insertable-singular]', '<bodypart-penis>'],
    plural: ['[adjective-general] [insertable-plural]', '[insertable-plural]'],
  },
  bodypart: {
    random: ['<bodypart-orifice>', '<bodypart-penis>'],
    orifice: ['[adjective-bodypart-orifice] [bodypart-orifice]', '[bodypart-orifice]'],
    penis: ['[adjective-general] [bodypart-penis]', '[bodypart-penis]'],
  },
  /*
    PROXIES
    In order to use non-terminals exclusively in the sentences, there are some
    non-terminal proxies to terminal forms where there's no sensible intermediary
  */
  orgasm: ['[orgasm]'],
  endearment: ['[endearment]'],
  funtimez: ['[funtimez]'],
  fuck: {
    past: ['[fuck-past]'],
  },
  adjective: {
    general: ['[adjective-general]'],
    bodypart: {
      orifice: ['[adjective-bodypart-orifice]'],
      generic: ['[adjective-bodypart-generic]', '[adjective-general]'],
    }
  },
  superlative: {
    singular: ['[superlative-singular]'],
  },
  adverb: {
    pleasure: ['[adverb-pleasure]'],
    speech: ['[adverb-speech]'],
  },
  furniture: ['[furniture]'],
};

export const GrammarInjectable = new InjectionToken<object>('appGrammar');
