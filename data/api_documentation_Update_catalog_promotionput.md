# Update catalog promotionput

This API is used to update catalog promotion and link/de-link to a reward(s)

Expired: Do not allow any of the fields to be edited.

Running:

1. Cannot change : start date, discount_type, discount_value.

2. Can change (impacts rewards discounted points)

end date: end date >= now and end date >= start date.

isEnabled - Disable but cannot enable again. After disabling, the linked reward can be linked to another active promotion. Re-enabling will violate the constraint of only one reward linked to an active promotion.

Linking a reward - update the link table accordingly.

Unlinking a reward - Set isActive = false in the link table.

1. Can change other details of the promotion (name, desc….etc

Scheduled: Similar to running but start_date, discount_type, discount_value fields also can be updated.

Cannot delete a promotion similar to a reward.

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

| URI | /api_gateway/rewards/core/v1/promotion/{reward Id}/brand/{brand Id} |

| HTTP Method | PUT |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/112295/brand/1

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/promotion/112295/brand/1
```

# Request path parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| brandId* | String | You can use theAPIand retrieve the brand ID of your brand. |

| Promotion Id* | String | Unique identifier for the promotion. Ex: 112295 |



[API](https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll)

# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| endTime | String | The end time of the promotion. Ex: 2024-10-25T11:16:00Z |

| discountType* | Enum | Type of discount applied to the promotion. Supported values: ABSOLUTE, PERCENTAGE, FIXED |

| discountValue* | Number | Value of the discount. |

| languageSpecificInfo | Array | Array containing language-specific information. |

| languageCode | String | Language code for the specific entry. Ex: en |

| name | String | Name of the item in the specified language |

| description | String | Description of the item in the specified language |

| enabled | Boolean | Indicates if the language specific info is enabled |

| rewardIds* | Array of Integers | Array of reward IDs associated with the promotion |



```
{
       "endTime": "2024-10-25T11:16:00Z",
       "discountType": "ABSOLUTE",
       "discountValue": 1.00,
       "languageSpecificInfo": [
           {
               "languageCode": "en",
               "name": "P1- R-5165 P1- R-5165 upadted 2.1",
               "description": "description",
               "enabled": true
           }
       ],
   "rewardIds":
   [
       112295
   ]
}
```

```
{
       "endTime": "2024-10-25T11:16:00Z",
       "discountType": "ABSOLUTE",
       "discountValue": 1.00,
       "languageSpecificInfo": [
           {
               "languageCode": "en",
               "name": "P1- R-5165 P1- R-5165 upadted 2.1",
               "description": "description",
               "enabled": true
           }
       ],
   "rewardIds":
   [
       112295
   ]
}
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| status | Object | Container for the status information |

| success | Boolean | Indicates the success of the operation |

| code | Integer | Status code for the operation |

| message | String | Description message of the operation status |

| catalogPromotion | Object | Container for catalog promotion information |

| id | Integer | Unique identifier of the catalog promotion |

| failedRewards | Array (Empty in this case) | Array containing any failed rewards information |



```
{
   "status": {
       "success": true,
       "code": 11021,
       "message": "Catalog promotion updated successfully."
   },
   "catalogPromotion": {
       "id": 8
   },
   "failedRewards": []
}
```

```
{
   "status": {
       "success": true,
       "code": 11021,
       "message": "Catalog promotion updated successfully."
   },
   "catalogPromotion": {
       "id": 8
   },
   "failedRewards": []
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 500 | Internal server error. |



`Try It!`