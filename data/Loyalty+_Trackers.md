# Trackers

Tracker is a powerful tool to track custom values over a specific period. You can use trackers forEligibilityandRenewalstrategies and also inWorkflowsfor certain milestones. The custom values arebill amount, gross bill amount, line-item count, line-item quantity, line item price,andcustomer visits. You can create tracker strategies and define rule sets based on these custom values.

> 📘Trackers are executed based on the TILL time but not based on the time specified for a transaction.

## 📘

Trackers are executed based on the TILL time but not based on the time specified for a transaction.

## Creating Trackers

You can set transaction event trackers by following these steps.

1. OnIntouch, navigate toLoyalty+>Programs.

2. InPrograms, select the program you want to edit.

3. ClickEdit Programand selectTrackers.

4. ClickAdd Trackers.

![590](https://files.readme.io/e9771bc-SFz286UjwC6Pffgbr5etxMjGBRH0SMPbag.png)

1. InName, enter the tracker name.

2. InTracked entity, select any of the following entities that you want to track

| Entity | Description |

| --- | --- |

| Transaction amount | Create tracker cases based on the net transaction amount (with discount). For example, if the gross bill amount is $120 and the discount is $20, the (net) bill amount is $100. |

| Transaction discount | Create tracker cases based on the discount amount of a transaction. |

| Transaction gross amount | Create tracker cases based on the gross transaction amount (without discount). For example, if the net bill amount is $100 after a discount of $20, the gross bill amount is $120. |

| Transaction total quantity | Create tracker cases based on the total quantity of all line items purchased during the tracker period. For example, if a customer makes 10 transactions with 20 line items of quantity 3 each in 90 days, then the bill total quantity is 60. |

| Line-item amount | Create tracker cases based on the purchase value of individual line items. |

| Line-item count | Create tracker cases based on the number of line items purchased. For example, a customer can have 10 transactions for 20 days where the line items are 200. |

| Line-item quantity | Create tracker cases based on the number of line items purchased. For example, a customer can have 10 transactions with 22 line items for 90 days. The number of line items purchased could be 50. |

| Customer visits | Create tracker cases based on the count of unique bills of a customer. |

| Points | Create tracker cases based on the number of points earned during the tracking period. |

| Transaction extended field | Create tracker cases on a transaction-level extended field. You can use extended fields with datatypes Integer or Double. |

| Line-item extended field | Create tracker cases on a transaction line-item-level extended field. You can use extended fields with datatypes Integer or Double. |



![314](https://files.readme.io/e15bb0e-LjP8Qrbv4q-DBtuF-aRiLTGLoeTLuFwdrQ.png)

1. In theTracking Method, select any of the following methods to track entities.

| Method | Description |

| --- | --- |

| Moving Window | In Moving Window mode, when a customer makes a transaction, the tracker condition is checked for the previous X days or months (number of days or months set inTrack for ___ days/months) until the transaction date.Based on the cycle in which a transaction falls, the tracker cases are evaluated from starting of that cycle until the transaction date. Consider the following examples:Moving window (days):A tracker was set up on April 5, 2025, to reward 200 bonus points if a customer spends $1000 within a 20-day period. For each transaction, the system looks back 20 days to calculate the total spend. So, for a purchase made on April 7, the tracker checks spend from March 18 to April 7. For a purchase on May 4, it checks from April 15 to May 4, and so on.This means the window shifts with every transaction, and the set of transactions included in the calculation can change daily.Moving window (months):A tracker was set up on April 5, 2025, to reward 200 bonus points if a customer spends $1000 within a 3-month period. With month-based logic, the system includes full calendar months in the tracker window. So, if purchases are made on April 10 and June 10, the system considers spend from April 1 to June 30. If another purchase is made on July 1, the window shifts forward—dropping April—and now includes May 1 to July 31. This approach ensures more stable and predictable tracking by updating only once per month. |

| Cyclic Window | In Cyclic Window mode, when a customer makes a transaction for the first time after the tracker is configured, cycles of equal intervals are created for that customer based on the transaction date. The duration of each cycle depends on the value set inTrack for ___ days.Based on the cycle in which a transaction falls, the tracker cases are evaluated from starting of that cycle until the transaction date. Consider the following example:A tracker was created on Apr 5, 2019, with a condition to reward a bonus of 200 points on a transaction of $1000 in 20 days (Track for ___ days).Assume that a customer makes subsequent transactions on Apr 7, May 4, 10, and 22.- In Cyclic Window mode, based on the first transaction date (Apr 7) of the customer (after the strategy is configured), cycles are created with equal intervals of 20 days each.For the first transaction ( Apr 7) the condition is checked only for that day. As the second transaction falls in Cycle 2 (May 4), the condition is checked from starting of the second cycle until the transaction day (Apr 27 - May 4). Similarly, the fourth transaction falls in Cycle 3 and the condition is checked from May 27 - May 22. |

| Calendar Based Cyclic Window | Cycles of calendar months are created based on the Start Date and the number of months set irrespective of the transaction date.For example, if a Calendar based Cyclic Window is created with the start date Apr 5 and the number of months 3, then the cycles are created for three calendar months as shown in the illustration below. Then, based on the date of the transaction, the corresponding cycle will be considered. |

| Tier Change Window | Calculates tracker values considering the last tier change date. For example, if a customer's tier changed on Aug 2, 2020, tracker values will be calculated from Aug 2, 2020, until the current date. |



![306](https://files.readme.io/a22355a-vcJC-Y4w6IhO2OtzSfjzE1hRrlwwNLx3hg.png)

> 📘Trackers need to be incorporated in Workflows to define when they need to be evaluated and what happens when the milestone conditions are met.

## 📘

Trackers need to be incorporated in Workflows to define when they need to be evaluated and what happens when the milestone conditions are met.

1. InCase Name, enter the name for the current tracker case.

2. UnderTrack For, enter the duration of the window to evaluate the tracker case.

3. Select aUnitfrom the dropdown menu, choosing between months or days.

![](https://files.readme.io/3429ebe106f6242d8f905ebf2c71ecb49d2fdcf1e494fdefbd91b9cb703de7be-Screenshot_2025-04-04_at_2.38.01_PM.png)

1. InWhat are the tracker's milestones, select any of the following options for two fields and enter the desired value.Define the condition of that tracker case in this field. For example, if the Sum of transactions in365 daysareEqual to$1000.

![942](https://files.readme.io/fd49339-n51JZ0dYsetjZ7-7ljnx5ijT33V1L9s8jA.png)

#### Field 1:

| Option | Description |

| --- | --- |

| Sum | It is the total of tracked entity values for the specified duration.For example for Bill Amount, the sum is the total value of all transactions (amount) tracked for a set duration. |

| Count | It is the number of times the entity is tracked in a specified duration.For example, for Bill Amount, the count is the number of transactions tracked for a specified time period. |



#### Field 2:

| Option | Description |

| --- | --- |

| Equal to | The condition becomes true if the Sum or Count is the same as the configured value |

| Greater than | The condition becomes true if the Sum or Count is more than the configured value. |

| Less than | The condition becomes true if the Sum or Count is less than the configured value. |

| Greater than or Equal to | The condition becomes true if the Sum or Count is either equal to or more than the configured value. |

| Less than or Equal to | The condition becomes true if the Sum or Count is either equal to or less than the configured value. |

| Mod of |  |

| Between | The condition becomes true if the Sum or Count falls between the two configured values. |



1. EnableLimit No. of forwards per customerand enter the value to limit the execution of the current tracker case.

> 📘Once the case is executed successfully for X times for a customer (where X is the value specified in this field), the tracker case will not be evaluated for that customer again.

## 📘

Once the case is executed successfully for X times for a customer (where X is the value specified in this field), the tracker case will not be evaluated for that customer again.

![379](https://files.readme.io/4579bc8-aONXa4LdHsW7KP_9ZKXaC2KIHjOIHIgVyQ.png)

1. You can add multiple tracker cases by clickingAdd Tracker Case.

![986](https://files.readme.io/f900f0e-KImo_fm4LiczeR1hTXG6irKgtz5YPNx0eA.png)

1. ClickSave.

> 📘You can see the configured tracker case inPreview.

## 📘

You can see the configured tracker case inPreview.

## Editing a Tracker

To edit a tracker, follow these steps:

1. In the Intouch homepage, go toLoyalty+>Programs.

2. InPrograms, scroll down and select the program you want to edit.

3. ClickEdit Programand scroll down to theTrackerssection.

4. ClickTrackers, select the menu button next to the tracker you want to edit, and chooseEdit.

5. Make the necessary changes and selectSave.

The tracker is now edited successfully.

![](https://files.readme.io/31dd5d0f88c1cbbfbe186847e62db13d44449bd90ed96f169c0c85da95bfdb8f-Loyalty_Program_Tracker_Setup_Guide_1.gif)

> 📘NoteWhen editing the name or case name for a tracker, update the same name under the tracker sets and point tracker sets under theworkflow sectionif used.

## 📘Note

Note

When editing the name or case name for a tracker, update the same name under the tracker sets and point tracker sets under theworkflow sectionif used.

## Adding Trackers in Workflows

Once you create a tracker strategy, it is important to configure rule sets to start tracking entities set in tracker strategies, evaluate tracker cases, and trigger actions upon successful execution of tracker cases.

To configure tracker-based rules, go to theWorkflowspage and selectMakes a transaction(Transaction Add) customer activity (It is usually going to be the activity selected by default).

![](https://files.readme.io/cb9d83e-Screenshot_151.png)

![](https://files.readme.io/6436e59-Screenshot_152.png)

![896](https://files.readme.io/83e16db-dqkkUo0pvsr1iANc79JQZsIxk3LkPAYggg.png)

The first parent set (Set1) is for new transaction activity, the second one is the TrackerSet where you can define rules on tracker cases. The last parent set is for the transaction finished activity.

![888](https://files.readme.io/18ca093-uaRehmqoVm5m8bjVE33OhcryoNtY8sjJFg.png)

When a transaction is made, the first set is invoked and forwards to the second set. The second set validates all the trackers and executes actions based on the rules and actions configured. The event then gets forwarded to the third set which completes the transaction event.

#### To create tracker based rules, do the following:

1. On theEventsViewpage, chooseTransactionAddevent and navigate to TrackerSet.

2. Click+Condition.

![881](https://files.readme.io/ad384cf-dc3-LSKGEZ0mhs9Yo3zmGzW5uDR2ib_D3g.png)

1. LeaveExpressionandExpression equalsto true.

2. In theWhenfield, click + and select the defaultForward toSet action using+Add action> ClickSave>Enable transaction item> ClickSave.

![313](https://files.readme.io/b2ba5ad-ker5-iDfDuFutwa-Ju5ZYI8RUjv2khmULg.png)

![886](https://files.readme.io/973528c-SH2xzZnoe95hNAKuIxH2mmNmqz16KaNb3g.png)

A new tracker is created under the TrackerSet as shown above. The tracker name is generated by default. You cannot modify the tracker name. You can tag a tracker strategy to the tracker. Tag a tracker strategy to the tracker as explained in the following.

1. Navigate to the child tracker set. In theWhencondition click + and Select theTracker Evaluationaction and click Save.

![322](https://files.readme.io/efb44c4-rrKbmxMBijOwKzDZBDwg6FINdk3WyO2-RA.png)

1. InAdd tracker evaluation action, choose the tracker case for which you want to configure rules.

![513](https://files.readme.io/b2dfefe-S0g4klbx5te-qmRkJ6nRGClCe4iU205ptg.png)

- InTrackers(Action field), choose the tracker strategy that you want to tag for the tracker and clickSave.Similarly, you can create multiple child tracker sets under the parent set. To know how to configure rules, seeConfiguring Events.

![1078](https://files.readme.io/956ef2f-rNekeLjqbPsWYaRPoGmwSI5qC53p32t7PQ.png)

## Using Trackers in Tiers

Trackers offer very powerful means of controlling tier eligibilities and renewal conditions based on recency, for example, you can upgrade a customer based on visits in the last 1 year or purchases in a calendar month and renew based on purchases made as part of Gold Tier.

To setup:

- Select “Tracker” as part of Eligibility criteria or Renewal Conditions.

- You will also be required to select a ‘Tracker Case’, however this is only for the purpose of the tracking duration - the values for eligibility or renewal are as per the values set in the tier strategy and not the milestones.

- You will still need to include the Tracker and properly set it up inside workflows for the values to be evaluated and the the tier upgrades to work smoothly

> 📘It is recommended that “Tier Change Window” type trackers are used for Renewal in most cases

## 📘

It is recommended that “Tier Change Window” type trackers are used for Renewal in most cases

## Milestone based Loyalty using Trackers

You can setup the Loyalty Program to be able to celebrate milestones as part of the customer’s journey in the Loyalty Program or during certain seasonal time periods. For example, you can award a coupon to a customer if they make 5 visits within the first year of membership or 500 bonus points to a customer on shopping for $1000 once they reach the Gold Tier.

To setup, you can create the milestones  by setting up all 4 steps inside the Tracker as explained above. You can then set the appropriate actions inside the different Tracker Case rulesets.

> 📘One Tracker can have multiple milestones

## 📘

One Tracker can have multiple milestones

## Points Allocation inside Trackers

When you allocate points inside trackers, using the percentage allocation method, whatever is the tracked entity becomes the source value.

Updatedabout 20 hours ago