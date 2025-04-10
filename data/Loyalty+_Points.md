# Points

You can define conditions for earning points, redeeming points, expiry of points and returning points.

## Overview

Earn conditions allow an org to create various conditions and define how a customer can earn points. You can have common points allocation across tiers or different allocations for each tier.

> 📘ForMLP enabled orgs, allocation strategies created in a program are associated only with that program and cannot be used even in the org's default program.

## 📘

ForMLP enabled orgs, allocation strategies created in a program are associated only with that program and cannot be used even in the org's default program.

### Configure Points Delayed Accrual

Delayed accrual allows issuing points to customer for an activity at a later date. For example, if you support item returns, say for a week from the purchase date, you can actually block customers from using those points before the return period. This avoids redundancy and fraud activities.

In Delayed Accrual, points are first issued as promised points. These cannot be redeemed by the customer. After the configured period, these points are converted and credited to the main balance.

In Delayed Accrual, the points allocation date is when points are actually issued to the customer. In the case of Delayed Accrual, the awarded date is when points get added to the current points (accrued date). Refer to the following examples for clarity.

- If a transaction with bill date A is sent to Loyalty EMF on date B, the awarded date is date B.

- If the transactionAdd activity of date A gets replayed on date B, the awarded date is date B.

- If bill points with bill date A are imported on date B, the awarded date is date B.

> 📘The 'delayed accrual points' are added to the 'current points' on the next morning of the delay period, i.e., (event date + the number of days of delay) specified in the point allocation strategy.If a transaction is added on 28th Sep and the number of days of delay is 1, the delayed accrual points will get added to current points on the morning of 30th Sep (morning after 28, Sep + 1 day). The awarded date is 30 Sep.You can create rules on the points that are redeemable, non-redeemable, or with the summation of both.

## 📘

The 'delayed accrual points' are added to the 'current points' on the next morning of the delay period, i.e., (event date + the number of days of delay) specified in the point allocation strategy.

If a transaction is added on 28th Sep and the number of days of delay is 1, the delayed accrual points will get added to current points on the morning of 30th Sep (morning after 28, Sep + 1 day). The awarded date is 30 Sep.

You can create rules on the points that are redeemable, non-redeemable, or with the summation of both.

Find the details of event, action, and limitations of Delayed Accrual below -

1. Event name: DelayedAccrual. You need to configure the DelayedAccrual activity to perform actions on Delayed Accrual.

2. Action: To enable converting promised points to current points, for the DelayedAccrual activity, you need to setDelayed Accrual Action.

- Other actions supported:

- Send Messages (SMS, Email, Mobile Push)

- Upgrade To Tier

- Issue Coupon

- Delayed Accrual

1. Limitations:

- For an activity, you cannot use both direct allocation and delayed accrual strategies. You cannot have strategies with different delay periods. For example, you cannot use one strategy with 4 days delay period and another strategy with 7 days delay period.

- You cannot useDelayed Accrualstrategies on Registration and Customer Update activities.

## Points unlock ability

By now, it is very clear that brands can give delayed points to their customers from our Loyalty settings (delayed accrual strategy). However, some times brands might want to convert these delayed points also as redeemable points for their customers.

The only way available to do this is via external triggers. Till now, we have this ability only for bill level. But now, we have the ability to do this even on line item levels.

Some sample use cases:

1. As a system integrator, I would like to be able to to configure fixed return windows for different line items, allocate promised points on each line item and convert them to redeemable points according to each line item’s return window, so that the users can get regular points on each line item, as and when the return window for the line items gets over and don't have to wait for the default return windows to get over.

2. As a Loyalty Program Manager, I would like to be able to give my customer an option to end the return window for any transaction or any line item in the transaction and immediately convert promised points to regular points.

You can find more information on how to use this API at below link, please refer.

Points Unlock API

## Configure points earn conditions

There are two allocation types available.

- Fixed: A fixed number of points is allocated irrespective of the transaction amount.

- Prorated: Points are issued as a percentage of the transaction amount or custom field value and through step function.

Based on the chosen allocation type, you can have the following combinations of points allocation strategies.

- Reward points as a percentage of a transaction amount with the same percentage across tiers. For example - Tier1: 15%, Tier2: 15%.

- Reward points as a percentage of the transaction amount with different percentages for each tier. For example - Tier1: 15% of the transaction amount, Tier2: 20% of the transaction amount.

- Reward a fixed number of points per transaction across tiers. For example - Tier1: 15 points per transaction, Tier2: 15 points per transaction.

- Reward a fixed number of points per transaction with different values across tiers. For example - Tier1: 10 points per transaction, Tier2: 15 points per transaction.To configure earning conditions, do the following.

- Reward a fixed number of points in equal step sizes or transaction intervals. For example, allocate 10 points on every spend of Rs.200. So a person doing a transaction of 450 will get 20 points, because his transaction amount lies between 400 - 600.

1. OnIntouch, navigate toMenu>Loyalty+>Programs.

2. InPrograms, select the program you want to edit.

3. ClickEdit Program.

4. ClickPoints.

5. ClickAdd Earn Conditions.

![945](https://files.readme.io/3cf37ff-qQgLwAo2L9rF5097tVa4RCiCWJFjrJYVhA.png)

1. InName, enter the condition name.

![281](https://files.readme.io/a5fee99-Gnv9ybXcStwsta30UrKK0c4O7rXxO7LGqw.png)

1. InDescription, describe the condition.

![278](https://files.readme.io/9170a21-3vNYVE0m2oIvkDqghDAFBcYqxcZxLGIbsA.png)

1. InModule Using this Condition, select the module (Loyalty/Campaigns - Engage+) where you want to use this condition.

> 📘If you choose Campaigns, you can see only two options- Fixed and Round up.

## 📘

- If you choose Campaigns, you can see only two options- Fixed and Round up.

![279](https://files.readme.io/0b1275e-IJ0ZVdEBPdRnPEDYoXjfmhFepzlGgT5vbQ.png)

1. InAllocate Based On, select your preferred option, based on which the points are allocated.

| Option | Description |

| --- | --- |

| Tiers | This is the default option. Points are allocated to customers according to their tiers. |

| Loyalty Registration | Points are allocated to customers based on the information they provide during the registration. You can select any one of the custom fields.For example, if you select an age group of 25-30, points are allocated to customers belonging to this exact age group. |

| Loyalty Transaction | Points are allocated to customers on the basis of their Loyalty transaction. For example, if you select order_channel, points are awarded only to customers who made a transaction through a particular channel(For example- Instore). |



![280](https://files.readme.io/039be42-dymtQnUNnm_CG4qK_1hg6TLrUNBIF4SvYA.png)

1. InAllocation Type, select your preferred allocation type to define the criteria for giving points to customers.

| Option | Description |

| --- | --- |

| Fixed | To reward a fixed number of points (irrespective of the transaction amount).For example - 10 to issue 10 points per transaction. |

| Prorated- in terms of % | To reward points as a percentage of the transaction amount.For example - 10 to issue points of 50 points if the transaction amount is 500. |

| Points Multiplier- in terms of % | To reward extra points to the customer along with existing points. For example, 5x of the current points allocation strategy.  This is used in promotions (run for a shorter period) along with an existing allocation strategy.For example, if an org issues 10 points to customers in the lowest tier, during Diwali season the org can issue 10X points to attract customers in the lowest tier to make more purchases with the org. The customer will receive 100 points (10 multiplied by 10) if they make a transaction with org during the Diwali season. |

| Prorate - In terms of step function | To reward fixed number of points for equal transaction intervals or steps. For example, allocate 6 points on every transaction of 150. So on every step of 150, allocate 6 points. This way, transaction amount lying between 151-300 get  6 points, lying between 301-450 get 12 points and so on. |



![](https://files.readme.io/987a25c-Screenshot_2023-01-20_at_5.54.49_PM.png)

![](https://files.readme.io/4115c68-Screenshot_2023-01-20_at_5.54.49_PM.png)

1. EnableSame for all Tiersand enter the point value.The point value will be the same for all the tiers in the program, If disabled, you can enter different point values for different tiers.

![186](https://files.readme.io/2219fa1-qvGeRxzNTs3eu8v1xMCya8ywIrITjaGjGw.png)

1. InEnable Delayed Accrual, enable the checkbox and enter the days after which the customer is able to redeem points.

- DELAYED ACCRUAL: Points are reflected in the customer's account immediately after the transaction but are only redeemable after the prescribed number of days. For example, if an apparel store has a return policy of seven days, and a customer buys a shirt and gets 20 points on this purchase. The points are reflected in the customer's account right after the purchase, but if the customer decides to return the shirt on the third day, the points will disappear from the account and the customer is unable to use the acquired points. Delayed accrual prevents customers from misusing points.

![458](https://files.readme.io/0160873-k5HNUdtuWRQ0hRnh9vV7laHwLsxbJags6A.png)

1. ClickDone.

### Allocate points on Custom Field values

You can also reward points to your customers based on the custom field values that are submitted on the customer registration and profile update screens of InStore.  This works only for the custom fields with integer values (example: 20) and not for string values (example: John). It is recommended to use a fixed points allocation type for custom fields.

To configure rewarding points based on the custom fields, do the following:

1. InEarn conditionsclickAdd earn conditionto create a new point earning condition (or) to modify an existing condition, navigate to the earn condition and click the respectiveeditbutton.

2. InAllocate basedon, choose eitherLoyalty RegistrationorLoyalty Transactionand select your desired custom field accordingly.

![256](https://files.readme.io/9f6af84-gd4fw3XCRdVhclmvq0M9lCePsMCa22ynBQ.png)

![245](https://files.readme.io/e4dc534-DeeSN4YFEPvkUCtlWJfdcvi73GKAGDk7XQ.png)

1. In theAllocation type, choose Fixed to allocate a specific number of points for every transaction (irrespective of the transaction amount). Choose Prorated to allocate points as a percentage of the transaction amount.

2. ClickDone.

### Configure points round-up for campaigns

Earn condition configuration for Campaigns has an additional Allocation type - Round up. This lets you round up points that are in a specific range for each tier. For example, when running campaigns, you can round up points that are between 30-100 to 100 for all customers in the base tier.

> 📘IfSame for all Tiersis disabled, Round up configuration will vary for each tier.

## 📘

IfSame for all Tiersis disabled, Round up configuration will vary for each tier.

![526](https://files.readme.io/e9a8da2-0RKh0249iMG-Idb__vriWauYmDb_D_Qz0Q.png)

1. InAllocation type, chooseRoundup.

2. InPoints range, configure from, to, and round up to the range of points and the value that you want to have for the roundup. For example, if a customer has 40 points (current points) in his/her account and when the campaign is triggered, an additional 60 points will be added to his/her account making it 100 as configured.

### Configure rules for points allocation strategy

Once you create a strategy, you need to configure the relevant activity and define rules based on which you want to execute specific points earning conditions.Allocation Points is an action that allows you to award points to customers based on certain activities (registration, transaction, profile update, coupon redemption, points redemption, tier upgrade).

To configure Rules for Points Allocation:

1. InWorkflow, go to Customer Activity and click TransactionAdd.

2. InSelect Customer Activity, choose the activity for which you want to define earn condition rules. While defining actions, you can choose the desired allocation strategy in Earn Condition as shown.

![716](https://files.readme.io/3c29dfa-uqcxDO042WQiQpo3cKhSoL0cvzvHEi1evg.png)

![479](https://files.readme.io/52d0927-bx1GHBH3UB5WH0msmH_GKgXNNyrNqSQWXg.png)

1. You can also set up notifications to send to customers on the successful execution of the activity. Configure SMS, email, WeChat, and/or Mobile Push templates accordingly.

### Configure customer activity for points allocation at the transaction item level

To allocate points at the transaction item level, you need to have a forward case in which the transaction item is enabled. To issue points on a transaction item based on the item price enableUse proportions.

> 📘Transaction item is available only for forward cases (Forward to set action).Use proportionsandMaximize point allocationoptions are visible only after you enableEnable transaction item.

## 📘

- Transaction item is available only for forward cases (Forward to set action).

- Use proportionsandMaximize point allocationoptions are visible only after you enableEnable transaction item.

![459](https://files.readme.io/2f19af0-XOJo2uw4fcNtRSN2962lwyd_bv_CY-v_JQ.png)

![365](https://files.readme.io/ebcfbfc-XSHjiilBH2p_k8KtFFlAC7Wim2_72ihO3w.png)

1. Enable transaction item: Enable this option to issue points at the line-item level.

2. Use proportions: Enable this option to split points according to the price of transaction items. For example, consider a transaction with a bill amount of $300 consisting of two line items lineitem1 of $100, and lineitem2 of $200. If points allocation is 10% of the transaction amount, then 10 points will be issued for lineitem1 and 20 for lineitem2.

3. Maximize point allocation: Enable this option to set a cap on points allocated to customers.

4. Enable tender unroller: Enable this option to configure rules on payment modes.

### Limit points issual per customer for each set

You can limit points issued to customers on transaction amount, line-item amount, and tracker value for each set and subset separately per customer.

> 📘After adding and deleting the capping value, clickSave.

## 📘

- After adding and deleting the capping value, clickSave.

The following are the different capping configurations supported.

- Total Points capping: Limit the maximum amount of points allocated to a customer across all actions inside a set and all its subsets. This is applicable for all sets of the TransactionAdd customer activity.

To limit total points per customer for a condition in the TransactionAdd customer activity, do the following.

- On Workflow, select TransactionAdd customer activity. Click +Add capping.

![](https://files.readme.io/d9ac5e4-earn1.png)

- In Add capping page, click Total points.

![](https://files.readme.io/ee592fc-earn2.png)

- In Total points, set the limit per customer.

![](https://files.readme.io/07282ab-earn3.png)

- Click Save.

1. Source value cappingSet a limit on the value based on which points are calculated and awarded to customers. For example, if there is x% discount on bill amount and source value is set as 5000, the customer receives x% on bill amount or x% on 5000 as points (whichever is lower). This is applicable for Set1 and its subsets of the TransactionAdd customer activity.

To limit points per customer for a condition in the TransactionAdd customer activity.

- On Workflow, select TransactionAdd customer activity. Click +Add capping.

![](https://files.readme.io/e32668c-earn4.png)

- In Add capping page, click Source value.

![](https://files.readme.io/c0dc7c8-earn5.png)

- In Source value, set the limit per customer.

![](https://files.readme.io/2d4f92a-earn6.png)

- Click Save.

Sum of tender amountsThis option lets you limit points based on eligible payment methods. For example, issue points for the payments through ABC credit card up to 10000 of the cumulative transaction amount (from the configured time).

![](https://files.readme.io/67cd033-earn7.png)

![](https://files.readme.io/68888bf-earn8.png)

![](https://files.readme.io/1755562-earn9.png)

This is applicable for Set1 and its sub-sets of the TransactionAdd customer activity.

To limit points per customer on tracker values TransactionAdd customer activity.

- On Workflow, select TransactionAdd customer activity. Click +Add capping.

On Workflow, select TransactionAdd customer activity. Click +Add capping.

- In Add capping page, click Sum of tender amount.

In Add capping page, click Sum of tender amount.

- In Sum of tender amount, enable/disable the toggle button to include/exclude the tender mode. Choose the tender mode from the drop-down options.

In Sum of tender amount, enable/disable the toggle button to include/exclude the tender mode. Choose the tender mode from the drop-down options.

- Click Save.

Click Save.

Tracker source valueThis option is available for TrackerSet to limit issuing points on tracker value. For example, you can have a tracker condition to capture the quantity of petrol and limit points to issue per customer for up to 1000 liters of petrol. You can define multiple tracker conditions for a set.

This is applicable only for the sub-sets of TrackerSet (TransactionAdd customer activity).

![](https://files.readme.io/29d0b0d-earnq1.png)

![](https://files.readme.io/a0b0f34-earnq2.png)

![](https://files.readme.io/91e63ed-earnq3.png)

![](https://files.readme.io/2363f87-earnq4.png)

To limit points per customer on tracker values:

On Workflow, select TransactionAdd customer activity.

Select sub-set of TrackerSet,  click +Add capping.In the Add capping page, click Tracker source.

Choose the Tracker for which you want to set the limit. After selecting the tracker a text box appears.

Enter the capping value in the text box.

## Expiry Conditions

To configure expiry conditions, do the following.

1. On Intouch, navigate toMenu > Loyalty+ > Programs.

2. In Programs, select the program you want to edit.

3. SelectEdit Program.

4. SelectReward currency.

5. ClickAdd Expiry Conditions.

In Name, enter the condition name.In Description, describe the condition.In Select module for this condition, select the module (Loyalty+/Engage+) for which the condition is applicable.In Expire Pts. Based on, select your preferred option to define the criteria for points expiry.

| Option | Description |

| --- | --- |

| Event Date | Points expire on the configured date based on the last activity (transaction/registration) done by the customer. For example, if a customer buys a shirt on June 10, 2021, then the validity period for points for this customer can be set on any day after this transaction was made. |

| Rolling Expiry from Event Date | The current date of points expiry is reset to a new date based on the recent transaction date. That is, if a customer earns points before the expiry of existing points, the validity of all points will reset to the new points expiry date.For example, if a customer who made a transaction on June 10, 2021, has their point expiring on July 10, 2021, but they again made a transaction on July 7, 2021, then customers’ existing points along with the newly acquired point will have a new validity period, based on the transaction made on July 7, 2021.Note: Only the points that were issued via rolling strategies are extended. |

| Membership Event Date | Points expire automatically when the membership expires. This is usually used for membership-based loyalty. For example, if a customer has subscribed to a Platinum membership with a Digital store, and has his/her membership expiring in January 2022, then the points earned by this customer also expire in January 2022. |

| Customer's registration date | Points will expire on the registration date of the customer. This registration date refers to the date on which customer got enrolled or registered into the loyalty program. This will be same for all tiers. |

| Fixed date | Points will expire on a fixed date. This fixed date will be selected here, and every year points will expire on this date. This will be same for all tiers. |

| Transaction extended field | Points expire based on the date provided by the selected transaction-extended field.This capability supports time units (days, months). The date in the selected extended field will have the specified time unit added to it, and that final date becomes the expiry date of the points.If the calculated expiry date is in the past, the system sets the expiry to 7 days from the event processing date instead of failing the event.Note:As this is a transaction-extended field where the value of the field will be coming via a transaction this is available only for the loyalty module when creating the expiry strategy. |

| Customer extended field | Points expire based on the date in the selected customer-extended field. This capability supports time units (days, months). The date in the selected extended field will have the specified time unit added to it, and that final date becomes the expiry date of the points.If the calculated expiry date is in the past, the system sets the expiry to 7 days from the event processing date instead of failing the event.Note:As this customer-extended field is independent of the transaction, it is available in both the loyalty and engage modules when creating the expiry strategy. |



Enable Same for all Tiers.In Time Unit, select your preferred option to set the validity period for points.

| Option | Description |

| --- | --- |

| Days | Points expire after the configured number of days.For example, if a customer makes a transaction on July 1, 2021, and the Days for expiry is set as 10, points will expire on July 11, 2021. |

| Months | Points expire after the configured number of months.NOTE: Points will expire only on the last day of the month,For example, if a customer makes a transaction on July 10, 2021, and Months for expiry is set as 1, points will expire on August 31, 2021. |

| Date | Points expire on the configured date.For example, if a customer makes a transaction on June 1, 2021, and the Date for expiry is set as August 10, 2021, then points will expire on this fixed date only. |

| Never | Points will never expire for the customer. |



In Expire Pts. at the end of, enter the days or number of months for points to expire.For Date, you have to select a date on which points expire. For Never, there is no configuration required.

Click Done.

## Create Redeem Conditions

Redeem conditions allow you to configure points conversion ratio, eligibility criteria, and limit for points redemption. The eligibility criteria could be current points, lifetime points, or lifetime purchases.

You can configure points redemption to do the following.

- Set-point conversion ratio

- Define the minimum points a customer should earn.

- Limit the number of points redemption per transaction.

- Redeem points in multiples of 'X'.

##### Example

- Customers need at least 150-lifetime points to be eligible for redeeming points

- Redemption is allowed only in multiples of 50, and

- A maximum of 100 points can be redeemed per transaction

- At least one redemption strategy should be created in a loyalty program. An error is shown if you run the loyalty program without any points redemption strategy.

- For MLP, points redemption strategies created in a program cannot be used in other org programs, not even in the org's default program.

To configure redeem conditions, do the following-

1. OnIntouch, navigate toMenu>Loyalty+>Programs.

2. InPrograms, select the program you want to edit.

3. ClickEdit Program

4. ClickPoints.

5. InHow much is each point worth?, specify the points conversion ratio (in terms of org's base currency). It is recommended to use a simple conversion ratio such as 0.1, 0.2, 0.5, 0.75,1.

![296](https://files.readme.io/33e39f9-_O4sh8fO2eX8qOK2GfZrzoW2-4G6J1UzbQ.png)

1. ClickAdd Redeem Conditions.

![446](https://files.readme.io/c46e534-65gZ1oAz8Du4YSlzZMyY9HFeFO1QoANO_w.png)

1. InName, enter the condition name.

2. InDescription, describe the condition.

3. EnableSame for all Tiers

The condition becomes relevant for all tiers. If disabled, the condition works only for the selected tier.

![164](https://files.readme.io/036826f-xga8kvVfC9z_iXzpPii_Yco_JWT7MSViIg.png)

1. InMinimum Points to redeem, enter the minimum current points redeemable by customers. For example, if you set 50, a customer cannot redeem less than 50 points.

![283](https://files.readme.io/5cd250c-i6VDm8pzPk9oCZIWyN2krd6IIK__xjXGfA.png)

1. In theRedemption limit, enter the maximum current points redeemable by customers. For example, if you set 100, customers cannot redeem more than 100 points per transaction.

![278](https://files.readme.io/c227b01-dYfm6nxht0tXHvbmZB1Z8i7YCAX7XvjUtA.png)

1. In thePoints balance required, enter the minimum current points that a customer should have to allow redemption.

![278](https://files.readme.io/79416a5-4pX0P5p3irU-uHqGx09r8uTccNrTXPOG8A.png)

1. InAllow redemption in multiples of, enter the multiples in which the customer can redeem points. For example, if 10 is multiple, then the customer can redeem points only in multiples of 10 (10/20/30/40…).

![274](https://files.readme.io/fd3c082-ZaKCVnPqbeA-JZcdIXQwOUzLdQHqR7ouGA.png)

1. InLifetime points required, enter the total points that customers should earn to allow redemption.

![276](https://files.readme.io/896adea-pPFc68AWwo6CMRD2zZnZfnBcnAGtoiLFiQ.png)

1. InLifetime purchases required, enter the total purchases that customers should make to allow redemption.

![281](https://files.readme.io/5c969b6-kU_T9-3AScAMkU8yKU6hDshoFESavfUvww.png)

1. ClickDone.

### Configure Customer Activity for Points Redemption Condition

Once you create a points redemption condition, you need to configure the PointsRedemption event on the Customer Activity page to define when to execute the redemption condition.

1. InCustomer Activity, select Redeem points.

2. Create a ruleset, and inaction set the execute action as Redeem Points.

3. ClickSave & Continue.

![1169](https://files.readme.io/fc61c60-qDi4fLoHji1dvZVmiS8fWC_ogIHJAXObYQ.png)

You can also configure notifications to be sent to the respective customer on the successful execution of the event. You can notify through SMS, email, or WeChat.

### Set points redemption threshold per customer

You can limit the number of points to redeem per customer for the current day, lastxdays,  calendar week, and calendar month.

`x`

To limit points per customer, follow these steps.

1. InCustomer Activity, selectRedeem points.

2. In the Expression editor, define the condition using any of the following expressions.

- Day limit: currentCustomer.pointsRedeemedToday

- Weekly limit (Calendar week): currentCustomer.pointsRedeemedInCalendarWeek

- Monthly Limit (Calendar month): currentCustomer.pointsRedeemedInCalendarMonth

- In the last X days: currentCustomer.pointsRedeemedInPastDays(<No. of days>)

1. Configure the actions to execute, clickSave & Continue, and then Reconfigure the program.

## Create Return Conditions

Return conditions allow an org to define conditions on the reissue of points after a customer returns a transaction or transaction line item.

Points are returned in two ways as explained in the following.

Reverse pointsReissue PointsAlso see:

Configure customer activity for points reversal

Reverse pointsYou can reverse the redeemed points, such that the points expiry for those points is restored to the original. There are some configurations for points reversal depending on the reference transaction number.

Redemption without reference transaction number: If redemption is made without any transaction number then you can reverse points on the basis of redemption ID using the option Redemption reference captured in the bill. Points expiry for reversed points is restored to the original without altering the expiry date.Redemption with reference transaction number: If redemption is made with transaction number then you can reverse points on the basis of redemption ID using the option Redemption reference captured in the bill. Points expiry for reversed points is restored to the original without altering the expiry date.Prerequisites for points reversal supportEnable Allow_points_redemption_reversal config on EMF settings. Only the back-end team has access to this page. Please raise a ticket if you want this to enable.Enable V2 API as points reversal is supported only in V2.0.Enable Redemption reference captured in the bill on Points Return (Loyalty+)page.Reissue PointsIn a case where no transaction or redemption reference number is available, you can reissue points and set an expiry strategy. Hence, reissued points will have a new expiry date.

To configure points return, follow these steps.

On Intouch, navigate to Menu > Loyalty+ > Programs.In Programs, select the program you want to edit.Click Edit ProgramClick Points.Click Add Return Conditions.

Enable Return Used Points.

In Return used points based on, select any of the following options based on which points are returned.Points tender mode: To reissue redeemed points in form of currency relevant for the org. You need to set the expiry strategy for the reissued points in Select expiry strategy for reissued points.Redemption Reference in the Bill: To reverse redeemed points with the redemption reference number captured in the transaction. The expiry strategy will also be reversed to the original.Bill Number in Redemption API: When a customer returns a transaction for which certain points are redeemed, it is required to return those redeemed points. Hence, to reverse points, you need to configure the reference number to be considered for redemption.

In Expiry condition for returned points., define how reissued points will expire for the chosen return method.Click Done.Configure customer activity for points reversalIn Customer Activity, two actions are supported for points reversal - 1. Reverse points and 2. Send message.

To configure events for points reversal, follow these steps.

In Workflow, go to Customer Activity and click TransactionAdd.Select Redeemed points get reversed.

In Condition, leave the Expression and Expression equals to default - true. No rules are applicable for points reversal.In Points redemption reversal action, leave Points Expiry to the default option. This will return the expiry of the reverse points to the original expiry.In Channels, set the message you want to send to customers for points reversal. For more details on channel configuration, see Communications.Click Save to save the changes.

## Advanced Settings for Points

### Points round off settings

You can define the number of decimal points up to which points can be issued or withdrawn from a customer. This is applicable forissued points,returned points,re-evaluated points,delayed accrual points, line-item allocation, issued and re-evaluated points on line items,manual points adjustmentsandpoints redemption.

For example, 50.3458 points have to be issued to a customer. The following table highlights the points that will be issued based on the round off setting configured. The rounding strategy is round half-up (default).

| Round Decimals value | 0 | 1 | 2 | 3 |

| --- | --- | --- | --- | --- |

| Points issued | 50 | 50.3 | 50.34 | 50.345 |



To configure points round-of settings, follow these steps.

1. OnIntouch, navigate toMenu> Loyalty+ >Programs.

2. InPrograms, select the program for which you want to set the points round-off setting and clickEdit Program>Advanced settings.

![1096](https://files.readme.io/b5fb03f-qZ9LOPGaAY2096QSvsoL5k5nOEANnXUTlg.png)

1. Navigate to thePointspage.

2. Choose the decimal places using the drop-down list. that appears on the earn conditions. By default, the system calculates to 3 decimal places.

![976](https://files.readme.io/7d601b2-Ugoxii9X2vYyf4cm4tAvwC9RQYCfjnxRtg.png)

1. ClickDone.

### Points rounding strategy

You can define the strategy for rounding off points. Based on the number of decimals configured, the rounding is considered up to those decimal places. For example, if the round-off is set to two decimal places, the rounding would be for the nearest hundredths.

The types of strategies for rounding are as follows:

1. Ceiling: Rounds numbers towards positive infinity. Positive numbers round-up, while negative numbers round down (towards zero).

2. Floor: Rounds numbers towards negative infinity. Positive numbers round down, while negative numbers round down.

3. Round Half Up: Rounds to the nearest value, rounding up when the next digit is five or more.  If the decimal is 5 (midway), then it is rounded up.

4. Round Half Down: Rounds to the nearest value, rounding up when the next digit is five or more.  If the decimal is 5 (midway), then it is rounded down.

5. Round Half Even: Rounds to the nearest value, rounding to the nearest even number when the next digit is exactly five.

For example, 25.8751 points are to be allocated to a customer and the round-off is set to two decimal places, The following table highlights the value of points that will be issued based on the round off strategy:

| Round Strategy | Ceiling | Floor | Half Up (Default) | Half Down | Half Even |

| --- | --- | --- | --- | --- | --- |

| Points round-up (25.8751) | 25.88 | 25.87 | 25.88 | 25.87 | 25.88 |



## FAQs

Allocate Points- Points you can assign on the transaction amount and custom field values based on the configured ruleset.

Updated2 months ago