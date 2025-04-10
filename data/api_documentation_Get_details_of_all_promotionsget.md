# Get details of all promotionsget

This API lists and provides details of all the promotions available in the org. This includes the types of promotions, point and redemption restriction details, start and end dates, activation status etc, ranking and stacking information.

By default, the types of promotions, ranking and stacking are not available for all the orgs. This needs to be enabled separately. For more details on the types of promotions, referTypes of promotions.

## Types of promotions

There are three different types of promotions:

- GENERIC (UI term - Available without issue)

- LOYALTY (UI term - Direct issue)

- LOYALTY_EARNING (UI term - Enrol & Issue)

The fieldpointsOfferTypein the response provides information on the type of promotion.

`pointsOfferType`

## Limits and restrictions

If theTypes of promotionsis enabled for your organisation, then the information regarding the limits and restrictions on issual, earning, or redemption is available in the objectpromotionRestriction. This information is also replicated in thelimitsandcustomerUsageobjects.

# API endpoint example

'https://eucrm.cc.capillarytech.com/api_gateway/loyalty/v1/programs/promotions/list?limit=5&offset=1

# Prerequisites

- Authentication: Basic or OAuth authentication

- Access group resource: Read access to customer group resource

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/loyalty/v1/programs/promotions/list |

| HTTP method | GET |

| Pagination supported? | Yes |

| Rate limit | NA |

| Batch support | No |



# Query Parameters

| Parameter(Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| limit* | Integer | Number of entries in a page. |

| offset* | Integer | Page number you want to fetch. |

| program | Long | Program ID  associated with the promotion. |

| status | Enum | Status of promotion. Valid values are COMPLETED, LIVE, UPCOMING, INACTIVE. |

| activity | Enum | Event name for promotion. Valid values re CustomerRegistration, CustomerUpdate, GenericEvent, NewBill, PointsContributionToGroup, PointsTransfer, ReturnBill,TargetCompleted, TransactionAdd, ALL. |

| startDate | String | Start date of the promotion in  ISO8601 format. Example: 2024-04-04T00:00Z |

| endDate | String | End date of promotion in  ISO8601 format. Example: 2024-04-27T23:59:59Z |

| promotionName | String | Name of the promotion. In case you want to fetch data of a specific promotion. |



Note: startDate and endDate must appear in pairs.

```
https://eucrm.cc.capillarytech.com/api_gateway/loyalty/v1/programs/promotions/list?limit=5&offset=1
```

```
https://eucrm.cc.capillarytech.com/api_gateway/loyalty/v1/programs/promotions/list?limit=5&offset=1
```

# Response Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| status | Object | An object containing the status code and message of the response. |

| code | Integer | The status code indicating the result of the request. |

| message | String | A message providing additional information about the status. |

| validationErrors | Object | An object containing validation errors, if any. |

| data | Object | An object containing promotion data retrieved from the request. |

| id | Long | The ID of the promotion. |

| name | String | The name of the promotion. |

| description | String | The description of the promotion. |

| promotionStatus | String | The status of the promotion. Values are COMPLETED, LIVE, UPCOMING, or INACTIVE |

| lastUpdateDate | String (Date) | The date and time when the promotion was last updated. |

| lastUpdatedBy | Integer | The ID of the user who last updated the promotion. |

| programName | String | The name of the program associated with the promotion. |

| promotionType | String | Identifies where the promotion is applied, if it's customer level promotion or transaction level promotion. |

| programId | Long | The ID of the program associated with the promotion. |

| startDate | String (Date) | The start date and time of the promotion. |

| endDate | String (Date) | The end date and time of the promotion. |

| identifier | String | Universally unique identifier of the promotion. |

| isActive | Boolean | Indicates if the promotion is currently active. |

| eventName | String | The name of the event associated with the promotion. |

| pointsOfferType | String | The type of promotion. The types of promotion are GENERIC, LOYALTY, and LOYALTY_EARNING. |

| promotionRestrictions | Object | An object containing various restrictions associated with the promotion. |

| restrictions | Object | An object containing different types of restrictions. |

| redemptionRestrictions | Object | An object containing the data on redemptions restrictions. |

| name | String | The name of the restriction. The values are MAX_ALLOWED_POINTS_PER_EVENT, MAX_ALLOWED_TIMES_PER_CUSTOMER, MAX_ALLOWED_POINTS_PER_CUSTOMER, MAX_ALLOWED_TIMES_PER_PROMOTION, MAX_ALLOWED_POINTS_PER_PROMOTION, or MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER. |

| value | Integer | The value associated with the restriction. |

| type | String | The type of restriction. The values are NON_PERIOD_BASED or PERIOD_BASED. |

| periodType | String | The type of period for the restriction. The value is MOVING_WINDOW. |

| periodUnit | String | The unit of the period for the restriction. The values are DAILY, WEEKLY or MONTHLY. |

| issualRestrictions | Object | The object containing the restrictions on promotion issual. |

| earnRestrictions | Object | The object containing the restrictions to earn points for a promotion. |

| expiryRestrictions | Object | The object containing the restrictions to the expiration of points earned. |

| scope | String | The scope of the promotion. |

| isStackable | Boolean | Indicates if the promotion is stackable. |

| isConsideredForRanking | Boolean | Indicates if the promotion is considered for ranking. |

| loyaltyEarningType | String | The type of loyalty earning associated with the promotion. |

| expiryReminder | Object | An object containing details about expiry reminders. |

| isExclusive | Boolean | Indicates if the promotion is exclusive. |

| isAlwaysApply | Boolean | Indicates if the promotion is always applied. |

| pageDetails | Object | An object containing details about the pagination of the response. |

| pageNumber | Integer | The current page number. |

| pageSize | Integer | The number of entries per page. |

| totalEntries | Integer | The total number of entries. |

| pageCount | Integer | The total number of pages in the response. |



```
{
    "status": {
        "code": 200,
        "message": "success"
    },
    "validationErrors": null,
    "data": [
        {
            "id": 56796,
            "name": "Happyhour",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-16T07:39:05Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "BILL",
            "programId": 469,
            "startDate": "2024-04-04T00:00Z",
            "endDate": "2024-04-27T23:59:59Z",
            "identifier": "d32dd076-67b2-4b15-b52d-83f9c4785589",
            "isActive": false,
            "eventName": "TRANSACTIONADD",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        },
        {
            "id": 56783,
            "name": "Update Profile",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-08T07:55:10Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "CUSTOMER",
            "programId": 469,
            "startDate": "2024-04-04T00:00Z",
            "endDate": "2024-04-30T23:59:59Z",
            "identifier": "c4576641-cce4-475a-aae5-fd2236b2d631",
            "isActive": false,
            "eventName": "CUSTOMERREGISTRATION",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        },
        {
            "id": 56782,
            "name": "Specificstores",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-08T07:55:32Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "BILL",
            "programId": 469,
            "startDate": "2024-04-04T00:00Z",
            "endDate": "2024-04-30T23:59:59Z",
            "identifier": "69511a30-b828-485c-9d7a-7a92b4e30bcf",
            "isActive": false,
            "eventName": "TRANSACTIONADD",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        },
        {
            "id": 56747,
            "name": "Accumulatepoints",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-16T07:39:36Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "CUSTOMER",
            "programId": 469,
            "startDate": "2024-04-03T00:00Z",
            "endDate": "2024-04-30T23:59:59Z",
            "identifier": "95010c0f-4177-45f4-9888-82d43d42a672",
            "isActive": false,
            "eventName": "TARGETCOMPLETED",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        },
        {
            "id": 56746,
            "name": "Trackredeem1",
            "description": "Promotion Description",
            "promotionStatus": "COMPLETED",
            "lastUpdateDate": "2024-04-03T11:22:50Z",
            "lastUpdatedBy": 75009908,
            "programName": "Default Program",
            "promotionType": "CUSTOMER",
            "programId": 469,
            "startDate": "2024-04-03T00:00Z",
            "endDate": "2024-04-10T23:59:59Z",
            "identifier": "01a833e1-60e1-45d7-84bc-ba9154d4f86a",
            "isActive": true,
            "eventName": "TARGETCOMPLETED",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        }
    ],
    "pageDetails": {
        "pageNumber": 1,
        "pageSize": 5,
        "totalEntries": 88,
        "pageCount": 18
    }
}
```

```
{
    "status": {
        "code": 200,
        "message": "success"
    },
    "validationErrors": null,
    "data": [
        {
            "id": 56796,
            "name": "Happyhour",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-16T07:39:05Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "BILL",
            "programId": 469,
            "startDate": "2024-04-04T00:00Z",
            "endDate": "2024-04-27T23:59:59Z",
            "identifier": "d32dd076-67b2-4b15-b52d-83f9c4785589",
            "isActive": false,
            "eventName": "TRANSACTIONADD",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        },
        {
            "id": 56783,
            "name": "Update Profile",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-08T07:55:10Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "CUSTOMER",
            "programId": 469,
            "startDate": "2024-04-04T00:00Z",
            "endDate": "2024-04-30T23:59:59Z",
            "identifier": "c4576641-cce4-475a-aae5-fd2236b2d631",
            "isActive": false,
            "eventName": "CUSTOMERREGISTRATION",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        },
        {
            "id": 56782,
            "name": "Specificstores",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-08T07:55:32Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "BILL",
            "programId": 469,
            "startDate": "2024-04-04T00:00Z",
            "endDate": "2024-04-30T23:59:59Z",
            "identifier": "69511a30-b828-485c-9d7a-7a92b4e30bcf",
            "isActive": false,
            "eventName": "TRANSACTIONADD",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        },
        {
            "id": 56747,
            "name": "Accumulatepoints",
            "description": "Promotion Description",
            "promotionStatus": "INACTIVE",
            "lastUpdateDate": "2024-04-16T07:39:36Z",
            "lastUpdatedBy": 606249,
            "programName": "Default Program",
            "promotionType": "CUSTOMER",
            "programId": 469,
            "startDate": "2024-04-03T00:00Z",
            "endDate": "2024-04-30T23:59:59Z",
            "identifier": "95010c0f-4177-45f4-9888-82d43d42a672",
            "isActive": false,
            "eventName": "TARGETCOMPLETED",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        },
        {
            "id": 56746,
            "name": "Trackredeem1",
            "description": "Promotion Description",
            "promotionStatus": "COMPLETED",
            "lastUpdateDate": "2024-04-03T11:22:50Z",
            "lastUpdatedBy": 75009908,
            "programName": "Default Program",
            "promotionType": "CUSTOMER",
            "programId": 469,
            "startDate": "2024-04-03T00:00Z",
            "endDate": "2024-04-10T23:59:59Z",
            "identifier": "01a833e1-60e1-45d7-84bc-ba9154d4f86a",
            "isActive": true,
            "eventName": "TARGETCOMPLETED",
            "pointsOfferType": "GENERIC",
            "promotionRestrictions": {
                "restrictions": {
                    "redemptionRestrictions": [
                        {
                            "name": "MAX_REDEMPTIONS_PER_EARN_PER_CUSTOMER",
                            "value": 100,
                            "type": "NON_PERIOD_BASED",
                            "periodType": null,
                            "periodUnit": null
                        }
                    ],
                    "issualRestrictions": [],
                    "earnRestrictions": [],
                    "expiryRestrictions": []
                },
                "scope": null,
                "isStackable": false,
                "isConsideredForRanking": false,
                "loyaltyEarningType": null,
                "expiryReminder": null,
                "isExclusive": false,
                "isAlwaysApply": false
            }
        }
    ],
    "pageDetails": {
        "pageNumber": 1,
        "pageSize": 5,
        "totalEntries": 88,
        "pageCount": 18
    }
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 4054 | Offset or limit missing. |

| 4053 | Start date or end date missing. |

| 4057 | Start date or end date not in the correct format. |

| 2010 | Program ID incorrect. |



`Try It!`