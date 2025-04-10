# Getting started

## Introduction

Promotions are special loyalty programs that can run for a short period of time by rewarding customers with something extra from their basic loyalty programs. For example, you can drive sales through promotion programs by rewarding additional points or coupons to customers during a festival season or promoting a specific product.You can run promotion programs either at a transaction level, line item level, or customer level. Based on the event, the promotion type varies automatically. For example, in customer events, you cannot create transaction promotions and vice versa.

> 📘You cannot create promotion programs for all events. For example, you cannot create promotions on events, ReturnTransaction, TransactionUpdate, DelayedAccrual, SlabUpgrade, and all group events (such as GroupTransactionAdd, GroupTransactionUpdate, GroupReturnTransaction, GroupMemberJoin, and GroupMemberLeave).You can create transaction or transaction line-item promotions only for the TransactionAdd event. For all other applicable events, you can create only customer-level promotion programs.

## 📘

- You cannot create promotion programs for all events. For example, you cannot create promotions on events, ReturnTransaction, TransactionUpdate, DelayedAccrual, SlabUpgrade, and all group events (such as GroupTransactionAdd, GroupTransactionUpdate, GroupReturnTransaction, GroupMemberJoin, and GroupMemberLeave).

- You can create transaction or transaction line-item promotions only for the TransactionAdd event. For all other applicable events, you can create only customer-level promotion programs.

### To create a promotion program, do the following

1. On the loyalty program configuration page, go toWorkflowsand then go toLoyalty Promotions.

![](https://files.readme.io/1f62851-Screenshot_110.png)

Or, you can go over to thePromotions tabon the top right.

![](https://files.readme.io/0b7f571-Screenshot_127.png)

Already active promotions can be seen in list view or calendar view.

![](https://files.readme.io/33f614f-Screenshot_128.png)

![](https://files.readme.io/01bbdec-Screenshot_129.png)

And the existing promotions can also be filtered according to program, activity and status of the promotion.

![](https://files.readme.io/a1be494-Screenshot_131.png)

![](https://files.readme.io/fc3b8e9-Screenshot_132.png)

![](https://files.readme.io/dbc36a1-Screenshot_133.png)

In the calendar view, a grid line can be set up according to the timeline required.

![](https://files.readme.io/7a2abf8-Screenshot_130.png)

1. Click onCreate Promotion.

![](https://files.readme.io/5c5a195-Screenshot_111.png)

1. Fill in the basic details.

- InPromotion Name, specify a name for the promotion.

- InDescription, enter a short description of the current promotion.

![](https://files.readme.io/1b2e3e0-Screenshot_112.png)

1. Select Customer Activity that would trigger earning.

![](https://files.readme.io/b5d8153-Screenshot_113.png)

The following table lists the available customer activities:

| Customer Activity | Description | Example |

| --- | --- | --- |

| Makes a transaction | Enrol a customer to a promotion when they make a purchase in-store, online, or at a point-of-sale (POS) system. | A customer purchases a pair of sneakers online or at a store. |

| Milestone or Streak is updated | Enrol a customer to a promotion when they complete amilestoneorstreak.Note:By default, all active milestones and streaks in aloyalty programis tracked. You can optionally choose active milestones or streaks to track under theMilestone or streakdrop down. | A customer achieves a milestone by drinking 50 litres of water in a week.A customer achieves a streak by walking 10,000 steps everyday for a week. |

| Redeems points | Enrol a customer to a promotion when they use their points to redeem rewards. | A customer uses 500 points to redeem a ₹500 discount while purchasing groceries |

| Redeems a coupon | Enrol a customer to a promotion when they use coupons to get discounts or benefits. | A customer applies a 20% discount coupon during checkout in an online store. |

| Gets enroled in the program | Enrol a customer to a promotion when they join aloyalty program. | A customer makes a transaction of above ₹10,000 and is enrolled into a loyalty program. |

| Updates customer profile | Enrol a customer to a promotion when they update their personal information on their profile. | A customer updates their phone number on the app. |



[milestone](/docs/milestones-new-flow)

[streak](/docs/streaks)

[loyalty program](/docs/features-of-loyalty)

[loyalty program](/docs/features-of-loyalty)

1. InPromotion applied on, chooseTransactionLevel to award points on a transaction or chooseLineitemlevel to issue points on the transaction line items.Note:This field is visible only when you have selected transaction-related customer activity in the previous step.

- SetActivateto Yes to enable the program.

- Set the duration of the promotion inStart DateandEnd Date.NOTE: Promotion duration can be in the past, up to the last 12 months. Once a promotion has started, the start date cannot be edited; however, you can still change the start date for any promotions that are upcoming.

![](https://files.readme.io/b4e2c0d38c406422028b031780039415e612a7988f1a600049bb80c79014251e-image.png)

> 📘Sample Scenario for Exclusive optionAssume two promotion programs where Promotion2 is set as EXCLUSIVE.Promotion1: If the transaction amount is greater than $500, reward points of 10% of the transaction amountPromotion2: If the transaction amount is greater than $750, reward points of 15% of the transaction amount.Now when a customer makes a transaction for $800, instead of rewarding points for both the promotion programs, only promotion2 will be executed, i.e., 120 points (15% of 800).

## 📘

Sample Scenario for Exclusive option

Assume two promotion programs where Promotion2 is set as EXCLUSIVE.Promotion1: If the transaction amount is greater than $500, reward points of 10% of the transaction amountPromotion2: If the transaction amount is greater than $750, reward points of 15% of the transaction amount.

Now when a customer makes a transaction for $800, instead of rewarding points for both the promotion programs, only promotion2 will be executed, i.e., 120 points (15% of 800).

Once the promotion program is created, configure rulesets for each event as explained in the following.

1. Now the promotion workflows need to be configured. InAll Conditions, click+Conditionto add a new rule. Each condition you dd will have a condition sequence as the prefix. For example, Condition1, Condition2, Condition3, and so on.

![](https://files.readme.io/669808c-Screenshot_116.png)

> 📘Notef you want to delete any condition, click on the respective Delete icon. The sequence will be updated accordingly.

## 📘Note

Note

f you want to delete any condition, click on the respective Delete icon. The sequence will be updated accordingly.

1. You also have the option to rename the set if you wish to modify its title, providing greater flexibility in organizing and managing your sets more effectively.

You also have the option to rename the set if you wish to modify its title, providing greater flexibility in organizing and managing your sets more effectively.

![](https://files.readme.io/5607d73961c2ddb820e5188179dcfb453ac9dcbdd6e7efcc5a0025b7adb1efe5-image.png)

2. In theExpressionbox, define the rule expression that you want to evaluate for the current promotion. Use the predefined methods and attributes to write rule expression such that the result should be a Boolean value.

In theExpressionbox, define the rule expression that you want to evaluate for the current promotion. Use the predefined methods and attributes to write rule expression such that the result should be a Boolean value.

![](https://files.readme.io/2d6ccc7-Screenshot_118.png)

1. InWhen, configure the following fields.

- InExpressionEquals, set whether to execute an action forTrue caseorFalse case.

- Click the +Add Action icon and select the respective action to execute.

![](https://files.readme.io/45fdf6d-Screenshot_119.png)

1. You can also add "Scope" to the program to limit the promotion to loyalty or non-loyalty users, specific stores, zones, concepts, clusters or date ranges.

> 📘NoteWhen selecting a specific zone or a concept from the list, SelectingROOTselects all the listed options.

## 📘Note

Note

When selecting a specific zone or a concept from the list, SelectingROOTselects all the listed options.

![](https://files.readme.io/ac4f65b-Screenshot_123.png)

1. Based on the option selected, the respective configuration field appears under theExpression equalsbox.  For example, if the action is Allocate points, fields to configure Points Allocation appears as shown below.

ClickSaveto save the promotion program.

![](https://files.readme.io/72bd1e8-Screenshot_120.png)

1. You can add "Advanced Settings" to the program, but this step is optional.

![](https://files.readme.io/10c0a1e-Screenshot_124.png)

1. ClickPublish Promotionto apply the changes to the live program.

![](https://files.readme.io/dda74bf-Screenshot_125.png)

> 🚧NotePublishing a promotion will also publish any changes made to the associated loyalty program. To publish promotions and loyalty programs separately, raise a ticket to the sustenance team.Once enabled, this change is permanent and cannot be reverted.

## 🚧Note

Note

Publishing a promotion will also publish any changes made to the associated loyalty program. To publish promotions and loyalty programs separately, raise a ticket to the sustenance team.Once enabled, this change is permanent and cannot be reverted.

# Advanced Settings

### Points Allocation limits

These limits or capping let you budget the points that will be allocated via these promotions. This can done in various ways & combinations :

![](https://files.readme.io/6c30286-Screenshot_2024-04-23_at_3.40.44_PM.png)

- Maximum number of point activities for a member - Define the max events or customer activities that can allocate points to a customer from the promotion. Eg - This promotion can be applied to a customer maximum 3 times.

- Maximum points to be allocated in a single activity - Define the max points that can be allocated in an event or customer activity. Eg - This promotion can only allocate 100 points in a transaction.

- Maximum points to be allocated to a member - Define the max points that can be allocated to a customer from the promotion.  Eg - A customer can earn only upto 500 points from this promotion .

- Maximum points to be allocated from overall promotion - Define the max points that can be allocated from this promotion. Eg - The promotion can allocate upto 5000 points. This means, once 5000 points have been awarded from this promotion, it will be exhausted.

### Limits when Advance Promotions capabilities are enabled

![](https://files.readme.io/6ff532d-gif_1.gif)

When Advance Loyalty Promotions feature is enabled, these points allocation limits become more flexible and provides wider variety of limits to be configured.

The key differentiator here, are the specific time durations for these limits. You can define these limits apply within :

Promotion Duration- This ideally means, that there is no specific time duration set in this case, because these limits are anyways applicable for the time promotion is active.

a day- Setting this means the limit is applicable within a day or 24 hours. This behaves in a moving window format, so whenever the promotion event occurs, from that instance, the system will go back 24 hours/a day and check if the limits is reached. Eg - Allocate 100 points to a customer from a promotion in a day. So in a day, a customer can only get 100 points from this promotion and event if the customer performs multiple events within the 24 hours duration, on every event, the system will go back and check for 24 hours.

in last 7 days- Setting this means the limit is applicable within last 7 days or a week. This behaves in a moving window format, so whenever the promotion event occurs, from that instance, the system will go back 7 days and check if the limits is reached. Please be mindful, it is not a fixed window, where you are defining a week from Monday to Sunday. On every event occurrence , the system will go back 7 days and check for the limit value.

in last 30 days-  Setting this means the limit is applicable within last 30 days or a month. This behaves in a moving window format, so whenever the promotion event occurs, from that instance, the system will go back 30 days and check if the limits is reached. Please be mindful, it is not a fixed window, where you are defining a month from 1st to 30th. On every event occurrence , the system will go back 30 days and check for the limit value.

Limits :

Individual activity limit

- Max. points allocation per occurrence of activity - Define the max points that can be allocated in an event or customer activity. Eg - This promotion can only allocate 100 points in a transaction.

Individual customer limit

- Max. points allocation per customer across purchases - Define the max points that can be allocated to a customer from the promotion.  Eg - A customer can earn only upto 500 points from this promotion .

- Max. no. of activities per customer that can allocate points - Define the max events or customer activities that can allocate points to a customer from the promotion. Eg - This promotion can be applied to a customer maximum 3 times.

Across customers limit

- Max. points allocation across customers - Define the max points that can be allocated from this promotion. Eg - The promotion can allocate upto 5000 points. This means, once 5000 points have been awarded from this promotion, it will be exhausted.

- Max. no. of activities across customers that can allocate points - Define the max events or customer activities that can allocate points across customers from the promotion. Eg - This promotion allocates to total 500 transactions.

## Create Forward Cases (to Another Set)

To check multiple conditions at a time, use the Forward to Set action as explained in the following.

1. After writing therule expression, andExpression equals, set the action asForward to Set.

![](https://files.readme.io/b6f1f7f-Screenshot_126.png)

1. ClickForward to Setfrom the list.

2. SetEnable lineitem unrolling?to Yes to create rules based on transaction line items. SetEnable payment method unrolling?to Yes to create rules on payment modes.

![](https://files.readme.io/aa1d6ad-Screenshot_121.png)

1. To create rules based on line-items in the forward set (set2), setEnable lineitem unrollerto Yes; to create rules based on payment mode in the forward set(set2, setEnable payment method unrollerto Yes.

2. For the lineitem unroller, you will see theUse lineitem Proportions?option. This option lets you issue points on line items based on the line item amount.Assume a transaction with two lineitems, where lineitem1 is $800 and lineitem2 is $1200; bill level discount is $400. Hence, the total bill amount is $1600.If points allocation is set to 10% of the transaction amount, the allocation of points in the case ofUse Proportionsis as follows.

- IfUse Proportionsis disabled, points of 10% will be awarded for each line item. That is 80 points for lineitem1 and 120 points for lineitem2.

- IfUse Proportionsis enabled, points will be issued on proportionate of the bill amount. That is, for line item one - 10% of (800/2000)1600 and for lineitem2, it will be 10% off (1200/2000)1600.

1. TheMaximise Points Allocation?option considers the payment methods marked as eligible under 'Advanced Settings' and allocates points for the total eligible amount when different line items earn at different rate considering the higher earning first rather than a pro-rata basis

TheMaximise Points Allocation?option considers the payment methods marked as eligible under 'Advanced Settings' and allocates points for the total eligible amount when different line items earn at different rate considering the higher earning first rather than a pro-rata basis

2. Configure action and clickSave. A new set is created.

Configure action and clickSave. A new set is created.

3. ClickReconfigureto apply the changes to the live program.

ClickReconfigureto apply the changes to the live program.

## Rules Configuration with Sample Scenarios

### Promotions for Specific Stores or Concepts

#### Case 1: Run promotion for specific stores

Run a promotion program specific to selected stores.

| Example | Configuration |

| --- | --- |

| Run a promotion program only for stores - demo_store1, demo_store2, and demo_store3. | 1. ClickAdd Scopeand select+Stores.2. Set the toggle button toIncludeand add the list of stores - demostore1, demo_store2, and demo_store3 using any of the following ways.a. Upload a CSV file with the list of store codes in _StoreCode CSV.b. Search and select stores manually in the Stores drop-down list. |



#### Case 2: Exclude promotion for specific stores

Run a promotion program to all stores, excluding a specific set of stores.

| Example | Configuration |

| --- | --- |

| Run a promotion program for all stores, excluding specific stores - demo_store1, demo_store2, and demo_store3. | 1. ClickAdd Scopeand select+Stores.2. Set the toggle button toExcludeand add the list of stores - demo_store1, demo_store2, and demo_store3 using any of the following ways.a. Upload a CSV file with the list of store codes inStoreCode CSV.b. Search and select stores manually in the Stores drop-down list. |



#### Case 3: Run promotion for a specific concept

Run a promotion for a specific concept (brand or business unit).

| Example | Configuration |

| --- | --- |

| Run a promotion program only for specific concepts - Demo_Concept1, Demo_Concept2, and Demo_Concept3. | 1. ClickAdd Scopeand select+Concepts.2. Set the toggle button toInclude.3. InConcepts, search, and select concepts -Demo_Concept1, Demo_Concept2, and Demo_Concept3. |



#### Case 4: Exclude promotion for specific concepts

Run a promotion program for all concepts, excluding a specific set of concepts.

| Example | Configuration |

| --- | --- |

| Run a promotion program for all concepts, except concepts - Demo_Concept1, Demo_Concept2, and Demo_Concept3. | 1. ClickAdd Scopeand select+Concepts.2. Set the toggle button toExclude.3. InConcepts, search and select each concept - Demo_Concept1, Demo_Concept2, and Demo_Concept3. |



## Promotion for Specific Time

#### Case 1: Run promotion between specific hours

Issue promotional incentives to customers who purchased between specific hours.

```
Rule expression: currentTxn.date.isHourBetween(<hour from>,<hour to>)
```

```
Rule expression: currentTxn.date.isHourBetween(<hour from>,<hour to>)
```

| Example | Configuration |

| --- | --- |

| Issue promotional incentives to customers who shopped between 17:00 hours - 21:00 hours. | currentTxn.date.isHourBetween(17,21) |



#### Case 2: Run promotion between specific hours and minutes

Issue promotional incentives to customers who purchased between specific hours and minutes.

Rule expression: currentTxn.date.isTimeBetween(,,,)

| Example | Configuration |

| --- | --- |

| Issue promotional incentives to customers who shopped between 17:30 hours - 21:00 hours. | currentTxn.date.isTimeBetween(17,30,21,0) |



## Promotion Use Cases that can be set up using this feature

- Promotions for Specific Stores or Concepts

- Promotion for Specific Time

- Promotion for Specific Days

- Promotions on specific days of the week

- Promotions on birthday month

- Promotions on program enrollment month

- Promotions on program enrollment week

- Promotion on Products and Lineitems

- Promotion on Tenders

- Regular Points Multiplier Promotion

- Capping of Points Issued through a Promotion

## External identifier for the promotion

You can enable theSpecify promotion external identifieroption and enter a unique identifier value to identify a promotion using that.

![](https://files.readme.io/b4dd74b53c9b579e26b2ec616bcf4d1a052078e475bd873d39552f3398816c84-External_identifer.png)

Updatedabout 2 months ago