# Reducing Reward Checkout Failures

Background

In the past, when partner rewards were not successfully issued, downstream systems did not receive error responses from reward partners. Consequently, brands were unable to display accurate error messages to end users.

Reward Issuance could fail at any of the below steps and hence proper error message was required to show to the end users for better customer experience:

- isRedeemable >> checks if the customer has enough points to redeem the reward

- issueReward/issueCoupon >> coupon is issued to the customer

- RedeemPoints >> points are redeemed from customer’s account

- issueCouponReversal >> In case reward is issued but points are not deducted, then reward reversal will take place at this step

Previously, in case of failure in the above steps, following response would be generated:

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as issue failed"
    }
    rewards:null
}
```

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as issue failed"
    }
    rewards:null
}
```

Enhancement

With the recent enhancement, error messages from partners can now be retrieved and included in the response. This will allow brands to display accurate error messages to the end-users in case of reward issuance failures making the customer experience better.

After the enhancement, in case of failure, following response would be generated:

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as : IsRedeemable API failed CardNumberRequired &NumberNotFound",
        "partnerError": {
            "codes": [
                "100106",
                "100105"
            ],
            "messages": [
                "CardNumberRequired",
                "NumberNotFound"
            ]
        }
    },
    "rewards":null  
}
```

```
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as : IsRedeemable API failed CardNumberRequired &NumberNotFound",
        "partnerError": {
            "codes": [
                "100106",
                "100105"
            ],
            "messages": [
                "CardNumberRequired",
                "NumberNotFound"
            ]
        }
    },
    "rewards":null  
}
```

```
{
    "status": {
        "success": false,
        "code": 1010,
        "message": "Points redeem API failed: Invalid token - not found",
        "partnerError": {
            "codes": [
                "990102"
            ],
            "messages": [
                "Invalid token - not found"
            ]
        }
    },
    "rewards": null
}
```

```
{
    "status": {
        "success": false,
        "code": 1010,
        "message": "Points redeem API failed: Invalid token - not found",
        "partnerError": {
            "codes": [
                "990102"
            ],
            "messages": [
                "Invalid token - not found"
            ]
        }
    },
    "rewards": null
}
```

Table showing different error codes and corresponding message and comments

| Error code | Message | Comments |

| --- | --- | --- |

| 8004 | fail to issue reward as | Issue failed while getting customer details or isRedeemable check or redeem points check. |

| 8003 | fail to issue reward | 1. Any Request validation errors.2. When all reward’s issue failed. |

| 8010 | Reward issued partially | In issue bulk call, not all rewards are issued successfully. |

| 1010 | Failed to redeem points | When unable to redeem the points. |

| 1026 | Points vendor configurations are not set | Brand not configured points vendor redemptions properly. |



For tech detailing, refer to thisdoc

Updated8 months ago