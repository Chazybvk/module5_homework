//Задание 2

let x;
x = 1;
x = Boolean(x);
if (typeof x == 'number') {
alert('Это число')
} else if (typeof x == 'string') {
  alert('Это строка')
} else if (typeof x == 'boolean') {
  alert('Это булево значение')
} else {
  alert('Значение не определено')
}