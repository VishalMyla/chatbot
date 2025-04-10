# Attribute - Transaction Value

## Value

Profile: currentTxnAttribute: valueSub-Attribute: NAOperators:<,>,<=,>=Syntax: currentTxn.value.[Operators][Value]Example: currentTxn.value >= 10.Meaning:Total value of the transaction

| Example 1 |

| --- |

| Issuing Coupons for current transaction amounts exceeding a certain value.Consider that you want to issue coupons for customers whose current transaction amount is greater than 8000, then use the following condition:currentTxn.value>8000Issuing Coupons for the current transaction amount between two defined valuesConsider that you want to issue coupons for customers whose current transaction amount is greater than 1000, but less than or equal to 9000, then use the following condition:currentTxn.value>1000&&(currentTxn.value<9000) |



| Example 2: Suppose you want to issue coupons to customers whose full name matches “John Smith” and whose transaction amount exceeds 3000 yet less than 5000. Then use the following condition: |

| --- |

| (currentTxn.value>3000&&(currentTxn.value<5000)&&(currentCustomer.name.matches("John Smith")) |



| Example 3: Issuing coupons depending on the last name and the transaction amountConsider that you want to issue coupons for certain customers whose current transaction amount is equal to 5000 and their last name matches Smith. Then use the following condition: |

| --- |

| currentTxn.value==5000&&(currentCustomer.lastname.matches("Smith")) |



Updatedover 1 year ago