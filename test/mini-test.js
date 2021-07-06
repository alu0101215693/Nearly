const moo = require('moo')
const nearley = require('nearley')
const grammar = require('../egg/egg.js') // compiled from grammar.ne
const tokens = require('../egg/egg-tokens.js')
 
const nm = require('nearley-moo').parser(nearley, grammar) // curried
 
let parser = nm(moo.compile(tokens));
// ignored tokens will not be passed to nearley
// helpful for whitespace and/or comments
parser.ignore('ws'); // may be Array<string> or String
parser.ignore('comments');

// feed your lexer+parser combo as normal
parser.feed('+(1,5)');
