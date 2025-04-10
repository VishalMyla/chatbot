# Get Events Metaget

Metadata refers to information about data. This API retrieves metadata for a specified event by using the event name. It fetches the details of the event's schema or structure as defined during its creation, detailing the various fields and their attributes.

# API endpoint example

`https://eu.api.capillarytech.com/v2/events/meta?event_name=be_reserved

# Prerequisites

- Authentication: Basic or OAuth credentials

- Access group resource: Read access on Behavioural Events resource

# Resource information

|  |  |

| --- | --- |

| URI | /events/meta |

| HTTP method | GET |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | NA |



# Query parameter

| Parameter (Parameters marked with * are mandatory) | Description |

| --- | --- |

| event_name* | Name of the event for which the metadata is retrieved. |



```
curl --location 'https://eu.api.capillarytech.com/v2/events/meta?event_name=be_reserved' \
--header 'Authorization: Basic mY2OWZmZmRkYg==' \
--header 'Cookie: _cfuvid=RY6QOmEmXhlkpkYzUT5aGlkDXWcSpLGwMXEa7suetWY-1719207183918-0.0.1.1-604800000'
```

```
curl --location 'https://eu.api.capillarytech.com/v2/events/meta?event_name=be_reserved' \
--header 'Authorization: Basic mY2OWZmZmRkYg==' \
--header 'Cookie: _cfuvid=RY6QOmEmXhlkpkYzUT5aGlkDXWcSpLGwMXEa7suetWY-1719207183918-0.0.1.1-604800000'
```

# Response parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| clickEventsMeta | Object | Object containing metadata related to the event. |

| - eventId | String | Unique identifier generated for the event at the time of its creation. |

| - eventName | String | Name of the event. |

| - eventType | String | Specifies what the event is related to. Values:USEREVENT,PRODUCTEVENT,COUPONEVENT |

| - actions | Object | Object containing a list of event handlers that process the event. |

| - fields | Object | Object containing the details of the fields of the event. |

| -- name | String | Name of the field. |

| -- type | String | Data type or data related to the field. Example:STRING,DOUBLE,CUSTOMER |

| -- attributes | Object | Attributes associated with the field. |

| --- accountId | Object | Object containing customer account-related information for the field. |

| ---- valueType | String | Data type of the accountIdfield value.  For example,Boolean,Enum,String. |

| --- addCustomerIfNotExists | Object | Object containing information for adding customers if they do not exist. |

| ---- value | Boolean | Specifies if customers should be added if they do not exist.Values:True-If customers do not exist, they are created.False- If customers do not exist, they are not created. |

| ---- valueType | String | Data type of the addCustomerIfNotExists field value. For example,Boolean,Enum,String. |

| --- identifierType | Object | Contains information on customer identifier type. |

| ---- value | String | Customer identifier name. |

| ---- valueType | String | Data type of the identifierType field value. For example,Boolean,Enum,String. |

| --- isRequired | Object | Object containing information on whether the field is mandatory. |

| ---- value | Boolean | Value indicating if the field is mandatory. Values:True- Required,False- Not required. |

| ---- valueType | String | Data type of the isRequired field value.  For example,Boolean,Enum,String. |

| --- source | Object | Contains information on the source of customer creation. |

| ---- value | String | Source of customer creation. |

| ---- valueType | String | Data type of the source field value. For example,Boolean,Enum,String. |

| --- isPsiData | Object | Object indicating if the field contains Protected Sensitive Information. For more information refer,Classify Potentially Sensitive Information (PSI) |

| ---- value | Boolean | Value indicating if Protected Sensitive Information is present. Values:True- PSI present,False- No PSI. |

| ---- valueType | String | Data type of the isPsiData field value.  For example,Boolean,Enum,String. |

| --- isUniqueKeyField | Object | Object containing information on isUniqueKeyField attribute. Enable to make the attribute a part of a unique key. By default, the event name and customer identifier are included in the unique key. When theisuniquekeyfieldattribute is enabled, it is added to the unique key with the event name and customer identifier. This ensures that the combination of these elements remains unique and consistent. ReferEnabling uniqueness checkfor more details. |

| ---- value | Boolean | Value indicating if the field is a unique key field. Values:True- Part of unique key,False- Not part of unique key. |

| ---- valueType | String | Data type of the isUniqueKeyField field value.  For example,Boolean,Enum,String. |

| --- regex | Object | Object containing information for regex. |

| ---- valueType | String | Data type of the regex field value.  For example,Boolean,Enum,String. |

| --- possibleValues | Object | Object containing the possible values for the field. |

| ---- valueType | String | Data type of the possibleValues field value.  For example,Boolean,Enum,String. |

| ---- values | Enum | List of possible values. |

| - orgId | Integer | Organisation ID for which the events are created. |

| - status | String | Indicates if the event is published. |

| - testStatus | String | Indicates if the event is verified for data flow. |

| - label | String | Display name of the event. |

| - description | String | Description of the event. |

| - date | Long | Timestamp for the event in UNIX epoch format. |

| - standardEvent | Boolean | Indicates if the event is standard or custom.True- Standard event,False- Custom event. For more information refer,Types of Behavioral Events |

| transformerMappings | Object | Object containing information on field mapping. For more information see,Transformer. |

| - defaultTransformerMapping | Object | Object containing information on default field mapping. |

| - webEngageTransformerMapping | Object | Object containing information on mapping for WebEngage. For more information see,WebEngage. |

| warnings | Object | Object containing a list of warning messages, if any. |



`USEREVENT`

`PRODUCTEVENT`

`COUPONEVENT`

`STRING`

`DOUBLE`

`CUSTOMER`

`Boolean`

`Enum`

`String`

`True`

`False`

`Boolean`

`Enum`

`String`

`Boolean`

`Enum`

`String`

`True`

`False`

`Boolean`

`Enum`

`String`

`Boolean`

`Enum`

`String`

[Classify Potentially Sensitive Information (PSI)](/docs/classify-potentially-sensitive-information-psi)

`True`

`False`

`Boolean`

`Enum`

`String`

`isuniquekeyfield`

[Enabling uniqueness check](/docs/creat-behavioral-events#enabling-uniqueness-check)

`True`

`False`

`Boolean`

`Enum`

`String`

`Boolean`

`Enum`

`String`

`Boolean`

`Enum`

`String`

`True`

`False`

[Types of Behavioral Events](/docs/creat-behavioral-events#types-of-behavioral-events)

[Transformer.](/docs/creat-behavioral-events#transformer)

[WebEngage](/docs/creat-behavioral-events#webengage)

```
{
    "clickEventsMeta": {
        "eventId": "96d266fc6323a296701425011343c544",
        "eventName": "be_reserved",
        "eventType": "USEREVENT",
        "actions": [
            "EMFConsumer",
            "EIConsumer"
        ],
        "fields": [
            {
                "name": "customer_id",
                "type": "CUSTOMER",
                "attributes": {
                    "accountId": {
                        "valueType": "ENUM"
                    },
                    "addCustomerIfNotExists": {
                        "value": "true",
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
                "name": "hotel_name",
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
                        "value": "true",
                        "valueType": "BOOLEAN"
                    },
                    "regex": {
                        "valueType": "STRING"
                    }
                }
            },
            {
                "name": "external_event_id",
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
                        "value": "true",
                        "valueType": "BOOLEAN"
                    },
                    "regex": {
                        "valueType": "STRING"
                    }
                }
            },
            {
                "name": "room_nights",
                "type": "ENUM",
                "attributes": {
                    "isPsiData": {
                        "value": "false",
                        "valueType": "BOOLEAN"
                    },
                    "isRequired": {
                        "value": "false",
                        "valueType": "BOOLEAN"
                    },
                    "isUniqueKeyField": {
                        "value": "false",
                        "valueType": "BOOLEAN"
                    },
                    "possibleValues": {
                        "valueType": "LIST",
                        "values": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                            "12",
                            "13",
                            "14",
                            "15"
                        ]
                    }
                }
            },
            {
                "name": "age",
                "type": "DOUBLE",
                "attributes": {
                    "isPsiData": {
                        "value": "true",
                        "valueType": "BOOLEAN"
                    },
                    "isRequired": {
                        "value": "false",
                        "valueType": "BOOLEAN"
                    },
                    "isUniqueKeyField": {
                        "value": "false",
                        "valueType": "BOOLEAN"
                    }
                }
            }
        ],
        "orgId": 100458,
        "status": "PUBLISHED",
        "testStatus": "VERIFIED",
        "label": "be_reserved",
        "description": "be_reserved",
        "date": 1719227213866,
        "standardEvent": false
    },
    "transformerMappings": {
        "defaultTransformerMapping": null,
        "webEngageTransformerMapping": null
    },
    "warnings": []
}
```

```
{
    "clickEventsMeta": {
        "eventId": "96d266fc6323a296701425011343c544",
        "eventName": "be_reserved",
        "eventType": "USEREVENT",
        "actions": [
            "EMFConsumer",
            "EIConsumer"
        ],
        "fields": [
            {
                "name": "customer_id",
                "type": "CUSTOMER",
                "attributes": {
                    "accountId": {
                        "valueType": "ENUM"
                    },
                    "addCustomerIfNotExists": {
                        "value": "true",
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
                "name": "hotel_name",
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
                        "value": "true",
                        "valueType": "BOOLEAN"
                    },
                    "regex": {
                        "valueType": "STRING"
                    }
                }
            },
            {
                "name": "external_event_id",
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
                        "value": "true",
                        "valueType": "BOOLEAN"
                    },
                    "regex": {
                        "valueType": "STRING"
                    }
                }
            },
            {
                "name": "room_nights",
                "type": "ENUM",
                "attributes": {
                    "isPsiData": {
                        "value": "false",
                        "valueType": "BOOLEAN"
                    },
                    "isRequired": {
                        "value": "false",
                        "valueType": "BOOLEAN"
                    },
                    "isUniqueKeyField": {
                        "value": "false",
                        "valueType": "BOOLEAN"
                    },
                    "possibleValues": {
                        "valueType": "LIST",
                        "values": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                            "12",
                            "13",
                            "14",
                            "15"
                        ]
                    }
                }
            },
            {
                "name": "age",
                "type": "DOUBLE",
                "attributes": {
                    "isPsiData": {
                        "value": "true",
                        "valueType": "BOOLEAN"
                    },
                    "isRequired": {
                        "value": "false",
                        "valueType": "BOOLEAN"
                    },
                    "isUniqueKeyField": {
                        "value": "false",
                        "valueType": "BOOLEAN"
                    }
                }
            }
        ],
        "orgId": 100458,
        "status": "PUBLISHED",
        "testStatus": "VERIFIED",
        "label": "be_reserved",
        "description": "be_reserved",
        "date": 1719227213866,
        "standardEvent": false
    },
    "transformerMappings": {
        "defaultTransformerMapping": null,
        "webEngageTransformerMapping": null
    },
    "warnings": []
}
```

`Try It!`