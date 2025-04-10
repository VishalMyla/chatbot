# Add Card Number to a Card Seriespost

# Request URL

{host}/v2/card

`{host}/v2/card`

# Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| seriesId | int | Card Series ID from which you want to generate card. |

| cardNumber | string | Unique number of the card as per the card series configuration. |

| cardExternalId | string | External reference ID of the card. |

| statusLabel | string | Current user defined status of the card. Check your user defined values for the system values (not issued, active, inactive, deleted, expired). |

| customFields | obj | Card level custom field details in key:value pair. |

| extendedFields | obj | Card level extended field details in key:value pair. |



`Try It!`