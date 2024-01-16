let list = [
	'eggs',
	'butter',
	'milk',
	'bread',
	'bacon'
];

let list2 = [
    {text: 'bacon', cost: 12, need: true },
    {text: 'eggs', cost: 10, need: true },
    {text: 'butter', cost: 5, need: false },
    {text: 'milk', cost: 4, need: false },
    {text: 'bread', cost: 3, need: true}
];

list2.sort((a, b) => {

    if (a.cost === b.cost) return 0;

    if ( a.cost < b.cost ) return 1;

    return -1;

    // 0, a === b, there is no change
    // -1, a sorted before b
    // 1, b sorted before a
});

console.log(list2);

let html = '';

list2.forEach(({text, cost}) => {
    html += `<li>${text} $${cost}</li>`;
});

document.getElementById('list').innerHTML = html;