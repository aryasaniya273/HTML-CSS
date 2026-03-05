// enter aney number between 5 to 9
// var a=parseInt(prompt(" enter any number between 5 to 9"));
// switch(a)
// {
//     case 5:
//         document.writeln(" Five");
//         break;
//     case 6:
//         document.writeln("Six");
//         break;
//     case 7:
//         document.writeln("Seven");
//        break;
//     case 8:
//         document.writeln("Eight ");
//         break;
//     case 9:
//         document.writeln("Eight");
//         break;
//     default:
//         document.writeln(" invalid");        
// }
// 11. Find even odd using switch case
// var a=parseInt(prompt(" enter any number"));
// switch(a%2)
//     {
//         case 0:
//             document.writeln("odd");
//          break;
//         case 1:
//             document.writeln("even");
//             break;
//         default:
//            document.writeln("invalid") ;

//     }
// 12. Check given character is vowel or not using switch case
//   var v=prompt(" enter any alphabate");
//   switch(v)
//   {
//     case A :
//         document.writeln(" Vovel");
//          break;
//     case E :
//         document.writeln(" vovel");
//          break;
//     case I :
//         document.writeln(" Vovel");
//          break;
//     case O:
//         document.writeln("Vovel");
//          break;
//     case U :
//         document.writeln(" Vovel");
//          break;
//     default:
//         document.writeln(" invalid");
//   } 
//    13. Program to perform arithmetic operation using switch case
// var a=parseInt(prompt(" enter  the first number "));
// var b=parseInt(prompt(" enter the  second number "));
// var alpha=(prompt("enter the Symbole like +, - , * ,  / , %  to perform operation"));
// var c=0;
// switch(alpha)
// {
//     case "+":
//      c=a+b;
//        document.writeln("Addiation="+ c);
//     break;
//     case "-":
//      c=a+b;
//       document.writeln("Additation = "+c);
//     break;
//      case "*":
//         c=a*b;
//     document.writeln("Addation ="+c);
//     break;
//          case "/":
//         c=a/b;
//     document.writeln("Addation ="+c);
//     break;
//          case "%":
//         c=a%b;
//     document.writeln("Addation ="+c);
//     break;
//    default:
//         document.writeln(" invalid");
// }
// 23. Write a Java program to input day number and print week day.
// var a= parseInt(prompt(" enter aney week day"));
//  switch(a)
//  {
//     case 1:
//         document.writeln(" MONDAY");
//         break;
//         case 2:
//         document.writeln(" TUESDAY");
//         break;
//         case 3:
//         document.writeln(" WEDNASDAY");
//         break;
//         case 4:
//         document.writeln(" THRUSDAY");
//         break;
//         case 5:
//         document.writeln(" FRIDAY");
//         break;
//         case 6:
//         document.writeln(" SATURDAY");
//         break;
//         case 7:
//         document.writeln(" SUNDAY");
//         break;
//     default:
//         document.writeln(" invalid");         
//  }

//  9 WAP to calculate the sum of given series 1 2 3 4 5 6 7 ................n terms 
// var a=1;
// var sum =0;
// var b =parseInt(prompt(" enter aney number for sum"));
// while(a<=b)
// {
//     sum=sum+a;
//     a=a=1;
// }
// document.writeln("sum")
// 10 WAP to calculate the sum of given series 2 4 6 8 10.....................n terms 
// var a=1;
// var sum=0;
// var b=parseInt(prompt("  enter any number for sum"));
// while (a<=b*2)
// {
//     if (a%2==0)
//     {
//         sum =sum + a;
//         document.writeln(a)
//         a=a+1;
//     }
//     else
//     {
//         a=a+1;
//     }

// }
// document.writeln.writeln(" ="+sum)
// 7 WAP to print the series 1 4 9 16 25................n terms
// var a=1;
// var b=parseInt(prompt("enter any number "));
// var d=0;
// while(a<=b)
// {
//     d=a*a;
//     document.writeln(d)
//     a=a+1;

// }
//  QWAP to find greater among three number
//    var a=parseInt(prompt(" enter value of A"));
//    var b=parseInt(prompt("enter value of B"));
//    var c=parseInt(prompt(" enter value of C"));
//     if (a>b)
//     {
//         if (a>c)
//         {
//             document.writeln("A is greater")
//         }
//         else 
//         {
//             document.writeln("C is greater")
//         }

//     }
//     else
//     {
//         if (b>c)
//         {
//             document.writeln(" B is greater");
//         }
//         else
//         {
//             document.writeln("C is greater")
//         }
//     }
// question 14 :create a Polyndrom number .
// var a=parseInt(prompt("Enret any number for Polyndrom number"));
// var b=a;
// var ram=0;
// var r;
// while(a!=0)
// {
//     r=Math.floor(a%10);
//     ram=ram*10+r;
//     a=Math.floor(a%10);
// }
// if(b==ram)
//   {
//     document.writeln("Polyndrom Number");
//   } 
//   else
//   {
//     document.writeln("Not a Polyndron Number");
//   }
// queation:create a armstrong Number.
// ---------------------------------------------------
// var a=parseInt(prompt(" enter any number "));
// var ram=0;
// var r;
// while(a!=0)
// {
//   r=  Math.floor(a%10);
//   ram=ram*10+r;
//    a= Math.floor(a/10);
// }
// document.writeln(ram)
  
// var a=parseInt(prompt(" enter number"));
// var ram=0;
// var r;
// while(a!=0)
// {
//   r=Math.floor(a%10);
//   ram=ram*10+r;
//   a=Math.floor(a/10);
// }
// document.writeln(ram)
//
// 3. WAP to calculate the sum of given series x^1 + x^2 + x ^3.........x^n
// var a=parseInt( prompt(" number of turms "));
// var parseInt( prompt(" numbe of numbers"));
// var sum=0;
// var c=1;
// while (c<=a)
// {
//     d=1;
//     f=1;
//     while(d<=c)
//     {
//         f=f*b;
//         d=d+1;
//         sum=sum+f;
//         a=a+1;

//     }

// }
//     document.writeln(c)

// .t1{
//     width:45%;
//     height: 45vh;
//     background-image: url(img/blaz-photo-zMRLZh40kms-unsplash.jpg);
//     background-size: cover;
//     background-position: center;
//     border-radius: 5%;
//     margin-left: 3%;
//     float: left;
// }
// .t2{
//     width:45%;
//     height: 45vh;
//     background-image: url(img/unseen-studio-s9CC2SKySJM-unsplash.jpg);
//     background-size: cover;
//     background-position: center;
//     border-radius: 5%;
//     margin-left: 5%;
//     float: left;
// }
<h1 align="center" style="font-size:50px">Browser Topic</h1>