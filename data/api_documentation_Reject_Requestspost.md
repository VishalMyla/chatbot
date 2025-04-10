# Reject Requestspost

## Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| id* | long | Reference id of the request that you want to reject. |

| type* | enum | Type of request. Value:CHANGE_IDENTIFIER,GOODWILL,TRANSACTION_UPDATE. |

| base_type* | enum | Sub-type of the request. Value: Iftype=CHANGE_IDENTIFIER, base_type could beMOBILE,EMAIL,EXTERNAL_ID,MERGE, orREALLOCATION. |



`CHANGE_IDENTIFIER`

`GOODWILL`

`TRANSACTION_UPDATE`

`type=CHANGE_IDENTIFIER`

`MOBILE`

`EMAIL`

`EXTERNAL_ID`

`MERGE`

`REALLOCATION`

Iftype=GOODWILL, base_type will bePOINTS, orCOUPONS.

`type=GOODWILL`

`POINTS`

`COUPONS`

`Try It!`