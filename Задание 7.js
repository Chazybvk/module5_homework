
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
