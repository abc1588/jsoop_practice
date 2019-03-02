
class Calculator{
	constructor() {
		//takes in nothing
		//make storage for the operator and the numbers
		this.operator = null;
		this.number1 = null;
		this.number2 = null;
		this.result = null;
	}
	loadOperator( math_op ){
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
		var valid_op = false;
		switch (math_op){
			case '+':
				this.operator = math_op;
				valid_op = true;
				break;
			case '/':
				this.operator = math_op;
				valid_op = true;
				break;
			case '*':
				this.operator = math_op;
				valid_op = true;
				break;
			case '/':
				this.operator = math_op;
				valid_op = true;
				break;
		}
		console.log ('operator load ', this.operator);
		return valid_op;
	}

	loadNumber( inputNumber ){
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
		var tooMany = false;
		//var countOperand = this.operand.length;
debugger;
		if (typeof inputNumber !== 'number'){
			console.log ('Invalid Number');
			return false;
		}
		if (this.number2 !== null){
			console.log('Too many numbers.');
			return tooMany;
		} else if (this.number1 == null) {
			this.number1 = inputNumber;
			console.log('number loaded', this.number1);
			return this.number1;
		} else {
			this.number2 = inputNumber;
			console.log('number loaded', this.number2);
			return this.number2;
		}

	}
	calculate(){
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
debugger;
		// var number1 = this.operand[0];
		// var number2 = this.operand[1];

		switch (this.operator) {
			case "+":
				this.result = this.number1 + this.number2;
				break;
			case "-":
				this.result = this.number1 - this.number2;
				break;
			case "*":
				this.result = this.number1 * this.number2;
				break;
			case "/":
				if (this.number2 == 0) {
					this.result = 'Division by Zero - Undefined';
				} else {
					this.result = this.number1 / this.number2;
				}
				break;
			default:
				this.result = 'Unknown Operator - Error';
		}
		console.log ('calculated result is ', this.result);
		return this.result;
	}
}
