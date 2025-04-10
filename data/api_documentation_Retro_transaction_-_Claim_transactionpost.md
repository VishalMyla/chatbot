# Retro transaction - Claim transactionpost

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Overview

The Retro Transaction Request API enables the retrospective tagging of non-tagged transactions to existing members in the system. This endpoint allows the addition of retro transactions, converting untagged 'NOT_INTERESTED' transactions to 'REGULAR' transactions and assigning them to existing customers. This is particularly useful for cases where transactions were initially not linked to any member and need to be tagged to an existing customer now. For more information on retro transactions, refer to the documentationhere.

# Configuring standard workflow

You can configure the standard workflow and configure the below actions.

## Auto approval

You can set theAuto-approval flag : On/OfftoOnto enable auto approval for the retro transaction requests.

`Auto-approval flag : On/Off`

`On`

When the Auto-approval flag is enabled,

- Requests move directly from the "Pending" status to "Approved" status without requiring manual intervention.

- The approved requests are executed without the need for manual approval.

If the Auto-approval flag is disabled:

- Requests remain in the "Pending" status until they are manually approved.

- In a single-approval workflow, a request is initially created in the pending state by a Maker.

- A Checker is responsible for reviewing and approving or rejecting the request.

- Once approved, the request transitions to the Approved status, triggering the execution of the transaction claims API call.

- If the execution is successful, the request is marked as "Success". Otherwise, it is marked as "Failure" along with an appropriate error reason stored alongside the request.

Note:If the request is initiated using Connect-plus or via External services, the request validation bypasses the maker access validation and moves the request to the Approved state.

# API endpoint example

`[<https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/RETRO-TRANSACTION

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

- Maker request access (CanMakeRequest). Contact admin for access.

- The transaction must not exceed the TXN_MAX_ALLOWED_AGE_DAYS parameter set by the brand. "TXN_MAX_ALLOWED_AGE_DAYS" refers to the maximum allowed age of a transaction in terms of days.

- The customer being tagged to the transaction should have registered RETRO_DELAY_SINCE_REGISTRATION_HOURS hours before the current time. "RETRO_DELAY_SINCE_REGISTRATION_HOURS" represents the delay in hours since a customer's registration before they can be associated with a retro transaction. It indicates the minimum amount of time that must pass after a customer registers before they can be retroactively linked to a transaction. For instance, if you set this value to 3 hours and a customer registers at 9:00 AM, they will be able to change their not-interested to transactions with billing times later than 6:00 AM but not before 5:59 AM.

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/v2/request-workflow/RETRO-TRANSACTION |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# Header information

|  |  |

| --- | --- |

| X-CAP-API-AUTH-ORG-ID | Organization ID |

| X-CAP-UI-AUTH-TOKEN | A JSON Web Token (JWT) is used for intouch user authentication.  CanMakeRequest access is required to generate this token. |



# Request body parameters

| Parameter(Parameters marked with * are mandatory) | Type | Description |

| --- | --- | --- |

| tillId* | string | The unique identifier for the till associated with the transaction. |

| storeId* | string | The unique identifier for the store where the transaction occurs. |

| zoneId* | string | The unique identifier for the zone or area the store is associated with. |

| conceptId* | string | The unique identifier for the concept or branding associated with the store. |

| hostname | string | The hostname of the API endpoint. Example:https://eucrm.cc.capillarytech.com |

| path | string | The path of the API endpoint. In this context, the endpoint is/v2/transactions/retro. |

| method | string | PUT. The HTTP method used for the request. |

| oldType | string | The old type of the transaction. In this context, the old type isNOT_INTERESTED |

| newType | string | The new type of the transaction to be updated. In this context, the new type isREGULAR. |

| transactionId | integer | The ID of the transaction to be updated. |

| customerId | integer | The ID of the customer to whom the not interested transaction is being attached. |

| extendedFields | object | Extended field info associated with the transaction, if any. |

| customFields | object | Custom fields associated with the transaction, if any. |

| notes | string | Additional notes or comments about the transaction. |

| Authorization | string | Authentication credentials needed to access the Intouch API. It could be in the form of a username and password or an API key. |

| content-type | string | The content type header for the request. |

| X-CAP-CLIENT-SIGNATURE | string | Enter the source's name to recognize which source has made the retro request, It is recommended to use a single name for a source so that it would be easy to track the retro transaction request of each source. |



[https://eucrm.cc.capillarytech.com](https://eucrm.cc.capillarytech.com)

`/v2/transactions/retro`

`NOT_INTERESTED`

`REGULAR`

```
{
    "entityInfo": {
        "tillId": "50682289",
        "storeId": "50682288",
        "zoneId": "50682286",
        "conceptId": "50678331"
    },
    "payload": {
        "IntouchAPITask-Payload": {
            "hostname": "https://eu.api.capillarytech.com",
            "path": "/v2/transactions/retro",
            "method": "PUT",
            "pathParams": {},
            "queryParams": {},
            "body": {
                "oldType": "NOT_INTERESTED",
                "newType": "REGULAR",
                "transactionId": 7648261,
                "customerId": 382553857,
                "extendedFields": {
                    "checkout_date": "2021-12-27T18:38:43+08:00"
                },
                "customFields": {
                    "pankaj3": "singh3"
                },
                "notes": "Test Transaction"
            },
            "headers": {
                "Authorization": "Basic Y20uMjoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                "content-type": "application/json",
                "X-CAP-CLIENT-SIGNATURE": "pankaj"
            }
        }
    }
}
```

```
{
    "entityInfo": {
        "tillId": "50682289",
        "storeId": "50682288",
        "zoneId": "50682286",
        "conceptId": "50678331"
    },
    "payload": {
        "IntouchAPITask-Payload": {
            "hostname": "https://eu.api.capillarytech.com",
            "path": "/v2/transactions/retro",
            "method": "PUT",
            "pathParams": {},
            "queryParams": {},
            "body": {
                "oldType": "NOT_INTERESTED",
                "newType": "REGULAR",
                "transactionId": 7648261,
                "customerId": 382553857,
                "extendedFields": {
                    "checkout_date": "2021-12-27T18:38:43+08:00"
                },
                "customFields": {
                    "pankaj3": "singh3"
                },
                "notes": "Test Transaction"
            },
            "headers": {
                "Authorization": "Basic Y20uMjoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                "content-type": "application/json",
                "X-CAP-CLIENT-SIGNATURE": "pankaj"
            }
        }
    }
}
```

# Response parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| requestId | String | Unique identifier for the request. |

| userId | Integer | Identifier for the user making the request. |

| userName | String | Email or username of the user making the request. |

| requestType | String | Type of request being made |

| state | String | Current state of the request (e.g., "AdminTask"). |

| startTime | DateTime | Timestamp marking the start of the request. |

| endTime | DateTime/Null | Timestamp marking the end of the request, if applicable. |

| IntouchAPITask-Payload | Object | Object containing specifics of the API call to change customer status. |

| hostname | String | The base URL of the API endpoint. |

| path | String | Specific path to the API endpoint for changing customer status. |

| method | String | HTTP method used for the request. |

| pathParams | Object | Path parameters for the API call, if any (empty in this case). |

| queryParams | Object | Query parameters for the API call, detailing aspects like source and identifier. |

| body | Object | Body of the API call, containing the old type, new type, transaction ID, customer ID (transaction owner), extended and custom field information. |

| headers | Object | Headers for the API call, including Authorization and Content-Type. |

| ValidateMakerAccess_Output | Boolean | Indicates whether maker access validation was successful. |

| ValidatePayload_Output | Boolean | Indicates whether payload validation was successful. |



```
{
    "data": {
        "requestId": "23e06c3e-a5c3-11ee-9a63-9ab214749657",
        "userId": 232134,
        "userName": "[email protected]",
        "requestType": "retro-transaction",
        "state": "AdminTask",
        "startTime": "2023-12-29T02:23:23",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
            "hostname": "https://crm-nightly-new.cc.capillarytech.com",
            "path": "/v2/transactions/retro",
            "method": "PUT",
            "pathParams": {},
            "queryParams": {},
            "body": {
                "oldType": "NOT_INTERESTED",
                "newType": "REGULAR",
                "transactionId": 7648261,
                "customerId": 382553857,
                "extendedFields": {
                    "checkout_date": "2021-12-27T18:38:43+08:00"
                },
                "customFields": {
                    "pankaj3": "singh3"
                },
                "notes": "Test Transaction"
            },
            "headers": {
                "Authorization": "Basic Y20uMjoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                "content-type": "application/json",
                "X-CAP-CLIENT-SIGNATURE": "pankaj"
            }
            },
            "ValidateMakerAccess_Output": true,
            "ValidatePayload_Output": true
        }
    }
}
```

```
{
    "data": {
        "requestId": "23e06c3e-a5c3-11ee-9a63-9ab214749657",
        "userId": 232134,
        "userName": "[email protected]",
        "requestType": "retro-transaction",
        "state": "AdminTask",
        "startTime": "2023-12-29T02:23:23",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
            "hostname": "https://crm-nightly-new.cc.capillarytech.com",
            "path": "/v2/transactions/retro",
            "method": "PUT",
            "pathParams": {},
            "queryParams": {},
            "body": {
                "oldType": "NOT_INTERESTED",
                "newType": "REGULAR",
                "transactionId": 7648261,
                "customerId": 382553857,
                "extendedFields": {
                    "checkout_date": "2021-12-27T18:38:43+08:00"
                },
                "customFields": {
                    "pankaj3": "singh3"
                },
                "notes": "Test Transaction"
            },
            "headers": {
                "Authorization": "Basic Y20uMjoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                "content-type": "application/json",
                "X-CAP-CLIENT-SIGNATURE": "pankaj"
            }
            },
            "ValidateMakerAccess_Output": true,
            "ValidatePayload_Output": true
        }
    }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

`Try It!`