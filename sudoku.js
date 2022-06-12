var selectedTile = null;
var attempts = 0;
var difficulty = "";
//var timeNeeded = "00:00:00";
var board = []
var solution = []
var easy = ["586-31-7-","2-786-513","-1-7-52-6","-28--4361","6-491372-","-3162--95","4-5-82-37","17-4968-2","-6235-1-9"]
var easySol = ["586231974","247869513","319745286","928574361","654913728","731628495","495182637","173496852","862357149"]
var mid = ["3--5--9-8","-92-48-3-","5-693-4-1","-31-9756-","2--81--49","-59--3-8-","9--6-17-3","1-5-84-96","-2375-8--"]
var midSol = ["314576928","792148635","586932471","831497562","267815349","459263187","948621753","175384296","623759814"]
var diff = ["--8----32","---------","---678-9-","-----1--5","----269-3","4--93----","---1-----","-56----18","-2-7-35--"]
var diffSol = ["618459732","947312856","532678194","293841675","871526943","465937281","389165427","756294318","124783569"]

window.onload = function(){
    difficulty = localStorage.getItem("diff");
    document.getElementById("player").innerHTML = localStorage.getItem("name"); //Spielername wird übergeben
    document.getElementById("difficulty").innerHTML = difficulty; //Schwierigkeitsgrad wird übergeben
    setGame();
}
function setGame(){ //Spielfeld und Auswahlmöglichkeiten werden vorbereitet
    console.log(difficulty);
    switch (difficulty){
        case "leicht":
            board = easy;
            solution = easySol;
            break;
        case "mittel":
            board = mid;
            solution = midSol;
            break;
        case "schwer":
            board = diff;
            solution = diffSol;
            break;
    }
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

