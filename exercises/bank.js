class Bank{
	constructor(name){
		//takes in the name of the bank.
		//makes an object to store all accounts into
		this.bankName = name;
		this.accountInventory = [];
	}
	makeAccount( account_number, open_balance ){
		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		//otherwise makes an new Account object, storing it into the storage object in the constructor
		//returns the Account object that was constructed
		var newAccount = new Account(account_number);
		this.accountInventory.push(newAccount);
		newAccount.add(open_balance);
		return newAccount;
	}
	checkForAccount(account_number){
		//checks if an account exists or not
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
debugger;
		var total_acct = this.accountInventory.length;
		if (total_acct == 0) {
			console.log('Account does not exist - ok to create new account');
			return false;
		}
		for ( var i=0; i < total_acct; i++ )
		{
			if (account_number == this.accountInventory[i].getAccountNumber()) {
				console.log('Account already exists');
				return true;
			}
		}
		return false;
	}
	removeAccount(account_number) {
		//removes an account
		//takes in an account number
		//if the account doesn't exist, returns
		//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
		//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 'account <accountNumber> deleted'
		var total_acct = this.accountInventory.length;
		if (total_acct == 0) {
			console.log('This bank has no accounts - unable to remove account');
			return false;
		}
		for ( var i=0; i < total_acct; i++ )
		{
			if (account_number == this.accountInventory[i].getAccountNumber()) {
				console.log('Found account to remove... checking on account balance...');
				if (this.accountInventory[i].getAmount()>0) {
					console.log('This account is not empty - unable to remove');
					return ;
				} else {
					this.accountInventory[i] = null;	// set object to null to remove
					console.log('Account ' + account_number + ' has been deleted');
					return;
				}
			}
		}
	}
	deposit(account_number, amount){
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns //"account <accountNumber> now has <new account amount>

		var total_acct = this.accountInventory.length;
		for ( var i=0; i < total_acct; i++ )
		{
			if (account_number == this.accountInventory[i].getAccountNumber()) {
				this.accountInventory[i].add(amount);
				console.log('Amount $' + amount + ' has been deposited for Account ' + account_number);
				return true;
			}
		}
		console.log('Account ' + account_number + ' does not exist');
		return;
	}
	withdraw( account_number, amount ){
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"

		var total_acct = this.accountInventory.length;
		for ( var i=0; i < total_acct; i++ )
		{
			if (account_number == this.accountInventory[i].getAccountNumber()) {
				this.accountInventory[i].remove(amount);
				console.log('Amount $' + amount + ' has been withdrawn for Account ' + account_number);
				return true;
			}
		}
		console.log('Account ' + account_number + ' does not exist');
		return;
	}
}