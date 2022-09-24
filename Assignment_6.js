/*1) Perform the following operations to provide the implementation for a Rectangle class.*/

class rectangle{
    constructor(height,length){
        this.height = height;
        this.length = length;
    }

    area(){
        console.log(this.length*this.height,"centimeter square")
    }
}

class square extends rectangle{
    constructor(height,length){
        super(height,length);
    }

}

let obj1 = new square(20,20)
obj1.area()


/*2) Write a javascript function find_largest to return the nth largest number
in an array-*/

let numbers = [10, 20, 50, 10, 2, 90, 40, 45, 999, 678];
let max = 1;

function greatestNumber(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > max) {
        max = numbers[j];
      }
    }
    if (i == num) {
      console.log(max);
    } else {
      numbers.splice(numbers.indexOf(max), 1);
      max = 1;
    }
  }
}

greatestNumber(1);


/* Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.*/


function computeDash(num){
    let num1=String(num);
    let arr = [];
    let k=1;
    for(let i=0;i<num1.length;i++){
        if(num1[i]%2==0 && num1[k]%2==0){
            arr.push(num1[i]+"-");
            
        }else if(num1[i]=="undefined"){
            arr.push(num[i]+"-")
        }
        else{
            arr.push(num1[i]);    
        }k++
        
    }
    let test = arr.toString()
    
    console.log(test.replace(/,/g,""));
}

computeDash(204681)