"use strict";

$(document).ready(function() {
  // Select all cards with their class ".card"
  var cards = $(".card");

  // Define global variables
  var currentCard = null;
  var previousCard = null;

  // Set the event "click" on each card
  cards.on("click", function() {
    // previousCard is assigned to the "previous currentCard"
    // When the user is clicking for the first time, currentCard equals null so previousCard is logically null
    previousCard = currentCard;

    // currentCard is the card we clicked on
    currentCard = $(this);

    // Show the card we clicked on
    currentCard.addClass("show");

    console.log("Previous card:");
    console.log(previousCard);
    console.log("Current card:");
    console.log(currentCard);

    if (previousCard != null) {
      // User clicked on a second card
      if (currentCard.data("value") != previousCard.data("value")) {
        // previousCard equals currentCard
        currentCard.removeClass("show");
        previousCard.removeClass("show");
      }
    } else {
      // Do nothing
      // User clicked on one card for now
    }
  });
});
