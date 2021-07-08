// Homework Session 3

// 1. 
// let n = prompt("Enter a squence of Number, sparated by commas(,)");
// let arr = n.split(',');
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + Number(arr[i]);
// }
// console.log("The sum of them is " + sum);

// 2.
// let n = prompt("Enter a squence of Number, sparated by commas(,)");
// let arr = n.split(',');
// let min = arr[0];
// for (let i = 1; i < arr.length ; i++) {
//     let b = Number(arr[i])
//     if(min  > b)
//     {
//         min = b;
//     }
// }
// console.log("The smallest number is " + min);

// 3.
// let arr = [3, 4, 6, -9, 10, -88, 2];
// let find = prompt("Enter a number");
// let index = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(find == arr[i])
//     {
//         index = i;
//         console.log( find + " is FOUND in my array at index : " + index);
//         break;
//     }
//     else if( i == arr.length - 1 )
//     {
//         console.log(find + " is NOT found in my array");
//     }
// }

// 4.
// let sizeSheep = [5, 7, 300, 90, 24, 50, 75];
// console.log("Hello, my name is Tuan Anh and here is my sheep sizes: ");
// console.log(sizeSheep);
// let sizeMax = sizeSheep[0];
// let index = 0;
// let index2 = 0;
// for (let i = 0; i < sizeSheep.length; i++) {
//     let nB = Number(sizeSheep[i]);
//     if(sizeMax < nB){
//         sizeMax = nB;
//         index = i;
//     }
// }
// console.log("Now my biggest sheep has size " + sizeMax + ", let's shave it");
// sizeSheep[index] = 8;
// console.log("After shearing, here is my flock");
// console.log(sizeSheep);

// let MONTH = 1;
// for (MONTH; MONTH < 4; MONTH++) {
//     let sizeMax2 = sizeSheep[0];
//     console.log("MONTH " + MONTH);
//     for (let i = 0; i < sizeSheep.length ; i++) {
//         sizeSheep[i] += 50;
//     }
//     console.log("One month has, passed, my sheeps have grown, here are their sizes");
//     console.log(sizeSheep);
//     for (let i = 0; i < sizeSheep.length; i++) {
//         let nB = Number(sizeSheep[i]);
//         if(sizeMax2 < nB){
//             sizeMax2 = nB;
//             index2 = i;
//         }
//     }
//     if(MONTH < 3){
//         console.log("Now my biggest sheep has size " + sizeMax2 + ", let's shave it");
//         sizeSheep[index2] = 8;
//         console.log("After shearing, here is my flock");
//         console.log(sizeSheep);  
//     }  
// }
// let sum = 0;
// for (let i = 0; i < sizeSheep.length; i++) {
//     sum += Number(sizeSheep[i]);
// }
// console.log("My flock has size in total: " + sum);
// console.log("I would get " + sum + " * " + "2$ = " + sum*2 );

// 5.
// let n = prompt("Enter a sequence of names");
// let arr = n.split(',');
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(`<${arr[i]}>`);
// }
// console.log(arr + " => " + arr2);

// 6.
// let n = prompt("Enter a sequence of names");
// let arr = n.split(',');
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//     if(Number(arr[i]) %2 == 1){
//         arr1.push(arr[i]);
//     }
// }
// console.log(arr + " => " + arr1);



