# Import earned (issued) badges of customerpost

This API allows you to issue badges for customers in bulk.

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

| URI | api_gateway/v1/badges/import/customerBadges |

| HTTP method | PUT |

| Rate limit | NA |

| Batch support | NA |



# Request body parameter

| Parameter | Data Type | Description |

| --- | --- | --- |

| badgeMetaId* | String | Unique identifier ("id") generated during the creation of the badge. |

| customerId* | Integer | Unique identifier for the customer. |

| earnEventDate* | Date | Timestamp of when the earning event occurred. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |

| earnExpiresOn* | Date | Timestamp of when the earned item expires. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |



```
[
   {
       "badgeMetaId": "654e08f2041fd452b3ef5b2e",
       "customerId": 382442802,
       "earnEventDate": 1674292011,
       "earnExpiresOn": 1705828011
   },
   {
       "badgeMetaId": "654e08f2041fd452b3ef5b2e",
       "customerId": 382442802,
       "earnEventDate": 1674292011,
       "earnExpiresOn": 1705828011
   }
]
```

```
[
   {
       "badgeMetaId": "654e08f2041fd452b3ef5b2e",
       "customerId": 382442802,
       "earnEventDate": 1674292011,
       "earnExpiresOn": 1705828011
   },
   {
       "badgeMetaId": "654e08f2041fd452b3ef5b2e",
       "customerId": 382442802,
       "earnEventDate": 1674292011,
       "earnExpiresOn": 1705828011
   }
]
```

# Response parameter

| Parameter | Data Type | Description |

| --- | --- | --- |

| badgeMetaId | String | Unique identifier for the badge metadata |

| customerId | Integer | Unique identifier for the customer |

| earnedBadgeId | String | Unique identifier for the earned badge |

| expiresOn | Float/Double | Timestamp of when the badge or item expires |

| requestId | String | Unique identifier for the request |

| errors | Null/Object | Container for any errors (null if no errors) |

| warnings | Null/Object | Container for any warnings (null if no warnings) |



```
[
   {
       "data": {
           "badgeMetaId": "654e08f2041fd452b3ef5b2e",
           "customerId": 382442802,
           "earnedBadgeId": "6576f7d291e0b01c659ad606",
           "expiresOn": 1705828011.000000000,
           "requestId": "f93f710f169c8390c41ae095986c5a50_1"
       },
       "errors": null,
       "warnings": null
   },
   {
       "data": {
           "badgeMetaId": "654e08f2041fd452b3ef5b2e",
           "customerId": 382442802,
           "earnedBadgeId": "6576f7d291e0b01c659ad609",
           "expiresOn": 1705828011.000000000,
           "requestId": "f93f710f169c8390c41ae095986c5a50_2"
       },
       "errors": null,
       "warnings": null
   }
]
```

```
[
   {
       "data": {
           "badgeMetaId": "654e08f2041fd452b3ef5b2e",
           "customerId": 382442802,
           "earnedBadgeId": "6576f7d291e0b01c659ad606",
           "expiresOn": 1705828011.000000000,
           "requestId": "f93f710f169c8390c41ae095986c5a50_1"
       },
       "errors": null,
       "warnings": null
   },
   {
       "data": {
           "badgeMetaId": "654e08f2041fd452b3ef5b2e",
           "customerId": 382442802,
           "earnedBadgeId": "6576f7d291e0b01c659ad609",
           "expiresOn": 1705828011.000000000,
           "requestId": "f93f710f169c8390c41ae095986c5a50_2"
       },
       "errors": null,
       "warnings": null
   }
]
```

`Try It!`