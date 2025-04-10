# Retrieve org hierarchy detailsget

This API retrieves the hierarchy details of an organization based on the API credentials (till credentials/OAuth token).

> 👍NoteFor an overview on our APIs and for hands-on testing, refer toAPI overviewandMake your first API calldocumentation.

## 👍Note

Note

For an overview on our APIs and for hands-on testing, refer toAPI overviewandMake your first API calldocumentation.

# Prerequisites

- Basic or OAuth credentials

- Access toOrganization resource

# Resource information

|  |  |

| --- | --- |

| URI | v2/organization/hierarchy |

| HTTP method | GET |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# Terminologies:

1. Standard Org: An independent organization identified by aparentIdof -1.

`parentId`

2. Super Org: An organization with child organizations but no parent, also identified by aparentIdof -1.

`parentId`

3. Connected Org: An organization linked to others within a hierarchy.

4. Base Org: The organization making the API request.

# API endpoint example

```
curl --location 'https://eu.api.capillarytech.com/v2/organization/hierarchy'
```

```
curl --location 'https://eu.api.capillarytech.com/v2/organization/hierarchy'
```

# Request query parameters

| Parameter | Type | Description |

| --- | --- | --- |

| fetchSiblings | boolean | SetfetchSiblings=trueto retrieve details of all related organizations. This includes the details of all the orgs that share the same parent, the parent org and the requesting child org details.If set to false and the request is made from a child org, the API will retrieve only the details of the child org and its parent org. |

| fetchCustomFields | boolean | Includes the org-level custom fields (custom fields with the scope (ORG_CUSTOM_FIELD) under the org. |



`fetchSiblings=true`

`ORG_CUSTOM_FIELD`

# Response Scenarios Based on Organization Type

- Request from a Child Organization:IffetchSiblings=true: The response includes:The base (child) organization itself.All other connected organizations that share the same parent.IffetchSiblings=falseor not set: The response includes only the child and its parent organization.

Request from a Child Organization:

- IffetchSiblings=true: The response includes:The base (child) organization itself.All other connected organizations that share the same parent.

`fetchSiblings=true`

- The base (child) organization itself.

- All other connected organizations that share the same parent.

- IffetchSiblings=falseor not set: The response includes only the child and its parent organization.

`fetchSiblings=false`

- Request from a Parent Organization:The response includes details of the base (parent) organization and all connected child organizations.

Request from a Parent Organization:

- The response includes details of the base (parent) organization and all connected child organizations.

- Request from a Standard (Independent) Organization:As this organization has no parent or child associations, the response includes only the base organization.

Request from a Standard (Independent) Organization:

- As this organization has no parent or child associations, the response includes only the base organization.

# Response parameters

| Parameter | Type | Description |

| --- | --- | --- |

| baseOrganization | Object | Includes the details of the org from which the request is made. |

| id | Integer | Unique identifier for the organization. |

| name | String | Name of the organization. |

| phone | String | Contact phone number for the organization. |

| address | String | Address of the organization. |

| language | String | Language used by the organization. |

| languageCode | String | Code representing the language (e.g., "en" for English). |

| languageLocale | String | Locale representing the language (e.g., "en-US). |

| parentId | Integer | ID of the parent organization. A value of -1 indicates no parent organization. Also for Standard and Super org, the id is -1. |

| locality | String | Locality of the organization. |

| pinCode | String | Postal code for the organization’s address. |

| currency | String | Currency used by the organization (e.g., "United States dollar"). |

| timezoneLabel | String | The time zone in which the organization operates (e.g., "Asia/Kolkata"). |

| timezoneOffset | String | Offset from UTC for the organization's time zone (e.g., "+05:30"). |

| minSmsHour | Integer | Minimum hour of the day during which SMS can be sent (24-hour format). |

| maxSmsHour | Integer | Maximum hour of the day during which SMS can be sent (24-hour format). |

| logo | String | This parameter is not in use. |

| webSite | String | Website URL for the organization. |

| country | String | Country in which the organization is located. |

| countryCode | String | ISO country code (e.g., "US" for the United States). |

| active | Boolean | Indicates whether the organization is active (true) or inactive (false). |

| orgType | String | Type of the organization (e.g., Standard org, Super org, Parent org, Child org.). |

| relationshipType | String | Indicates the type of relationship with the org. |

| connectedOrganizations | Array | List of related organizations. |

| orgType | String | Indicates whether an organization is a STANDARD_ORG (independent), SUPER_ORG (a parent with child organizations), or CHILD_ORG (a child of a parent organization). |

| warnings | Array | List of warnings related to the organization. Empty if none. |



`true`

`false`

```
{
  "baseOrganization": {
    "id": 3,
    "name": "Child-One-Org",
    "phone": "",
    "address": "NA",
    "language": null,
    "languageCode": null,
    "languageLocale": null,
    "parentId": 2,
    "locality": null,
    "pinCode": null,
    "currency": null,
    "timezoneLabel": "Antarctica/Vostok",
    "timezoneOffset": "+07:00",
    "minSmsHour": 11,
    "maxSmsHour": 19,
    "logo": null,
    "webSite": null,
    "country": null,
    "countryCode": null,
    "state": null,
    "city": null,
    "active": true,
    "relationshipType": "PARENT_CHILD",
    "orgType": "CHILD_ORG"
  },
  "connectedOrganizations": [
    {
      "id": 4,
      "name": "Child-Two-Org",
      "phone": "",
      "address": "NA",
      "language": null,
      "languageCode": null,
      "languageLocale": null,
      "parentId": 2,
      "locality": null,
      "pinCode": null,
      "currency": null,
      "timezoneLabel": "Antarctica/Vostok",
      "timezoneOffset": "+07:00",
      "minSmsHour": 11,
      "maxSmsHour": 19,
      "logo": null,
      "webSite": null,
      "country": null,
      "countryCode": null,
      "state": null,
      "city": null,
      "active": true,
     
      "orgType": "CHILD_ORG"
    },
    {
      "id": 2,
      "name": "Parent-One-Org",
      "phone": "",
      "address": "NA",
      "language": null,
      "languageCode": null,
      "languageLocale": null,
      "parentId": -1,
      "locality": null,
      "pinCode": null,
      "currency": null,
      "timezoneLabel": "Antarctica/Vostok",
      "timezoneOffset": "+07:00",
      "minSmsHour": 11,
      "maxSmsHour": 19,
      "logo": null,
      "webSite": null,
      "country": null,
      "countryCode": null,
      "state": null,
      "city": null,
      "active": true,
      
      "orgType": "SUPER_ORG"
    }
  ],
  "uniqueId": null,
  "warnings": [
    
  ]
}
```

```
{
  "baseOrganization": {
    "id": 3,
    "name": "Child-One-Org",
    "phone": "",
    "address": "NA",
    "language": null,
    "languageCode": null,
    "languageLocale": null,
    "parentId": 2,
    "locality": null,
    "pinCode": null,
    "currency": null,
    "timezoneLabel": "Antarctica/Vostok",
    "timezoneOffset": "+07:00",
    "minSmsHour": 11,
    "maxSmsHour": 19,
    "logo": null,
    "webSite": null,
    "country": null,
    "countryCode": null,
    "state": null,
    "city": null,
    "active": true,
    "relationshipType": "PARENT_CHILD",
    "orgType": "CHILD_ORG"
  },
  "connectedOrganizations": [
    {
      "id": 4,
      "name": "Child-Two-Org",
      "phone": "",
      "address": "NA",
      "language": null,
      "languageCode": null,
      "languageLocale": null,
      "parentId": 2,
      "locality": null,
      "pinCode": null,
      "currency": null,
      "timezoneLabel": "Antarctica/Vostok",
      "timezoneOffset": "+07:00",
      "minSmsHour": 11,
      "maxSmsHour": 19,
      "logo": null,
      "webSite": null,
      "country": null,
      "countryCode": null,
      "state": null,
      "city": null,
      "active": true,
     
      "orgType": "CHILD_ORG"
    },
    {
      "id": 2,
      "name": "Parent-One-Org",
      "phone": "",
      "address": "NA",
      "language": null,
      "languageCode": null,
      "languageLocale": null,
      "parentId": -1,
      "locality": null,
      "pinCode": null,
      "currency": null,
      "timezoneLabel": "Antarctica/Vostok",
      "timezoneOffset": "+07:00",
      "minSmsHour": 11,
      "maxSmsHour": 19,
      "logo": null,
      "webSite": null,
      "country": null,
      "countryCode": null,
      "state": null,
      "city": null,
      "active": true,
      
      "orgType": "SUPER_ORG"
    }
  ],
  "uniqueId": null,
  "warnings": [
    
  ]
}
```

```
{
    "baseOrganization": {
        "id": 50398,
        "name": "connectedOrgChild1",
        "phone": "",
        "address": "",
        "parentId": -1,
        "locality": "",
        "pinCode": "700045",
        "timezoneLabel": "Asia/Kolkata",
        "timezoneOffset": "+05:30",
        "minSmsHour": 9,
        "maxSmsHour": 21,
        "logo": "",
        "webSite": "",
        "country": "India",
        "countryCode": "IN",
        "active": true,
      "relationshipType": "PARENT_CHILD",
        "orgType": "SUPER_ORG",
        "customFields": {
            "Footer": "#1234",
            "Header": "#1234",
            "Org Secondary Color": "#1234",
            "Testing 1": "5678"
        }
    },
    "connectedOrganizations": [
        {
            "id": 50399,
            "name": "connectedOrgChildOne",
            "phone": "",
            "address": "JODHPUR GARDENS P/O LAKE GARDENS KOLKATA - 700045",
            "parentId": 50398,
            "locality": "",
            "pinCode": "700045",
            "timezoneLabel": "Asia/Kolkata",
            "timezoneOffset": "+05:30",
            "minSmsHour": 9,
            "maxSmsHour": 21,
            "logo": "",
            "webSite": "",
            "country": "India",
            "countryCode": "IN",
            "state": "West Bengal",
            "city": "KOLKATA",
            "active": true,
            
            "orgType": "CHILD_ORG",
            "customFields": {
                "Header": "#7890",
                "Org Secondary Color": "#4567"
            }
        }
    ],
    "warnings": []
}
```

```
{
    "baseOrganization": {
        "id": 50398,
        "name": "connectedOrgChild1",
        "phone": "",
        "address": "",
        "parentId": -1,
        "locality": "",
        "pinCode": "700045",
        "timezoneLabel": "Asia/Kolkata",
        "timezoneOffset": "+05:30",
        "minSmsHour": 9,
        "maxSmsHour": 21,
        "logo": "",
        "webSite": "",
        "country": "India",
        "countryCode": "IN",
        "active": true,
      "relationshipType": "PARENT_CHILD",
        "orgType": "SUPER_ORG",
        "customFields": {
            "Footer": "#1234",
            "Header": "#1234",
            "Org Secondary Color": "#1234",
            "Testing 1": "5678"
        }
    },
    "connectedOrganizations": [
        {
            "id": 50399,
            "name": "connectedOrgChildOne",
            "phone": "",
            "address": "JODHPUR GARDENS P/O LAKE GARDENS KOLKATA - 700045",
            "parentId": 50398,
            "locality": "",
            "pinCode": "700045",
            "timezoneLabel": "Asia/Kolkata",
            "timezoneOffset": "+05:30",
            "minSmsHour": 9,
            "maxSmsHour": 21,
            "logo": "",
            "webSite": "",
            "country": "India",
            "countryCode": "IN",
            "state": "West Bengal",
            "city": "KOLKATA",
            "active": true,
            
            "orgType": "CHILD_ORG",
            "customFields": {
                "Header": "#7890",
                "Org Secondary Color": "#4567"
            }
        }
    ],
    "warnings": []
}
```

```
{
  "baseOrganization": {
    "id": 3,
    "name": "Child-One-Org",
    "phone": "",
    "address": "NA",
    "language": null,
    "languageCode": null,
    "languageLocale": null,
    "parentId": 2,
    "locality": null,
    "pinCode": null,
    "currency": null,
    "timezoneLabel": "Antarctica/Vostok",
    "timezoneOffset": "+07:00",
    "minSmsHour": 11,
    "maxSmsHour": 19,
    "logo": null,
    "webSite": null,
    "country": null,
    "countryCode": null,
    "state": null,
    "city": null,
    "active": true,
    "relationshipType": "PARENT_CHILD",
    "orgType": "CHILD_ORG"
  },
  "connectedOrganizations": [
    {
      "id": 2,
      "name": "Parent-One-Org",
      "phone": "",
      "address": "NA",
      "language": null,
      "languageCode": null,
      "languageLocale": null,
      "parentId": -1,
      "locality": null,
      "pinCode": null,
      "currency": null,
      "timezoneLabel": "Antarctica/Vostok",
      "timezoneOffset": "+07:00",
      "minSmsHour": 11,
      "maxSmsHour": 19,
      "logo": null,
      "webSite": null,
      "country": null,
      "countryCode": null,
      "state": null,
      "city": null,
      "active": true,
      
      "orgType": "SUPER_ORG"
    }
  ],
  "uniqueId": null,
  "warnings": [
    
  ]
}
```

```
{
  "baseOrganization": {
    "id": 3,
    "name": "Child-One-Org",
    "phone": "",
    "address": "NA",
    "language": null,
    "languageCode": null,
    "languageLocale": null,
    "parentId": 2,
    "locality": null,
    "pinCode": null,
    "currency": null,
    "timezoneLabel": "Antarctica/Vostok",
    "timezoneOffset": "+07:00",
    "minSmsHour": 11,
    "maxSmsHour": 19,
    "logo": null,
    "webSite": null,
    "country": null,
    "countryCode": null,
    "state": null,
    "city": null,
    "active": true,
    "relationshipType": "PARENT_CHILD",
    "orgType": "CHILD_ORG"
  },
  "connectedOrganizations": [
    {
      "id": 2,
      "name": "Parent-One-Org",
      "phone": "",
      "address": "NA",
      "language": null,
      "languageCode": null,
      "languageLocale": null,
      "parentId": -1,
      "locality": null,
      "pinCode": null,
      "currency": null,
      "timezoneLabel": "Antarctica/Vostok",
      "timezoneOffset": "+07:00",
      "minSmsHour": 11,
      "maxSmsHour": 19,
      "logo": null,
      "webSite": null,
      "country": null,
      "countryCode": null,
      "state": null,
      "city": null,
      "active": true,
      
      "orgType": "SUPER_ORG"
    }
  ],
  "uniqueId": null,
  "warnings": [
    
  ]
}
```

```
{
  "baseOrganization": {
    "id": 1115,
    "name": "Nightly_ApiAuto",
    "phone": "",
    "address": "asdasd",
    "language": "Dari-Persian, Pashtu",
    "languageLocale": "AF",
    "parentId": -1,
    "locality": "",
    "pinCode": "560800",
    "currency": "Indian Rupee ",
    "timezoneLabel": "Asia/Kolkata",
    "timezoneOffset": "+05:30",
    "minSmsHour": 12,
    "maxSmsHour": 21,
    "logo": "",
    "webSite": "",
    "country": "India",
    "countryCode": "IN",
    "state": "Karnataka",
    "city": "Bangalore",
    "active": true,
    "orgType": "STANDARD_ORG"
  },
  "connectedOrganizations": [],
  "warnings": []
```

```
{
  "baseOrganization": {
    "id": 1115,
    "name": "Nightly_ApiAuto",
    "phone": "",
    "address": "asdasd",
    "language": "Dari-Persian, Pashtu",
    "languageLocale": "AF",
    "parentId": -1,
    "locality": "",
    "pinCode": "560800",
    "currency": "Indian Rupee ",
    "timezoneLabel": "Asia/Kolkata",
    "timezoneOffset": "+05:30",
    "minSmsHour": 12,
    "maxSmsHour": 21,
    "logo": "",
    "webSite": "",
    "country": "India",
    "countryCode": "IN",
    "state": "Karnataka",
    "city": "Bangalore",
    "active": true,
    "orgType": "STANDARD_ORG"
  },
  "connectedOrganizations": [],
  "warnings": []
```

```
{
  "baseOrganization": {
    "id": 51956,
    "name": "connectedOrgChildOne",
    "phone": "",
    "address": "JODHPUR GARDENS P/O LAKE GARDENS KOLKATA - 700045",
    "parentId": -1,
    "locality": "",
    "pinCode": "700045",
    "timezoneLabel": "Asia/Kolkata",
    "timezoneOffset": "+05:30",
    "minSmsHour": 9,
    "maxSmsHour": 21,
    "logo": "",
    "webSite": "",
    "country": "India",
    "countryCode": "IN",
    "state": "West Bengal",
    "city": "KOLKATA",
    "active": true,
    "relationshipType": "PARENT_CHILD",
    "orgType": "SUPER_ORG"
  },
  "connectedOrganizations": [
    {
      "id": 51957,
      "name": "connectedOrgChildTwo",
      "phone": "",
      "address": "JODHPUR GARDENS P/O LAKE GARDENS KOLKATA - 700045",
      "parentId": 51956,
      "locality": "",
      "pinCode": "700045",
      "timezoneLabel": "Asia/Kolkata",
      "timezoneOffset": "+05:30",
      "minSmsHour": 9,
      "maxSmsHour": 21,
      "logo": "",
      "webSite": "",
      "country": "India",
      "countryCode": "IN",
      "state": "West Bengal",
      "city": "KOLKATA",
      "active": true,
      
      "orgType": "CHILD_ORG"
    }
  ],
  "warnings": [
    
  ]
}
```

```
{
  "baseOrganization": {
    "id": 51956,
    "name": "connectedOrgChildOne",
    "phone": "",
    "address": "JODHPUR GARDENS P/O LAKE GARDENS KOLKATA - 700045",
    "parentId": -1,
    "locality": "",
    "pinCode": "700045",
    "timezoneLabel": "Asia/Kolkata",
    "timezoneOffset": "+05:30",
    "minSmsHour": 9,
    "maxSmsHour": 21,
    "logo": "",
    "webSite": "",
    "country": "India",
    "countryCode": "IN",
    "state": "West Bengal",
    "city": "KOLKATA",
    "active": true,
    "relationshipType": "PARENT_CHILD",
    "orgType": "SUPER_ORG"
  },
  "connectedOrganizations": [
    {
      "id": 51957,
      "name": "connectedOrgChildTwo",
      "phone": "",
      "address": "JODHPUR GARDENS P/O LAKE GARDENS KOLKATA - 700045",
      "parentId": 51956,
      "locality": "",
      "pinCode": "700045",
      "timezoneLabel": "Asia/Kolkata",
      "timezoneOffset": "+05:30",
      "minSmsHour": 9,
      "maxSmsHour": 21,
      "logo": "",
      "webSite": "",
      "country": "India",
      "countryCode": "IN",
      "state": "West Bengal",
      "city": "KOLKATA",
      "active": true,
      
      "orgType": "CHILD_ORG"
    }
  ],
  "warnings": [
    
  ]
}
```

`Try It!`