# Add Store in bulkpost

The API allows bulk store creation with Unicode character support in thecodeandnamefields. You can also use the API to assign values to pre-existingcustom fields.Note: You can create a single store by passing a single array.

`code`

`name`

# API endpoint example

https://eu.api.capillarytech.com/v2/orgEntity/store/bulk

```
https://eu.api.capillarytech.com/v2/orgEntity/store/bulk
```

# Prerequisites

- Authentication: Basic or OAuth authentication

- Access group resource: Read and write access to theStoreresource

`Store`

- Admin of the organisation

# Resource information

|  |  |

| --- | --- |

| URI | /v2/orgEntity/store/bulk |

| HTTP Method | POST |

| Pagination | NA |

| Batch support | NA |

| Rate limit information | NA |



# Request body parameters

| Parameter (Parameters marked with * are mandatory) | Datatype | Description |

| --- | --- | --- |

| code* | String | Unique store code used for identification in the Capillary system.Note: Spaces between characters are not allowed. The maximum number of characters allowed is 50. |

| description | String | Description of the store.Note: The maximum number of characters allowed is 250. |

| name* | String | Name of the store.Note: The maximum number of characters allowed is 100. |

| type | String | Type of theentityyou are creating. Here, the entity isSTORE. |

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
[
{
    "code": "MaiHàGiangCutomField",
    "description": "MaiHàGiangCutomField",
    "name": "MaiHàGiangCutomField",
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
    "store_custom_field":"store test"
  }
}]
```

```
[
{
    "code": "MaiHàGiangCutomField",
    "description": "MaiHàGiangCutomField",
    "name": "MaiHàGiangCutomField",
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
    "store_custom_field":"store test"
  }
}]
```

[[email protected]](/cdn-cgi/l/email-protection)

# Response parameters

| Parameter | Description |

| --- | --- |

| response | List of responses for each entity. |

| - entityId | Unique identifier for the store created. |

| - result | Array containing the details of the store. |

| -- id | Unique identifier for the store created. |

| -- code | A unique store code used for identification in Capillary system. |

| -- description | Description of the store. |

| -- name | Name of the store. |

| -- type | Type of theentityyou are creating. |

| -- adminType | Type of admin user for the store.Values:General,Admin |

| -- isActive | Indicates whether the store is active. |

| -- timeZoneId | Unique ID representing the timezone of the store's geographical location. |

| -- currencyId | Unique ID representing the base currency of the store's location, which corresponds to the currency of the country where the store operates.Example: 230 - Singapore Dollar, 211 - Australian Dollars |

| -- languageId | Unique ID representing the language used at the store.Example: 393 |

| -- parentZoneId | Unique ID that identifies the zone where the parent store is located. |

| -- parentConceptId | Unique ID representing the logical group (Concept) of the store. |

| -- externalIds | List of external identifiers associated with the store. |

| -- email | Store's email address. |

| -- mobile | Store's mobile number. |

| -- landline | Store's landline number. |

| -- latitude | Latitude coordinate of the store. |

| -- longitude | Longitude coordinates of the store. |

| -- address | Physical address of the store. |

| -- cityId | Unique ID for the city where the store is located. |

| -- areaId | Unique ID for the area where the store is located. |

| -- customFields | Array containing custom fields updated for the store. |

| --- store_custom_field | Custom field value for the store. |

| errors | List of errors related to the response (if any). |

| warnings | List of warnings related to the response (if any). |

| totalCount | Total number of successful records processed. |

| failureCount | Total number of records that failed processing. |



[entity](/docs/data-fields)

`General`

`Admin`

```
{
    "response": [
        {
            "entityId": 50757475,
            "result": {
                "id": 50757475,
                "code": "MaiHàGiangCutomField",
                "description": "MaiHàGiangCutomField",
                "name": "MaiHàGiangCutomField",
                "type": "STORE",
                "adminType": "GENERAL",
                "isActive": true,
                "timeZoneId": -1,
                "currencyId": -1,
                "languageId": -1,
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
                "customFields": {
                    "store_custom_field": "store test"
                }
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```

```
{
    "response": [
        {
            "entityId": 50757475,
            "result": {
                "id": 50757475,
                "code": "MaiHàGiangCutomField",
                "description": "MaiHàGiangCutomField",
                "name": "MaiHàGiangCutomField",
                "type": "STORE",
                "adminType": "GENERAL",
                "isActive": true,
                "timeZoneId": -1,
                "currencyId": -1,
                "languageId": -1,
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
                "customFields": {
                    "store_custom_field": "store test"
                }
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```

[[email protected]](/cdn-cgi/l/email-protection)

# API-specific error codes

| Error code | Description |

| --- | --- |

| 1220 | Store code exists |

| 1206 | Store name exists |

| 1221 | External ID missing. A minimum of 1 external ID is required |



`Try It!`