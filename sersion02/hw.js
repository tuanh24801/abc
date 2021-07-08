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
