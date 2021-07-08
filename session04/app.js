// object

//khai bao bien

// let person = {
//     name: "TuanAnh",
//     age: "18",
// };
// console.log(person);

// C/R/U/D - Create/Read/Update/Delete

//Create

// let person = {
//     name: "TuanAnh",
//     age: "18",
// };
// person.address = "Ha Noi";
// console.table(person);




// let myEmail = "Email"
// let person = {
//     name: "TuanAnh",
//     age: "18",
//     [myEmail]: "Future.Academy@gmail.com",
// };
// person.address = "Ha Noi";
// console.table(person);


// //Read one
// let person = {
//     name: "TuanAnh",
//     age: "18",
// };
// console.log(person.age);


// Read All
// Dùng vòng for để in ra tất value trong obj
// dùng for thường và for in

// let person = {
//     name: "TuanAnh",
//     age: "18",
// };
// for (const [key, value] of Object.entries(person)) {
//     console.log(`${key}: ${value}`);
//   }

// Dùng for thường

// for (let i = 0; i < person.length; i++) {
//     person[key[i]];
    
// }
// // console.log(person);


// for (let key in person) {
//     console.log(person[key]);
// }


//Update
// person.name = " Future.Academy";
// console.log(person);


//Delete
// let person = {
//     name: "TuanAnh",
//     age: "18",
// };

// delete person.age;
// console.log(person);


//EX1
//cho nguoi dung nhap vao C/R/U/D
//- C: cho nguoi dung nhap vao ten va tuoi, them
//vao ds theo dang obj
// => in ra de kiem tra duoi dang table

// - R: in ra toan bo ptu trong obj

// - U: cho nguoi dung nhap vao ID muon update,
// sau do tim kiem trong obj neu co cho nhap ten va su dung lai
// neu khong in ra khong ton tai

// - D: tuong tu nhu update
// + neu co thi xoa user by id
// + neu khong in ra user not found

// let userList = [{
//     id : 1,
//     name : "Future",
//     age:20,
// },
// {
//     id : 2,
//     name : "Future2",
//     age: 300,
// }
// ];
// let Do = true;
// while(Do)
// {
//    Do =  prompt("Enter C/R/U/D | E.Exit")
//    if(Do == "C")
//    {
//         let user = {};
//         user.id = prompt("Enter ID");
//         user.name = prompt("Enter name");
//         user.age = prompt("Enter age");
//         userList.push(user)
//         console.table(userList);
//    }

//    else if(Do == "R")
//    {
//        for (let key in userList ) {
//            console.table(userList[key]);
//            }
//    }
//    else if(Do == "U")
//    {
//         let ID =  prompt("Enter ID");
//         for (let key in userList ) {
//             let i = 0; i++;
//             if(userList[key].id == ID)
//             {
//                 userList[key].id = prompt("Enter your new ID")
//                 console.table(userList[key]);
//                 break;
//             }
//             if(i == key)
//                 console.log("ID khong ton tai");
//             }
//    }
//    else if(Do == "D")
//    {
//         let ID =  prompt("Enter ID");
//         for (let key in userList ) {
//             let i = 0; i++;
//             if(userList[key].id == ID){
//                 delete userList[key];
//                 console.log("Da xoa user ID: " + userList[key].id);
//                 break;
//             }
//             if(i == key)
//                 console.log("ID not found");
//             }

//    }
//    else if(Do == "E")
//         break;
// }


//Function (Hàm)

//1. function là cái gì?

//-là 1 khối mã và chỉ làm 1 việc cụ thể

//2. Các loại Function
// tự định nghĩa

// 3. tính chất Function
// - khong thực thi khi định nghĩa
// - sẽ thực thi khi được gọi


//khai báo Function

// function demo(){
//     alert("Hello");
// }

// demo();

// truyền tham số
// function notification(message){
//     console.log(message);
// }
// notification("Hello you");

// truyền nhiều tham số

// function notification(message, message3 ){
//     console.log(message);
//     console.log(message3);
// }
// notification("Hello you" , "Futrue");


// function notification(message, message3 ){
//     if(message)
//     {
//         console.log(message);
//     }
//     if(message3)
//     {
//         console.log(message3);
//     }
// }
// notification("Test1", "Test2")

//đối số(Arguments)


// function notification(){
//     console.log(arguments);
// }
// notification("Test1", "Test2");



//For of