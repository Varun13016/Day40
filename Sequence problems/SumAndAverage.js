let num = 10;
let sum = 0;

for (i=0; i<10;i++)
{
    let twoDigitNum = Math.floor((Math.random()*90)+10);
    sum += twoDigitNum;
}
console.log("Sum of 10 number is " +sum);

let avg = sum/num;
console.log("Average of 10 number is " +avg);