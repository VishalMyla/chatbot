# Custom Fields

This API allows you to create custom fields, either applicable across all entities within the organization or specific to a single entity, such as a loyalty transaction. You can create custom fields with the same name separately for the parent and child organizations. This is useful in scenarios where you want to assign distinct values to the custom field at the parent and child levels, such as setting different header content in email campaigns for each organization.

Note:For customer registration, it is recommended to avoid using identical custom field names for both parent and child organizations. When a custom field with the same name exists at both levels, the value at the parent level will always override that of the child organization.

# API endpoint example

https://eu.intouch.capillarytech.com/v2/customFields

```
https://eu.intouch.capillarytech.com/v2/customFields
```

# Prerequisites

- Authentication -  Basic AuthUser name: Capillary Intouch email ID of the admin userPassword:  Intouch login password in MD5.

- User name: Capillary Intouch email ID of the admin user

- Password:  Intouch login password in MD5.

# Resource information

|  |  |

| --- | --- |

| URI | v2/customFields |

| HTTP method | POST |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | NA |



# Header Information

Both the headers are mandatory.

|  |  |

| --- | --- |

| X-CAP-API-AUTH-KEY | Auth Key for internal API |

| X-CAP-API-AUTH-ORG-ID | Org ID |



# Body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| scope | STRING | The entity for which the custom field will be applicable. For example, the custom fields created for the scopeLOYALTY_REGISTRATIONwill be applicable only for the LOYALTY_REGISTRATION entity. Supported values are:- LOYALTY_REGISTRATION- LOYALTY_TRANSACTION- CUSTOMER_FEEDBACK- POINTS_REDEMPTION- VOUCHER_REDEMPTION- ZONE_CUSTOM_FIELDS- STORE_CUSTOM_FIELDS- CUSTOM_FIELDS_DATA_LOG- CHECK_IN_FEEDBACK- CUSTOMER_PREFERENCES- ADVANCE_FEEDBACK- LOYALTY_LINE_ITEMS- NI_CUSTOM_FIELDS - Not in use.- CUSTOMER_CARD- TILL_CUSTOM_FIELDS- ORG_CUSTOM_FIELD: Applicable for the entire org. |

| customFields | ARRAY | Includes the custom fields that need to be created. |

| - name | STRING | Name of the custom field. The maximum number of characters supported is 20. |

| - type | STRING | Field type of the custom field. The supported types are text, textarea, select, checkbox, radio, file, template_area, datepicker, separator, button, email_body, feedback, and label |

| - dataType | Enum | Data type of the custom field. The supported data types are Boolean, Integer, Double and String. |

| - label | STRING | Name to be displayed on the UI. |

| - defaultValue | STRING | Default value assigned to the custom field, e.g.,"#1234". This value is only Meta data and is not tagged to entity by default.Note:This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| - phase | STRING/INT | This is applicable for Instore and is not in use. |

| - position | INT | Specify the sequence order of the custom field. For example, 1 to appear in the first position of the form. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| - rule | STRING | Allows you to specify logical expressions in the Infix expression language. You can use placeholders like {{custom_field_name}}, which will be dynamically replaced with actual values during evaluation. |

| - serverRule | STRING | Allows you to define rules in Infix form. You should use the following format to specify the rule:{"name":"{{custom_field_name}}","value":"{{custom_field_value}}"}In this format, {{custom_field_name}} serves as a placeholder for the field's name, while {{custom_field_value}} represents the corresponding value. These placeholders will be dynamically replaced with actual values during evaluation, enabling flexible and context-specific rule processing. |

| - regex | STRING | Regular expression for validation (if any). For example, you can use regex to validate an email field. |

| - error | STRING | Error message to display for invalid input (if any). |

| - isDisabled | BOOLEAN | Indicates if the custom field is disabled (0for false). This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| - isCompulsory | BOOLEAN | Indicates if the custom field is mandatory (0for false). This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| - disableAtServer | BOOLEAN | Indicates if the field is disabled on the server (0for false). |

| - isUpdatable | BOOLEAN | Indicates if the field can be updated (0for false). This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| - enableAuditTrail | BOOLEAN | Specifies if audit trails are enabled (0for false). |

| - isPiiData | BOOLEAN | Marks if the field contains PII data (0for false). |

| - isPsiData | BOOLEAN | Marks if the field contains PSI data (0for false). |

| - helptext | STRING | Help text associated with the field (if any). |

| - attrs | STRING | Additional attributes for the field (if any). |



`LOYALTY_REGISTRATION`

`"#1234"`

```
{"name":"{{custom_field_name}}","value":"{{custom_field_value}}"}
```

`0`

`0`

`0`

`0`

`0`

`0`

`0`

```
{
  "scope": "ORG_CUSTOM_FIELD",
  "customFields": [
    {
      "name": "Email Footer Color",
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
 
    }
  ]
}
```

```
{
  "scope": "ORG_CUSTOM_FIELD",
  "customFields": [
    {
      "name": "Email Footer Color",
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
 
    }
  ]
}
```

> 📘NoteThe maximum number of auditable custom fields that can be created is controlled by thePRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMITconfiguration. If this configuration is not set for a specified organisation, the default limit is set to 5 at the backend.

## 📘Note

Note

The maximum number of auditable custom fields that can be created is controlled by thePRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMITconfiguration. If this configuration is not set for a specified organisation, the default limit is set to 5 at the backend.

```
PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT
```

# Response parameters

```
{
    "entity": [
        {
            "orgId": 50399,
            "name": "Email Footer Color",
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
            "attrs": "",
            "value": ""
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
            "name": "Email Footer Color",
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
            "attrs": "",
            "value": ""
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```

# Error codes

| Error Code | Error | Description |

| --- | --- | --- |

| 91032 | NOT_AN_ADMIN_USER | Only admin user can access the endpoint. |

| 1018 | INVALID_CUSTOM_FIELD_SCOPE | Provided scope is invalid. |

| 1023 | AUDITABLE_CUSTOM_FIELDS_COUNT_BREACHED | Maximum auditable custom field limit is{0}, existing count is{1}(including the current payload). |

| 1024 | CUSTOM_FIELD_PARAM_NULL_OR_EMPTY | Custom field parameter{0}is null or empty. |

| 1025 | DUPLICATE_ORG_CUSTOM_FIELD | Duplicate organisation custom field:{0}. |

| 1026 | FAILED_TO_SAVE_CUSTOM_FIELDS | Failed to save custom fields. Try again. |

| 1028 | CUSTOM_FIELD_LIST_NULL_OR_EMPTY | Null or empty custom field list. |



`{0}`

`{1}`

`{0}`

`{0}`

Note:In the descriptions,{0}and{1}are placeholders that will be replaced with specific values, such as the maximum limit, current count, or field name based on the context.

`{0}`

`{1}`

`Try It!`