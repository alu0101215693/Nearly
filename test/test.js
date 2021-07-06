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

describe('Primeras pruebas con nearly', () => {
  describe('Primeras pruebas para Egg', () => {
		const grammar = require('../egg/egg.js') // compiled from grammar.ne
		const tokens = require('../egg/egg-tokens.js')
		const nm = require('nearley-moo').parser(nearley, grammar) // curried

		let parser = nm(moo.compile(tokens))
 
		parser.ignore('ws');
		parser.ignore('comments');

		let context = '+(1,3)';

		parser.feed(context);

		it('Comprobación de codigo completo', () => {
			parser.lexer.buffer.should.eql(context);
		});
  });
});
