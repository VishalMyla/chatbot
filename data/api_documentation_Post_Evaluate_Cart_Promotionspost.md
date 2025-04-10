# Post Evaluate Cart Promotionspost

The Evaluate Promotions API returns the list of promotions applicable to a transaction by evaluating the current cart and customer data.

> 📘NoteWhen there are multiple items with the same SKU, each item is evaluated individually, and the discount is split based on quantity or value.For example:If you add two Coke bottles to the cart twice(two SKU's), and there's an offer of ₹10 off on a combo of two bottles, the discount remains ₹10. It is split equally —  ₹5 for each combo.

## 📘Note

Note

- When there are multiple items with the same SKU, each item is evaluated individually, and the discount is split based on quantity or value.For example:If you add two Coke bottles to the cart twice(two SKU's), and there's an offer of ₹10 off on a combo of two bottles, the discount remains ₹10. It is split equally —  ₹5 for each combo.

# Headers

| Header Name | Type | Description |

| --- | --- | --- |

| X-CAP-API-ATTRIBUTION-TILL-CODE | string | This header maps the provided till code to its corresponding till identifier. The API uses this identifier to fetch the correct organizational hierarchy and return only those cart promotions applicable to the transactions at that specific till and its associated store hierarchy. |



`X-CAP-API-ATTRIBUTION-TILL-CODE`

`string`

# Request Body

| Parameter(Parameters marked with * are required) | Data Type | Description |

| --- | --- | --- |

| amount* | BigDecimal | Total value of the products in the cart. |

| customerId* | Long | Unique ID of the customer. |

| cartItems | Object | Object containing details of the products in the cart |

| - sku* | String | Unique identifier (SKU) for the product. |

| - amount* | BigDecimal | Price of the product. |

| - qty* | BigDecimal | Total quantity of the product |

| - discount | BigDecimal | Discount  applied to the item, if any. |

| - categoryList | Array | Categories the product belongs to. For example,["Fuel", "Premium"]. |

| - brandList | Array | Brands associated with the product. For example,["MaxFuel", "FuelCo"]. |

| cartTenders | Object | Object containing details of the payment method used for purchase. |

| - identifier* | String | Identifier of the payment method used for the purchase. |

| - amount | BigDecimal | Total amount paid using the payment method. |



`["Fuel", "Premium"]`

`["MaxFuel", "FuelCo"]`

```
{
    "amount": "2000.00",
    "customerId": 98662653,
    "cartItems": [
        {
            "sku": "Sku#Fuel",
            "amount": "1000.00",
            "qty": "1.000000",
            "discount": null,
            "categoryList": [
                "Fuel",
                "Premium"
            ],
            "brandList": [
                "MaxFuel",
                "FuelCo"
            ]
        },
        {
            "sku": "Sku#food",
            "amount": "1000.00",
            "qty": "1.00",
            "discount": null
        }
    ],
    "promoCodes": null,
    "paymentVouchers": null,
    "cartTenders": [
        {
            "identifier": "CreditCard",
            "amount": "500.00"
        }
    ],
    "categoryHierarchySentInPayload": true
}
```

```
{
    "amount": "2000.00",
    "customerId": 98662653,
    "cartItems": [
        {
            "sku": "Sku#Fuel",
            "amount": "1000.00",
            "qty": "1.000000",
            "discount": null,
            "categoryList": [
                "Fuel",
                "Premium"
            ],
            "brandList": [
                "MaxFuel",
                "FuelCo"
            ]
        },
        {
            "sku": "Sku#food",
            "amount": "1000.00",
            "qty": "1.00",
            "discount": null
        }
    ],
    "promoCodes": null,
    "paymentVouchers": null,
    "cartTenders": [
        {
            "identifier": "CreditCard",
            "amount": "500.00"
        }
    ],
    "categoryHierarchySentInPayload": true
}
```

# Response Body

| Parameter | Description |

| --- | --- |

| amount | Total value of the products in the cart. |

| customerId | Unique ID of the customer. |

| evaluationId | Unique identifier generated for this specific evaluation of the cart. |

| cartItems | Object containing details of the products in the cart |

| - referenceId | Unique identifier for the cart item. |

| - sku | Unique identifier (SKU) for the product. |

| - amount | Price of the product. |

| - qty | Total quantity of the product |

| - discount | Discount  applied to the item, if any. |

| appliedPromotions | Object containing details of cart promotions applied to this cart. |

| - promotionId | Unique ID of the cart promotion. |

| - name | Unique name of the cart promotion. |

| - messageLabel | Unique message that is displayed to the end user to describe the promotion. |

| - promotionMode | Type of cart promotion. Possible values:DISCOUNT: Promotion is a standard discount promotion.PAYMENT_VOUCHER:Promotion includes a payment voucher promotion. |

| - redemptionCount | Total number of times the cart promotion is redeemed. |

| - discount | Total discount applied to the cart. |

| - identifier | Base64 encoded details of the applied cart promotion. You can use this when redeeming a cart promotion using theadd transaction API. |

| appliedPaymentVouchers | Payment vouchers applied, if any. |

| cartTenders | Object contains details of the payment methods used for the purchase. |

| - identifier | Identifier of the payment method used for the purchase. |

| - amount | Total amount paid using the payment method. |

| - referenceId | Unique ID for the cart tender. |

| - adjustedAmount | Total amount paid using the payment method. |

| categoryHierarchySentInPayload | Indicates whether the product category hierarchy was included in the request. |



`DISCOUNT`

`PAYMENT_VOUCHER`

[add transaction API](/reference/add-transaction-single)

```
{
    "data": {
        "amount": "2000.000000",
        "customerId": 98662653,
        "cartItems": [
            {
                "referenceId": "f297716f-c3ee-4936-b88e-a5e0ed91d262",
                "sku": "Sku#food",
                "amount": "1000.000000",
                "qty": "1.000000",
                "discount": "0",
                "appliedPromotions": []
            },
            {
                "referenceId": "20f142ec-9a10-49f6-a326-abc48f58d904",
                "sku": "Sku#Fuel",
                "amount": "1000.000000",
                "qty": "1.000000",
                "discount": "0",
                "appliedPromotions": []
            }
        ],
        "evaluationId": "67ea9543e1c34e7d8e936839",
        "appliedPromotions": [
            {
                "promotionId": "67dd2a7cef21a64211227d02",
                "name": "promotion-cart",
                "messageLabel": "test!!",
                "promotionMode": "DISCOUNT",
                "redemptionCount": 1,
                "discount": "100.000000",
                "identifier": "eyJwcm9tb3Rpb25JZCI6IjY3ZGQyYTdjZWYyMWE2NDIxMTIyN2QwMiIsImRpc2NvdW50IjoiMTAwLjAwMDAwMCIsImFtb3VudCI6IjIwMDAuMDAwMDAwIiwicmVkZW1wdGlvbkNvdW50IjoxLCJ2ZXJzaW9uIjoidjEifQ=="
            }
        ],
        "appliedPaymentVouchers": [],
        "promoCodeEvaluationLogs": [],
        "paymentVoucherEvaluationLogs": [],
        "cartTenders": [
            {
                "identifier": "CreditCard",
                "amount": "500.00",
                "referenceId": "67ea9543e1c34e7d8e936831",
                "adjustedAmount": "500.00"
            },
            {
                "identifier": "CASH",
                "amount": "1400.000000",
                "referenceId": "67ea9543e1c34e7d8e936836",
                "adjustedAmount": "1400.000000"
            }
        ],
        "categoryHierarchySentInPayload": false
    }
}
```

```
{
    "data": {
        "amount": "2000.000000",
        "customerId": 98662653,
        "cartItems": [
            {
                "referenceId": "f297716f-c3ee-4936-b88e-a5e0ed91d262",
                "sku": "Sku#food",
                "amount": "1000.000000",
                "qty": "1.000000",
                "discount": "0",
                "appliedPromotions": []
            },
            {
                "referenceId": "20f142ec-9a10-49f6-a326-abc48f58d904",
                "sku": "Sku#Fuel",
                "amount": "1000.000000",
                "qty": "1.000000",
                "discount": "0",
                "appliedPromotions": []
            }
        ],
        "evaluationId": "67ea9543e1c34e7d8e936839",
        "appliedPromotions": [
            {
                "promotionId": "67dd2a7cef21a64211227d02",
                "name": "promotion-cart",
                "messageLabel": "test!!",
                "promotionMode": "DISCOUNT",
                "redemptionCount": 1,
                "discount": "100.000000",
                "identifier": "eyJwcm9tb3Rpb25JZCI6IjY3ZGQyYTdjZWYyMWE2NDIxMTIyN2QwMiIsImRpc2NvdW50IjoiMTAwLjAwMDAwMCIsImFtb3VudCI6IjIwMDAuMDAwMDAwIiwicmVkZW1wdGlvbkNvdW50IjoxLCJ2ZXJzaW9uIjoidjEifQ=="
            }
        ],
        "appliedPaymentVouchers": [],
        "promoCodeEvaluationLogs": [],
        "paymentVoucherEvaluationLogs": [],
        "cartTenders": [
            {
                "identifier": "CreditCard",
                "amount": "500.00",
                "referenceId": "67ea9543e1c34e7d8e936831",
                "adjustedAmount": "500.00"
            },
            {
                "identifier": "CASH",
                "amount": "1400.000000",
                "referenceId": "67ea9543e1c34e7d8e936836",
                "adjustedAmount": "1400.000000"
            }
        ],
        "categoryHierarchySentInPayload": false
    }
}
```

`Try It!`