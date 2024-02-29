
document.getElementById("darkbutton").addEventListener("click", go_dark());
document.getElementById("lightbutton").addEventListener("click", go_light());
document.getElementById("defbutton").addEventListener("click", go_OS());

function go_dark() {
    document.body.classList.remove("debug");
    document.body.classList.remove("OS");
    document.body.classList.add("dark");
}

function go_light() {
    document.body.classList.remove("dark");
    document.body.classList.remove("OS");
    document.body.classList.add("debug");
}

function go_OS() {
    document.body.classList.remove("dark");
    document.body.classList.remove("debug");
    document.body.classList.add("OS");
}
