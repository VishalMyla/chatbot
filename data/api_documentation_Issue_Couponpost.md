# Issue Couponpost

This API allows you to issue a specific coupon series to a customer.

## Request Body Parameter

| Parameter | Datatype | Description |

| --- | --- | --- |

| customer* | obj | Any identifier of the customer to whom you want to issue coupon.Supported identifiers:mobile,email,external_id,user_id,card_number,card_external_id. |

| series_id | int | Coupon series id from which the coupon needs to be issued. |



`mobile`

`email`

`external_id`

`user_id`

`card_number`

`card_external_id`

`Try It!`