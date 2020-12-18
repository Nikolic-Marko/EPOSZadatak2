function validation(){
    var name = document.getElementById("messageName").value;
    var email = document.getElementById("messageEmail").value;
    var text = document.getElementById("messageText").value;
    var re = /\S+@\S+\.\S+/;
    if (name=="") {
        window.alert("Niste uneli ime");
        return;
    } else if (!re.test(email)) {
        window.alert("Niste uneli pravilno email");
        return;
    } else if (text=="") {
        window.alert("Niste uneli text");
        return;
    }
    window.alert("Uspesno ste poslali email");
    location.reload();
}
