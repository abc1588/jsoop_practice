
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getSuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		//make storage for your card objects
		this.cardDeck = [];
	}
	// var suits = ['Heart', 'Spade', 'Club', 'Diamond'];
	// var faceValues = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

	addCard( suit, faceValue ){
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
		var newCard = new Card(suit, faceValue);
		this.cardDeck.push(newCard);
		return this.cardDeck.length;
	}
	shuffle(){
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
debugger;
		var newDeck = new Deck();
		
		if (this.cardDeck.length <= 1) {
			console.log('Less than one card in the deck, no need to shuffle.');
			return;
		}
		console.log('Current cards in deck: ' + this.cardDeck);
		for (var i=0; this.cardDeck.length>0; i++) {
			var i_random = Math.floor(Math.random() * this.cardDeck.length);
			console.log('Random card selected: ' + this.cardDeck[i_random]);
			newDeck.push(this.cardDeck[i_random]);
			this.cardDeck.splice(i_random, 1);
		}
		console.log('Random deck: ' + newDeck);
		this.cardDeck = newDeck;
	}
	getCardCount(){
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
		return this.cardDeck.length;
	}

	dealCards( howMany2Deal ){
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it,
			//in the opposite order they were added (last-in, first-out)
		//cannot return more cards than the deck has
		var cardsInDeck = this.cardDeck.length;
		var cards2Deal = new Deck();

debugger;
		if (cardsInDeck < howMany2Deal){
			console.log ('There are less than ' + howMany2Deal + ' in the deck - unable to deal');
			return;
		}
		// remove each card starting from the back of deck
		for (var i=howMany2Deal-1; i < 0; i--){
			cards2Deal.push(this.cardDeck[this.cardDeck.length - 1]);
			this.cardDeck.pop;
		}
		return cards2Deal;
	}
}