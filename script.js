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



//Задание 3
var string = 'Hello';
var massive = [...string];
console.log(massive.reverse().join(""));



//Задание 4
let randomNum;
randomNum = Math.ceil(Math.random()*100);
console.log(randomNum);


randomNums = [4, 8, 15, 16, 23, 42];
console.log(randomNums[Math.ceil(Math.random()*6)]);

//Задание 5
var arr = [1, 1, 2, 3, 5, 8, 12, 20, 32];
console.log(arr.length);
arr.forEach((el) => {
    console.log(el) 
  })


//Задание 6
var ar = [6, 4, 3, 3, 1, 5, 12, 4, 1, 2, 7, 2, 1];
 
var ks=[];
for(var value of ar){
    ks[value] = (ks[value]||0)+1;
}
var ar2 =[];
for(var i in ar) {
  if ( ks[ ar[i] ] > 1 ) {
        ar2.push(ar[i]);
        ks[ ar[i] ] = 0;
    }
}
 
alert(ar2);
console.log(ar2);

//Задание 7
var arr = [0, 1, 2, 3, 4, 5, 7, 7, 7, 7, 0];
var summOdd = 0;
var summPar = 0;
var summZero = 0; 
for (let i = 0; i<arr.length; i++){
  if (arr[i]%2 === 0 && arr[i] != 0){
    summPar++;
  }
  else if (arr[i]%2 !== 0){
    summOdd++;
  }
  else if (arr[i] == 0){
    summZero++;
  }
}

console.log("Количество нечетных элементов " + summOdd + ", Количество четных элементов " + summPar + ", Количество нулей " + summZero)

//Задание 8

let fruits = new Map([
  ["apple", "green"],
  ["strawberry", "red"],
  ["blueberry",    "blue"]
]);
fruits.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});