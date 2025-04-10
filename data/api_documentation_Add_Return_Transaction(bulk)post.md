# Add/Return Transaction(bulk)post

> 👍NotesTo avoid any confusion related to timezone conversion, you can raise a ticket and enable the CONF_ORG_DISABLE_MACHINE_TIME_CONV configuration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. For more information, refer to the documentationhere.You cannot register a customer with this API. Hence, you need to pass only registered identifiers for regular transactions.You can enable the configuration CONF_ALLOW_TRANSACTION_RETURN_AFTER_GROUP_TRANSITION  to allow returns for former group members . When this config is active and when a return transaction is performed for a user who has left the group, the points allocated to the group as part of the original transaction are also reverted. To enable, raise a ticket to the Product Support Team.CONFIG_SKIP_SECONDARY_ID_ON_PRIMARY_MISMATCH is enabled: If the primary identifier is different but any of the secondary identifiers exist, a new customer is registered with the primary identifier ignoring the secondary identifier. The config is available on the Registration Page of InTouch Profile > Organization Settings > Miscellaneous.

## 👍Notes

Notes

- To avoid any confusion related to timezone conversion, you can raise a ticket and enable the CONF_ORG_DISABLE_MACHINE_TIME_CONV configuration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. For more information, refer to the documentationhere.

- You cannot register a customer with this API. Hence, you need to pass only registered identifiers for regular transactions.

- You can enable the configuration CONF_ALLOW_TRANSACTION_RETURN_AFTER_GROUP_TRANSITION  to allow returns for former group members . When this config is active and when a return transaction is performed for a user who has left the group, the points allocated to the group as part of the original transaction are also reverted. To enable, raise a ticket to the Product Support Team.

- CONFIG_SKIP_SECONDARY_ID_ON_PRIMARY_MISMATCH is enabled: If the primary identifier is different but any of the secondary identifiers exist, a new customer is registered with the primary identifier ignoring the secondary identifier. The config is available on the Registration Page of InTouch Profile > Organization Settings > Miscellaneous.

#### Rate Limit

| Region | Default Limit (RPM) |

| --- | --- |

| Asia-2 (Singapore) | 1200 |

| Asia-1 (N. Virginia) | 700 |

| EMEA (Ireland) | 300 |



## Request Body Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| identifierType* | Enum | Pass any of the registered identifier name of the customer.Values:mobile,email,externalId,wechat,martjackId, orfbId(Facebook ID),id. |

| identifierValue* | string | Pass the respective identifier value.For example if identifierType is mobile, identifierValue is mobile number. |

| source* | Enum | Pass the source from which the transaction is made.Values:INSTORE(for InStore),WECHAT(WeChat),MARTJACK(AnywhereCommerce),WEB_ENGAGE(Web-engage integration),ECOMMERCE(ECOMMERCE),JD(JD),TAOBAO(Taobao),TMALL(TMall),FACEBOOK(Facebook),WEBSITE(other website),OTHERS(any other source). |

| accountId | string | For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID. |

| type* | Enum | Type of transaction.Supported value:REGULARfor loyalty transactions.RETURNfor return transactions.NOT_INTERESTED,NOT_INTERESTED_RETURN. |

| notInterestedReason | string | Notes on why the customer is not interested to enroll into the loyalty (type=NOT_INTERESTED).Max characters supported - 255. |

| returnType** | Enum | For a return transaction, pass the return type.Value:AMOUNT,FULL,LINE_ITEM,CANCELLED. |

| billNumber* | string | Unique transaction number. For a return transaction, this is the original transaction number of the return item. In transaction add the uniqueness of the billNumber is either at till, store, or org, depends on the configuration.Note: The maximum length for a bill number is 50 characters. |

| id | long | Transaction ID of the transaction that needs to be returned.Identifies the specific transaction to be returned when identical bill numbers exist across different transactions.This is applicable when the CONF_LOYALTY_BILL_NUMBER_UNIQUE_ONLY_STORE configuration is enabled, and the same bill number is used for transactions at different stores.Example:Store A: Customer transaction with bill number B1Store B: Different transaction also with bill number B1In this scenario, you can include the transaction ID in the return transaction payload to:- Distinguish between transactions with identical bill numbers- Prevent failures in return transactions due to duplicate bill numbers |

| billAmount* | double | Net Transaction amount. |

| billingDate | date-time | Date and time of the transaction in the ISO 8601Format -YYYY-MM-DDTHH:MM:SSZ. |

| discount | double | Discount availed for the transaction or line item (discount amount). |

| grossAmount | double | Transaction amount before discount. |

| outlierStatus | Enum | Transaction level outlier status.Values:NORMAL,INTERNAL,FRAUD,OUTLIER,TEST,DELETED,FAILED,OTHER.This overrides the outlier status of the configured outlier settings. |

| note | string | Additional information about the transaction. |

| deliveryStatus | Enum | Delivery status of the item.Values:PLACED,PROCESSED,SHIPPED,DELIVERED,RETURNED.You can update the status usingv2/transaction/update. |

| userGroup2Id | int | Unique ID of the user group to which the transaction needs to be associated with.Any one among the parameters with userGroup2 is required to associate the transaction with a group. |

| userGroup2PrimaryUserId | long | Unique user ID of the primary member of group to which the transaction needs to be associated with. |

| userGroup2ExternalId | string | Unique external ID of the user group to which the transaction needs to be associated with. |

| userGroup2PrimaryUserIdentifierType | Enum | Identifier type used to identify group primary member.Value:mobile,email,externalId,wechat,martjackId, orfbId(Facebook ID),id. |

| userGroup2PrimaryUserIdentifierValue | string | Value of the specified group identifier type. |

| userGroup2PrimaryUserSource | Enum | Source in which the identifier of the group primary member is registered.Values:INSTORE(for InStore),WECHAT(WeChat),MARTJACK(AnywhereCommerce),WEB_ENGAGE(Web-engage integration),ECOMMERCE(ECOMMERCE),JD(JD),TAOBAO(Taobao),TMALL(TMall),FACEBOOK(Facebook),WEBSITE(other website),OTHERS(any other source). |

| userGroup2PrimaryUserAccountId | string | Account ID for sources with multiple accounts such as WECHAT. |

| currencyCode | string | ISO currency code of the transaction to add transaction with local currency. For example,INRfor Indian Rupee,SGDfor Singapore Dollar,EURfor Euro,IQDfor Iraqi Dinar. Pass the currency code that are supported for your org (InTouch > Organization Setup) and ensure the currency conversion ratio is set usingv2/currencyratio. |

| addWithLocalCurrency | boolean | Passtrueto add a transaction in local currency. |

| purchaseTime* | date-time | Billing time of regular transactions, for which a return is happening in ISO 8601 standard -YYYY-MM-DDTHH:MM:SSZ. |

| promotionEvaluationId | string | Promotion evaluation code (cart/catalog) applied for the transaction. |

| appliedPromotionIdentifiers | array | Base 64 encoded string of Cart/catalog promotion identifiers that are applied to the transaction.It will have the details mentioned here{"promotionId":"612e5c5e4133b56abe0f073e","discount":"1000.000000","amount":"3000.000000","discountAppliedQty":"1","promotionAppliedQty":"3.000000","redemptionCount":1,"sku":"JNSREG02","version":"v1"} |

| loyaltyPromotionIdentifiers | array | Identifier(s) of loyalty promotion(s) that you want to tag to the transaction. |

| extendedFields | obj | Valid transaction level extended field details in name and value pairs. |

| lineItemsV2 | obj | Details of line-items. |

| attribution | obj | Mapping to tag the transaction to a different user or till (other than the current user) |

| redemptions | obj | Details of points and coupon redemptions for the transaction. |

| paymentModes | obj | Payment details used for the transaction. |



`mobile`

`email`

`externalId`

`wechat`

`martjackId`

`fbId`

`id`

`INSTORE`

`WECHAT`

`MARTJACK`

`WEB_ENGAGE`

`ECOMMERCE`

`JD`

`TAOBAO`

`TMALL`

`FACEBOOK`

`WEBSITE`

`OTHERS`

`REGULAR`

`RETURN`

`NOT_INTERESTED`

`NOT_INTERESTED_RETURN`

`AMOUNT`

`FULL`

`LINE_ITEM`

`CANCELLED`

`YYYY-MM-DDTHH:MM:SSZ`

`NORMAL`

`INTERNAL`

`FRAUD`

`OUTLIER`

`TEST`

`DELETED`

`FAILED`

`OTHER`

`PLACED`

`PROCESSED`

`SHIPPED`

`DELIVERED`

`RETURNED`

`v2/transaction/update`

`mobile`

`email`

`externalId`

`wechat`

`martjackId`

`fbId`

`id`

`INSTORE`

`WECHAT`

`MARTJACK`

`WEB_ENGAGE`

`ECOMMERCE`

`JD`

`TAOBAO`

`TMALL`

`FACEBOOK`

`WEBSITE`

`OTHERS`

`INR`

`SGD`

`EUR`

`IQD`

`v2/currencyratio`

`true`

`YYYY-MM-DDTHH:MM:SSZ`

```
{"promotionId":"612e5c5e4133b56abe0f073e","discount":"1000.000000","amount":"3000.000000","discountAppliedQty":"1","promotionAppliedQty":"3.000000","redemptionCount":1,"sku":"JNSREG02","version":"v1"}
```

#### Attribution Object

| Parameter | Type | Description |

| --- | --- | --- |

| createDate | date-time | Date of the transaction in ISO 8601 standard format. |

| createdBy | obj | User ID or store entity (like TILL ID, store ID) associated with the transaction. |

| code | string | Unique code of the entity. |

| type | Enum | Type of the attribution entity.Value:ZONE,CONCEPT,STORE,TILL,STR_SERVER,ADMIN_USER,ASSOCIATE,RULE,OU. |



`ZONE`

`CONCEPT`

`STORE`

`TILL`

`STR_SERVER`

`ADMIN_USER`

`ASSOCIATE`

`RULE`

`OU`

#### lineItemsV2 object

| Parameter | Type | Description |

| --- | --- | --- |

| amount | double | Net line item amount. value-discount=amount |

| description | string | One or two liner description of the line-item. |

| discount | int | Discount received on the line item. |

| itemCode | string | Unique code of the transaction line-item. |

| qty | double | Quantity of the current line-item. |

| rate | double | Price of each line-item. |

| serial | string | Serial number of the line-item. |

| value | double | Gross amount of the item. Usually, rate*qty=value. |

| returnable | boolean | Passtrueif the item can be returned post purchase. |

| returnableDays | int | Maximum number of days the item is allowed to return. |

| customFields | obj | Transaction or line-item level custom field details. |

| imgUrl | string | URL of the product image. |

| attributes | obj | Details of combo, bundle, or split items. |

| comboDetails | obj | Details of combo, bundle, or split items. |

| addOnDetails | obj | Details of add-on items. |

| splitDetails | obj | Details of split item. |

| parentBillNumber | string | Return transaction number/Actual transaction number of the return item. Applicable only for mixed transaction (involves both transaction and return). |

| purchaseTime* | date-time | Billing time of regular transactions, for which a return is happening in ISO 8601 standard -YYYY-MM-DDTHH:MM:SSZ |

| returnType | Enum | Return type of the line item.Value:AMOUNT,FULL,LINE_ITEM. Not applicable if the transaction level returnType isFULLorAMOUNT. |

| type | Enum | Type of the line item.Value:REGULAR(for regular line item purchase),NOT_INTERESTED(for line item purchase with no customer tagging),RETURN(to return a regular line item ),NOT_INTERESTED_RETURN(to return a line item of no-interested transaction). |

| appliedPromotionIdentifiers | array | Based 64 encoded format Cart or catalog promotions applied to the transaction.It will have the details mentioned here{"promotionId":"612e5c5e4133b56abe0f073e","discount":"1000.000000","amount":"3000.000000","discountAppliedQty":"1","promotionAppliedQty":"3.000000","redemptionCount":1,"sku":"JNSREG02","version":"v1"} |

| extendedFields | obj | Valid transaction line-item level extended field details. |



`true`

`YYYY-MM-DDTHH:MM:SSZ`

`AMOUNT`

`FULL`

`LINE_ITEM`

`FULL`

`AMOUNT`

`REGULAR`

`NOT_INTERESTED`

`RETURN`

`NOT_INTERESTED_RETURN`

```
{"promotionId":"612e5c5e4133b56abe0f073e","discount":"1000.000000","amount":"3000.000000","discountAppliedQty":"1","promotionAppliedQty":"3.000000","redemptionCount":1,"sku":"JNSREG02","version":"v1"}
```

#### Redemptions Object

| Parameter | Type | Description |

| --- | --- | --- |

| pointsRedemptions | array | Unique points redemption id(s) that you want to apply for the transaction.For example, [727272, 237878] |

| couponRedemptions | array | Unique coupon redemption id(s) that you want to apply for the transaction.For example, [727272, 237878] |



#### paymentModes Object

| Parameter | Type | Description |

| --- | --- | --- |

| mode | string | Mode of payment. |

| value | double | Amount paid through the current mode. |

| notes | string | Additional information related to the payment mode. Max characters - 250. |

| attributes | obj | Attributes of the payment mode as name-value pairs. |



# Error codes

| Error code | Cause | Solution |

| --- | --- | --- |

| Time mismatch between billing time and response time | Time conversion is not disabled. | Enable the CONF_ORG_DISABLE_MACHINE_TIME_CONV configuration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. For more information, refer to the documentationhere. |

| 624: Invalid return transaction time, Return transaction should happen after add transaction | Incomplete body parameters | Parameter purchaseTime should be passed in the body. |



[here](/reference/timezone-management#configuration-to-ignore-conversion-of-timezone-in-transaction)

> 📘Note:Custom fields can only be used at the customer, bills, and redemption levels; only extended fields are supported at the line item level.

## 📘Note:

Note:

Custom fields can only be used at the customer, bills, and redemption levels; only extended fields are supported at the line item level.

`Try It!`