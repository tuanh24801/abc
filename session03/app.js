// Array - List
// Khai báo Array
// let number = [1,2,3,4];
// console.log(number);

//tai sao dung array

// let lg =  "js";
// let lg2 =  "PHP";

// let languages = ["Javascript", "PHP" , "React", null, undefined];
// console.log(Array.isArray(languages));

//Terms
//values / index / length

// let number = [1, 2, 3, 4];
//     // index      0  1  2  3 length-1;
//     console.log(number);
// C/R/U/D - Create/ Read / Update / Delete

// Read one
// let number = [1, 2, 3, 4];
// console.log(number[2]);

// Sử dụng vòng lặp for -> in ra toàn bộ phần tử có trong mảng
// let number = [1, 2, 3, 4];
// for (let index = 0; index < number.length; index++) {
//     console.log(number[index]); 
// }

//let a = []
//let b = []
// a===b // false

// let a = 1;
// let b = 1;
// name | value 
// a         1
// b         1

// let a = [];
// let b = [];

// name | address ->> address | value
// a         id1         id1       0
// b         id2         id2       0

// Update one

// let number = [14, 21, 39,44];
// // number[2] = 60;
// console.log(number);
// for (let index = 0; index < number.length; index++) {
//     number[index] += 10;
//     console.log(number[index]); 
// }


// Create first = unshift(n)
// let number = [14, 21, 39,44];
// number.unshift(123);
// console.log(number);

// Create last - .push(n)
// let number = [14, 21, 39,44];
// number.push(123);
// console.log(number);

//Delete first - .shift()
// let number = [14, 21, 39,44];
// number.shift();
// console.log(number);


// let languages = ["JS", "PHP" , "React"];
// languages.shift();
// languages.shift();
// languages.shift();
// languages.shift();
// console.log(languages);

//Delete last - .pop()
// let number = [14, 21, 39,44];
// number.pop();
// console.log(number);


//Delete particular values with index - .splice(index, amount)
// let number = [14, 21, 39,44];
// number.splice(1,2);
// console.log(number);

//EX1:
// 1.Todo list app
// Cho người dùng nhập vào 4 thao tác là chữ (C/R/U/D):
// C - Nhập nội dung todo list mới và push vào cuối mảng => In ra màn hình 
//toàn bộ todo list hiện tại
// R - In ra toàn bộ todo list hiện tại
// U - Hỏi người dùng index của todo list muốn update => Cho người 
//dùng nhập vào nội dung update 
// => In ra màn hình toàn bộ todo list hiện tại

// D - Hỏi người dùng index của todo list muốn 
//delete => In ra màn hình toàn bộ todo list hiện tại

// let A = [];
// let DO = true;
// while(DO)
// {
//     let DO = prompt("Select : C/R/U/D | E. Exit");
//     if(DO == "C")
//     {    
//         let element = prompt("Enter element");
//         A.push(element);
//         console.log(A);
//     }
//     if(DO == "E") 
//         break;
//     if(DO == "R")
//     {
//         for (let index = 0; index < A.length; index++) {
//             console.log(A[index]); 
//         }
//     }
//     if(DO == "U")
//     {
//         let index2 = prompt("Update vị trí nào ?");
//         let noidung = prompt("Nhập vào nội dung");
//         A[index2] = noidung;
//         console.log(A);
//     }
//     if(DO == "D")
//     {
//         let index3 = prompt("Delete vị trí nào ?");
//         A.splice(index3,1);
//         console.log(A);
//     }
//     else
//         console.log("invalid command");
// }

// 2. Cho app chạy vô hạn
// Bấm E (exit) để dừng chương trình
// Else in ra invalid command


// let choose = true
// while(choose)
// {
//     let choose = prompt("E. Exit");
//     if(choose == "E")
//         break;
//     else
//         console.log("invalid command");
// }

//------------------------

//EX2: Cho người dùng nhập vào số n => input n, tính toán A:
// A: 1/(1*2) + 1/(2*3) +...+ 1/((n-1)*n)
let n = Number(prompt("Enter n"));
let a = 0;
for (let i= 2; i <= n; i++) {
    a = a + 1/((i - 1) * i);
}
console.log(a);









