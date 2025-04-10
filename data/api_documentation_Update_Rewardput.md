# Update Rewardput

This API is used to update a particular reward.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.Start time and end time are in UTC zoneWhen you're updating a reward, if you leave out any fields (likevendorRedemptionorintouchSeriesId), the system will automatically keep the values from the existing reward. So, you only need to provide the fields you want to change—everything else stays the same as before.Linking a reward- You can link a reward to the card associated with the customer, customer label, customer segments, tiers, or desired loyalty programs. You cannot link same reward to more than one of these at a time. However, you can link same reward to different segments card seriesor others simultaneously.Example: You can link a reward to multiple card series, like "Gold Card Series" and "Platinum Card Series," at the same time. Similarly, you can link a reward to multiple labels, such as "VIP Customers" and "Frequent Buyers." However, you cannot link a reward to both a specific card, like "Gold Card," and a label, such as "VIP Customers," at the same time.New brands should no longer use the"intouch points"field. Instead, they should only use the new"payment config"block.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

- Start time and end time are in UTC zone

- When you're updating a reward, if you leave out any fields (likevendorRedemptionorintouchSeriesId), the system will automatically keep the values from the existing reward. So, you only need to provide the fields you want to change—everything else stays the same as before.

`vendorRedemption`

`intouchSeriesId`

- Linking a reward- You can link a reward to the card associated with the customer, customer label, customer segments, tiers, or desired loyalty programs. You cannot link same reward to more than one of these at a time. However, you can link same reward to different segments card seriesor others simultaneously.Example: You can link a reward to multiple card series, like "Gold Card Series" and "Platinum Card Series," at the same time. Similarly, you can link a reward to multiple labels, such as "VIP Customers" and "Frequent Buyers." However, you cannot link a reward to both a specific card, like "Gold Card," and a label, such as "VIP Customers," at the same time.

- New brands should no longer use the"intouch points"field. Instead, they should only use the new"payment config"block.

![](https://files.readme.io/7aad76be70909a1af79f0d7a6a5c25cd4481d38419cedef537fe7f3860f08027-Screenshot_2024-09-13_174313.png)

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/reward/{reward ID}/brand/{brand ID} |

| HTTP Method | PUT |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/112295/brand/1

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/112295/brand/1
```

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| brandId* | String | Brand ID. You can use theAPIand retrieve the brand ID of your brand. |

| rewardId* | String | Unique reward identidier. |



[API](/reference/retrieve-brand-id)

# Request body parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| name | String | Identifier for the reward. Ex: Discount On Handbags |

| description | String | Description of the reward. Ex: 150 off on handbags and wallets. It can be null. |

| startTime* | DateTime | Start Date and time of the reward. It cannot be modified once the reward is live.Example: 2024-11-01T06:00:00Z. The timestamp must be in UTC format: YYYY-MM-DDTHH:MM:SSZ. |

| endTime* | DateTime | End Date and time of the reward. It can be set to the present or up to 10 years in the paste and remains editable even after the reward is live.Example: 2026-11-01T06:00:00Z.The timestamp must be in UTC format: YYYY-MM-DDTHH:MM:SSZ. |

| priority | Integer | Brands can use Metadata for the reward for UI, auditing, or reporting purposes, and it can be left as null. The priority value must be a non-negative number and cannot be negative. |

| type* | Enum | Type of the reward.Supported values: POINTS, VOUCHER, PHYSICAL_VOUCHER, FREE_VOUCHER. |

| brandId* | String | You can use theAPIand retrieve the brand ID of your brand. |

| enabled | Boolean | Status of the reward. |

| intouchPoints | Integer | The number of points customers need to burn to purchase the reward. Ex: 500 |

| intouchSeriesId | String | Coupon series ID or cart promotion ID when intouch reward is selected. |

| tier | String | The tier level, e.g., "SILVER". |

| geography | Object | Geographic applicability, including countryId for restriction. |

| paymentConfigs | Object | The list of payment mode supported by the reward. |

| paymentMode | Enum | The type of payment mode supported to redeem the reward. Supported values: POINTS, FREE, CASH, POINTS_CASH, CONV_RATIO. Multiple payments are not supported within FREE and CONV_RATIO modes.NOTE: The same payment method cannot be used twice to create a reward. For example, only the first entry will be considered if you use POINTS twice as a payment mode.For more information, refer toSupported payment modes. |

| groups | Array of objects | An array containing information about groups and rewards associated with reward. |

| groupName | String | A label assigned to a set of rewards to organize them based on common themes or purposes. |

| groupRank | Integer | The priority level assigned to a reward group to determine its display order in the catalog. |

| rewardRank | Integer | The priority level assigned to an individual reward within a group to highlight its importance or relevance. |

| categories | Integers | Metadata for the reward to categorize different rewards in different categories for end users. If the categories parameter is null in the update reward call, the existing category mappings will remain unchanged, i.e., category will remain unchanged. If an empty list of categories is passed, all existing mappings will be removed. |

| redemptionType* | Enum | Type of intouch reward or vendor reward.Supported values: GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC.Notes:1. Once a reward has been started, the redemptionType cannot be changed.2. If redemptionType is MILES, Payment config is mandatory.3. CONV_RATIO mode is supported only for CHARITY, MILES, CASH_WALLET, SWEEPSTAKES, AUCTION, GIFT_CARD, PHYSICAL_REWARD type of redemption types.4. If redemptionType is FREE_VOUCHER and payment mode is set, no points will be deducted. |

| vendorRedemption | Object | Vendor redemption is the reward configured for a particular vendor. |

| communications | String | Communication IDs related to the reward. |

| restrictions | Object | Restrictions on the reward, detailed in customer and reward levels. |

| kpi | Enum | The KPI on which the reward is created. Supported values: QUANTITY, REDEMPTION_VALUEQUANTITY: Count of rewards being issued or the redemption value of the reward.While creating a reward:If the reward is not mapped to a payment configuration, the quantity is treated as the actual number of rewards issued.If the reward is mapped to a payment configuration (e.g., CONV_RATIO), the quantity field acts as the redemption value.REDEMPTION_VALUE: Value associated with the reward. It is applicable only when the reward is mapped to a CONV_RATIO payment configuration. Represents the value (e.g., miles) associated with the reward.NOTE: Both customer level and reward level restrictions are supported for Quantity and Redemption Value. |

| limit | Integer | The maximum number of rewards to be created. |

| repeatFrequencyType | Enum | The frequency of the reward. Supported values: DAYS, WEEKS, MONTHS. |

| supplementaryCriteriaRO | Object | Tier/supplementary programs for which the reward is being created. |

| loyaltyProgramId | Integer | Unique identifier of the loyalty program. |

| tierIds | Integer | Unique identifier of the tier. |

| partnerProgramIds | Integer | Unique identifier of the partner program. |

| customFields | Object | The list of reward-level custom fields.  Custom fields are columns that store custom information such as transaction details, customer details etc. These fields allow users to capture specific details that are not covered by standard fields. Users can define the properties of custom fields and assign default values. |

| languageSpecificInfo | Object | Enables the display of reward level information specified in this object in the desired language.Note:There is no limit on the number of languages a user can define for custom fieldsPrerequisite: If the desired language is not available in the system, raise a ticket to the Capillary support team to have it added. |

| languageCode | String | The ISO code for the language. For ex: FR-French, JA- Japanese etc. |

| name | String | The name of the reward in the specified language. |

| description | String | A description of the reward in the specified language. |

| termNConditions | String | You can either pass the terms and conditions in text format or can enter the link to the file location where the terms and condition is present. It can be null. |

| termNConditionsId | String | The identifier for terms and conditions.  Uploading the termsNconditons file to the file service/solutions workspace generates this unique identifier. |

| imageId | String | The file_handle of the main image.Uploading the image to the file service/solutions workspace generates this unique identifier. The main image is the image that the brand configures during the reward creation. |

| imageUrl | String | The URL of the image in the file service location. |

| thumbnailId | String | The identifier for the thumbnail image. |

| enabled | Boolean | Indicates if the language should be enabled or not. |

| images | Object | A list of image details related to the reward.Notes:- A maximum of 10 images can be added to the reward. The brand can update the main image from these 10 images.- You can use the ID (if the file is stored in an S3 location) or external image URL to add the image.- There is no limit in dimension or size for the image.- Images in any format are supported. |

| name | String | The name of the image. The name should be unique.Warning: If a name is passed twice, only the first one will be considered. |

| id | String | The file_handle of the image. Uploading the image to the file service/solutions workspace generates this unique identifier. |

| isExternal | Boolean | Indicates if the image is hosted on an external server. |

| url | String | URL of the image. |

| altText | String | Alternative text or description of the image. You can use alt text to convey the meaning and context of visual content to users who cannot view images, such as individuals using screen readers due to visual impairments, or in situations where images fail to load. The maximum number of supported characters is 1056. |

| videos | Object | A list of video details related to the reward.Notes:- A maximum of 10 videos can be added to the reward. The brand can update the main video from these 10 images.- You can use the ID (if the file is stored in the S3 location) or external video URL to add the video.- There is no limit in dimension or size for videos.- Videos in any format are supported. |

| name | String | The name of the video. The name should be unique.Warning: If a name is passed twice, only the first one will be considered. |

| id | String | The file_handle of the video.Uploading the video to the file service/solutions workspace generates this unique identifier. |

| url | String | URL of the video. |

| isExternal | Boolean | Indicates if the video is hosted on an external server. |

| altText | String | Alternative text or description of the video. You can use alt text to convey the meaning and context of visual content to users who cannot view images, such as individuals using screen readers due to visual impairments, or in situations where images fail to load. The maximum number of supported characters is 1056. |

| customFields | Object | The list of custom fields.  Custom fields are columns that store custom information such as transaction details, customer details etc. These fields allow users to capture specific details that are not covered by standard fields. Users can define the properties of custom fields and assign default values.- If language-specific custom fields are unavailable, English values are used.- If language-level custom fields are not defined, reward-level custom fields are used else,meta-leveldefault values are used. |

| customFieldName | String | Name of the custom field. |

| customFieldValue | String | Value of the custom field. |

| owners | Object | List containing detailed owner information |

| ownerType | Enum | The module for which the reward was created. Supported values: LOYALTY_PROGRAM, MILESTONES, CAMPAIGNS, JOURNEYS, GOODWILL. |

| ownerId | String | Unique identifier of the owner to claim the reward. Multiple owner IDs are supported for a single reward with the same owner type. |

| rewardRevenueMeta | Object | An object with commission details for different participants over specific periods. |

| commissionParticipant | Enum | The entity receiving the commission.Supported values: BRAND, CAPILLARY, AFFILIATE, END_CUSTOMER. |

| commissionRate | Float | The amount of commission to be received. |

| cycleStartDate | Date | Start date of the commission cycle.Note:- cycleStartDate should be greater than rewardStartDate.- cycleStartDate must be in the future |

| cycleEndDate | Date | End date of the commission cycle.Note:- cycleEndDate should smaller than rewardEndDate.- cycleEndDate must be in the future |

| rewardRevenueDefaults | Object | An object with the default commission.  In case multiple blocks with the same commissionParticipant are passed, only the first is considered. |

| commissionParticipant | Enum | The entity receiving the commission.Supported values: BRAND, CAPILLARY, AFFILIATE, END_CUSTOMER |

| defaultValue | Float | Default commission rate associated with the participant.Note: If no defaultValue is passed, then 0 is considered as the defaultValue. |

| segment | Object | Customer Segmentation involves logically grouping audiences based on shared characteristics. You can create segments using the Insights+ UI. For more information on creating segments, refer to this guide. You can use these segments to create rewards targeting specific customer groups.Use Case:Suppose you have a customer segment based on transaction volume, categorized into High, Medium, and Low buckets. If you want to offer rewards only to customers categorized as high-value transaction customers, you can use that specific customer segment and partition ID to tailor the rewards. For example, if a customer has 10,000 transactions in a month and falls into the top 3 transactions per month bucket, you can display only high-value rewards to them.The segment ID and partition ID are not currently available in the Insights+ UI.Notes:- The segments and partition information should be valid and the segments must be active while updating the reward.- If no values are passed, the existing mappings of the segment will remain unaffected.- If an empty list is passed, all existing segment mappings will be removed during the update. |

| segmentId | Integer | Enter the segment ID. The Segment ID is a unique identifier used to create or update segment information. |

| partitionId | Integer | Enter the partition ID. The Partition ID is a unique identifier used to create or update partition information. |

| cardSeries | Array of Objects | List of card series codes associated with the reward. Brands can use cards and labels to offer personalized rewards. There is no limit on the number of card series code. You can useGet Card Details APIto get the series code of the Card.Example:"cardSeries":["26NOV2024TRYLEN17","26NOV2024TRYLEN18"].Note:You cannot link the same reward to multiple attributes at a time. For more information, refer to the main note above. |

| labels | Array of Objects | List of label IDs associated with the reward. You can get the label ID fromGet Customer LabelsAPI. There is no limit on the number of label IDs.Note:You cannot link the same reward to multiple attributes at a time. For more information, refer to the main note above. |



[API](/reference/retrieve-brand-id)

[Supported payment modes](/docs/pointscash-journeys-in-rewards-catalog)

[meta-level](/reference/post-create-custom-field)

[Get Card Details API](/reference/get-card-details)

```
"cardSeries":["26NOV2024TRYLEN17","26NOV2024TRYLEN18"]
```

[Get Customer Labels](/reference/get-customer-labels)

```
{
    "name": "testreward1poi",
    "description": "testreward1",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1
        }
    ],
    "categories": [
        4
    ],
    "rewardRank":"1",
    "intouchSeriesId": "301233",
    "redemptionType": "INTOUCH_REWARD",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
    "supplementaryCriteriaRO": [
        {
            "loyaltyProgramId": 469,
            "tierIds": null,
            "partnerProgramIds": [
                48
            ]
        },
        {
            "loyaltyProgramId": 690,
            "tierIds": null,
            "partnerProgramIds": null
        }
    ],
    "customFields": {
        "CF1": "Custom field 1"
    },
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
    "name": "testreward1poi",
    "description": "testreward1",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1
        }
    ],
    "categories": [
        4
    ],
    "rewardRank":"1",
    "intouchSeriesId": "301233",
    "redemptionType": "INTOUCH_REWARD",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
    "supplementaryCriteriaRO": [
        {
            "loyaltyProgramId": 469,
            "tierIds": null,
            "partnerProgramIds": [
                48
            ]
        },
        {
            "loyaltyProgramId": 690,
            "tierIds": null,
            "partnerProgramIds": null
        }
    ],
    "customFields": {
        "CF1": "Custom field 1"
    },
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
  	"name":"ABCD",
  	"description":"Reward",
    "startTime": "2025-02-06T07:43:30.00Z",
    "endTime": "2026-11-29T05:39:49.00Z",
    "type": "POINTS",
    "brandId": 3,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 1,
    "intouchSeriesId": "6538e3ac60ce5c504144bb07",
    "tier": "SILVER",
    "geography": [
        {
            "countryId": 7
        }
    ],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true,
            "images": [
                {
                    "name": "imagename1",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6"
                },
                {
                    "name": "imagename2",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6"
                },
                {
                    "name": "imagename2",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6",
                    "isExternal": false
                },
                {
                    "name": "videoname1",
                    "isExternal": true
                }
            ]
        }
    ],
    "categories": [
        5
    ],
    "redemptionType": "CART_PROMOTION",
    "communications": [
        4
    ],
    "owners": [
        {
            "ownerType": "LOYALTY_PROGRAM",
            "ownerId": "123"
        }
    ]
}
```

```
{
  	"name":"ABCD",
  	"description":"Reward",
    "startTime": "2025-02-06T07:43:30.00Z",
    "endTime": "2026-11-29T05:39:49.00Z",
    "type": "POINTS",
    "brandId": 3,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 1,
    "intouchSeriesId": "6538e3ac60ce5c504144bb07",
    "tier": "SILVER",
    "geography": [
        {
            "countryId": 7
        }
    ],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true,
            "images": [
                {
                    "name": "imagename1",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6"
                },
                {
                    "name": "imagename2",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6"
                },
                {
                    "name": "imagename2",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6"
                }
            ],
            "videos": [
                {
                    "name": "videoname1",
                    "id": "9b648b66-5700-4c6d-84ea-01ddf73927c6",
                    "isExternal": false
                },
                {
                    "name": "videoname1",
                    "isExternal": true
                }
            ]
        }
    ],
    "categories": [
        5
    ],
    "redemptionType": "CART_PROMOTION",
    "communications": [
        4
    ],
    "owners": [
        {
            "ownerType": "LOYALTY_PROGRAM",
            "ownerId": "123"
        }
    ]
}
```

```
{
    "startTime": "2024-03-07T08:53:49.00Z",
    "endTime": "2024-03-14T05:39:49.00Z",
    "type": "POINTS",
    "brandId": "8",
    "priority": 1,
    "enabled": true,
    "intouchPoints": 3,
    "intouchSeriesId": "73684275",
    "tier": "GOLD",
    "geography":
    [
        {
            "countryId": "14"
        }
    ],
    "languageSpecificInfo":
    [
        {
            "name": " INTOUCH Enabledsd",
            "description": "Description",
            "termNConditions": "https://s3.amazonaws.com/crm-nightly-new-solutions/IRISV2BRAND/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEAgaDImRT4Rv3I22aidrESLdAQJokVqNlcxpwvh%2FuileYhmM7vAPvlqLv4pA3icQ0z4opwko8bn2w1y2412RtCR1AXAhlB82T%2FT%2Fr4lMjSRbBy1i4lsWgIVWWQ00NMLW2TDumQcnFwQq1p%2BQFAofb1GS%2BcE4zoWTMieFVV3%2F15l2stJ7ZmwnyDYkDyqGzCk0AWoeQQw%2F%2BHu6DbeIcBJrEakvjZvLjqzeIACunRAYgrXAMlI5HfPenJl8CmEfvhgluUkUNQ25vrL6KhXEQKG4rdVjWG%2BxnkMgcZqBLth64qvfYES1wVyYz1OvneIhOdKbKO3tpZoGMi0%2F3wHyU2g0g7XXMM1cLRtUIn6x6%2BEzEdHMArLUdsCYy%2BnDOfaViZiRnhOtV6U%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221014T145408Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNMI6TM5YP%2F20221014%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c17682bb64da475b6163148797a0c21dbb75fde352c2947fd94504d7f88535fe",
            "thumbnailId": "EXDR12987T",
            "imageId": "EXDR12987U",
            "enabled": true,
            "termNConditionsId": "EXDR12987R",
            "languageCode": "en",
             "customFields":{
               "mandatory - CF1": "englishvalue1"
               
            }
        },
        {
            "name": " INTOUCH Enabledsd",
            "description": "Description",
            "termNConditions": "https://s3.amazonaws.com/crm-nightly-new-solutions/IRISV2BRAND/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEAgaDImRT4Rv3I22aidrESLdAQJokVqNlcxpwvh%2FuileYhmM7vAPvlqLv4pA3icQ0z4opwko8bn2w1y2412RtCR1AXAhlB82T%2FT%2Fr4lMjSRbBy1i4lsWgIVWWQ00NMLW2TDumQcnFwQq1p%2BQFAofb1GS%2BcE4zoWTMieFVV3%2F15l2stJ7ZmwnyDYkDyqGzCk0AWoeQQw%2F%2BHu6DbeIcBJrEakvjZvLjqzeIACunRAYgrXAMlI5HfPenJl8CmEfvhgluUkUNQ25vrL6KhXEQKG4rdVjWG%2BxnkMgcZqBLth64qvfYES1wVyYz1OvneIhOdKbKO3tpZoGMi0%2F3wHyU2g0g7XXMM1cLRtUIn6x6%2BEzEdHMArLUdsCYy%2BnDOfaViZiRnhOtV6U%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221014T145408Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNMI6TM5YP%2F20221014%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c17682bb64da475b6163148797a0c21dbb75fde352c2947fd94504d7f88535fe",
            "thumbnailId": "EXDR12987T",
            "imageId": "EXDR12987U",
            "enabled": true,
            "termNConditionsId": "EXDR12987R",
            "languageCode": "fr",
            "customFields":{
               "non_mandatory-CF4":"frenchvalue4"
            }
        }
    ],
    "categories":
    [
        "11"
    ],
    "redemptionType": "INTOUCH_REWARD",
    "communications":
    [
        "11"
    ],
    "vendorRedemption": null,
    "group": null,
    "label": null
}
```

```
{
    "startTime": "2024-03-07T08:53:49.00Z",
    "endTime": "2024-03-14T05:39:49.00Z",
    "type": "POINTS",
    "brandId": "8",
    "priority": 1,
    "enabled": true,
    "intouchPoints": 3,
    "intouchSeriesId": "73684275",
    "tier": "GOLD",
    "geography":
    [
        {
            "countryId": "14"
        }
    ],
    "languageSpecificInfo":
    [
        {
            "name": " INTOUCH Enabledsd",
            "description": "Description",
            "termNConditions": "https://s3.amazonaws.com/crm-nightly-new-solutions/IRISV2BRAND/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEAgaDImRT4Rv3I22aidrESLdAQJokVqNlcxpwvh%2FuileYhmM7vAPvlqLv4pA3icQ0z4opwko8bn2w1y2412RtCR1AXAhlB82T%2FT%2Fr4lMjSRbBy1i4lsWgIVWWQ00NMLW2TDumQcnFwQq1p%2BQFAofb1GS%2BcE4zoWTMieFVV3%2F15l2stJ7ZmwnyDYkDyqGzCk0AWoeQQw%2F%2BHu6DbeIcBJrEakvjZvLjqzeIACunRAYgrXAMlI5HfPenJl8CmEfvhgluUkUNQ25vrL6KhXEQKG4rdVjWG%2BxnkMgcZqBLth64qvfYES1wVyYz1OvneIhOdKbKO3tpZoGMi0%2F3wHyU2g0g7XXMM1cLRtUIn6x6%2BEzEdHMArLUdsCYy%2BnDOfaViZiRnhOtV6U%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221014T145408Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNMI6TM5YP%2F20221014%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c17682bb64da475b6163148797a0c21dbb75fde352c2947fd94504d7f88535fe",
            "thumbnailId": "EXDR12987T",
            "imageId": "EXDR12987U",
            "enabled": true,
            "termNConditionsId": "EXDR12987R",
            "languageCode": "en",
             "customFields":{
               "mandatory - CF1": "englishvalue1"
               
            }
        },
        {
            "name": " INTOUCH Enabledsd",
            "description": "Description",
            "termNConditions": "https://s3.amazonaws.com/crm-nightly-new-solutions/IRISV2BRAND/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEAgaDImRT4Rv3I22aidrESLdAQJokVqNlcxpwvh%2FuileYhmM7vAPvlqLv4pA3icQ0z4opwko8bn2w1y2412RtCR1AXAhlB82T%2FT%2Fr4lMjSRbBy1i4lsWgIVWWQ00NMLW2TDumQcnFwQq1p%2BQFAofb1GS%2BcE4zoWTMieFVV3%2F15l2stJ7ZmwnyDYkDyqGzCk0AWoeQQw%2F%2BHu6DbeIcBJrEakvjZvLjqzeIACunRAYgrXAMlI5HfPenJl8CmEfvhgluUkUNQ25vrL6KhXEQKG4rdVjWG%2BxnkMgcZqBLth64qvfYES1wVyYz1OvneIhOdKbKO3tpZoGMi0%2F3wHyU2g0g7XXMM1cLRtUIn6x6%2BEzEdHMArLUdsCYy%2BnDOfaViZiRnhOtV6U%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221014T145408Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNMI6TM5YP%2F20221014%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c17682bb64da475b6163148797a0c21dbb75fde352c2947fd94504d7f88535fe",
            "thumbnailId": "EXDR12987T",
            "imageId": "EXDR12987U",
            "enabled": true,
            "termNConditionsId": "EXDR12987R",
            "languageCode": "fr",
            "customFields":{
               "non_mandatory-CF4":"frenchvalue4"
            }
        }
    ],
    "categories":
    [
        "11"
    ],
    "redemptionType": "INTOUCH_REWARD",
    "communications":
    [
        "11"
    ],
    "vendorRedemption": null,
    "group": null,
    "label": null
}
```

```
{
    "startTime": "2024-10-07T17:04:30.00Z",
    "endTime": "2027-10-31T05:39:49.00Z",
    "rewardRevenueMeta" : [
        {
            "commissionParticipant": "BRAND",
            "commissionRate": "1.5",
            "cycleStartDate": "2024-11-07T17:04:30.000Z",
            "cycleEndDate": "2025-10-06T07:43:30.000Z"
        },
        {
            "commissionParticipant": "AFFILIATE",
            "commissionRate": "1.2",
            "cycleStartDate": "2024-11-07T17:04:30.000Z",
            "cycleEndDate": "2026-10-06T07:43:30.000Z"
        }
    ],
    "rewardRevenueDefaults": [
        {
            "commissionParticipant": "AFFILIATE",
            "defaultValue": "1.1"
        },
        {
            "commissionParticipant": "END_CUSTOMER",
            "defaultValue": "1.3"
        }
    ],
      "type": "VOUCHER",
  "brandId": 3,
  "priority": 1,
  "enabled": true,
  "intouchPoints": 1,
  "intouchSeriesId": "1135336",
  "tier": "SILVER",
  "geography": [
    {
      "countryId": 7
    }
  ],
  "languageSpecificInfo": [
    {
      "languageCode": "en",
      "name": " INTOUCH Enabled",
      "description": "Description",
      "termNConditionsId": "EXDR12987R",
      "imageId": "EXDR12987U",
      "thumbnailId": "EXDR12987T",
      "enabled": true
    }
  ],
  "categories": [
    5
  ],
  "redemptionType": "INTOUCH_REWARD",
  "communications": [
    4
  ],
  "owners":[{
      "ownerType":"LOYALTY_PROGRAM",
      "ownerId":"123"
      }
  ]
}
```

```
{
    "startTime": "2024-10-07T17:04:30.00Z",
    "endTime": "2027-10-31T05:39:49.00Z",
    "rewardRevenueMeta" : [
        {
            "commissionParticipant": "BRAND",
            "commissionRate": "1.5",
            "cycleStartDate": "2024-11-07T17:04:30.000Z",
            "cycleEndDate": "2025-10-06T07:43:30.000Z"
        },
        {
            "commissionParticipant": "AFFILIATE",
            "commissionRate": "1.2",
            "cycleStartDate": "2024-11-07T17:04:30.000Z",
            "cycleEndDate": "2026-10-06T07:43:30.000Z"
        }
    ],
    "rewardRevenueDefaults": [
        {
            "commissionParticipant": "AFFILIATE",
            "defaultValue": "1.1"
        },
        {
            "commissionParticipant": "END_CUSTOMER",
            "defaultValue": "1.3"
        }
    ],
      "type": "VOUCHER",
  "brandId": 3,
  "priority": 1,
  "enabled": true,
  "intouchPoints": 1,
  "intouchSeriesId": "1135336",
  "tier": "SILVER",
  "geography": [
    {
      "countryId": 7
    }
  ],
  "languageSpecificInfo": [
    {
      "languageCode": "en",
      "name": " INTOUCH Enabled",
      "description": "Description",
      "termNConditionsId": "EXDR12987R",
      "imageId": "EXDR12987U",
      "thumbnailId": "EXDR12987T",
      "enabled": true
    }
  ],
  "categories": [
    5
  ],
  "redemptionType": "INTOUCH_REWARD",
  "communications": [
    4
  ],
  "owners":[{
      "ownerType":"LOYALTY_PROGRAM",
      "ownerId":"123"
      }
  ]
}
```

```
{
    "name": "testreward1poitu",
    "description": "testreward11",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1
        }
    ],
"paymentConfigs": [
       {
            "paymentMode": "POINTS",
            "points":100
        }
    ],
    "categories": [
        4
    ],
    "rewardRank":"1",
    "intouchSeriesId": "301233",
    "redemptionType": "INTOUCH_REWARD",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
    "supplementaryCriteriaRO": [
        {
            "loyaltyProgramId": 469,
            "tierIds": null,
            "partnerProgramIds": [
                48
            ]
        },
        {
            "loyaltyProgramId": 690,
            "tierIds": null,
            "partnerProgramIds": null
        }
    ],
    "customFields": {
        "CF1": "Custom field 1"
    },
    
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
    "name": "testreward1poitu",
    "description": "testreward11",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1
        }
    ],
"paymentConfigs": [
       {
            "paymentMode": "POINTS",
            "points":100
        }
    ],
    "categories": [
        4
    ],
    "rewardRank":"1",
    "intouchSeriesId": "301233",
    "redemptionType": "INTOUCH_REWARD",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
    "supplementaryCriteriaRO": [
        {
            "loyaltyProgramId": 469,
            "tierIds": null,
            "partnerProgramIds": [
                48
            ]
        },
        {
            "loyaltyProgramId": 690,
            "tierIds": null,
            "partnerProgramIds": null
        }
    ],
    "customFields": {
        "CF1": "Custom field 1"
    },
    
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
    "startTime": "2027-10-03T07:47:33Z",
    "endTime": "2030-07-10T09:48:34Z",
    "type": "FREE_VOUCHER",
    "brandId": 3,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "intouchSeriesId": "1137472",
    "tier": "SILVER",
    "geography": [
        {
            "countryId": 7
        }
    ],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " English",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true
        }
    ],
    "categories": [
        5
    ],
    "redemptionType": "INTOUCH_REWARD",
    "communications": [
        4
    ],
    "segment": [
        
        {
            "segmentId": "6136",
            "partitionId": [
                "2675"
            ]
        }
    ]
}
```

```
{
    "startTime": "2027-10-03T07:47:33Z",
    "endTime": "2030-07-10T09:48:34Z",
    "type": "FREE_VOUCHER",
    "brandId": 3,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "intouchSeriesId": "1137472",
    "tier": "SILVER",
    "geography": [
        {
            "countryId": 7
        }
    ],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " English",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true
        }
    ],
    "categories": [
        5
    ],
    "redemptionType": "INTOUCH_REWARD",
    "communications": [
        4
    ],
    "segment": [
        
        {
            "segmentId": "6136",
            "partitionId": [
                "2675"
            ]
        }
    ]
}
```

```
{
    "id": 201374,
    "name": "testname",
    "description": "testname1",
    "startTime": "2024-07-17T11:00:00.00Z",
    "endTime": "2025-07-11T14:43:00.00Z",
    "priority": 1,
    "groups" : [
        {
            "groupName":"groupName012",
            "groupRank": 8
        },
        {
            "groupName":"groupName013"
            // "groupRank": 6
        }
    ],
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1
        }
    ],

"paymentConfigs": [
       {
            "paymentMode": "POINTS",
            "points":100
        }
    ],

    "categories": [
        4
    ],
    "rewardRank":"1",
    "intouchSeriesId": "350219",
    "redemptionType": "INTOUCH_REWARD",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
 
    "customFields": {
        "CF1": "Custom field 1"
    },
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
    "id": 201374,
    "name": "testname",
    "description": "testname1",
    "startTime": "2024-07-17T11:00:00.00Z",
    "endTime": "2025-07-11T14:43:00.00Z",
    "priority": 1,
    "groups" : [
        {
            "groupName":"groupName012",
            "groupRank": 8
        },
        {
            "groupName":"groupName013"
            // "groupRank": 6
        }
    ],
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1
        }
    ],

"paymentConfigs": [
       {
            "paymentMode": "POINTS",
            "points":100
        }
    ],

    "categories": [
        4
    ],
    "rewardRank":"1",
    "intouchSeriesId": "350219",
    "redemptionType": "INTOUCH_REWARD",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
 
    "customFields": {
        "CF1": "Custom field 1"
    },
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
    "id": 272383,
    "name": "REWARD",
    "description": "REWARD1234",
    "startTime": "2024-11-26T08:29:00.00Z",
    "endTime": "2025-07-11T14:43:00.00Z",
    "priority": 1,
  
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1 
        }
    ],

"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio": 0.33
        }
    ],

    "categories": [
        4
    ],
    "rewardRank":"1",
    // "intouchSeriesId": "415446",
    "redemptionType": "MILES",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 1000,
                "repeatFrequencyType": "MONTHS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "DAYS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
 
    "customFields": {
        "CF1": "Custom field 1"
    },
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
    "id": 272383,
    "name": "REWARD",
    "description": "REWARD1234",
    "startTime": "2024-11-26T08:29:00.00Z",
    "endTime": "2025-07-11T14:43:00.00Z",
    "priority": 1,
  
    "type": "VOUCHER",
    "brandId": "1",
    "enabled": true,
    "intouchPoints": 500,
    "geography": [
        {
            "countryId": 1 
        }
    ],

"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio": 0.33
        }
    ],

    "categories": [
        4
    ],
    "rewardRank":"1",
    // "intouchSeriesId": "415446",
    "redemptionType": "MILES",
    "vendorRedemption": null,
    "communications": [
        "1"
    ],
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 1000,
                "repeatFrequencyType": "MONTHS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 50,
                "repeatFrequencyType": "DAYS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
 
    "customFields": {
        "CF1": "Custom field 1"
    },
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testreward1",
            "description": "testreward1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
    "id": 256354,
  	"name": "RewardName",
    "description": "TestReward",
    "startTime": "2025-11-28T13:56:00.00Z",
    "endTime": "2026-11-28T14:10:00.00Z",
    "type": "FREE_VOUCHER",
    "brandId": 1,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "tier": "PLATINUM",
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true
        }
    ],
    "redemptionType": "PHYSICAL_REWARD",
    "cardSeries":["26NOV2024TRYLEN17","26NOV2024TRYLEN18"]
}
```

```
{
    "id": 256354,
  	"name": "RewardName",
    "description": "TestReward",
    "startTime": "2025-11-28T13:56:00.00Z",
    "endTime": "2026-11-28T14:10:00.00Z",
    "type": "FREE_VOUCHER",
    "brandId": 1,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "tier": "PLATINUM",
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true
        }
    ],
    "redemptionType": "PHYSICAL_REWARD",
    "cardSeries":["26NOV2024TRYLEN17","26NOV2024TRYLEN18"]
}
```

```
{
    "id": 256354,
  	"name": "RewardName",
    "description": "TestReward",
    "startTime": "2025-11-28T13:56:00.00Z",
    "endTime": "2026-11-28T14:10:00.00Z",
    "type": "FREE_VOUCHER",
    "brandId": 1,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "tier": "PLATINUM",
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true
        }
    ],
    "redemptionType": "PHYSICAL_REWARD",
    "labels":[12751,5462]
}
```

```
{
    "id": 256354,
  	"name": "RewardName",
    "description": "TestReward",
    "startTime": "2025-11-28T13:56:00.00Z",
    "endTime": "2026-11-28T14:10:00.00Z",
    "type": "FREE_VOUCHER",
    "brandId": 1,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "tier": "PLATINUM",
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true
        }
    ],
    "redemptionType": "PHYSICAL_REWARD",
    "labels":[12751,5462]
}
```

```
{
    "name": "testcreate1",
    "description": "testcreate1",
    "startTime": "2025-01-27T08:07:05Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "redemptionType": "MILES",
    "brandId": "1",
    "enabled": true,
   
"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio":0.33
        }
    ],
 
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 1000,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 1000,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
 
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testcreate1",
            "description": "testcreate1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
    "name": "testcreate1",
    "description": "testcreate1",
    "startTime": "2025-01-27T08:07:05Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "redemptionType": "MILES",
    "brandId": "1",
    "enabled": true,
   
"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio":0.33
        }
    ],
 
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 1000,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "QUANTITY",
                "limit": 1000,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "QUANTITY",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
 
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testcreate1",
            "description": "testcreate1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
    "name": "testcreate2",
    "description": "testcreate2",
    "startTime": "2025-01-27T08:22:20Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "redemptionType": "MILES",
    "brandId": "1",
    "enabled": true,
    
    
    
    
    
    

"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio":0.33
        }
    ],
    
    
    
    
    
    
    
    
    
    
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 1000,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 1000,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testcreate1",
            "description": "testcreate1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
    "name": "testcreate2",
    "description": "testcreate2",
    "startTime": "2025-01-27T08:22:20Z",
    "endTime": "2026-10-31T11:59:30Z",
    "priority": 1,
    "type": "VOUCHER",
    "redemptionType": "MILES",
    "brandId": "1",
    "enabled": true,
    
    
    
    
    
    

"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio":0.33
        }
    ],
    
    
    
    
    
    
    
    
    
    
    "restrictions": {
        "customerLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 1000,
                "repeatFrequencyType": "DAYS",
                "interval": "30"
            },
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 1000,
                "repeatFrequencyType": "MONTHS",
                "interval": "12"
            }
        ],
        "rewardLevel": [
            {
                "kpi": "REDEMPTION_VALUE",
                "limit": 10000,
                "repeatFrequencyType": "NO_LIMIT"
            }
        ]
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "testcreate1",
            "description": "testcreate1",
            "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
            "termNConditions": "t&c",
            "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
            "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
            "enabled": true
        }
    ],
    "isactive" : true
}
```

```
{
    "startTime": "2025-02-12T05:59:00.000Z",
    "endTime": "2025-12-30T12:50:20.000Z",
    "type": "FREE_VOUCHER",
    "brandId": 61,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "tier": "PLATINUM",
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true,
            "images":[
                {
                    "name":"imageName",
                    "isExternal": true,
                    "url":"mypic.com",
                    "altText":"product picture"
                }
            ],
            "videos":[
                {
                    "name":"videoName",
                    "isExternal": true,
                    "url":"mypic.com",
                    "altText":"product picture"
                }
            ]
        }
    ],

    "redemptionType": "PHYSICAL_REWARD"
     
}
```

```
{
    "startTime": "2025-02-12T05:59:00.000Z",
    "endTime": "2025-12-30T12:50:20.000Z",
    "type": "FREE_VOUCHER",
    "brandId": 61,
    "priority": 1,
    "enabled": true,
    "intouchPoints": 0,
    "tier": "PLATINUM",
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "termNConditionsId": "EXDR12987R",
            "imageId": "EXDR12987U",
            "thumbnailId": "EXDR12987T",
            "enabled": true,
            "images":[
                {
                    "name":"imageName",
                    "isExternal": true,
                    "url":"mypic.com",
                    "altText":"product picture"
                }
            ],
            "videos":[
                {
                    "name":"videoName",
                    "isExternal": true,
                    "url":"mypic.com",
                    "altText":"product picture"
                }
            ]
        }
    ],

    "redemptionType": "PHYSICAL_REWARD"
     
}
```

# Response parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| status | Object | Contains details about the status of the request |

| success | Boolean | Indicates the success of the request, true in this case |

| code | Integer | Status code associated with the response, 6006 |

| message | String | Descriptive message, "Reward updated successfully" |

| reward | Object | Contains details about the reward |

| id | Integer | Unique identifier for the updated reward, 90819 |



```
{
    "status": {
        "success": true,
        "code": 6006,
        "message": "Reward updated successfully"
    },
    "reward": {
        "id": 90819
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 6006,
        "message": "Reward updated successfully"
    },
    "reward": {
        "id": 90819
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Multiple payments is not supported within FREE and CONV_RATIO modes,Conversion ratio can be set only for MILES, CASH_WALLET and CHARITY content types"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Multiple payments is not supported within FREE and CONV_RATIO modes,Conversion ratio can be set only for MILES, CASH_WALLET and CHARITY content types"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Redemption type cannot be changed once the reward has started"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Redemption type cannot be changed once the reward has started"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 12045,
        "message": "Unable to update reward as Card series not found for series_code: BUKLPRM2020393ANJK"
    },
    "reward": null
}
```

```
{
    "status": {
        "success": false,
        "code": 12045,
        "message": "Unable to update reward as Card series not found for series_code: BUKLPRM2020393ANJK"
    },
    "reward": null
}
```

```
{
    "status": {
        "success": false,
        "code": 12048,
        "message": "Unable to update reward as Label not found for label_id: 17244324236"
    },
    "reward": null
}
```

```
{
    "status": {
        "success": false,
        "code": 12048,
        "message": "Unable to update reward as Label not found for label_id: 17244324236"
    },
    "reward": null
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 400 | Redemption type cannot be changed once the reward has started |

| 400 | Passed loyalty programId is not exists |

| 400 | Passed entityId is not exists |

| 3014 | Unable to update reward as org doesn't have the custom field/s: labels,tag |

| 12045 | Unable to update reward as card series not found |

| 12048 | Unable to update reward as label not found |



`Try It!`