"use strict";

//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

//const answer = prompt("Вам є 18?", "18");
//console.log(answer);
//console.log(typeof(answer));

const answers = [];

answers[0] = prompt('Ваше імя?', '');
answers[1] = prompt('Ваше прізвище?', '');
answers[2] = prompt('Ваш вік?', '');

document.write(answers);
console.log(typeof(answers));