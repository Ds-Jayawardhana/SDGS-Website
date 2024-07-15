const visitorname = document.getElementById("nameinput");
const viewbtn = document.getElementById("formpreview");
const namegetr = document.getElementById("nameget");

function fys() {
    namegetr.innerHTML = visitorname.value;
}

viewbtn.addEventListener('click', fys);
