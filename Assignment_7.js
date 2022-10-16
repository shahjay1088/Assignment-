/*1. Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec...*/

function stringTruncate(string){
    if(string.length<=4){
        return string;
    }
    string = string.slice(0,4)+"...";
    return string;
}

console.log(stringTruncate("Ice"));
console.log(stringTruncate("Icecream"));

/*2. Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy”*/

function removeWhiteSpaces(str){
    let strArr = str.split(" ");
    let resultStr = "";
    for(let subStr of strArr){
        resultStr += subStr;
    }
    return resultStr;
}

console.log(removeWhiteSpaces("Hii Boy"));
/*
Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”*/

function replaceWord(str)
{
    let strArr = str.split(" ");
    let strRes = "";
    for(let i=strArr.length-1;i>=0;i--)
    {
        strRes += strArr[i] + " ";
    }
    return strRes;
}

console.log(replaceWord("Hii Boy"));
/*
Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple”*/

function replaceCharacter(str){
    let charArr = [...str];
    let strRes = '';
    for(let i in charArr){
        if(charArr[i]=='a'){
            charArr[i] = 'x';
        }
        strRes += charArr[i];
    }
    return strRes;
}

console.log(replaceCharacter("apple"));

// 5. What string method can be used to convert string into array ?
// Answer-> 1) split("") method is used to convert string into array of word according to parameters specified
// 2) Array.from(arrayName) it makes array of characters from string
// 3) [...stringName] it makes array of characters from string


// Question->
// 6. What string method can be used to check the occurrence of a specified
// text in a string?
// Answer->
// 1) stringName.indexOf("str") -> it returns the index of str 
// 2) stringName.indexOf("str",15) -> it return the index of str after 15th index
// 3) stringName.match(/str/) -> it search for regular expression 
// 4) stringName.search("str") -> it returns index of str


// Question ->
// 7) How can you break a string to a newline in Javascript ?
// Answer->
// const str = 'first\nsecond\nthird';
// const result = str.split(/\n/);// it will split str into array of word wherever \n comes it makes one element of array

// console.log(result);

/* 8. Write a Javascript function to test whether the first character of a string
 is lowercase.*/

function isLowerCase(str){
    if(str[0]>="a" && str[0]<="z")
        return true;
    return false; 
}

console.log(isLowerCase("hEllo"));
console.log(isLowerCase("Hello"));


/* Question ->
9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
any combination) using string methods.
How will you handle that ?
Answer -> 
either we can convert user input string into uppercase or LowerCase using given method
str.toLowerCase();
str.toUpperCase();*/

// a) Convert the String into upper case.
 let str = "Hello World!";
 str = str.toUpperCase();
 console.log(str);

// b) Convert only the first character to uppercase.

 function toUpperCase1stChar(str){
     return str.charAt(0).toUpperCase()+str.slice(1);
 }
 let str1 = "helLo WorlD!";
 console.log(toUpperCase1stChar(str1));

// c) Convert the String into lower case.
 let str = "Hello World!";
 str = str.toLowerCase();
 console.log(str);


// d) Break the string into two halves and swap them.
 function halfStringSwap(str){
     let str1 = str.substring(0,str.length/2);
     let str2 = str.substring(str.length/2);
     str = str2+str1;
     return str;
 }

 console.log(halfStringSwap("Hey how are you"))

// e) Count the repeating characters.
 function countRepeatingChar(str){
     let res = {};
     for(let i=0;i<str.length;i++){
         let key = str.charAt(i);
         res[key] = isNaN(res[key]) ? 1: res[key]+1;
     }
     return res;
 }
 console.log(countRepeatingChar("banbabanab"));



// f) Reverse the string
function reverseString(str){
    let resultStr = "";
    for(let i=str.length-1;i>=0;i--){
        resultStr += str.charAt(i);
    }
    return resultStr;
}

console.log(reverseString("Hey"));
