# Add Storepost

The API allows the organisation admin to add a store to an organisation. It supportscustom fieldsused to store additional information related to the store.

# API endpoint example

https://eu.api.capillarytech.com/v2/orgEntity/store

```
https://eu.api.capillarytech.com/v2/orgEntity/store
```

# Prerequisites

- Authentication: Basic or OAuth authentication

- Access group resource: Read and write access to theStoreresource

`Store`

- Admin of the organisation

# Resource information

|  |  |

| --- | --- |

| URI | v2/orgEntity/store |

| HTTP Method | POST |

| Pagination | NA |

| Batch support | NA |

| Rate limit information | NA |



# Request body parameter

| Parameter (Parameters marked with * are mandatory) | Datatype | Description |

| --- | --- | --- |

| code* | String | Unique store code used for identification in the Capillary system. The string starts with a lowercase letter and includes lowercase letters, numbers, periods, underscores, and hyphens.Note: Spaces between characters are not allowed. The maximum number of characters allowed is 50 and the minimum characters allowed is 1.. |

| description | String | Description of the store.Note: The maximum number of characters allowed is 250. |

| name* | String | Name of the store. The string includes uppercase and lowercase letters, numbers, underscores, and spaces. Special characters such as periods, hyphens, or other symbols are not allowed.Note: The maximum number of characters allowed is 100. |

| type | Enum | Type of theentityyou are creating. Here, the entity isSTORE. |

| adminType | Enum | Type of admin user for the store.Values allowed:General,Admin |

| isActive | Boolean | Indicates whether the store is active. |

| timeZoneId | Integer | Unique ID representing the timezone of the store's geographical location.Example: 191 - Represents Asia/Kolkata time zone. |

| currencyId | Integer | Unique ID representing the base currency of the store's location, corresponding to the currency of the country where the store operates.Example: 230 - Singapore Dollar, 211 - Australian Dollars |

| languageId | Integer | Unique ID representing the language used at the store.Example: 393 |

| parentZoneId | Integer | Unique ID that identifies the zone where the parent store is located.  Use theget org entitiesAPI to fetch Zones and map those entities to parent fields. |

| parentConceptId | Integer | Unique ID representing the logical group (Concept) of the store. Use theget org entitiesAPI to fetch Concepts, and map those entities to parent fields. |

| externalIds* | Array | List of external identifiers associated with the store. |

| email | String | Store's email address. |

| mobile | String | Store's mobile number. |

| landline | String | Store's landline number. |

| latitude | String | Latitude coordinate of the store. |

| longitude | String | Longitude coordinate of the store. |

| address | String | Physical address of the store. |

| cityId | Integer | Unique ID for the city where the store is located. |

| areaId | Integer | Unique ID for the area where the store is located. |

| customFields | Array | Array containing thecustom fieldsand it's value. These custom fields store special or custom information related to the store. |



[entity](/docs/data-fields)

`STORE`

`General`

`Admin`

[get org entities](/reference/get-org-entities)

[get org entities](/reference/get-org-entities)

[custom fields](/docs/data-fields#custom-fields)

```
{
    "code": "singlestoretestforcreation",
    "description": "SingleStoreTest",
    "name": "singlestoretestforcreation",
    "type": "STORE",
    "adminType": "GENERAL",
    "isActive": true,
    "timeZoneId": "",
    "currencyId": "",
    "languageId": "",
    "parentZoneId": 50712290,
    "parentConceptId": 50712302,
    "externalIds": [
        "Ex-93991234",
      "Ex-93991237",
      "Ex-93991235"
    ],
    "email": "[email protected]",
    "mobile": "917262178832",
    "landline": "",
    "latitude": "",
    "longitude": "",
    "address": "",
    "cityId": 0,
    "areaId": 0,
  "customFields":{
    "store_custom_field":"Single store test"
  }
}
```

```
{
    "code": "singlestoretestforcreation",
    "description": "SingleStoreTest",
    "name": "singlestoretestforcreation",
    "type": "STORE",
    "adminType": "GENERAL",
    "isActive": true,
    "timeZoneId": "",
    "currencyId": "",
    "languageId": "",
    "parentZoneId": 50712290,
    "parentConceptId": 50712302,
    "externalIds": [
        "Ex-93991234",
      "Ex-93991237",
      "Ex-93991235"
    ],
    "email": "[email protected]",
    "mobile": "917262178832",
    "landline": "",
    "latitude": "",
    "longitude": "",
    "address": "",
    "cityId": 0,
    "areaId": 0,
  "customFields":{
    "store_custom_field":"Single store test"
  }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

# Response parameter

| Parameter | Description |

| --- | --- |

| createdId | Store ID generated for the store. |

| warnings | List of any warnings associated with the request. |



```
{
    "createdId": 50770954,
    "warnings": []
}
```

```
{
    "createdId": 50770954,
    "warnings": []
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 1220 | Store code exists |

| 1206 | Store name exists |



`Try It!`