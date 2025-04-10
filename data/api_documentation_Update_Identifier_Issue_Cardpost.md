# Update Identifier/Issue Cardpost

Use Case - loyalty cards of a customer across sources can be added or removed.

Identifiers:mobile,email,externalId,wechat,martjackId,fbId,tmall_uname,cuid,ali_uname,jd_uname,vip_uname,line.

`mobile`

`email`

`externalId`

`wechat`

`martjackId`

`fbId`

`tmall_uname`

`cuid`

`ali_uname`

`jd_uname`

`vip_uname`

`line`

Limitations of the customer identifier update API:

- Only identifiers can be updated using this API

- Identifiers should be unique within a source for single account sources and unique within an account for multiple account sources.

- If an identifier that you add already exists in a different source/account, the account will be automatically merged into the existing account maintaining different entries of each source. The new account will be a victim account and the existing account is a survivor account.

### Prerequisites

- Valid customer identifier(s) that you want to add to the existing account

> 📘The new identifier that you want to update should be unique across the source (for sources with single accounts) and unique across the account (for sources with multiple accounts).

## 📘

The new identifier that you want to update should be unique across the source (for sources with single accounts) and unique across the account (for sources with multiple accounts).

### Request Body Parameters

| Attributes | Type | Description |

| --- | --- | --- |

| add** | obj | New identifier that you want to add to the existing account. Pass the identifiers as a key value pair.{“type": "wechat", "value": "TS11"} |

| remove** | obj | Existing Identifier that you want to remove from the specified account.{"type": "email", "value": |

| type* | enum | Type of the identifier that you want to add or remove. Value:cardnumber,email,mobile,wechat,cardnumber. |

| value* | string | Value of the specifiedtype.  For `cardnumber, enter a valid card number. Refer to the documentation for information on creating and adding a new card to a card serieshere.If the type is email, pass the email ID you want to add or remove in value. |

| seriesId | int | Enter the card series to which the card belongs. |

| statusLabel | string | New custom status label of the card. The value has to a status label name added across each standard status. Required for card issual. |



`{“type": "wechat", "value": "TS11"}`

`{"type": "email", "value":`

`cardnumber`

`email`

`mobile`

`wechat`

`cardnumber`

`cardnumber`

[here](/reference/add-card-details-single)

`Try It!`