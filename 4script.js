// 1. Program to print 10 times hello on output screen using loop.
//  var a = 1;
//  while ( a<=10)
//  {
//     document.writeln("hello")
//     a=a+1;
//  }
// 2 Program to print 1 to 10 number using loop 
//  var a=1;
//  while( a<=10)
//  {
//     document.writeln(a)
//     a=a+1;
//  }
// 3 Program to print 10 to 1 number using loop
// var a=10;
// while(a>=1)
//     {
//         document.writeln(a)
//         a=a-1;
//     } 
// 4. WAP to print the series 1 2 3 4 5 ...................n
//  var a=parseInt(prompt(" enter number of turms"));
//  var b=1;
//  while( b<=a )
//  {
//     document.writeln(b)
//     b=b+1;
//  }

// 5 WAP to print the series 1 3 5 7 9....................n terms 
// var a=parseInt(prompt(" enter number of turms"));
// var b=1;
// while(b<=a)
// {
//     document.writeln(b)
//     b=b+2;
// }

//6 WAP to print the series 2 4 6 8 10..................n terms 
// var a=2;
// var b=parseInt(prompt(" enter number of turms"));
// while(a<=b)
//     {
//         document.writeln(a)
//         a=a+2;
//     }  
 // 7 WAP to print the series 1 4 9 16 25................n terms 
//  var a=1;
//  var c=0;
//  var b=parseInt(prompt(" enter number of terms"));
//  while(a<=b)
//  {
//    c=a*a;
//     document.writeln(c)
//     a=a+1;
//  }

 // 9 WAP to calculate the sum of given series 1 2 3 4 5 6 7 ................n terms .
//  var a=1;
//  var b=parseInt(prompt(" enter number of terms"));
//  var sum=0;
//  while (a<=b)
//  {
//    sum=sum+a;
//    a=a+1;
//    document.writeln(sum)
//  }
// 10 WAP to calculate the sum of given series 2 4 6 8 10.....................n terms.
// var a=1;
// var sum=0;
// var b=parseInt(prompt(" enter number of terms"));
// while (a<=b*2)
// {
//    if(a%2==0){
//       sum=sum+2;
//       document.writeln(a)
//       a=a+1;
//    }
//       else{
//          a=a+1;
//       }
// }
// document.writeln("="+sum)
//  12 WAP to program to calculate the factorial of any given number.
  // var a=parseInt(prompt(" enter number of terms"));
  // var b=1;
  // while(a>=1)
  // {
  //  b=b*a;
  //  a=a-1;
  // }
  //   document.writeln(b)
// 15 WAP to to input 3 digit number and check it is armstron or not.
// var a=parseInt(prompt("enter  3 digit number "));
// var b = a;
// var r = sum = 0;
//   while(a != 0 )
//     {
//       r = Math.floor(a % 10);
//       sum = sum + r*r*r;
//       a = Math.floor(a/10);
//       // document.writeln(sum)
//   }
//   if ( b == sum )
//   {
//     document.writeln(" Number is Armstron");
//   }
//   else{
//     document.writeln("Number is not a armstron ")
//   }

// -------------------------table of 20 from for loop---------------------.
// for( a=1; a<=20 ;)

//    if (a%2==0)
//    {
//       document.writeln(a);
//        a=a+1;
//    }
//    else{
//       a=a+1;
//    }
// 1. Program to print 10 times hello on output screen using loop.
// for( a=1; a<=10;a++ )
//    document.writeln(a)
// }
// 2 Program to print 1 to 10 number using loop.
//   for ( a=1;a<=10;a++)
//    {
//       document.writeln(a)
//    } 
// 3 Program to print 10 to 1 number using loop
// for( a=10;a>=1;a--)
//    {
//       document.writeln(a)
//    } 
//  4. WAP to print the series 1 2 3 4 5 ...................n.
// var b=parseInt(prompt(" enter any number"))
//  for (a=1;a<=b;a++ )
//  {
//    document.writeln(a)
//  }

// 5 WAP to print the series 1 3 5 7 9....................n terms.

// var b=parseInt(prompt(" enter any number"))
// for( a=1;a<=b;a=a+2)
// {
//   document.writeln(a)
// }
// 6 WAP to print the series 2 4 6 8 10..................n terms.
//  var b=parseInt(prompt(" enter any number")) 
// for (a=2;a<=b;a=a+2)
// {
//   document.writeln(a)
// }
// 7 WAP to print the series 1 4 9 16 25................n terms 

// var b=parseInt(prompt(" enter any number")) 
// var c=0;
// for( a=1;a<=b;a++)
// {
//   c=a*a;
//   document.writeln(c)

// }
// 9 WAP to calculate the sum of given series 1 2 3 4 5 6 7 ................n terms.
  // var b=parseInt(prompt(" enter any number jb")) 
  // var sum=0;
  // for( a=1;a<=b;a++)
  // {
  //   sum=sum+a;
  //   document.writeln(sum)
  // }
 
// 10 WAP to calculate the sum of given series 2 4 6 8 10.....................n terms.

// var b=parseInt(prompt("enter number for sum"));
// var sum=0;
// for (a=1;a<=b*2;a++)
// {
//   if(a%2==0){

//     sum = sum +a;
//   }
// }
// document.writeln(sum)
// --------------------------------------------java atatement 1-------------------------->
// 1. WAP to calculate area of circle 
    // var radius=parseInt(prompt(" enter redious of circle"));
    // var pi=3.14;
    // area = radius*radius*pi;
    // document.writeln(area)
// 2. WAP to calculate area of rectangle
    //  var length= parseInt(prompt(" enter length of rectangle"));
    //  var wedith=parseInt(prompt(" enter wedith of rectangle"));
    //   area=length*wedith;
    //   document.writeln(area)

// 3. WAP to calculate the percentage of students
// 6. WAP to find greater among two number
    //  var a=parseInt(prompt(" enter a number "));
    //  var b=parseInt(prompt(" enter b number"));
    //  if (a>b)
    //   {
    //     document.writeln(" a is greater")
    //   }
    //   else{
    //     document.writeln(" b is grester")
    //   } 

// 7. WAP to find greater among three number
    // var a=parseInt(prompt(" enter a number "));
    //  var b=parseInt(prompt(" enter b number"));
    //  var c=parseInt(prompt(" enter c number"));
    //  if (a>b)
    //  {
    //   if(a>c)
    //   {
    //     document.writeln(" a is grester")
    //   }
    //   else 
    //   {
    //     document.writeln(' c is grester')
    //   }

    //  }
    //  else{
    //   if(b>c)
    //   {
    //     document.writeln(" b is greater")
    //   }
    //   else{
    //     document.writeln(" c is greater")
    //   }
    //  }
    

// 8. WAP to check wheather number is even or odd
// var a=parseInt(prompt(" enter a number "));
// if(a%2==0)
// {
//   document.writeln(" number is even")
// }
// else 
// {
//   document.writeln(" number is odd")
// }

// 9. WAP to check wheater number is positive or negative
// var a=parseInt(prompt(" enter a number "));
// if (a>0){
//   document.writeln("number is positive")
// }
// else if(a<0)
// {
//   document.writeln(" number is negative")
// }
// else{
//   document.writeln(" invalid number")
// }
// 13. Program to perform arithmetic operation using switch case
// var a= parseInt(prompt(" enter first number "));
// var b = parseInt(prompt(" enter second number "));
// var alpha = prompt(" using symbole like + , -,*,%,/");
// var c = 0;
// switch(alpha)
// {
//   case "+":
//     c = a+b;
//     document.writeln("Addation is = "+ c);
//     break;
//    case "-":
//    c = a-b;
//    document.writeln("  substraction is =" +c);
//  break;
//   case "*":
//        c = a*b;
//      document.writeln("divide is =" +c);
//      break;
//      case "%":
//          c = a%b;
//        document.writeln(" multiplacation  is =" +c);
//        break;
//        case "/":
//         c = a/b;
//     document.writeln("multiplacation  is = "+ c);
    
//       default:
//         document.writeln(" invalid")   }
   
// 19.W.A.P to check whether the traingle is equilateral, scalene, or isosceles. Hint: - Isosceles triangle: In geometry, an isosceles triangle is a triangle that has two sides of equal length.z Equilateral triangle: In geometry, an equilateral triangle is a triangle in which all three sides are equal. Scalene triangle: A scalene triangle is a triangle that has three unequal sides.
// var a = parseInt(prompt("enter the angle"));
// var b = parseInt(prompt(" enter the angle"));
// var c = parseInt(prompt (" enter the number"));
// if ( a==b && a==c)
//   {
//     document.writeln(' angle is equilateral')
//   } 
// else if ( a==b || b==c || c==a)
// {
//   document.writeln(" angle is isosceles")
// }
// else 
// {
//   document.writeln(" angle is scalene")
// }
// 
for(var i=1 ; i<=5 ; i++)
 {
  for(var j=1 ; j<=5 ; j++)
     {
   document.writeln("*")
    }
  document.writeln("<br>")
 }