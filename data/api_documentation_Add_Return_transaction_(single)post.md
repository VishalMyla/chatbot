# Add/Return transaction (single)post

#### Rate Limit

| Region | Default Limit (RPM) |

| --- | --- |

| Asia-2 (Singapore) | 1500 |

| Asia-1 (N. Virginia) | 1500 |

| EMEA (Ireland) | 700 |



> 👍NoteTo avoid misunderstandings arising from timezone conversion, you can raise a ticket and enable theCONF_ORG_DISABLE_MACHINE_TIME_CONVconfiguration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. For more information, refer to the documentationhere.

## 👍Note

Note

- To avoid misunderstandings arising from timezone conversion, you can raise a ticket and enable theCONF_ORG_DISABLE_MACHINE_TIME_CONVconfiguration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. For more information, refer to the documentationhere.

`CONF_ORG_DISABLE_MACHINE_TIME_CONV`

## Request Query Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| identifierName* | Enum | Pass any of the registered identifier name of the customer.Values:mobile,email,externalId,id,wechat,martjackId,fbId(Facebook ID),cardnumber,cardExternalId. |

| identifierValue* | string | Pass the respective identifier value. For example if identifierType is mobile, identifierValue is mobile number. |

| source | Enum | Pass the source from which the transaction is made. Values:INSTORE(for InStore),WECHAT(WeChat),MARTJACK(AnywhereCommerce),WEB_ENGAGE(Web-engage integration),ECOMMERCE(ECOMMERCE),JD(JD),TAOBAO(Taobao),TMALL(TMall),FACEBOOK(Facebook),WEBSITE(other website),OTHERS(any other source). |

| accountId | string | For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID. Not applicable for INSTORE source. |

| use_asynch | boolean | Passtrueto run Loyalty activities in the background, side effects will not be returned in the API response. Iffalse, API will wait for Loyalty activities to complete and then respond to the client with side effects in the API response. |

| rawSideEffects | boolean | Passtrueto get complete details of incentives such as awardOn, expiryDate, strategyIds and so on. |



`mobile`

`email`

`externalId`

`id`

`wechat`

`martjackId`

`fbId`

`cardnumber`

`cardExternalId`

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

`true`

`false`

`true`

## Request Body Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| extendedFields | obj | Valid transaction level extended field details in name and value pairs. |

| type* | Enum | Type of transaction.Supported value:REGULARfor loyalty transactions.RETURNfor return transactions.NOT_INTERESTED,NOT_INTERESTED_RETURN. |

| returnType** | Enum | For a return transaction, pass the return type.Value:AMOUNT,FULL,LINE_ITEM,CANCELLED. |

| notInterestedReason | string | Notes on why the customer is not interested to enroll into the loyalty (type = NOT_INTERESTED).Max characters supported - 255. |

| billNumber* | string | Unique transaction number for normal or mixed transactions and original transaction number for return transactions.Note: The maximum length for a bill number is 50 characters. |

| id | long | Transaction ID of the transaction that needs to be returned.Identifies the specific transaction to be returned when identical bill numbers exist across different transactions.This is applicable when the CONF_LOYALTY_BILL_NUMBER_UNIQUE_ONLY_STORE configuration is enabled, and the same bill number is used for transactions at different stores.Example:Store A: Customer transaction with bill number B1Store B: Different transaction also with bill number B1In this scenario, you can include the transaction ID in the return transaction payload to:- Distinguish between transactions with identical bill numbers- Prevent failures in return transactions due to duplicate bill numbers |

| billAmount | double | Net transaction amount. |

| billingDate | date-time | Date and time of the transaction in the ISO 8601 format -YYYY-MM-DDTHH:MM:SSZ. |

| discount | double | Discount availed for the transaction or line item (discount amount). |

| grossAmount | double | Transaction amount before discount. |

| outlierStatus | Enum | Transaction level outlier status.Values:NORMAL,INTERNAL,FRAUD,OUTLIER,TEST,DELETED,FAILED,OTHER. This overrides the outlier status of the configured outlier settings. |

| note | string | Additional information about the transaction. |

| deliveryStatus | Enum | Delivery status of the item.Values:PLACED,PROCESSED,SHIPPED,DELIVERED,RETURNED.You can update the status using v2 PUT/transactions |

| userGroup2Id | int | External ID of the user group to be associated with the transaction. Any one among the parameters with userGroup2 is required to associate the transaction with a group. |

| userGroup2PrimaryUserId | long | ID of the primary user of the group to be associated with the transaction. |

| userGroup2ExternalId | string | External ID of the user group to be associated with the transaction. |

| currencyCode | string | ISO currency code of the transaction to add transaction with local currency. For example,INRfor Indian Rupee,SGDfor Singapore Dollar,EURfor Euro,IQDfor Iraqi Dinar. Pass the currency code that are supported for your org (InTouch > Organization Setup) and ensure the currency conversion ratio is set usingv2/currencyratio. |

| addWithLocalCurrency | boolean | Passtrueto add a transaction in local currency. |

| customFields | obj | Details of transaction level or transaction line-item level custom fields. |

| purchaseTime | date-time | Actual date of transaction of the returning bill in Date and time of the transaction in ISO 8601 standard -YYYY-MM-DDTHH:MM:SSZ. |

| promotionEvaluationId | string | Promotion evaluation code (cart/catalog) applied for the transaction. |

| appliedPromotionIdentifiers | array | Base64-encoded string of cart or catalog promotion identifiers applied to the transaction.To generate this string, evaluate the cart promotion using theEvaluate Cart Promotions API, and use theidentifierfield from theappliedPromotionsobject in the response.The decoded identifier will include details like:{"promotionId": "612e5c5e4133b56abe0f073e", "discount": "1000.000000", "amount": "3000.000000", "discountAppliedQty": "1", "promotionAppliedQty": "3.000000", "redemptionCount": 1, "sku": "JNSREG02","version": "v1"} |

| loyaltyPromotionIdentifiers | array | Identifier(s) of loyalty promotion(s) that you want to tag to the transaction. |

| lineitemsV2 | obj | Details of line items. |

| attribution | obj | Mapping to tag the transaction to a different user or till (other than the current user). |

| redemptions | obj | Details of points and coupon redemptions for the transaction. |

| paymentModes | obj | Payment details used for the transaction. |



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

`/transactions`

`INR`

`SGD`

`EUR`

`IQD`

`v2/currencyratio`

`true`

`YYYY-MM-DDTHH:MM:SSZ`

[Evaluate Cart Promotions API](/reference/post-evaluate-promotions)

`identifier`

`appliedPromotions`

```
{"promotionId": "612e5c5e4133b56abe0f073e", "discount": "1000.000000", "amount": "3000.000000", "discountAppliedQty": "1", "promotionAppliedQty": "3.000000", "redemptionCount": 1, "sku": "JNSREG02","version": "v1"}
```

#### lineitemsV2 Object

| Parameter | Type | Description |

| --- | --- | --- |

| amount | double | Net line item amount.Value - discount = amount. |

| description | string | One or two liner description of the line-item. |

| discount | int | Discount received on the line item. |

| itemCode | string | Unique code of the transaction line-item. |

| qty | double | Quantity of the current line item. |

| rate | double | Price of each line item. |

| serial | string | Serial number of the line-item. |

| value | double | Gross amount of the item.Usually, rate*qty = value. |

| returnable | boolean | Passtrueif the item can be returned post purchase. |

| reutrnableDays | int | Maximum number of days the item is allowed to return. |

| customFields | obj | Transaction or line-item level custom field details. |

| imgUrl | string | URL of the product image. |

| attributes | obj | Attributes of the product in name-value pairs. |

| addOnDetails | obj | Details add-on item. |

| splitDetails | obj | Details of split item. |

| parentBillNumber | string | Return transaction number. Applicable only for mixed transaction (transaction that involves both purchase and return - exchange). |

| purchaseTime | date-time | Actual date of transaction of the return item in ISO 8601 format -YYYY-MM-DDTTHHSSZ. |

| returnType | Enum | Return type of the line item.Value -AMOUNT,FULL,LINE_ITEM. |

| type | Enum | Type of the line item. Value:REGULAR(for regular line item purchase),NOT_INTERESTED(for line item purchase with no customer tagging),RETURN(to return a regular line item ),NOT_INTERESTED_RETURN(to return a line item of no-interested transaction). |

| appliedPromotionIdentifiers | array | Cart or catalog promotions applied to the transaction. |

| extendedFields | obj | Valid transaction line-item level extended field details. |

| comboDetails | obj | Details combo, bundle, or split items. |



`true`

`YYYY-MM-DDTTHHSSZ`

`AMOUNT`

`FULL`

`LINE_ITEM`

`REGULAR`

`NOT_INTERESTED`

`RETURN`

`NOT_INTERESTED_RETURN`

### comboDetails object

| Parameter | Type | Description |

| --- | --- | --- |

| itemCode | string | Unique line-item code. |

| quantity | double | Quantity of the current combo item. |

| description | string | One or two liner description of add-on, split, or combo item. |

| rate | double | Price of the combo item. |

| value | double | Item price excluding discount. |

| comboType | string | Type of the combo.COMBO_PARENT,COMBO_ITEM,ADD_ON_ITEM,SPLIT. |



`COMBO_PARENT`

`COMBO_ITEM`

`ADD_ON_ITEM`

`SPLIT`

#### attribution Object

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

#### redemptions Object

| Parameter | Type | Description |

| --- | --- | --- |

| pointsRedemptions | array | Unique points redemption id(s) that you want to apply for the transaction. For example, [727272, 237878] |

| couponRedemptions | array | Unique coupon redemption id(s) that you want to apply for the transaction. For example, [727272, 237878] |



#### paymentModes Object

| Parameter | Type | Description |

| --- | --- | --- |

| mode | string | Mode of payment. |

| value | double | Amount paid through the current mode. |

| notes | string | Additional information related to the payment mode. Max characters - 250. |

| attributes | obj | Attributes of the payment mode as name-value pairs. |



> 📘Important Notes forNot Interested ReturnTransactionPurchaseTimeshould be both in transaction level as well as line-item levelPurchaseTimeis thebillingDateof the parent bill(In the return payload)BillingDatein the return payload will be a future date when the bill is being returned.PurchaseTimeis always in the past compared to thebillingDateBillNumberin the return payload should be the same as the parent bill

## 📘Important Notes forNot Interested ReturnTransaction

Important Notes forNot Interested ReturnTransaction

`Not Interested Return`

- PurchaseTimeshould be both in transaction level as well as line-item level

`PurchaseTime`

- PurchaseTimeis thebillingDateof the parent bill(In the return payload)

`PurchaseTime`

`billingDate`

- BillingDatein the return payload will be a future date when the bill is being returned.

`BillingDate`

- PurchaseTimeis always in the past compared to thebillingDate

`PurchaseTime`

`billingDate`

- BillNumberin the return payload should be the same as the parent bill

`BillNumber`

# Request body

```
{
  "type": "REGULAR",
  "billNumber": "num-1234",
  "billingDate":"2021-11-10T23:08:49+05:30",
  "discount": "10",
  "billAmount": "200",
  "note": "This is a transaction",
  "grossAmount": "110",
  "deliveryStatus": "SHIPPED",
    "paymentModes": [
        {
          "mode": "Card Payment",
          "value": 5104,
          "notes": "Sample notes",
          "attributes": {
             "card_type": "Visa"
           }
        }
    ], 
  "extendedFields": {
    "ship_first_name": "Ram",
    "ship_last_name": "Singh",
    "checkin_date":"2010-06-04 21:08:12",
    "checkout_date":"2010-06-05 21:08:12"
  },
  "customFields": {
    "paymentmode": "cash"
  },
  "lineItemsV2": [
    {
      "itemCode": "sku_234_2",
      "amount": 100.5,
      "rate": 100.5,
      "qty": 1.0,
      "value":100.5,
      "extendedFields": {
        "MetalRate": "22.02",
        "GrossWeight": "10.50"
      }
    },
    {
      "itemCode": "sku_sdf_10",
      "amount": 100.5,
      "rate": 100.5,
      "qty": 1.0,
      "value":100.5,
      "extendedFields": {
        "MetalRate": "22.02",
        "GrossWeight": "10.50"
      }
    }
  ],
  "promotionEvaluationId":"60f5713c4c5cb92ab2da320e", 
  "loyaltyPromotionIdentifiers":[
    "ABC-12345",
    "Diwali_Promotion_2020",
    "New_Year_Promotion_2020"
  ],
  "appliedPromotionIdentifiers": ["eyJwcm9tb3Rpb25JZCI6IjYxMmU1YzVlNDEzM2I1NmFiZTBmMDczZSIsImRpc2NvdW50IjoiMTAwMC4wMDAwMDAiLCJhbW91bnQiOiIzMDAwLjAwMDAwMCIsImRpc2NvdW50QXBwbGllZFF0eSI6IjEiLCJwcm9tb3Rpb25BcHBsaWVkUXR5IjoiMy4wMDAwMDAiLCJyZWRlbXB0aW9uQ291bnQiOjEsInNrdSI6IkpOU1JFRzAyIiwidmVyc2lvbiI6InYxIn0=", "eyJwcm9tb3Rpb25JZCI6IjYxMmU1YzVlNDEzM2I1NmFiZTBmMDczZSIsImRpc2NvdW50IjoiMTAwMC4wMDAwMDAiLCJhbW91bnQiOiIzMDAwLjAwMDAwMCIsImRpc2NvdW50QXBwbGllZFF0eSI6IjEiLCJwcm9tb3Rpb25BcHBsaWVkUXR5IjoiMy4wMDAwMDAiLCJyZWRlbXB0aW9uQ291bnQiOjEsInNrdSI6IkpOU1JFRzAyIiwidmVyc2lvbiI6InYxIn1="
   ]
}
```

```
{
  "type": "REGULAR",
  "billNumber": "num-1234",
  "billingDate":"2021-11-10T23:08:49+05:30",
  "discount": "10",
  "billAmount": "200",
  "note": "This is a transaction",
  "grossAmount": "110",
  "deliveryStatus": "SHIPPED",
    "paymentModes": [
        {
          "mode": "Card Payment",
          "value": 5104,
          "notes": "Sample notes",
          "attributes": {
             "card_type": "Visa"
           }
        }
    ], 
  "extendedFields": {
    "ship_first_name": "Ram",
    "ship_last_name": "Singh",
    "checkin_date":"2010-06-04 21:08:12",
    "checkout_date":"2010-06-05 21:08:12"
  },
  "customFields": {
    "paymentmode": "cash"
  },
  "lineItemsV2": [
    {
      "itemCode": "sku_234_2",
      "amount": 100.5,
      "rate": 100.5,
      "qty": 1.0,
      "value":100.5,
      "extendedFields": {
        "MetalRate": "22.02",
        "GrossWeight": "10.50"
      }
    },
    {
      "itemCode": "sku_sdf_10",
      "amount": 100.5,
      "rate": 100.5,
      "qty": 1.0,
      "value":100.5,
      "extendedFields": {
        "MetalRate": "22.02",
        "GrossWeight": "10.50"
      }
    }
  ],
  "promotionEvaluationId":"60f5713c4c5cb92ab2da320e", 
  "loyaltyPromotionIdentifiers":[
    "ABC-12345",
    "Diwali_Promotion_2020",
    "New_Year_Promotion_2020"
  ],
  "appliedPromotionIdentifiers": ["eyJwcm9tb3Rpb25JZCI6IjYxMmU1YzVlNDEzM2I1NmFiZTBmMDczZSIsImRpc2NvdW50IjoiMTAwMC4wMDAwMDAiLCJhbW91bnQiOiIzMDAwLjAwMDAwMCIsImRpc2NvdW50QXBwbGllZFF0eSI6IjEiLCJwcm9tb3Rpb25BcHBsaWVkUXR5IjoiMy4wMDAwMDAiLCJyZWRlbXB0aW9uQ291bnQiOjEsInNrdSI6IkpOU1JFRzAyIiwidmVyc2lvbiI6InYxIn0=", "eyJwcm9tb3Rpb25JZCI6IjYxMmU1YzVlNDEzM2I1NmFiZTBmMDczZSIsImRpc2NvdW50IjoiMTAwMC4wMDAwMDAiLCJhbW91bnQiOiIzMDAwLjAwMDAwMCIsImRpc2NvdW50QXBwbGllZFF0eSI6IjEiLCJwcm9tb3Rpb25BcHBsaWVkUXR5IjoiMy4wMDAwMDAiLCJyZWRlbXB0aW9uQ291bnQiOjEsInNrdSI6IkpOU1JFRzAyIiwidmVyc2lvbiI6InYxIn1="
   ]
}
```

```
curl --location 'https://eu.api.capillarytech.com/v2/transactions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc3MDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \
--header 'Cookie: _cfuvid=X4PRfLORRqKZSXB7MLTZg1y0xdBGOGW1RV_AcjWliKU-1732681336338-0.0.1.1-604800000; _cfuvid=c.5agx8tmOi_4rS6BQFx4PU8ZWeuDT8iIAjHm8y6_cg-1744095133839-0.0.1.1-604800000' \
--data '{
    "type": "NOT_INTERESTED_RETURN",
    "billNumber": "test00notinterested001",
    "id": "323301425",
    "returnType": "LINE_ITEM",
    "discount": "0",
    "billAmount": "6000",
    "billingDate": "2025-04-08T12:00:00Z",
    "purchaseTime": "2025-04-08T11:00:00Z",
    "note": "Returning the Transaction number not interested 001",
    "grossAmount": "6000",
    "deliveryStatus": "PLACED",
    "lineItemsV2": [
        {
            "itemCode": "model_id_001",
            "amount": 2000.0,
            "rate": 500.0,
            "qty": 4.0,
            "value": 2000.0
        }
    ]
}'
```

```
curl --location 'https://eu.api.capillarytech.com/v2/transactions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc3MDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \
--header 'Cookie: _cfuvid=X4PRfLORRqKZSXB7MLTZg1y0xdBGOGW1RV_AcjWliKU-1732681336338-0.0.1.1-604800000; _cfuvid=c.5agx8tmOi_4rS6BQFx4PU8ZWeuDT8iIAjHm8y6_cg-1744095133839-0.0.1.1-604800000' \
--data '{
    "type": "NOT_INTERESTED_RETURN",
    "billNumber": "test00notinterested001",
    "id": "323301425",
    "returnType": "LINE_ITEM",
    "discount": "0",
    "billAmount": "6000",
    "billingDate": "2025-04-08T12:00:00Z",
    "purchaseTime": "2025-04-08T11:00:00Z",
    "note": "Returning the Transaction number not interested 001",
    "grossAmount": "6000",
    "deliveryStatus": "PLACED",
    "lineItemsV2": [
        {
            "itemCode": "model_id_001",
            "amount": 2000.0,
            "rate": 500.0,
            "qty": 4.0,
            "value": 2000.0
        }
    ]
}'
```

# Response Parameters

| Parameter | Description |

| --- | --- |

| createdId | Unique ID of the transaction. |

| warnings | Object containing warnings, if any. |

| errors | Object containing errors, if any. |

| sideEffects | Object containing details of issued reward currencies (points and alternate currencies). |

| - entityType | Type of entity. Possible values:USER(customer),USERGROUP2(user group) |

| - rawAwardedPoints | Total number of  points awarded, without anyroundingadjustments. |

| - awardedPoints | Total number of points awarded after rounding. |

| - type | Type of reward currency awarded. Possible valuespointsandalternate_currency |

| - rawAwardedValue | Total number ofalternate currenciesawarded, without anyroundingadjustments. |

| - alternateCurrencyIdentifier | Unique identifier of the alternate currency that is generated when creating an alternate currency. |

| - alternateCurrencyName | Unique name of the alternate currency issued. |

| - awardedValue | Total number of alternate currencies awarded after rounding. |

| loyaltyDetails | Object containing details of the loyalty program. |

| customerInfo | Object containing details of the customer. |

| - firstName | First name of the customer. |

| - lastName | Last name of the customer. |



`USER`

`USERGROUP2`

[user group](/docs/group-loyalty)

[rounding](/docs/points#points-round-off-settings)

`points`

`alternate_currency`

[alternate currencies](/docs/alternate-currencies)

[rounding](/docs/points#points-round-off-settings)

```
{
    "createdId": 880613909,
    "warnings": [],
    "errors": [],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 1000,
            "awardedPoints": 1000,
            "type": "points"
        },
        {
            "entityType": "USER",
            "rawAwardedValue": 1000,
            "alternateCurrencyIdentifier": "9DxGBP",
            "alternateCurrencyName": "DocCoin",
            "awardedValue": 1000,
            "type": "alternate_currency"
        }
    ],
    "loyaltyDetails": [],
    "customerInfo": {
        "firstName": "John",
        "lastName": "Pork"
    }
}
```

```
{
    "createdId": 880613909,
    "warnings": [],
    "errors": [],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 1000,
            "awardedPoints": 1000,
            "type": "points"
        },
        {
            "entityType": "USER",
            "rawAwardedValue": 1000,
            "alternateCurrencyIdentifier": "9DxGBP",
            "alternateCurrencyName": "DocCoin",
            "awardedValue": 1000,
            "type": "alternate_currency"
        }
    ],
    "loyaltyDetails": [],
    "customerInfo": {
        "firstName": "John",
        "lastName": "Pork"
    }
}
```

# Error codes

| Error code | Cause | Solution |

| --- | --- | --- |

| Time mismatch between billing time and response time | Time conversion is not disabled. | Enable the CONF_ORG_DISABLE_MACHINE_TIME_CONV configuration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. For more information, refer to the documentationhere. |

| 624: Invalid return transaction time, Return transaction should happen after add transaction | Incomplete body parameters | ParameterpurchaseTimeshould be passed in the body. |

| 603: Invalid transaction id | Transaction ID is incorrect | Use the correct transaction ID. |



[here](/reference/timezone-management#configuration-to-ignore-conversion-of-timezone-in-transaction)

`purchaseTime`

`Try It!`