# Different payment modes for rewards in the catalog

Brands can now expand their rewards catalog to include options to purchase rewards with cash, fixed points, variable points, or a combination of both, providing customers with greater flexibility and more reasons to engage with the loyalty program. With options including FREE, POINTS, CASH, CONV_RATIO and POINTS_CASH, brands gain enhanced flexibility and control over reward issuance.

This feature enables customers to receive a reward either by redeeming their points or by making a cash payment or both. Cash transactions or any other mode of payment occur outside the system and are not subject to validation within the system.

![](https://files.readme.io/b7210c7-image3.png)

![](https://files.readme.io/81e3ee9-image2.png)

### The supported payment modes are:

1. FREE: This payment mode incurs zero cost, requiring neither points nor cash.

2. POINTS: Loyalty points are redeemed from the customer's wallet to issue the reward.

3. CASH: The reward is issued without redemption or validation, assuming the tender transaction occurred outside the system (upstream system).

4. POINTS_CASH: In this payment mode, the system issues rewards based on redeeming both cash and loyalty points from the customer's wallet. The assumption here is that the cash transaction has been completed successfully, and the reward is issued based solely on this external transaction.

5. CONV_RATIO: The rewards system calculates the equivalent miles based on the points provided in the issue reward request basis the conversion ratio of the reward. For example:If the conversion ratio value is 0.44 and the customer wants to burn 1500 points and the same points worth of miles need to be credited to his account, the rewards system calculates miles worth 1500 points based on the conversion ratio value i.e. 1500*0.44 = 660 milesIf the conversion ratio value is 0.44 and the customer wants 1000 miles to be credited. The reward system calculates the points to be redeemed i.e. 1000/0.44= 2272 points will be deducted.

1. If the conversion ratio value is 0.44 and the customer wants to burn 1500 points and the same points worth of miles need to be credited to his account, the rewards system calculates miles worth 1500 points based on the conversion ratio value i.e. 1500*0.44 = 660 miles

2. If the conversion ratio value is 0.44 and the customer wants 1000 miles to be credited. The reward system calculates the points to be redeemed i.e. 1000/0.44= 2272 points will be deducted.

8. Defining multiple payment modes for a single reward : Offer rewards with multiple payment options, giving customers the flexibility to choose their preferred payment method. For example,Customers can get the cinema ticket either in 16,000 Points OR 10,000 ShowPoints + $72Customers can get the merchandise in 1000 points OR 500 points + 5$ or 10$

1. Customers can get the cinema ticket either in 16,000 Points OR 10,000 ShowPoints + $72

2. Customers can get the merchandise in 1000 points OR 500 points + 5$ or 10$

![](https://files.readme.io/8bfc0bd-image1.png)

During the issue call, the system records the payment mode used to issue the reward at the reward level.

### Validations

1. If payment config is not set, type is not FREE_VOUCHER and intouchPoints is 0, an exception will be thrown saying either define the points greater than 0 or type should be FREE_VOUCHER

2. CONV_RATIO mode is supported only for CHARITY, MILES, CASH_WALLET, AUCTION, PHYSICAL_REWARD, GIFT_CARD, SWEEPSTAKES type of redemption types.

3. If type is FREE_VOUCHER and payment mode is set then, it will be FREE i.e. no points will be deducted.

4. Maximum of 5 mode of payments can be added against a single reward

5. Except free mode of payment and conversion ratio, all the other mode of payments can be combined as the user will never say that reward is free as well as can be bought with 500 points or 10$ cash.

> 📘Note:-New brands should no longer use the"intouch points"field. Instead, they should only use the new"payment config"block inCreateandUpdatereward API

## 📘Note:-

Note:-

New brands should no longer use the"intouch points"field. Instead, they should only use the new"payment config"block inCreateandUpdatereward API

![](https://files.readme.io/acf0ddeb23ad8b8181b122ffe957828b3b49cbf1799ed7a61626b20ec9469212-Screenshot_2024-09-13_174313.png)

## API documentation

1. Create Reward with payment configs

2. Update Reward with payment configs

### Conversion ratio (CONV_RATIO)

```
"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio":0.33
        }
    ]
```

```
"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio":0.33
        }
    ]
```

### POINTS

```
"paymentConfigs": [
       {
            "paymentMode": "POINTS",
            "points":100
        }
    ]
```

```
"paymentConfigs": [
       {
            "paymentMode": "POINTS",
            "points":100
        }
    ]
```

### CASH

```
"paymentConfigs": [
       {
            "paymentMode": "CASH",
            "cash":200
        }
    ]
```

```
"paymentConfigs": [
       {
            "paymentMode": "CASH",
            "cash":200
        }
    ]
```

### Points and cash (POINTS_CASH)

```
"paymentConfigs": [
       {
            "paymentMode": "POINTS_CASH",
            "cash":100,
            "points":150
        }
    ]
```

```
"paymentConfigs": [
       {
            "paymentMode": "POINTS_CASH",
            "cash":100,
            "points":150
        }
    ]
```

### FREE

```
"paymentConfigs": [
       {
            "paymentMode": "FREE"
        }
    ]
```

```
"paymentConfigs": [
       {
            "paymentMode": "FREE"
        }
    ]
```

### With Multiple Payment modes

```
"paymentConfigs": [
        {
            "paymentMode": "POINTS",
            "points": 150
        },
        {
            "paymentMode": "CASH",
            "cash": 500
        },
        {
            "paymentMode": "POINTS_CASH",
          	"points": 200,
            "cash": 500
        },
    ],
```

```
"paymentConfigs": [
        {
            "paymentMode": "POINTS",
            "points": 150
        },
        {
            "paymentMode": "CASH",
            "cash": 500
        },
        {
            "paymentMode": "POINTS_CASH",
          	"points": 200,
            "cash": 500
        },
    ],
```

1. Following get APIs will return the payment config detailsGet user specific reward by idGet reward details by idGet issued reward details for a userGet all available rewards for user

1. Get user specific reward by id

2. Get reward details by id

3. Get issued reward details for a user

4. Get all available rewards for user

6. Issue reward APInow accepts payment config and tender blocks for recording cash based transactions for audit and reporting purposes.

## Use cases:

1. A brand, ABC, wants to allow customers to purchase rewards using combination of points and cash rather than allowing customers to purchase rewards using only points.To achieve this, define the payment mode as POINTS_CASH`and issue the reward.

2. Concert Ticket Purchase: The customer had options to pay with 10,000 points, 5,000 points + $50, or $100, and chose 5,000 points + $50 to secure the ticket.

3. Hotel Stay Redemption: The member could redeem a hotel stay with 20,000 points, 15,000 points + $100, or $250, and opted for 15,000 points + $100.

4. Electronics Purchase: The customer had the choice to use 30,000 points, 25,000 points + $150, or $300, and decided on 25,000 points + $150 for the tablet.

5. Airline Ticket Redemption: The frequent flyer could book the flight with 40,000 points, 30,000 points + $200, or $500, and chose 30,000 points + $200.

6. Charity Donation: The customer had options to donate using 5,000 points, 3,000 points + $20, 1,000 points + $30, 2,000 points + $25, or $50, and selected 3,000 points + $20.

Updated7 months ago