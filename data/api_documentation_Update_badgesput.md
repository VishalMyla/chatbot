# Update badgesput

This API allows you to update badges.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.:

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.:

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

| HTTP method | PUT |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta

```
https://eucrm.cc.capillarytech.com/api_gateway/v1/badges/badgeMeta
```

# Request body parameters

| Field Name | Data Type | Description |

| --- | --- | --- |

| id* | String | Unique badge meta ID generated during creation of the badge.Note: It is mandatory to pass the badge meta ID to update the badge. |

| name* | String | Name of the badge. Ex: 10% off on watches.Badge name should be unique and is case sensitive. |

| description | String | Brief description of the badge. Ex: Purchase 2 watches get a $100 voucher. |

| startOn* | Date Time | Timestamp indicating when a badge starts.It cannot be set more than 100 years in the past.This field cannot be changed for live or expired badges. However, upcoming badges allow updating the startOn date, even to a past date. Once an upcoming badge becomes live, further modifications to the startOn date are not allowed.-Timestamp in epoch time. |

| expiresOn* | Date Time | Timestamp indicating when the badge ends. It is mandatory to pass this expiresOn parameter whentype=FIXED_DATEis chosen.Timestamp should be in epoch time.NOTE: You can update the badge end date, but it should be after the start date of badge. The system uses the server's cluster time for determining the badge expiry. For example, if a badge expires at 7 PM IST in an Asia-based cluster, it will expire at that exact time, regardless of the user's local time zone. |

| earnedBadgeExpiry* | Object | Object containing details about the expiry of earned badges. |

| expiryType* | Enum | Type of badge expiry.Supported values: "RELATIVE","ABSOLUTE","NEVER"Relative expiry: Based on when the badge was issued.Absolute expiry: Based on the fixed date from the badge issual.Never: The badges will never expire after issual. |

| type* | Enum | Type refers to the badge expiration method based on fixed date or badge_meta.Supported values: WITH_BADGE_META, FIXED_DATE1. WITH_BADGE_META: The expiry of the badge is based on the mandatoryexpiresOnparameter.2. FIXED_DATE: The expiry of the badge is based on the expiry date of the incentives associated with the badge. |

| expireWithBadgeMeta* | Boolean | Indicates if the badge should expire based on the mandatory parameterexpiresOn. |

| relativeExpiryType | Enum | Expiry type relative to the badge issue.Supprted values:DAYS/WEEKS/MONTHS.Applicable when expiryType is RELATIVE. |

| ownership* | Object | An object containing ownership restrictions.You cannot remove an owner if it has an active badge claim associated with it. For example, you cannot remove Loyalty as the owner if there is an active badge associated with it. |

| restrictedToOwners* | Object | List of owner categories that are allowed to claim the badge.Supported values: Loyalty, Loyalty_Promotion, Referral_Campaigns, Journeys, Audience_Campaigns, Membercare, Rewards_Catalog, Goodwill_Module, Milestones, Historical_Import |

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

| earnType* | Enum | The method the brand can issue the badge.Supported values: EARN, ISSUE EARN.Earn:The selected customers are enrolled for the badge and upon fulfillment of the earn condition, the badge is issued.Issue Earn:The Badges are issued directly to the customer who fulfills the earn condition (no enrolment to badges-related program).Note: If the earnType is ISSUE_EARN, use the request body,Issue Earn Typetab below. |

| active* | Boolean | Indicates whether the badge is currently active. |

| customFields | Object | List of custom fields. |

| customFieldName | String | Name of the custom field |

| customFieldValue | String | Value of the custom field. |

| badgeGroupId | String | Unique group ID associated with the badge.To add the badge to a group, passbadgeGroupIdvalue. |

| badgeRank | Integer | Badge rank is the rank of a badge within a group, the user can define the badge rank even if the group is not linked with the badge. |



`type=FIXED_DATE`

`expiresOn`

`expiresOn`

`badgeGroupId`

> 📘Fixed window validationYou can change the constraintType, maxEarnLimit, durationType, refreshRate, startDayOfTheWeek until the badge is live.Once the badge is live,You cannot change constraintType from fixed window to rolling window.You cannot change constraintType from rolling window to fixed window.You cannot change constraintType from fixed window to fixed value.You cannot change constraintType from fixed value to fixed window.You can change constraintType from rolling window fixed value.You can change constraintType from fixed value to rolling window.

## 📘Fixed window validation

Fixed window validation

1. You can change the constraintType, maxEarnLimit, durationType, refreshRate, startDayOfTheWeek until the badge is live.

2. Once the badge is live,You cannot change constraintType from fixed window to rolling window.You cannot change constraintType from rolling window to fixed window.You cannot change constraintType from fixed window to fixed value.You cannot change constraintType from fixed value to fixed window.You can change constraintType from rolling window fixed value.You can change constraintType from fixed value to rolling window.

1. You cannot change constraintType from fixed window to rolling window.

2. You cannot change constraintType from rolling window to fixed window.

3. You cannot change constraintType from fixed window to fixed value.

4. You cannot change constraintType from fixed value to fixed window.

5. You can change constraintType from rolling window fixed value.

6. You can change constraintType from fixed value to rolling window.

```
{
        "id": "8",
        "orgId": 100606,
        "name": "EARN-TYPE",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1799632870.000000000,
        "expiresOn": 1828754110.000000000,
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
                "Audience_Campaigns",
                "Loyalty",
                "Milestones"
            ],
            "claims": []
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
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 10000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 2000
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "issuedCount": 0,
        "earnedCount": 0,
        "status": "UPCOMING",
        "createdOn": 1707897126.091000000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1707897126.091000000,
        "lastUpdatedBy": 75097962,
        "active": false
    }
```

```
{
        "id": "8",
        "orgId": 100606,
        "name": "EARN-TYPE",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1799632870.000000000,
        "expiresOn": 1828754110.000000000,
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
                "Audience_Campaigns",
                "Loyalty",
                "Milestones"
            ],
            "claims": []
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
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 10000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 2000
            }
        ],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "issuedCount": 0,
        "earnedCount": 0,
        "status": "UPCOMING",
        "createdOn": 1707897126.091000000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1707897126.091000000,
        "lastUpdatedBy": 75097962,
        "active": false
    }
```

```
{
    "id": "661e11563753c37878a8b2c7",
    "orgId": 100606,
    "name": "This is a badge",
    "description": "Purchase products worth minimum 1K in the month of March and get this badge",
    "startOn": 1808338345.000000000,
    "expiresOn": 1828754110.000000000,
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "FIXED_DATE",
        "expiresOn": 1828754110.000000000,
        "expireWithBadgeMeta": false
    },
    "issuedBadgeExpiry": null,
    "images": [],
    "ownership": {
        "restrictedToOwners": [
            "Loyalty"
        ],
        "claims": []
    },
   "customerConstraints": [
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
            "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
            "durationType": "DAYS",
            "refreshRate": 5,
            "maxEarnLimit": 1,
            "cycleStatus": "UPCOMING",
            "startDate": 1808338345.000000000,
            "endDate": 1828754110.000000000
        }
    ],
   /*  "customerConstraints": [
       
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
    ],*/
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
    "badgeGroupId": null,
    "badgeRank": null,
    "earnType": "EARN",
    "status": "UPCOMING",
    "createdOn": 1713246550.885000000,
    "createdBy": 75097962,
    "lastUpdatedOn": 1713246550.885000000,
    "lastUpdatedBy": 75097962,
    "customFields": {
    
    },
    "active": true
}
```

```
{
    "id": "661e11563753c37878a8b2c7",
    "orgId": 100606,
    "name": "This is a badge",
    "description": "Purchase products worth minimum 1K in the month of March and get this badge",
    "startOn": 1808338345.000000000,
    "expiresOn": 1828754110.000000000,
    "earnedBadgeExpiry": {
        "expiryType": "ABSOLUTE",
        "type": "FIXED_DATE",
        "expiresOn": 1828754110.000000000,
        "expireWithBadgeMeta": false
    },
    "issuedBadgeExpiry": null,
    "images": [],
    "ownership": {
        "restrictedToOwners": [
            "Loyalty"
        ],
        "claims": []
    },
   "customerConstraints": [
        {
            "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
            "referenceId": "e6791ec9-e92f-34af-bdc3-be2607fdf82c",
            "durationType": "DAYS",
            "refreshRate": 5,
            "maxEarnLimit": 1,
            "cycleStatus": "UPCOMING",
            "startDate": 1808338345.000000000,
            "endDate": 1828754110.000000000
        }
    ],
   /*  "customerConstraints": [
       
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
    ],*/
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
    "badgeGroupId": null,
    "badgeRank": null,
    "earnType": "EARN",
    "status": "UPCOMING",
    "createdOn": 1713246550.885000000,
    "createdBy": 75097962,
    "lastUpdatedOn": 1713246550.885000000,
    "lastUpdatedBy": 75097962,
    "customFields": {
    
    },
    "active": true
}
```

```
{
    "id" : "66decf4459a5c872324b9577",
    "name": "Badge Issue earn40",
	"description": "Badge With coupon benefit updated 2",
    "issuedBadgeExpiry": {
       "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584
    },
    "earnedBadgeExpiry": {
       "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584
    },
    "ownership": {
		"restrictedToOwners": [
			"Loyalty"
		],
		"claims": [{
				"ownerType": "Loyalty",
				"referenceId": "xyz"
			}
		]
	},
    "startOn": 1725964384,
    "expiresOn": 1726655584,  // Cannot be updated to past date.
    "earnType": "EARN"
}
```

```
{
    "id" : "66decf4459a5c872324b9577",
    "name": "Badge Issue earn40",
	"description": "Badge With coupon benefit updated 2",
    "issuedBadgeExpiry": {
       "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584
    },
    "earnedBadgeExpiry": {
       "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584
    },
    "ownership": {
		"restrictedToOwners": [
			"Loyalty"
		],
		"claims": [{
				"ownerType": "Loyalty",
				"referenceId": "xyz"
			}
		]
	},
    "startOn": 1725964384,
    "expiresOn": 1726655584,  // Cannot be updated to past date.
    "earnType": "EARN"
}
```

# Response parameters

| Parameter | Description |

| --- | --- |

| data | The main container for the response data. |

| id | Unique identifier for the badge. |

| orgId | Identifier for the organization associated with the badge. |

| name | Name of the badge. |

| description | Description of the bdage. |

| startOn | Timestamp for when the badge starts. |

| expiresOn | Timestamp for when the badge expires. |

| earnedBadgeExpiry | Details about the expiry of the earned badge. |

| expiryType | Type of expiry for the earned badge. |

| type | Type of badge expiry. |

| expiresOn | Timestamp indicating when the badge ends. It is mandatory to pass this expiresOn parameter when FIXED_DATE is chosen.Timestamp should be in epoch time.NOTE: You can update the badge end date, but it should be after the start date of badge. |

| issuedBadgeExpiry | Details about the expiry of the issued badge (null in this case). |

| images | Array of images related to the item. |

| name | Name of the image. |

| fileSvcHandle | Service handle for the image file. |

| url | URL of the image. |

| ownership | Details about the ownership of the item. |

| restrictedToOwners | Array of owner types who have restricted access. |

| customerConstraints | Limit on how many badges can be issued to a particular customer. |

| badgeConstraints | Limit on how many quantities of a reward can be given to customers |

| badgeGroupId | Group ID for the badge. |

| badgeRank | Badge rank is the rank within a group, user can define the badge rank even if group is not linked with the badge |

| earnType | The method the brand can issue the badge.Supported values: EARN, ISSUE EARN.Earn: The selected customers are enrolled for the badge and upon fulfillment of the earn condition, the badge is issued.Issue Earn: The Badges are issued directly to the customer who fulfills the earn condition. |

| issuedCount | Count of how many times the badge has been issued. |

| earnedCount | Count of how many times the badge has been earned. |

| status | The badge can have three statuses upon creation.Supported values: LIVE, UPCOMING, ENDED/EXPIRED.LIVE: The badges which are in live state and can be earned.UPCOMING: The badges which are upcoming on a further date.EXPIRED/ENDED: The badges which have expired and cannot be earned. |

| createdOn | Timestamp for when the badgewas created. |

| createdBy | Identifier of the user who created the badge. |

| lastUpdatedOn | Timestamp for the last update made to the badge. |

| lastUpdatedBy | Identifier of the user who last updated the badge. |

| customFields | List of custom fields. |

| customFieldName | Name of the custom field. |

| customFieldValue | Value of the custom field. |

| active | Indicates whether the badge is active or not. |

| errors | Contains details of any error. |

| warnings | Contains details of any warning. |



```
{
    "data": {
        "id": "8",
        "orgId": 100606,
        "name": "EARN-TYPE",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1799632870.000000000,
        "expiresOn": 1828754110.000000000,
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
                "Audience_Campaigns",
                "Milestones",
                "Loyalty"
            ],
            "claims": []
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
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 2000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 10000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 1,
                "maxEarnLimit": 100
            }
        ],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1707897126.091000000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1713852683.788076000,
        "lastUpdatedBy": 75097962,
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
        "id": "8",
        "orgId": 100606,
        "name": "EARN-TYPE",
        "description": "Purchase 5 pet products in 3 months and get a pet grooming voucher",
        "startOn": 1799632870.000000000,
        "expiresOn": 1828754110.000000000,
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
                "Audience_Campaigns",
                "Milestones",
                "Loyalty"
            ],
            "claims": []
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
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 2000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 10000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 1,
                "maxEarnLimit": 100
            }
        ],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": 1,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1707897126.091000000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1713852683.788076000,
        "lastUpdatedBy": 75097962,
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
        "id": "661e11563753c37878a8b2c7",
        "orgId": 100606,
        "name": "This is a badge",
        "description": "Purchase products worth minimum 1K in the month of March and get this badge",
        "startOn": 1808338345.000000000,
        "expiresOn": 1828754110.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1828754110.000000000,
            "expireWithBadgeMeta": false
        },
        "issuedBadgeExpiry": null,
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "durationType": "DAYS",
                "refreshRate": 5,
                "maxEarnLimit": 1,
                "cycleStatus": "UPCOMING",
                "startDate": 1808338345.000000000,
                "endDate": 1828754110.000000000
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 1000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 2000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 1,
                "maxEarnLimit": 100
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 10000
            }
        ],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": null,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1713246550.885000000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1713955758.488460000,
        "lastUpdatedBy": 75097962,
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
        "id": "661e11563753c37878a8b2c7",
        "orgId": 100606,
        "name": "This is a badge",
        "description": "Purchase products worth minimum 1K in the month of March and get this badge",
        "startOn": 1808338345.000000000,
        "expiresOn": 1828754110.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1828754110.000000000,
            "expireWithBadgeMeta": false
        },
        "issuedBadgeExpiry": null,
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [
            {
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW",
                "referenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "durationType": "DAYS",
                "refreshRate": 5,
                "maxEarnLimit": 1,
                "cycleStatus": "UPCOMING",
                "startDate": 1808338345.000000000,
                "endDate": 1828754110.000000000
            }
        ],
        "badgeConstraints": [
            {
                "constraintType": "BADGE_FIXED_VALUE",
                "maxEarnLimit": 1000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "WEEKS",
                "rollValue": 1,
                "maxEarnLimit": 2000
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "DAYS",
                "rollValue": 1,
                "maxEarnLimit": 100
            },
            {
                "constraintType": "BADGE_ROLLING_WINDOW",
                "rollType": "MONTHS",
                "rollValue": 1,
                "maxEarnLimit": 10000
            }
        ],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": null,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1713246550.885000000,
        "createdBy": 75097962,
        "lastUpdatedOn": 1713955758.488460000,
        "lastUpdatedBy": 75097962,
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
        "id": "66decf4459a5c872324b9577",
        "badgeNumericId": 47,
        "orgId": 100458,
        "name": "Badge Issue earn40",
        "description": "Badge With coupon benefit updated 2",
        "startOn": 1725964384.000000000,
        "expiresOn": 1726655584.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584.000000000,
            "expireWithBadgeMeta": false
        },
        "issuedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584.000000000,
            "expireWithBadgeMeta": false
        },
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [],
        "badgeConstraints": [],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": null,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1725878084.045000000,
        "createdBy": 75130850,
        "lastUpdatedOn": 1725878207.750104000,
        "lastUpdatedBy": 75130850,
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
        "id": "66decf4459a5c872324b9577",
        "badgeNumericId": 47,
        "orgId": 100458,
        "name": "Badge Issue earn40",
        "description": "Badge With coupon benefit updated 2",
        "startOn": 1725964384.000000000,
        "expiresOn": 1726655584.000000000,
        "earnedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584.000000000,
            "expireWithBadgeMeta": false
        },
        "issuedBadgeExpiry": {
            "expiryType": "ABSOLUTE",
            "type": "FIXED_DATE",
            "expiresOn": 1726655584.000000000,
            "expireWithBadgeMeta": false
        },
        "images": [],
        "ownership": {
            "restrictedToOwners": [
                "Loyalty"
            ],
            "claims": []
        },
        "customerConstraints": [],
        "badgeConstraints": [],
        "tags": [],
        "badgeGroupId": null,
        "badgeRank": null,
        "earnType": "EARN",
        "status": "UPCOMING",
        "createdOn": 1725878084.045000000,
        "createdBy": 75130850,
        "lastUpdatedOn": 1725878207.750104000,
        "lastUpdatedBy": 75130850,
        "customFields": {},
        "active": true
    },
    "errors": [],
    "warnings": []
}
```

```
"errors": [
        {
            "code": 723,
            "message": "Start Date cannot change once the badge is live",
            "reference": null
        },
```

```
"errors": [
        {
            "code": 723,
            "message": "Start Date cannot change once the badge is live",
            "reference": null
        },
```

```
"errors": [
        {
            "code": 720,
            "message": "Start Date should be before End Date",
            "reference": null
        }
```

```
"errors": [
        {
            "code": 720,
            "message": "Start Date should be before End Date",
            "reference": null
        }
```

```
"errors": [
        {
            "code": 724,
            "message": "Expiry Date cannot be past date",
            "reference": null
        }
```

```
"errors": [
        {
            "code": 724,
            "message": "Expiry Date cannot be past date",
            "reference": null
        }
```

```
"errors": [
        {
            "code": 826,
            "message": "Change from rolling window or fixed constraint to fixed window or vice versa is not allowed.",
            "reference": null
        }
```

```
"errors": [
        {
            "code": 826,
            "message": "Change from rolling window or fixed constraint to fixed window or vice versa is not allowed.",
            "reference": null
        }
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 400 | Invalid enum value |

| 720 | Start Date should be before End Date |

| 723 | Start Date cannot change once the badge is live |

| 724 | Expiry Date cannot be past date |

| 826 | Change from rolling window or fixed constraint to fixed window or vice versa is not allowed. |



`Try It!`