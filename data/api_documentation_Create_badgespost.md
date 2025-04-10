# Create badgespost

This API allows you to create new badges.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

> ❗️AttentionYou cannot claim a badge during badge creation or updation.Badge name should be unique and is case sensitive.

## ❗️Attention

Attention

You cannot claim a badge during badge creation or updation.

Badge name should be unique and is case sensitive.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/v1/badges/badgeMeta |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta
```

# Header

| Header | Value | Description |

| --- | --- | --- |

| X-CAP-BADGES-MIGRATION | migration | It enables you to use historical badges. If you are enabling this header, you can use a historical badge and it allows you to define a past date in the StartOn field.Notes:- - RequestId can be either passed in API headers or will be auto-generated for not added for all imported records in a single batch. |



# Request body parameters

| Field Name | Data Type | Description |

| --- | --- | --- |

| name* | String | Name of the badge. Ex: 10% off on watches.Badge name should be unique and is case sensitive. |

| description | String | Brief description of the badge. Ex: Purchase 2 watches get a $100 voucher. |

| startOn* | Date Time | Timestamp indicating when the badge starts. It cannot be set more than 100 years in the past.-Timestamp in epoch time. |

| expiresOn* | Date Time | Timestamp indicating when the badge ends.Timestamp in epoch time. |

| earnedBadgeExpiry* | Object | Object containing details about the expiry of earned badges. |

| expiryType* | Enum | Type of badge expiry.Supported values: "RELATIVE","ABSOLUTE","NEVER"Relative expiry: Based on when the badge was issued.Absolute expiry: Based on the fixed date from the badge issual.Never: The badges will never expire after issual.When the expiryType of the badge is set to NEVER, then the badge expiry is set to 100 years from now. |

| type* | Enum | Type refers to the badge expiration method based on fixed date or badge_meta.Supported values: WITH_BADGE_META, FIXED_DATE1f. WITH_BADGE_META: The expiry of the badge is based on the mandatoryexpiresOnparameter.2. FIXED_DATE: The expiry of the badge is based on the expiry date of the incentives associated with the badge. |

| expiresOn | Date | Timestamp indicating when the badge expires. It is mandatory to pass thisexpiresOnparameter when FIXED_DATE is chosen. |

| expireWithBadgeMeta* | Boolean | Indicates if the badge should expire based on the mandatory parameterexpiresOn. |

| relativeExpiryType | Enum | Expiry type relative to the badge issue.Supprted values:DAYS/WEEKS/MONTHS.Applicable when expiryType is RELATIVE. |

| ownership* | Object | An object containing ownership restrictions.You cannot remove an owner if it has an active badge claim associated with it. For example, you cannot remove Loyalty as the owner if there is an active badge associated with it. |

| restrictedToOwners* | Object | List of owner categories that are allowed to claim the badge. The owner indicates the module where the badge will be used.Supported values: Loyalty, Loyalty_Promotion, Referral_Campaigns, Journeys, Audience_Campaigns, Rewards_Catalog, Goodwill_Module, Milestones, Historical_Import |

| customerConstraints | Array | List of constraints specific to customers.  This is applicable when earnType is EARN |

| constraintType | Enum | Type of customer constraint. Customer constraints are the restrictions applied by the brands to have control on the issuals of badges to a particular customer.Supported values: "CUSTOMER_BADGE_FIXED_WINDOW" , "CUSTOMER_BADGE_FIXED_VALUE",  "CUSTOMER_BADGE_ROLLING_WINDOW" and "CUSTOMER_BADGE_NO_LIMIT".CUSTOMER_BADGE_FIXED_WINDOW: Refers to the fixed earn limit for the customer.In this constraint type, the system creates fixed windows based on the duration type chosen, during this time frame the customer can earn the badge.CUSTOMER_BADGE_ROLLING_WINDOW refers to the customer's earning limit calculated over a certain period in the past day/week/month. |

| durationType | Enum | Duration of the badge constraint. Supported values: DAILY, WEEKLY, MONTHLY.If durationType is set to Daily, refreshRate is a mandatory parameter. The system will create daily windows for the duration of the promotion.If durationType is set to Weekly, startDayOfTheWeek becomes a mandatory parameter, default value: Monday.For weekly, the system creates cycles as per the logic given below:- Badge start date - 25 Sep- Badge end date - 30 Oct- Limit cycles will be 25 Sep - 1 Oct, 2 Oct - 8 Oct, 9 Oct - 15 Oct. So on till 30 Oct. |

| refreshRate | Integer | Refers to the number of days the fixed window duration is. |

| startDayOfTheWeek | Enum | Day on which the cycle starts. Supported values: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY. |

| maxEarnLimit | Integer | The maximum limit a customer can earn during the week. |

| maxEarnForDays | Integer | Maximum earning limit per dayThis is applicable for CUSTOMER_BADGE_ROLLING_WINDOW. |

| rollForDays | Integer | The number of days for rolling calculation. Applicable only when CUSTOMER_BADGE_ROLLING_WINDOW is opted. |

| maxEarnForWeeks | Integer | Maximum earning limit per week. Applicable only when CUSTOMER_BADGE_ROLLING_WINDOW is opted. |

| rollForWeeks | Integer | Number of weeks for rolling calculation. Applicable only when CUSTOMER_BADGE_ROLLING_WINDOW is opted. |

| maxEarnForMonths | Integer | Maximum earning limit per month. Applicable only when CUSTOMER_BADGE_ROLLING_WINDOW is opted. |

| rollForMonths | Integer | Number of months for rolling calculation. Applicable only when CUSTOMER_BADGE_ROLLING_WINDOW is opted. |

| badgeConstraints | Array | Restrictions that are applied on the badge.This is applicable when issue type is EARN. |

| constraintType | Enum | Type of badge constraint. Badge constraints are the restrictions applied by the brands on the badges to create a limit the overall badges that can be issued to customer.Supported values: "BADGE_FIXED_WINDOW", "BADGE_ROLLING_WINDOW", "BADGE_FIXED_VALUE","BADGE_NO_LIMIT".BADGE_FIXED_WINDOW refers to the fixed earn limit of the badge. The system will create fixed windows based on the duration type chosen.BADGE_ROLLING_WINDOW refers to the badge earn limit calculated over a certain period in the past day/week/month. |

| durationType | Enum | Duration of the badge constraint. Supported values: DAILY, WEEKLY, MONTHLY.If durationType is set to Daily, refreshRate is a mandatory parameter. The system will create daily windows for the duration of the promotion.If durationType is set to Weekly, startDayOfTheWeek becomes a mandatory parameter, default value: Monday.For weekly, the system will create cycles as per the logic given below:- Badge start date - 25 Sep- Badge end date - 30 Oct- Limit cycles will be 25 Sep - 1 Oct, 2 Oct - 8 Oct, 9 Oct - 15 Oct. So on till 30 Oct. |

| refreshRate | Integer | Refers to the number of days the fixed window duration is. |

| startDayOfTheWeek | Enum | Day on which the cycle starts. Supported values: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY. |

| maxEarnLimit | Integer | The maximum limit a customer can earn during the period. |

| rollType | Enum | Timeframe of the rolling window.Supprted values:DAYS/WEEKS/MONTHS |

| rollValue | Integer | Value for rolling window calculation. |

| maxEarnLimit | Integer | Maximum limit a badge can earn. |

| earnType* | Enum | The method the brand can issue the badge.Supported values: EARN, ISSUE_EARN.Earn:The selected customers are enrolled for the badge and upon fulfillment of the earn condition, the badge is issued.Issue Earn:The Badges are issued directly to the customer who fulfills the earn condition (no enrolment to badges-related program).Note: If the earnType is ISSUE_EARN, use the request body,Issue Earn Typetab below. |

| defaultTillId | Integer | Unique till ID. A Till is a POS machine where the billings happen.NOTE:If the defaultTillId is not defined, the createdBy field can be used to identify the user who created the badge. |

| active* | Boolean | Indicates whether the badge is currently active. |

| customFields | Object | List of custom fields. |

| customFieldName | String | Name of the custom field |

| customFieldValue | String | Value of the custom field. |

| badgeGroupId | String | Unique group ID associated with the badge.To add the badge to a group, passbadgeGroupIdvalue. |

| badgeRank | Integer | Badge rank is the rank of a badge within a group, the user can define the badge rank even if the group is not linked with the badge. |



`expiresOn`

`expiresOn`

`expiresOn`

`badgeGroupId`

```
{
    "name": "Badge Issue earnn",
    "description": "Make 5 transactions",
    "startOn": 1738348865,
    "expiresOn": 1769841665,
    "earnType": "ISSUE_EARN",
    "badgeRank": 3,
    "earnedBadgeExpiry": {
        "relativeExpirytype": "WEEKS",
        "value": 2,
        "expiryType": "RELATIVE"
    },
    "issuedBadgeExpiry": {
        "type": "FIXED_DATE",
        "expiresOn": 1926235957,
        "expiryType": "ABSOLUTE"
    },
    "isActive": true,
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Audience_Campaigns"
        ]
    },
    "images": [
        {
            "name": "Issued",
            "fileSvcHandle": "qwer-8634-8938",
            "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
            "tag": "EARNED"
        }
    ],
    "customerConstraints": [
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
            "maxEarnLimit": 2,
            "durationType": "DAYS",
            "refreshRate": 3,
            "startDayOfTheWeek": 1
        }
    ],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 10000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 300
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 3000
        }
    ]
}
```

```
{
    "name": "Badge Issue earnn",
    "description": "Make 5 transactions",
    "startOn": 1738348865,
    "expiresOn": 1769841665,
    "earnType": "ISSUE_EARN",
    "badgeRank": 3,
    "earnedBadgeExpiry": {
        "relativeExpirytype": "WEEKS",
        "value": 2,
        "expiryType": "RELATIVE"
    },
    "issuedBadgeExpiry": {
        "type": "FIXED_DATE",
        "expiresOn": 1926235957,
        "expiryType": "ABSOLUTE"
    },
    "isActive": true,
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Audience_Campaigns"
        ]
    },
    "images": [
        {
            "name": "Issued",
            "fileSvcHandle": "qwer-8634-8938",
            "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
            "tag": "EARNED"
        }
    ],
    "customerConstraints": [
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
            "maxEarnLimit": 2,
            "durationType": "DAYS",
            "refreshRate": 3,
            "startDayOfTheWeek": 1
        }
    ],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 10000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 300
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 3000
        }
    ]
}
```

```
{
    "name": "Badge Issue earn",
    "description": "Make 5 transactions",
    "startOn": 1716803487,
    "expiresOn": 1726804000,
     "earnType": "ISSUE_EARN",
         "badgeRank": 3,
    "earnedBadgeExpiry": {
        "relativeExpirytype": "WEEKS",
        "value": 2,
        "expiryType": "RELATIVE"
    },
    "issuedBadgeExpiry": {
        "type": "FIXED_DATE",
        "expiresOn": 1926235957,
        "expiryType": "ABSOLUTE"
    },
    "isActive": true,
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Audience_Campaigns"
        ]
    },
  "images": [
    {
      "name": "Issued",
      "fileSvcHandle": "qwer-8634-8938",
        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
        "tag": "EARNED"
    }
  ],
"customerConstraints": [
    {
      "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
      "maxEarnLimit": 2,
      "durationType":"DAYS",
      "refreshRate":3,
      "startDayOfTheWeek":1
    }
],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 10000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 300
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 3000
        }
    ]
}
```

```
{
    "name": "Badge Issue earn",
    "description": "Make 5 transactions",
    "startOn": 1716803487,
    "expiresOn": 1726804000,
     "earnType": "ISSUE_EARN",
         "badgeRank": 3,
    "earnedBadgeExpiry": {
        "relativeExpirytype": "WEEKS",
        "value": 2,
        "expiryType": "RELATIVE"
    },
    "issuedBadgeExpiry": {
        "type": "FIXED_DATE",
        "expiresOn": 1926235957,
        "expiryType": "ABSOLUTE"
    },
    "isActive": true,
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Audience_Campaigns"
        ]
    },
  "images": [
    {
      "name": "Issued",
      "fileSvcHandle": "qwer-8634-8938",
        "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
        "tag": "EARNED"
    }
  ],
"customerConstraints": [
    {
      "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
      "maxEarnLimit": 2,
      "durationType":"DAYS",
      "refreshRate":3,
      "startDayOfTheWeek":1
    }
],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 10000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 300
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 3000
        }
    ]
}
```

```
{
    "name": "Badge_Earn",
    "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
    "startOn": 1716803487,
    "expiresOn": 1726804000,
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expireWithBadgeMeta": true
    },
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Milestones"
        ]   
    },
    "customerConstraints": [
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
            "maxEarnLimit": 100
        }
    ],
    "badgeConstraints": [
           {
      		"constraintType": "BADGE_FIXED_WINDOW",
      		"maxEarnLimit": 2,
      		"durationType":"DAYS",
      		"refreshRate":3,
      		"startDayOfTheWeek":1
   		 }
    ],
    "earnType": "EARN",
    "tags": [
        {
            "name": "Type1",
            "value": "Birthday"
        },
        {
            "name": "Priority",
            "value": "1"
        },
        {
            "name": "category",
            "value": "rare"
        }
    ],
    "active": false
}
```

```
{
    "name": "Badge_Earn",
    "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
    "startOn": 1716803487,
    "expiresOn": 1726804000,
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expireWithBadgeMeta": true
    },
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Milestones"
        ]   
    },
    "customerConstraints": [
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
            "maxEarnLimit": 100
        }
    ],
    "badgeConstraints": [
           {
      		"constraintType": "BADGE_FIXED_WINDOW",
      		"maxEarnLimit": 2,
      		"durationType":"DAYS",
      		"refreshRate":3,
      		"startDayOfTheWeek":1
   		 }
    ],
    "earnType": "EARN",
    "tags": [
        {
            "name": "Type1",
            "value": "Birthday"
        },
        {
            "name": "Priority",
            "value": "1"
        },
        {
            "name": "category",
            "value": "rare"
        }
    ],
    "active": false
}
```

```
{
    "name": "Badge_Issue_earntype",
    "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
    "startOn": 1716803487,
    "expiresOn": 1726804000,
     "earnType": "ISSUE_EARN",
    "earnedBadgeExpiry": {
        "relativeExpirytype": "WEEKS",
        "value": 2,
        "expiryType": "RELATIVE"
    },
    "issuedBadgeExpiry": {
        "type": "FIXED_DATE",
        "expiresOn": 1926235957,
        "expiryType": "ABSOLUTE"
    },
    "isActive": true,
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Audience_Campaigns"
        ]
    },
    "customerConstraints": [
       
        {
            "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
            "maxEarnForDays": 50,
            "rollForDays": 5,
            "maxEarnForWeeks": 100,
            "rollForWeeks": 1,
            "maxEarnForMonths": 200,
            "rollForMonths": 1
        },
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
            "maxEarnLimit": 5000
        }
    ],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 10000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 300
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 3000
        }
    ]
}
```

```
{
    "name": "Badge_Issue_earntype",
    "description": "Make 5 transactions in a month, get a badge and 10% off coupon",
    "startOn": 1716803487,
    "expiresOn": 1726804000,
     "earnType": "ISSUE_EARN",
    "earnedBadgeExpiry": {
        "relativeExpirytype": "WEEKS",
        "value": 2,
        "expiryType": "RELATIVE"
    },
    "issuedBadgeExpiry": {
        "type": "FIXED_DATE",
        "expiresOn": 1926235957,
        "expiryType": "ABSOLUTE"
    },
    "isActive": true,
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Audience_Campaigns"
        ]
    },
    "customerConstraints": [
       
        {
            "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
            "maxEarnForDays": 50,
            "rollForDays": 5,
            "maxEarnForWeeks": 100,
            "rollForWeeks": 1,
            "maxEarnForMonths": 200,
            "rollForMonths": 1
        },
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
            "maxEarnLimit": 5000
        }
    ],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 10000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 300
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 3000
        }
    ]
}
```

```
{
    "name": "test6578791",
    "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
    "startOn": 1799632870,
    "expiresOn": 1828754110,
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expireWithBadgeMeta": true
    },
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Milestones"
        ],
        "claims": [
            {
                "ownerType": "Loyalty",
                "referenceId": "626"
            }
        ]
    },
    "customerConstraints": [
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
            "maxEarnLimit": 100
        },
        {
            "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
            "maxEarnForDays": 1,
            "rollForDays": 1,
            "maxEarnForWeeks": 2,
            "rollForWeeks": 1,
            "maxEarnForMonths": 10,
            "rollForMonths": 1
        }
    ],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 1000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 100
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 2000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "MONTHS",
            "rollValue": 1,
            "maxEarnLimit": 10000
        }
    ],
    "earnType": "EARN",
            "points": 100,
            "programId": 626,
            "promotionId": 80332,
            "allocationStrategyId": 1489,
            "expirationStrategyId": 3843
        }
    ],
    "tags": [
        {
            "name": "Type1",
            "value": "Birthday"
        },
        {
            "name": "Priority",
            "value": "1"
        },
        {
            "name": "category",
            "value": "rare"
        }
    ],
    "customFields": {
      "CF1" : "CF1",
      "CF2 INTEGER" : "1"
     },
    "active": false
}
```

```
{
    "name": "test6578791",
    "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
    "startOn": 1799632870,
    "expiresOn": 1828754110,
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expireWithBadgeMeta": true
    },
    "ownership": {
        "restrictedToOwners": [
            "Loyalty",
            "Milestones"
        ],
        "claims": [
            {
                "ownerType": "Loyalty",
                "referenceId": "626"
            }
        ]
    },
    "customerConstraints": [
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_VALUE",
            "maxEarnLimit": 100
        },
        {
            "constraintType": "CUSTOMER_BADGE_ROLLING_WINDOW",
            "maxEarnForDays": 1,
            "rollForDays": 1,
            "maxEarnForWeeks": 2,
            "rollForWeeks": 1,
            "maxEarnForMonths": 10,
            "rollForMonths": 1
        }
    ],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_FIXED_VALUE",
            "maxEarnLimit": 1000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "DAYS",
            "rollValue": 1,
            "maxEarnLimit": 100
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "WEEKS",
            "rollValue": 1,
            "maxEarnLimit": 2000
        },
        {
            "constraintType": "BADGE_ROLLING_WINDOW",
            "rollType": "MONTHS",
            "rollValue": 1,
            "maxEarnLimit": 10000
        }
    ],
    "earnType": "EARN",
            "points": 100,
            "programId": 626,
            "promotionId": 80332,
            "allocationStrategyId": 1489,
            "expirationStrategyId": 3843
        }
    ],
    "tags": [
        {
            "name": "Type1",
            "value": "Birthday"
        },
        {
            "name": "Priority",
            "value": "1"
        },
        {
            "name": "category",
            "value": "rare"
        }
    ],
    "customFields": {
      "CF1" : "CF1",
      "CF2 INTEGER" : "1"
     },
    "active": false
}
```

```
{
    "orgId": 50933,
    "name": "demo testkerl2n26df132",
    "description": "string",
    "startOn": "2023-11-14T21:51:00.192Z",
    "expiresOn": "2026-12-03T15:19:37.192Z",
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expiresOn": "2024-11-03T15:19:37.192Z",
        "expireWithBadgeMeta": true
    },
    "issuedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expiresOn": "2024-11-03T15:19:37.192Z",
        "expireWithBadgeMeta": true
    },
    "images": [
        {
            "name": "string",
            "fileSvcHandle": "string",
            "url": "string",
            "tag": "UN_EARNED"
        }
    ],
    "ownership": {
        "restrictedToOwners": [
            "Loyalty"
        ],
        "claims": [
            {
                "badgeMetaId": "string",
                "ownerType": "Loyalty",
                "referenceId": "string"
            }
        ]
    },
    "customerConstraints": [
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "rollType": "DAYS",
            "rollValue": 0,
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnForDays": 0,
            "rollForDays": 0,
            "maxEarnForWeeks": 0,
            "rollForWeeks": 0,
            "maxEarnForMonths": 0,
            "rollForMonths": 0
        }
    ],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "rollType": "DAYS",
            "rollValue": 0,
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnForDays": 0,
            "rollForDays": 0,
            "maxEarnForWeeks": 0,
            "rollForWeeks": 0,
            "maxEarnForMonths": 0,
            "rollForMonths": 0
        }
    ],
    "tags": [
        {
            "name1": "string",
            "value": "string"
        }
    ],
    "earnType": "EARN",
    "issuedCount": 0,
    "earnedCount": 0,
    "status": "LIVE",
    "createdOn": "2023-11-03T15:19:37.192Z",
    "createdBy": 0,
    "lastUpdatedOn": "2023-11-03T15:19:37.192Z",
    "lastUpdatedBy": 0,
     "customFields": {
      "CF1" : "CF1",
      "CF2 INTEGER" : "1"
     },
    "active": true
}
```

```
{
    "orgId": 50933,
    "name": "demo testkerl2n26df132",
    "description": "string",
    "startOn": "2023-11-14T21:51:00.192Z",
    "expiresOn": "2026-12-03T15:19:37.192Z",
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expiresOn": "2024-11-03T15:19:37.192Z",
        "expireWithBadgeMeta": true
    },
    "issuedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "WITH_BADGE_META",
        "expiresOn": "2024-11-03T15:19:37.192Z",
        "expireWithBadgeMeta": true
    },
    "images": [
        {
            "name": "string",
            "fileSvcHandle": "string",
            "url": "string",
            "tag": "UN_EARNED"
        }
    ],
    "ownership": {
        "restrictedToOwners": [
            "Loyalty"
        ],
        "claims": [
            {
                "badgeMetaId": "string",
                "ownerType": "Loyalty",
                "referenceId": "string"
            }
        ]
    },
    "customerConstraints": [
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "rollType": "DAYS",
            "rollValue": 0,
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnForDays": 0,
            "rollForDays": 0,
            "maxEarnForWeeks": 0,
            "rollForWeeks": 0,
            "maxEarnForMonths": 0,
            "rollForMonths": 0
        }
    ],
    "badgeConstraints": [
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT"
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "rollType": "DAYS",
            "rollValue": 0,
            "maxEarnLimit": 0
        },
        {
            "constraintType": "BADGE_NO_LIMIT",
            "maxEarnForDays": 0,
            "rollForDays": 0,
            "maxEarnForWeeks": 0,
            "rollForWeeks": 0,
            "maxEarnForMonths": 0,
            "rollForMonths": 0
        }
    ],
    "tags": [
        {
            "name1": "string",
            "value": "string"
        }
    ],
    "earnType": "EARN",
    "issuedCount": 0,
    "earnedCount": 0,
    "status": "LIVE",
    "createdOn": "2023-11-03T15:19:37.192Z",
    "createdBy": 0,
    "lastUpdatedOn": "2023-11-03T15:19:37.192Z",
    "lastUpdatedBy": 0,
     "customFields": {
      "CF1" : "CF1",
      "CF2 INTEGER" : "1"
     },
    "active": true
}
```

# Response parameters

| Parameter | Description |

| --- | --- |

| data | The main container for the response data. |

| id | Unique identifier for the data item. |

| orgId | Identifier for the organization associated with the data. |

| name | Name of the badge. |

| description | Description of the badge. |

| startOn | Timestamp for when the badge starts. |

| expiresOn | Timestamp for when the badge expires. |

| earnedBadgeExpiry | Details about the expiry of the earned badge. |

| expiryType | Type of badge expiry.Supported values: "RELATIVE","ABSOLUTE","NEVER"Relative expiry: Based on when the badge was issued.Absolute expiry: Based on the fixed date from the badge issual.Never: The badges will never expiry after issual. |

| type | Type of expiry.Supported values: DAYS/WEEKS/MONTHS.Relative expiry is based on when the badge was issued. |

| expiresOn | The timestamp for when the badge expires. |

| expireWithBadgeMeta | Indicates if expiry is linked with badge metadata. |

| issuedBadgeExpiry | Details about the expiry of the issued badge. |

| images | Array of images related to the item. |

| name | Name of the image. |

| fileSvcHandle | Service handle for the image file. |

| url | URL of the image. |

| tag | Tag associated with the image. |

| ownership | The module for which the badge is being created. |

| restrictedToOwners | Lists owner categories that can claim the badge, such as "Loyalty" and "Milestones" etc. |

| customerConstraints | Limit on how many quantities of a badge can be given to a particular customer. |

| badgeConstraints | Limit on how many quantities of a reward can be given to customers |

| badgeGroupId | Unique group ID associated with the badge. |

| badgeRank | Badge rank is the rank within a group, user can define the badge rank even if group is not linked with the badge. |

| earnType | The method the brand can issue the badge.Supported values: EARN, ISSUE EARN.Earn: The selected customers are enrolled for the badge and upon fulfillment of the earn condition, the badge is issued.Issue Earn: The Badges are issued directly to the customer who fulfills the earn condition. |

| issuedCount | Count of how many times the badge has been issued. |

| earnedCount | Count of how many times the badge has been earned. |

| status | The badge can have three statuses upon creation.Supported values: LIVE, UPCOMING, ENDED/EXPIRED.LIVE: The badges which are in live state and can be earned.UPCOMING: The badges which are upcoming on a further date.EXPIRED/ENDED: The badges which have expired and cannot be earned. |

| createdOn | Timestamp for when the badge was created. |

| createdBy | Identifier of the user who created the badge. |

| lastUpdatedOn | Timestamp for the last update made to the badge. |

| lastUpdatedBy | Identifier of the user who last updated the badge. |

| active | Indicates whether the badge is active or not. |

| errors | Contains details of any errors. |

| warnings | Contains details of any warnings. |



```
{
    "data": {
        "id": "662749408fe258516a88fe89",
        "orgId": 100458,
        "name": "BADGE123",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1716803487.000000000,
        "expiresOn": 1726804000.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "issuedBadgeExpiry": null,
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Milestones",
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 1,
                "cycleStatus": "UPCOMING",
                "startDate": 1716803487.000000000,
                "endDate": 1726804000.000000000
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_WINDOW",
                "referenceId": "a1350b49-eb8e-3500-9e43-01f5493c91c1",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 2,
                "startDate": 1716803487.000000000,
                "endDate": 1726804000.000000000,
                "cycleStatus": "UPCOMING"
            }
        ],
        "benefits": [
            {
                "benefitType": "COUPON",
                "seriesId": 6789
            },
            {
                "benefitType": "COUPON",
                "seriesId": 13686
            },
            {
                "benefitType": "LOYALTY_POINTS",
                "programId": 626,
                "promotionId": 80332,
                "allocationStrategyId": 1489,
                "expirationStrategyId": 3843,
                "defaultTillId": null
            },
            {
                "benefitType": "COUPON",
                "seriesId": 1234
            }
        ],
        "tags": [
            {
                "name": "Type1",
                "value": "Birthday"
            },
            {
                "name": "category",
                "value": "rare"
            },
            {
                "name": "Priority",
                "value": "1"
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1713850688.811401000,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850688.811401000,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": false
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "662749408fe258516a88fe89",
        "orgId": 100458,
        "name": "BADGE123",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1716803487.000000000,
        "expiresOn": 1726804000.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "WITH_BADGE_META",
            "expiresOn": null,
            "expireWithBadgeMeta": true
        },
        "issuedBadgeExpiry": null,
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Milestones",
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 1,
                "cycleStatus": "UPCOMING",
                "startDate": 1716803487.000000000,
                "endDate": 1726804000.000000000
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_WINDOW",
                "referenceId": "a1350b49-eb8e-3500-9e43-01f5493c91c1",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 2,
                "startDate": 1716803487.000000000,
                "endDate": 1726804000.000000000,
                "cycleStatus": "UPCOMING"
            }
        ],
        "benefits": [
            {
                "benefitType": "COUPON",
                "seriesId": 6789
            },
            {
                "benefitType": "COUPON",
                "seriesId": 13686
            },
            {
                "benefitType": "LOYALTY_POINTS",
                "programId": 626,
                "promotionId": 80332,
                "allocationStrategyId": 1489,
                "expirationStrategyId": 3843,
                "defaultTillId": null
            },
            {
                "benefitType": "COUPON",
                "seriesId": 1234
            }
        ],
        "tags": [
            {
                "name": "Type1",
                "value": "Birthday"
            },
            {
                "name": "category",
                "value": "rare"
            },
            {
                "name": "Priority",
                "value": "1"
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1713850688.811401000,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850688.811401000,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": false
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "662748a08fe258516a88fe88",
        "orgId": 100458,
        "name": "Badge Issue earn",
        "description": "Make 5 transactions",
        "startOn": 1716803487.000000000,
        "expiresOn": 1726804000.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "WEEKS",
            "value": 2
        },
        "issuedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1926235957.000000000,
            "expireWithBadgeMeta": false
        },
        "images": [
            {
                "name": "Issued",
                "fileSvcHandle": "qwer-8634-8938",
                "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                "tag": "EARNED"
            }
        ],
        "ownership": {
            "restrictedToOwners": [
                "Audience_Campaigns",
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 2,
                "cycleStatus": "UPCOMING",
                "startDate": 1716803487.000000000,
                "endDate": 1926235957.000000000
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 10000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 3000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 1,
                "maxEarnLimit": 300
            }
        ],
        "benefits": [
            {
                "benefitType": "COUPON",
                "seriesId": 13745
            }
        ],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": 3,
        "earnType": "ISSUE_EARN",
        "status": "UPCOMING",
        "createdOn": 1713850528.634380000,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850528.634380000,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": true
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "id": "662748a08fe258516a88fe88",
        "orgId": 100458,
        "name": "Badge Issue earn",
        "description": "Make 5 transactions",
        "startOn": 1716803487.000000000,
        "expiresOn": 1726804000.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "RELATIVE",
            "relativeExpirytype": "WEEKS",
            "value": 2
        },
        "issuedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1926235957.000000000,
            "expireWithBadgeMeta": false
        },
        "images": [
            {
                "name": "Issued",
                "fileSvcHandle": "qwer-8634-8938",
                "url": "https://firebasestorage.googleapis.com/v0/b/createbadges.appspot.com/o/images%2Fsuccess1.jpg?alt=media&token=66b2f0bc-9c55-4e33-a5e9-c6be96d94f2d",
                "tag": "EARNED"
            }
        ],
        "ownership": {
            "restrictedToOwners": [
                "Audience_Campaigns",
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
                "durationType": "DAYS",
                "refreshRate": 3,
                "maxEarnLimit": 2,
                "cycleStatus": "UPCOMING",
                "startDate": 1716803487.000000000,
                "endDate": 1926235957.000000000
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 10000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 3000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 1,
                "maxEarnLimit": 300
            }
        ],
        "benefits": [
            {
                "benefitType": "COUPON",
                "seriesId": 13745
            }
        ],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": 3,
        "earnType": "ISSUE_EARN",
        "status": "UPCOMING",
        "createdOn": 1713850528.634380000,
        "createdBy": 75086856,
        "lastUpdatedOn": 1713850528.634380000,
        "lastUpdatedBy": 75086856,
        "customFields": {},
        "active": true
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": null,
    "errors": [
        {
            "code": 728,
            "message": "Atleast one owner is required",
            "reference": "ownership.restrictedToOwners"
        },
        {
            "code": 725,
            "message": "Badge name cannot be duplicate",
            "reference": null
        },
        {
            "code": 722,
            "message": "Start Date cannot be past date",
            "reference": null
        },
        {
            "code": 714,
            "message": "Owner type is not allowed.",
            "reference": "ownership.restrictedToOwners"
        }
    ],
    "warnings": null
}
```

```
{
    "data": null,
    "errors": [
        {
            "code": 728,
            "message": "Atleast one owner is required",
            "reference": "ownership.restrictedToOwners"
        },
        {
            "code": 725,
            "message": "Badge name cannot be duplicate",
            "reference": null
        },
        {
            "code": 722,
            "message": "Start Date cannot be past date",
            "reference": null
        },
        {
            "code": 714,
            "message": "Owner type is not allowed.",
            "reference": "ownership.restrictedToOwners"
        }
    ],
    "warnings": null
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 714 | Owner type is not allowed. |

| 722 | Start date cannot be past date. |

| 725 | Badge name cannot be duplicated. |

| 728 | At least one owner is required. |

| 999999 | HV000028: Unexpected exception during isValid call. |



`Try It!`