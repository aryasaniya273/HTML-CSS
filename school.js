function Sname()
{
    var Student_name=document.getElementById("sname").value;
    var status= false
    var c=0
    for(var i=0; i<Student_name.length;i++)
    {
        if(Student_name[i]>='a'&& Student_name[i]<='z'||Student_name[i]>='A'&& Student_name[i]<='Z'||Student_name[i]==' ')
        {
            status=true;
        }
        else{
            status=false;
        }
    }
    if(status==true)
    {
        document.getElementById("name_spn").style.display="none";
    }
    else{
        document.getElementById("name_spn").style.display="inline";
    }
}

function mobile()
{
    var phone=document.getElementById("phone").value;
    var status=false;
    for(var p=0;p<phone.length;p++)      
    {
        if(phone.length==10 && phone[p]>='0'  || phone[0]>='6' && phone[0]<='9' && phone[p]<='9')
        {
            status=true;    
        }
        else{
            status=false;
        }
    }
    if(status==true)
    {
        document.getElementById("phone_spn").style.display="none";
    }
    else{
        document.getElementById("phone_spn").style.display="inline";
    }
}
function Email1()
{
    var email=document.getElementById("Email").value;
    var status =false;
    var status1=false;
    email=email.split("@")
    for(var e=0; e<email[0].length;e++)  
    {
        if(email[0][e]>='a' &&  email[0][e]<='z' || email[0][e]>='0' && email[0][e]<='9' || email[0][e]>='A' && email[0][e]<='Z' || email[0][e]=='_')
        {
            status=true;
            
        }
        else{
            status=false;
        }
    }
        if(email[1]=="gmail.com")
        {
            status1=true;
        }
        else{
            status1=false;
        }
    
    if(status==true && status1==true)
    {
        document.getElementById("Email_spn").style.display="none";
    }
    else{
        document.getElementById("Email_spn").style.display="inline";    
    }
} 
function Fname1()
{
    var Fname=document.getElementById("Fname").value;
    var status = false
    var a=0
    //  alert("asdfghjkl;")
    for( var i=0 ; i<Fname.length;i++)
    {
        if(Fname[i]>='a'&& Fname[i]<='z'|| Fname[i]>='A' && Fname[i]<='Z' || Fname[i]==' ' )
        {
            status =true;
           
        }
        else{
            status=false;
        }
    }
    if(status==true)
    {
        document.getElementById("Fname_spn").style.display="none";
    }
    else{
        document.getElementById("Fname_spn").style.display="inline";
    }
}
function Mname1()
{
    var Mname=document.getElementById("Mname").value;
    var status = false
    var a=0
    for( var i=0 ;i<Mname.length;i++ )
    {
        if(Mname[i]>='a'&& Mname[i]<='z'||Mname[i]>='A' && Mname[i]<='Z' || Mname[i]==' ')
        {
            status=true;
        }
        else{
            status=false;
        }
    }
    if(status==true)
    {
        document.getElementById("Mname_spn").style.display="none"
    }
    else{
        document.getElementById("Mname_spn").style.display="inline"
    }
}
