//Задание 1

let a = prompt ("Введите число");
a = +a;
alert (typeof a);

if (a% 2 ===0) {
  alert ("четное");
  
}
else if (a%1 ===0) {
  alert ("нечетное");
  
}
else {
  alert("Упс, кажется вы ошиблись")
}


