let footer = document.querySelector(".footer .container")


// to handle The Year
let a = new Date ();
a = a.getFullYear();
footer.innerHTML = `Copyright © ${a} Your Name . All Rights Reserved .`;