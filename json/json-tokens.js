/**
 * @author Nerea Rodríguez Hernández
 * @email alu0101215693@ull.edu.es
 * @date 01/07/21
 * 
 * @description Este fichero contiene las descripción de los tokens
 * 
 */

const lb = /[{]/;
const rb = /[}]/;
const comma = /[,]/;
const lsqr = /[\[]/;
const rsqr = /[\]]/;
const string = /("(?:[^\\\"]|\\.)*")/;
const colon = /[\:]/;
const number = /[0-9]+/;
const trueToken = /true/;
const falseToken = /false/;
const nullToken = /null/;
const ws = /[\r\n\t\s ]/;

const tokens = {
  lb,
  rb,
  comma,
  lsqr,
  colon,
  string,
  rsqr,
  number,
  trueToken,
  falseToken,
  nullToken,
  ws: {match: ws, lineBreaks: true}
}

module.exports = tokens;