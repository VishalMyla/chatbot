# Get Points Expiry Schedule (Light API)get

> 👍For an overview on our APIs and for hands-on testing, refer toAPI overviewandMake your first API calldocumentation.

## 👍

For an overview on our APIs and for hands-on testing, refer toAPI overviewandMake your first API calldocumentation.

This API retrieves the history of points expiry schedules for a specific duration. The expiry schedules are sorted by date in the ascending order. This is a light API and hence the data retrieval is faster as it shows only the key information of the API.

# Prerequisites

- Basic or OAuth credentials

- Read access to Points access group resource

# API features

| Feature | Availability/Info |

| --- | --- |

| Pagination | No |

| Batch support | NA |



# Query parameters

| Parameter(Parameters marked with * are mandatory) | Type | Description |

| --- | --- | --- |

| source | Enum | Source on which the identifier is available.The supported values are FACEBOOK,WEB_ENGAGE,WECHAT,INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE, and ALL. |

| accountId | String | Account ID of a specific source if the source has multiple accounts. |

| identifierName* | Identifier type used to fetch the customer's expiry schedule details. | Identifier type used to fetch the customer's expiry schedule details.The supported values are mobile,email,externalId,cardnumber,cardExternalId,wechat,martjackId, and fbId. |

| identifierValue* | String | Identifier of the customer specific to the identifierName. |

| fetchDataForAllPrograms | Boolean | Pass true to fetch points conversion schedules from all the available programs of the org. |

| fetchEarliestExpiryOnly | Boolean | Pass true to fetche earliest points expiry records of default program or passed programId |

| startDate | String | Date (YYYY-MM-DD) from which points conversion schedule details need to be fetched. Default value - current time. |

| endDate | String | End date (YYYY-MM-DD) for the points conversion schedule details need to be fetched. Maximum supported date - current time + 100 years |

| programId | String | Unique ID of the program. |



# Response parameter

| Parameter | Description |

| --- | --- |

| id | Unique identifier. |

| profiles | List containing profile details (currently empty). |

| loyaltyInfo | Object containing information about loyalty. |

| loyaltyInfo.loyaltyType | Type of loyalty, in this instance, "loyalty". |

| segments | Object containing segment details (currently empty). |

| extendedFields | Object containing extended field details (currently empty). |

| expirySchedules | List containing details of points expiry schedules. |

| expirySchedules[].points | Number of points in each expiry schedule. |

| expirySchedules[].expiryDate | Date on which the points in each expiry schedule will expire. |

| expirySchedules[].programId | Identifier for the program associated with the points in each expiry schedule. |

| expirySchedules[].pointsType | Type of points in each expiry schedule (e.g., "line_item_regular", "bill_regular"). |

| expirySchedules[].expiryType | Type of expiry for the points in each expiry schedule (in this case, "fixed"). |

| warnings | List containing warnings related to the entity (currently empty). |



## Examples

with fetchDataForAllPrograms=false and fetchEarliestExpiryOnly=false

http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=false&fetchEarliestExpiryOnly=false&programId=1357

```
http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=false&fetchEarliestExpiryOnly=false&programId=1357
```

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

when fetchDataForAllPrograms=true and fetchEarliestExpiryOnly=false

http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=true&fetchEarliestExpiryOnly=false&programId=1357

```
http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=true&fetchEarliestExpiryOnly=false&programId=1357
```

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 100.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 20.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "bill_regular",
            "expiryType": "fixed"
        },
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 100.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 20.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "bill_regular",
            "expiryType": "fixed"
        },
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

when fetchDataForAllPrograms=false and fetchEarliestExpiryOnly=true

http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=false&fetchEarliestExpiryOnly=true&programId=1357

```
http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=false&fetchEarliestExpiryOnly=true&programId=1357
```

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

when fetchDataForAllPrograms=true and fetchEarliestExpiryOnly=true

http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=true&fetchEarliestExpiryOnly=true&programId=1357

```
http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=true&fetchEarliestExpiryOnly=true&programId=1357
```

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 100.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 20.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "bill_regular",
            "expiryType": "fixed"
        },
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 100.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 20.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "bill_regular",
            "expiryType": "fixed"
        },
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

with startDate and endDate

http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&startDate=2020-01-01&endDate=2040-03-01&programId=1357&fetchEarliestExpiryOnly=false&fetchDataForAllPrograms=true

```
http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&startDate=2020-01-01&endDate=2040-03-01&programId=1357&fetchEarliestExpiryOnly=false&fetchDataForAllPrograms=true
```

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

`Try It!`