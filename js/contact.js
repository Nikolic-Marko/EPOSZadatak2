function validation(){
    var name = document.getElementById("messageName").value;
    var email = document.getElementById("messageEmail").value;
    var text = document.getElementById("messageText").value;
    if (name=="") {
        window.alert("Niste uneli ime");
        return;
    } else if (email=="") {
        window.alert("Niste uneli email");
        return;
    } else if (text=="") {
        window.alert("Niste uneli text");
        return;
    }
    window.alert("Uspesno ste poslali email");
    location.reload();
    
}