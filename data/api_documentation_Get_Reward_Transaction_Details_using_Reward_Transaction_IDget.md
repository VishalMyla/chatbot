# Get Reward Transaction Details using Reward Transaction IDget

This API retrieves detailed information of an issued reward using the reward transaction ID.

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

| URI | api_gateway/rewards/core/v1/reward-transactions/{rewardTransactionId} |

| HTTP Method | GET |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward-transactions/321525

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| customerId* | String | Unique identifier of the customer. Ex: 112295 |

| rewardTransactionId* | String | Unique identifier of the reward transaction. The reward transaction is generated during the issual of the reward. |



```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward-transactions/321525
```

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward-transactions/321525
```

# Response parameters

| Parameter | Description |

| --- | --- |

| status | An array containing the status details of the reward issue transaction. |

| success | Indicates whether the transaction was successful. |

| code | A unique code representing the status of the transaction. |

| message | A message providing details about the status of the transaction. |

| data | Contains detailed information about the reward transaction. |

| rewardTransactionId | Unique identifier for the reward transaction. The reward transaction is generated during the issual of the reward. |

| customerId | The ID of the customer associated with the reward transaction. |

| orgId | The ID of the organization associated with the transaction. |

| rewardIssueRefId | A reference ID for the reward issuance. |

| rewardTransactionDate | The timestamp of the reward transaction in milliseconds. |

| status | Status details of the reward issuance. |

| success | Indicates whether the reward issuance was successful. |

| -code | A unique code representing the status of the reward issuance. |

| -message | A message providing additional information about the status of the reward issuance. |

| -quantity | The number of rewards issued. |

| requestedQuantity | This field represents the original quantity that was requested. |

| groupRedemption | Indicates if the redemption is a group redemption. |

| rewardDetails | Contains details about the specific reward. |

| -rewardId | The ID of the reward. |

| -languageCode | The language code for the reward details. |

| -name | The name of the reward. |

| -description | A description of the reward. |

| -rewardRank | The rank of the reward. |

| -groups | A list of groups associated with the reward. |

| -imageId | The ID of the reward image. |

| -imageUrl | The URL of the reward image. |

| -intouchPoints | The number of intouch points associated with the reward. |

| -images | A list of images associated with the reward. |

| --name | Name of the image. |

| --altText | Alternative text or description of the image. |

| --id | Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external images. |

| --url | URL of the image. |

| --isExternal | Indicates if the image is hosted on an external server. |

| -videos | A list of videos associated with the reward. |

| --name | Name of the video. |

| --altText | Alternative text or description of the video. |

| --id | Identifier for internally stored videos, generated when uploaded to the file service. Not applicable for external videos. |

| --url | URL of the video. |

| --isExternal | Indicates if the video is hosted on an external server. |

| pointsRedemption | Details about the points redemption process. |

| -redeemedPoints | The number of points redeemed. |

| -pointsRedemptionRefId | A unique identifier generated each time rewards are issued. This field stores identifier, allowing you to track points redemption transaction. |

| -pointsRedemptionRefIds | A unique identifier generated each time rewards are issued. This field stores a list of these identifiers, allowing you to track multiple points redemption transactions. |

| status | Status details of the points redemption. |

| success | Indicates whether the points redemption was successful. |

| code | A unique code representing the status of the points redemption. |

| message | A message providing additional information about the points redemption status. |

| redemptionDetails | An array of objects specifying the details about the redemption process. |

| -redemptionType | Specifies the category of reward redemption available. It indicates how users can redeem the reward. |

| -totalRedemptionValue | The total value of the redemption. |

| vouchers | A list of vouchers associated with the redemption. |

| vendorRewards | Contains vendor-specific reward details. |

| rewards | A list of rewards issued by the vendor. |

| customFields | Custom fields for additional information. |

| transactionCustomFields | Custom fields associated with the transaction. |

| fulfillmentDetails | Fulfilment details associated with the reward. |

| fulfillmentDetailsAuditLog | Displays history of fulfilment statuses. |

| ownerId | The ID of the owner associated with the reward transaction. |

| eventLogId | A plain string identifier used to identify the transaction associated with a reward issual. |

| eventDateTime | Date and time when a triggering event (transactional or behavioural) occurred, initiating the reward earning. Time format: UTC time format (YYYY-MM-DDTHH:MM:SSZ). |

| issueDateTime | Date and time when the reward was awarded to the customer. Time format: UTC time format (YYYY-MM-DDTHH:MM:SSZ). |



```
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "195613",
        "customerId": 177071561,
        "orgId": 100458,
        "rewardIssueRefId": "1717922973",
        "rewardTransactionDate": 1717922974000,
        "status": {
            "success": false,
            "code": 8004,
            "message": "fail to issue reward as  points are not redeemable"
        },
        "quantity": 1,
        "requestedQuantity": 0,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 180325,
            "languageCode": "en",
            "name": "Nike running shoes",
            "description": "Nike running shoes",
            "groups": [],
            "imageId": "ab409284-1da2-4aab-a5d3-84bc3be95b51",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5e0e57d6-eae1-46ca-83b3-7991abff.jpg",
            "intouchPoints": 200,
            "intouchSeriesId": "524811",
            "redemptionType": "INTOUCH_REWARD",
            "images": [],
            "videos": []
        },
        "pointsRedemption": {},
        "vendorRewards": {
            "rewards": []
        },
        "customFields": {
            "A": "1",
            "CF1233": "1",
            "EnumCF2": "r1",
            "EnumCF1": "white"
        },
        "ownerId": "",
        "eventDateTime": "2024-06-09T08:49:34Z",
        "issueDateTime": "2024-06-09T08:49:34Z"
    }
}
```

```
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "195613",
        "customerId": 177071561,
        "orgId": 100458,
        "rewardIssueRefId": "1717922973",
        "rewardTransactionDate": 1717922974000,
        "status": {
            "success": false,
            "code": 8004,
            "message": "fail to issue reward as  points are not redeemable"
        },
        "quantity": 1,
        "requestedQuantity": 0,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 180325,
            "languageCode": "en",
            "name": "Nike running shoes",
            "description": "Nike running shoes",
            "groups": [],
            "imageId": "ab409284-1da2-4aab-a5d3-84bc3be95b51",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/5e0e57d6-eae1-46ca-83b3-7991abff.jpg",
            "intouchPoints": 200,
            "intouchSeriesId": "524811",
            "redemptionType": "INTOUCH_REWARD",
            "images": [],
            "videos": []
        },
        "pointsRedemption": {},
        "vendorRewards": {
            "rewards": []
        },
        "customFields": {
            "A": "1",
            "CF1233": "1",
            "EnumCF2": "r1",
            "EnumCF1": "white"
        },
        "ownerId": "",
        "eventDateTime": "2024-06-09T08:49:34Z",
        "issueDateTime": "2024-06-09T08:49:34Z"
    }
}
```

```
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "17337",
        "rewardIssueRefId": "transactionNumber",
        "rewardTransactionDate": 1709715033000,
        "status": {
            "success": true,
            "code": 200,
            "message": "Reward issued successfully"
        },
        "quantity": 1,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 6834,
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "imageId": "EXDR12987U",
            "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDP8T9uN3cAstrAKoyLcAcNt9HvLcn79YTO%2F0glMCtFy1d6wnZiNGBvp%2Ff3vSltITx7OfgQsbqGtn7DKigqaWAjvnbVWNuNqnDzjzpX1FrSi1rLMnsgCZft3iFKTm3hlhzWlzLz5vR8cFQT6zfSHBy21%2FmxihnYpezB4Lv3qmy%2B84YWo1m95XPHCzvI3Sm%2B2PjtDgHhUchz3u1kL1v%2Bet2ZXsrh2Ohr4L3D5gisp35DVA4DzbWaaciOyJaA2cn37atfcuoQp4zgmBLQ8d%2FfssP5DAhzjZaoQwWBuBNirWKNA%2FQvEG0cThifoIXwonNqgrwYyLY1rvytALzqJdLGfupaZmTIK3kBoOniOjE94ywZBz1MNF7LeEWLHWb%2BLJ18ziw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240306T085348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNPPABXCPZ%2F20240306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=60b44f05b120b061bfaeca7233d610c8221daafdaa6fc9d134b3920afb1d95f3",
            "intouchPoints": 1,
            "intouchSeriesId": "1135336",
            "redemptionType": "INTOUCH_REWARD",
            "vendorName": null,
            "vendorId": null,
            "vendorRedemptionId": null,
            "vendorRedemptionName": null,
            "images": [],
            "videos": []
        },
        "pointsRedemption": {
            "redeemedPoints": 1,
            "vendorName": "Points vendor_1",
            "referenceId": null,
            "pointsRedemptionRefId": "0rjghc",
            "status": {
                "success": true,
                "code": 200,
                "message": "Points redeemed successfully."
            },
            "stageReferenceId": null,
            "vendorId": null,
            "requestBody": null,
            "responseBody": null,
            "headers": null
        },
        "pointsRedemptionCheck": null,
        "issueReward": null,
        "revokeReward": null,
        "constraintsCheck": null,
        "catalogPromotions": null,
        "appliedPromotions": null,
        "vouchers": [
            {
                "code": "XS35QH1HA1OFHP269NZ0H0UCIZSY7S22F2DMP",
                "revenueDetails": {
                    "brandCommission": 1.00,
                    "capillaryCommission": 0.00,
                    "affiliateCommission": 1.20,
                    "endCustomerCommission": 1.30
                }
            }
        ],
        "promotions": null,
        "customFields": {
            "0a17": "defaultValue",
            "2d8a": "defaultValue",
        },
        "ownerType": null,
        "ownerId": "",
        "groupName": null,
        "groupRank": null,
        "rewardRank": null
    }
}
```

```
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "17337",
        "rewardIssueRefId": "transactionNumber",
        "rewardTransactionDate": 1709715033000,
        "status": {
            "success": true,
            "code": 200,
            "message": "Reward issued successfully"
        },
        "quantity": 1,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 6834,
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "imageId": "EXDR12987U",
            "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDP8T9uN3cAstrAKoyLcAcNt9HvLcn79YTO%2F0glMCtFy1d6wnZiNGBvp%2Ff3vSltITx7OfgQsbqGtn7DKigqaWAjvnbVWNuNqnDzjzpX1FrSi1rLMnsgCZft3iFKTm3hlhzWlzLz5vR8cFQT6zfSHBy21%2FmxihnYpezB4Lv3qmy%2B84YWo1m95XPHCzvI3Sm%2B2PjtDgHhUchz3u1kL1v%2Bet2ZXsrh2Ohr4L3D5gisp35DVA4DzbWaaciOyJaA2cn37atfcuoQp4zgmBLQ8d%2FfssP5DAhzjZaoQwWBuBNirWKNA%2FQvEG0cThifoIXwonNqgrwYyLY1rvytALzqJdLGfupaZmTIK3kBoOniOjE94ywZBz1MNF7LeEWLHWb%2BLJ18ziw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240306T085348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNPPABXCPZ%2F20240306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=60b44f05b120b061bfaeca7233d610c8221daafdaa6fc9d134b3920afb1d95f3",
            "intouchPoints": 1,
            "intouchSeriesId": "1135336",
            "redemptionType": "INTOUCH_REWARD",
            "vendorName": null,
            "vendorId": null,
            "vendorRedemptionId": null,
            "vendorRedemptionName": null,
            "images": [],
            "videos": []
        },
        "pointsRedemption": {
            "redeemedPoints": 1,
            "vendorName": "Points vendor_1",
            "referenceId": null,
            "pointsRedemptionRefId": "0rjghc",
            "status": {
                "success": true,
                "code": 200,
                "message": "Points redeemed successfully."
            },
            "stageReferenceId": null,
            "vendorId": null,
            "requestBody": null,
            "responseBody": null,
            "headers": null
        },
        "pointsRedemptionCheck": null,
        "issueReward": null,
        "revokeReward": null,
        "constraintsCheck": null,
        "catalogPromotions": null,
        "appliedPromotions": null,
        "vouchers": [
            {
                "code": "XS35QH1HA1OFHP269NZ0H0UCIZSY7S22F2DMP",
                "revenueDetails": {
                    "brandCommission": 1.00,
                    "capillaryCommission": 0.00,
                    "affiliateCommission": 1.20,
                    "endCustomerCommission": 1.30
                }
            }
        ],
        "promotions": null,
        "customFields": {
            "0a17": "defaultValue",
            "2d8a": "defaultValue",
        },
        "ownerType": null,
        "ownerId": "",
        "groupName": null,
        "groupRank": null,
        "rewardRank": null
    }
}
```

```
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "338926",
        "customerId": 564488660,
        "orgId": 100737,
        "rewardIssueRefId": "transactionNumber",
        "rewardTransactionDate": 1739180128000,
        "status": {
            "success": true,
            "code": 200,
            "message": "Reward issued successfully"
        },
        "quantity": 1,
        "requestedQuantity": 1,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 313501,
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "groups": [],
            "imageId": "EXDR12987U",
            "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIC8Xs6yX8y6blmci0kZQDe2tqRbrSW6Rcry4po63zWjzAiEA%2F8WeX2dFC%2BXx3JtDsR%2Fp0JPAPHu6eWR5C%2BGFDqjt3uIqvgII%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MDI4MTI3NzkyNjciDO5Ey0oIbicQGNC6gyqSAjD%2B49V4wIjNaXnNQkKI%2FBmNSrk2FapUFU0FJIjeM3kmluN3pXF0bae%2BTZzZ4jJrEU%2FoJRKEI7o4htcWLyTE4BQnWjqDOw1PfQIgm86LJwzYsBQYXd%2FzlRAbQox4lUOd7jtab1WzNe0%2F%2FCZLHZukfu6Senf1xxF0FZ2unvGhZgTa78nuZ3M5AYkFCchZDTJfX0zZ0q0gBty1Jk3JR%2BsP%2Fso8t8i5lTegz05NGN%2F8fWqKuFwxqh3MdcjntEtRCZEYHRf2DV7NLk9hlxq0F%2BXlEgye4IjNkfQWO7h2LZQI9yRsknLaQLcSSKEwdnd90IAVieXq6d%2FiE2aOcB9HbbTXuQH06AHgzTrDi2JTQ0%2F61%2B%2FBdBowl%2Fe1vQY6nQFElWN4x9QnjC0xTX5Unq2ORocyPEpfuWdeejGz2GnzpQ7i95ylmK7XMW8pt2ZM%2Bi%2FyqkH1ty02Taib0fdUzGlbKE1MmzRjGCfV4x8FLov0L82qSEKLB%2FmHl1IL25CJxUGIRaxpf2KCYxRG%2BxxFHNwmx05TpfJfITUhuex%2FFEzD6CBCZhajymLDvDa0%2Fa%2B7Nt%2BK%2BSv5xSbJC8xRZ10E&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250213T045655Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMBY2B2CPB3%2F20250213%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=00b61012b33ca16ec7c967941ad527a4a4dd3828a6756818f839f9d2904edb3b",
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "images": [
                {
                    "name": "imageName",
                    "altText": "product picture",
                    "id": null,
                    "url": "mypic.com",
                    "isExternal": true
                }
            ],
            "videos": [
                {
                    "name": "videoName",
                    "altText": "product picture",
                    "id": null,
                    "url": "mypic.com",
                    "isExternal": true
                }
            ]
        },
        "pointsRedemption": {
            "redeemedPoints": 0,
            "pointsRedemptionRefIds": [
                null
            ],
            "status": {
                "success": true,
                "code": 200,
                "message": "Points redeemed successfully."
            }
        },
        "redemptionDetails": {
            "redemptionType": "PHYSICAL_REWARD",
            "totalRedemptionValue": null
        },
        "vouchers": [],
        "vendorRewards": {
            "rewards": [
                {
                    "json": "{}"
                }
            ]
        },
        "ownerId": ""
    }
}
```

```
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "338926",
        "customerId": 564488660,
        "orgId": 100737,
        "rewardIssueRefId": "transactionNumber",
        "rewardTransactionDate": 1739180128000,
        "status": {
            "success": true,
            "code": 200,
            "message": "Reward issued successfully"
        },
        "quantity": 1,
        "requestedQuantity": 1,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 313501,
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "groups": [],
            "imageId": "EXDR12987U",
            "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIC8Xs6yX8y6blmci0kZQDe2tqRbrSW6Rcry4po63zWjzAiEA%2F8WeX2dFC%2BXx3JtDsR%2Fp0JPAPHu6eWR5C%2BGFDqjt3uIqvgII%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MDI4MTI3NzkyNjciDO5Ey0oIbicQGNC6gyqSAjD%2B49V4wIjNaXnNQkKI%2FBmNSrk2FapUFU0FJIjeM3kmluN3pXF0bae%2BTZzZ4jJrEU%2FoJRKEI7o4htcWLyTE4BQnWjqDOw1PfQIgm86LJwzYsBQYXd%2FzlRAbQox4lUOd7jtab1WzNe0%2F%2FCZLHZukfu6Senf1xxF0FZ2unvGhZgTa78nuZ3M5AYkFCchZDTJfX0zZ0q0gBty1Jk3JR%2BsP%2Fso8t8i5lTegz05NGN%2F8fWqKuFwxqh3MdcjntEtRCZEYHRf2DV7NLk9hlxq0F%2BXlEgye4IjNkfQWO7h2LZQI9yRsknLaQLcSSKEwdnd90IAVieXq6d%2FiE2aOcB9HbbTXuQH06AHgzTrDi2JTQ0%2F61%2B%2FBdBowl%2Fe1vQY6nQFElWN4x9QnjC0xTX5Unq2ORocyPEpfuWdeejGz2GnzpQ7i95ylmK7XMW8pt2ZM%2Bi%2FyqkH1ty02Taib0fdUzGlbKE1MmzRjGCfV4x8FLov0L82qSEKLB%2FmHl1IL25CJxUGIRaxpf2KCYxRG%2BxxFHNwmx05TpfJfITUhuex%2FFEzD6CBCZhajymLDvDa0%2Fa%2B7Nt%2BK%2BSv5xSbJC8xRZ10E&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250213T045655Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMBY2B2CPB3%2F20250213%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=00b61012b33ca16ec7c967941ad527a4a4dd3828a6756818f839f9d2904edb3b",
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "images": [
                {
                    "name": "imageName",
                    "altText": "product picture",
                    "id": null,
                    "url": "mypic.com",
                    "isExternal": true
                }
            ],
            "videos": [
                {
                    "name": "videoName",
                    "altText": "product picture",
                    "id": null,
                    "url": "mypic.com",
                    "isExternal": true
                }
            ]
        },
        "pointsRedemption": {
            "redeemedPoints": 0,
            "pointsRedemptionRefIds": [
                null
            ],
            "status": {
                "success": true,
                "code": 200,
                "message": "Points redeemed successfully."
            }
        },
        "redemptionDetails": {
            "redemptionType": "PHYSICAL_REWARD",
            "totalRedemptionValue": null
        },
        "vouchers": [],
        "vendorRewards": {
            "rewards": [
                {
                    "json": "{}"
                }
            ]
        },
        "ownerId": ""
    }
}
```

# API-specific error codes

| Error Code | Description |

| --- | --- |

| 6004 | Reward not found or disabled |



`Try It!`