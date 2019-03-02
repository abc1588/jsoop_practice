class Account{
	constructor(new_acct){
		//store the amount of money in the account
		this.account_number = new_acct;
		this.account_balance = 0;

	}
	getAccountNumber(){
		console.log ('Account Number: ', this.account_number);
		return this.account_number;
	}
	add( amount ){
		//add money to the amount stored in the account
		//takes in an amount
		//checks if it is actually a number greater than 0
			//if not, return false
		//adds it to the existing amount
		//returns the new amount in the account
		if (amount <= 0){
			return false;
		}
		this.account_balance += amount;
		console.log ('Amount deposited: $', amount);
		console.log ('Account Balance: $', this.account_balance);
		return this.account_balance;
	}
	remove( amount ){
		//removes funds from an account
		//checks if amount is actually a number greater than 0
			//if not, return false
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
		if (amount <= 0){
			console.log ('Cannot withdraw an amount less than $0');
			return false;
		}
		else if (amount > this.account_balance)
			{
				this.account_balance = 0;
				console.log ('Insufficient fund - can only withdraw balance of account: ', this.account_balance);
				console.log ('Remaining Balance: $', this.account_balance);
				return amount;
			} else {
				this.account_balance -= amount;
				console.log ('OK to withdraw $', amount);
				console.log ('Remaining Balance: $', this.account_balance);
				return amount;
			}
	}
	getAmount(){
		//returns the amount in the account
		console.log ('Account Current Balance: $', this.account_balance);
		return this.account_balance;
	}
}