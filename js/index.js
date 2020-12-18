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
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function makeAppointment(){
    var time = document.getElementById("meetingStart").value;
    var checkBox = document.getElementsByName('check')
    if (!time || checkBox.checked) {
        window.alert("Niste pravilno popunili formu!");
        return;
    }
    window.alert("Uspesno ste zakazali sastanak!");
    location.reload();
}   