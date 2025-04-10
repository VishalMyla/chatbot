# Attributes - KPIs (Transaction Data)

## 1. avgBasketSize

Profile:currentCustomer()Attribute:avgBasketSizeSub-Attributes:NAData type-> Int (Integer)Operator:<(less than),>(greater than),<=(less than or equal to),>=(greater than or equal to),==(compare the LHS with RHS),!=(not equal to).

Meaning:The ratio of total line items purchased till date to the number of transactions/bills till date of a particular customer.avgBasketSize = (Sum of total line items)/Number of Transaction (aka Count of transaction)

Syntax: currentCustomer.avgBasketSize[Operators][Value]

| Example 1 : Write a rule to check if the average basket size is greater than 10. |

| --- |

| Profile: current customerAttribute: avgBasketSizeOperator: ">"Rule:currentCustomer.avgBasketSize>10 |



| Example 2: Write a rule to check if the average basket size is equal to 10 and avg spend per visit is 80. |

| --- |

| Rule: Condition 1 && Condition 2Condition1:Profile: current CustomerAttribute: average Basket SizeOperator: ==Condition2:Profile: current CustomerAttribute: averageSpendPerVisitOperator: ==Rule:currentCustomer.avgBasketSize==10&&(currentCustomer.avgSpendPerVisit)==80 |



| Example 3: Write a rule to check if the average Basket Size is less than or equals to 203. |

| --- |

| Profile: current CustomerAttribute: average Basket SizeOperator: "<=" i.e "less than or equal to"Rule:currentCustomer.avgBasketSize<=203 |



## 2. avgSpendPerVisit

Profile:currentCustomer()Attribute:avgSpendPerVisitSub-Attributes:NAData type-> BigDecimalOperator:<(less than),>(greater than),<=(less than or equal to),>=(greater than or equal to),==(compare the LHS with RHS),!=(not equal to).

Meaning:This is the average amount a customer is spending on a transaction.

Formula: AvgSpendPerVisit = lifetimePurchase / numberOfVisits

Syntax: currentCustomer.avgSpendPerVisit[Operators][Value]

| Example 1: Write a rule to check if the average Spend per customer is greater than 5000 and currently all points are greater than or equals to 1000. |

| --- |

| Rule: Condition 1 && Condition 2Condition1:Profile: current CustomerAttribute: average Spend per customerOperator: >Condition2:Profile: current CustomerAttribute: currentAllPointsOperator: >=Rule: currentCustomer.avgSpendPerVisit>=5000&&(currentCustomer.currentAllPoints>=1000) |



| Example 2:  Write a rule to check if the average basket size is equal to 10 and avg spend per visit is 10. |

| --- |

| Rule: Condition 1 && Condition 2Condition1:Profile: current CustomerAttribute: average Basket SizeOperator: ==Condition2:Profile: current CustomerAttribute: averageSpendPerVisitOperator: ==Rule: currentCustomer.avgBasketSize==10&&(currentCustomer.avgSpendPerVisit==10) |



## 3. numberOfTxns

Profile:Current Customer (currentCustomer)return data type-> IntegerAttribute Label-> numberOfTrnxMeaning-> number of transactions since start for a customerSub-Attributes: NASyntax: currentCustomer.NumberOfTxns[operators][Value]Example:currentCustomer.numberOfTxns==1

| Example: Write a rule, to check the condition that total number of Transactions made by the customer is greater than or equals to 10. |

| --- |

| Profile: current CustomerAttribute: numberOf TrnxSub-Attribute: NARule: currentCustomer.numberOfTxns >=10 |



## 4. numberOfTxnsToday

Profile:Current Customer (currentCustomer)return data type: IntegerAttribute Label: numberOfTrnxTodayMeaning: Number of transactions made by a customer the current daySub-Attributes:NASyntax: currentCustomer.NumberOfTxnsToday[operators][Value]Example:currentCustomer.numberOfTxnToday==1

| Example: Write a rule, to check the condition that total number of Transactions made by the customer  in the current date is greater than or equals to 1. |

| --- |

| Profile: current CustomerAttribute: numberOf TrnxSub-Attribute: NARule: currentCustomer.numberOfTxnsToday >= 1 |



## 5. numberOfVisits

Profile:Current Customer (currentCustomer)return data type: IntegerAttribute Label: numberOfVisitsMeaning:number of unique days when customer made transactionSub-Attributes:NASyntax: currentCustomer.NumberOfVisits[operators][Value]Example:currentCustomer.numberOfVisits==10

| Example: Write a rule, to check the condition that total number of Visits made by the customer  is greater than or equals to 11. |

| --- |

| Profile: current CustomerAttribute: numberOf TrnxSub-Attribute: NARule: currentCustomer.numberOfVisits >= 11 |



| Example:  Write a rule to check if the average Spend per customer is greater than 5000 OR number of transaction done on unique days is greater than 15. |

| --- |

| Rule: Condition 1 || Condition 2Condition1:Profile: current CustomerAttribute: average Spend per customerOperator: >Condition2:Profile: current CustomerAttribute: numberOfVisitsOperator: >=Rule: currentCustomer.avgSpendPerVisit>=5000||currentCustomer.numberOfVisits>=1000 |



## 6. lifetimePurchase

Data Type:BigDecimalDescription:customer's purchase since start including current transaction's purchaseFormula : lifetime purchase = [ sum of all purchase - sum of refund amount ]Syntax: currentCustomer.lifetimePurchase[Operators like <,>,>=,<=,=][VALUE]

| Example1. Write a rule for current customers to check if LifetimePurchase is greater than 1000. |

| --- |

| currentCustomer.lifetimePurchase>1000 |



| Example 2: check if LifetimePurchase is less than or equal to 1000. |

| --- |

| currentCustomer.lifetimePurchase<=1000 |



| Example3: write a rule to check if LifetimePurchase is between 1500 to 3000 and the customer did transaction only once till now. |

| --- |

| (currentCustomer.lifetimePurchase>1500&¤tCustomer.lifetimePurchase<3000)&&(currentCustomer.numberOfVisits==1) |



| Example 4: write an expression for current customer to check if current slab number is less than 2 and lifetimePurchase is between 5000 to 15000. |

| --- |

| Rule: Profile: currentCustomerAttribute to check Slab number: slabNumberAttribute to check lifetime Purchase: lifetimePurchaseAnd -> &&Less than (>)Expression:((currentCustomer.slabNumber<2)&&((currentCustomer.lifetimePurchase > 5000)&&(currentCustomer.lifetimePurchase <= 15000)) |



## 7. InitialLifetimePurchase

Data Type:BigDecimalDescription:customer's purchase since start before current transaction's purchaseFormula : Initial lifetime purchase = [ sum of all purchases - sum of refund amount ] before evaluating the current transaction.Syntax: currentCustomer.initialLifetimePurchase[Operators like <,>,>=,<=,=][VALUE]**

| Example 3: write a rule to check if initialLifetimePurchase is greater than 3000 and the customer did the transaction only twice. |

| --- |

| (currentCustomer.lifetimePurchase<3000)&&(currentCustomer.numberOfVisits==2) |



Updatedover 1 year ago