# Get Subscription Detailsget

# Request URL

{host}/v2/customers/{customerId}/subscriptionsor

```
{host}/v2/customers/{customerId}/subscriptions
```

{host}/v2/customers/{customerId}/subscriptions?source={sourceName}?&accountId={accountId}&identifierName={identifierName}&identifierValue={IdentifierValue}

```
{host}/v2/customers/{customerId}/subscriptions?source={sourceName}?&accountId={accountId}&identifierName={identifierName}&identifierValue={IdentifierValue}
```

# Request Path Parameters (for normal API)

| Parameter | Description |

| --- | --- |

| customerId | Unique ID of the customer to fetch retro transaction details. |



# Request Query Parameters (for lookup API)

| Parameter | Description |

| --- | --- |

| identifierName | Identifier type to used for the customer. |

| identifierValue | The respective identifier value. |

| source | Specify the source in which you want to update the customer details. |

| accountId | Account in which you want to update the customer details. |



`Try It!`