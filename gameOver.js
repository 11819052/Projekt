

window.onload = function(){
    document.getElementById("name").innerHTML = localStorage.getItem("name");
    document.getElementById("diff").innerHTML = localStorage.getItem("diff");
    document.getElementById("time").innerHTML = localStorage.getItem("time");
    document.getElementById("attempts").innerHTML = localStorage.getItem("attempts");
}
