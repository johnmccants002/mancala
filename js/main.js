// Properties

let playerScore = 0;
let computerScore = 0;
let gameBoard = [4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0];

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
var repeated = new Array(5).fill(keyArray).flat();
// console.log(repeated);
// Event Listeners

function setupGameboard() {

    $(".item").each(function(index, element) {
        $(element).text(boardObject[element.id]);
        
        console.log(element.id);
        console.log(boardObject[element.id]);
        console.log(index);
        // element = $(element).text(gameBoard[index]);

    })

}

setupGameboard()
// Index of boardObject keys compared to number value ex C4  4value 9spot total - value > spot
$(".item").on("click", function(e) {
   let id = e.target.id;
   console.log(id);
   let number = $("#" + id).text();
   let spot = keyArray.indexOf(id);
   let total = keyArray.length;
   console.log("This is the length " + total);
   console.log("This is the spot " + spot);
   console.log("This is the number " + number);
$("#" + id).text("0");

let newArray = keyArray.slice(spot + 1);


console.log("This is the newArray " + repeatArray);
for (let i = number; i = 0; i-- ) {

}




});

