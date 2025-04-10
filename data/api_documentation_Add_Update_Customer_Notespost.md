# Add/Update Customer Notespost

## Request Body Parameters (Add)

| Parameter | Datatype | Description |

| --- | --- | --- |

| Customer identifier* | string | Pass any of the unique identifiers of the customer for whom you want to add notes (mobile no/email id/external id/user_id) |

| date | date | Date that you associate to the notes. By default, current date will be considered. |

| description* | string | Details or message of the note in a plain text format. The maximum number of characters supported is 255. |



### Request Body Parameters (Update)

| Parameter | Datatype | Description |

| --- | --- | --- |

| mobile/email/external_id/user_id** | enum | Unique identifier of the customer for which you want to update customer notes (mobile no/email id/external id/user_id). |

| description* | string | New notes that you want to update with (plain text). |

| id* | int | Unique id of the customer note that you want to update. |



`Try It!`