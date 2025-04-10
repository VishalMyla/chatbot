# Auto points conversion to reward

## Overview

The new customer activity, i.e. "Auto Points conversion to reward," enables the functionality of automatic consumptions of a threshold number of points and awarding the customer with a reward configured within the workflow.

## Background

In the US market, it is a common practice to convert the points of a customer to a coupon on a certain threshold.

Example: When the user purchases and gets 200 points, the points should be deducted from the user account and they will get a $10 off coupon code and when they reach 400 points, they will get a 2X $10 off coupon code.But when the user gets 450 points in a transaction, only 400 points should be detected and issue 2X $10 off coupon code, the rest 50 points will not be deducted.

### Why auto-convert points to coupons?

1. Auto-redemption of points into coupons allows brands to manage their point liability in a way other than expiring points, typically in a much quicker fashion than normal. It is very common in the US as brands want to keep their point liabilities as low as possible.

2. Pay with points is considered a premium feature in the US market. Just converting points into rewards and points into a voucher is considered normal.

3. Simplicity for brand and customers. Brands don't have to deal with redemption of points, or security like OTP, redemption reversal, etc. Customers don't have to manage points and make a lot of decisions to get the same amount of benefit. Saves a lot of operational hassle. Points redemption is one of the top 5 issues that we get on a monthly basis mostly OTP.

### Here is the step-by-step guide.

1. On Intouch, navigate toLoyalty+ > Programs. In Programs, select the program you want to reconfigure.

2. In theCustomer Activityclick the event name, and choose the event “ConvertPointsToReward”. To know about different available events, see Understanding Events.

![](https://files.readme.io/41d20db-AC1.png)

![](https://files.readme.io/c1e6b74-AC2.png)

1. In the workflow add set/conditions and rule expressions respective to your use case, and click to select a boolean output value true/false.

![](https://files.readme.io/28cdf8e-AC3.png)

1. If the configured condition output is true, the actions will be performed. To configure the auto conversion of points into reward action click on+Add actionto add the“Issue catalog reward”and save.

![](https://files.readme.io/5518659-AC4.png)

1. Once the“Issue catalog reward”action is saved, a dropdown window will appear to choose the Organization name and the Reward Configured.

![](https://files.readme.io/3ecf4f4-Screenshot_2024-02-13_at_1.08.56_PM.png)

1. Once the configuration is done, click onsave and Continue

![](https://files.readme.io/1c70f8e-AC7.png)

1. Once the transaction is done by the customer, automatically the threshold points will convert and a reward configured will be issued to the customer.

![](https://files.readme.io/b2d41c3-AC8.png)

### For creating rewards, please do the below steps:

1. Create a Coupon, for referenceclick hereLet's say a coupon series of 100 off, which generates the series_id = 100203, Once the coupon is generated we can link it with the reward created at the Marvel end.

2. To create a reward at Reward Catalog (aka Marvel), click here for the guide -MARVEL

3. Once the coupon is created, the coupon/offer is linked via series ID with the reward so now we can link the reward with the "auto points conversion to reward activity"

> 📘NoteAuto points conversion to reward are not get triggered for the below events:Import related activitiesGoodwill allocationBulk Allocate PointsUnlock points API

## 📘Note

Note

Auto points conversion to reward are not get triggered for the below events:

- Import related activities

- Goodwill allocation

- Bulk Allocate Points

- Unlock points API

Updated10 months ago