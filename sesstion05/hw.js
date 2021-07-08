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


//5
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