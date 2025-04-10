# Attributes - KPIs (Customer Points)

| Attribute | Data Type | Example |

| --- | --- | --- |

| currentPoints | BigDecimal | currentCustomer.currentPoints>100 |

| initialCurrentPoints | BigDecimal | currentCustomer.initialCurrentPoints<60 |

| currentAllPoints | BigDecimal | currentCustomer.currentAllPoints<=500 |

| lifetimePoints | BigDecimal | currentCustomer.lifetimePoints<100 |

| lifetimeAllPoints | BigDecimal | currentCustomer.lifetimeAllPoints<1000 |

| initiallifetimePoints | BigDecimal | currentCustomer.initiallifetimePoints>1000 |

| lifetimeNonRedeemablePoints | BigDecimal | currentCustomer.lifetimeNonRedeemablePoints<1000 |



## currentPoints

Profile :currentCustomerAttribute :currentPointsMeaning :Customer's current redeemable points.Type:BooleanSub-Attributes :NAOperator :isNull, isNotNull, Interval, >,<,=,>=,<=Syntax : currentCustomer.currentPoints [Operators like >,<,>=,<=,==][VALUE]

current points = overall earned points - overall returned points - overall redeemed points - overall expired points.

| Example 1: As a Marketing Manager I want to allocate points to the customer who has current redeemable points or currentPoints greater than 100. |

| --- |

| Expression : currentCustomer.currentPoints>100 |



| Example 2: As a Marketing Manager, you want to send communications regarding expiry conditions to the Customer, who has current Points greater than and equal to 1000 but less than 5000. |

| --- |

| Profile -> currentCustomerAttributes -> currentPointsAnd -> &&Expression : currentCustomer.currentPoints>=1000&&(currentCustomer.currentPoints<5000 |



| Example 3: Write an expression to Issue a Coupon to the customers whoseCondition1 : current Transaction value is greater than 500Condition 2: Current Transaction Basket Includes the item from category field, value lifestyleCondition 3 : Current Points is greater than 400Also Condition 1 AND condition 2 OR Condition 3 |

| --- |

| Ans: Profiles Included for Current Transaction -> currentTxnProfiles Included for Current Points -> currentPointsAND -> &&OR -> ||Expression:(currentTxn.value>500)&&(currentTxn.basketIncludes(“Category”,”Lifestyle”))||currentCustomer.currentPoints>400 |



| Example4: Suppose you want to issue coupons for customers whose current points is greater than 500, then use the following condition: |

| --- |

| currentCustomer.currentPoints>500Profile: currentcustomer & Attribute: CurrentPointsLet's see how we can use "Interval" operators:To issue coupons to those customers whose current points fall in the third interval of 600 (the first interval being 1 to 100, the second interval being 101 to 400, the third interval being 401 to 600), then use the following condition:currentCustomer.currentPoints.interval("100,400,600")==3 |



## initialCurrentPoints

Profile :currentCustomerAttribute:initialCurrentPointsMeaning:customer's current redeemable points before the current event or Active points of a customer before evaluating the event .Data Type:BigDecimalSub-Attribute :NASyntax:currentCustomer.initialCurrentPoints [Operators like >,<,>=,<=,==][VALUE]

initial current points= overall earned points (before evaluating an event) - overall returned points(before evaluating an event) - overall redeemed points(before evaluating an event) - overall expired points(before evaluating an event)

| Example 1:  Write an expression to check the difference in currentPoints and initialCurrentPoints of a customer is greater than 120 |

| --- |

| Expression: ((currentCustomer.currentPoints)-(currentCustomer.initialCurrentPoints))>120 |



| Example 2: Write an expression to check if customers lifetime points are equal to initial current points and number of transactions is equal to 1. |

| --- |

| Expression: (currentCustomer.initialLifetimePoints==currentCustomer.initialCurrentPoints)&&(currentCustomer.numberOfTxns==1) |



## currentAllPoints

Profile:currentCustomerAttribute:currentAllPointsData Type-> BigDecimalMeaning-> Sum of all Points, redeemable as well as Promised Points.currentAllPoints: customer's current redeemable points + customer's current promised pointsSub-Attribute:** NASyntax : currentCustomer.currentAllPoints [Operators like >,<,>=,<=,==][VALUE]**

| Example1: Write an expression to check if Customer points earned till now irrespective of redeemable or promised points are less than 500. |

| --- |

| Expression: currentCustomer.currentAllPoints<=500 |



## lifetimePoints

Profile:currentCustomerAttribute:lifetimePointsData type:BigDecimalMeaning :Total points earned by a customer from the date of registration.lifetime points= overall redeemable points earned - overall returned points.Sub-Attribute :NASyntax : currentCustomer.lifetimePoints [Operators like >,<,>=,<=,==][VALUE]

| Example1: Write an expression for a current Customer if LifetimePoints are greater than 500 and the current Txn bill includes Shirt. |

| --- |

| currentCustomer.lifetimePoints>500&&(currentTxn.basketIncludes("Product","Shirt")) |



| Example2 : Write an expression for a current Customer if LifetimePoints are less than 1000 |

| --- |

| currentCustomer.lifetimePoints<1000 |



| Example 3: Write an expression for a current Customer to check if lifetimePoints are greater than and equal to 50 OR current Transaction value is greater than 500. |

| --- |

| OR -> ||Profile for lifetimePoints : currentCustomerProfile for Transaction: currentTxnRule -> currentCustomer.lifetimePoints >= 50||currentTxn.value >500 |



## lifetimeNonRedeemablePoints

Profile:current customerAttribute :lifetimeNonRedeemablePointData Type:BigDecimalSub-Attributes: NAMeaning: customer earned promised points - returned points since the registration date.Syntax : currentCustomer.LifetimeNonRedeemablePoints [Operators like >,<,>=,<=,==][VALUE]

lifetime non redeemable points= overall non redeemable points earned - overall non  redeemable returned points.

| Example : Example : Write an expression to check if customers lifetimeNonRedeemablePoints are equal to initial current points and number of transactions is equal to 1. |

| --- |

| (currentCustomer.LifetimeNonRedeemablePoints==currentCustomer.initialCurrentPoints)&&(currentCustomer.numberOfTxns==1) |



| Example : Write an expression to Issue a Coupon to the customers whoseCondition1 : current Transaction value is greater than 500Condition 2: Current Transaction Basket Includes the item from category field, value lifestyleCondition 3 : lifetime Non Redeemable PointsAlso Condition 1 AND condition 2 OR Condition 3 |

| --- |

| Expression:(currentTxn.value>500&&(currentTxn.basketIncludes(“Category”,”Lifestyle”))||currentCustomerLifetimeNonRedeemablePoints>400 |



## lifetimeAllPoints

Profile:current customerAttribute :lifetimeAllPointsData Type: BigDecimalMeaning-> sum of lifetimePoints and lifetimeNonRedeemablePointsSub-Attributes: NASyntax: currentCustomer.LifetimeAllPoints [Operators like >,<,>=,<=,==][VALUE]lifetimeAllPoints = lifetimePoints + lifetimeNonRedeemablePoints

| Example : Write an expression to check if customers lifetimeAllPoints are equal to initial current points and number of transactions is equal to 1. |

| --- |

| Rule :(currentCustomer.lifetimeAllPoints==currentCustomer.initialCurrentPoints)&&(currentCustomer.numberOfTxns==1) |



## intiallifetimePoints

Profile:current customerAttribute :initiallifetimePointsData Type-> BigDecimalMeaning-> customer's lifetime redeemable points before the current event.Syntax :currentCustomer.initiallifetimePoints [Operators like >,<,>=,<=,==][VALUE]initialLifetimePoints = customer lifetime earned redeemable points - returned points since start(before evaluating an event)

| Example: write to rule to return false if the current customer initialLifetimePoints are greater than 500. |

| --- |

| Rule: currentCustomer.initiallifetimePoints>500 |



| Example: write to rule to return false if the current customer's current points are between 200 and 500  OR initialLifetimePoints are greater than 100. |

| --- |

| Rule: (currentCustomer.currentPoints>200&&(currentCustomer.currentPoints>500))||currentcustomer.initiallifetimePoints>100 |



Updatedover 1 year ago