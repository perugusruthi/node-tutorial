const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

//flag is to append to existing text
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first},${second}`
    ,{flag:'a'})
console.log(first,second);
console.log('done with this task');
console.log('starting the next one');

