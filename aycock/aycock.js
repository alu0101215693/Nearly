// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "INPUT", "symbols": ["A", "A", "A", "A"]},
    {"name": "A", "symbols": [{"literal":"a"}]},
    {"name": "A", "symbols": ["E"]},
    {"name": "E", "symbols": []}
]
  , ParserStart: "INPUT"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
