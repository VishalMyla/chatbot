# Revoke Enrolled and Issued Promotionspost

This API is used to revoke the enrolment and issual of a loyalty promotion for one or more customers in a loyalty program.

Refer to the documentation onloyalty promotionsfor more information on the types of loyalty promotions.

# Terminologies

The table below highlights the UI/frontend terminologies and their corresponding  backend terms for revoking the enrolment and issual of promotions to a customer.

| UI/Frontend terminology | Backend terminology | Description |

| --- | --- | --- |

| Enrol | Issue | Revoke the enrolment of a customer from a promotion. The issual of the promotion for the customer must be revoked before they can be unenrolled from the promotion in anEnrol and Issuetype promotion. |

| Issue | Earn | Revoke the issual of a promotion from a customer. Once revoked, the customer is ineligible to earn benefits upon meeting the defined criteria. A customer can be directly revoked from a promotion in aDirect Issuetype promotion. |

| Enrol and Issue | LOYALTY_EARNINGorISSUE_AND_EARN | Customers must first opt-in or enrol, then achieve the criteria to earn a promotion. |

| Direct Issue | LOYALTYorDIRECT_EARN | Customers directly earn a promotion once they achieve the criteria |



[Enrol and Issue](/docs/enrol-issue-loyalty-promotion)

[Direct Issue](/docs/direct-issue-loyalty-promotion)

`LOYALTY_EARNING`

`ISSUE_AND_EARN`

`LOYALTY`

`DIRECT_EARN`

# API endpoint example

https://eu.api.capillarytech.com/v2/promotion/bulk/revokeEnrolAndEarn

```
https://eu.api.capillarytech.com/v2/promotion/bulk/revokeEnrolAndEarn
```

# Prerequisites

- Authentication -  Basic or OAuth authentication

- Access group resource - Write access to customer group resource

- Loyalty programId and promotionId

# Resource information

|  |  |

| --- | --- |

| URI | v2/promotion/bulk/revokeEnrolAndEarn |

| HTTP method | POST |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | Yes |



# Body parameters

| Parameter (Parameters marked as * are required) | Data Type | Description |

| --- | --- | --- |

| type* | Enum | Type of entity. Supported values:CUSTOMER |

| bulkAction* | Enum | Action to be performed.Supported values:REVOKE_ENROL: Unenroll customers from a loyalty promotion. This revokes theissualIdof the customer. AnissualIdis generated when a customer is enrolled to a loyalty promotion.Note:When revoking anissualId, specifying the ID is not required as each customer is issued only one.REVOKE_EARN: Revoke an earned loyalty promotion from a customer. This revokes theearnedIDof the customer. AnearnedIdis generated when a customer is issued a loyalty promotion.Provide anearnedIdin theearnIdsparameter to revoke a specificearnedIdRefer to theSupported Actionssection for the bulk actions available for each type of promotion. |

| promotionDetails | Object | Details of the promotion where the action is performed. |

| - programId* | Integer | Unique ID of the loyalty program. |

| - promotionId* | Integer | Unique ID of the loyalty promotion. EitherpromotionIdorpromoIdentifiermust be provided. |

| - promoIdentifier* | String | Unique external identifier of the promotion that is configured. EitherpromotionIdorpromoIdentifiermust be provided. |

| - identifierName | String | The identifier type for the customer. Supported identifiers:id(customer ID),mobile, andemail. |

| customers | Object | List of customers on whom the revoke action will be performed.You can add a maximum of 100 customers at once. |

| - identifierValue* | String | Identifier value for the identifier type defined inidentifierName.Note:The identifier values must be of the same type  defined inidentifierName. For example, if theidentifierNameisid, all theidentifierValuesprovided must be customer IDs. |

| - source\ | String | The source of the customer's registration.Supported values:FACEBOOK,WEB_ENGAGE,INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,ALL. |

| - earnIds | Array | List of earned IDs to revoke for a customer. AnearnedIdis generated when a customer is issued a loyalty promotion.List the IDs in the following format[ID1, ID2, ID3].If theearnIdsparameter is not passed, all the earned IDs for a customer will be revoked. |



`CUSTOMER`

`REVOKE_ENROL`

`issualId`

`issualId`

`issualId`

`REVOKE_EARN`

`earnedID`

`earnedId`

`earnedId`

`earnIds`

`earnedId`

[Supported Actions](/reference/revoke-enrolled-and-issued-promotion#supported-action-for-the-promotion-type)

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

`earnedId`

`[ID1, ID2, ID3]`

`earnIds`

```
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_ENROL",
    "promotionDetails": {
        "programId": 2714,
        "promotionId": "202779"
       // "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927867",
            "source": "instore"
        }
    ]
}
```

```
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_ENROL",
    "promotionDetails": {
        "programId": 2714,
        "promotionId": "202779"
       // "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927867",
            "source": "instore"
        }
    ]
}
```

```
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_ENROL",
    "promotionDetails": {
        "programId": 2714,
        "promotionId": "202779"
       // "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927867",
            "source": "instore"
        },
        {
            "identifierValue": "423927868",
            "source": "instore"
        }
    ]
}
```

```
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_ENROL",
    "promotionDetails": {
        "programId": 2714,
        "promotionId": "202779"
       // "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927867",
            "source": "instore"
        },
        {
            "identifierValue": "423927868",
            "source": "instore"
        }
    ]
}
```

```
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_EARN",
    "promotionDetails": {
        "programId": 2714,
        //"promotionId": "202779"
        "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927867",
            "source": "instore"
        }
    ]
}
```

```
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_EARN",
    "promotionDetails": {
        "programId": 2714,
        //"promotionId": "202779"
        "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927867",
            "source": "instore"
        }
    ]
}
```

```
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_EARN",
    "promotionDetails": {
        "programId": 2714,
        "promoIdentifier": "1d9e540d-ae2c-443f-9d0d-7ac146bf93f2"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927848",
            "source": "instore",
            "earnIds": [
                959
            ]
        },
        {
            "identifierValue": "423927855",
            "source": "instore",
            "earnIds": [
                960,
                963
            ]
        },
        {
            "identifierValue": "423927856",
            "source": "instore"
        }
    ]
}
```

```
{
    "type": "CUSTOMER",
    "bulkAction": "REVOKE_EARN",
    "promotionDetails": {
        "programId": 2714,
        "promoIdentifier": "1d9e540d-ae2c-443f-9d0d-7ac146bf93f2"
    },
    "identifierName": "id",
    "customers": [
        {
            "identifierValue": "423927848",
            "source": "instore",
            "earnIds": [
                959
            ]
        },
        {
            "identifierValue": "423927855",
            "source": "instore",
            "earnIds": [
                960,
                963
            ]
        },
        {
            "identifierValue": "423927856",
            "source": "instore"
        }
    ]
}
```

# Supported Action for the Promotion Type

The table below highlights the supportedbulkActionfor each type of promotion.

`bulkAction`

| Promotion Type | Supported Bulk Action | Example |

| --- | --- | --- |

| Enrol and Issue | REVOKE_ENROLandREVOKE_EARN | A customer is enrolled in a promotion after a ₹5000 purchase that offers a discount coupon for reviewing the product. After reviewing the product, they earn a discount coupon. If the customer returns the product, the promotion is revoked. |

| Direct Issue | REVOKE_EARN | A customer is directly issued a promotion for a 10% discount after completing a purchase. If the customer returns the product, the promotion is revoked. |



[Enrol and Issue](/docs/enrol-issue-loyalty-promotion)

`REVOKE_ENROL`

`REVOKE_EARN`

[Direct Issue](/docs/direct-issue-loyalty-promotion)

`REVOKE_EARN`

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| response | Array | List of response objects. |

| result | Object | Contains the details for a customer. |

| entityType | String | Type of entity. Supported entityCUSTOMER |

| entityId | Integer | Unique identifier of the entity. |

| promotionId | Integer | Unique ID of the loyalty promotion . |

| promoIdentifier | String | Unique external identifier of the loyalty promotion that is configured. |

| programId | Integer | ID of the loyalty program associated with the promotion. |

| revokedIssualId | Integer | Issue ID that is revoked from the customer. |

| revokedEarnIds | Array | List of Earn IDs that are revoked from the customer. |

| errors | Array | List of errors encountered, if any. |

| warnings | Array | List of warnings encountered, if any. |

| totalCount | Integer | Total count of successful responses. |

| failureCount | Integer | Count of failed responses. |



`CUSTOMER`

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
                "entityId": 423927867,
                "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277",
                "programId": 2714,
                "revokedEarnIds": [
                    974
                ]
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423927868,
                "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277",
                "programId": 2714,
                "revokedEarnIds": [
                    975,
                    977
                ]
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 2,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423927867,
                "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277",
                "programId": 2714,
                "revokedEarnIds": [
                    974
                ]
            },
            "errors": [],
            "warnings": []
        },
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423927868,
                "promoIdentifier": "95c77d88-470c-4dd3-bde4-606ae1b64277",
                "programId": 2714,
                "revokedEarnIds": [
                    975,
                    977
                ]
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 2,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423927848,
                "promoIdentifier": "1d9e540d-ae2c-443f-9d0d-7ac146bf93f2",
                "programId": 2714,
                "revokedEarnIds": [
                    957
                ]
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 423927848,
                "promoIdentifier": "1d9e540d-ae2c-443f-9d0d-7ac146bf93f2",
                "programId": 2714,
                "revokedEarnIds": [
                    957
                ]
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 1,
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
                    "message": "revoke bulk action passed not supported for loyalty/generic promotion type",
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
                    "message": "revoke bulk action passed not supported for loyalty/generic promotion type",
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
                "entityId": 555567088,
                "promotionId": 74230,
                "programId": 753,
                "revokedEarnIds": [
                    111
                ]
            },
            "errors": [],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "message": "Customer not found for the given identifiers",
                    "code": 8015
                }
            ],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "message": "Customer not found for the given identifiers",
                    "code": 8015
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 3,
    "failureCount": 2
}
```

```
{
    "response": [
        {
            "result": {
                "entityType": "CUSTOMER",
                "entityId": 555567088,
                "promotionId": 74230,
                "programId": 753,
                "revokedEarnIds": [
                    111
                ]
            },
            "errors": [],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "message": "Customer not found for the given identifiers",
                    "code": 8015
                }
            ],
            "warnings": []
        },
        {
            "errors": [
                {
                    "status": false,
                    "message": "Customer not found for the given identifiers",
                    "code": 8015
                }
            ],
            "warnings": []
        }
    ],
    "totalCount": 3,
    "failureCount": 2
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

# Error codes

| Error Code | Description | Reason |

| --- | --- | --- |

| 8892 | Promotion is inactive | Promotion is currently inactive. |

| 8015 | Customer not found for the given identifiers | Customer is not part of the loyalty program or the customer ID is invalid. |

| 1101 | Invalid programId passed | Program ID is invalid. |

| 8874 | Promotion ID passed is invalid | Promotion ID is invalid. |

| 8899 | Cannot enrol/issue to the user group. | A user group cannot be enrolled to a promotion. |

| 8902 | Revoke bulk action passed not supported for loyalty/generic promotion type | Revoking an issual for a customer in a direct earn promotion is not supported. |

| 8881 | Insufficient parameters passed; program ID and one of the promotion ID/identifiers are required | Required parameters are not passed. |

| 8903 | Earn IDs passed are either invalid or already revoked | The earned ID that is being revoked is already revoked or is invalid. |



`Try It!`