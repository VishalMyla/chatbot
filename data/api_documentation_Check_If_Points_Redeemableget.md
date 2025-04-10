# Check If Points Redeemableget

Allows redeeming active points of customers according to the redemption criteria set for the organization (Loyalty Program). For example, you could set redemption criteria as allow redemption only in multiples of 10 and a maximum of 200 points per time.

This API lets you verify whether a specific number of points can be redeemed by a customer. With this API, you can now issue validation code to the customer automatically upon successful validation. This will reduce an additional step of calling/points/validationcodeAPI to issue validation code.

`/points/validationcode`

> 📘If there is any problem in issuing validation code, Points Redeemable but OTP Generation failed error will be displayed (876) * if points validation itself fails, then the relevant error message will be displayed

## 📘

If there is any problem in issuing validation code, Points Redeemable but OTP Generation failed error will be displayed (876) * if points validation itself fails, then the relevant error message will be displayed

## Request Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| mobile/email/external_id/card_number/card_external_id | Enum | Pass any of the registered identifier type. |

| program_id | long | Unique ID of the loyalty program from which points need to redeem. |

| group_redemption | boolean | Passtruefor group redemption - points earned in one program need to redeem in a different program of the org. |

| points | int | Number of points to redeem. |

| issue_otp | boolean | Passtrueto issue OTP if the validation is successful. |

| validation_code | string | OTP issued to the customer’s mobile number. |

| skip_validation | boolean | Passtrueif you want to skip validation. |

| validation_type | Enum | Preferred mode of validation.Value:MISSED_CALL,SMS,INVALID.Use invalid if you want to skip_validation. |

| user_group2_primary_user_id | long | Unique user ID of the primary member of the group associated with the points to redeem. |

| user_group2_id | int | Unique ID of the group associated with the points to redeem. |

| user_group2_primary_user_source | Enum | Source in which the primary user’s identifier is available.Value:FACEBOOK,WEB_ENGAGE,WECHAT,INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,MOBILE_APP. |

| user_group2_primary_user_accountId | string | Account ID of the source with multiple accounts such as WECHAT. |

| user_group2_primary_user_identifier_type | Enum | Identifier type used for the primary member.Value:mobile,email,cardnumber,cardExternalId,id. |

| user_group2_primary_user_identifier_value | string | Value of the specified identifier type. |

| user_group2_external_id | string | Unique external ID of the group associated with the points to redeem. |

| use_default_user_group2 | boolean | Passtrueto associate the default group with the points to redeem. |

| currency_input | boolean |  |



`true`

`true`

`true`

`MISSED_CALL`

`SMS`

`INVALID`

`FACEBOOK`

`WEB_ENGAGE`

`WECHAT`

`INSTORE`

`MARTJACK`

`TMALL`

`TAOBAO`

`JD`

`ECOMMERCE`

`WEBSITE`

`LINE`

`MOBILE_APP`

`mobile`

`email`

`cardnumber`

`cardExternalId`

`id`

`true`

`Try It!`