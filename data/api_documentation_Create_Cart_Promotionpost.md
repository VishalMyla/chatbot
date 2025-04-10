# Create Cart Promotionpost

## Notes

- Mandatory fields are indicated with an asterisk

1. The condition and action parameters exist in nested structures in the JSON:Cart condition parameters are nested undercondition.cartConditionProduct condition parameters are nested undercondition.productConditionCombo product condition parameters are nested undercondition.comboProductConditionTender condition parameters are nested undercondition.tenderConditionCart-based action parameters are nested underaction.cartBasedActionProduct-based action parameters are nested underaction.productBasedActionProduct-based condition parameters are nested underaction.productBasedAction.productBasedConditionTender-based action parameters are nested underaction.tenderBasedAction

The condition and action parameters exist in nested structures in the JSON:

- Cart condition parameters are nested undercondition.cartCondition

`condition.cartCondition`

- Product condition parameters are nested undercondition.productCondition

`condition.productCondition`

- Combo product condition parameters are nested undercondition.comboProductCondition

`condition.comboProductCondition`

- Tender condition parameters are nested undercondition.tenderCondition

`condition.tenderCondition`

- Cart-based action parameters are nested underaction.cartBasedAction

`action.cartBasedAction`

- Product-based action parameters are nested underaction.productBasedAction

`action.productBasedAction`

- Product-based condition parameters are nested underaction.productBasedAction.productBasedCondition

```
action.productBasedAction.productBasedCondition
```

- Tender-based action parameters are nested underaction.tenderBasedAction

`action.tenderBasedAction`

10. Tender condition must be paired with a tender action for consistency.

Tender condition must be paired with a tender action for consistency.

11. Default value formaxIssuancePerCustomeris 1, with valid range from -1 to 50.

Default value formaxIssuancePerCustomeris 1, with valid range from -1 to 50.

`maxIssuancePerCustomer`

12. Default value forisStackableis false.

Default value forisStackableis false.

`isStackable`

13. Default value forpriorityis 0.

Default value forpriorityis 0.

`priority`

14. Priority values should be unique within a campaign for deterministic behavior.

Priority values should be unique within a campaign for deterministic behavior.

15. All datetime values are in milliseconds since epoch in UTC timezone.

All datetime values are in milliseconds since epoch in UTC timezone.

16. When stacking is enabled, the stacking strategy at the organization level determines how multiple promotions are applied.

When stacking is enabled, the stacking strategy at the organization level determines how multiple promotions are applied.

17. Read-only fields cannot be set in requests but are included in responses.

Read-only fields cannot be set in requests but are included in responses.

18. For tender conditions, CARD type requires an identifier specifying the card network or bank.

For tender conditions, CARD type requires an identifier specifying the card network or bank.

19. The combo product condition is satisfied when ALL individual product conditions in the array are met, creating a bundle or meal-deal type of promotion.

The combo product condition is satisfied when ALL individual product conditions in the array are met, creating a bundle or meal-deal type of promotion.

20. This API is not currently exposed externally.

This API is not currently exposed externally.

21. Validation Rules:Percentage values must be between 0 and 100Amount values must be positive and have up to 2 decimal placesDates must be valid future timestampsPriority values must be unique within a campaignProduct quantities must be positive integers

Validation Rules:

- Percentage values must be between 0 and 100

- Amount values must be positive and have up to 2 decimal places

- Dates must be valid future timestamps

- Priority values must be unique within a campaign

- Product quantities must be positive integers

27. Error Handling:Invalid combinations of conditions and actions will return a 400 Bad RequestMissing required fields will return a 400 Bad RequestInvalid parameter values will return a 400 Bad RequestSystem errors will return a 500 Internal Server Error

Error Handling:

- Invalid combinations of conditions and actions will return a 400 Bad Request

- Missing required fields will return a 400 Bad Request

- Invalid parameter values will return a 400 Bad Request

- System errors will return a 500 Internal Server Error

# Promotion API Parameters

## Basic Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| Basic Promotion Info |  |  |

| name* | string | Unique name for this cart promotion (max 50 characters). |

| orgId* | long | Your organization's ID number. |

| priority* | int | Sets which cart promotions is applied first (higher number = higher priority). Default is 0. |

| active* | boolean | Turns cart promotion on (true) or off (false). Inactive promotions don't apply even if conditions match. |

| messageLabel* | string | Text shown to customers when cart promotion applies, like "Holiday Sale 25% Off". |

| type* | enum | Cart promotion context:POS(in-store),CODE(discount code),CUSTOMER(specific customers),EARNING(points),REWARD(redeeming). |

| startDate* | long | Start time in epoch Time Stamp.  Cart promotion won't work before this time. |

| endDate* | long | End time in milliseconds since epoch. Cart promotion stops working after this time. |

| campaignId | long | Links this Cart promotion to a marketing campaign. |

| Metadata |  |  |

| createdBy | long | ID of creator. |

| createdOn | long | Creation time in epoch Time-Stamp. |

| lastUpdatedBy | long | ID of last editor. |

| lastUpdatedOn | long | Last update time in epoch Time-Stamp. |

| Customer Settings |  |  |

| customerActivationRequired | boolean | Iftrue, customers must enable this cart promotion manually. Default isfalse. |

| isLoyaltyOnly* | boolean | Iftrue, only loyalty program members can use this cart promotion. |

| mode* | enum | Basic promotion type:DISCOUNT(cheaper price) orREWARD(get a reward). |

| maxIssuancePerCustomer* | int | How many times each customer can use this cart promotion (-1 means unlimited, max is 50). Default is 1. |

| isStackable* | boolean | Iftrue, works with other cart promotions on same item. Default isfalse. |

| expiryDateChangeJobList | array | Scheduled tasks that update cart promotion end dates. |

| Custom Fields |  |  |

| customFieldValues | object | Extra data fields for your business needs. |



`true`

`false`

`POS`

`CODE`

`CUSTOMER`

`EARNING`

`REWARD`

`true`

`false`

`true`

`DISCOUNT`

`REWARD`

`true`

`false`

## Condition Types

| type* | Description |

| --- | --- |

| CART | Based on cart total or item count. Examples: "Spend $50 get $10 off" or "Buy 3 items get 15% off" |

| PRODUCT | Based on specific products. Example: "25% off all shoes" |

| COMBO_PRODUCT | Requires buying certain products together. Example: "Buy burger and fries, get free drink" |

| TENDER | Based on payment method. Example: "10% off when paying with VISA" |



## Cart Condition Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| kpi* | enum | What value is to be measured to issue cart promotion:SUBTOTAL(cart value) orITEMCOUNT(number of items) |

| operator* | enum | How to compare:EQUALS,GREATER_THAN,GREATER_THAN_OR_EQUAL,LESS_THAN,LESS_THAN_OR_EQUAL |

| value* | decimal | The target amount or count (like $50 minimum spend). Must be positive, up to 2 decimal places. |



`SUBTOTAL`

`ITEMCOUNT`

`EQUALS`

`GREATER_THAN`

`GREATER_THAN_OR_EQUAL`

`LESS_THAN`

`LESS_THAN_OR_EQUAL`

## Product Condition Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| kpi* | enum | What to measure:AMOUNT(product value),QUANTITY(item count), orNONE(just check if present) |

| operator* | enum | How to compare:EQUALS,GREATER_THAN,GREATER_THAN_OR_EQUAL,LESS_THAN,LESS_THAN_OR_EQUAL |

| value* | decimal | The target amount, count, or size needed |

| criteriaList* | array | Rules for which products count. Can filter by SKU, CATEGORY, BRAND, TAG, ATTRIBUTE. (See Entity Types section for details) |



`AMOUNT`

`QUANTITY`

`NONE`

`EQUALS`

`GREATER_THAN`

`GREATER_THAN_OR_EQUAL`

`LESS_THAN`

`LESS_THAN_OR_EQUAL`

## Combo Product Condition Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| productConditions* | array | List of products required in the cart for promotion to work. |



Each item in the productConditions array has the following structure:

| Parameter | Data Type | Description |

| --- | --- | --- |

| criteriaList* | array | Rules for which products count for this part of the combo. |

| kpi* | enum | What to measure:QUANTITY(item count) orAMOUNT(product value). |

| value* | decimal | How many or how much is required for the criteria to be fullfilled. |

| operator* | enum | How to compare (EQUALSorGREATER_THAN_OR_EQUAL). |



`QUANTITY`

`AMOUNT`

`EQUALS`

`GREATER_THAN_OR_EQUAL`

## Tender Condition Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| type* | enum | Payment type:CARD(credit/debit cards),CASH, orPAYMENT_VOUCHER(gift cards) |

| identifier* | string | Specific payment method code (like "VISA", "NETS"). Required for card payments. |

| condition | object | Optional nested condition for additional rules (e.g., product conditions for card type) |



`CARD`

`CASH`

`PAYMENT_VOUCHER`

## Action Types

| type* | Description |

| --- | --- |

| FIXED_PRICE | Sets exact price for items. Example: "Any pizza for $5" |

| CART_BASED | Applies to entire cart. Example: "10% off everything" |

| PRODUCT_BASED | Applies to specific items. Example: "30% off selected shirts" |

| FREE_PRODUCT | Gives free items. Example: "Buy one, get one free" |

| TENDER | Discount for payment method. Example: "5% off with store credit card" |

| PER_UNIT | Discount per unit. Example: "50¢ off per gallon" |



## Cart-Based Action Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| type* | enum | Discount type:PERCENTAGE(% off) orABSOLUTE(fixed amount off) |

| value* | decimal | Discount amount: for percentage (0-100) or actual money amount |



`PERCENTAGE`

`ABSOLUTE`

## Product-Based Action Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| type* | enum | Discount type:PERCENTAGE(% off) orABSOLUTE(fixed amount off) |

| value* | decimal | Discount amount: for percentage (0-100) or actual money amount |

| includeItemsFromConditionSet | boolean | Iftrue, discount applies to trigger items. Iffalse(default), can discount different items. |

| productBasedCondition* | object | Specifies which items get discounted if different from trigger items. |



`PERCENTAGE`

`ABSOLUTE`

`true`

`false`

## Product-Based Condition Structure

| Parameter | Data Type | Description |

| --- | --- | --- |

| type* | enum | Condition type:PRODUCT,CART, orCOMBO_PRODUCT |

| productCondition* | object | Product rules when type isPRODUCT |

| cartCondition* | object | Cart rules when type isCART |

| comboProductCondition* | object | Combo product rules when type isCOMBO_PRODUCT |



`PRODUCT`

`CART`

`COMBO_PRODUCT`

`PRODUCT`

`CART`

`COMBO_PRODUCT`

## Tender-Based Action Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| type* | enum | Discount type:PERCENTAGE(% off) orABSOLUTE(fixed amount off) |

| value* | decimal | Discount amount: for percentage (0-100) or actual money amount |



`PERCENTAGE`

`ABSOLUTE`

## Loyalty & Earning Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| loyaltyEarningExpiryDays | int | Days until earned points expire. 0 means never expire. |

| maxEarningPerCustomer | int | Maximum points one customer can earn from this promotion. |

| earningCriteria | object | Rules for calculating points. |

| promotionRestrictions | object | Extra limits on how cart promotion works. |

| earnLimitedToSpecificAudience | boolean | Iftrue, only certain customer groups can earn points. |



`true`

## Additional Criteria Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| timeCriteria | object | Time rules: days of week, hours, holidays when cart promotion works. |

| storeCriteria | object | Store location rules: which stores offer this cart promotion. |

| supplementaryCriteria | object | Extra rules like loyalty tier or program membership. |

| redeemableFromCriteria | object | Rules for when promotion can be used after being earned. |

| ownershipCriteria | object | Rules for who can edit this cart promotion. |



## Communication Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| onEarnCommunicationChannels | object | How to notify customers (SMS, email, app) when they get this promotion. |

| languagesConfigured | array | Languages this promotion supports. |



## Additional KPI Values

| KPI | Description |

| --- | --- |

| NONE | Just checks if products exist in cart, ignores quantity and price. |



## Fixed Price Action Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| value* | decimal | The price customers pay, replacing regular price. |



## Free Product Action Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| productCriteria* | object | Rules for which items can be given for free. |

| quantity* | decimal | How many free items to give. |



## Per Unit Action Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| type* | enum | Discount type:PERCENTAGE(% off) orABSOLUTE(fixed amount off) |

| value* | decimal | Discount per unit: percentage or amount per unit |

| unitType | enum | Unit type:EACH,LITER,GALLON, etc. |



`PERCENTAGE`

`ABSOLUTE`

`EACH`

`LITER`

`GALLON`

## Entity Types for Product Selection

| Entity | Description | Additional Parameters |

| --- | --- | --- |

| SKU | Product code | None |

| CATEGORY | Product group or department | None |

| BRAND | Manufacturer or brand name | None |

| TAG | Custom product tag | None |

| ATTRIBUTE | Product feature (size, color, etc.) | attributeName: Required string specifying the feature to check |



`attributeName`

## Common Operator Values

| Operator | Description |

| --- | --- |

| EQUALS | Value must exactly match the specified amount |

| GREATER_THAN | Value must be strictly greater than the specified amount |

| GREATER_THAN_OR_EQUAL | Value must be greater than or equal to the specified amount |

| LESS_THAN | Value must be strictly less than the specified amount |

| LESS_THAN_OR_EQUAL | Value must be less than or equal to the specified amount |

| NONE | No comparison needed. Used with KPI NONE. |



## List Operator Values

| Operator | Description |

| --- | --- |

| IN | Value must be in the specified list |

| NOT_IN | Value must not be in the specified list |



`Try It!`