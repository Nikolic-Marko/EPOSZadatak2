function nbPhone() {
    var navBar = document.getElementById("NB_css_response");
    if (navBar.style.display == "none") {
        navBar.style.display = "flex";
        navBar.style.flexDirection = "column"
    } else {
        navBar.style.display = "none";
    }
}
function validationFooter(){
    var text = document.getElementById("noticeText").value;
    if (text=="") {
        window.alert("Niste uneli text");
        return;
    }
    window.alert("Hvala vam!");
    location.reload();
    
}