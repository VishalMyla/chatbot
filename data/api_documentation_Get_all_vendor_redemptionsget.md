# Get all vendor redemptionsget

This API is used to retrieve Vendor Redemption details. You can specify either a particular vendor or a reward type to filter the redemption details

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# API Specification

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/vendor/redemptions |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/redemptions?page=0&size=3&vendorIds=36,32&order=ASC&sortOn=LAST_UPDATED_ON&redemptionType=SWEEPSTAKES

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/redemptions?page=0&size=3&vendorIds=36,32&order=ASC&sortOn=LAST_UPDATED_ON&redemptionType=SWEEPSTAKES
```

# Request query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| size | Integer | Size of the page |

| page | Integer | The maximum number of results that should be displayed. |

| vendorId | Integer | A collection of identifiers for vendors associated with the reward. Multiple vendorIds are supported by a comma (",").For example:VendorId=36,32. There is no specific limit on the number of vendorIds. |

| redemptionType | Enum | Specifies the category of reward redemption available, it indicates how users can redeem the reward.Supported values:GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC. |

| order | Boolean | Order of the results in ascending or descending order.Supported values:ASC,DESC. It can be null. Default is set to ASC. |

| sortOn | Enum | Sorting based on LAST_UPDATED_ON.Supported value:LAST_UPDATED_ON. It can be null. |



`VendorId=36,32`

```
GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC
```

`ASC`

`DESC`

`LAST_UPDATED_ON`

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/redemptions?page=0&size=3&vendorIds=36,32&order=ASC&sortOn=LAST_UPDATED_ON&redemptionType=SWEEPSTAKES
```

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/redemptions?page=0&size=3&vendorIds=36,32&order=ASC&sortOn=LAST_UPDATED_ON&redemptionType=SWEEPSTAKES
```

# Response parameters

| Parameter Name | Description |

| --- | --- |

| status | Contains the status details of the vendor redemption fetch. |

| success | Indicates if the request was successful. |

| code | Status code of the response. |

| message | Message describing the status of the response. |

| redemptionList | List of vendor redemptions fetched in the response. |

| id | Unique ID of the vendor redemption. |

| name | Name of the vendor redemption. |

| enabled | Indicates if the vendor redemption is enabled. |

| responseKeys | responseKeys are the specific details we need from a vendor's response after an API call. For example, if the vendor returns multiple fields like id, status, and code, we only pick the important ones, like code and id, for our use. |

| lastUpdatedOn | Last updated date and time in Epoch time format. |

| lastUpdatedOnDateTime | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| redemptionActionList | List of redemption actions. You can specifyredemptionActionusingCreate Vendor Redemption. |

| pagingDetails | Paging details of the vendor redemption list response. |



`redemptionAction`

[Create Vendor Redemption](/reference/create-vendor-redemption)

```
{
    "status": {
        "success": true,
        "code": 5011,
        "message": "Vendor redemption fetched successfully"
    },
    "redemptionList": [
        {
            "id": 24332,
            "name": "Tiles",
            "enabled": true,
            "responseKeys": [
                "voucher"
            ],
            "lastUpdatedOn": 1742190746000,
            "lastUpdatedOnDateTime": "2025-03-17T05:52:26Z",
            "redemptionType": "MILES",
            "redemptionActionList": [
                {
                    "id": 20418,
                    "name": "add good will points",
                    "enabled": true,
                    "apiType": "POST",
                    "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                    "apiHeaders": {
                        "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.requests.request.get(0).id"
                    },
                    "retryAction": false
                }
            ]
        }
    ],
    "pagingDetails": {
        "last": true,
        "totalElements": 1,
        "totalPages": 1,
        "numberOfElements": 1,
        "first": true,
        "size": 3,
        "number": 0
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 5011,
        "message": "Vendor redemption fetched successfully"
    },
    "redemptionList": [
        {
            "id": 24332,
            "name": "Tiles",
            "enabled": true,
            "responseKeys": [
                "voucher"
            ],
            "lastUpdatedOn": 1742190746000,
            "lastUpdatedOnDateTime": "2025-03-17T05:52:26Z",
            "redemptionType": "MILES",
            "redemptionActionList": [
                {
                    "id": 20418,
                    "name": "add good will points",
                    "enabled": true,
                    "apiType": "POST",
                    "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                    "apiHeaders": {
                        "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                    "execOrder": 1,
                    "contextKeys": {
                        "voucher": "response.requests.request.get(0).id"
                    },
                    "retryAction": false
                }
            ]
        }
    ],
    "pagingDetails": {
        "last": true,
        "totalElements": 1,
        "totalPages": 1,
        "numberOfElements": 1,
        "first": true,
        "size": 3,
        "number": 0
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 8000,
        "message": "Unable to fetch as Page number and size is invalid"
    },
    "redemptionList": null,
    "pagingDetails": null
}
```

```
{
    "status": {
        "success": false,
        "code": 8000,
        "message": "Unable to fetch as Page number and size is invalid"
    },
    "redemptionList": null,
    "pagingDetails": null
}
```

```
{
    "status": {
        "success": false,
        "code": 2110,
        "message": "Invalid redemption(reward) type"
    },
    "redemptionList": null,
    "pagingDetails": null
}
```

```
{
    "status": {
        "success": false,
        "code": 2110,
        "message": "Invalid redemption(reward) type"
    },
    "redemptionList": null,
    "pagingDetails": null
}
```

# API-specific error codes

| Error Code | Description |

| --- | --- |

| 8000 | Unable to fetch as Page number and size is invalid |

| 2110 | Invalid redemption type |



`Try It!`