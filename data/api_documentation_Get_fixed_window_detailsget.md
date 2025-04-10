# Get fixed window detailsget

This API allows you to retrieve details of a badge's fixed windows cycle and its corresponding earned counts for customer and badge constraints.

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

| URI | /v1/badges/badgeMeta/getFixedWindowDetails |

| HTTP method | GET |

| Pagination | Yes |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eucrm.cc.capillarytech.com/v1/badges/badgeMeta/getFixedWindowDetails

```
https://eucrm.cc.capillarytech.com/v1/badges/badgeMeta/getFixedWindowDetails
```

# Request query parameters

| Parameters | Data type | Description |

| --- | --- | --- |

| badgeMetaId* | String | A unique identifier ("id") generated during the creation of the badge. |

| constraintType | Enum | Type of constraint.Supported values: BADGE/CUSTOMER/ALL |

| customerId | String | The customer identifier. customerId is a mandatory parameter if,constraintTypeis CUSTOMER or ALL andincludeEarnCountis true. |

| fixedWindowCycleReferenceId | String | Fixed window cycle ID generated during the creation of the badge. |

| includeEarnCount | Boolean | Pass includeEarnCount as true to include earn counts of each cycle. |

| startDate | Date | Start date period to filter cycles. Default value: Badge start date |

| endDate | Date | End date period to filter cycles. Default value: Badge end date |

| page | Integer | Number of pages. |

| size | Integer | Size of page. |



`constraintType`

`includeEarnCount`

```
https://eucrm.cc.capillarytech.com//v1/badges/badgeMeta/getFixedWindowDetails?includeEarnCount=true&constraintType=BADGE&page=0&size=30&customerId=38144111&startDate=2024-03-02T00%3A00%3A37.192Z&endDate=2024-03-04T00%3A00%3A37.192Z&badgeMetaId=6603ed23e4165a7993354a76&fixedWindowCycleReferenceId=a1350b49-eb8e-3500-9e43-01f5493c91c1
```

```
https://eucrm.cc.capillarytech.com//v1/badges/badgeMeta/getFixedWindowDetails?includeEarnCount=true&constraintType=BADGE&page=0&size=30&customerId=38144111&startDate=2024-03-02T00%3A00%3A37.192Z&endDate=2024-03-04T00%3A00%3A37.192Z&badgeMetaId=6603ed23e4165a7993354a76&fixedWindowCycleReferenceId=a1350b49-eb8e-3500-9e43-01f5493c91c1
```

# Response parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| data | Object | The main data container for the response. |

| badgeMetaId | String | The unique identifier for the badge metadata. |

| orgId | Integer | The unique identifier for the organization. |

| startDate | Float | The start date timestamp (in seconds) for the badge earning window. |

| endDate | Float | The end date timestamp (in seconds) for the badge earning window. |

| customerId | Integer | The unique identifier for the customer. |

| fixedWindowCycles | Array | An array of objects representing each fixed window cycle. |

| fixedWindowCycleReferenceId | String | A unique reference ID for the specific fixed window cycle. |

| -startDate | Float | The start date timestamp (in seconds) for the fixed window cycle. |

| -endDate | Float | The end date timestamp (in seconds) for the fixed window cycle. |

| -earnCount | Integer | The number of times the badge was earned in this cycle. |

| -constraintType | String | The type of constraint applied to the badge earning process. |

| pagination | Object | Container for pagination information. |

| page | Integer | The current page number in the pagination sequence. |

| size | Integer | The number of items per page. |

| total | Integer | The total number of items. |

| totalPages | Integer | The total number of pages available. |

| errors | Array | An array containing any errors that occurred during the request. |

| warnings | Array | An array containing any warnings related to the request. |



```
{
    "data": {
        "badgeMetaId": "661d019d35bc684e9e727585",
        "orgId": 100606,
        "startDate": 1713177200.000000000,
        "endDate": 1828754110.000000000,
        "fixedWindowCycles": [
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713139200.000000000,
                "endDate": 1713484800.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713571200.000000000,
                "endDate": 1713916800.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714003200.000000000,
                "endDate": 1714348800.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714435200.000000000,
                "endDate": 1714435200.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1714521600.000000000,
                "endDate": 1717113600.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1717200000.000000000,
                "endDate": 1719705600.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1719792000.000000000,
                "endDate": 1722384000.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1722470400.000000000,
                "endDate": 1725062400.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1725148800.000000000,
                "endDate": 1727654400.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1727740800.000000000,
                "endDate": 1730332800.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 48,
            "totalPages": 5
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "661d019d35bc684e9e727585",
        "orgId": 100606,
        "startDate": 1713177200.000000000,
        "endDate": 1828754110.000000000,
        "fixedWindowCycles": [
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713139200.000000000,
                "endDate": 1713484800.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713571200.000000000,
                "endDate": 1713916800.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714003200.000000000,
                "endDate": 1714348800.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714435200.000000000,
                "endDate": 1714435200.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1714521600.000000000,
                "endDate": 1717113600.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1717200000.000000000,
                "endDate": 1719705600.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1719792000.000000000,
                "endDate": 1722384000.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1722470400.000000000,
                "endDate": 1725062400.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1725148800.000000000,
                "endDate": 1727654400.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1727740800.000000000,
                "endDate": 1730332800.000000000,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 48,
            "totalPages": 5
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "6603ed23e4165a7993354a76",
        "orgId": 4000106,
        "startDate": 1709337637.192000000,
        "endDate": 1709510437.192000000,
        "customerId": 123,
        "fixedWindowCycles": [
            {
                "fixedWindowCycleReferenceId": "a1350b49-eb8e-3500-9e43-01f5493c91c1",
                "startDate": 1709337600.000000000,
                "endDate": 1709510400.000000000,
                "earnCount": 0,
                "constraintType": "BADGE_FIXED_WINDOW"
            }
        ],
        "pagination": {
            "page": 0,
            "size": 30,
            "total": 1,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "6603ed23e4165a7993354a76",
        "orgId": 4000106,
        "startDate": 1709337637.192000000,
        "endDate": 1709510437.192000000,
        "customerId": 123,
        "fixedWindowCycles": [
            {
                "fixedWindowCycleReferenceId": "a1350b49-eb8e-3500-9e43-01f5493c91c1",
                "startDate": 1709337600.000000000,
                "endDate": 1709510400.000000000,
                "earnCount": 0,
                "constraintType": "BADGE_FIXED_WINDOW"
            }
        ],
        "pagination": {
            "page": 0,
            "size": 30,
            "total": 1,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "661d019d35bc684e9e727585",
        "orgId": 100606,
        "startDate": 1713177200.000000000,
        "endDate": 1828754110.000000000,
        "customerId": 62090013,
        "fixedWindowCycles": [
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713139200.000000000,
                "endDate": 1713484800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713571200.000000000,
                "endDate": 1713916800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714003200.000000000,
                "endDate": 1714348800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714435200.000000000,
                "endDate": 1714435200.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1714521600.000000000,
                "endDate": 1717113600.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1717200000.000000000,
                "endDate": 1719705600.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1719792000.000000000,
                "endDate": 1722384000.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1722470400.000000000,
                "endDate": 1725062400.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1725148800.000000000,
                "endDate": 1727654400.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1727740800.000000000,
                "endDate": 1730332800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 48,
            "totalPages": 5
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "661d019d35bc684e9e727585",
        "orgId": 100606,
        "startDate": 1713177200.000000000,
        "endDate": 1828754110.000000000,
        "customerId": 62090013,
        "fixedWindowCycles": [
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713139200.000000000,
                "endDate": 1713484800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713571200.000000000,
                "endDate": 1713916800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714003200.000000000,
                "endDate": 1714348800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714435200.000000000,
                "endDate": 1714435200.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1714521600.000000000,
                "endDate": 1717113600.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1717200000.000000000,
                "endDate": 1719705600.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1719792000.000000000,
                "endDate": 1722384000.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1722470400.000000000,
                "endDate": 1725062400.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1725148800.000000000,
                "endDate": 1727654400.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "9fae3031-3abf-3936-b5df-311839c04910",
                "startDate": 1727740800.000000000,
                "endDate": 1730332800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 48,
            "totalPages": 5
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "661d019d35bc684e9e727585",
        "orgId": 100606,
        "startDate": 1713177200.000000000,
        "endDate": 1828754110.000000000,
        "customerId": 62090013,
        "fixedWindowCycles": [
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713139200.000000000,
                "endDate": 1713484800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713571200.000000000,
                "endDate": 1713916800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714003200.000000000,
                "endDate": 1714348800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714435200.000000000,
                "endDate": 1714435200.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 4,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

```
{
    "data": {
        "badgeMetaId": "661d019d35bc684e9e727585",
        "orgId": 100606,
        "startDate": 1713177200.000000000,
        "endDate": 1828754110.000000000,
        "customerId": 62090013,
        "fixedWindowCycles": [
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713139200.000000000,
                "endDate": 1713484800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1713571200.000000000,
                "endDate": 1713916800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714003200.000000000,
                "endDate": 1714348800.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            },
            {
                "fixedWindowCycleReferenceId": "1c11e757-4f00-3bb2-8aa0-b34e25083bb3",
                "startDate": 1714435200.000000000,
                "endDate": 1714435200.000000000,
                "earnCount": 0,
                "constraintType": "CUSTOMER_BADGE_FIXED_WINDOW"
            }
        ],
        "pagination": {
            "page": 0,
            "size": 10,
            "total": 4,
            "totalPages": 1
        }
    },
    "errors": [],
    "warnings": []
}
```

`Try It!`