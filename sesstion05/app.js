//SS1
//khai báo biến
// Global scope - Function Scope
// "" , '' , ``

//SS2
// if - else
// loop for - while

//SS3 : Array
// khai báo
// C/R/U/D

//SS4 : Object
// khai bao
// cach su dung
// C/R/U/D
// Function

// let == var

// {
//     var a = 10;
// }
// console.log(a);

//let có thể gắn lại nhưng k đc khai báo lại
// const không thể gán lại và cũng k đc khai báo lại

// let a = 10;
// console.log(`Hello world ${a}`);


// if - else

// if()
//{

//};

// loop while

// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

// let i = true;
// while(i){
//     console.log(i);
//     i++;
// }

// tiền tố và hậu tố (++a / a++)

// let a = 5;
// a = ++a + a-- + a++ - --a + a++ + a;
// console.log(a);

// toLowerCase or toUpperCase

// Cách đặt tên biến:
// camlCase 

// Array
//C/R/U/D

// Read One
// let arr  = [1, 2, 3, 4];
// console.log(arr[1]);

//Read all
// let arr  = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// Update one
// let number  = [1, 2, 3, 4];
// number[2] = 40;
// console.log(number);

// Update all
// let number  = [1, 2, 3, 4];
// console.log(number);
// for (let i = 0; i < number.length; i++) {
//     number[i]+=10;
// }
// console.log(number);

//Create First - .unshift(n)
// let number = [1, 2, 3, 4];
// number.unshift(123);
// console.log(number);

//Create Last - .push(n)
// let number = [1, 2, 3, 4];
// console.log(number);
// number.push(123);
// console.log(number);

//Delete first - .shift()
// let number = [1, 2, 3, 4];
// console.log(number);
// number.shift();
// console.log(number);

//Delete Last - .pop()
// let number = [1, 2, 3, 4];
// console.log(number);
// number.pop();
// console.log(number);

// Delete with index - splice(index, amount)
// let number = [1, 2, 3, 4];
// console.log(number);
// number.splice(0,2)
// console.log(number);

//Object
//C/R/U/D

//Create 

// let person = {
//     name : "Nguyen A",
//     age : "20",
// };

// person.address = "Ha Noi";
// console.table(person);

//Read one

// console.log(person.name);

//Read all
// for (const key in person) {
//     console.log(person[key]);
// }


//Update 
// person.name = "FA"
// console.log(person);

//Delete

// delete person.age;
// console.log(person);


// 1
// function check(string1){
//     let string2 = string1.split(" ");
//     if(string2[0] == "Java")
//         console.log("Chuoi bat dau bang java");
//     else
//         console.log("Chuoi khong bat dau bang java");
// }
// let string1 = prompt("Nhap chuoi: ");
// check(string1);

//2
// let arrNumber = [1, -10, 5, 18, -9, 5];
// function findMaxDiff(arr){
//     if(arr.length < 2 )
//         console.log("[" +  arr + "]" + " => " + 0);
//     else{
//         let maxArr = Math.max(...arr);
//         let minArr = Math.min(...arr);
//         let kb = maxArr - minArr - 1;
//         console.log("[" +  arr + "]" + " => " + kb);
//     }
// };
// findMaxDiff(arrNumber);

//3
// let arrNumber = [1, -10, 5, 18, -9, 5];
// let n = prompt("Enter n: ")
// function first(arr,n){
//     if(n <= 0)
//         console.log([]);
//     else{
//         for (let i = 0; i < n; i++) {
//             console.log(arr[i]);
//         }
//     }
// };
// first(arrNumber,n);

//4
// function checkInt(number1,number2){
//     if((number1 > 0 && number2 < 0) || (number1 < 0 && number2 > 0))
//         console.log(true);
//     else
//         console.log(false);
// }
// let number1 = Number(prompt("Ender Number 1:"));
// let number2 = Number(prompt("Ender Number 2:"));
// checkInt(number1,number2);


// 5
// function checkJava(n){
//     if(Number(n) > 13)
//         console.log(Math.abs((n-13)*2));
//     else
//         console.log(Math.abs(n-13));
// }
// let n = Number(prompt("Enter number: "));
// checkJava(n);

//6
// function findMax(arr){
//     let arr2 =[];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             let e = Number(arr[i]) - Number(arr[j]);
//             arr2.push(e)
//         }
//     }
//     console.log(Math.max(...arr2) + " Là hiệu số của " + Math.max(...arr) + " và " +  Math.min(...arr));
// }
// let enterarrnumber = prompt("Nhập vào 1 dãy số phân tách nhau bởi dấu ,");
// let arr = enterarrnumber.split(",");
// findMax(arr);