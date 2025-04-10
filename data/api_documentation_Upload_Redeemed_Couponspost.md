# Upload Redeemed Couponspost

### Request Body Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| customerIdentifier* | enum | Unique identifier of the customer to update redeemed coupons. Values:MOBILE,EXTERNAL_ID,EMAIL,USER_ID. |

| couponIdentifier* | enum | Coupon identifier used. Value:COUPON_ID,COUPON_CODE. |

| file* | file | The CSV file that contains information of redeemed coupons. Each row in CSV file can contain following fields(columns marked with * are mandatory).-Customer identifier*: Field used to identify the customer, it can be userId, mobile, email or externalId. (userId will have more preference over the other customer identifiers, in case of multiple values)-Coupon identifier*: Field used to identify the redeemed coupon, It can be couponId, couponCode. (couponId has more preference over couponCode in case of multiple values)-Redeemed date in milliseconds*: Coupon redeemed time in Epoch-Redeemed at*: Coupon redeemed till’s Id-Bill Id: Transaction Id-Bill Number: Transaction Number Details.Sample file content:-File content sample 1:redeemed date in millis, redeemed at, user id, coupon id, bill id, bill number, details1603128622000,50015497,23599838,23456,1603128596000luci_auto_15039.-File content sample 2:redeemed date in millis, redeemed at, mobile, coupon code ,bill id, bill number, details1603128622000,50015497,9876543210,ABCDEF1,1603128596000luci_auto_15039 |

| uploadHeaders* | int | The sequence (starts from 0) of the columns in the attached csv file. This field accepts stringified JSON.Key name for columns are as follows:Key name for the columns are as follows-Customer identifier*: Key name for this field varies according to the customerIdentifier param.MOBILE : mobileEXTERNAL_ID: externalIdEMAIL: emailUSER_ID: userId-Coupon identifier*:  Key name for this field varies according to the couponIdentifier param.COUPON_ID: couponIdCOUPON_CODE: couponCode-Redeemed date in milliseconds*: redeemedDateInMillis-Redeemed at*: redeemedAt-Bill Id: billId-Bill Number: billNumber-Details: detailsFor the above file samples, the uploadHeaders will be -Sample 1- {'redeemedDateInMillis': 0, 'redeemedAt': 1, 'billNumber': 5, 'couponId': 3,'userId': 2, 'billId': 4, 'details': 6}Sample 2- {'redeemedDateInMillis': 0, 'redeemedAt': 1, 'billNumber': 5, 'couponCode': 3,mobile: 2, 'billId': 4, 'details': 6} |

| Details | string | Any additional details or notes to capture for redeemed coupon upload. |



`MOBILE`

`EXTERNAL_ID`

`EMAIL`

`USER_ID`

`COUPON_ID`

`COUPON_CODE`

`Try It!`