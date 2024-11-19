// Codewars masalalar
{
    // 1-masala
    //This code does not execute properly. Try to figure out why.

    function multiply(a, b){
        return a * b
      }
}


{
    // 2-masala
    // Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

    function evenOrOdd(number) {
        if(number % 2 === 0){
          return "Even"
        }else{
          return "Odd"
        }
      }
}


{
    // 3-masala
    // We need a function that can transform a number (integer) into a string.
    // What ways of achieving this do you know?
    // Examples (input --> output):
    // 123  --> "123"
    // 999  --> "999"
    // -100 --> "-100"
    
    function numberToString(num) {
        return num.toString();
      }
}


{
    // 4-masala
    //Complete the solution so that it reverses the string passed into it.
    // 'world'  =>  'dlrow'
    // 'word'   =>  'drow

    function reverseString(str) {
        return str.split('').reverse().join('');
      }
      
      console.log(reverseString('world'));  
      console.log(reverseString('word'));   
}


{
    // 5-masala
    //In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
    // Examples
    // makeNegative(1);    // return -1
    // makeNegative(-5);   // return -5
    // makeNegative(0);    // return 0
    // makeNegative(0.12); // return -0.12

    function makeNegative(num) {
        return num > 0 ? -num : num;
      }
}


{
    // 6-masala
    //Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
    // Examples:
    // 1: -1
    // 14: -14
    // -34: 34

    function opposite(number) {
        return -number;
      }
}


{
    // 7 -masala
    //Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

    function boolToWord( bool ){
        return bool ? "Yes" : "No";
    
    }
}


{
    // 8-masala
    //You get an array of numbers, return the sum of all of the positives ones.
    // Example [1,-4,7,12] => 1 + 7 + 12 = 20
    // 
    // Note: if there is nothing to sum, the sum is default to 0.

    function positiveSum(arr) {
        return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
    }
}


{
    // 9-masala shu
    //Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
    // Examples (input -> output)
    // 6, "I"     -> "IIIIII"
    // 5, "Hello" -> "HelloHelloHelloHelloHello"
    function repeatStr (n, s) {
        return s.repeat(n);
    }
}


{
    // 10-masala
    //It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

    function removeChar(str){
        return str.slice(1, -1);
    }
    
}



//  5ta masalalar

{
    // 1-masala
    function son(arr) {
        return arr.filter(num => num > 0);
      }
      console.log(son([1, -3, 5, 7, -9])); 
      console.log(son([-2, -4, 0]));       
      console.log(son([2, 4, 6]));         
      
}

{
    // 2-masala
    function word(str) {
        return str
          .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');                 
      }
      
      console.log(word("hello"));
      console.log(word("javascript"));
      console.log(word("code")); 
}

{
    // 3-masala
    function reverseNumber(num) {
        return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
      }
      
      console.log(reverseNumber(690999988));  
      console.log(reverseNumber(889990969));  
      console.log(reverseNumber(7707));  
      
}
{
    // 4-masala
    function bool(arr) {
        return arr.filter(value => value === false);
      }
      console.log(bool([true, true,  true, ]));               
      console.log(bool([true, false])); 
      console.log(bool([false, true, false]));       
      console.log(bool([true, true, false, true, false, true, false]));               
      
}

{
    // 5-masala
    function numbers(arr) {
        return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
      }
      
      console.log(numbers([10, 70, -40, 20])); 
      console.log(numbers([-20, 150, -30, 200]));        
}
