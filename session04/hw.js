//1.
// let listPhone = [{
//     Name : "Xiaomi portable charger 20000mah",
//     Brand : "Xiaomi",
//     Price : "428",
//     Color : "White",
//     Category : "Charger",
// },{
//     Name : "VSmart Active 1",
//     Brand : "VSmart",
//     Price : "45487",
//     Color : "Black",
//     Category : "Phone",
// },{
//     Name : "IPhone X",
//     Brand : "Apple",
//     Price : "21490",
//     Color : "Gray",
//     Category : "Phone",
// },{
//     Name : "Samsung Galaxy A9",
//     Brand : "Samsung",
//     Price : "8490",
//     Color : "Blue",
//     Category : "Phone",
// }
// ];

//1.1
// for (const key in listPhone) {
//     console.log("-----------------------------------");
//     console.log("Name : " + listPhone[key].Name);
//     console.log("Price : " + listPhone[key].Price);
// }

//1.2
// let i = 1;
// for (const key in listPhone) {
//     console.log( "#" + i + ". " + listPhone[key].Name);
//     console.log(" \tPrice : " + listPhone[key].Price);
//     i++;
// }

// let position = prompt("Enter product position:");
// i = 1;
// for (const key in listPhone) {
//     if( i == position ){
//         console.table(listPhone[key]);
//     }
//     i++;
// }

//1.3
// let Entercate = prompt("Enter your category?");
// for (const key in listPhone) {
//     if( Entercate  == listPhone[key].Category ){
//         console.log("-----------------------------------");
//         console.log("Name : " + listPhone[key].Name);
//         console.log("Price : " + listPhone[key].Price);
//     }
// }

//1.4
// for (const key in listPhone) {
//     if(listPhone[key].Name == "Xiaomi portable charger 20000mah"){
//         listPhone[key].Providers = "Phukienzero Dientuccc";
//     }
//     else
//     listPhone[key].Providers  = "Tgdd";
// }
// let i = 1;
// for (const key in listPhone) {
//     console.log( "#" + i + ". " + listPhone[key].Name);
//     console.log(" \tPrice : " + listPhone[key].Price);
//     console.log(" \tProviders : " + listPhone[key].Providers);
//     i++;
// }

//1.5
// let EnterProviders = prompt("Enter Providers");
// for (const key in listPhone) {
//     if(listPhone[key].Providers == EnterProviders){
//         console.log("-------------------------------");
//         console.table(listPhone[key]);
//     }
// }


//------------------------------------------
//2.
// let listTask = [{
//     task : "HTML",
//     Complete : false,
// },{
//     task : "CSS",
//     Complete : false,
// },{
//     task : "Basics of JavaScript",
//     Complete : false,
// },{
//     task : "Node Package Manager (npm)",
//     Complete : false,
// },{
//     task : "Git",
//     Complete : false,
// }
// ];
// console.log("Hi there, this is your learning tasks to front-end developer career: ");
// let i = 1;
// for (const key in listTask) {
//     console.log(i + ". " + listTask[key].task);
//     console.log("   Complete: " + listTask[key].Complete);
//     i++;    
// }
// let userChoose = true
// while(userChoose)
// {
//     let userChoose = prompt("Enter your command (New, Delete, Update, Complete) | E.Exit");
//     if(userChoose == "New"){
//         let EnterNewtask = prompt("Enter new task:");
//         let newTask = [];
//         newTask.task = EnterNewtask;
//         newTask.Complete = false;
//         listTask.push(newTask);
//         console.clear();
//         i = 1;
//         for (const key in listTask) {
//             console.log(i + ". " + listTask[key].task);
//             console.log("   Complete: " + listTask[key].Complete);
//             i++;    
//         }
//     }
//     else if(userChoose == "Update")
//     {
//         let Position= prompt("Enter position:");
//         let newTitle= prompt("Enter new title:");
//         listTask[Position - 1].task = newTitle;
//         console.clear();
//         i = 1;
//         for (const key in listTask) {
//             console.log(i + ". " + listTask[key].task);
//             console.log("   Complete: " + listTask[key].Complete);
//             i++;    
//         }
//     }
//     else if(userChoose == "Complete")
//     {
//         let Position2 = prompt("Enter position:");
//         listTask[Position2 - 1].Complete = true;
//         console.clear();
//         i = 1;
//         for (const key in listTask) {
//             console.log(i + ". " + listTask[key].task);
//             console.log("   Complete: " + listTask[key].Complete);
//             i++;    
//         }
//     }
//     else if(userChoose == "Delete")
//     {
//         let Position3 = prompt("Enter position:");
//         delete listTask[Position3 - 1];
//         console.clear();
//         i = 1;
//         for (const key in listTask) {
//             console.log(i + ". " + listTask[key].task);
//             console.log("   Complete: " + listTask[key].Complete);
//             i++;    
//         }
//     }
//     else if(userChoose == "E")
//         break;

// }
// console.clear();
// console.log("Hi there, this is your learning tasks to front-end developer career: ");
// i = 1;
// for (const key in listTask) {
//     if(listTask[key].Complete == true){
//         console.log(i + ". " + " [x] "+ listTask[key].task);
//     }
//     else
//         console.log(i + ". " + " [ ] "+ listTask[key].task);
//     i++;    
// }
// console.log("[x] is complete");


