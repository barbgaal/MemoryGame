/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 const mainList = document.querySelector('ul.deck');
 const theCards = document.querySelectorAll('li.card');
 const openCard = [];
 const flipCard = 0;
 const numberMoves = 0;
 const shuffleCards = [];
 const timer = 0;
 const numberStars = 0;


 /*function respondToTheClick(e) {
    console.log('A card was clicked.');

    theCards.addEventListener('click', function(){
      console.log("yaeh");
      for(let i = 0; i < theCards.length; i++){
        console.dir(theCards[i]);
      }

      //e.target.tagName === 'LI';
      console.log("LI");
    });
}*/

 mainList.addEventListener('click', respondToTheClick);

 function respondToTheClick(e) {
     //alert("Congratulations! It took you minutes. You completed the challenge with stars. Do you want to play again?");
     console.log('A card was clicked2.');
     console.log(e.target); // to check what is clicked.
     var clickedCard = e.target;
     openCard.push(clickedCard.children);
     clickedCard.classList.add('open','show');
     console.log(openCard);

     if (openCard.length <= 2){
       if (openCard[0].className === openCard[1].className){
       clickedCard.classList.add('match');
       clickedCard.classList.remove('open','show');
       console.log("It worked");
       }
     } else {
       setTimeout(function(){
       clickedCard.classList.remove('open','show');

       openCard = [];
     },2000);

      }

  };

// shuffle the cards array
//shuffleCards = shuffle(mainList);
//mainList.addEventListener('click', function(e){
//  console.log('click');  //I'm just checking eventListener was added
//  console.log("this",this);  //I'm checking what is `this` - in jQuery in my code I've added additional parameter which became `$(this)` but it's not a case in vanilla /plain JS
//  var clickedCard = e.target;  //so I'm assigning exactly the card I've clicked
//  console.log(clickedCard);  - //I see what is the card I've clicked
//  console.log(e.target.classList); //I see the class list
//  clickedCard.classList.add('open','show');
//  console.log(clickedCard.children); //I'm checking the inner element - the card with fa fa ....
//   openCard.push(clickedCard.children); // adding into openCard array clicked card, so we can compare
//  console.log(openCard); //checking what is inside the array so we can add second card and compare openCard[0] and openCard[1] - and don't forget to empty the array after match or dismatch
//});
