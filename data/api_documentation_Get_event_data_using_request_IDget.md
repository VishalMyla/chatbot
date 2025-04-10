# Get event data using request IDget

> 👍For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth credentials

- Access group resource: Read access on Behavioural Events resource. For more information, refer toaccess group documentation.

# API endpoint example

`http://eu.api.capillarytech.com/v2/events/event_data?id=35a56de6-93fe-4119-a360-f3547af1499a

# Resource information

|  |  |

| --- | --- |

| URI | /events/event_data |

| HTTP method | GET |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | NA |



# Query parameter

| Parameter (Parameters marked with * are mandatory) | Description |

| --- | --- |

| id* | requestId for the event generated during the POST event API call. For more information refer,Post event. |



[Post event](/reference/post-event)

```
curl --location 'http://eu.api.capillarytech.com/v2/events/event_data?id=35a56de6-93fe-4119-a360-f3547af1499a' \
--header 'Authorization: Basic YzdiNmY2OWZmZmRkYg==' \
--header 'Cookie: _cfuvid=RY6QOmEmXhlkpkYzUT5aGlkDXWcSpLGwMXEa7suetWY-1719207183918-0.0.1.1-604800000'
```

```
curl --location 'http://eu.api.capillarytech.com/v2/events/event_data?id=35a56de6-93fe-4119-a360-f3547af1499a' \
--header 'Authorization: Basic YzdiNmY2OWZmZmRkYg==' \
--header 'Cookie: _cfuvid=RY6QOmEmXhlkpkYzUT5aGlkDXWcSpLGwMXEa7suetWY-1719207183918-0.0.1.1-604800000'
```

# Response parameter

| Parameter | Data Type | Description |

| --- | --- | --- |

| data | Array of Objects | Array containing event data objects. |

| - orgId | String | Unique identifier of the organisation for which the event was generated. |

| - userId | Integer | Customer ID of the user. |

| - date | String | Date and time when the event occurred represented in ISO 8601 format. |

| - eventName | String | Name of the event. |

| - eventId | String | requestId of the event generated during the POST event API call. For more info see,Post event. |

| - source | String | Source of the event. |

| - tillCode | String | Till code where the event occurred. |

| - displayName | String | Display name of the event. |

| - additonalAttributes | Object | Additional information related to the event. |

| -- accountId | String | Account ID of the customer. |

| -- age | String | Age of the customer. |

| -- autoUpdateTimeStamp | String | Timestamp when the event occurred in the epoch format. It is the number of seconds that have elapsed since the Unix epoch, which is 00:00:00 UTC on January 1, 1970. |

| -- customerId | String | Customer ID the user. |

| -- displayName | String | Display name of the event. |

| -- eventDateTime | String | Event process time in the epoch format. |

| -- eventName | String | Name of the event. |

| -- external_event_id | String | External identifier for Behavioral Events. This identifier allows brands to pass their unique identifiers for each event they send to the Customer Data Platform. |

| -- isDuplicate | Boolean | Indicates whether an event is considered a duplicate or an original event. IfTrue, it indicates that the event is a duplicate, meaning it's a repetition or a copy of a previously recorded event. |

| -- orgId | Integer | Unique identifier for the organisation for which the event was generated. |

| -- source | String | Source of the event. |

| -- source_till_id | Integer | Till ID where the event was generated. |

| -- source_user_id | Integer | Identifier of the user who is associated with the source of the event. |

| - psiAttributes | Object | Includes attributes that are marked as potentially sensitive data. Refer to the PSI data documentation for more informationClassifying PSI data. |

| warnings | Object | Object containing warning messages. |

| errors | Object | Object containing error messages. |



[Post event](/reference/post-event)

`True`

[Classifying PSI data](/docs/classify-potentially-sensitive-information-psi)

```
{
    "data": [
        {
            "orgId": 100458,
            "userId": 555738346,
            "date": "2024-06-20T07:01:41Z",
            "eventName": "be_reserved",
            "eventId": "35a56de6-93fe-4119-a360-f3547af1499a",
            "source": "INSTORE",
            "tillCode": "75128552",
            "displayName": "be_reserved",
            "additonalAttributes": {
                "accountId": null,
                "age": "20.0",
                "autoUpdateTimeStamp": 1718866901011,
                "customerId": "555738346",
                "displayName": "be_reserved",
                "eventDateTime": "1712836800000",
                "eventName": "be_reserved",
                "external_event_id": "RAND121",
                "hotel_name": "Indiranagar",
                "isDuplicate": false,
                "orgId": 100458,
                "room_nights": "12",
                "source": "INSTORE",
                "source_till_id": 75128552,
                "source_user_id": 555738346
            },
            "psiAttributes": [
                "age"
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```

```
{
    "data": [
        {
            "orgId": 100458,
            "userId": 555738346,
            "date": "2024-06-20T07:01:41Z",
            "eventName": "be_reserved",
            "eventId": "35a56de6-93fe-4119-a360-f3547af1499a",
            "source": "INSTORE",
            "tillCode": "75128552",
            "displayName": "be_reserved",
            "additonalAttributes": {
                "accountId": null,
                "age": "20.0",
                "autoUpdateTimeStamp": 1718866901011,
                "customerId": "555738346",
                "displayName": "be_reserved",
                "eventDateTime": "1712836800000",
                "eventName": "be_reserved",
                "external_event_id": "RAND121",
                "hotel_name": "Indiranagar",
                "isDuplicate": false,
                "orgId": 100458,
                "room_nights": "12",
                "source": "INSTORE",
                "source_till_id": 75128552,
                "source_user_id": 555738346
            },
            "psiAttributes": [
                "age"
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```

`Try It!`