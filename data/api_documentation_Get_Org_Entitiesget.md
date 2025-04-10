# Get Org Entitiesget

# Request parameter

| Parameter | Type | Description |

| --- | --- | --- |

| type* | Enum | Pass the entity type of which you want to retrieve the details. Value: STORE, STR_SERVER (store server), TILL, ZONE, CONCEPT. Pass example, pass STORE to retrieve store details. The maximum number of stores that can be fetched at once is 500. |

| scope | Enum | Pass STORE_CUSTOM_FIELDS or ZONE_CUSTOM_FIELDS to retrieve the list of store level or zone level custom fields.TILL_CUSTOM_FIELDS - To retrieve details of till specific custom fields. |

| id | long | Pass an entity id as in the org_entities table (in database) to get the details of that particular entity. |

| parent_identifier_type | enum | Parent entity type to fetch its child entities. Values: STORE_CODE, STORE_ID, STORE_EXTERNAL_ID, CONCEPT_CODE, CONCEPT_ID. |

| parent_identifier_value | string | Pass the respective identifier value. For example, parent_identifier_type=CONCEPT_CODE&parent_identifier_value=supermarket. |

| include_parent | boolean | Pass true to retrieve the details of the parent entity (parent zone or concept). This is applicable only for type zone or concept. |

| sub_entities_count | int | Limit the number of sub-entities to retrieve for each entity. |

| details | enum | Pass basic to see only basic information excluding currency, time-zone, and language information. |

| exclude_locale | boolean | Pass 1 to exclude time zone details (timezones), 0 to retrieve timezones > base_timezone details of an entity. Default value is 0. |

| start_id | long | Fetches entities that are above the offset number you pass. Offset is the position of the entity in the db record. The value is assigned based on the sequence of creation. For example, start_id=10 retrieves all the entities from record number 11. |

| limit | int | Limit the number of entities to retrieve. Default value is 500. |

| modified_since | date | Retrieves the entities that are modified on or after a specific date. Pass the date in YYYY-MM-DD format. |

| active_only | boolean | Pass true to retrieve the list of only active stores. |



# Response parameter

| Parameter | Data Type | Description |

| --- | --- | --- |

| response.pagination.limit | Integer | Maximum number of items returned per page. |

| response.pagination.offset | Integer | Offset for the starting record of the result. |

| response.pagination.total | Integer | Total number of entities found. |

| response.status.success | Boolean | Indicates if the request was successful. |

| response.status.code | Integer | Status code for the response. |

| response.status.message | String | Message describing the status of the request. |

| entity.id | String | Unique identifier for the store. |

| entity.is_active | Boolean | Indicates if the store is active (1 = Yes). |

| entity.code | String | Code representing the store. |

| entity.name | String | Name of the store. |

| entity.description | String | Description of the store. |

| entity.last_updated_by | String | Identifier of the user who last updated the entity. |

| entity.last_updated_on | String | Date and time when the entity was last updated. |

| entity.custom_fields.field | Object | Custom fields associated with the entity. Each field contains name and value. |

| entity.time_zone_id | String | Identifier for the store's timezone. |

| entity.currency_id | String | Identifier for the store's currency. |

| entity.language_id | String | Identifier for the store's language. |

| entity.timezones.base_timezone.label | String | Label for the base timezone of the store. |

| entity.timezones.base_timezone.offset | String | Offset for the base timezone of the store. |

| entity.currencies.base_currency.symbol | String | Symbol for the base currency of the store. |

| entity.currencies.base_currency.label | String | Label for the base currency of the store. |

| entity.language_code | String | Code representing the store's language. |

| entity.language_locale | String | Locale associated with the store's language. |

| entity.languages.base_language.lang | String | Base language of the store. |

| entity.languages.base_language.locale | String | Locale of the base language of the store. |

| entity.external_id | String | External identifier for the store. |

| entity.external_id_1 | String | Additional external identifier for the store. |

| entity.external_id_2 | String | Another additional external identifier for the store. |

| entity.mobile | String | Mobile number associated with the store. |

| entity.channel | String | Channel where the store operates (e.g., instore). |

| entity.land_line | String | Landline number associated with the store. |

| entity.email | String | Email address associated with the store. |

| entity.address | String | Address of the store. |

| entity.location.latitude | Double | Latitude coordinate of the store's location. |

| entity.location.longitude | Double | Longitude coordinate of the store's location. |

| entity.type | String | Type of the entity (e.g., STORE). |



`Try It!`