# Enrol & Issue loyalty promotion

Enrol & issue promotions, also referred to as LOYALTY_EARNING in the backend, require customers to opt-in or be enrolled before receiving the promotion for a specific activity. Upon meeting the requirements outlined in the issued promotion, customers earn the associated benefits.

These promotions typically involve a three-step process: initial enrolment, followed by completing a specific action to earn the promotion, and finally receiving the benefits of that promotion. They aim to engage customers through a more interactive and participatory approach.

Marketing managers enrol customers in these promotions, limiting the promotion earnings to a targeted audience. Once enrolled, customers can perform the specified actions to earn the promotion.

In the backend, Enrol is Issue and Issue is Earn. From a marketer’s perspective, a customer is enrolled in a promotion, and the customer is issued a promotion. However, from the customer’s perspective, they receive a promotion and then earn its benefits.

# Use Case 1

Scenario:A marketing manager initiates a referral program to incentivize customers to refer friends to the platform. Upon referring their friends, customers will earn a promotion granting them 2000 bonus points and the Referral Champion badge upon their 3rd successful referral.Enrolment:Customers who have made at least three purchases in the past 6 months are enrolled in the referral program.Customer Action:Enrolled customers receive a unique referral link and are prompted to share it with friends.Issuance: When a referred friend makes their first purchase using the unique link, the referring customer earns the promotion. Upon three successful referrals, resulting in their friends' first purchases, the referring customer receives the benefits of the promotion, including 2000 bonus points and the Referral Champion badge.

# Use Case 2

Scenario:Enhancing Engagement Through Product ReviewsEnrolment:A fashion retailer aims to boost customer engagement by encouraging them to write product reviews. Customers who have made a purchase within the last month are enrolled in the review program.Customer Action:Enrolled customers receive an email inviting them to write a review for their purchased product. Incentivized with a promotion offering 500 bonus points and a 10% discount coupon for their next purchase, customers are encouraged to provide feedback.Issuance: Upon submitting a review, customers are issued a promotion entitling them to 500 bonus points and a 10% discount coupon for their next purchase. Subsequently, when making their next purchase, customers receive 500 bonus points and a 10% discount on all products.

# Use Case 3

Scenario:Diabetes Wellness ChallengeTargeted Enrolment:Customers with diabetes are automatically enrolled in the "Sugar-Free Challenge" upon joining the wellness platform. Enrolled customers receive the "Sugar-Free Challenge" promotion, encouraging them to abstain from added sugars for one week.Commitment and Tracking:Customers opt into the challenge, committing to avoiding added sugars daily for one week. Upon opting in, the promotion is issued to them.Achievement and Reward:Upon successfully completing the challenge, customers are rewarded with 100 bonus points as recognition of their commitment.

# Creating Enrol & Issue type of promotion

> 🚧Attention!The promotion type cannot be changed after creation of a promotion.

## 🚧Attention!

Attention!

The promotion type cannot be changed after creation of a promotion.

To create an "Enrol & Issue" promotion, perform the following during the creation of a promotion

1. SelectEnrol & issuefrom thePromotion typeoption.

SelectEnrol & issuefrom thePromotion typeoption.

![](https://files.readme.io/b99bbec8e47a7e979e918dbefcc5e61c37baf1a4a1ab449a3e9fde6e0f680191-image.png)

2. In theConditionexpression text box, define the criteria to issue the promotion in the expression language.

In theConditionexpression text box, define the criteria to issue the promotion in the expression language.

![](https://files.readme.io/8fec0d3701dcd786abe930fb297910bbd8cb04836c25e9da5643296c4de0d0c8-image.png)

3. SelectAdd actionto define the benefits (badge, coupon etc) that need to be issued to customers on meeting the criteria.

SelectAdd actionto define the benefits (badge, coupon etc) that need to be issued to customers on meeting the criteria.

![](https://files.readme.io/6dc95641d68d878afb6de5ee3951514d7744d21c723ae2034c972947461bc9a3-image.png)

4. ClickPublish promotion.

ClickPublish promotion.

![](https://files.readme.io/bca1d5b84a1e95d99b362891c49adeb774c23dfd33676b37ebe1cad137257946-image.png)

You can set the points allocation limit in theAdvanced settings.

[Advanced settings](/docs/loyalty-promotions#limits-when-promotions-20-is-enabled)

![](https://files.readme.io/d08580e657b93f2c1ca7e242d9cf271b48e85a70c53a1d191667f734875448bb-image.png)

## Defining enrolment expiry

This is the duration within which a customer must complete the issuance activity for the promotion.

There are two types of expiry:

1. Along with promotion

2. After a specific period from the customer’s enrolment

### Along with promotion

In this type of expiry, the enrolment expiry remains the same as the promotion end date. For example, if the enrolment expiry is defined as the same as the promotion end date and the expiry date is 30th Apr, then a customer who is enrolled on 1st Apr can complete the issuance activity until 30th Apr, and a customer who is enrolled on 3rd Apr can complete the issuance activity until 30th Apr. The expiry remains the same for all customers in this case, irrespective of when the enrolment happened.

### After a specific period from the customer’s enrolment

In this type, the promotion expires after N number of days from the customer’s enrolment. For example, if the enrollment expiry is defined as 10 days from the customer’s enrolment, then a customer who is enrolled on 1st Apr can complete the issuance activity until 11th Apr, and a customer who is enrolled on 3rd Apr can complete the issuance activity until 13th Apr.

You can define the expiry for issued promotions underEnrolment expiryin theAdvanced settings > Enrolmentof the promotion.

![](https://files.readme.io/dcc5e70-Enrolment_expiry.png)

> 📘NotesThe expiries are calculated based on the store timezone.For Enrol&Issue type of promotion, both enrolment and issual expiry will be definedIf a customer is enrolled at the current time, then the expiry of the enrolment will be (current time as per the store time zone + 10 days) considering 10 days is defined as the enrolment expiry.If a customer is issued the promotion at the current time, then the expiry of the issual will be (current time as per the store time zone + 10 days) considering 10 days is defined as the issual expiry.These expiries can be updated when the promotion is upcoming, live or ended.

## 📘Notes

Notes

- The expiries are calculated based on the store timezone.

- For Enrol&Issue type of promotion, both enrolment and issual expiry will be definedIf a customer is enrolled at the current time, then the expiry of the enrolment will be (current time as per the store time zone + 10 days) considering 10 days is defined as the enrolment expiry.If a customer is issued the promotion at the current time, then the expiry of the issual will be (current time as per the store time zone + 10 days) considering 10 days is defined as the issual expiry.

- These expiries can be updated when the promotion is upcoming, live or ended.

## Defining limits for enrolment

Enrolment restrictions are the limits set to keep restrictions on the number of times a customer can be enrolled (Backend term - Issue) in a promotion. By default, this limit is set to 1.

Only one enrolment can be active at any point in time for the customer. Suppose a customer is enrolled again in any promotion. In that case, the current enrolment will be replaced and a new expiry will be applicable for the customer based on the new enrolment date.

The maximum limit can be 100.

To set enrolment restrictions, navigate toAdvanced Settings > Enrolment limit.

> 📘NotesFor Enrol&Issue type of promotion, both enrolment and issual limits will be defined including issual and redemption of issualOnce the restrictions are consumed completely, there will be no more enrolment and issual that can happen for a promotion for a particular customerThese limits can be updated when the promotion is upcoming, live or ended.

## 📘Notes

Notes

- For Enrol&Issue type of promotion, both enrolment and issual limits will be defined including issual and redemption of issual

- Once the restrictions are consumed completely, there will be no more enrolment and issual that can happen for a promotion for a particular customer

- These limits can be updated when the promotion is upcoming, live or ended.

![](https://files.readme.io/b3651d7-Enrolment_limit.png)

![](https://files.readme.io/1ed2942-Issual_limit.png)

## Defining issual expiry

Issual expiry refers to the duration within which a customer must complete the specified activity to receive the benefits of the promotion.

You can define the expiry for issued promotions underIssual expiryin theAdvanced settingsof the promotion.

There are two types of expiry:

1. Along with promotion

2. After a specific period from promotion issual

### Along with promotion

When the issual expiry is set to "along with promotion," it aligns with the promotion end date. For instance, if the promotion end date is April 30th, then customers who receive the promotion on April 1st can avail of its benefits if they complete the earning activity by April 30th. Similarly, customers who receive the promotion on April 3rd can also enjoy its benefits if they complete the earning activity by April 30th. In this scenario, the expiry remains consistent for all customers, regardless of when the promotion was issued.

## After specific period from promotion issual

In this, the promotion expires after a specified number of days from the time of issual. For instance, if the issual expiry is set to 10 days from promotion issual, then a customer who receives the promotion on April 1st can avail of its benefits by completing the activity until April 11th. Similarly, a customer who receives the promotion on April 3rd can complete the activity until April 13th to enjoy the benefits of the promotion.

> 📘NotesThe expiries are calculated based on the store timezone.These expiries can be updated when the promotion is upcoming, live or ended.

## 📘Notes

Notes

- The expiries are calculated based on the store timezone.

- These expiries can be updated when the promotion is upcoming, live or ended.

![](https://files.readme.io/95d9251-Issue_expiry.png)

## Defining limits for issuing promotions and redemption

You can define the restrictions for the promotion issued and redemption underIssual limitin theAdvanced settings.

Max times a promotion can be issued to a customer (Backend term - Earn):Enter the maximum number of times a promotion can be issued to a customer. The default value is 1.Max times one issual can be redeemed: Enter the maximum number of times a single issual can be redeemed. The default value is 1.

Both issual and redemption limits can have a maximum value of 100.

> 📘NotesOnce the restrictions are completely consumed, further enrolment and issual for a promotion will be unavailable for a particular customer.These limits can be updated while the promotion is in the upcoming, live, or ended state

## 📘Notes

Notes

- Once the restrictions are completely consumed, further enrolment and issual for a promotion will be unavailable for a particular customer.

- These limits can be updated while the promotion is in the upcoming, live, or ended state

![](https://files.readme.io/1ed2942-Issual_limit.png)

# Enroling customers for the promotion

You can enrol the customers to a promotion using theEnrol promotion API.

Notes:

- If the promotion is a Direct Issue, then this API call will fail as the customer can’t be enrolled in a Direct issue type of promotion.

- If the promotion is of type Enrol&Issue, then this API will enrol the customer in the promotion.

![](https://files.readme.io/5d31b3550800c85b7deae49f40964b137013d93c72ade4903e09eeabae00410e-screen-capture_online-video-cutter.com_1_1.gif)

# Issuing the promotion

You can issue the promotion through the Issue promotion action in loyalty workflows and loyalty promotions or using API.

Using Issue loyalty promotion action on UI

![](https://files.readme.io/2f6819b6d50e0113a668f4d2fbddd4ddfe694763dcc79b348a90fc0e8ad16169-issue_promo_-_Made_with_Clipchamp_1.gif)

Using API

You can use the APIIssue promotionand issue promotion.

Updated6 months ago