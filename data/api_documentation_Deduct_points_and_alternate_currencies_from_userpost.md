# Deduct points and alternate currencies from userpost

This API allows you to deduct reward currencies (points or alternate currencies) from a user. It is also referred to as theManual Points Adjustment API.

`Manual Points Adjustment API`

Additionally, you can raise a request to enable configurationALLOW_NEGATIVE_BALANCE_ON_RETURNthat support negative points. For example, if the negative points configuration is enabled and the currently available points for a customer is 0, you can still deduct 100 points from a customer.

`ALLOW_NEGATIVE_BALANCE_ON_RETURN`

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Access to Points access group resource. For more information, seeaccess groupdocumentation.

# Resource information

|  |  |

| --- | --- |

| URI | v2/customers/lookup/negativePointsAdjustment |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eu.api.capillarytech.com/v2/customers/lookup/negativePointsAdjustment?identifierName=mobile&identifierValue=9876543210&source=INSTORE

```
https://eu.api.capillarytech.com/v2/customers/lookup/negativePointsAdjustment?identifierName=mobile&identifierValue=9876543210&source=INSTORE
```

# Request query parameters

| Field name | Data type | Description |

| --- | --- | --- |

| identifierName* | Enum | Identifier of the user. Supported values:externalId,mobile,email |

| identifierValue* | String | Value of the identifier. |

| source* | Enum | Source in which the identifier is available. Supported values:INSTORE,MARTJACK,WECHAT,FACEBOOK,WEB_ENGAGE,INSTORE,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,ALL. |



`externalId`

`mobile`

`email`

`INSTORE`

`MARTJACK`

`WECHAT`

`FACEBOOK`

`WEB_ENGAGE`

`INSTORE`

`TMALL`

`TAOBAO`

`JD`

`ECOMMERCE`

`WEBSITE`

`LINE`

`ALL`

# Request body parameters

| Parameter | Data type | Description |

| --- | --- | --- |

| pointsAwardedId | Integer | Unique ID of the awarded points.NOTES:- Provide thepointsAwardedRefTypealong with thepointsAwardedId.-pointsAwardedIdis an internally generated identifier assigned when points are awarded.  This identifier cannot be retrieved through an API. Raise a ticket to the Capillary product support team to obtain thepointsAwardedId. |

| pointsAwardedRefType | Enum | Reference type for points awarded. Supported values:bill_regular,bill_promotions,line_item_regular,line_item_promotions,customer_promotions |

| promotionId | Integer | Unique identifier for the promotionNOTE:Provide eitherpromotionIdorpromotionIdentifier. |

| promotionIdentifier | string | Identifier for the promotion.NOTE:Provide theprogramIdalong with thepromotionIdentifier. |

| programId | Integer | Unique ID of the loyalty program associated with the promotion. |

| alternateCurrencyName | String | Unique name of the alternate currency.Refer to the documentation onviewing alternate currenciesto identify the alternate currency name. |

| pointCategoryTypes | Enum | Points category to deduct for the user. Supported values:REGULARPROMISEDandEXTERNAL_TRIGGER_BASED.Note:Default value isREGULARif thepointCategoryTypesis not provided.Refer to the documentation for more information onpoints categories. |

| pointsToBeAdjusted* | Integer | Points to be deducted for the user. Provide a value greater than 0. This is applicable for points. |

| valueToBeAdjusted* | Integer | Alternate currencies to be deducted for the user. Provide a value greater than 0. This is applicable for alternate currencies.Provide thealternateCurrencyNamewhen using this parameter. |

| reasonOfReturn* | String | Reason for the return of points. |



`pointsAwardedRefType`

`pointsAwardedId`

`pointsAwardedId`

`pointsAwardedId`

`bill_regular`

`bill_promotions`

`line_item_regular`

`line_item_promotions`

`customer_promotions`

`promotionId`

`promotionIdentifier`

`programId`

`promotionIdentifier`

[viewing alternate currencies](/docs/alternate-currencies#viewing-alternate-currencies)

`REGULAR`

`PROMISED`

`EXTERNAL_TRIGGER_BASED`

`REGULAR`

`pointCategoryTypes`

[points categories](/docs/dimension-tables#points-category)

`alternateCurrencyName`

## Deducting points

```
{
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "100.00",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "100.00",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "pointsAwardedId": 38768508,
    "pointsAwardedRefType": "bill_regular",
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "pointsAwardedId": 38768508,
    "pointsAwardedRefType": "bill_regular",
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "promotionId": 79555,
    "pointsToBeAdjusted": "10",
    "pointCategoryTypes": "REGULAR",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "promotionId": 79555,
    "pointsToBeAdjusted": "10",
    "pointCategoryTypes": "REGULAR",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "promotionIdentifier": "b86ca53f-4c5e-46d3-8d33-b61c4f49392c",
    "programId": 973,
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "promotionIdentifier": "b86ca53f-4c5e-46d3-8d33-b61c4f49392c",
    "programId": 973,
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "programId": 973,
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "programId": 973,
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

## Deducting alternate currencies

```
{
    "pointsAwardedId": 38768508,
    "pointsAwardedRefType": "bill_regular",
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "pointsAwardedId": 38768508,
    "pointsAwardedRefType": "bill_regular",
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "promotionId": 79555,
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "promotionId": 79555,
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "promotionIdentifier": "b86ca53f-4c5e-46d3-8d33-b61c4f49392c",
    "programId": 973,
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "promotionIdentifier": "b86ca53f-4c5e-46d3-8d33-b61c4f49392c",
    "programId": 973,
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "programId": 973,
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

```
{
    "programId": 973,
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```

# Response parameters

| Field name | Description |

| --- | --- |

| status | Status of the operation. Possible values:success: The operation was successful.false: The operation was unsuccessful. |

| pointsAvailable | Points available for the customer after the deduction. |

| valueAvailable | Alternate currencies available for the customer after the deduction. |

| message | Note for the point deduction operation. |

| warnings | Warnings (if any). |



`success`

`false`

```
{
    "status": "success",
    "pointsAvailable": "670.000",
    "message": "points deducted successfully for the user ",
    "warnings": []
}
```

```
{
    "status": "success",
    "pointsAvailable": "670.000",
    "message": "points deducted successfully for the user ",
    "warnings": []
}
```

```
{
    "status": "success",
    "valueAvailable": "80145.500",
    "message": "DocCoin deducted successfully for the user ",
    "warnings": []
}
```

```
{
    "status": "success",
    "valueAvailable": "80145.500",
    "message": "DocCoin deducted successfully for the user ",
    "warnings": []
}
```

# API Error Codes

| Code | Description | Reason |

| --- | --- | --- |

| 8906 | decimal places passed: 3 is greater than the configured round decimals: 2 for programId: 973 | Decimal places are higher than configured decimals for the program. |

| 8003 | Invalid source | Source is invalid or incorrect. |

| 8015 | Customer not found for the given identifiers | Identifier value is invalid or incorrect. |

| 8013 | Lookup,Invalid identifier passed | Type of identifier is invalid or incorrect. |

| 8907 | points to be deducted 101.54 is greater than available points for program and NegativeBalanceOnReturn config is disabled for org. | Points to deduct is higher than the available points balance. |

| 8888 | Points to be adjusted cannot be zero | Points to deduct is zero. |

| 8887 | Provide Program Id with Promotion Identifier | programIdis not provided along with thepromotionIdentifier |

| 8874 | promotion id passed is invalid | promotionIdprovided is invalid or incorrect. |

| 8877 | points awarded Id passed is invalid | pointsAwardedIdprovided is invalid or incorrect. |

| 9975 | Points awarded ref type is invalid | pointsAwardedRefTypeprovided is invalid or incorrect. |

| 8911 | No alternate currency with name coins found for programId in org | alternateCurrencyNameprovided is invalid or incorrect. |

| 8882 | Reason for adjustment cannot be null | Reason for return is not provided. |

| 1218 | Customer not enrolled in loyalty program : customer not found forprogramId97 | Customer is not enrolled in the loyalty program or theprogramIdis invalid or incorrect. |



`programId`

`promotionIdentifier`

`promotionId`

`pointsAwardedId`

`pointsAwardedRefType`

`alternateCurrencyName`

`programId`

`programId`

`Try It!`