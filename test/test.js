/**
 * University of La Laguna
 * Computer engineering
 * Subject: Language Processors
 * @author Nerea Rodríguez Hernández
 * @date 06-07-2021
 */

const fs = require("fs");
const should = require("should");
const moo = require('moo');
const nearley = require("nearley");
const nearleyMoo = require('nearley-moo');

const lexer = moo.compile(tokens);
const nm = nearleyMoo.parser(nearley, grammar);

describe('Primeras pruebas con nearly', () => {
  describe('Primeras pruebas para Egg', () => {
    const grammar = require('./egg/egg.js'); // compiled from grammar.ne
		const tokens = require('../egg/egg-tokens.js');
		const nm = require('nearley-moo').parser(nearley, grammar) // curried

		let parser = nm(moo.compile(tokens))
 
		// ignored tokens will not be passed to nearley
		// helpful for whitespace and/or comments
		parser.ignore('ws') // may be Array<string> or String
		
		// feed your lexer+parser combo as normal
		parser.feed('if true then moomoomoo else cows')
		
		console.log(parser.results) // just like nearley
  });
});
