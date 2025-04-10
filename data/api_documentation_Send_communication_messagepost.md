# Send communication messagepost

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication details

- Access group resource: WRITE access to Communication access group resource

# Resource information

|  |  |

| --- | --- |

| URI | /communications/sendMessage?channel={channel} |

| HTTP method | POST |

| Rate limit |  |



# API endpoint example

`https://eu.api.capillarytech.com/v1.1/communications/sendMessage?channel=sms

```
https://eu.api.capillarytech.com/v1.1/communications/sendMessage?channel=sms
```

# Path parameter

| Parameter | Datatype | Description |

| --- | --- | --- |

| channel | Enum | The communication channel. The supported values are sms, whatsapp, email and zalo. The values are not case-sensitive. Default value-sms. |



# Request Body Parameters (SMS)

| Parameter | Datatype | Description |

| --- | --- | --- |

| sms* | array-obj | Details of the SMS to send. Pass each SMS in a separate object. |

| to* | string | Mobile number of the recipient. |

| body* | string | Message content to be sent. |

| scheduled_time(Xml) / scheduledTime(Json) | date-time | Date and time of sending in ISO standard format. |

| sender | string | Sender ID from which the message has to go (sender IDs configured for the respective OU). If not passed, the default sender ID of the org is considered. |



# Request body (Email)

| Parameter | Datatype | Description |

| --- | --- | --- |

| email* | array-obj | Complete details of the email to send. |

| to* | string | Recipient’s email ID. |

| cc | string | Email ID to be included in CC |

| bcc | string | Email IDs to included in BCC. |

| from* | string | Email ID of the sender. |

| subject* | string | Subject of the email. |

| body* | string | Body of the email. |

| attachments | obj | Details of the attachment used in the email. |

| attachment | array-obj | Details of each attachment in email. |

| file_name | string | Name of the attached file. |

| file_type | string | Type of the file (file format). |

| file_data | string | Encoded data of the attachment. |

| file_encoding_type | string | Encoding type of the attachment provided in fileData. Required for all base64 encoded image formats such as JPG, PNG, JPEG, and GIF. This is not required for other file types like TXT, and PDF which are not base64 encoded. |

| scheduled_time | date-time | ISO standard date and time of scheduling the email. |



# Request body (WhatsApp)

| Parameter | Datatype | Description |

| --- | --- | --- |

| whatsappMessage* | array-obj | Details of the WhatsApp message to send. Pass each WhatsApp message in a separate object. |

| receiver* | string | Mobile number of the recipient. |

| template* | string | Message content to be sent. This is the content that will be communicated to the customer/user. |

| scheduled_time(Xml) / scheduledTime(Json) | date-time | ISO standard date and time of scheduling the message. |



# Request body (Zalo)

| Parameter | Datatype | Description |

| --- | --- | --- |

| zaloMessage* | array-obj | Details of the Zalo message to send. Pass each Zalo message in a separate object. |

| receiver* | string | Mobile number of the recipient. |

| template* | string | Message content to be sent. This is the content that will be communicated to the user. |

| scheduled_time(Xml) / scheduledTime(Json) | date-time | ISO standard date and time of scheduling the message. |



# Example request body (JSON)

```
{
    "root": {
        "sms": [
            {
                "to": "919591471711",
                "body": "747977-is the OTP for company X. Valid for 15 minutes. flob0a0BiPA",
                "scheduledTime": "2024-02-22T00:25:06+05:30"
            },
            {
                "to": "919591471711",
                "body": "821341 is the OTP for company Y. Valid for 15 minutes. flob0a0BiPA",
                "scheduledTime": "2024-02-22T09:25:06+05:30"
            }
        ]
    }
}
```

```
{
    "root": {
        "sms": [
            {
                "to": "919591471711",
                "body": "747977-is the OTP for company X. Valid for 15 minutes. flob0a0BiPA",
                "scheduledTime": "2024-02-22T00:25:06+05:30"
            },
            {
                "to": "919591471711",
                "body": "821341 is the OTP for company Y. Valid for 15 minutes. flob0a0BiPA",
                "scheduledTime": "2024-02-22T09:25:06+05:30"
            }
        ]
    }
}
```

```
{
  "root": {
    "email": [
      {
        "to": "[email protected]",
        "cc": "",
        "bcc": "",
        "from": "[email protected]",
        "subject": "Testingemail",
        "scheduledTime": "2024-02-22T00:25:06+05:30"
      }
    ]
  }
}
```

```
{
  "root": {
    "email": [
      {
        "to": "[email protected]",
        "cc": "",
        "bcc": "",
        "from": "[email protected]",
        "subject": "Testingemail",
        "scheduledTime": "2024-02-22T00:25:06+05:30"
      }
    ]
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

```
{
  "root": {
    "whatsappMessage": [
      {
        "receiver": "919591471711",
        "template": "747977 is the OTP for Go+. Valid for 15 minutes. f1obOaOBiPA",
        "scheduledTime": "2024-02-22T00:25:06+05:30"
      }
    ]
  }
}
```

```
{
  "root": {
    "whatsappMessage": [
      {
        "receiver": "919591471711",
        "template": "747977 is the OTP for Go+. Valid for 15 minutes. f1obOaOBiPA",
        "scheduledTime": "2024-02-22T00:25:06+05:30"
      }
    ]
  }
}
```

```
{
  "root": {
    "zaloMessage": [
      {
        "receiver": "919591471711",
        "template": "747977 is the OTP for Go+. Valid for 15 minutes. f1obOaOBiPA",
        "scheduledTime": "2024-02-22T00:25:06+05:30"
      }
    ]
  }
}
```

```
{
  "root": {
    "zaloMessage": [
      {
        "receiver": "919591471711",
        "template": "747977 is the OTP for Go+. Valid for 15 minutes. f1obOaOBiPA",
        "scheduledTime": "2024-02-22T00:25:06+05:30"
      }
    ]
  }
}
```

# Example request body (XML)

```
<root>
    <sms>
        <to>8971345617</to>
        <body>Testing body 1</body>
    </sms>
</root>
```

```
<root>
    <sms>
        <to>8971345617</to>
        <body>Testing body 1</body>
    </sms>
</root>
```

```
<root>
    <email>
        <to>[email protected]</to>
        <from>[email protected]</from>
        <subject>OTP</subject>
        <body>OTP to verify is 999999.</body>
        <scheduled_time>2024-02-22T00:25:06+05:30</scheduled_time>
    </email>
</root>
```

```
<root>
    <email>
        <to>[email protected]</to>
        <from>[email protected]</from>
        <subject>OTP</subject>
        <body>OTP to verify is 999999.</body>
        <scheduled_time>2024-02-22T00:25:06+05:30</scheduled_time>
    </email>
</root>
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

```
<root>
    <whatsappMessage>
        <receiver>919442450602</receiver>
        <template>OTP body</template>
        <scheduled_time>2024-02-22T00:25:06+05:30</scheduled_time>
    </whatsappMessage>
</root>
```

```
<root>
    <whatsappMessage>
        <receiver>919442450602</receiver>
        <template>OTP body</template>
        <scheduled_time>2024-02-22T00:25:06+05:30</scheduled_time>
    </whatsappMessage>
</root>
```

```
<root>
    <zaloMessage>
        <receiver>919442450602</receiver>
        <template>OTP body</template>
        <scheduled_time>2024-02-22T00:25:06+05:30</scheduled_time>
    </zaloMessage>
</root>
```

```
<root>
    <zaloMessage>
        <receiver>919442450602</receiver>
        <template>OTP body</template>
        <scheduled_time>2024-02-22T00:25:06+05:30</scheduled_time>
    </zaloMessage>
</root>
```

# Response (JSON)

```
{
    "status": {
        "count": 2,
        "statusCode": {
            "status": true,
            "message": "Success",
            "code": 200
        },
        "successCount": 2,
        "warnings": [],
        "warningsAsStatusCode": [],
        "message": "Success",
        "code": 200,
        "success": true
    },
    "smsList": [
        {
            "sms": {
                "to": "9919591471711",
                "body": "821341 is the OTP for company Y. Valid for 15 minutes. flob0a0BiPA",
                "scheduledTime": "2024-02-22T00:25:06+05:30",
                "sender": ""
            },
            "errors": [],
            "warnings": []
        },
        {
            "sms": {
                "to": "9919591471711",
                "body": "747977 is the OTP for Shell Go+. Valid for 15 minutes. f1obOaOBiPA",
                "scheduledTime": "2024-02-22T09:25:06+05:30",
                "sender": ""
            },
            "errors": [],
            "warnings": []
        }
    ]
}
```

```
{
    "status": {
        "count": 2,
        "statusCode": {
            "status": true,
            "message": "Success",
            "code": 200
        },
        "successCount": 2,
        "warnings": [],
        "warningsAsStatusCode": [],
        "message": "Success",
        "code": 200,
        "success": true
    },
    "smsList": [
        {
            "sms": {
                "to": "9919591471711",
                "body": "821341 is the OTP for company Y. Valid for 15 minutes. flob0a0BiPA",
                "scheduledTime": "2024-02-22T00:25:06+05:30",
                "sender": ""
            },
            "errors": [],
            "warnings": []
        },
        {
            "sms": {
                "to": "9919591471711",
                "body": "747977 is the OTP for Shell Go+. Valid for 15 minutes. f1obOaOBiPA",
                "scheduledTime": "2024-02-22T09:25:06+05:30",
                "sender": ""
            },
            "errors": [],
            "warnings": []
        }
    ]
}
```

```
{
    "status": {
        "count": 1,
        "statusCode": {
            "status": true,
            "message": "Success",
            "code": 200
        },
        "successCount": 1,
        "warnings": [],
        "warningsAsStatusCode": [],
        "message": "Success",
        "code": 200,
        "success": true
    },
    "emails": [
        {
            "email": {
                "to": "[email protected]",
                "body": "",
                "scheduledTime": "2024-02-26T14:46:31+05:30",
                "cc": "",
                "bcc": "",
                "from": "[email protected]",
                "subject": "Testingemail",
                "fileHandler": [],
                "attachments": [],
                "labelOfSender": "Inventory",
                "senderEmail": "[email protected]",
                "replyToEmail": "[email protected]"
            },
            "errors": [],
            "warnings": []
        }
    ]
}
```

```
{
    "status": {
        "count": 1,
        "statusCode": {
            "status": true,
            "message": "Success",
            "code": 200
        },
        "successCount": 1,
        "warnings": [],
        "warningsAsStatusCode": [],
        "message": "Success",
        "code": 200,
        "success": true
    },
    "emails": [
        {
            "email": {
                "to": "[email protected]",
                "body": "",
                "scheduledTime": "2024-02-26T14:46:31+05:30",
                "cc": "",
                "bcc": "",
                "from": "[email protected]",
                "subject": "Testingemail",
                "fileHandler": [],
                "attachments": [],
                "labelOfSender": "Inventory",
                "senderEmail": "[email protected]",
                "replyToEmail": "[email protected]"
            },
            "errors": [],
            "warnings": []
        }
    ]
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

```
{
    "status": {
        "count": 1,
        "statusCode": {
            "status": true,
            "message": "Success",
            "code": 200
        },
        "successCount": 1,
        "warnings": [],
        "warningsAsStatusCode": [],
        "message": "Success",
        "code": 200,
        "success": true
    },
    "whatsapp": [
        {
            "whatsappMessage": {
                "scheduledTime": "2024-02-26T14:47:42+05:30",
                "template": "747977 is the OTP for Go+. Valid for 15 minutes. f1obOaOBiPA",
                "receiver": "919591471711"
            },
            "errors": [],
            "warnings": []
        }
    ]
}
```

```
{
    "status": {
        "count": 1,
        "statusCode": {
            "status": true,
            "message": "Success",
            "code": 200
        },
        "successCount": 1,
        "warnings": [],
        "warningsAsStatusCode": [],
        "message": "Success",
        "code": 200,
        "success": true
    },
    "whatsapp": [
        {
            "whatsappMessage": {
                "scheduledTime": "2024-02-26T14:47:42+05:30",
                "template": "747977 is the OTP for Go+. Valid for 15 minutes. f1obOaOBiPA",
                "receiver": "919591471711"
            },
            "errors": [],
            "warnings": []
        }
    ]
}
```

```
{
    "status": {
        "count": 1,
        "statusCode": {
            "status": true,
            "message": "Success",
            "code": 200
        },
        "successCount": 1,
        "warnings": [],
        "warningsAsStatusCode": [],
        "message": "Success",
        "code": 200,
        "success": true
    },
    "zalo": [
        {
            "zaloMessage": {
                "scheduledTime": "2024-02-26T14:54:08+05:30",
                "receiver": "919591471711",
                "template": "747977 is the OTP for Go+. Valid for 15 minutes. f1obOaOBiPA"
            },
            "errors": [],
            "warnings": []
        }
    ]
}
```

```
{
    "status": {
        "count": 1,
        "statusCode": {
            "status": true,
            "message": "Success",
            "code": 200
        },
        "successCount": 1,
        "warnings": [],
        "warningsAsStatusCode": [],
        "message": "Success",
        "code": 200,
        "success": true
    },
    "zalo": [
        {
            "zaloMessage": {
                "scheduledTime": "2024-02-26T14:54:08+05:30",
                "receiver": "919591471711",
                "template": "747977 is the OTP for Go+. Valid for 15 minutes. f1obOaOBiPA"
            },
            "errors": [],
            "warnings": []
        }
    ]
}
```

# Response (XML)

```
<response>
    <status>
        <message>Success</message>
        <code>200</code>
        <success>true</success>
        <totalCount>1</totalCount>
        <successCount>1</successCount>
    </status>
    <messages>
        <smsData>
            <sms>
                <status>Queued</status>
                <nsAdminId>1706734307814</nsAdminId>
                <sender></sender>
                <to>918971345617</to>
                <body>Testing body 1</body>
                <scheduledTime>2024-02-26 14:59:49</scheduledTime>
            </sms>
        </smsData>
    </messages>
</response>
```

```
<response>
    <status>
        <message>Success</message>
        <code>200</code>
        <success>true</success>
        <totalCount>1</totalCount>
        <successCount>1</successCount>
    </status>
    <messages>
        <smsData>
            <sms>
                <status>Queued</status>
                <nsAdminId>1706734307814</nsAdminId>
                <sender></sender>
                <to>918971345617</to>
                <body>Testing body 1</body>
                <scheduledTime>2024-02-26 14:59:49</scheduledTime>
            </sms>
        </smsData>
    </messages>
</response>
```

```
<response>
    <status>
        <message>Success</message>
        <code>200</code>
        <success>true</success>
        <totalCount>1</totalCount>
        <successCount>1</successCount>
    </status>
    <emails>
        <emailData>
            <email>
                <from>[email protected]</from>
                <to>[email protected]</to>
                <cc></cc>
                <bcc></bcc>
                <subject>OTP</subject>
                <scheduledTime>2024-02-22 00:25:06</scheduledTime>
            </email>
        </emailData>
    </emails>
</response>
```

```
<response>
    <status>
        <message>Success</message>
        <code>200</code>
        <success>true</success>
        <totalCount>1</totalCount>
        <successCount>1</successCount>
    </status>
    <emails>
        <emailData>
            <email>
                <from>[email protected]</from>
                <to>[email protected]</to>
                <cc></cc>
                <bcc></bcc>
                <subject>OTP</subject>
                <scheduledTime>2024-02-22 00:25:06</scheduledTime>
            </email>
        </emailData>
    </emails>
</response>
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

```
<response>
    <status>
        <message>Success</message>
        <code>200</code>
        <success>true</success>
        <totalCount>1</totalCount>
        <successCount>1</successCount>
    </status>
    <whatsapp>
        <whatsappData>
            <whatsappMessage>
                <template>OTP body</template>
                <receiver>919442450602</receiver>
                <scheduledTime>2024-02-22 00:25:06</scheduledTime>
            </whatsappMessage>
        </whatsappData>
    </whatsapp>
</response>
```

```
<response>
    <status>
        <message>Success</message>
        <code>200</code>
        <success>true</success>
        <totalCount>1</totalCount>
        <successCount>1</successCount>
    </status>
    <whatsapp>
        <whatsappData>
            <whatsappMessage>
                <template>OTP body</template>
                <receiver>919442450602</receiver>
                <scheduledTime>2024-02-22 00:25:06</scheduledTime>
            </whatsappMessage>
        </whatsappData>
    </whatsapp>
</response>
```

```
<response>
    <status>
        <message>Success</message>
        <code>200</code>
        <success>true</success>
        <totalCount>1</totalCount>
        <successCount>1</successCount>
    </status>
    <zalo>
        <zaloData>
            <zaloMessage>
                <template>OTP body</template>
                <receiver>919442450602</receiver>
                <scheduledTime>2024-02-22 00:25:06</scheduledTime>
            </zaloMessage>
        </zaloData>
    </zalo>
</response>
```

```
<response>
    <status>
        <message>Success</message>
        <code>200</code>
        <success>true</success>
        <totalCount>1</totalCount>
        <successCount>1</successCount>
    </status>
    <zalo>
        <zaloData>
            <zaloMessage>
                <template>OTP body</template>
                <receiver>919442450602</receiver>
                <scheduledTime>2024-02-22 00:25:06</scheduledTime>
            </zaloMessage>
        </zaloData>
    </zalo>
</response>
```

`Try It!`