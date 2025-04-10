# Get Cart Promotions for a Customerget

# Request Query Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| includeRedemptions | Boolean | includeRedemptions=true includes the restrictions applied to the promotion including max limit and remaining redemptions |

| includeSupplementaryPromotions | Boolean | includeSupplementaryPromotions=true includes the promotions tagged to the customer's supplementary program |



# Response Parameters

| Parameter | Data type | Description |

| --- | --- | --- |

| promotionId | String | Unique identifier of the Cart promotion |

| promotionName | String | Name of the Cart promotion |

| validTill | Long | Expiration timestamp (milliseconds since epoch) |

| customerId | Long | Unique Identifier of the Customer using the Cart promotion |

| earnedType | String | The method how cart promotion was earned. Supported values: NONE, TIER, REWARD, LOYALTY. None: Promotion is directly assigned to the customer, no qualification criteria required. Tier: Promotion is assigned based on the customers loyalty tier or status level, no qualifying action is required. Reward: Promotion is earned on the basis of completing a milestone or achievement, action is required. Loyalty: Promotion is tied to loyalty program. |

| earnedStatus | String | Status of the earned cart promotion. Supported Values: LOCKED, UNLOCKED, EXPIRED. Locked: Promotion has been Issued but not yet available to use. Unlocked: Promotion is active and ready for the customer to use. Expired: Promotion was available before but cannot be used now. |

| promotionStatus | String | Promotion can have three statues: ACTIVE, INACTIVE, EXPIRED.ACTIVE- The promotion is currently running and can be applied if all conditions are met. However, this status does not indicate whether the customer has already redeemed the promotion. For example, a birthday promotion may be active for an entire month, but this does not mean the customer is eligible to use it at all times. If the customer has already redeemed the promotion and has no more redemptions remaining, the status will still remain active. To check if a customer can still redeem the promotion, refer toremainingRedemption.INACTIVE- Promotion exists in the system but is currently deactivated by an administrator.EXPIRED- The end date for the promotion has passed and it is no longer active. |

| milestoneId | Long | Milestone or achievement target linked to the promotion |

| targetGroupId | Long | Identifier for a specific customer group eligible for the promotion based on predefined criteria. It indicates the offer was specifically designed for a customer segment. |

| applicationMode | String | Indicates the way the promotion is applied. Supported Values: DISCOUNT, REWARD. Discount: Promotion applies to reduce the price, lowering the amount customer pays at checkout. Reward: It provides benefit or reward that does not applies at transaction. |

| customFieldValues | Object | Contains custom key-value pairs related to the promotion |

| restrictions | Object | Contains restrictions categorized by level. To view the restrictions, setincludeRedemptionsto true. If the cart promotion has no redemption limit, this information will not be available. |

| - Cart | Array | Contains cart-level restrictions applicable to the promotion. |

| - Customer | Array | Contains customer-level restrictions applicable to the promotion. |

| - Promotion | Array | Contains promotion-level restrictions applicable to the promotion. |

| - Product | Array | Contains product-level restrictions applicable to the promotion. OnlyDISCOUNTis supported as a KPI for product-level restrictions. |

| - Category | Array | Contains Product Category-level restrictions applicable to the promotion. OnlyREDEMPTIONis supported as a KPI for category-level restrictions. |

| -- kpi | String | Indicates the key performance metric used for restriction.-REDEMPTION: Limits the number of times a promotion can be redeemed.-DISCOUNT: Limits the total discount amount that can be applied.-TRANSACTION: Limits the number of transactions in which the promotion can be applied. |

| -- maxLimit | String | Indicates the maximum allowed limit for a specific restriction. For Example, in a birthday cart promotion offer, if themaxLimitis set to 1, the customer can only redeem the promotion once while it is running. |

| -- remainingRedemption | String | Indicates the remaining number of times the cart promotion can be used by the customer. If the count is zero, it means that the promotion cannot be redeemed by the customer as they have already exhausted all the redemptions available. For example, in a birthday cart promotion offer with a maximum redemption limit of 1, if the customer has already redeemed the cart promotion, then even if promotionStatus isACTIVE, the customer cannot redeem the promotion again. |

| eventTime | Long | Timestamp of the event that triggered the cart promotion (milliseconds since epoch) |

| supplementaryCriteria | Object | Defines additional loyalty based conditions. To get this response, set query parameterincludeSupplementaryRedemtionto true |

| - loyaltyprogramId | Long | Identifier of the loyalty program associated with cart promotion |

| - programType | Enum | Indicates the type of program |

| - partnerprogramId | Long | Indicates partner program Id, if it is a partner program |



`remainingRedemption`

`includeRedemptions`

`DISCOUNT`

`REDEMPTION`

`REDEMPTION`

`DISCOUNT`

`TRANSACTION`

`maxLimit`

`ACTIVE`

`includeSupplementaryRedemtion`

`Try It!`