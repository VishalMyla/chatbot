# Transfer Customer Pointspost

- Rate limiter controls the number of incoming and outgoing traffic of a network

- Authentication verifies the identity of the current user or integration.See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

# Body Parameter

| Parameter | Description |

| --- | --- |

| pointsToBeTransferred | Number of points to be transferred. |

| programId | Program ID from which points has to be transferred. |

| fromCustomerIdentifier | Details of source customer - customer that wants to transfer points. |

| toCustomerIdentifier | Details of destination customer - customer to whom the points have to be transferred. |

| notes | Specify the reason or any notes for this points transfer. |

| code | Pass the OTP received by the fromCustomer for the current points transfer. To issue OTP, use either/isPointsTransferreableor/issuePointsTransferOtp. |



`/isPointsTransferreable`

`/issuePointsTransferOtp`

#### fromCustomerIdentifierandtoCustomerIdentifierObject Parameters

`fromCustomerIdentifier`

`toCustomerIdentifier`

| Parameter | Description |

| --- | --- |

| type | Customer identifier type.Values:ID(user id of the customer),MOBILE,EXTERNAL_ID,EMAIL. |

| value | The value of the specified identifier. |



`ID`

`MOBILE`

`EXTERNAL_ID`

`EMAIL`

`Try It!`