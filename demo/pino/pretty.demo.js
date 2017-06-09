/**
 * // multi stream
*/

'use strict'
var fs = require('fs');
const defaults = {
  flags: 'a',
  defaultEncoding: 'utf8',
  fd: null,
  mode: 0o666,
  autoClose: true
};

var fstream = fs.createWriteStream('test.log', defaults);

var pino = require('pino')
var pretty = pino.pretty()
pretty.pipe(process.stdout)



var log1 = pino({
  name: 'app',
  safe: true
}, fstream)

var logpretty = pino({
  name: 'app',
  safe: true
}, pretty)

console.log(Object.keys(logpretty))
console.log(typeof logpretty.info)
console.log(typeof logpretty.info === 'function')


var customeLog = {};
// var funcObject.keys(logpretty)
var funcNameList = ["stringify","timestamp","onTerminated","fatal","error","warn","info","debug","trace","time","child"]
funcNameList.forEach(function(funcName) {
  var funcPretty = logpretty[funcName];
  if(typeof funcPretty === 'function') {
    customeLog[funcName] = function() {

      var func = log1[funcName];
      funcPretty.apply(logpretty, arguments);
      func.apply(log1, arguments);

      return customeLog;
    }
  }
  else {
    customeLog[funcName] = func[funcName]
  }
});

console.dir(customeLog)
console.dir(customeLog.info)

// customeLog.child = function() {
//   log1.
// }


// log.child({ widget: 'foo' }).info('hello')
log1.child({ widget: 'bar' }).warn('hello 1')

customeLog.warn({ widget: 'bar' }, 'hello 2')
