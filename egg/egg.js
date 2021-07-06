// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const nm = require('nearley-moo');
const tokens = require('./egg-tokens.js');

nm(tokens);

var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "expression", "symbols": ["STRING"]},
    {"name": "expression", "symbols": ["NUMBER"]},
    {"name": "expression", "symbols": ["WORD", "apply"]},
    {"name": "apply", "symbols": []},
    {"name": "apply$ebnf$1", "symbols": []},
    {"name": "apply$ebnf$1$subexpression$1", "symbols": ["expression", COMMA]},
    {"name": "apply$ebnf$1", "symbols": ["apply$ebnf$1", "apply$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "apply$ebnf$2", "symbols": ["expression"], "postprocess": id},
    {"name": "apply$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "apply", "symbols": [LP, "apply$ebnf$1", "apply$ebnf$2", RP, "apply"]},
    {"name": "STRING", "symbols": [string]},
    {"name": "NUMBER$ebnf$1", "symbols": [number]},
    {"name": "NUMBER$ebnf$1", "symbols": ["NUMBER$ebnf$1", number], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NUMBER", "symbols": ["NUMBER$ebnf$1"]},
    {"name": "WORD", "symbols": [word]}
]
  , ParserStart: "expression"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
