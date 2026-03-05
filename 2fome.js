function saniya()
{
    var user_name=document.getElementById("Uname").value;
    var status = false
    var c=0
    for(var i=0; i<user_name.length;i++)
    {
        if(user_name[i]<='a'&& user_name[i]>='z'|| user_name[i]<='A'&& user_name[i]<='Z'||user_name[i]==' ')
        {
            status=true;
        }
        else
        {   
            status=false;
        }
    }
    if(status==false)
    {
        document.getElementById("uname_spn").style.display = "inline";
    }
    else{
        document.getElementById("uname_spn").style.display = "non";
    }
    
}
function Psaniya()
{
    
    var Pname=document.getElementById("Pname").value;
    var status = false

    for( var p=0; p<Pname.length;p++)
    {
        if(Pname[p]<='a'&& Pname[p]>='z' ||Pname[p]<='A'&& Pname[p]>='Z'||Pname[p]==' ' || Pname.length >=6)
        {
            status=true;
        }
        else{
            status=false;
         
        }
        if(status==true)
        {
            document.getElementById("pname_spn").style.display = "inline";
            
        }
        else{
            document.getElementById("pname_spn").style.display= "none";
            
        }
    }
}
// function esaniya()
// {
//     var email=document.getElementById("Email").value;
//     var status =false
//     var status1=false
//      email=email.split("@")
//     // alert("ldjfsk")_______________________
//     // alert( email[0].length)_____________________
//     for( var e=0; e<email[0].length;e++)
//     {
//         if(email[0][e]>='a'&& email[0][e]<='z'||email[0][e]>='A'&& email[0][e]<='Z' || email[0][e]>='0'&& email[0][e]<='9'|| email[0][e]=='_' )
//           {   
//             // alert("valid nname Called")_______________________
//             status=true;
//            } 
//            else{
//             // alert("invalid name Called")_____________________
//             // alert(email[0][e])____________________________
//             status=false;
//            }
//         }
//            if(email[1] =="gmail.com")
//            {
//             // alert("domail Called")____________________________
//             status1 = true;
//            }
//            else{
//             // alert("domail not Called")___________________________
//             status1=false;
//            }
//            if(status == true && status1 == true)
//            {
//             // alert("True Called")_______________________________
//               document.getElementById("email_spn").style.display="none";
//            }
//            else{
//             // alert("False Called")____________________________
//             document.getElementById("email_spn").style.display="inline";
           
//     }
// }
function esaniya()
{
    var email=document.getElementById("Email").value;
    var status=false
    var status1=false
    email=email.split("@")
    for(var e=0; e<email[0].length;e++)
    {
        if(email[0][e]>='a'&& email[0][e]<='z' || email[0][e]>='0' && email[0][e]<='9' || email[0][e]>='A' && email[0][e]<='Z'|| email[0][e]=='_')
        {
            status=true;
        }
        else{
            status=false;
        }
        if(email[1]=="gmail.com")
        {
            status1=true;
        }
        else{
            status1=false;
        }
    }
    if(status==true && status1== true)
{
    document.getElementById("email_spn").style.displa="none";
}
else{
    document.getElementById("email_spn").style.display="inline";
}
}
function Phones()
{
   
    var phone=document.getElementById("Phone").value;
    var status=false;
    for(var p=0;p<phone.length;p++)
    {
        if(phone.length==10 && phone[p]>='0' || phone[p]<='9' &&  phone[0]>='6' && phone[0]<='9')
        {
            status=true;
            //  alert("dsfjks");
        }
        else{
            status=false;
        }
    }
    if(status==true)
    {
        document.getElementById("Phone_spn").style.display="none";
    }
    else{
        document.getElementById("Phone_spn").style.display="inline";
    }
}