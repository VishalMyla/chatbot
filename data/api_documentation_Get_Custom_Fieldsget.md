# Get Custom Fieldsget

This API retrieves a list of custom fields that have been created for the organisation specified in the API header. You can filter the list based on the scope, specifying the entity for which each custom field was created. For example, you can use thescopeas  STORE_CUSTOM_FIELDS and retrieve the custom fields created for the STORE entity.

`scope`

# API endpoint example

https://eu.intouch.capillarytech.com/v2/org/customFields

```
https://eu.intouch.capillarytech.com/v2/org/customFields
```

# Prerequisites

- Authentication -  Basic AuthUser name: Capillary Intouch email ID of the admin userPassword:  Intouch login password in MD5.

- User name: Capillary Intouch email ID of the admin user

- Password:  Intouch login password in MD5.

# Resource information

|  |  |

| --- | --- |

| URI | v2/org/customFields |

| HTTP method | GET |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | NA |



# Header Information

Both the headers are mandatory.

|  |  |

| --- | --- |

| X-CAP-API-AUTH-KEY | Auth Key for internal API |

| X-CAP-API-AUTH-ORG-ID | Org ID |



# Query Parameter

| Parameter | Supported Values |

| --- | --- |

| scope(In small case) | - LOYALTY_REGISTRATION- LOYALTY_TRANSACTION- CUSTOMER_FEEDBACK- POINTS_REDEMPTION- VOUCHER_REDEMPTION- ZONE_CUSTOM_FIELDS- STORE_CUSTOM_FIELDS- CUSTOM_FIELDS_DATA_LOG- CHECK_IN_FEEDBACK- CUSTOMER_PREFERENCES- ADVANCE_FEEDBACK- LOYALTY_LINE_ITEMS- CUSTOMER_CARD- TILL_CUSTOM_FIELDS- ORG_CUSTOM_FIELD |

|  |  |



# Response Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| orgId | Integer | Unique identifier for the organisation associated with the custom field. |

| id | Integer | Unique identifier for the custom field. |

| name | String | Name of the custom field. |

| type | String | Type of input expected for the custom field (e.g., text). |

| dataType | String | Data type of the custom field (e.g., STRING). |

| label | String | Display label for the custom field. |

| scope | String | Scope indicating the entity associated with the custom field (e.g., ORG_CUSTOM_FIELD). |

| defaultValue | String | Default value for the custom field, if any. |

| phase | String | Indicates the phase or version in which the custom field is included. This is applicable for Instore and is not in use. |

| position | Integer | Position or order of the custom field. |

| rule | String | Conditional rule in Infix form to validate the custom field. |

| serverRule | String | Server-side validation rule in Infix form. |

| regex | String | Regular expression pattern for validation, if applicable. |

| error | String | Error message associated with validation failure. |

| isDisabled | Boolean | Indicates if the custom field is disabled (0for enabled,1for disabled). |

| isCompulsory | Boolean | Indicates if the custom field is mandatory (0for optional,1for required). |

| disableAtServer | Boolean | Indicates if the custom field is disabled on the server side. |

| isUpdatable | Boolean | Indicates if the custom field can be updated after creation (0for no,1for yes). |

| enableAuditTrail | Boolean | Indicates if changes to the custom field are tracked in the audit trail (0for no,1for yes). |

| isPiiData | Boolean | Indicates if the custom field contains Personally Identifiable Information (PII). |

| isPsiData | Boolean | Indicates if the custom field contains Protected Sensitive Information (PSI). |

| helptext | String | Help text providing guidance on the usage of the custom field. |

| attrs | String | Additional attributes for the custom field, if any. |



`0`

`1`

`0`

`1`

`0`

`1`

`0`

`1`

```
{
    "entity": [
        {
            "orgId": 50399,
            "id": 1906,
            "name": "age_group",
            "type": "text",
            "dataType": "String",
            "label": "Age Group",
            "scope": "LOYALTY_REGISTRATION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1905,
            "name": "anniversary",
            "type": "datepicker",
            "dataType": "String",
            "label": "Anniversary",
            "scope": "LOYALTY_REGISTRATION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1904,
            "name": "birthday",
            "type": "datepicker",
            "dataType": "String",
            "label": "Birthday",
            "scope": "LOYALTY_REGISTRATION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1929,
            "name": "Email base Color",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1930,
            "name": "Email base Color 1",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1931,
            "name": "Email base Color 2",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1958,
            "name": "Footer",
            "type": "text",
            "dataType": "STRING",
            "label": "Header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1903,
            "name": "gender",
            "type": "text",
            "dataType": "String",
            "label": "Gender",
            "scope": "LOYALTY_REGISTRATION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1960,
            "name": "Header",
            "type": "text",
            "dataType": "STRING",
            "label": "Header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1924,
            "name": "Org Secondary Color",
            "type": "text",
            "dataType": "String",
            "label": "Email header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#5678",
            "phase": "1",
            "position": 1,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1902,
            "name": "pincode",
            "type": "text",
            "dataType": "String",
            "label": "Pincode",
            "scope": "LOYALTY_REGISTRATION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1899,
            "name": "trans_cf_a",
            "type": "text",
            "dataType": "String",
            "label": "",
            "scope": "LOYALTY_TRANSACTION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1900,
            "name": "trans_cf_b",
            "type": "text",
            "dataType": "Integer",
            "label": "",
            "scope": "LOYALTY_TRANSACTION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1901,
            "name": "trans_cf_c",
            "type": "text",
            "dataType": "Boolean",
            "label": "",
            "scope": "LOYALTY_TRANSACTION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": [
        {
            "orgId": 50399,
            "id": 1906,
            "name": "age_group",
            "type": "text",
            "dataType": "String",
            "label": "Age Group",
            "scope": "LOYALTY_REGISTRATION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1905,
            "name": "anniversary",
            "type": "datepicker",
            "dataType": "String",
            "label": "Anniversary",
            "scope": "LOYALTY_REGISTRATION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1904,
            "name": "birthday",
            "type": "datepicker",
            "dataType": "String",
            "label": "Birthday",
            "scope": "LOYALTY_REGISTRATION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1929,
            "name": "Email base Color",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1930,
            "name": "Email base Color 1",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1931,
            "name": "Email base Color 2",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1958,
            "name": "Footer",
            "type": "text",
            "dataType": "STRING",
            "label": "Header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1903,
            "name": "gender",
            "type": "text",
            "dataType": "String",
            "label": "Gender",
            "scope": "LOYALTY_REGISTRATION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1960,
            "name": "Header",
            "type": "text",
            "dataType": "STRING",
            "label": "Header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1924,
            "name": "Org Secondary Color",
            "type": "text",
            "dataType": "String",
            "label": "Email header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#5678",
            "phase": "1",
            "position": 1,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1902,
            "name": "pincode",
            "type": "text",
            "dataType": "String",
            "label": "Pincode",
            "scope": "LOYALTY_REGISTRATION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1899,
            "name": "trans_cf_a",
            "type": "text",
            "dataType": "String",
            "label": "",
            "scope": "LOYALTY_TRANSACTION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1900,
            "name": "trans_cf_b",
            "type": "text",
            "dataType": "Integer",
            "label": "",
            "scope": "LOYALTY_TRANSACTION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1901,
            "name": "trans_cf_c",
            "type": "text",
            "dataType": "Boolean",
            "label": "",
            "scope": "LOYALTY_TRANSACTION",
            "defaultValue": "",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 1,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": [
        {
            "orgId": 50399,
            "id": 1929,
            "name": "Email base Color",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1930,
            "name": "Email base Color 1",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1931,
            "name": "Email base Color 2",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1958,
            "name": "Footer",
            "type": "text",
            "dataType": "STRING",
            "label": "Header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1960,
            "name": "Header",
            "type": "text",
            "dataType": "STRING",
            "label": "Header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1924,
            "name": "Org Secondary Color",
            "type": "text",
            "dataType": "String",
            "label": "Email header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#5678",
            "phase": "1",
            "position": 1,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```

```
{
    "entity": [
        {
            "orgId": 50399,
            "id": 1929,
            "name": "Email base Color",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1930,
            "name": "Email base Color 1",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1931,
            "name": "Email base Color 2",
            "type": "text",
            "dataType": "STRING",
            "label": "Mail content",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1958,
            "name": "Footer",
            "type": "text",
            "dataType": "STRING",
            "label": "Header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1960,
            "name": "Header",
            "type": "text",
            "dataType": "STRING",
            "label": "Header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#1234",
            "phase": "1",
            "position": 0,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        },
        {
            "orgId": 50399,
            "id": 1924,
            "name": "Org Secondary Color",
            "type": "text",
            "dataType": "String",
            "label": "Email header color",
            "scope": "ORG_CUSTOM_FIELD",
            "defaultValue": "#5678",
            "phase": "1",
            "position": 1,
            "rule": "",
            "serverRule": "",
            "regex": "",
            "error": "",
            "isDisabled": 0,
            "isCompulsory": 0,
            "disableAtServer": 0,
            "isUpdatable": 0,
            "enableAuditTrail": 0,
            "isPiiData": 0,
            "isPsiData": 0,
            "helptext": "",
            "attrs": ""
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```

`Try It!`