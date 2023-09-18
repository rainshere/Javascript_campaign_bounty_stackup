class BankAccount{
    constructor(balance, acc_holder_name, acc_type){
        if (!Number.isInteger(balance)) {
            throw new Error('Initial balance must be an integer.');
        }
        this.balance =balance;
        this.acc_holder_name = acc_holder_name;
        this.acc_type = acc_type;
    }
    deposit(sum_of_money){
        this.balance += sum_of_money;
    }
    withdraw(sum_of_money){
        this.balance -= sum_of_money;
    }
    check_balance(){
        return this.balance;
    }
}

document.getElementById('login').addEventListener('click', function(){
    var accountName = document.getElementById('acc_holder_name').value;
    var acc_types = document.getElementsByName('acc_type');
    var accountType;
    for(i = 0; i<acc_types.length; i++){
        if(acc_types[i].checked){
            accountType = acc_types[i].value;
        }
    }
    document.getElementById('input').disabled = false;
    document.getElementById('operator').disabled = false;
    document.getElementById('balance').disabled = false;
    const account1 = new BankAccount(1000, accountName, accountType);

    document.getElementById('operator').addEventListener('change', function() {
        if (this.value === "checkbalance") {
            document.getElementById('input').disabled = true;
        } else {
            document.getElementById('input').disabled = false;

        }
    });

    if(account1 != null){
        document.getElementById('balance').addEventListener('click', function() {

            let input = document.getElementById('input').value;
            let output = document.getElementById('output');
            var operator = document.getElementById('operator').value;

            try{
                input = parseFloat(input);
                
                switch (operator) { 
                    case 'deposit':
                        if (input < 0) {
                            throw new Error('Input cannot be negative');
                        } else if (input === '') {
                            throw new Error('Input cannot be empty');
                        } else if (isNaN(input)) {
                            throw new Error('Input must be a number');
                        }else {
                            account1.deposit(input);
                            document.getElementById('output').innerHTML = account1.balance;
                            break;
                        }
                    case 'withdraw':
                        if (input < 0) {
                            throw new Error('Input cannot be negative');
                        } else if (input === '') {
                            throw new Error('Input cannot be empty');
                        } else if (isNaN(input)) {
                            throw new Error('Input must be a number');
                        } else if (input > account1.balance){
                            throw new Error('Withdraw cannot be larger than balance')
                        } else {
                            account1.withdraw(input);
                            document.getElementById('output').innerHTML = account1.balance;
                            break;
                        }
                    case 'checkbalance': 
                        document.getElementById('output').innerHTML = account1.balance;
                        break;
                }
        
            } catch (error) {
                output.innerHTML = error;
            } finally {
                alert(`${account1.acc_holder_name} has ${account1.balance} amount of money in their ${account1.acc_type}`);
            }
        })
        
        
    }
})



