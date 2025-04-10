# Add Tillpost

This API enables you to create a new Till for your store. You can also create or attach existing custom fields to a till.  The till-level custom fields enable brands to add additional information about the till especially when the brand has multiple tills mapped to a store. For example, till code, till name, description about till etc. The custom fields that you create for a till will be available for all the tills under the org.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API endpoint example

https://eu.api.capillarytech.com/v2/orgEntity/till

# Prerequisites

- Authentication -  Basic or OAuth authentication details

- Access group resource - Access to Organisation resource

- Configuration -  If you want to create more than five custom fields, create a ticket to the sustenance team and increase the limit in the configurationPRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT. By default, the maximum value is set as five.

```
PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT
```

# Resource information

|  |  |

| --- | --- |

| URI | v2/orgEntity/till |

| HTTP method | POST |

| Rate limit | Default |

| Batch support | NA |



# Request body parameters

| Parameter(Parameters marked with * are mandatory) | Type | Description |

| --- | --- | --- |

| name* | string | Name for the till. The Till name specified will also be copied to Till code in the backend. |

| password* | string | Password for the till |

| storeId* | long | Store ID of the parent Store to in which the Till has to be created. |

| description | string | Description for the till. |

| billable | boolean | Specify if the till is used for billing. By default, the value is set as true. |

| storeServerId | long | Store server ID of the parent Store if available. |

| customFields | array-obj | Specify the Custom fields to be added to org and attached to the till. You can either create new custom fields or add existing custom fields to the till. |

| name | string | Name for the custom field. This parameter is mandatory if you are creating custom fields. |

| value | string | Value assigned to the custom field. This parameter is mandatory if you are creating custom fields. |

| type | string | Type of the custom field (e.g., text, number, date). This parameter is applicable when you are creating a new custom field. |

| dataType | string | Data type of the value stored in the field (e.g., string, integer, boolean). This parameter is applicable when you are creating a new custom field. |

| rule | string | Client-side validation rule for the field (Infix expression). This parameter is applicable when you are creating a new custom field. |

| serverRule | string | Server-side validation rule for the field (Infix expression). This parameter is applicable when you are creating a new custom field. |

| regex | string | Regular expression for validating the field value. This parameter is applicable when you are creating a new custom field. |

| error | string | Error message to be displayed. This parameter is applicable when you are creating a new custom field. |

| options | int | Comma-separated options for selection fields. For example, for drop-down custom field type, you can enter "valueA, valueB, valueC". This parameter is applicable when you are creating a new custom field. |

| disableAtServer | int | Flag indicating if the field is disabled on the server-side (0: enabled, 1: disabled). This parameter is applicable when you are creating a new custom field. |

| enableAuditTrail | int | Flag indicating if changes to the field need to be tracked (0: not tracked, 1: tracked). You can add up to 5 custom fields for audit logging. This parameter is applicable when you are creating a new custom field. |

| isPiiData | int | Flag indicating if the field contains Personally Identifiable Information (PII) (0: no, 1: yes). This parameter is applicable when you are creating a new custom field. |

| isPsiData | int | Flag indicating if the field contains Protected Sensitive Information (PSI) (0: no, 1: yes). Refer to the PSI data documentation for moreinformation on classifying PSI data. This parameter is applicable when you are creating a new custom field. |

| helptext | string | Help text displayed for the user regarding the field. This parameter is applicable when you are creating a new custom field. |

| attrs | string | Additional attributes associated with the custom fields. This parameter is applicable when you are creating a new custom field. |



[information on classifying PSI data](/docs/classify-potentially-sensitive-information-psi)

```
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Testing description",
  "storeId": 50154731,
  "password": "123",
  "billable": true,
  "name": "new_till2239"
}'
```

```
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Testing description",
  "storeId": 50154731,
  "password": "123",
  "billable": true,
  "name": "new_till2239"
}'
```

```
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Testing description",
  "storeId": 50154731,
  "password": "123",
  "billable": true,
  "name": "new_till2239",
  "customFields": [
    {
      "name": "cf_1",
      "type": "text",
      "dataType": "string",
      "label": "Custom Field Label",
      "defaultValue": "14",
      "phase": "",
      "position": 1,
      "rule": "",
      "serverRule": "",
      "regex": "",
      "error": "",
      "options": "",
      "isDisabled": 0,
      "isCompulsory": 0,
      "disableAtServer": 0,
      "isUpdatable": 1,
      "enableAuditTrail": 0,
      "isPiiData": 0,
      "isPsiData": 0,
      "helptext": "This is a custom field",
      "attrs": "",
      "value": "15"
    }
  ]
}'
```

```
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Testing description",
  "storeId": 50154731,
  "password": "123",
  "billable": true,
  "name": "new_till2239",
  "customFields": [
    {
      "name": "cf_1",
      "type": "text",
      "dataType": "string",
      "label": "Custom Field Label",
      "defaultValue": "14",
      "phase": "",
      "position": 1,
      "rule": "",
      "serverRule": "",
      "regex": "",
      "error": "",
      "options": "",
      "isDisabled": 0,
      "isCompulsory": 0,
      "disableAtServer": 0,
      "isUpdatable": 1,
      "enableAuditTrail": 0,
      "isPiiData": 0,
      "isPsiData": 0,
      "helptext": "This is a custom field",
      "attrs": "",
      "value": "15"
    }
  ]
}'
```

```
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Testing description",
  "storeId": 50154731,
  "password": "123",
  "billable": true,
  "name": "new_till_2",
  "customFields": [
    {
      "name": "cf_1",
      "value": "16"
    }
  ]
}'
```

```
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Testing description",
  "storeId": 50154731,
  "password": "123",
  "billable": true,
  "name": "new_till_2",
  "customFields": [
    {
      "name": "cf_1",
      "value": "16"
    }
  ]
}'
```

# Response parameters

| Parameter | Description |

| --- | --- |

| createdId | The till ID created. |

| warnings | Warnings if any. |



```
{
    "createdId": 50157065,
    "warnings": []
}
```

```
{
    "createdId": 50157065,
    "warnings": []
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 1207 | TIll name already exists. Use a unique name. |

| 1214 | The parent store is not valid. Use a valid parent store ID |

| 1023 | The number of custom fields that can be created is reached. In the org settings, increase the limit ofPRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT. Default value: 5. |

| 1024 | The custom field parameter is null or empty. Enter a value for the parameter. |

| 1025 | There are multiple custom fields with the same name. Use a unique custom field name. |



```
PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT
```

`Try It!`