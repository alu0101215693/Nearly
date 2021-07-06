const number = /[-+]?\d*\.?\d+([eE][-+]?\d+)?/;
const string = /"(((?:[^"\\]|\\.)*))"/;
const word = /([^\s(){}\[\],":.]+|:=)/;
const COMMA = /[,]/;
const ws = /(\s|[#;].*|\/\*(.|\n)*?\*\/)+/;
const LP = /([\{\(])/;
const RP = /([\}\)])/;

const tokens = {
  ws: {match: ws, lineBreaks: true},
  number,
	string,
	word,
	LP,
	RP,
	COMMA
}

module.exports = tokens;
             