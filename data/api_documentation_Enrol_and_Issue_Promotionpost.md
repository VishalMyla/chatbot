# Enrol and Issue Promotionpost

This API is used to enrol and issue a loyalty promotion to one or more customers in a loyalty program.

Refer to the documentation onloyalty promotionsfor more information on the types of loyalty promotions.

# Terminologies

The table below highlights the UI/frontend terminologies and their corresponding  backend terms for enrolling and issuing promotions to a customer.

| UI/Frontend terminology | Backend terminology | Description |

| --- | --- | --- |

| Enrol | Issue | Enrol a customer into a promotion. After enrolment, a promotion must be issued making the customer eligible to earn benefits upon meeting the defined criteria. A customer must be enrolled to the promotion and then issued the promotion in anEnrol and Issuetype promotion. |

| Issue | Earn | Issue a promotion to a customer. Once issued, the customer is eligible to earn benefits upon meeting the defined criteria. A customer can be directly issued a promotion in aDirect Issuetype promotion. |

| Enrol and Issue | LOYALTY_EARNINGorISSUE_AND_EARN | Customers must first opt-in or enrol, then achieve the criteria to earn a promotion. |

| Direct Issue | LOYALTYorDIRECT | Customers directly earn a promotion once they achieve the criteria |



[Enrol and Issue](/docs/enrol-issue-loyalty-promotion)

[Direct Issue](/docs/direct-issue-loyalty-promotion)

`LOYALTY_EARNING`

`ISSUE_AND_EARN`

`LOYALTY`

`DIRECT`

# API endpoint example

https://eucrm.cc.capillarytech.com/v2/promotion/bulk/enrolAndEarn

```
https://eucrm.cc.capillarytech.com/v2/promotion/bulk/enrolAndEarn
```

# Prerequisites

- Authentication -  Basic or OAuth authentication

- Access group resource - Write access to customer group resource

- Loyalty programId and promotionId

# Resource information

|  |  |

| --- | --- |

| URI | promotion/bulk/enrolAndEarn |

| HTTP method | POST |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | Yes |



# Body parameters

| Parameter (Parameters marked as * are required) | Data Type | Description |

| --- | --- | --- |

| type* | Enum | Type of entity. Supported entityCUSTOMER |

| bulkAction\ | Enum | Action to be performed.Supported values:ENROL: Enrol customers to a loyalty promotion.EARN: Issue a loyalty promotion to customer on completion of activity.Refer to theSupported Actionssection for the bulk actions available for each type of promotion. |

| promotionDetails | Object | Details of the promotion where the action is performed. |

| - programId* | Integer | Unique ID of the loyalty program. |

| - promotionId | Integer | Unique ID of the loyalty promotion. EitherpromotionIdorpromoIdentifiermust be provided. |

| - promoIdentifier | String | Unique external identifier of the promotion that is configured. EitherpromotionIdorpromoIdentifiermust be provided. |

| identifierName* | Enum | The identifier type for the customer. Supported identifiers:id(customer ID),mobile, andemail. |

| customers | Object | List of customers on whom the action will be performed.You can add a maximum of 100 customers at once. |

| - identifierValue* | String | Identifier value for the identifier type defined inidentifierName.Note:The identifier values must be of the same type  defined inidentifierName. For example, if theidentifierNameisid, all theidentifierValuesprovided must be customer IDs. |

| - source\ | Enum | The source of the customer's registration.Supported values:FACEBOOK,WEB_ENGAGE,INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,ALL. |



`CUSTOMER`

`ENROL`

`EARN`

[Supported Actions](/reference/enrol-and-issue-promotion#supported-action-for-the-promotion-type)

`promotionId`

`promoIdentifier`

`promotionId`

`promoIdentifier`

`id`

`mobile`

`email`

`identifierName`

`identifierName`

`identifierName`

`id`

`identifierValues`

`FACEBOOK`

`WEB_ENGAGE`

`INSTORE`

`MARTJACK`

`TMALL`

`TAOBAO`

`JD`

`ECOMMERCE`

`WEBSITE`

`LINE`

`ALL`

```
{
    "type" : "CUSTOMER",
    "bulkAction" : "ENROL",
    "promotionDetails" : {
       "programId": 469, 
       "promotionId":57099
    },
    "identifierName":"id",
    "customers":
    [   
        {
            "identifierValue":"555567088",
            "source":"INSTORE"
        }
    ]
}
```

```
{
    "type" : "CUSTOMER",
    "bulkAction" : "ENROL",
    "promotionDetails" : {
       "programId": 469, 
       "promotionId":57099
    },
    "identifierName":"id",
    "customers":
    [   
        {
            "identifierValue":"555567088",
            "source":"INSTORE"
        }
    ]
}
```

```
{
    "type" : "CUSTOMER",
    "bulkAction" : "ENROL",
    "promotionDetails" : {
       "programId": 469, 
       "promotionId":69218
    },
    "identifierName":"mobile",
    "customers":
    [   
        {
            "identifierValue":"11223569865",
            "source":"INSTORE"
        },
        {
            "identifierValue":"919986000586",
            "source":"INSTORE"
        }
    ]
}
```

```
{
    "type" : "CUSTOMER",
    "bulkAction" : "ENROL",
    "promotionDetails" : {
       "programId": 469, 
       "promotionId":69218
    },
    "identifierName":"mobile",
    "customers":
    [   
        {
            "identifierValue":"11223569865",
            "source":"INSTORE"
        },
        {
            "identifierValue":"919986000586",
            "source":"INSTORE"
        }
    ]
}
```

```
{
    "type" : "CUSTOMER",
    "bulkAction" : "EARN",
    "promotionDetails" : {
       "programId": 469, 
       "promotionId":57099
    },
    "identifierName":"id",
    "customers":
    [   
        {
            "identifierValue":"555567088",
            "source":"INSTORE"
        }
    ]
}
```

```
{
    "type" : "CUSTOMER",
    "bulkAction" : "EARN",
    "promotionDetails" : {
       "programId": 469, 
       "promotionId":57099
    },
    "identifierName":"id",
    "customers":
    [   
        {
            "identifierValue":"555567088",
            "source":"INSTORE"
        }
    ]
}
```

```
{
    "type" : "CUSTOMER",
    "bulkAction" : "EARN",
    "promotionDetails" : {
       "programId": 469, 
       "promotionId":69218
    },
    "identifierName":"mobile",
    "customers":
    [   
        {
            "identifierValue":"11223569865",
            "source":"INSTORE"
        },
        {
            "identifierValue":"919986000586",
            "source":"INSTORE"
        }
    ]
}
```

```
{
    "type" : "CUSTOMER",
    "bulkAction" : "EARN",
    "promotionDetails" : {
       "programId": 469, 
       "promotionId":69218
    },
    "identifierName":"mobile",
    "customers":
    [   
        {
            "identifierValue":"11223569865",
            "source":"INSTORE"
        },
        {
            "identifierValue":"919986000586",
            "source":"INSTORE"
        }
    ]
}
```

# Supported Action for the Promotion Type

The table below highlights the supportedbulkActionfor each type of promotion.

`bulkAction`

| Promotion Type | Supported Bulk Action | Example |

| --- | --- | --- |

| Enrol and Issue | ENROL | A customer is enrolled in a promotion for making a purchase worth ₹5000. If they review the product, they can earn a discount voucher for their next purchase. |

| EARN | If the customer completes the review, they earn the discount coupon. |

| Direct Issue | EARN | A customer is issued a promotion for making five purchases and earns a free item for completing the task. |



[Enrol and Issue](https://docs.capillarytech.com/docs/enrol-issue-loyalty-promotion)

`ENROL`

`EARN`

[Direct Issue](https://docs.capillarytech.com/docs/direct-issue-loyalty-promotion)

`EARN`

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| response | Array | List of response objects. |

| result | Object | Contains the details for a customer. |

| entityType | String | Type of entity. Supported entityCUSTOMER |

| entityId | Integer | Unique identifier of the entity. |

| promotionId | Integer | Unique ID of the loyalty promotion . |

| promoIdentifier* | String | Unique external identifier of the loyalty promotion that is configured. |

| programId | Integer | ID of the loyalty program associated with the promotion. |

| issualId | String | Unique ID generated when the customer is enrolled to a promotion.Note:If thebulkActionisEARNfor the promotion typeDIRECT, a dummyissualIdis generated as this is not required for aDIRECTpromotion. |

| earnedId | String | Unique ID generated when the customer is issued a loyalty promotion. |

| errors | Array | List of errors encountered. |

| warnings | Array | List of warnings encountered. |

| totalCount | Integer | Total count of successful responses. |

| failureCount | Integer | Count of failed responses. |



`CUSTOMER`

`bulkAction`

`EARN`

`DIRECT`

`issualId`

`DIRECT`

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926199,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "847"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926198,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "848"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926200,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "849"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926201,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "850"
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 4,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926199,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "847"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926198,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "848"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926200,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "849"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926201,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "850"
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 4,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926199,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "847",
                "earnedId": "840"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926198,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "848",
                "earnedId": "841"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926200,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "849",
                "earnedId": "842"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926201,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "850",
                "earnedId": "843"
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 4,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926199,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "847",
                "earnedId": "840"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926198,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "848",
                "earnedId": "841"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926200,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "849",
                "earnedId": "842"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926201,
                "promotionId": 202188,
                "programId": 2714,
                "issualId": "850",
                "earnedId": "843"
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 4,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926199,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "837", //this is a dummy Id
                "earnedId": "794"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926198,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "838", //this is a dummy Id
                "earnedId": "795"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926200,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "839",
                "earnedId": "796"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926201,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "840", //this is a dummy Id
                "earnedId": "797"
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 4,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926199,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "837", //this is a dummy Id
                "earnedId": "794"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926198,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "838", //this is a dummy Id
                "earnedId": "795"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926200,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "839",
                "earnedId": "796"
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423926201,
                "promotionId": 202090,
                "programId": 2714,
                "issualId": "840", //this is a dummy Id
                "earnedId": "797"
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 4,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "bulk action passed not supported for loyalty/generic promotion type",
                    "code": 8902
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "bulk action passed not supported for loyalty/generic promotion type",
                    "code": 8902
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 170940055,
                "promotionId": 74116,
                "programId": 699,
                "issualId": "72",
                "earnedId": "102"
            },
            "errors": [],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "code": 8015,
                    "message": "Customer not found for the given identifiers"
                }
            ],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "code": 8015,
                    "message": "Customer not found for the given identifiers"
                }
            ],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "code": 8015,
                    "message": "Customer not found for the given identifiers"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 4,
    "failureCount": 3
}
```

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 170940055,
                "promotionId": 74116,
                "programId": 699,
                "issualId": "72",
                "earnedId": "102"
            },
            "errors": [],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "code": 8015,
                    "message": "Customer not found for the given identifiers"
                }
            ],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "code": 8015,
                    "message": "Customer not found for the given identifiers"
                }
            ],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "code": 8015,
                    "message": "Customer not found for the given identifiers"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 4,
    "failureCount": 3
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "invalid programId passed",
                    "code": 1101
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "invalid programId passed",
                    "code": 1101
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "promotion is inactive",
                    "code": 8892
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "promotion is inactive",
                    "code": 8892
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "code": 8874,
                    "message": "promotion id passed is invalid"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "code": 8874,
                    "message": "promotion id passed is invalid"
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "Error occurred while issuing promotion to the customer",
                    "code": 8896
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "Error occurred while issuing promotion to the customer",
                    "code": 8896
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "invalid entity type passed",
                    "code": 8901
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

```
{
    "response": [
        {
            "errors": [
                {
                    "status": false,
                    "message": "invalid entity type passed",
                    "code": 8901
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

# API-specific error codes

| Error Code | Description | Reason |

| --- | --- | --- |

| 8892 | Promotion is inactive | Promotion is currently inactive. |

| 8015 | Customer not found for the given identifiers | Customer is not part of the loyalty program or the customer ID is invalid. |

| 1101 | Invalid programId passed | Program ID is invalid. |

| 8874 | Promotion ID passed is invalid | Promotion ID is invalid. |

| 8899 | Cannot enrol/issue to the user group. | A user group cannot be enrolled to a promotion. |

| 8881 | Insufficient parameters passed; program ID and one of the promotion ID/identifiers are required | Required parameters are not passed. |

| 8901 | invalid entity type passed | The entity type is invalid or unsupported. |

| 11013 | identifierName, identifierValue, source can not be empty | The fields mentioned are invalid or empty. |



`Try It!`