# Get Org Eventsget

# API endpoint example

`http://eu.api.capillarytech.com/v2/events'

# Prerequisites

- Authentication: Basic or OAuth credentials

- Access group resource: Read access on Behavioural Events resource

# Resource information

|  |  |

| --- | --- |

| URI | /v2/events |

| HTTP Method | GET |

| Pagination | No |

| Batch support | No |

| Rate limit information | NA |



# Request payload

```
curl --location 'http://eu.api.capillarytech.com/v2/events' \
--header 'Authorization: Basic VzdWNlRkYg==' \
--header 'Cookie: _cfuvid=cVUZ35z5krdCM26evqA.B0plrMHwkF57TihY2N7Cp0k-1718948790910-0.0.1.1-604800000'
```

```
curl --location 'http://eu.api.capillarytech.com/v2/events' \
--header 'Authorization: Basic VzdWNlRkYg==' \
--header 'Cookie: _cfuvid=cVUZ35z5krdCM26evqA.B0plrMHwkF57TihY2N7Cp0k-1718948790910-0.0.1.1-604800000'
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| data | Array of Objects | Object containing event metadata and field mapping information. |

| - clickEventsMeta | Object | Object containing metadata related to the event. |

| -- eventId | String | Unique identifier generated for the event at the time of its creation. |

| -- eventName | String | Name of the event. |

| -- actions | Object | Object containing a list of event handlers that process the event. |

| -- fields | Array of Objects | Object containing the details of the fields of the event. |

| --- name | String | Name of the field. |

| --- type | String | Data type or data related to the field. Example: STRING, DOUBLE, CUSTOMER |

| --- attributes | Object | Attributes associated with the field. |

| ---- accountId | Object | Object containing customer account-related information for the field. |

| ----- valueType | String | Data type of the value of accountId. |

| ---- addCustomerIfNotExists | Object | Object containing information for adding customers if they do not exist. |

| ----- value | Boolean | Specifies if customers should be added if they do not exist.Values:True- If customers do not exist, they should be created.False- If customers do not exist, they should not be created. |

| ----- valueType | String | Indicates the data type of the value of addCustomerIfNotExists. |

| ---- identifierType | Object | Contains information on customer identifier type. |

| ----- value | String | Customer identifier name. |

| ----- valueType | String | Data type of the value of identifierType. |

| ---- isRequired | Object | Object containing information on whether the field is mandatory. |

| ----- value | Boolean | Value indicating if the field is mandatory.  Values:True- mandatory,False- not mandatory. |

| ----- valueType | String | Data type of the value of isRequired. |

| ---- source | Object | Contains information on the source of customer creation . |

| ----- value | String | Source of customer creation. |

| ----- valueType | String | Datatype of the value of source. |

| ---- isPsiData | Object | Object indicating if the field contains Protected Sensitive Information. For more information refer,Classify Potentially Sensitive Information (PSI) |

| ----- value | Boolean | Value indicating if Protected Sensitive Information is present. Values:True-  PSI present,False- No PSI. |

| ----- valueType | String | Dataype of the value of isPsiData. |

| ---- regex | Object | Object containing information for regex. |

| ----- valueType | String | Datatype of the value of regex. |

| -- orgId | Integer | Organisation ID for which the events are created. |

| -- status | String | Indicates if the event is published. |

| -- testStatus | String | Indicates if the event is verified for data flow. |

| -- label | String | Display name of the event. |

| -- description | String | Description of the event. |

| -- date | Integer | Timestamp for the event in UNIX epoch format. |

| -- standardEvent | Boolean | Indicates if the event is standard or custom.  A value oftrueindicates it is a standard event, whilefalseindicates it is a custom event. |

| - transformerMappings | Object | Object containing information on field mapping. For more information see,Transformer. |

| -- defaultTransformerMapping | Object | Object containing information on default field mapping. |

| --- eventNameMapping | Object | Object containing information on mapping the event name. |

| ---- valueMap | Object | Object containing the event name for mapping. |

| --- eventFieldMappings | Array of Objects | Object containing information on the mapping of the event's fields. |

| ---- eventFieldName | String | Name of the field for the event. |

| ---- fieldName | String | Value the field is mapped to. |

| -- webEngageTransformerMapping | Object | Object containing information on mapping for WebEngage. For more information see,WebEngage. |

| --- eventNameMapping | Object | Object containing information on mapping the event name. |

| ---- valueMap | Object | Object containing the event name for mapping. |

| --- eventFieldMappings | Array of Objects | Object containing information on the mapping of the event's fields. |

| ---- eventFieldName | String | Name of the field for the event. |

| ---- fieldName | String | Value the field is mapped to. |

| warnings | Object | Object containing a list of warning messages, if any. |

| errors | Object | Object containing a list of error messages, if any. |



`True`

`False`

`True`

`False`

[Classify Potentially Sensitive Information (PSI)](/docs/classify-potentially-sensitive-information-psi)

`True`

`False`

`true`

`false`

[Transformer](/docs/creat-behavioral-events#transformer)

[WebEngage](/docs/creat-behavioral-events#webengage)

```
{
    "data": [
        {
            "clickEventsMeta": {
                "eventId": "886cf408af56fd3d56039785ab69c0c0",
                "eventName": "Appointment",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "CustomerID",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "Appointment",
                        "type": "STRING",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "Execname",
                        "type": "STRING",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100458,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "label": "Appointment",
                "description": "Appointment Booking",
                "date": 1718950314953,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "0b9c729eb499d60e95af7c56a00bdb5f",
                "eventName": "Imporvesleep",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer",
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "sleephours",
                        "type": "DOUBLE",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Alcoholbeforebed",
                        "type": "STRING",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100458,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "label": "Imporvesleep",
                "date": 1718950314953,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "26db0f5d191c6e1e66a5ee1f46c87d47",
                "eventName": "Productreview",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "CustomerID",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "Review",
                        "type": "STRING",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100458,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "label": "Productreview",
                "description": "Productreview",
                "date": 1718950314953,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": {
                    "eventNameMapping": {
                        "valueMap": {
                            "review": "Productreview"
                        }
                    },
                    "eventFieldMappings": [
                        {
                            "eventFieldName": "CustomerID",
                            "fieldName": "019742315078"
                        },
                        {
                            "eventFieldName": "Review",
                            "fieldName": "nice"
                        }
                    ]
                },
                "webEngageTransformerMapping": {
                    "eventNameMapping": {
                        "valueMap": {}
                    },
                    "eventFieldMappings": [
                        {
                            "eventFieldName": "CustomerID",
                            "fieldName": "customer"
                        },
                        {
                            "eventFieldName": "Review",
                            "fieldName": "review"
                        }
                    ]
                }
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "9cb2c0f4ceb832ada037843b8c496760",
                "eventName": "Partner Linking",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer",
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "CustomerID",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "Status",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100458,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "label": "Partner Linking",
                "description": "Partner Linking",
                "date": 1718950314953,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        }
		],
		"warnings": [],
    "errors": []
}
```

```
{
    "data": [
        {
            "clickEventsMeta": {
                "eventId": "886cf408af56fd3d56039785ab69c0c0",
                "eventName": "Appointment",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "CustomerID",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "Appointment",
                        "type": "STRING",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "Execname",
                        "type": "STRING",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100458,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "label": "Appointment",
                "description": "Appointment Booking",
                "date": 1718950314953,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "0b9c729eb499d60e95af7c56a00bdb5f",
                "eventName": "Imporvesleep",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer",
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "sleephours",
                        "type": "DOUBLE",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Alcoholbeforebed",
                        "type": "STRING",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100458,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "label": "Imporvesleep",
                "date": 1718950314953,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "26db0f5d191c6e1e66a5ee1f46c87d47",
                "eventName": "Productreview",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "CustomerID",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "Review",
                        "type": "STRING",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100458,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "label": "Productreview",
                "description": "Productreview",
                "date": 1718950314953,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": {
                    "eventNameMapping": {
                        "valueMap": {
                            "review": "Productreview"
                        }
                    },
                    "eventFieldMappings": [
                        {
                            "eventFieldName": "CustomerID",
                            "fieldName": "019742315078"
                        },
                        {
                            "eventFieldName": "Review",
                            "fieldName": "nice"
                        }
                    ]
                },
                "webEngageTransformerMapping": {
                    "eventNameMapping": {
                        "valueMap": {}
                    },
                    "eventFieldMappings": [
                        {
                            "eventFieldName": "CustomerID",
                            "fieldName": "customer"
                        },
                        {
                            "eventFieldName": "Review",
                            "fieldName": "review"
                        }
                    ]
                }
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "9cb2c0f4ceb832ada037843b8c496760",
                "eventName": "Partner Linking",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer",
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "CustomerID",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "Status",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100458,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "label": "Partner Linking",
                "description": "Partner Linking",
                "date": 1718950314953,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        }
		],
		"warnings": [],
    "errors": []
}
```

`Try It!`