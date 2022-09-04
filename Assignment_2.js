//1. Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

function check_triangle(x,y,z)
{
    if(x == y && y == z)
    {
        console.log("Equilateral Triangle");
    }
    else if (x == y || y == z || z == x)
    console.log("Isosceles Triangle");

else
    console.log("Scalene Triangle");
}

check_triangle(10,10,10)


//2. Write a function using switch case to find the grade of a student based on marks obtained

function student_marks(x)
{
    switch(true)
    {
        case 1 (x >= 90 && x<=100):
            console.log("S grade")
            break;
        case 2 (x >= 80 && x<=90):
            console.log(" A grade")
            break;
        case 3 (x >= 70 && x<=80):
            console.log("B grade")
            break;
        case 4 (x >= 60 && x<=70):
            console.log("C grade")
            break;
        case 5 (x >= 50 && x<=60):
            console.log("D grade")
            break;
        case 6 (x >= 40 && x<=50):
            console.log("B grade")
            break;
        case 7 (x >=0 && x<=40):
            console.log("failed")
            break;
        default:
            console.log("Invalid marks")
    }
}
student_marks(50)

//3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000


function multiples()
{
    let result=0
    for(let i=0; i<=999;i++)
    {
        if(i % 3 ==0 || i % 5 == 0)
        {
            result += i
        }
        
    }
    console.log(result)
}
multiples()

//4 Write a program to find the factorial of all prime numbers between a given range . Range will be passed as 2 values in the function parameters.

function prime_number(a,b) {
             
    let lowerNumber = parseInt(a)
    higherNumber = parseInt(b)

    console.log(`The prime numbers between ${lowerNumber} and ${higherNumber } are:`);
    
    for(let i =lowerNumber;  i <= higherNumber ; i++ )
    {
        let flag =0
        for(let j= 2 ;j < i ; j++ )
        {
            if(i % j == 0)
            {
                flag = 1;
                break;
            }
            if (i > 1 && flag == 0) {
                console.log(i);
            }
        }
    }
    
}
prime_number(1,100)