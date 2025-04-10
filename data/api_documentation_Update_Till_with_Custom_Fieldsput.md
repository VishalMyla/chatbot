# Update Till with Custom Fieldsput

This API enables you to update a till and:

- add existing custom fields to it

- create new custom fields and add them to the till.

- update existing custom fields associated with the till

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API endpoint example

https://eu.api.capillarytech.com/v2/orgEntity/till/{id}

# Prerequisites

- Authentication: Basic or OAuth authentication details

- Access group resource: Access to Organisation resource

- Configuration:If you want to create more than five custom fields, create a ticket to the sustenance team and increase the limit in the configurationPRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT. By default, the maximum value is set as five.If  the configurationCONF_ALLOW_TILL_AUTH_FOR_ORG_ENTITY_CREATIONis set as false, then the update is possible only with the admin Tills. Otherwise, the custom fields can be updated using any Till.

- If you want to create more than five custom fields, create a ticket to the sustenance team and increase the limit in the configurationPRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT. By default, the maximum value is set as five.

```
PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT
```

- If  the configurationCONF_ALLOW_TILL_AUTH_FOR_ORG_ENTITY_CREATIONis set as false, then the update is possible only with the admin Tills. Otherwise, the custom fields can be updated using any Till.

```
CONF_ALLOW_TILL_AUTH_FOR_ORG_ENTITY_CREATION
```

# Resource information

|  |  |

| --- | --- |

| URI | v2/orgEntity/till/{id} |

| HTTP method | PUT |

| Rate limit | Default |

| Batch support | NA |



# Request path parameters

| Parameter(Parameters marked with * are mandatory) | Type | Description |

| --- | --- | --- |

| id* | Integer | Till Id of existing Till |



# Request body parameters

| Parameter(Parameters marked with * are mandatory) | Type | Description |

| --- | --- | --- |

| customFields* | array-obj | For addition of custom fields - Specify the custom fields to be added to the organization and attach them to the till, or specify the existing custom fields to be attached to the till. For more information on the definitions for the fields in thecustomFieldobject, refer to thedocumentation on adding till with custom fields.For updating values of custom fields - Specify the updated value for the custom fields. Only values of the custom fields can be updated. |



`customField`

[documentation on adding till with custom fields](/reference/add-till-with-new-custom-fields)

```
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/orgEntity/till/50157006' \
--header 'type: ADMIN_USER' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cmFuZG9TE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--data '{
    "customFields": [
    {
      "name": "cf_3",
      "type": "text",
      "dataType": "string",
      "label": "Custom Field Label",
      "defaultValue": "20",
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
      "value": "100"
    }
    ]
}'
```

```
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/orgEntity/till/50157006' \
--header 'type: ADMIN_USER' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cmFuZG9TE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--data '{
    "customFields": [
    {
      "name": "cf_3",
      "type": "text",
      "dataType": "string",
      "label": "Custom Field Label",
      "defaultValue": "20",
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
      "value": "100"
    }
    ]
}'
```

```
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/orgEntity/till/50157007' \
--header 'type: ADMIN_USER' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cmFuZG9tMTMjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--data '{
    "customFields": [
    {
      "name": "cf_1",
      "value": "1000"
    }
    ]
}'
```

```
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/orgEntity/till/50157007' \
--header 'type: ADMIN_USER' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cmFuZG9tMTMjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--data '{
    "customFields": [
    {
      "name": "cf_1",
      "value": "1000"
    }
    ]
}'
```

```
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/orgEntity/till/50157007' \
--header 'type: ADMIN_USER' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cmFuZG9tMT6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--data '{
    "customFields": [
    {
      "name": "cf_1",
      "value": "2000"
    }
    ]
}'
```

```
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/orgEntity/till/50157007' \
--header 'type: ADMIN_USER' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cmFuZG9tMT6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--data '{
    "customFields": [
    {
      "name": "cf_1",
      "value": "2000"
    }
    ]
}'
```

# Response parameters

| Parameterype | Type | Description |

| --- | --- | --- |

| entity | String | The custom field ID created. |

| warnings | String | Warnings if any. |



```
{
    "entity": 50157007,
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": 50157007,
    "warnings": [],
    "errors": [],
    "success": true
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 1207 | Till name already exists. Use a unique name. |

| 1214 | The parent store is not valid. Use a valid parent store ID |

| 1023 | The number of custom fields that can be created is reached. In the org settings, increase the limit ofPRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT. Default value: 5. |

| 1024 | The custom field parameter is null or empty. Enter a value for the parameter. |

| 1025 | There are multiple custom fields with the same name. Use a unique custom field name. |



```
PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT
```

`Try It!`