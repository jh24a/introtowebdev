
var monthly_payment;
var principal_amount;
var yearly_rate;
var monthly_rate;
var n;

var sum_of_payments;
var total_interest;

function valid_PA_check(input){
	if (isNaN(Number(input))){ // check for anything other than numbers
		return false;
	}

	if (input < 0){
		return false;
	}

	return true;
}

function valid_rate_check(input){
	if (isNaN(Number(input))){ // check for anythign other than numbers
		return false;
	}

	if (input > 1 || input < 0){
		return false;
	}

	return true;

}

function valid_loan_term(input){
	if(isNaN(Number(input))){// check for anything other than numberes 
		return false;
	}

	if (!Number.isInteger(Number(input))){
		return false;
	}

	if (input <= 0){
		return false;
	}

	return true;
}
/////////////////////////////////////////
function calc_monthly_payment(P, r, n){
	if (r == 0){
		return P/n;
	}

	return P * r / (1-(1/(1+r)**n));
}	

function sum_all_payments(){
	return monthly_payment*n;

}

function tot_interest_paid(){
	return sum_of_payments - principal_amount;
}
///////////////////////////////
function clear_pressed(){
	document.getElementById("monthly-payments").innerHTML = "0.00";
	document.getElementById("sum-of-payments").innerHTML = "0.00";
	document.getElementById("total-interest").innerHTML = "0.00";
}

function calc_pressed(){
	principal_amount = document.getElementById("principal-amount").value;
	if (!valid_PA_check(principal_amount)){
		window.alert("Must enter a positive decimal as principal amount!");
		clear_pressed();//not really needed
		return;
	}
	principal_amount = Number(principal_amount);

	yearly_rate = document.getElementById("yearly-interest-rate").value;
	if (!valid_rate_check(yearly_rate)){
		window.alert("Must enter a positive decimal between 0 and 1 for a valid yearly interest rate!");
		clear_pressed();//not really needed
		return;
	}
	yearly_rate = Number(yearly_rate);
	monthly_rate = yearly_rate/12;

	n = document.getElementById("loan-term-months").value;
	if (!valid_loan_term(n)){
		window.alert("Must enter an integer greater than 0 for a valid loan term in months!");
		clear_pressed();//not really needed
		return;
	}
	n = Number(n);

	monthly_payment = calc_monthly_payment(principal_amount, monthly_rate, n);

	sum_of_payments = sum_all_payments();

	total_interest = tot_interest_paid();

	document.getElementById("monthly-payments").innerHTML = monthly_payment.toFixed(2);
	document.getElementById("sum-of-payments").innerHTML = sum_of_payments.toFixed(2);
	document.getElementById("total-interest").innerHTML = total_interest.toFixed(2);

}


