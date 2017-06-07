var iconv = require('iconv-lite');

// Convert from an encoded buffer to js string.
var str = iconv.decode(new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]), 'win1251');

// Convert from js string to an encoded buffer.
var buf = iconv.encode("Sample input string", 'win1251');

// Check if encoding is supported
var isExists = iconv.encodingExists("us-ascii")


console.log(str);
console.log(buf);
console.log(isExists);
