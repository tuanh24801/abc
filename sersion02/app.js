// câu điuè kiện rẽ nhánh: if - else
// cú pháp:
// if(điều kiện)
//  {    
//      code
//   }
// if else chỉ qtam kiểu boolean

// Boolean (true/fale)

// let isSucces = false;
// console.log(isSucces);

// let a = 1;
// let b = 2;

// let isSucces  = a > b;
// console.log(isSucces );

// if(false) {
//     console.log("dk dung");
// }
// else
// {
//     console.log("DK sai");
// }

// toan tu so sanh
// >, < ,>= ,<= ,== ,=== , !== , !===

// let a = 10;
// let b = 20;
// console.log(a <= b);

// 1. && - And
// 2. || - Or
// 3. ! - Not

// let a = 1;
// let b = 2;
// let c = 3;

// if(a > 0 && b > 0)
// {
//     console.log("DK DUNG");
// }

// let a = 1;
// if(!(a > 0))
// {
//     console.log("DK DUNG");
// }

// Ex1: 

// console.log(!(7<9 && 7 ==7 && 5<=7 ));

//6 gia tri khi convert tra ve false 

// NULL, Undefined, NaN, false, 0, "" / ''

// if("")
// {
//     console.log("dung");
// }
// else{
//     console.log("sai");
// }

// let a = 6;

// if(a < 5){
//     console.log("a nho hon 5");
// }
// else if (a == 5){
//     console.log("a = 5");
// }
// else{
//     console.log("a > 5");
// }

// EX1: cho ng dung nhap vao tuoi, neu: 
// + tuoi < 16 : chưa đủ tuổi đi ngủ
// + tuoi 16-18 : đủ tuổi đi ngủ
// + tuoi > 18 : ngủ luôn

//EX2: Cho người dung nhập vào tuổi:
// + Tuổi < 18 : bé rồi
// + tuổi >= 18 : lớn rồi
// + tuổi = 0: không hợp lệ
// + tuổi là số lẻ: in "tuổi lẻ"

//EX3: cho người dùng nhập vào 1 số, in ra số đó
// là chắn hay lẻ,  âm hay dương
// VD: số A là lẻ và âm.



//EX1-----------------
// let tuoi = prompt("!!! Bạn tuổi gì ?");
// if(tuoi < 16){
//     console.log("chưa đủ tuổi đi ngủ");
// }
// else if( tuoi >= 16 && tuoi <= 18){
//     console.log("đủ tuổi đi ngủ");
// }
// else{
//     console.log("ngủ thoải mái");
// }



//EX2------------------
// let tuoi2 = prompt("!!! Bạn tuổi gì ?");
// let tuoi3 = tuoi2;

// if(tuoi2 < 18){
//     console.log("Vẫn bé");
// }
// else if( tuoi2 >= 18){
//     console.log("Vẫn lớn");
// }
// else if( tuoi2 == 0){
//     console.log("Tuổi vớ vẩn");
// }
// if( tuoi3 % 2!== 0 ){
//     console.log("Tuổi lẻ");
// }
// else{
//     console.log("Tuổi chẵn");
// }



//EX3------------------
// let Num = prompt("Nhập vào 1 số");
// if( Num % 2 == 0 ){
//     if(Num > 0){
//         console.log("số chẵn và dương");
//     }
//     else{
//         console.log("số chẵn và âm");
//     }
// }
// else{
//     if(Num > 0){
//         console.log("số lẻ và dương");
//     }
//     else{
//         console.log("số lẻ và âm");
//     }
// }

// let i = 0;
// for(    )
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
// Session 2 Homework
//1.a 7 numbers, starting from 0 (no user input)
// let i =0;
// while(i <= 7)
// {
//     console.log(i);
//     i++;
// }

//1.b  n numbers, starting from 0, n entered by user
// let n = prompt("Enter a number: ");
// let i = 0;
// while(i < n)
// {
//     console.log(i);
//     i++;
// }

//1.c  n numbers, starting from 0, n entered by user
// let n = prompt("Enter a number: ");
// let i = 3;
// while(i < n)
// {
//     console.log(i);
//     i++;
// }

//1.d  A sequence of numbers, 
//starting from c, ending before n, c and n entered by user
// let c = prompt("Enter c: ");
// let n = prompt("Enter n: ");
// while(c < n)
// {
//     console.log(c);
//     c++;
// }

//1.e  A sequence of numbers, 
//starting from c, ending before n, stepping by 3, c and n entered by user
// let c = Number(prompt("Enter c: "));
// let n = Number(prompt("Enter n: "));
// while(c < n)
// {
//     console.log(c);
//     c = c+3;
// }

//1.f  A sequence of numbers, starting from c, 
//ending before n, stepping by s. c, n and  s entered by user
// let c = Number(prompt("Enter c: "));
// let n = Number(prompt("Enter n: "));
// let s = Number(prompt("Enter s: "));
// while(c < n)
// {
//     console.log(c);
//     c = c+s;
// }

//2. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
// let n = Number(prompt("Enter n: "));
// let a = 1;
// for (let i= 1; i<= n; i++) {
//     a = a * i;
// }
// console.log("The factorial of " + n + " is : " + a);

//3. Write a program asking users their age, 
//and then decide if they are old enough to view a 14+ content
// let age = Number(prompt("How old are you ?"));
// if(age <= 14)
// {
//     console.log("You are not old enough to view this content ");
// }
// else{
//     console.log("Enjoy :)");
// }

//4. Write a program asking user to enter a number, x, 
//then check if x is in the lower half or higher half of 0 - 9 range
// let a = Number(prompt("Enter a number (0 - 9) :"));
// if(a < 9/2){
//     console.log(a + " is in lower half of " + 9);
// }
// else{
//     console.log(a + " is in higher half of " + 9);
// }

//5. Write a program asking user to enter two numbers, 
//x and n, then check if x is in lower half or higher half of n
// let n = Number(prompt("Enter n:"));
// let x = Number(prompt("Enter x:"));
// if(x < n/2)
// {
//     console.log(x + " is in lower half of " + n);
// }
// else{
//     console.log(x + " is in higher half of " + n);
// }

//6. Write a script to check if a number is even (divisible by 2) or odd number
// let x = Number(prompt("Enter x:"));
// if(x%2==0)
// {
//     console.log(x + " is an even number");
// }
// else{
//     console.log(x + " is an odd number");
// }

//7.a Write a program to print out
//6 L’s and H’s, half L’s, half H’s (L means low, H means high)
// let L=0,H = 0;
// for (let index = 1; index <= 6; index++) {
//     if(index%2 == 0)
//         H++;
//     else
//         L++;
// }
// console.log(L + "L");
// console.log(H + "H");

//7.b n L’s and H’s in total, n entered by user
// let L=0,H = 0;
// let n = Number(prompt("Enter n:"));
// for (let index = 1; index <= n; index++) {
//     if(index%2 == 0)
//         H++;
//     else
//         L++;
// }
// console.log(L + "L");
// console.log(H + "H");

//7.c 8 1’s and 0’s in total, consecutively
// for (let index = 1; index <= 8; index++) {
//     if(index%2 == 0)
//         console.log(1);
//     else
//         console.log(0); 
// }

//7.d n 1’s and 0’s in total, consecutively, n entered by user
// let n = Number(prompt("Enter n : "))
// for (let index = 1; index <= n; index++) {
//     if(index%2 == 0)
//         console.log(1);
//     else
//         console.log(0); 
// }

//8. Write a script to calculate the 
//BMI (Body Mass Index) of a person, the formula is as follows
// let weight = Number(prompt("Your weight in kg?"));
// let height = Number(prompt("Your height in cm?"));
// height = height/100;
// let BMI = weight /(height *height );
// console.log("Your BMI is " + BMI);
// if(BMI < 16)
//     console.log("You are Severely underweight");
// if(BMI > 16 && BMI <= 18.5)
//     console.log("You are Underweight");
// if(BMI > 18.5 && BMI <= 25)
//     console.log("You are Normal");
// if(BMI > 25 && BMI <= 30)
//     console.log("You are Overweight");
// if(BMI > 30)
//     console.log("You are Obese");
