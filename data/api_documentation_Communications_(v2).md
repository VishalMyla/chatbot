# Communications (v2)

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

`https://eu.api.capillarytech.com/v2/communications/sendMessage?channel=sms

```
https://eu.api.capillarytech.com/v2/communications/sendMessage?channel=sms
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

| scheduledTime | date-time | Date and time of sending in ISO standard format. |

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

| scheduledTime | date-time | ISO standard date and time of scheduling the email. |



# Request body (WhatsApp)

| Parameter | Datatype | Description |

| --- | --- | --- |

| whatsappMessage* | array-obj | Details of the WhatsApp message to send. Pass each WhatsApp message in a separate object. |

| receiver* | string | Mobile number of the recipient. |

| template* | string | Message content to be sent. This is the content that will be communicated to the user. |

| scheduledTime | date-time | ISO standard date and time of scheduling the message. |



# Request body (Zalo)

| Parameter | Datatype | Description |

| --- | --- | --- |

| zaloMessage* | array-obj | Details of the Zalo message to send. Pass each Zalo message in a separate object. |

| receiver* | string | Mobile number of the recipient. |

| template* | string | Message content to be sent. This is the content that will be communicated to the user. |

| scheduledTime | date-time | ISO standard date and time of scheduling the message. |



# Example request body

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

# Example response

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

`Try It!`