/** @format */

//1. Using for loops, write a Javascript program to output the following pattern -

function pattern() {
  let n = 5; // height of pattern
  let string = "";
  let count = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      string += count;
      count++;
    }
    string += " \n";
  }
  console.log(string);
}

pattern();

//Write a program to find whether a given number is armstrong number or not-

function armstrong_number(x) {
  let number1 = x;
  const numbertLength = x.length;
  let sum = 0;
  let temp = number1;
  while (temp > 0) {
    let reminder = temp % 10;
    sum += reminder ** numbertLength;
    temp = parseInt(temp / 10);
  }
  if (sum == temp) {
    console.log(`${number1} is an Armstrong number`);
  } else {
    console.log(`${number1} is not an Armstrong number.`);
  }
}

armstrong_number(153)


//Write a program to find whether a given number is special number or not-

function factorial(n)
{
    let fact = 1;
      
    while (n != 0)
    {
        fact = fact * n;
        n--;
    }
      
    return fact;
}


function isSpecial_number(n)
{
    let sum = 0
    let temp = n
    while(temp!=0)
    {
        sum = sum+factorial(temp%10)
        temp=parseInt(temp/10)

    }
    if (sum == n) {
        console.log(`${n} is special number`);
      } else {
        console.log(`${n} is not special number.`);
      }

}
isSpecial_number(145)