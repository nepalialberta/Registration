function checkValidation(){
    var uid=document.register.userid;
    var passid=document.register.passid;
    var uname=document.register.username;
    var uadd=document.register.address;
    var ucountry=document.register.country;
    var uzip=document.register.zip;
    var uemail=document.register.email;
    var umsex=document.register.msex;
    var ufsex=document.register.fsex;

    if(userid_validation(uid,5,12))
    {
        if(passid_validation(passid,5,12)){
            if(allLetter(uname)){
                if(alphanumeric(uadd)){
                    if(countryselect(ucountry)){
                        if(allnumeric(uzip)){
                            if(ValidateEmail(uemail)){
                                if(validsex(umsex,ufsex)){

                                }
                            }
                        }
                    }
                }
            }

        }

    }

    return false;

}

function userid_validation(uid, mx, my){
    if(uid_len==0 || uid>=my || uid_len<mx){
        alert("User id can't be empty");
        uid.focus();
        return false
    }
    return true;
}

function passid_validation(passid,mx, my){
    var passid_len=passid.value.length;
    if(passid_len==0||passid_len>=my||passid<mx){
    passid.focus();
    return false;
}
return true;
}

function allLetter(uname){
    var leters =/^[A-Za]+$/;
    if(uname.value.match(letters)){
        return true;
        
    }
    
    else{
        alert("User name only accept letters");
        uname.focus();
        return false;
    }
}


function alphanumeric(uadd){
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters)){
        return true;
    }

    else{
        alert("User address must contain letters and numbers");
        uadd.focus();
        return false;
    }
}

function countryselect(){
    if(ucountry.value=="Default"){
        alert("Select your country from the list");
        ucountry.focus();
        return false;
    }
    else{
        return true;
    }
}

function allnumeric(uzip){
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers)){
        return true;

    }
    else{
        alert("Zip code must contains numbers only");
        uzip.focus();
        return false;
    }
}


function ValidateEmail(uemail){
    var emailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(emailcheck)){
        return true;
    }
    else{
        alert("You have entered invalid email, try again");
        uemail.focus();
        return false;
    }
}

function validsex(umsex, ufsex){
    x=0;
    if(umsex.checked){
        x++;
    }
    if(ufsex.checked){
        x++;
    }

    if(x==0){
        alert("Select from the list Male/Female");
        umsex.focus();
        return false;

    }

    else{
        alert("Your form submitted successfully");
        window.location.reload();
        return true;
    }

}

