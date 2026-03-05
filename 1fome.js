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
        document.writeln("Valid")
    }
    else{
        document.writeln("Invalid")
    }
    
}
function Psaniya()
{
    var Pname=document.getElementById("Pname").value;
    var status = false
    
    for( var p=0; p<Pname.length;p++)
    {
        if(Pname[p]<='a'&& Pname[p]>='z' ||Pname[p]<='A'&& Pname[p]>='Z'||Pname[p]==' ' ||Pname.length >=6)
        {
            status=true;
        }
        else{
            status=false;
        }
    }
        if(status==true)
        {
            document.writeln("Valid")
        }
        else{
            document.writeln("Invalid")
        }
    
}
function esaniya()  
{
   
    var email = document.getElementById("email").value;
        email.split("@")
        var status=false
        var status1=false

        for(var i = 0; i< email[1].length ; i++)
        {
            if(email[e]<='a'&& email[e]>='z'||email[e]<='A'&& email[e]>='Z' || email[e]<='0'&& email[e]>='9'|| email[e]=='-' || email[e]=='.')
            {
                status=true;
            }
            else{
                status=false;
            }
        }
      if(email[2] == "gmail.com")
      {
        status1 = true;
      }
      else{
        status1 =false;
      }
      if( status == true && status1 == true)
      {
              document.writeln("valid")  
      }
      else{
        document.writeln("invalid")

      }
}
function phones()
{
    var phone=document.getElementById("phone").value;
    var status=false
    for(var p=0;p<phone.length;p++)
    {
       if(phone.length==10 && phone[p]>='0' || phone[p]<='9'&& phone[0]>='6'&& phone[0]<='9')
       {
        status=true;
       }
       else{ 
        status=false;
       }
    }
    if(status==true)    
    {
        document.writeln("valid");
        
    }
    else{
        document.writeln("invalid");
    }
}