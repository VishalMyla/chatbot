# Get all brand rewards using Brand IDget

This API is used to retrieve list of rewards owned by brands based on filters.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | api_gateway/rewards/core/v1/reward/list/brand/{BrandID} |

| HTTP Method | GET |

| Pagination | Yes Default - 100 |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/list/brand/1?page=0&size=20&redemptionType=MILES&rewardName=gold&vendorIds=18,19

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/list/brand/1?page=0&size=20&redemptionType=MILES&rewardName=gold&vendorIds=18,19
```

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| brandId* | String | Unique identifier of the brand. |



# Request query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| Page | Integer | Allows to retrieve details of a specific page. |

| Size | Long | Results to show per page. Default - 100 |

| ownerType | Enum | Module for which the reward was created. OnlyoneownerType can be used as a filter.Supported values:Loyalty program, Milestones, Campaigns, Journeys, Goodwill. |

| ownerId | String | Unique identifier of the owner to claim the reward. |

| startDate | Long | Start date of the reward. Any rewards between the specified start and end date will be displayed. If either the start or end date falls within the timeline, the reward will still be included in the response. If the start date is used as a filter, the end date must also be specified, and vice versa. Format forstartDateis in epoch. |

| endDate | Long | End date of the reward. Any rewards between the specified start and end date will be displayed. If either the start or end date falls within the timeline, the reward will still be included in the response. Format forendDateis in epoch. |

| rewardStatus | Enum | Indicates the current state of the reward. OnlyonerewardStatus can be used as a filter. Supported values:LIVE:The reward is currently available for redemption.UPCOMING:The reward will be available in the future.ENDED:The reward is no longer available. |

| vendorId | Integer | A collection of identifiers for vendors associated with the reward. Multiple vendorIds are supported by a comma (",").For example:VendorId=36,32. There is no specific limit on the number of vendorId. |

| redemptionType | Enum | Specifies the category of reward redemption available. It indicates how users can redeem the reward. OnlyoneredemptionType can be used as a filter.Supported values:GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC. |

| rewardName | String | The name of the reward which was created.rewardNamesupports Partial Search. Users can search for a reward using part of its name, and results that match the partial input will be returned.For example:Searching for "Gold" could return "Gold Star Reward" or "Golden Points". |

| enabled | Boolean | A boolean indicating whether the reward is currently active or inactive for users. |

| language | Enum | Filters the response based on the reward language. Use this parameter to retrieve rewards in a specific language. For example, to display rewards in English, set the parameter toen |



```
Loyalty program, Milestones, Campaigns, Journeys, Goodwill
```

`startDate`

`endDate`

`VendorId=36,32`

```
GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC
```

`rewardName`

`en`

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/list/brand/1?page=0&size=20&startDate=1727254620000&endDate=1752244980000&rewardType=CHARITY&rewardStatus=LIVE
```

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/list/brand/1?page=0&size=20&startDate=1727254620000&endDate=1752244980000&rewardType=CHARITY&rewardStatus=LIVE
```

# Response parameters

| Parameter | Description |

| --- | --- |

| status | Object containing the status of the reward details |

| success | Indicates if the operation was successful |

| code | Status code of the operation |

| message | Status message |

| rewardList | List of rewards |

| id | Unique identifier of the reward. This is the reward ID which was generated during reward creation. |

| name | Name of the reward |

| startTime | Start time of the reward availability |

| startDateTime | Start date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| endTime | End time of the reward availability |

| endDateTime | End date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| type | Type of the reward. |

| priority | Priority of the reward |

| enabled | Indicates if the reward is enabled |

| intouchPoints | Points required for the reward |

| redemptionType | Type of redemption for the reward |

| customFields | Custom fields for additional information |

| status | Indicates the current state of the reward. Example: LIVE, UPCOMING, ENDED |

| intouchSeriesId | Coupon series ID or cart promotion ID when intouch reward is selected. |

| vendorId | Unique ID of the vendor. |

| vendorName | Name of the vendor. |

| vendorRedemptionId | Unique vendor redemption ID which was generated from thisAPI. |

| vendorRedemptionName | Name of the vendor redemption. |

| lastUpdatedOn | Date on which the Reward was last updated in Epoch format . |

| lastUpdatedBy | Identifier of the user who last updated the status |

| owners | List of owners of the reward |

| ownerType | Module for which the reward was created. |

| ownerId | Unique identifier of the owner to claim the reward. |

| pagingDto | The object containing paging details |

| paymentConfigs | The list of payment mode supported by the reward. |

| groups | An array containing information about groups and rewards associated with reward. |

| last | Indicates if it is the last page |

| totalElements | Total number of elements |

| totalPages | Total number of pages |

| numberOfElements | Number of elements in the current page |

| first | Indicates if it is the first page |

| size | The number of items or records returned in a single API response. |

| number | Current page number |



[API](/reference/create-vendor-redemption)

```
{
    "status": {
        "success": true,
        "code": 6101,
        "message": "Reward details fetched successfully"
    },
    "rewardList": [
        {
            "id": 345839,
            "name": "New year tes",
            "startTime": "2025-04-02 10:20:10",
            "startDateTime": "2025-04-02T10:20:10Z",
            "endTime": "2025-04-02 10:25:10",
            "endDateTime": "2025-04-02T10:25:10Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "customFields": {
                "A": "1",
                "CF1233": "1",
                "EnumCF2": "r1",
                "EnumCF1": "white"
            },
            "owners": null,
            "paymentConfigs": [
                {
                    "paymentMode": "FREE",
                    "id": 5717
                }
            ],
            "groups": [],
            "rewardRank": null,
            "status": "ENDED",
            "intouchSeriesId": null,
            "vendorRedemptionId": 13417,
            "vendorRedemptionName": "Delta",
            "vendorId": 21,
            "vendorName": "Delta",
            "lastUpdatedOn": 1743667380000,
            "lastUpdatedOnDateTime": "2025-04-03T08:03:00Z",
            "lastUpdatedBy": 75106389,
            "createdBy": 75106389
        },
        {
            "id": 346323,
            "name": "Go Test fastest",
            "startTime": "2025-04-03 05:29:47",
            "startDateTime": "2025-04-03T05:29:47Z",
            "endTime": "2025-04-03 05:34:47",
            "endDateTime": "2025-04-03T05:34:47Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "customFields": {
                "A": "1",
                "CF1233": "1",
                "EnumCF2": "r1",
                "EnumCF1": "white",
                "CF1": "test"
            },
            "owners": null,
            "paymentConfigs": [
                {
                    "paymentMode": "FREE",
                    "id": 5751
                }
            ],
            "groups": [],
            "rewardRank": null,
            "status": "ENDED",
            "intouchSeriesId": null,
            "vendorRedemptionId": 13417,
            "vendorRedemptionName": "Delta",
            "vendorId": 21,
            "vendorName": "Delta",
            "lastUpdatedOn": 1743666079000,
            "lastUpdatedOnDateTime": "2025-04-03T07:41:19Z",
            "lastUpdatedBy": 75106389,
            "createdBy": 75106389
        }
    ],
    "pagingDto": {
        "last": false,
        "totalElements": 759,
        "totalPages": 380,
        "numberOfElements": 2,
        "first": false,
        "size": 2,
        "number": 2
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 6101,
        "message": "Reward details fetched successfully"
    },
    "rewardList": [
        {
            "id": 345839,
            "name": "New year tes",
            "startTime": "2025-04-02 10:20:10",
            "startDateTime": "2025-04-02T10:20:10Z",
            "endTime": "2025-04-02 10:25:10",
            "endDateTime": "2025-04-02T10:25:10Z",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "customFields": {
                "A": "1",
                "CF1233": "1",
                "EnumCF2": "r1",
                "EnumCF1": "white"
            },
            "owners": null,
            "paymentConfigs": [
                {
                    "paymentMode": "FREE",
                    "id": 5717
                }
            ],
            "groups": [],
            "rewardRank": null,
            "status": "ENDED",
            "intouchSeriesId": null,
            "vendorRedemptionId": 13417,
            "vendorRedemptionName": "Delta",
            "vendorId": 21,
            "vendorName": "Delta",
            "lastUpdatedOn": 1743667380000,
            "lastUpdatedOnDateTime": "2025-04-03T08:03:00Z",
            "lastUpdatedBy": 75106389,
            "createdBy": 75106389
        },
        {
            "id": 346323,
            "name": "Go Test fastest",
            "startTime": "2025-04-03 05:29:47",
            "startDateTime": "2025-04-03T05:29:47Z",
            "endTime": "2025-04-03 05:34:47",
            "endDateTime": "2025-04-03T05:34:47Z",
            "type": "VOUCHER",
            "priority": null,
            "enabled": true,
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "customFields": {
                "A": "1",
                "CF1233": "1",
                "EnumCF2": "r1",
                "EnumCF1": "white",
                "CF1": "test"
            },
            "owners": null,
            "paymentConfigs": [
                {
                    "paymentMode": "FREE",
                    "id": 5751
                }
            ],
            "groups": [],
            "rewardRank": null,
            "status": "ENDED",
            "intouchSeriesId": null,
            "vendorRedemptionId": 13417,
            "vendorRedemptionName": "Delta",
            "vendorId": 21,
            "vendorName": "Delta",
            "lastUpdatedOn": 1743666079000,
            "lastUpdatedOnDateTime": "2025-04-03T07:41:19Z",
            "lastUpdatedBy": 75106389,
            "createdBy": 75106389
        }
    ],
    "pagingDto": {
        "last": false,
        "totalElements": 759,
        "totalPages": 380,
        "numberOfElements": 2,
        "first": false,
        "size": 2,
        "number": 2
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 6101,
        "message": "Reward details fetched successfully"
    },
    "rewardList": [
        {
            "id": 265893,
            "name": "testreward1",
            "startTime": "2024-11-14 06:11:00",
            "endTime": "2025-07-11 14:43:00",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "customFields": {
                "testdate": "2020-01-01 01:01:01",
                "CF1": "Custom field 1"
            },
            "owners": [
                {
                    "ownerType": "LOYALTY_PROGRAM",
                    "ownerId": "469"
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "FREE",
                    "id": 1955
                }
            ],
            "groups": [],
            "rewardRank": 1,
            "status": "LIVE",
            "intouchSeriesId": "415446",
            "vendorRedemptionId": null,
            "vendorRedemptionName": null,
            "vendorId": null,
            "vendorName": null,
            "lastUpdatedOn": 1731564635000,
            "lastUpdatedBy": null
        },
        {
            "id": 265892,
            "name": "testreward1",
            "startTime": "2024-11-14 06:10:00",
            "endTime": "2025-07-11 14:43:00",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "customFields": {
                "testdate": "2020-01-01 01:01:01",
                "CF1": "Custom field 1"
            },
            "owners": [
                {
                    "ownerType": "LOYALTY_PROGRAM",
                    "ownerId": "469"
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 1954,
                    "points": 100.0000
                }
            ],
            "groups": [],
            "rewardRank": 1,
            "status": "LIVE",
            "intouchSeriesId": "415446",
            "vendorRedemptionId": null,
            "vendorRedemptionName": null,
            "vendorId": null,
            "vendorName": null,
            "lastUpdatedOn": 1731564549000,
            "lastUpdatedBy": null
        },
        {
            "id": 265891,
            "name": "testreward1",
            "startTime": "2024-11-14 06:08:00",
            "endTime": "2025-07-11 14:43:00",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "customFields": {
                "testdate": "2020-01-01 01:01:01",
                "CF1": "Custom field 1"
            },
            "owners": [
                {
                    "ownerType": "LOYALTY_PROGRAM",
                    "ownerId": "469"
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 1953,
                    "points": 100.0000
                }
            ],
            "groups": [],
            "rewardRank": 1,
            "status": "LIVE",
            "intouchSeriesId": "415446",
            "vendorRedemptionId": null,
            "vendorRedemptionName": null,
            "vendorId": null,
            "vendorName": null,
            "lastUpdatedOn": 1731564479000,
            "lastUpdatedBy": null
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 3,
        "totalPages": 1,
        "numberOfElements": 3,
        "first": true,
        "size": 20,
        "number": 0
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 6101,
        "message": "Reward details fetched successfully"
    },
    "rewardList": [
        {
            "id": 265893,
            "name": "testreward1",
            "startTime": "2024-11-14 06:11:00",
            "endTime": "2025-07-11 14:43:00",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "customFields": {
                "testdate": "2020-01-01 01:01:01",
                "CF1": "Custom field 1"
            },
            "owners": [
                {
                    "ownerType": "LOYALTY_PROGRAM",
                    "ownerId": "469"
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "FREE",
                    "id": 1955
                }
            ],
            "groups": [],
            "rewardRank": 1,
            "status": "LIVE",
            "intouchSeriesId": "415446",
            "vendorRedemptionId": null,
            "vendorRedemptionName": null,
            "vendorId": null,
            "vendorName": null,
            "lastUpdatedOn": 1731564635000,
            "lastUpdatedBy": null
        },
        {
            "id": 265892,
            "name": "testreward1",
            "startTime": "2024-11-14 06:10:00",
            "endTime": "2025-07-11 14:43:00",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "customFields": {
                "testdate": "2020-01-01 01:01:01",
                "CF1": "Custom field 1"
            },
            "owners": [
                {
                    "ownerType": "LOYALTY_PROGRAM",
                    "ownerId": "469"
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 1954,
                    "points": 100.0000
                }
            ],
            "groups": [],
            "rewardRank": 1,
            "status": "LIVE",
            "intouchSeriesId": "415446",
            "vendorRedemptionId": null,
            "vendorRedemptionName": null,
            "vendorId": null,
            "vendorName": null,
            "lastUpdatedOn": 1731564549000,
            "lastUpdatedBy": null
        },
        {
            "id": 265891,
            "name": "testreward1",
            "startTime": "2024-11-14 06:08:00",
            "endTime": "2025-07-11 14:43:00",
            "type": "VOUCHER",
            "priority": 1,
            "enabled": true,
            "intouchPoints": 500,
            "redemptionType": "INTOUCH_REWARD",
            "customFields": {
                "testdate": "2020-01-01 01:01:01",
                "CF1": "Custom field 1"
            },
            "owners": [
                {
                    "ownerType": "LOYALTY_PROGRAM",
                    "ownerId": "469"
                }
            ],
            "paymentConfigs": [
                {
                    "paymentMode": "POINTS",
                    "id": 1953,
                    "points": 100.0000
                }
            ],
            "groups": [],
            "rewardRank": 1,
            "status": "LIVE",
            "intouchSeriesId": "415446",
            "vendorRedemptionId": null,
            "vendorRedemptionName": null,
            "vendorId": null,
            "vendorName": null,
            "lastUpdatedOn": 1731564479000,
            "lastUpdatedBy": null
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 3,
        "totalPages": 1,
        "numberOfElements": 3,
        "first": true,
        "size": 20,
        "number": 0
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 11028,
        "message": "Ensure both startDate and endDate are provided"
    },
```

```
{
    "status": {
        "success": false,
        "code": 11028,
        "message": "Ensure both startDate and endDate are provided"
    },
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 3004 | Brand not found |



`Try It!`