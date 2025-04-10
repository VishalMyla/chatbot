# Update Transactionput

## API endpoint example

```
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/transactions?identifierName=mobile&identifierValue=919986000586' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlc3RvcmV0aWxsc3NzoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==' \
--header 'Cookie: _cfuvid=nqxTNRsWRIahnyM3eUc36V7PaRf1iZMfFubj3vNvPJA-1721630804772-0.0.1.1-604800000' \
--data '{
  "id": 873547608,
  
  "extendedFields": {
    "ship_first_name": "Test1updatedagain",
    "ship_last_name": "Singh",
    "checkin_date":"2010-06-04 21:08:12",
    "checkout_date":"2010-06-05 21:08:12"
  },
  "customFields": {
    "ordersource": "testnee123updatedagain"
  }
,

  "lineItems":[{
    
    "itemCode":"sku_234_2",
    "extendedFields":
    {
        "MetalRate": "10577",
        "GrossWeight": "10.50"
      }
  }]


}'
```

```
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/transactions?identifierName=mobile&identifierValue=919986000586' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlc3RvcmV0aWxsc3NzoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==' \
--header 'Cookie: _cfuvid=nqxTNRsWRIahnyM3eUc36V7PaRf1iZMfFubj3vNvPJA-1721630804772-0.0.1.1-604800000' \
--data '{
  "id": 873547608,
  
  "extendedFields": {
    "ship_first_name": "Test1updatedagain",
    "ship_last_name": "Singh",
    "checkin_date":"2010-06-04 21:08:12",
    "checkout_date":"2010-06-05 21:08:12"
  },
  "customFields": {
    "ordersource": "testnee123updatedagain"
  }
,

  "lineItems":[{
    
    "itemCode":"sku_234_2",
    "extendedFields":
    {
        "MetalRate": "10577",
        "GrossWeight": "10.50"
      }
  }]


}'
```

## Request Query Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| identifierName | Enum | Pass any of the registered identifier name of the customer.Values:mobile,email,externalId,id,wechat,martjackid,fbId,cardnumber,cardExternalId |

| identifierValue | string | Pass the respective identifier value. For example, ifidentifierTypeis mobile,identifierValueis mobile number. |

| source | Enum | Pass the source from which the transaction is made. Values:INSTORE(for InStore),WECHAT(WeChat),MARTJACK(AnywhereCommerce),WEB_ENGAGE(Web-engage integration),ECOMMERCE(ECOMMERCE),JD(JD),TAOBAO(Taobao),TMALL(TMall),FACEBOOK(Facebook),WEBSITE(other website),OTHERS(any other source). |

| accountId | string | For sources with multiple accounts (such as MARTJACK, WECHAT), pass  the respective account ID. Not applicable forINSTOREsource. |



`mobile`

`email`

`externalId`

`id`

`wechat`

`martjackid`

`fbId`

`cardnumber`

`cardExternalId`

`identifierType`

`identifierValue`

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

`INSTORE`

## Request Body Parameter

| Parameter | Type | Description |

| --- | --- | --- |

| id | long | Unique id of the transaction generated internally. |

| number | string | Unique transaction number that needs to be updated. |

| extendedFields | obj | Valid transaction level extended field details in name and value pairs. |

| customFields | obj | Valid transactional level custom field details in name and value pairs. |

| lineItems | obj | Object to include line item level extended fields that need to be updated. Either item code or line item ID is mandatory to update the line item level extended fields. |

| itemCode | string | Item code of the line item. |

| id | int | Line item ID generated during addition of the transaction. |

| deliveryStatus | Enum | Delivery status of the item.Values:PLACED,PROCESSED,SHIPPED,DELIVERED,RETURNED. |



`PLACED`

`PROCESSED`

`SHIPPED`

`DELIVERED`

`RETURNED`

```
{
  "id": 873547608,
  
  "extendedFields": {
    "ship_first_name": "Test1updatedagain",
    "ship_last_name": "Singh",
    "checkin_date":"2010-06-04 21:08:12",
    "checkout_date":"2010-06-05 21:08:12"
  },
  "customFields": {
    "ordersource": "testnee123updatedagain"
  }
,

  "lineItems":[{
    
    "itemCode":"sku_234_2",
    "extendedFields":
    {
        "MetalRate": "10577",
        "GrossWeight": "10.50"
      }
  }]


}
```

```
{
  "id": 873547608,
  
  "extendedFields": {
    "ship_first_name": "Test1updatedagain",
    "ship_last_name": "Singh",
    "checkin_date":"2010-06-04 21:08:12",
    "checkout_date":"2010-06-05 21:08:12"
  },
  "customFields": {
    "ordersource": "testnee123updatedagain"
  }
,

  "lineItems":[{
    
    "itemCode":"sku_234_2",
    "extendedFields":
    {
        "MetalRate": "10577",
        "GrossWeight": "10.50"
      }
  }]


}
```

`Try It!`