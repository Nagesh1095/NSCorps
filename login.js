function validationLogin(){
    var Username=document.getElementById("Username").value;
    var Password=document.getElementById("Password").value;
    if(Username != ""){
        if(Username.length >5 ){
            if(Username.match(/^[a-z]/)){
                 if(Password !=""){
                    document.getElementById("resp").innerHTML = "Login Accepted";
               }else{
                  document.getElementById("resp").innerHTML = "Password is Empty";
               }
            }else{
                 document.getElementById("resp").innerHTML = "invalid Username";
                } 
       }else{document.getElementById("resp").innerHTML="Username must greater than 5";}
    
    }else{document.getElementById("resp").innerHTML="invalid Username";}
}