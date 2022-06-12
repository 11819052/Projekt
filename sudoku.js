var numSelected = null;
var tileSelected = null;
var errors = 0;
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

window.onload = function(){
    setGame();
}
function setGame(){ //Spielfeld und Ziffernblöcke werden vorbereitet

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


            tile.addEventListener("click", selectTile, false);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);    
        }
    }
    document.getElementById("numberOptions").classList.add("hiddenOptions");  //Optionenleiste zur Auswahl der einzufügenden Zahl wird unsichtbar

function selectTile(Ereignis){
    // //Position des ausgewählten Divs berechnen
    // let rec = document.getElementById(this.id).getBoundingClientRect();
    // let left  = rec.left + window.scrollX;
    // let top = rec.top + window.scrollY;
    // console.log(left+" "+top);
    // //Optionenleiste an diese Stelle positionieren und sichtbar machen
    // document.getElementById("numberOptions").style.left = left;
    // document.getElementById("numberOptions").style.top = top;
    // document.getElementById("numberOptions").classList.remove("hiddenOptions");
    // console.log("hello");

    if(!Ereignis) Ereignis = window.event;
    if(document.getElementById){
        document.getElementById("numberOptions").style.left = Ereignis.clientX + "px";
        document.getElementById("numberOptions").style.top = Ereignis.clientY + "px";
    }

    document.getElementById("numberOptions").classList.remove("hiddenOptions");
    
}




    
// //Auswahl einer Zahl aus der Zahlenreihe
// function selectNumber(){
//     if(numSelected != null){ //wenn bereits eine Zahl ausgewählt wurde und eine andere angeklickt wird, muss die Auswahlfarbe wieder entfernt werden
//         numSelected.classList.remove("number-selected");
//     }
//     numSelected = this; //bezieht sich auf number-Div
//     numSelected.classList.add("number-selected");
// }


// //Auswahl eines zu befüllenden Blocks im Spielfeld
// function selectTile(){
//     if(numSelected){
//         if(this.innerText != ""){
//             return;
//         }
//         let coords = this.id.split("-"); // ID z.B. "4-1" wird getrennt und Ziffern in einem Array gespeichert, z.B. ["4", "1"]
//         let r = parseInt(coords[0]); //String to Int
//         let c = parseInt(coords[1]);

//         //Lösung überprüfen
//         if(solution[r][c]==numSelected.id){
//             this.innerText = numSelected.id;
//         }
//         else {
//             errors+=1;
//             document.getElementById("errors").innerText = errors;
//         }
//     }
// }
}


// function selectTile(){
//     let dropdown = document.createElement("div");
//     dropdown.classList.add("dropdown");
//     this.parentNode.insertBefore(dropdown,this);

//     dropdown.appendChild(this);

//     let content = document.createElement("div");
//     content.classList.add("dropdown-content");
//     this.append(content);

//     for(let i = 1; i<10; i++){
//         let option = document.createElement("a");
//         var text = document.createTextNode(i);
//         option.appendChild(text);
//         content.appendChild(option);
//     }
// }

