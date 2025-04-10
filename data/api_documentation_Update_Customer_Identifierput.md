# Update Customer Identifierput

### Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| identifier* | enum | Pass the identifier name that you want to update. Value:mobile,email,external_id. |

| old_value* | string | Provide the existing value the identifier that you want to update.Note:For mobile numbers, add the mobile number with the country code. |

| new_value* | string | Provide the new value of the identifier. |



`mobile`

`email`

`external_id`

### Response Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| identifier* | enum | Name of the identifier. |

| old_value* | string | Earlier value of the identifier. |

| new_value* | string | New identifier value. |

| updated | boolean | Returnstrueif the the identifier is updated successfully. |



`true`

`Try It!`