// Properties

let playerScore = 0;
let computerScore = 0;
let gameBoard = [4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0];

let playerTurn = true;

let boardObject = {
    "p1": 4,
    "p2": 4,
    "p3": 4,
    "p4": 4,
    "p5": 4,
    "p6": 0,
    "c1": 4,
    "c2": 4,
    "c3": 4,
    "c4": 4,
    "c5": 4,
    "c6": 0,
}

let keyArray = ["p1", "p2", "p3", "p4", "p5", "p6", "c1", "c2", "c3", "c4", "c5", "c6"];
let playerArray = ["p1", "p2", "p3", "p4", "p5"];
let computerArray = ["c1", "c2", "c3", "c4", "c5"];
let loadingStrings = ["Loading", "Loading.", "Loading..", "Loading..."]
function setupGameboard() {
    $(".item").each(function(index, element) {
        $(element).text(boardObject[element.id]);
        console.log(element.id);
        console.log(boardObject[element.id]);
        console.log(index);
    })
}

function calculateWinner() {
    let cpMancalaTotal = boardObject["c6"];
    let plMancalaTotal = boardObject["p6"];
        for (let i = 0; i < computerArray.length; i++) {
            let key = computerArray[i];
            let playerKey = playerArray[i];
            cpMancalaTotal += boardObject[key];
            plMancalaTotal += boardObject[playerKey];

            $("#" + key).text(0);
            $("#" + playerKey).text(0);
        }

        setTimeout(function() {
            $("#p6").text(plMancalaTotal);
            $("#c6").text(cpMancalaTotal);

            if (cpMancalaTotal > plMancalaTotal) {
                $(".bottom-text").text("Computer has won");
                    } else if (plMancalaTotal > cpMancalaTotal) {
                  
                $(".bottom-text").text("You have won");
                    } else {
                        $(".bottom-text").text("Tie Game");
                        
                    }
        }, 1000)
    



}

function playerHolesTotal() {
    let total = 0
    for (let i = 0; i < playerArray.length; i++) {
        total = total + boardObject[playerArray[i]];
    }

    console.log("this is the player total " + total);
    return total;
}

function computerHolesTotal() {
    let total = 0
    for (let i = 0; i < computerArray.length; i++) {
        total = total + boardObject[computerArray[i]];
    }

    console.log("this is the computer holes total " + total);
    return total;
}


function checkMoves(player, lastSpot) {
    if (player == true) {
        let playerTotal = playerHolesTotal();
        if (playerTotal == 0) {
    
           calculateWinner();
        } else if (lastSpot == "p6") {
            playerTurn = true;
            $(".bottom-text").text("Your turn again")
        } else {
            $(".bottom-text").text("Computer turn")
            setTimeout(function () {
                playerTurn = false;
                computerMove()
            }, 4000)
        }
    } else if (player == false) {
        let computerTotal = computerHolesTotal();
        if (computerTotal == 0) {

           calculateWinner();
        } else if (lastSpot == "c6") {
            $(".bottom-text").text("Computer turn again");
            setTimeout(computerMove, 2000);
        } else {
            playerTurn = true;
            $(".bottom-text").text("Your turn");
        }
    }
}




function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

setupGameboard()

function computerMove() {
    let waitTime = 500;
    let random = Math.round(getRandomArbitrary(1, 6));
    let id = "c" + random;
    let lastSpot;
    let spot = keyArray.indexOf(id);
    let number = $("#" + id).text();
    if (number == 0 || id == "c6") {
computerMove()
return;
    }
    $("#" + id).text("0");
    boardObject[id] = 0;
    let newArray = keyArray.slice(spot + 1).concat(keyArray).concat(keyArray);
    for (let i = 0; i < number; i++) {
        boardObject[newArray[i]] += 1;
        setTimeout(function () {
            $("#" + newArray[i]).text(boardObject[newArray[i]]);
        }, waitTime)
        waitTime = waitTime += 500;
        lastSpot = newArray[number - 1];
    }

    console.log("This was the computer move " + id);
    console.log("This is the last spot for computer" + lastSpot);

    checkMoves(false, lastSpot);
    

}
// Index of boardObject keys compared to number value ex C4  4value 9spot total - value > spot
$(".item").on("click", function(e) {
   let waitTime = 500
   let id = e.target.id;
   console.log(id);
   if (id == "p6" || id == "c6") return;
   if (id.includes("c")) return;
   let number = $("#" + id).text();
   if (number == "0") return;
   if (playerTurn == false) {
    return
   }
   let spot = keyArray.indexOf(id);
   let total = keyArray.length;
   let lastSpot;
   console.log("This is the length " + total);
   console.log("This is the spot " + spot);
   console.log("This is the number " + number);
$("#" + id).text("0");
boardObject[id] = 0;
let newArray = keyArray.slice(spot + 1).concat(keyArray);


console.log("This is the newArray " + newArray);
for (let i = 0; i < number; i++ ) {
boardObject[newArray[i]] += 1;
setTimeout(function () {
    $("#" + newArray[i]).text(boardObject[newArray[i]]);
}, waitTime)
waitTime = waitTime += 500

console.log("This is the last piece in the array to be added to" + newArray[number - 1]);
lastSpot = newArray[number - 1];
}


checkMoves(true, lastSpot);

console.log(playerTurn);

console.log(boardObject);


});


