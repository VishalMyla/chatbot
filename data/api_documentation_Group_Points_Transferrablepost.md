# Group Points Transferrablepost

## Request Body Parameters

| Parameter | DataType | Description |

| --- | --- | --- |

| pointsTobeTransferred | int | Number of points to be transferred. |

| notes | string | Notes to be added to the transfer activity. |

| programId | int | Loyalty program ID from which points has to be transferred. Applicable for multi-program orgs. Considers the default program ID if not passed. |

| transferredBy | obj | Details of the user who is transferring points. |

| toEntity | obj | Details of the destination account (customer or group) - to which the points need to be transferred. |

| fromEntity | obj | Details of the source account (group or customer) from which the points need to be transferred. |



### transferredBy,toEntityandfromEntityObject Parameters

`transferredBy`

`toEntity`

`fromEntity`

| Parameter | DataType | Description |

| --- | --- | --- |

| type | Enum | Type of the entry.Value:CUSTOMER,USERGROUP2 |

| identifierType | Enum | Identifier type to identify customer or group.Supported values for customer: mobile,email,externalId,cardnumber,wechat,martjackId,fbId.Supported values for group:id,externalId,primaryUserId,primaryUserCardnumber,primaryUserMobile,primaryUserEmail. |

| identifierValue | string | Value of the specifier identifierType. |

| Source | Enum | Source in which the customer account is available.Value:FACEBOOK,WEB_ENGAGE,WECHAT,INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,MOBILE_APP.Required for customer entity. |

| accountId | string | Account Ids for sources with multiple account IDs. |



`CUSTOMER`

`USERGROUP2`

`email`

`externalId`

`cardnumber`

`wechat`

`martjackId`

`fbId`

`id`

`externalId`

`primaryUserId`

`primaryUserCardnumber`

`primaryUserMobile`

`primaryUserEmail`

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

`Try It!`