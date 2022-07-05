class BankAccount {
    constructor(agency, number, type){
        this.agency = agency;
        this.number = number;
        this.type = type;
        this._balance = 0;
    }

    get balance(){
        return this._balance;
    }

    set balance(value){
        this._balance = value;
    }

    withdraw(value){
        if(value > this._balance){
            return "Operation denied";
        }
        this._balance -= value;
        return this._balance;
    }

    deposit(value){
        this._balance += value;
    }
}

class TransactionAccount extends BankAccount{
    constructor(agency, number, creditCard){
        super(agency, number);
        this.type = 'Transaction';
        this._creditCard = creditCard;
    }

    get creditCard(){
        return this._creditCard;
    }

    set creditCard(value){
        this._creditCard = value;
    }
}

class UniversityAccount extends BankAccount{
    constructor(agency, number, creditCard){
        super(agency, number);
        this.type = 'University';
    }

    withdraw(value = 0){
        if (value > 500){
            return "Operation Denied";
        }

        super.withdraw(value);
    }

}

class SavingAccount extends BankAccount{
    constructor(agency, number, creditCard){
        super(agency, number);
        this.type = 'Saving';
    }
}