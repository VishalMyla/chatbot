# Redeem Couponpost

This API allows you to redeem coupons issued to the loyalty customer. For all redeem coupon APIs event notification is generated.

| Parameter | Type | Description |

| --- | --- | --- |

| customer | obj | Pass any registered identifier type.Supported identifiers:mobile,email,id,external_id,card_number,card_external_id |

| id | long | Coupon id that needs to be redeemed. |

| code | string | Coupon code that need to be redeemed. |

| validation_code | string | Validation code is required for the orgs that use validation based redemption. |

| number | string | Transaction number against which the coupon needs to be redeemed. |

| amount | double | Transaction amount against which the coupon is redeemed. |

| custom_fields | obj | Coupon redemption level custom fields. |

| name | string | Name of the custom field. |

| value | string | Custom field value. |



`mobile`

`email`

`id`

`external_id`

`card_number`

`card_external_id`

`Try It!`