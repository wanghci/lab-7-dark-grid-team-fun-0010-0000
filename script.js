
document.getElementById("darkbutton").addEventListener("click", ()=> document.body.classList.remove("dark"));
document.getElementById("lightbutton").addEventListener("click", ()=>document.body.classList.remove("light"));
document.getElementById("defaultbutton").addEventListener("click", ()=> document.body.classList.remove("dark","light") ); //computer default