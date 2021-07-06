// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "P", "symbols": ["S"]},
    {"name": "S", "symbols": ["S", {"literal":"+"}, "M"]},
    {"name": "S", "symbols": ["M"]},
    {"name": "M", "symbols": ["M", {"literal":"*"}, "T"]},
    {"name": "M", "symbols": ["T"]},
    {"name": "T", "symbols": [{"literal":"1"}]},
    {"name": "T", "symbols": [{"literal":"2"}]},
    {"name": "T", "symbols": [{"literal":"3"}]},
    {"name": "T", "symbols": [{"literal":"4"}]},
    {"name": "T", "symbols": [{"literal":"5"}]},
    {"name": "T", "symbols": [{"literal":"6"}]},
    {"name": "T", "symbols": [{"literal":"7"}]},
    {"name": "T", "symbols": [{"literal":"8"}]},
    {"name": "T", "symbols": [{"literal":"9"}]}
]
  , ParserStart: "P"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
