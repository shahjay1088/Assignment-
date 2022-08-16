//1. Write a program to find whether a given year is a leap year or not.
let inputYear=2022;

function checkLeapYear(inputYear){

    if ((0 == inputYear % 4) && (0 != inputYear % 100) || (0 == inputYear % 400)) {
    console.log(inputYear + ' is a leap year');
} else {
    console.log(inputYear + ' is not a leap year');
}
}
checkLeapYear(inputYear)


//2. Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.

let celsius=60;
let fahrenheit=140
function celsiusTofahrenheit(celsius)
{
    let result=(celsius*9/5)+32
    console.log(`Celsius ${celsius}\xB0c to fahrenheit ${result}\xB0F`);
} 
function fahrenheitTocelsius(fahrenheit)
{
    let result1=(fahrenheit-32)*5/9
    console.log(`fahrenheit ${fahrenheit} \xB0F to Celsius ${result1} \xB0c`);
}

celsiusTofahrenheit(celsius)
fahrenheitTocelsius(fahrenheit)


//3. Write a program to find the factorial of a number.

let inputNumber=5;

function factorialNumber(inputNumber)
{
    if((inputNumber<0) || (inputNumber === 0) )
    {
        console.log("Please Entrer A Vaild Number")
    }
    else
    {
        let fact = 1
        for (let i=1 ;i<=inputNumber;i++)
        {
            fact *=i;
        }
        console.log(`The factorial of ${inputNumber} is ${fact}.`);
    }
}
factorialNumber(inputNumber)

