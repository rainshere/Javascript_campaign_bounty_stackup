# Bank Account Management System
This Project aims to simulate a simple bank account management system divided in two main componants the bank account details: account holder's name and account type i.e. Checking Account, Savings Account and Money Market Deposit Account; and the bank account manager consisting of 3 possible operations: depositing, withdrawing money and checking bank account balance.
### Technologies
The required technologies used in this project are:
  - **HTML**: used for creating the base componants of the website which were then linked to the index.js and index.css files to complete the design and functionality of the website.
    + Code Snippets:
      ```
        <script defer src="./index.js"></script> 
        <link rel="stylesheet" href="./index.css">
      ```
  - **CSS**: used to as stylesheet for completing the website with a well rounded design as well as the disabling the functionality of the bank account manager componants when the user was not logged in.
    + Code Snippets:
      ```
        input[disabled], select[disabled], #balance[disabled] {
          opacity: 0.5;
          cursor: not-allowed;
        }
      ```
  - **Vanilla JS**: used to build the functionality and logic behind the website (Back End Development)
      + BankAccount Class used to create a new bank account and using methods to deposit, withdraw and check bank account balance. Each new instance of the class needs an interger value for ```balance``` attribute, a string value for attribute ```acc_holder_name``` and a string value for attribute ```acc_type``` which is selected in the radio input in ```index.html```.
      + Error Handling using try-catch-finally where in the try-block run all the different bank account operations on the amount of money in the bank account. To ensure that the operations are valid there are 4 types of error exceptions:
        - Input is a negetive number;
        - Input is empty;
        - Input is not a integer value;
        - Input for operation Withdraw is greater than current balance.
    
In the catch-block detects an error and returns it to the output paragraph and the finally-block runs everytime a transaction is performed even if this transaction fails and show the current balance of the bank account along with User data.
        
        
