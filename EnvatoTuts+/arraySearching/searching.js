let list = [
	'bacon',
	'eggs',
	'butter',
	'milk',
	'bread',
	'bacon',
    {text: 'bread', cost: 3 }
];

// -1, index
console.log(list.indexOf('bacon', 1));
console.log(list.lastIndexOf('bacon'));
console.log(list.findIndex((item) => item.text === 'bread'));
