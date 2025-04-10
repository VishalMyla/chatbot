# Check if Points Transferablepost

Checks if specific points of a customer can be transferred to another customer. You can also issue OTP that is used to authenticate customer to transfer points (pointsTransferAPI ).

`pointsTransfer`

> 📘NotePoints added during customer creation cannot be transferred, points rewarded through transaction are transferable.This API is applicable only for individual-to-individual transfers within the Intouch platform. It does not support group-to-group transfers.

## 📘Note

Note

- Points added during customer creation cannot be transferred, points rewarded through transaction are transferable.

- This API is applicable only for individual-to-individual transfers within the Intouch platform. It does not support group-to-group transfers.

> 👍NoteFor detailed information about the APIs and for hands-on testing, refer to theAPI overviewdocumentation and step-by-step guide on [making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call\)

## 👍Note

Note

For detailed information about the APIs and for hands-on testing, refer to theAPI overviewdocumentation and step-by-step guide on [making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call\)

# Prerequisites

- The config ALLOW_POINTS_TRANSFER should be enabled for the org. To enable this, create a JIRA ticket to the Product Support team.

# Response Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| data | Array | Contains details of the points transfer request. |

| pointsTobeTransferred | Float | Number of points to be transferred. |

| transferFrom | Object | Details of the customer transferring the points. |

| - id | Long | Unique identifier of the customer transferring points. |

| - profiles | Array | List of profile details of the transferring customer. |

| -- firstName | String | First name of the transferring customer. |

| -- lastName | String | Last name of the transferring customer. |

| -- identifiers | Array | List of identifiers for the transferring customer (e.g., email, mobile, external ID). |

| -- commChannels | Array | List of communication channels (email, mobile) for the transferring customer. |

| loyaltyInfo | Object | Loyalty details of the transferring customer. |

| - loyaltyType | String | Type of loyalty program. |

| - lifetimePurchases | Float | Total purchases made by the transferring customer. |

| transferTo | Object | Details of the customer receiving the points. |

| - id | Long | Unique identifier of the customer receiving points. |

| - profiles | Array | List of profile details of the receiving customer. |

| -- firstName | String | First name of the receiving customer. |

| -- lastName | String | Last name of the receiving customer. |

| -- identifiers | Array | List of identifiers for the receiving customer (e.g., email, mobile, external ID). |

| -- commChannels | Array | List of communication channels (email, mobile) for the receiving customer. |

| - loyaltyInfo (under transferTo) | Object | Loyalty details of the receiving customer. |

| -- loyaltyType | String | Type of loyalty program. |

| -- lifetimePurchases | Float | Total purchases made by the receiving customer. |

| transferrable | Boolean | Indicates if the points transfer is possible. |

| warnings | Array | List of warnings, if any. |

| errors | Array | List of errors, if any. |



# API specific error codes

| Error code | Description | Reason |

| --- | --- | --- |

| 885 | Invalid program id passed | The program id provided is invalid or unsupported. |

| 8013 | Invalid identifier passed | The costumer id was invalid or unsupported |

| 8015 | Costumer not found for the given identifiers | Customer id provided is invalid or not found. |

| 3316 | Group redemption action executed for non-group redemption payload. | Group redemption action is unsupported for non-group redemption payload. |



`Try It!`