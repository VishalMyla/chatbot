# Cancel Transaction Lineitempost

> 📘To cancel a line-item, it is required to pass return item’s purchased transaction number and purchase_time. Purchase time: The date and time of the actual transaction.  Billing time: The date and time of the return transaction.

## 📘To cancel a line-item, it is required to pass return item’s purchased transaction number and purchase_time. Purchase time: The date and time of the actual transaction.  Billing time: The date and time of the return transaction.

To cancel a line-item, it is required to pass return item’s purchased transaction number and purchase_time. Purchase time: The date and time of the actual transaction.  Billing time: The date and time of the return transaction.

# Request URL

https://{host}/v1.1/transaction/add?format=json

```
https://{host}/v1.1/transaction/add?format=json
```

# Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| Customer identifier | enum | Pass any of the identifiers of customers for loyalty or non-loyalty returns. Value:mobile,email,external_id,id. |

| purchase_time* | date-time | Date and time of the actual purchase of the return items. |

| number* | string | The actual transaction number of the returned item. |

| type* | enum | Specify type asRETURNfor regular transaction returns,NOT_INTERESTED_RETURNfor not-interested transaction returns. |

| return_type* | enum | SpecifyFULLto return the entire transaction,LINE_ITEMto return a particular line-item of the transaction,AMOUNTto return the transaction amount instead of replacement. |



`mobile`

`email`

`external_id`

`id`

`RETURN`

`NOT_INTERESTED_RETURN`

`FULL`

`LINE_ITEM`

`AMOUNT`

> 📘Parameters marked with * are mandatory.

## 📘Parameters marked with * are mandatory.

Parameters marked with * are mandatory.

# Response Body Parameters

| Parameter | Description |

| --- | --- |

| status success | The success status of the response. |

| status code | The HTTP status code of the response. |

| status message | The status message of the response. |

| transaction id | The ID of the transaction. |

| transaction number | The number associated with the transaction. |

| transaction type | The type of transaction. |

| transaction delivery_status | The delivery status of the transaction. |

| transaction outlier_status | The outlier status of the transaction. |

| customer user_id | The user ID of the customer. |

| customer mobile | The mobile number of the customer. |

| customer firstname | The first name of the customer. |

| customer lastname | The last name of the customer. |

| customer email | The email address of the customer. |

| customer external_id | The external ID of the customer. |

| customer lifetime_points | The lifetime points accumulated by the customer. |

| customer loyalty_points | The loyalty points accumulated by the customer. |

| customer lifetime_purchases | The lifetime purchases made by the customer. |

| customer type | The type of customer. |

| customer source | The source of the customer's information. |

| transaction points_deducted | The points deducted from the transaction. |

| transaction points_balance | The balance of points after the transaction. |

| item_status code | The status code of the item involved in the transaction. |

| item_status success | The success status of the item transaction. |

| item_status message | The status message for the item transaction. |

