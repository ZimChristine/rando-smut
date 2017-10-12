# Contributing to RandoSmut

RandoSmut works to a level that's satisfactory for now, but clearly needs improvement in the following areas:

1. Styling;
2. Expanded content.

---

## Styling

Clearly, there is currently no styling. Please raise an issue outlining any major changes you wish to make in this area, so that I know.

## Content

All pull requests are welcome for content. You may find the following outline helpful. The content is comprised of:

1. **Sentences:** This is an array of strings that compose sexy vignettes using text and *non-terminal* symbols (`<symbol>`);
2. **Grammar:** This is an object whose property names represent non-terminal symbols (`<symbol>`) and on whose values should be arrays of strings containing one or more terminal or non-terminal symbols and zero or more chunks of plain text or further objects representing an appropriate namespace;
3. **Vocabulary:** This is object whose property names represent non-terminal symbols (`[symbol]`) and whose values should be arrays of strings containing one string of plain text or further objects representing an appropriate namespace.

Please be aware that sentences should only use non-terminal symbols (`<symbol>`). This provides a useful layer of abstraction which keeps the grammar flexible and makes it easier to expand content.

Many symbols are namespaced (e.g. the symbol `<insert-past>` will resolve to the past array on the insert property). This is to organise similar words together and to make it easier to expand content in such a way that it can be used in a variety of combinations. Namespaces can be of arbitrary depth but do consider that they are intended to be used by humans.

The grammar and vocabulary are not well organised. Any efforts to organise them sensibly would be highly welcome.

### Testing

RandoSmut does not currently handle any invalid content: it will just throw. When you create new content, simply run `npm test` which includes a test for all sentences and all symbols in the grammar. If all the tests pass then you have added no invalid content (of course, it doesn't whether or not new content is comprehensible).

### An example

The sentence:

```
 I would love to take you in the <bodypart-orifice>.
```

Contains the non-terminal symbol `<bodypart-orifice>`. The parser will look this up in the grammar, first looking up bodypart, then the orifice property on bodypart. This is (at the time of writing) an array of two strings:

```
['[adjective-bodypart-orifice] [bodypart-orifice]', '[bodypart-orifice]']
```

Each string contains one or more terminal symbol, which will be resolved to text by looking up their respective entries in the vocabulary. For example, in the first case, the result wold be one randomly selected string from the orifice property of the bodypart property of the adjective property of the exported appVocabulary object, a space, then one randomly selected string from the orifice property of the bodypart property of the appVocabulary object.
