# Referral

This API allows you to refer someone with the referral code of a specific campaign to a customer (auto-generated referral code).

It is important to understand the following terminologies that you may come across while using the customer/APIs.

|  |  |

| --- | --- |

| referral_code | Unique code generated for the referrer for a specific campaign. Each referral campaign generates a unique code for each customer. |

| invitee | A person who was invited by the referrer. |

| referees | Customers from the invitee list who turned up to the stores and made either transactions or registration |

| incentives | Rewards received by the referral for successful referees of the campaign. Currently, only coupons are issued as incentives. |

| scope | The channel through which the referral was made. Currently, the referrals are supported only through email and mobile numbers. Scopes are used as name-value pairs, the value could be referees, invitees, or incentives as per the context. |



# Prerequisites

- Authentication: Basic/OAuth authentication

- Default access group.

# Query Params

| Field | Data Type | Description |

| --- | --- | --- |

| mobile/email | string | Mobile number or email ID of the customer. |



# Resource information

| URI | v1.1/customer/referrals |

| --- | --- |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

http://eucrm.cc.capillarytech.com/v1.1/customer/referrals

## Request Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| customer | Array | An array of customer details. |

| - mobile* | String | Mobile number of the customer who is referring. |

| - referrals | Object | An object containing referral information. |

| -- campaign_token | String | The token of the referral campaign to which you are referring. You can get this token from the campaign home page under the referral campaign name. |

| --- type* | String | Type of referral. Supported values: MOBILE and EMAIL. |

| - referral | Array | An array of referral objects that contains the details of the individual to whom you are referring (invitee). |

| id* | String | User ID of the individual if any. Else, you can leave this field empty. |

| invited_on* | String | A timestamp in ISO 8601 format indicating when the referral was invited along with the referral code. For example, 20240910T16:35:52.pV7BF, where  pV7BF is the referral code. |

| name | String | Name of the invitee |

| identifier* | String | Identifier (e.g., mobile number) of the invitee. |



```
{
    "root": {
        "customer": [
            {
                "mobile": "7999836466",
                "referrals": {
                    "campaign_token": "J0H7Q",
                    "referral_type": {
                        "type": "MOBILE",
                        "referral": [
                            {
                                "id": "",
                                "invited_on": "20240910T16:35:52.pV7BF",
                                "name": "Shikhar",
                                "identifier": "7999836416"
                            }
                        ]
                    }
                }
            }
        ]
    }
}
```

```
{
    "root": {
        "customer": [
            {
                "mobile": "7999836466",
                "referrals": {
                    "campaign_token": "J0H7Q",
                    "referral_type": {
                        "type": "MOBILE",
                        "referral": [
                            {
                                "id": "",
                                "invited_on": "20240910T16:35:52.pV7BF",
                                "name": "Shikhar",
                                "identifier": "7999836416"
                            }
                        ]
                    }
                }
            }
        ]
    }
}
```

## Response parameters

| Parameters | Description |

| --- | --- |

| status | Contains the status of the response. |

| success | Indicates if the request was successful. |

| code | The HTTP status code. |

| message | A message providing additional details about the status. |

| customers | Contains customer details. |

| customer | List of customer objects. |

| email | The email of the customer. |

| mobile | The mobile number of the customer. |

| external_id | External identifier for the customer. |

| firstname | The first name of the customer. |

| lastname | The last name of the customer. |

| referrals | Contains referral information. |

| referral_type | List of referral types. |

| type | The type of referral ((MOBILE) or (EMAIL)). |

| referral | List of referral details. |

| id | Identifier for the referral. |

| name | Name associated with the referral. |

| identifier | Identifier for the invited referral. |

| invited_on | Timestamp of when the referral was invited. |

| status | Status of the referral. |

| code | Status code of the referral. |

| message | Message about the referral status. |

| item_status | Contains the item status of the customer. |

| success | Indicates if the item operation was successful. |

| code | Status code of the item operation. |

| message | Message regarding the item operation status. |



`MOBILE`

`EMAIL`

```
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "SUCCESS"
        },
        "customers": {
            "customer": [
                {
                    "email": null,
                    "mobile": "917999836466",
                    "external_id": null,
                    "firstname": "shikar",
                    "lastname": "",
                    "referrals": {
                        "referral_type": [
                            {
                                "type": "MOBILE",
                                "referral": [
                                    {
                                        "id": "",
                                        "name": "Shikhar",
                                        "identifier": "7999836416",
                                        "invited_on": "20240910T16:35:52.pV7BF",
                                        "status": {
                                            "success": "true",
                                            "code": 1000,
                                            "message": "Refer was successful"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    "item_status": {
                        "success": "true",
                        "code": 1000,
                        "message": "Referrals are invited successfully"
                    }
                }
            ]
        }
    }
}
```

```
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "SUCCESS"
        },
        "customers": {
            "customer": [
                {
                    "email": null,
                    "mobile": "917999836466",
                    "external_id": null,
                    "firstname": "shikar",
                    "lastname": "",
                    "referrals": {
                        "referral_type": [
                            {
                                "type": "MOBILE",
                                "referral": [
                                    {
                                        "id": "",
                                        "name": "Shikhar",
                                        "identifier": "7999836416",
                                        "invited_on": "20240910T16:35:52.pV7BF",
                                        "status": {
                                            "success": "true",
                                            "code": 1000,
                                            "message": "Refer was successful"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    "item_status": {
                        "success": "true",
                        "code": 1000,
                        "message": "Referrals are invited successfully"
                    }
                }
            ]
        }
    }
}
```

```
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "SUCCESS"
        },
        "customers": {
            "customer": [
                {
                    "email": null,
                    "mobile": "917999836466",
                    "external_id": null,
                    "firstname": "shikar",
                    "lastname": "",
                    "referrals": {
                        "referral_type": [
                            {
                                "type": "MOBILE",
                                "referral": [
                                    {
                                        "id": "",
                                        "name": "Shikhar",
                                        "identifier": "79998364",
                                        "invited_on": "20240910T16:35:52.pV7BF",
                                        "status": {
                                            "success": "false",
                                            "code": 1701,
                                            "message": "Invalid Identifier for the type"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    "item_status": {
                        "success": "true",
                        "code": 1000,
                        "message": "Referrals are invited successfully"
                    }
                }
            ]
        }
    }
}
```

```
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "SUCCESS"
        },
        "customers": {
            "customer": [
                {
                    "email": null,
                    "mobile": "917999836466",
                    "external_id": null,
                    "firstname": "shikar",
                    "lastname": "",
                    "referrals": {
                        "referral_type": [
                            {
                                "type": "MOBILE",
                                "referral": [
                                    {
                                        "id": "",
                                        "name": "Shikhar",
                                        "identifier": "79998364",
                                        "invited_on": "20240910T16:35:52.pV7BF",
                                        "status": {
                                            "success": "false",
                                            "code": 1701,
                                            "message": "Invalid Identifier for the type"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    "item_status": {
                        "success": "true",
                        "code": 1000,
                        "message": "Referrals are invited successfully"
                    }
                }
            ]
        }
    }
}
```

## API error codes

| Code | Description |

| --- | --- |

| 1012 | Cannot find a customer for provided mobile. |

| 1206 | Referral type is not supported. |

| 1701 | Invalid Identifier for the type. |



`Try It!`