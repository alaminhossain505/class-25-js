var fname = document.getElementById("fname");
var fnameE = document.getElementById("fnameE");

var lname = document.getElementById("lname");
var lnameE = document.getElementById("lnameE");

var pass = document.getElementById("pass");
var passE = document.getElementById("passE");

var cpass = document.getElementById("cpass");
var cpassE = document.getElementById("cpassE");

function subm() {
    if (fname.value == ''){
        fname.style.border = "1px solid red";
        fname.focus();
        fnameE.innerHTML = "please fill up ta gape";
        return false;
        
    }

    if (lname.value == ''){
        lname.style.border = "1px solid red";
        lname.focus();
        lnameE.innerHTML = "please fill up ta gape";
        return false;
        
    }

    if (pass.value == ''){
        pass.style.border = "1px solid red";
        pass.focus();
        passE.innerHTML = "enter password";
        return false;
        
    }

    if (pass.value.length <= 5){
        pass.style.border = "1px solid red";
        pass.focus();
        passE.innerHTML = "password must be 6 charecter";
        return false;
        
    }

    if (cpass.value == ''){
        cpass.style.border = "1px solid red";
        cpass.focus();
        cpassE.innerHTML = "confirm password";
        return false;
        
    }

    if (cpass.value != pass.value){
        cpass.style.border = "1px solid red";
        cpass.focus();
        cpassE.innerHTML = "password did not match";
        return false;
        
    }
}



function errRemove() {
    if (fname.value != ''){
        fname.style.border = "1px solid #fff"; 
        fnameE.innerHTML = "";
    }

    if (lname.value != ''){
        lname.style.border = "1px solid #fff"; 
        lnameE.innerHTML = "";
    }

    if (pass.value != ''){
        pass.style.border = "1px solid #fff"; 
        passE.innerHTML = "";
    }

    if (cpass.value != ''){
        cpass.style.border = "1px solid #fff"; 
        cpassE.innerHTML = "";
    }
}

fname.addEventListener('blur',errRemove);
lname.addEventListener('blur',errRemove);
pass.addEventListener('blur',errRemove);
cpass.addEventListener('blur',errRemove);