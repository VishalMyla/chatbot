# Search eventsget

This API provides advanced search functionality for behavioural events, allowing you to filter, sort,  and paginate through events.

> ❗️AttentionThe API retrieves event details from January 2024 onwards and does not fetch details of events that occurred before this date.

## ❗️Attention

Attention

The API retrieves event details from January 2024 onwards and does not fetch details of events that occurred before this date.

# Features

1. Filters:Filter events based on various criteria:Date rangeEvent name.Events of a customer or groups. You can combine this with other search criteria. For example, events of a customer in a particular date range.Events performed by a particular member in a user group eventEvent ID. The event ID is an internally generated ID during the creation of the event.Behavioural event attributes.Duplicate events.

Filters:

- Filter events based on various criteria:Date rangeEvent name.Events of a customer or groups. You can combine this with other search criteria. For example, events of a customer in a particular date range.Events performed by a particular member in a user group eventEvent ID. The event ID is an internally generated ID during the creation of the event.Behavioural event attributes.Duplicate events.

- Date range

- Event name.

- Events of a customer or groups. You can combine this with other search criteria. For example, events of a customer in a particular date range.

- Events performed by a particular member in a user group event

- Event ID. The event ID is an internally generated ID during the creation of the event.

- Behavioural event attributes.

- Duplicate events.

10. Sorting:Sort events based on event date-time in ascending or descending order.

Sorting:Sort events based on event date-time in ascending or descending order.

11. Pagination:Limit the number of page results and setting offset (number of pages to skip from the beginning)

Pagination:Limit the number of page results and setting offset (number of pages to skip from the beginning)

12. This API provides more flexibility and search options than theGET Customer event API.

This API provides more flexibility and search options than theGET Customer event API.

# Use cases

- You can use different combinations to search for events. For example, suppose you want to find an event named "Offerscan" performed by a particular user. In that case, you can filter the event search using the eventName parameter and by providing the identifier type and value of the customer.

You can use different combinations to search for events. For example, suppose you want to find an event named "Offerscan" performed by a particular user. In that case, you can filter the event search using the eventName parameter and by providing the identifier type and value of the customer.

- Similarly, to retrieve details of a particular event between certain dates, you can definefromDate,tillDate,eventNameand filter the events.`https://eu.api.capillarytech.com/v2/events/search?fromDate=2024-03-19T15:31:28&tillDate=2024-04-19T16:31:28

Similarly, to retrieve details of a particular event between certain dates, you can definefromDate,tillDate,eventNameand filter the events.`https://eu.api.capillarytech.com/v2/events/search?fromDate=2024-03-19T15:31:28&tillDate=2024-04-19T16:31:28

`fromDate`

`tillDate`

`eventName`

```
https://eu.api.capillarytech.com/v2/events/search?fromDate=2024-03-19T15:31:28&tillDate=2024-04-19T16:31:28
```

- Searching for an event using behavioural event attribute - For example, as a hotel chain brand, if you want to search for reservation events of a particular hotel, you can search by defining the attribute name and value. If the behavioural event attribute name ishotel_nameand the hotel name isPalaceABC, you can search using the attribute namehotel_nameand the valuePalaceABC.https://eu.api.capillarytech.com/v2/events/search?fromDate=2024-03-19T15:31:28&tillDate=2024-04-19T16:31:28&hotel_name=PalaceABC

Searching for an event using behavioural event attribute - For example, as a hotel chain brand, if you want to search for reservation events of a particular hotel, you can search by defining the attribute name and value. If the behavioural event attribute name ishotel_nameand the hotel name isPalaceABC, you can search using the attribute namehotel_nameand the valuePalaceABC.https://eu.api.capillarytech.com/v2/events/search?fromDate=2024-03-19T15:31:28&tillDate=2024-04-19T16:31:28&hotel_name=PalaceABC

`hotel_name`

`PalaceABC`

`hotel_name`

`PalaceABC`

```
https://eu.api.capillarytech.com/v2/events/search?fromDate=2024-03-19T15:31:28&tillDate=2024-04-19T16:31:28&hotel_name=PalaceABC
```

- Searching for duplicate events of a userhttps://eu.api.capillarytech.com/v2/events/search?userIdentifierType=userId&userIdentifierValue=555734097&isDuplicate=true

Searching for duplicate events of a user

https://eu.api.capillarytech.com/v2/events/search?userIdentifierType=userId&userIdentifierValue=555734097&isDuplicate=true

```
https://eu.api.capillarytech.com/v2/events/search?userIdentifierType=userId&userIdentifierValue=555734097&isDuplicate=true
```

- Searching for an event with details of outcomes triggered by the occurrence of a specific eventhttps://eu.api.capillarytech.com/v2/events/search?userIdentifierType=mobile&userIdentifierValue=918105886351&includeSideEffects=true

Searching for an event with details of outcomes triggered by the occurrence of a specific event

https://eu.api.capillarytech.com/v2/events/search?userIdentifierType=mobile&userIdentifierValue=918105886351&includeSideEffects=true

```
https://eu.api.capillarytech.com/v2/events/search?userIdentifierType=mobile&userIdentifierValue=918105886351&includeSideEffects=true
```

- Searching for an event performed by a member in a group eventhttps://eu.api.capillarytech.com/v2/events/search?userIdentifierType=userId&userIdentifierValue=176875087&userGroupIdentifierType=groupExternalId&userGroupIdentifierValue=bukl123

Searching for an event performed by a member in a group eventhttps://eu.api.capillarytech.com/v2/events/search?userIdentifierType=userId&userIdentifierValue=176875087&userGroupIdentifierType=groupExternalId&userGroupIdentifierValue=bukl123

```
https://eu.api.capillarytech.com/v2/events/search?userIdentifierType=userId&userIdentifierValue=176875087&userGroupIdentifierType=groupExternalId&userGroupIdentifierValue=bukl123
```

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication; Basic or OAuth authentication details

- Access group resource - Read access to Customer access group resource

# Resource information

|  |  |

| --- | --- |

| URI | v2/events/search |

| HTTP method | GET |

| Pagination supported? | Yes |

| Rate limit | Refer to the Rate limits documentation |

| Batch support | - |

|  |  |



[Refer to the Rate limits documentation](/reference/rate-limits)

# Request query parameters

| Parameter | Type | Description |

| --- | --- | --- |

| eventId | string | Primary ID of the event. This ID is internally generated during the creation of the event. Refer toCreate Eventto know about event creation. |

| eventName | string | Name of the event. |

| userIdentifierType | Enum | Type of user identifier: Supported values: mobile, email, and userId. |

| userIdentifierValue | string | Value of the user identifier. |

| userIdentifierSource | string | Source to search user profile. The default value is INSTORE. |

| userIdentifierAccountId | string | Account ID of the user profile source. Not required for INSTORE profiles. |

| userGroupIdentifierType | Enum | Type of user group identifier. Supported values: groupId, groupExternalId, mobile, email, and userId. |

| userGroupIdentifierValue | string | Value of the user group identifier. |

| userGroupIdentifierSource | string | Source to search user profile. The default value is INSTORE. Required if searching by mobile or email. |

| userGroupIdentifierAccountId | string | Account ID of the user profile source. Not required for INSTORE profiles. Required for mobile or email search. |

| fromDate | string | Start date in ISO format (e.g., 2024-03-19T15:31:28). |

| tillDate | string | End date in ISO Format (e.g., 2024-03-19T16:31:28). |

| limit | integer | Number of records to fetch. The default value is 10. |

| offset | integer | Number of records to skip from the beginning. The default value is 0. |

| sortOrder | string | Sorts by event date-time in ascending or descending order. The default value is desc. |

| includeSideEffects | boolean | Indicates whether to include loyalty side effects. The Default value is false. This parameter provides details of the outcomes triggered by the occurrence of a specific event. |

| isDuplicate | boolean | Indicates whether to includeduplicate events. TheisDuplicatefield indicates whether an event is considered a duplicate or an original event. If true, it indicates that the event is a duplicate, meaning it's a repetition or a copy of a previously recorded event. Acceptable values - true or false. |



[Create Event](/reference/create-event-custom)

[duplicate events](/docs/creat-behavioral-events#enabling-uniqueness-check)

`isDuplicate`

# Response parameters

| Parameter | Description |

| --- | --- |

| orgId | The organization ID associated with the event. |

| userId | The user identifier of the customer. |

| date | The date and time when the event was processed in epoch time format. |

| eventName | The name of the event. |

| eventId | The unique identifier for the event. This is internally generated during creation of the event. |

| source | Customer registration source profile (e.g., INSTORE). |

| tillCode | The code associated with the till where the event occurred. |

| displayName | The display name of the event. |

| additonalAttributes | Additional attributes related to the event, such as review content, account ID, and event metadata.- TheisDuplicatefield indicates whether an event is considered a duplicate or an original event. If true, it indicates that the event is a duplicate, meaning it's a repetition or a copy of a previously recorded event.- TheeventDateTimeis astandard attributein the behavioural event system. This field captures the date and time when the event is processed. If you define a value for this parameter while sending the event, it displays that specific date and time in epoch format. Otherwise, it displays the event processing time, sharing the same value as thedateparameter above. |

| clickEventSideEffects | Additional actions or consequences triggered by events, such as awarding points or other actions. |

| - requestId | The unique identifier for the request associated with the event. |

| psiAttributes | Includes attributes that are marked as potentially sensitive data. Refer to the PSI data documentation for moreinformation on classifying PSI data |

| - sideEffects | An array containing details of any side effects triggered by the event. |



`isDuplicate`

`eventDateTime`

[standard attribute](/docs/creat-behavioral-events#standard-attributes)

`date`

[information on classifying PSI data](/docs/classify-potentially-sensitive-information-psi)

`Try It!`