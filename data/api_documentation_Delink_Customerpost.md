# Delink Customerpost

This API is used to Delink customer from Partner Program.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth credentials

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /partnerProgram/deLinkCustomer |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/v2/partnerProgram/deLinkCustomer

```
https://eu.api.capillarytech.com/v2/partnerProgram/deLinkCustomer
```

# Request body parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| deLinkCustomers | array | List of customers to be delinked |

| customer | object | Customer details |

| - mobile | integer | Customer's mobile number |

| deLinkFromPartnerPrograms | array | List of partner programs to delink from |

| - partnerProgramName | string | Name of the partner program where it will be linked from. |



```
{
  "deLinkCustomers": [
    {
      "customer": {
        "mobile": 919800000000
      },
      "deLinkFromPartnerPrograms": [
        {
          "partnerProgramName": "1stProgram"
        },
        {
          "partnerProgramName": "p3e1"
        }
      ]
    }
  ]
}
```

```
{
  "deLinkCustomers": [
    {
      "customer": {
        "mobile": 919800000000
      },
      "deLinkFromPartnerPrograms": [
        {
          "partnerProgramName": "1stProgram"
        },
        {
          "partnerProgramName": "p3e1"
        }
      ]
    }
  ]
}
```

# Response Parameter

| Parameter | Description |

| --- | --- |

| customersPartnerUpdates | List of customers with partner program updates |

| customer | List of customer details |

| id | Unique identifier for the customer. |

| mobile | Customer's unique mobile number |

| email | Customer's unique email |

| externalId | Customer's unique external ID |

| status | Status of the customer retrieval |

| - message | Message regarding customer retrieval |

| - code | Status code |

| partnerProgramUpdates | List of partner program updates |

| partnerProgramName | Name of the partner program |

| updateType | Type of update (e.g., UPGRADE) |

| updateStatus | List of update status |

| - status | Status of the update |

| - message | Message regarding the update |

| - code | Status code |

| warnings | List of warnings (if any) |



```
{
  "customersPartnerUpdates": [
    {
      "customer": {
        "id": 382741349,
        "mobile": "916215000000",
        "email": "[email protected]",
        "externalId": "X916215000000",
        "status": {
          "status": true,
          "message": "Customer successfully retrieved",
          "code": 1000
        }
      },
      "partnerProgramUpdates": [
        {
          "partnerProgramName": "1stProgram",
          "updateType": "UPGRADE",
          "updateStatus": {
            "status": true,
            "message": "Success",
            "code": 200
          }
        }
      ]
    }
  ],
  "warnings": []
}
```

```
{
  "customersPartnerUpdates": [
    {
      "customer": {
        "id": 382741349,
        "mobile": "916215000000",
        "email": "[email protected]",
        "externalId": "X916215000000",
        "status": {
          "status": true,
          "message": "Customer successfully retrieved",
          "code": 1000
        }
      },
      "partnerProgramUpdates": [
        {
          "partnerProgramName": "1stProgram",
          "updateType": "UPGRADE",
          "updateStatus": {
            "status": true,
            "message": "Success",
            "code": 200
          }
        }
      ]
    }
  ],
  "warnings": []
}
```

[[email protected]](/cdn-cgi/l/email-protection)

`Try It!`