// Question #1
// function date(a){
//     var a=new Date();
//     console.log(a);
// }
// date();

// Question #2
// function greet(fName,lName){
//     console.log("Welcome " + fName + " " + lName)
// }
// fName=prompt("Enter First Name :")
// lName=prompt("Enter Last Name :")
// greet(fName,lName);

// Question #3
// num1=prompt("Enter a number");
// num2=prompt("Enter a number");
// function sum(num1,num2){
//     console.log(Number(num1)+Number(num2));
// }
// sum(num1,num2);

// Question #4
var operator = prompt('Enter operator ( either +, -, * or / ): ');
var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number: '));
var result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(result);

// Question #5
// function square(a){
//     console.log(a*a);
// }
// a=Number(prompt("Enter A number :"))
// square(a);

// Question #6
// function factorial(num){
//     var answer=1;
//     for(i=num;i>0;i--){
//         answer = answer*i;
//     }
//     return answer;
// }
// var num=Number(prompt("Enter a number"));
// answer=factorial(num);
// console.log(answer);

// Question #7
// function count(a,b){
//     for (i=a;i<=b;i++){
//         console.log(i);
//     }
// }
// var a=parseFloat(prompt("Enter a First number :"));
// var b=parseFloat(prompt("Enter a second number :"));
// count(a,b);

// Question #8
// function rightAngleTriangle(hyp,base,per){                                                       //Later ;)
//     function calSquare(){
//         var base=base*base;
//         var per =per*per;
//         return answer;
//     }
//     answer=calSquare();
//     answer1=base+per;
// }
// var hyp="Hypotenuse";
// var base=parseFloat(prompt("Enter Base :"))
// var per=parseFloat(prompt("Enter Perpendicular :"))

// answer = rightAngleTriangle(hyp,base,per);
// console.log(answer);

var base,hyp,perp,x,y;
var result,final;
base =+prompt("Enter the value of base");
perp =+prompt("Enter the value of perpendicular");
result =hypt(base,perp);
final=result.toString();
document.write("Hypotneus = " + final.slice(0,4));

function hypt(base,perp){
    hyp=sqrt(base,perp);
    y=sqrt(hyp);
    return y;
}

function sqr(base,perp){
    return ((base*base)+(perp*perp))
}

function sqrt(hyp){
    x=Math.sqrt(hyp);
    return x;
}

// Question #9
// function areaOfTriangle(width,height){
//     console.log("Area Of Triangle is = " + "width" + ' * ' + "height")
//     console.log("Area Of Triangle is = " + width * height)
// }
// var width=10;
// areaOfTriangle(width,5)

// Question #10
// function palindrome(a){
//     var b=a.split("");
//     var c=b.reverse();
//     var d=c.join('');
//     if (a==d){
//         console.log("It is Palindrome")
//     }else{
//         console.log("It is not Palindrome")
//     }
// }
// var a=prompt("Enter a Palindrome");
// palindrome(a);

// Question #11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var i = 0; i < array1.length; i++){
//       newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray1.join(' ');
// }
// var str="the quick brown fox";
// console.log(uppercase(str));

// Question #12
// function longestString(a){

// }
// var a=prompt('Enter a String :');                                                                //Dont Know :(

// Question #13
// function counting(string,letter){
//     var strLen=string.length;
//     var counter=0;
//     for (var i=0;i<strLen;i++){
//         if(string[i]==letter){
//             counter++;
//         }
//     }   
//     return counter;  
// }
// var string=prompt("Enter a string");
// var letter=prompt("Enter a latter");
// console.log("There are " + counting(string,letter) + " " +letter +" in " + string);


// JAVASCRIPT Assignment  # 38-44
//FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS

// Question #1
// var a = +prompt("Enter a number :");
// var b = Number(prompt("Enter power of first number :"));
// console.log(Math.pow(a,b));

// Question #2
// function check_leapyear(){
//     var year;
//     year = +prompt("Enter Leap Year")
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
//     {
//         alert(year+" is a leap year");
//     }
//     else
//     {
//         alert(year+" is not a leap year");
//     }
// }
// check_leapyear()

// Question #3
var side1 = 5;
var side2 = 6;
var side3 = 7;

function semi_perimeter(side1, side2, side3) {
  var s = (side1 + side2 + side3) / 2;
//   var result;
//   s = result;
  return s;
}
// areaOfTriangle()

function areaOfTriangle() {
  var area = Math.sqrt(semi_perimeter() * ((semi_perimeter() - side1) * (semi_perimeter() - side2) * (semi_perimeter() - side3)));
  console.log(area);
}
semi_perimeter();

