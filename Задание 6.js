
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
