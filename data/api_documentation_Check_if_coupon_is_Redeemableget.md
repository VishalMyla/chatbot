# Check if coupon is Redeemableget

> 📘Any one customer identifier is mandatory.

## 📘Any one customer identifier is mandatory.

Any one customer identifier is mandatory.

# Query parameter

| Parameter | Datatype | Description |

| --- | --- | --- |

| user | obj | Pass the identifier of the customer to check if his/her coupon is redeemable. |

| mobile/email/externalId/id | string | Pass any of the identifiers of the customer. |

| code | string | Pass the coupon code that you want to check for redemption. You can also pass multiple coupon codes separating each with a comma, |

| details | boolean | Passtrueto retrieve the details of the coupon series. |

| details=extended | - | Retrieves the details of coupon configurations (set on campaign) of that specific coupon series. |



`,`

`true`

# Response parameter

| Parameter | Description |

| --- | --- |

| accountId | Account ID associated with the profile. |

| autoUpdateTime | Timestamp of when the profile was last automatically updated. |

| commChannels[] | List of communication channels associated with the profile. |

| fields | Any additional fields associated with the profile. |

| firstName | First name of the customer in the profile. |

| type | Type of the identifier (e.g., email, externalId, mobile). |

| value | Value of the identifier. |

| lastName | Last name of the customer in the profile. |

| userId | User ID associated with the profile. |

| appendedErrorMessage | Any appended error message related to the redemption. |

| code | The code of the redemption. |

| isAbsolute | Boolean indicating if the redemption value is absolute. |

| isRedeemable | Boolean indicating if the coupon is redeemable. |

| numberOfRedemptionsByUser | Number of times the coupon has been redeemed by the user. |

| redemptionsLeft | Number of redemptions left for the coupon ). |

| warnings[] | List of any warnings related to the redemption. |

| code | The code indicating the status of the redemption. |

| message | Message related to the redemption status. |

| status | Boolean indicating the overall status of the redemption. |

| warnings[] | List of any general warnings related to the request/response. |



`Try It!`