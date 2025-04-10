# Update Subscription Detailspost

You can also use this API endpoint to update subscription details:/lookup/subscriptions?{queryParams}

`/lookup/subscriptions?{queryParams}`

This API allows updating (opt-in or opt-out) subscription status of transactional and bulk messaging services for a customer.

- Transaction Messages:These are personalized messages sent to a customer instantly. For example, a new transaction details, points or coupon redeemed, send birthday or anniversary wishes and so on.

- Bulk Messages:These are promotion messages sent to a list of customers. For example, through campaigns.

### Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| userId* | long | Unique ID of the customer whose subscription details you want to modify |

| channel | enum | Pass the communication channel that you want to update. Values:mobile,email,wechat,whatsapp,ios,android, andline. |

| priority | enum | Type of service for which you want to modify the subscription details.TRANSfor personalized messages andBULKfor campaign or bulk messages |

| type | enum | OPTINto subscribe andOPTOUTto unsubscribe. |

| orgUnitId | long | Concept ID or org unit ID to update subscription details of for an org unit. |

| sourceName | enum | Source in which the identifier is registered. Values:INSTORE,FACEBOOK,WEB_ENGAGE,WECHAT,INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE,MOBILE_APP. |



`mobile`

`email`

`wechat`

`whatsapp`

`ios`

`android`

`line`

`TRANS`

`BULK`

`OPTIN`

`OPTOUT`

`INSTORE`

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

Note:An update to the subscription status of a customer doesn’t generate or trigger event notifications.

`Try It!`