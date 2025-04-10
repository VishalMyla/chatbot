# Request Goodwill points (Group)post

This API will generate a request to the admin for the brand, to approve the request. Use the approve request API, to approve the request. Refer the APIhere

### Request Body Parameters (for group goodwill requests)

| Parameter | Datatype | Description |

| --- | --- | --- |

| type | enum | Type of request. Value:GOODWILL. |

| base_type | enum | Sub-type of the request. Value:POINTS. |

| earning_entity_type | enum | USERGROUP2 |

| identifier_value | string | Group id |



`GOODWILL`

`POINTS.`

### Response Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| id | long | Unique ID generated for the goodwill request. |

| warnings | string | Warnings if any. |



`Try It!`