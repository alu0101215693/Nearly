@builtin "whitespace.ne"

@{%
const nm = require('nearley-moo');
const tokens = require('./egg-tokens.js');

nm(tokens);

%}

expression -> STRING 
            | NUMBER
            | WORD apply

apply -> null
        | %LP (expression %COMMA):* expression:? %RP apply

STRING -> %string

NUMBER -> %number:+

WORD -> %word
