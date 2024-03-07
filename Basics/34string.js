// String property > length
const str = "code explained";
console.log(str.length);

// String character > Access
console.log(str[0]);
console.log(str[5]);
console.log(str.length - 1);
console.log(str[str.length - 1]);


// 01. String.charAt()
console.log(str.charAt(0))
console.log(str.charAt(5))
console.log(str.charAt(str.length - 1))

// 02. String.indexOf(searchstring , position)
// 03. String.lastIndexOf(searchstring , position)

const s = "The code undefined code code !"

console.log(s.indexOf("Code"))
console.log(s.lastIndexOf("Code"))
// indexOf & lastIndexOf is case sensitive
console.log(s.indexOf("code"))
console.log(s.lastIndexOf("code"))
// positions are optional
console.log(s.indexOf("code", 4))
console.log(s.indexOf("code", 5))
console.log(s.lastIndexOf("code", 24))
console.log(s.lastIndexOf("code", 19))

// String.search(regexp)
let text = "the rain in SPAIN stays mainly in the plain";
console.log(text.search('ain'))
console.log(text.search(/ain/))
console.log(text.search(/AIN/))
// search is case sensitive
console.log(text.search(/AIN/i))

// string.match(regexp)
// returns array of result.
let res = text.match('ain');
let res1 = text.match(/ain/);
console.log(res);
console.log(res1);
// by using g, i (global/ case sensitive var) we will only get array with SpeechRecognitionResultList. without input ans index object
let res2 = text.match(/ain/g);
let res3 = text.match(/ain/gi);
console.log(res2);
console.log(res3);