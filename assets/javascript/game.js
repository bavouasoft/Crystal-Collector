var random_result;
let win = 0;
let loss = 0;
let ids = ["c1", "c2", "c3", "c4"];

function reset() {
  current_score = 0;
  random_result = Math.floor(Math.random() * 101) + 19;
}

random_result = Math.floor(Math.random() * 101) + 19;
let current_score = 0;
$("#result").html("Random Result: " + random_result);

function init_block() {
  // creation of divs in memory
  //creation of composants
  $(".crystals").empty();
  for (let i = 0; i < 4; i++) {
    // we have i = 4 crystals boxes
    // each crystal need to have a random number between 1 - 12
    let random = Math.floor(Math.random() * 11) + 1;
    let crystal = $("<div>"); // creation of an empty div
    crystal.attr({
      id: "c" + i, // assigns attribute to the newly created elt c0 C1 ....c3
      class: "crystal",
      "data-random": random, //setting value//our data attribute random number//inside lets put our random mentionned on top/let random = Math.floor(Math.random() * 12);
    });
    $(".crystals").append(crystal); // locates the elements of class crystal // insert in the class
  }
}

function reset_block() {
  // reset the random number of  each div in memory
  // $(".crystals").empty();
  for (let i = 0; i < 4; i++) {
    // we have i = 4 crystals boxes

    // each crystal need to have a random number between 1 - 12
    let random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);
    // let id = ids[i];
    let crystal = $("#c" + i); // #c0,....#c4
    $(crystal).attr("data-random", random); // modify content value of data random with random
  }
}

init_block();
$(".crystal").on("click", function () {
  //console.log($(this)); // when we click on any crystal(class'crystal'), we should console.log the one we clicked on (this)
  let num = parseInt($(this).attr("data-random")); //to get the value of the attribute here
  current_score = current_score + num;
  if (current_score > random_result) {
    alert("you have lost");
    loss = loss + 1;

    reset();
    reset_block();
  } else if (current_score === random_result) {
    alert("you have won");
    win = win + 1;

    reset();
    reset_block();
  } else {
    console.log("good to go");
  }

  console.log(num);

  $("#result").html("Random Result: " + random_result);
  $("#loss").html("loss: " + loss);
  $("#win").html("win: " + win);
  $("#user_score").html("current score: " + current_score);
});

//console.log("hello world");

// pseudo coding

// game with 4 crystal and a random result
// each crystal need to have a random number between 1 - 12
// a new  random number will be generated  for each crystal
// every time we win or lost
// When click on any crystal the number is added to the previous result
// until it equal the total score
//
// if its not equal, we start over and we
// increment the lost counter
// if its  equal, we increment the win counter
// The random result number shown at the start is between 19 - 120
