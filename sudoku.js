var selectedTile = null;
var attempts = 0;
//var timeNeeded = "00:00:00";
var board =  [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]
var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

var easy = []
var mid = []
var diff = []

window.onload = function(){
    setGame();
    document.getElementById("player").innerHTML=localStorage.getItem("name"); //Spielername wird übergeben
    document.getElementById("difficulty").innerHTML=localStorage.getItem("diff"); //Schwierigkeitsgrad wird übergeben
}
function setGame(){ //Spielfeld und Auswahlmöglichkeiten werden vorbereitet
    
    //Spielfeld vorbereiten
    for (let r = 0; r<9; r++){ //Für jede Reihe
        for (let c=0; c<9; c++){ //Für jede Spalte
            let tile = document.createElement("div"); //erstellt ein Div-Tag: <div></div> für die einzelnen Ziffernblöcke
            tile.id = r.toString() + "-" + c.toString(); //Blöcke werden daher mit "Reihe-Spalte" adressiert

            //Spielfeld mit Zahlen füllen
            if(board[r][c] != "-"){ //es sollten keine Bindestriche, sondern leere Felder angezeigt werden
                tile.innerText = board[r][c]; //Befüllen der leeren Felder mit Zahlen
                tile.classList.add("tile-start");
            }

            //Trennen der 3x3 Felder durch dünne Linien --> Strukturierung des Spielfeldes
            if(r==2||r==5){
                tile.classList.add("horizontal-line");
            }
            if(c==2||c==5){
                tile.classList.add("vertical-line");
            }

            if(board[r][c] == "-"){
                tile.addEventListener("click", selectTile, false);
            }

            tile.classList.add("tile");
            document.getElementById("board").append(tile);    
        }
    }
    //es werden für alle Auswahlmöglichkeiten EventListener erstellt
    let options = ["empty","one","two","three","four","five","six","seven","eight","nine"];
    options.forEach(id => {
        document.getElementById(id).addEventListener("click", selectNumber, false);
    });
    document.getElementById("numberOptions").classList.add("hiddenOptions");  //Optionenleiste zur Auswahl der einzufügenden Zahl wird unsichtbar
    timer();
}

function selectTile(Ereignis){
    selectedTile = this;

    if(!Ereignis) Ereignis = window.event;
    if(document.getElementById){ //öffne die Auswahloptionen an der Position des Clicks
        document.getElementById("numberOptions").style.left = Ereignis.clientX + "px";
        document.getElementById("numberOptions").style.top = Ereignis.clientY + "px";
    }
    document.getElementById("numberOptions").classList.remove("hiddenOptions");   

    //console.log("Auswahl:"+selectedNumber);

}

function selectNumber(){
    selectedTile.innerText = this.innerText;
    selectedTile.style.color = "black";
    document.getElementById("numberOptions").classList.add("hiddenOptions"); //Optionsleiste wieder unsichtbar machen
}

function checkGameState(){
    attempts++;
    document.getElementById("attempts").innerText = attempts;
    let errors = 0;
    for (let r = 0; r<9; r++){
        for (let c=0; c<9; c++){
            let id = r+"-"+c; //jede Tile.id sollte generiert werden
            //console.log("Tile: "+document.getElementById(id).innerText+", Solution")
            if(document.getElementById(id).innerText!=solution[r][c]){ //wenn Wert von Tile nicht der Lösung entspricht
                errors++;
                document.getElementById(id).style.color = "red";
            }
        }
    }
    if(errors==0){ //alles richtig --> Spiel vorbei
        console.log("Alles richtig!");

        clearTimeout(t);
        window.location.href="gameOver.html";  
    }
    
}


//-------------------STOPPUHR------------------
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    document.getElementById("stopWatch").textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
//---------------------------------------------

