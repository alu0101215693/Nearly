const tokens = {
  'ws': {match: /\s/, lineBreaks: true},
  'comment': {match: /(?:[#;].*|\/\*(?:.|\n)*?\*\/)+/, lineBreaks: true},
  'COMMA': {match: /\,/, value: d => d},
  'LP': {match: /[\{\(]/, value: d => d},
  'RP': {match: /[\}\)]/, value: d => d},
  'string': {match: /"((?:[^"\\]|\\.)*)"/, value: d => d.slice(1, d.length -1)},
  'number': {match: /[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/, value: d => parseFloat(d)},
  'word': {match: /[^\s(){}\[\],":.]+|:=/, value: (d) => d[1] },
};

module.exports = tokens;

