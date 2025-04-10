# Retrieve user group members list with cards & status detailsget

The API also supports filtering options based on dates and pagination.

# API endpoint

{host}/V2/userGroup2/members?{query parameters}

```
{host}/V2/userGroup2/members?{query parameters}
```

Example:https://crm-nightly-new.cc.capillarytech.com/v2/userGroup2/members?identifierName=id&sortOrder=DESC&limit=20&includeCardDetails=true&includeStatusDetails=true&identifierValue=93257&paginationDetails=true&fromDate=2010-01-01 00:00:00&toDate=2023-01-31 23:59:59

```
https://crm-nightly-new.cc.capillarytech.com/v2/userGroup2/members?identifierName=id&sortOrder=DESC&limit=20&includeCardDetails=true&includeStatusDetails=true&identifierValue=93257&paginationDetails=true&fromDate=2010-01-01 00:00:00&toDate=2023-01-31 23:59:59
```

# Query parameters

| Parameter | Type | Description |

| --- | --- | --- |

| identifierName | String | Specifies the name of the identifier used for member retrieval. Supported value - id (identifier of the group) |

| identifierValue | String | Specifies the identifier's value for member retrieval (e.g., "93257"). |

| sortOrder | Enum | Specifies the sorting order for the retrieved members (e.g., "DESC" for descending order). |

| limit | Integer | Sets the maximum number of members to be retrieved (e.g., "20" for a limit of 20 members). |

| includeCardDetails | Boolean | Determines whether card details of owned cards should be included (true or false). |

| includeStatusDetails | Boolean | Determines whether customer status details should be included (true or false). |

| paginationDetails | Boolean | Specifies whether pagination details should be included (true or false). |

| fromDate | DateTime | Sets the starting date and time for the retrieval period (e.g., "2010-01-01 00:00:00"). |

| toDate | DateTime | Sets the ending date and time for the retrieval period (e.g., "2023-01-31 23:59:59"). |

| sortBy | String | Specifies the field for sorting the retrieved members (e.g., "IS_PRIMARY" - This sorting behaviour ensures that members with the "is_primary" attribute are prioritized and presented as the initial entries in the sorted result set.). |

| offset | Integer | Specifies the offset for pagination, indicating the starting point for retrieved results. |



# Response parameters

| Parameter | Description |

| --- | --- |

| pagination.limit | Specifies the maximum number of records to be displayed per page (e.g., 20). |

| pagination.offset | Specifies the starting position of records for the current page (e.g., 0). |

| pagination.sortBy | Indicates the field by which the results are sorted (e.g., "IS_PRIMARY"). |

| pagination.sortOrder | Specifies the sorting order, either in ascending ("ASC") or descending ("DESC") order. |

| pagination.total | Represents the total count of available records (e.g., 5). |

| data | Contains an array of member objects, each with detailed information about a member's attributes and associated data. |

| data.fleetUserId | Unique identifier for the fleet user. |

| data.firstName | First name of the member. |

| data.lastName | Last name of the member. |

| data.joinedOn | Date when the member joined. |

| data.permissions | Permissions assigned to the member. |

| data.pointsContributed | The number of points contributed by the member. |

| data.mobile | Mobile number of the member. |

| data.role | Role of the member. |

| data.roleCode | Role code associated with the member's role. |

| data.identifiers | Array containing identifier objects with type and value attributes. |

| data.cards | Array of card objects owned by the member. |

| data.inActive | Indicates whether the member is inactive (true/false). |

| data.primaryMember | Indicates whether the member is a primary member (true/false). |

| data.cards.cardId | Unique identifier for the card. |

| data.cards.issuedDate | Date when the card was issued. |

| data.cards.expiryDate | Date of card expiry. |

| data.cards.cardNumber | Card number associated with the card. |

| data.cards.seriesName | Series name of the card. |



`Try It!`