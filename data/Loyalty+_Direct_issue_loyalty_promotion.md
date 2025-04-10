# Direct issue loyalty promotion

Direct issue promotions, also known as LOYALTY promotions in the backend, are a type of promotion where a specific promotion is initially issued to customers based on their behavioural events or transactions. Subsequently, upon meeting the criteria defined in the promotion during their next transaction, the benefits are provided.

The issuance of promotions occurs through various activity workflows such as TransactionAdd and Behavioral events. From a marketer's perspective, customers receive a promotion, while from the customer's perspective, they earn a promotion.

# Use Case 1

Scenario:A marketing manager targets VIP customers with a special discount.Configuration:The promotion offers a 30% discount coupon on the next purchase to VIP customers who make 3 visits to the store in 1 month.Issuance:Once a customer achieves VIP status and meets the visit milestone, the promotion is automatically issued to them.Redemption:VIP customers receive the promotion and can immediately redeem the discount on their next purchase.

# Use Case 2

Scenario:A coffee shop rewards frequent visitors with a free beverage.Configuration:The promotion provides a free beverage after every fifth visit to the store.Issuance:The system tracks customer visits and identifies those who have visited the store five times within a month.Redemption:Eligible customers receive the promotion via email or SMS and can redeem the free beverage during their next visit.

# Use Case 3

Scenario:A health app promotes hydration habits through a challenge.Configuration:Customers opt-in to the "Hydration Challenge" mission, which offers incentives such as bonus points and a gift card upon completion.Issuance:Customers who join the mission are directly issued the promotion.Completion:Participants track their daily water intake, aiming to drink 8 glasses of water daily for 4 weeks.Reward Issuance: Customers who successfully complete the challenge receive bonus points and a gift card automatically credited to their account.

# Creating Direct issue promotion

> 🚧Attention!The promotion type cannot be changed after creation of a promotion.

## 🚧Attention!

Attention!

The promotion type cannot be changed after creation of a promotion.

To create a  "Direct Issue" promotion, perform the following during the creation of a promotion

1. SelectDirect issuefrom thePromotion typeoption.

2. In theConditionexpression text box, define the criteria to issue the promotion in the expression language.

3. SelectAdd actionto define the benefits (badge, coupon etc) that need to be issued to customers on meeting the criteria.

4. ClickPublish promotion.

![](https://files.readme.io/61be02e-Available_to_issue.gif)

You can set the points allocation limit in theAdvanced settings.

[Advanced settings](/docs/loyalty-promotions#limits-when-promotions-20-is-enabled)

## Defining issual expiry

Issual expiry refers to the duration within which a customer must complete the specified activity to receive the benefits of the promotion.

You can define the expiry for issued promotions underIssual expiryin theAdvanced settingsof the promotion.

There are two types of expiry:

1. Along with promotion

2. After a specific period from promotion issual

### Along with promotion

When the issual expiry is set to "along with promotion," it aligns with the promotion end date. For instance, if the promotion end date is April 30th, then customers who receive the promotion on April 1st can avail of its benefits if they complete the earning activity by April 30th. Similarly, customers who receive the promotion on April 3rd can also enjoy its benefits if they complete the earning activity by April 30th. In this scenario, the expiry remains consistent for all customers, regardless of when the promotion was issued.

### After specific period from promotion issual

In this, the promotion expires after a specified number of days from the time of issual. For instance, if the issual expiry is set to 10 days from promotion issual, then a customer who receives the promotion on April 1st can avail of its benefits by completing the activity until April 11th. Similarly, a customer who receives the promotion on April 3rd can complete the activity until April 13th to enjoy the benefits of the promotion.

> 📘NotesThe expiries are calculated based on the store timezone.These expiries can be updated when the promotion is upcoming, live or ended.

## 📘Notes

Notes

- The expiries are calculated based on the store timezone.

- These expiries can be updated when the promotion is upcoming, live or ended.

![](https://files.readme.io/95d9251-Issue_expiry.png)

## Defining limits for issuing promotions and redemption

You can define the restrictions for the promotion issues and redemption underIssual limitin theAdvanced settings.

Max times a promotion can be issued to a customer (Backend Earn):Enter the maximum number of times a promotion can be issued to a customer. The default value is 1.Max times one issual can be redeemed: Enter the maximum number of times a single issual can be redeemed. The default value is 1.

Both issual and redemption limits can have a maximum value of 100.

> 📘NotesOnce the restrictions are completely consumed, further enrollment and issual for a promotion will be unavailable for a particular customer.These limits can be updated while the promotion is in the upcoming, live, or ended state

## 📘Notes

Notes

- Once the restrictions are completely consumed, further enrollment and issual for a promotion will be unavailable for a particular customer.

- These limits can be updated while the promotion is in the upcoming, live, or ended state

![](https://files.readme.io/1ed2942-Issual_limit.png)

# Issue loyalty promotion

The promotions can be issued through Issue loyalty promotion action in loyalty workflows and loyalty promotions or using API

1. Via Issue loyalty promotion action in loyalty workflows and loyalty promotions.

Via Issue loyalty promotion action in loyalty workflows and loyalty promotions.

![](https://files.readme.io/2f6819b6d50e0113a668f4d2fbddd4ddfe694763dcc79b348a90fc0e8ad16169-issue_promo_-_Made_with_Clipchamp_1.gif)

Updated6 months ago