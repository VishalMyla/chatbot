# Add Ticketpost

### Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| Customer identifier* | string | Pass any one identifier of the customer - mobile, email, external_id, or id (user_id). |

| status | enum | Status of the ticket. Accepts only values configured for the org. Sample values:Open,Close,InProgress. |

| priority | enum | Priority of the ticket. Value:low,medium,high. |

| department | string | Set the department for which the ticket needs to be assigned |

| ticket_code | string | Pass the ticket id. |

| reported_from | enum | Source from which the ticket is created. Values:EMAIL,INTOUCH,CALLCENTER,CLIENT,MICROSITE,SOCIAL. |

| type | enum | Type of the ticket. Value:STORE,Customer. |



`Open`

`Close`

`InProgress`

`low`

`medium`

`high`

`EMAIL`

`INTOUCH`

`CALLCENTER`

`CLIENT`

`MICROSITE`

`SOCIAL`

`STORE`

`Customer`

`Try It!`