# Create Vendor Redemptionpost

Vendor Redemption API enables a brand to interact with third-party vendor systems for redeeming rewards.Example: The brand wants to issue a gift card through a third-party vendor, ABC. This API provides the necessary details to the ABC vendor to process the reward redemption.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | api_gateway/rewards/core/v1/vendor/redemption/create |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/vendor/redemption/create

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/vendor/redemption/create
```

# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| brandId* | Integer | Unique ID of the brand. |

| vendorId* | String | Unique ID of the vendor. |

| name* | String | Name defined by the brand for the vendor reward. |

| redemptionType* | Enum | Specifies the method by which the customer can redeem rewards.Supported values: GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC.VENDOR_ONLY_REWARD:  These are either points or coupons created at the vendor end.VENDOR_INTOUCH_REWARD: These are vendor rewards created at the Capillary end.It is not recommended to use theVendor Intouch rewardredemption type. Instead, you can use theVendor onlyreward redemption type to issue coupons directly through the vendor API. You can find more informationhere.For example, "MILES" indicates that the customer can use miles accumulated through the loyalty program for redemption against payment or points. |

| action | Object | Specifies the Name, Endpoint URL, API Type, API Headers and the API Body of the internal API that executes a specific action. |

| name | String | The name of the action to be executed. |

| execOrder | Integer | The execution order of the action. |

| apiUrl | String | The URL to which the API request is made. For example, "apiUrl": "https://partial.com/reward/issue"specifies the endpoint where the request to issue a reward will be made. |

| apiType | String | The HTTP method to be used for the API request. |

| apiHeaders | Object | An object containing the headers to be sent with the API request. |

| accept | String | The accept header indicating the expected response format . |

| Content-Type | String | The content type header indicating the format of the request body. |

| Authorization | String | The authorization header containing the authentication credentials. |

| apiBody | String | The API body for the external API endpoint specified in “apiUrl”. You can also include custom fields, fulfilment status and reward transaction ID. The fulfilment status and the reward transaction ID are variables resolved in the backend according to the associated transaction.-Custom Field: Enables brands to add additional data in the API request. Use the formatcustomfield_customFieldName. For example, a custom field named "Address: Bangalore" should be written as customfield_Address then it will replace the value of custom field with Bangalore.Note:Only custom field created withISSUE REWARDscope is supported.-Fulfillment Status:Enables to update the fulfilment status. Use the parameter fulfillmentStatus, formatted in camelCase.-Reward Transaction ID: Enables to add the reward transaction ID. This helps the vendor to identify the transaction associated with the issued reward.  Use the parameter rewardTransactionId, formatted in camelCase.NOTE:- The API body supports other parameters that can be included based on the brand's specific requirements or integration needs.- Internal Capillary APIs can also be used. |

| root | Object | The root object of the JSON body. |

| request | Array of Objects | An array of request objects. |

| customer | Object | An object containing customer details. |

| mobile | String | The mobile number of the customer. |

| comments | String | Comments or notes related to the API service request. |

| reason | String | The reason for issuing goodwill points. |

| type | String | The type of the request. |

| base_type | String | The base type of the points. |

| points | String | The number of points to be awarded. |

| contextKeys | Object | An object containing context keys for extracting values from the response. |

| voucher | String | The context key for extracting the voucher ID from the response. |

| lastUpdatedOnDateTime | String | Last Updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |



`Vendor Intouch reward`

`Vendor only`

[here](/docs/rewards-catalog#how-to-get-started-and-create-rewards)

[https://partial.com/reward/issue"](https://partial.com/reward/issue%22)

`ISSUE REWARD`

```
{
    "status": {
        "success": true,
        "code": 5012,
        "message": "Vendor redemption created successfully"
    },
    "redemption": {
        "id": 24332,
        "name": "Tiles",
        "redemptionType": "MILES",
        "enabled": true,
        "lastUpdatedOn": null,
        "lastUpdatedOnDateTime": null,
        "actionCount": 1
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 5012,
        "message": "Vendor redemption created successfully"
    },
    "redemption": {
        "id": 24332,
        "name": "Tiles",
        "redemptionType": "MILES",
        "enabled": true,
        "lastUpdatedOn": null,
        "lastUpdatedOnDateTime": null,
        "actionCount": 1
    }
}
```

```
{
  "vendorId" : 1,
  "brandId" : 1,
  "enabled" : true,
  "redemptionType" : "VENDOR_ONLY_REWARD",
  "name" : "Vendor Redemption",
  "responseKeys" : [ "status", "voucher" ],
  "actions" : [ {
    "name" : "Action",
    "enabled" : true,
    "apiType" : "POST",
    "apiUrl" : "https://partial.com/coupon/issue",
    "apiBody" : "{\"transactionId_property\": \"${rewardTransactionId}\",\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
    "execOrder" : 1,
    "retryAction" : false,
    "contextKeys" : {
      "voucher" : "response.coupon.code",
      "status" : "response.status"
    },
    "apiHeaders" : {
      "accept" : "application/json"
    }
  } ]
}
```

```
{
  "vendorId" : 1,
  "brandId" : 1,
  "enabled" : true,
  "redemptionType" : "VENDOR_ONLY_REWARD",
  "name" : "Vendor Redemption",
  "responseKeys" : [ "status", "voucher" ],
  "actions" : [ {
    "name" : "Action",
    "enabled" : true,
    "apiType" : "POST",
    "apiUrl" : "https://partial.com/coupon/issue",
    "apiBody" : "{\"transactionId_property\": \"${rewardTransactionId}\",\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
    "execOrder" : 1,
    "retryAction" : false,
    "contextKeys" : {
      "voucher" : "response.coupon.code",
      "status" : "response.status"
    },
    "apiHeaders" : {
      "accept" : "application/json"
    }
  } ]
}
```

# Response parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| success | Boolean | Indicates whether the API call was successful or not. |

| code | Integer | The code associated with the response. |

| message | String | A message providing details about the response. |

| id | Integer | The unique identifier for the redemption object. |

| name | String | The name associated with the redemption object. |

| redemptionType | Enum | The type of redemption. |

| enabled | Boolean | Indicates whether the redemption is currently enabled. |

| lastUpdatedOn | Null | The last update timestamp of the redemption object. |

| actionCount | Integer | The count of the number of redemptions. |



```
{
    "status": {
        "success": true,
        "code": 5012,
        "message": "Vendor redemption created successfully"
    },
    "redemption": {
        "id": 5666,
        "name": "Miles",
        "redemptionType": "MILES",
        "enabled": true,
        "lastUpdatedOn": null,
        "actionCount": 1
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 5012,
        "message": "Vendor redemption created successfully"
    },
    "redemption": {
        "id": 5666,
        "name": "Miles",
        "redemptionType": "MILES",
        "enabled": true,
        "lastUpdatedOn": null,
        "actionCount": 1
    }
}
```

`Try It!`