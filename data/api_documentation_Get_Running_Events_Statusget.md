# Get Running Events Statusget

# Query parameter

| Parameters | Description |

| --- | --- |

| eventId | Unique id of the event that is generated when you push data to Webhook. |



# Response parameter

| Parameter | Description |

| --- | --- |

| id | Unique identifier for the response. |

| orgId | Organization ID associated with the response. |

| stateList | List detailing the states of the event processing. |

| stateList.message | Message associated with the state of the event processing. |

| stateList.date | Date and time when the state occurred. |

| stateList.status | Status detailing the state of the event processing. |

| eventName | Name of the event in the response. |

| warnings | List of warnings associated with the response. |



`Try It!`