
function getData()
{
    //Inhalt holen
    var name = document.getElementById("name").value;
    var diff = "";
    if(document.getElementById("leicht").checked){
        diff = "leicht";
    }
    if(document.getElementById("mittel").checked){
        diff = "mittel";
    }
    if(document.getElementById("schwer").checked){
        diff = "schwer";
    }
    //Inhalt im localStorage speichern
    localStorage.setItem("name", name); 
    localStorage.setItem("diff", diff);
}