# Tag Custom Field to an Entitypost

This API enables updating the value of an existing custom field.

Use Case: You can create separate custom fields for an attribute in both the parent and child organizations and assign distinct values to each. This is useful in scenarios where you want to define different header colours or values in a campaign email for the parent and child organizations separately.

# API endpoint example

https://eu.intouch.capillarytech.com/v2/customField/tag

```
https://eu.intouch.capillarytech.com/v2/customField/tag
```

# Prerequisites

- Authentication -  Basic AuthUser name: Capillary Intouch email ID of the admin userPassword:  Intouch login password in MD5.

- User name: Capillary Intouch email ID of the admin user

- Password:  Intouch login password in MD5.

# Resource information

|  |  |

| --- | --- |

| URI | v2/customField/tag |

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



# Requst Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| scope | Enum | The scope of the custom field. Supported fields:- LOYALTY_REGISTRATION- LOYALTY_TRANSACTION- CUSTOMER_FEEDBACK- POINTS_REDEMPTION- VOUCHER_REDEMPTION- ZONE_CUSTOM_FIELDS- STORE_CUSTOM_FIELDS- CUSTOM_FIELDS_DATA_LOG- CHECK_IN_FEEDBACK- CUSTOMER_PREFERENCES- ADVANCE_FEEDBACK- LOYALTY_LINE_ITEMS- CUSTOMER_CARD- TILL_CUSTOM_FIELDS- ORG_CUSTOM_FIELD |

| entityId | Integer | Organisation ID associated with the custom field |

| customField | Object | Contains details of the custom field being defined or updated |

| └ name | String | The name of the custom field, e.g., "Org Secondary Color" |

| └ value | String | The value assigned to the custom field, e.g., "#4567" |



# Response Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| entity | Integer | Unique identifier of the org associated with this response |

| warnings | Array | List of warnings encountered during processing, if any |

| errors | Array | List of errors encountered during processing, if any |

| success | Boolean | Indicates whether the operation was successful (trueorfalse) |



`true`

`false`

`Try It!`