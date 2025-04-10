# Get Org Extended Fieldsget

You can view the list of extended fields enabled for an organization.

> 👍For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API endpoint example

https://us.api.capillarytech.com/v2/extendedFields

```
https://us.api.capillarytech.com/v2/extendedFields
```

```
https://us.api.capillarytech.com/v2/extendedFields
```

```
https://us.api.capillarytech.com/v2/extendedFields
```

# Response parameters

| Parameter | Description |

| --- | --- |

| entity | Contains two sub-entities:CUSTOMERandREGULAR_LINEITEMeach with multiple attributes. |

| name | Name of the field or attribute. |

| createdBy | Identifier of the user or system that created the field (e.g., -1 might mean system-generated). |

| createdOn | Date when the field was created. |

| modifiedBy | Identifier of the user or system that modified the field. |

| modifiedOn | Date when the field was last modified. |

| label | Display name or label of the field. |

| entityType | Type of the entity, e.g.,CUSTOMERorREGULAR_LINEITEM. |

| dataType | Data type of the field, e.g.,STRING,INTEGER,STANDARD_ENUM,DATETIME, etc. |

| warnings | List of warnings associated with the response. |

| errors | List of errors associated with the response. |

| success | Boolean indicating if the operation was successful (trueorfalse). |



`CUSTOMER`

`REGULAR_LINEITEM`

`CUSTOMER`

`REGULAR_LINEITEM`

`STRING`

`INTEGER`

`STANDARD_ENUM`

`DATETIME`

`true`

`false`

```
{
"entity": {
"CUSTOMER": [
{
"name": "gender",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "Gender",
"entityType": "CUSTOMER",
"dataType": "STANDARD_ENUM"
},
{
"name": "marital_status",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "Marital Status",
"entityType": "CUSTOMER",
"dataType": "STANDARD_ENUM"
},
{
"name": "Age",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "amount",
"entityType": "CUSTOMER",
"dataType": "INTEGER"
},
{
"name": "Region",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "Region",
"entityType": "CUSTOMER",
"dataType": "CUSTOM_ENUM"
},
{
"name": "dob",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Date of Birth",
"entityType": "CUSTOMER",
"dataType": "DATETIME"
},
{
"name": "ssnNumber",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "SSN Number",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "nationality",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Nationality",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "language",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Preferred Language",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "ethnicity",
"createdBy": -1,
"createdOn": "2017-07-20",
"modifiedBy": -1,
"modifiedOn": "2017-07-20",
"label": "Ethnicity",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "zip",
"createdBy": -1,
"createdOn": "2017-07-20",
"modifiedBy": -1,
"modifiedOn": "2017-07-20",
"label": "Zip Code",
"entityType": "CUSTOMER",
"dataType": "STRING"
}
],
"REGULAR_LINEITEM": [
{
"name": "associate",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "Associate",
"entityType": "REGULAR_LINEITEM",
"dataType": "CUSTOM_ENUM"
},
{
"name": "uuid",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "UUID",
"entityType": "REGULAR_LINEITEM",
"dataType": "STRING"
      },

"warnings": [],
"errors": [],
"success": true
}
```

```
{
"entity": {
"CUSTOMER": [
{
"name": "gender",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "Gender",
"entityType": "CUSTOMER",
"dataType": "STANDARD_ENUM"
},
{
"name": "marital_status",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "Marital Status",
"entityType": "CUSTOMER",
"dataType": "STANDARD_ENUM"
},
{
"name": "Age",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "amount",
"entityType": "CUSTOMER",
"dataType": "INTEGER"
},
{
"name": "Region",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "Region",
"entityType": "CUSTOMER",
"dataType": "CUSTOM_ENUM"
},
{
"name": "dob",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Date of Birth",
"entityType": "CUSTOMER",
"dataType": "DATETIME"
},
{
"name": "ssnNumber",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "SSN Number",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "nationality",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Nationality",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "language",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Preferred Language",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "ethnicity",
"createdBy": -1,
"createdOn": "2017-07-20",
"modifiedBy": -1,
"modifiedOn": "2017-07-20",
"label": "Ethnicity",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "zip",
"createdBy": -1,
"createdOn": "2017-07-20",
"modifiedBy": -1,
"modifiedOn": "2017-07-20",
"label": "Zip Code",
"entityType": "CUSTOMER",
"dataType": "STRING"
}
],
"REGULAR_LINEITEM": [
{
"name": "associate",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "Associate",
"entityType": "REGULAR_LINEITEM",
"dataType": "CUSTOM_ENUM"
},
{
"name": "uuid",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "UUID",
"entityType": "REGULAR_LINEITEM",
"dataType": "STRING"
      },

"warnings": [],
"errors": [],
"success": true
}
```

`Try It!`