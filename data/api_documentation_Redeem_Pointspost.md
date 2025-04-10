# Redeem Pointspost

> ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

# API endpoint

/v1.1/points/redeem

`/v1.1/points/redeem`

> 📘NotesIf you are using validation code, make sure to use it within the validity period.You can check the validity set for the validation code in OTP code validity period field onInTouch>Settings>Organization Setup>OTPConfigurations page.

## 📘Notes

Notes

If you are using validation code, make sure to use it within the validity period.

- You can check the validity set for the validation code in OTP code validity period field onInTouch>Settings>Organization Setup>OTPConfigurations page.

# Body parameters

| Parameter | Description |

| --- | --- |

| redeem | An array containing objects representing individual redemption transactions |

| points_redeemed | The number of points that were redeemed in the transaction |

| transaction_number | Unique identifier for the transaction. |

| customer | An object containing information about the customer involved in the transaction |

| mobile* | The mobile phone number of the customer |

| notes | Notes or additional information about the transaction |

| validation_code | Validation code for the transaction. |

| custom_fields | Organization specific custom fields. Refer to the documentation onpoints redemption custom fieldsfor more infromation. |



[points redemption custom fields](/docs/redemption-custom-field)

# Query parameters

| Parameter | Description |

| --- | --- |

| user_group2_primary_user_id** | Unique user ID of the primary member of the group associated with the points to redeem. |

| user_group2_id** | Unique ID of the group associated with the points to redeem. |

| user_group2_external_id** | Unique external ID of the group associated with the points to redeem. |

| user_group2_primary_user_source | Source in which the primary user’s identifier is available.Value:FACEBOOK,WEB_ENGAGE,WECHAT,INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,MOBILE_APP. |

| user_group2_primary_user_accountId | Account ID of the source with multiple accounts such as WECHAT. |

| user_group2_primary_user_identifier_type | Identifier type used for the primary member.Value:mobile,email,cardnumber,cardExternalId,id. |

| user_group2_primary_user_identifier_value | Value of the specified identifier type. |

| skip_validation | Passtrueto skip customer validation to redeem points. |

| program_id | Unique ID of the program from which points need to be redeemed. Applicable for orgs with multi-loyalty program enabled. |

| validation_type | Validation type used to redeem points.Value:MISSED_CALL,SMS. |



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

`MISSED_CALL`

`SMS`

> ❗️**You must provide at least one of the parameters marked with ** for group level points redemption.

## ❗️**

**

You must provide at least one of the parameters marked with ** for group level points redemption.

# Response parameter

| Parameter | Description |

| --- | --- |

| response | The root object that contains all the details of the response |

| status | An object containing the status details of the response |

| success | A string indicating the success status of the response |

| code | The HTTP status code associated with the response |

| message | A general message providing additional information about the status of the response |

| responses | An object containing detailed response data |

| points | An object containing detailed information about the points involved in the transaction |

| mobile | The mobile phone number associated with the account involved in the transaction |

| email | The email address associated with the account involved in the transaction |

| external_id | An external identifier for the transaction |

| user_id | The user ID associated with the account involved in the transaction |

| redemption_id | A unique identifier for the redemption transaction |

| points_redeemed | The number of points that were redeemed in the transaction |

| redemption_purpose | The purpose of the redemption |

| redeemed_value | The value of the points that were redeemed |

| redeemed_local_value | The local value of the points that were redeemed |

| balance | The remaining balance of points in the account after the redemption |

| side_effects | An object containing information about any side effects of the redemption |

| effect | An array containing objects representing individual effects of the redemption |

| id | A unique identifier for an individual effect |

| case_value | A string indicating whether a certain case is true for the effect |

| num_points | The number of points involved in the effect |

| currency_value | The currency value associated with the effect |

| validation_code | A validation code associated with the effect |

| points_redemption_summary_id | A summary ID associated with the points redemption |

| redeemed_on_bill_number | The bill number associated with the redemption |

| redeemed_on_bill_id | The bill ID associated with the redemption |

| type | The type of effect |

| item_status | An object containing the status details of the item in the response |

| code | The HTTP status code associated with the item status (800 indicates points were redeemed) |

| message | A general message providing additional information about the status of the item in the response |



# Error code

| Error Code | Description |

| --- | --- |

| 3316 - group redemption action executed from non group redemption payload | Create a JIRA ticket to the Product Support team and disable the configuration ENABLE_GROUP_PROGRAMS_REDEMPTION. |



`Try It!`