# Get Customer Interactionsget

# API endpoint example

http://nightly.api.capillarytech.com/v1.1/customer/interaction?format=json&source=INSTORE&accountId=1234&identifierName=mobile&mobile=91660499160&type=whatsapp

```
http://nightly.api.capillarytech.com/v1.1/customer/interaction?format=json&source=INSTORE&accountId=1234&identifierName=mobile&mobile=91660499160&type=whatsapp
```

# Query parameters

| Parameter | Type | Description |

| --- | --- | --- |

| identifierName | enum | Identifier type of the customer. Accepted values are email, mobile and external id. Any one of the customer identifiers is mandatory. |

| identifierValue | string | Value for the identifier value. |

| network | enum | Filter results by communication network. Accepted values are facebook, twitter, foursquare, and capillary. |

| type | enum | Filter results by interaction type. email (for transaction email), emailbulk (for bulk email), checkin (applicable only for foursquare/facebook), like, comment (for facebook); mention, retweet, tweet (only for Twitter network), feedback (only for Capillary), whatsapp , zalo, line |



# Response parameters

> 📘NoteYou can enable the OTP masking configuration and mask the OTPs. Refer todocumentation on OTP masking.

## 📘Note

Note

You can enable the OTP masking configuration and mask the OTPs. Refer todocumentation on OTP masking.

| Parameter | Type | Description |

| --- | --- | --- |

| name | String | Name of the customer. |

| interaction | Array | An array containing interaction details. |

| - count | Number | The count of interactions. |

| - name | String | The name of the interaction (e.g., "email"). |

| - messageList | Array | An array containing message details. |

| -- id | Number | The unique identifier for the message. |

| -- receiver | String | The email address of the message receiver. |

| -- subject | String | The subject of the email message. |

| -- campaignId | Number | The campaign identifier associated with the message. |

| -- status | String | The status of the message delivery (e.g., "NOT-DELIVERED", DELIVERED," "SOFT_BOUNCED"). |

| -- sentDate | String | The date and time when the message was sent (format: "DD-MM-YYYY HH:mm:ss"). |

| -- deliveredTime | String | The date and time when the message was delivered (format: "YYYY-MM-DDTHH:mm:ssZ"). |

| -- userId | Number | The unique identifier for the user associated with the message. |

| warnings | Array | An array containing warning details. |



```
{
    "name": "capillary",
    "interaction": [
        {
            "count": 8,
            "name": "email",
            "messageList": [
                {
                    "id": 1685581782856,
                    "receiver": "[email protected]",
                    "subject": "Rewards redeemed",
                    "campaignId": 469,
                    "status": "SOFT_BOUNCED",
                    "sentDate": "09-06-2023 14:05:20",
                    "userId": 177269954
                },
                {
                    "id": 1685578741592,
                    "receiver": "[email protected]",
                    "subject": "One Time Password (OTP) for points redemption request.",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-06-02T09:24:40Z",
                    "sentDate": "02-06-2023 09:24:40",
                    "userId": 177269954
                },
                {
                    "id": 1682908778861,
                    "receiver": "[email protected]",
                    "subject": "Account merge confirmation",
                    "campaignId": -1,
                    "status": "SOFT_BOUNCED",
                    "sentDate": "22-05-2023 22:36:55",
                    "userId": -1
                },
                {
                    "id": 1688181521978,
                    "receiver": "[email protected]",
                    "subject": "Email change OTP",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-07-21T16:43:30Z",
                    "sentDate": "21-07-2023 16:43:20",
                    "userId": 177269954
                },
                {
                    "id": 1685579314370,
                    "receiver": "[email protected]",
                    "subject": "One Time Password (OTP) for points redemption request.",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-06-05T17:52:30Z",
                    "sentDate": "05-06-2023 17:52:30",
                    "userId": 177269954
                },
                {
                    "id": 1680307985275,
                    "receiver": "[email protected]",
                    "subject": "Email change OTP",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-04-03T11:17:10Z",
                    "sentDate": "03-04-2023 11:17:10",
                    "userId": 177269954
                },
                {
                    "id": 1685578741612,
                    "receiver": "[email protected]",
                    "subject": "One Time Password (OTP) for points redemption request.",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-06-02T09:26:40Z",
                    "sentDate": "02-06-2023 09:26:40",
                    "userId": 177269954
                },
                {
                    "id": 1685578741604,
                    "receiver": "[email protected]",
                    "subject": "One Time Password (OTP) for points redemption request.",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-06-02T09:26:00Z",
                    "sentDate": "02-06-2023 09:26:00",
                    "userId": 177269954
                }
            ]
        }
    ],
    "warnings": []
}
```

```
{
    "name": "capillary",
    "interaction": [
        {
            "count": 8,
            "name": "email",
            "messageList": [
                {
                    "id": 1685581782856,
                    "receiver": "[email protected]",
                    "subject": "Rewards redeemed",
                    "campaignId": 469,
                    "status": "SOFT_BOUNCED",
                    "sentDate": "09-06-2023 14:05:20",
                    "userId": 177269954
                },
                {
                    "id": 1685578741592,
                    "receiver": "[email protected]",
                    "subject": "One Time Password (OTP) for points redemption request.",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-06-02T09:24:40Z",
                    "sentDate": "02-06-2023 09:24:40",
                    "userId": 177269954
                },
                {
                    "id": 1682908778861,
                    "receiver": "[email protected]",
                    "subject": "Account merge confirmation",
                    "campaignId": -1,
                    "status": "SOFT_BOUNCED",
                    "sentDate": "22-05-2023 22:36:55",
                    "userId": -1
                },
                {
                    "id": 1688181521978,
                    "receiver": "[email protected]",
                    "subject": "Email change OTP",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-07-21T16:43:30Z",
                    "sentDate": "21-07-2023 16:43:20",
                    "userId": 177269954
                },
                {
                    "id": 1685579314370,
                    "receiver": "[email protected]",
                    "subject": "One Time Password (OTP) for points redemption request.",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-06-05T17:52:30Z",
                    "sentDate": "05-06-2023 17:52:30",
                    "userId": 177269954
                },
                {
                    "id": 1680307985275,
                    "receiver": "[email protected]",
                    "subject": "Email change OTP",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-04-03T11:17:10Z",
                    "sentDate": "03-04-2023 11:17:10",
                    "userId": 177269954
                },
                {
                    "id": 1685578741612,
                    "receiver": "[email protected]",
                    "subject": "One Time Password (OTP) for points redemption request.",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-06-02T09:26:40Z",
                    "sentDate": "02-06-2023 09:26:40",
                    "userId": 177269954
                },
                {
                    "id": 1685578741604,
                    "receiver": "[email protected]",
                    "subject": "One Time Password (OTP) for points redemption request.",
                    "campaignId": -1,
                    "status": "DELIVERED",
                    "deliveredTime": "2023-06-02T09:26:00Z",
                    "sentDate": "02-06-2023 09:26:00",
                    "userId": 177269954
                }
            ]
        }
    ],
    "warnings": []
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

`Try It!`