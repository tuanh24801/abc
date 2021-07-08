let sizeCheep = [5, 7, 300, 90, 24, 50, 75];
console.log("Hello, my name is Tuan Anh and here is my sheep Sizes: ");
console.log(sizeCheep);
console.log("\n");

let eMax = Math.max(...sizeCheep);
console.log("Now my biggest sheep has size " + eMax + ", let's shave it");
let indexis = sizeCheep.indexOf(eMax)
sizeCheep[indexis] = 8;
console.log("\n");
console.log("After shearing, here is my flock");
console.log(sizeCheep);

let Month = 1;
for (Month; Month < 4; Month++) {
    console.log("\n");
    console.log("MONTH " + Month);
    console.log("One month has, passed, my sheeps have grown, here are their sizes");
    for (let i = 0; i < sizeCheep.length; i++) {
        sizeCheep[i] +=50;
    }
    console.log(sizeCheep);
    console.log("\n");
    eMax = Math.max(...sizeCheep);
    if(Month < 3)
    {
        console.log("Now my biggest sheep has size " + eMax + ", let's shave it");
        indexis = sizeCheep.indexOf(eMax)
        sizeCheep[indexis] = 8;
        console.log("\n");
        console.log("After shearing, here is my flock");
        console.log(sizeCheep);
    }
}

let sum = 0;
for (let i = 0; i < sizeCheep.length; i++) {
    sum += sizeCheep[i]
}
console.log("My flock has size in total: " +  sum);
console.log("I would get " + sum + " x " + "2$ = " + sum*2);