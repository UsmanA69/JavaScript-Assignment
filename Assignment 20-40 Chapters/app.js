// JAVASCRIPT Assignment  # 21-25
//STRING METHODS

// Question #1
// var fname=prompt("Enter your first name :");
// var lname=prompt("Enter your last name :");
// var fullName= fname + lname;
// alert("Welcome" + " " + fullName);

// Question #2
// var favouritePhone=prompt("What is your favourite Phone ?");
// document.write("My Favourite Phone is : " + favouritePhone + "<br>");
// var a=favouritePhone.length;
// document.write("Length of string is : " + a)

// Question #3
// var a="Pakistani";
// document.write("String : " + a + "<br>")
// var b=a.indexOf("n");
// document.write("Index of “n” is : " + b)

// Question #4
// var a="Hello World";
// document.write("String : " + a + "<br>")
// var b=a.lastIndexOf("l");
// document.write("Last Index of “l” is : " + b)

// Question #5
// var a="Pakistani";
// document.write("String : " + a + "<br>")
// var b=a.charAt(3);
// document.write("Character at index 3 : " + b)

// Question #6
// var fname=prompt("Enter your first name :");
// var lname=prompt("Enter your last name :");
// var fullName= fname.concat(lname);
// alert("Welcome" + " " + fullName);

// Question #7
// var a="Hyderabad";
// document.write("City : " + a + "<br>")
// var b=a.replace("Hyder","Islam")
// document.write("After replacement : " + b)

// Question #8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Messege : " + message + "<br>")
// var afterRepaceMessege=message.replace(/and/g,"&")
// document.write("After replacement : " + afterRepaceMessege)

// Question #9
// var a="472";
// document.write("Value: " + a + "<br>");
// document.write("Type: " + typeof a + "<br>");
// var b=Number(a);
// document.write("Value: " + b + "<br>");
// document.write("Type: " + typeof b);

// Question #10
// var a=prompt("Enter Any Dryfruit name");
// document.write("User Input: " + a + "<br>")
// var b=a.toUpperCase();
// document.write("Upper Case: " + b + "<br>")

// Question #11
// var a=prompt();
// document.write("User Input: " + a + "<br>")
// var b =a[0]
// document.write("Tittle Case: " + a[0].toUpperCase() + a.slice(1).toLocaleLowerCase())

// Question #12
// var num = 35.36;
// document.write("Number :" + num + "<br>")
// num= num.toString().replace(".","");
// // document.write(typeof num)
// document.write("Result: " + num + "<br>")                                                                

// Question #13                                                                                                     
// var a=64;                                                                                                    //Not In Book :,(
// var b=String.fromCharCode(a);    
// document.write(b);
// var userName=prompt("Enter Username: ")
// if(userName!=String.fromCharCode(a)){
    
    // alert("Enter Valid username")
// }



// Question #14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var a=prompt("Welcome to ABC bakery.What do you want to order sir/ma'am? ");
// var a =a.toLowerCase();
// var b =items.indexOf(a)
// for (i=0;i<items.length;i++){
//     if(a==items[i]){
//         document.write(a + " is available at index " + b+ " in our bakery")
//     }else{
//         document.write("We are sorry "+ a +" is not available in our bakery")
//     }
//     break
// }   

// Question #15
 //Not In Book :,(

// Question #16
// var university="University of Karachi";
// var arr= university.split("");
// for (i=0;i<university.length;i++){
    //     document.write(arr[i] + "<br>  ")
// }    
    
// Question #16
// var a=prompt("Enter Input");
// document.write("User Input: " + a + "<br>");
// a=a.slice(-1);
// document.write("Last Character: " + a);

// Question #16
// var str="The quick brown fox jumps over the lazy dog";                                                    //dont know
// var word="The";
// var strLen=str.length;



// JAVASCRIPT Assignment  # 26-30
//Maths Methods

// Question #1
// var a=prompt("Enter an Integer: ","3.45214");
// document.write("Number: " + a + "<br>");
// b =Math.round(a)
// document.write("Round off value: " + b + "<br>");
// c =Math.floor(a)
// document.write("Floor value: " + c + "<br>");
// d =Math.ceil(a)
// document.write("Ceil value: " + d + "<br>");

// Question #2
// var a=prompt("Enter a Negative floating point Number: ","-2.673");
// document.write("Number: " + a + "<br>");
// b =Math.round(a)
// document.write("Round off value: " + b + "<br>");
// c =Math.floor(a)
// document.write("Floor value: " + c + "<br>");
// d =Math.ceil(a)
// document.write("Ceil value: " + d + "<br>");

// Question #3
// var num=-3;
// b =Math.abs(num)
// document.write("The absolute value of " + num + " is " + b)

// Question #4
// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("Random dice value: " + numberOfStars + "<br>");
// document.write("Random dice value: " + numberOfStars);

// Question #5  
// var coin=Math.floor(Math.random()*2)+1;
// console.log(coin);
// if(coin==1){
//     document.write(coin + "<br>" + "Random coin value:Tails")
// }
// if(coin==2){
//     document.write(coin + "<br>" + "Random coin value:Heads")
// }
    
// Question #6  
// var random=Math.floor(Math.random()*100)+1;
// document.write("Random number between 1 and 100 is " + random);

// Question #7                                                                                  //dont know what is parse?:,(
    
// Question #8
// var random=Math.floor(Math.random()*10)+1;
// var userInp=prompt("Enter a number between 1 to 10: ");
// if(userInp==random){
//     alert("Congrats")
// }else{
//     alert("Try again")
// }



// JAVASCRIPT Assignment  # 31-34
//DATE METHODS

// Question #1
// var now=new Date();
// document.write(now);

// Question #2
// var now=new Date();
// document.write("Current month: " + now.getMonth());
