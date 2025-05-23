# Update coupon seriesput

# Body Parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| CouponSeriesV2 | Object | Object containing the coupon series details. |

| customPropertyMap | Object | An object containing a collection of keys that represents unique property names and each value represents the corresponding property's value. |

| customPropertyMap.key1 | String | Custom field of the coupon series, providing additional information about the coupon. |

| customPropertyMap.key2 | String | Custom field of the coupon series, providing additional information about the coupon. |

| standard_terms_and_conditions | String | Custom field in the coupon series that provides information about the terms and conditions. |

| description | String | Brief description of the coupon series. |

| discountCode | String | The code given for the coupon as the POS identifier. |

| validTillDate | String | Validity of the card series in UTC timestamp. Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone). |

| expiryStrategyValue | Integer | Specifies the duration a coupon remains valid based on the expiryStrategyType.For expiryStrategyType: "SERIES_EXPIRY", expiryStrategyValue is always 1, which defines the coupon expires based on the rules defined for its series.For expiryStrategyType: "DAYS", and expiryStrategyValue: "5", specifies that coupon will be valid till 5 days of issuanceFor expiryStrategyType: "MONTHS_END", and expiryStrategyValue: "10" specifies that the coupon will be valid for 10 months of issuance. |

| maxCreate | Integer | Maximum number of coupons that can be created. |

| maxRedeem | Integer | Maximum number of coupons that can be redeemed. |

| anyUser | Boolean | Indicates if any user can use the offer. |

| redemptionPerCouponMaxLimit | Integer | Specifies the maximum number of times a particular coupon code can be redeemed across all users.Note:- Applicable only when theanyUserparameter is set totrue.- The value must be greater than 0.- To create a coupon series without a redemption limit, set value asnullor-1- This parameter applies only to autogenerated coupon codes (DISC_CODE) and uploaded coupon codes (DISC_CODE_PIN).- Not applicable forGENERICcoupon codes or externally managed coupon series (EXTERNALLY_MANAGED=true).Refer to theCreate Offersection to know more about coupon code types. |

| sameUserMultipleRedeem | Boolean | Indicates if the same user can redeem multiple times. |

| isReferralExistingUsersAllowed | Boolean | Indicates if the referral is allowed for existing users. |

| isMultipleUseAllowed | Boolean | Indicates if multiple uses of the offer are allowed. |

| isValidWithDiscountedItem | Boolean | Indicates if the offer is valid with discounted items. |

| smsTemplate | String | Template for the SMS that is sent to users. |

| isSMSDisabled | Boolean | Indicates if SMS is disabled. |

| info | String | Additional information about the coupon. |

| isMultipleVouchersPerUserAllowed | Boolean | Indicates if multiple vouchers per user are allowed. |

| doNotResendExistingVoucher | Boolean | indicates not to resend existing vouchers. |

| mutualExclusiveSeriesIds | String | Allows you to specify a list of offer IDs that are mutually exclusive to the current offer. If a customer already has a coupon from any of the offer IDs in this list, they will not be eligible to receive a coupon from the current series |

| maxVouchersPerUser | Integer | Maximum number of vouchers allowed per user. |

| minDaysBetweenVouchers | Integer | Minimum days between issuance of vouchers. |

| discountValue | Integer | Discount value of the coupon. |

| redemptionRange | String | Defines the specific days, weekdays, and hours during which the coupon can be redeemed. |

| minBillAmount | Integer | Minimum bill amount required to use the coupon. |

| maxBillAmount | Integer | Maximum bill amount allowed for coupon redemption. |

| maxRedemptionsInSeriesPerUser | Integer | Maximum redemptions in the series per user. |

| minDaysBetweenRedemption | Integer | Minimum days required between redemptions. |

| redemptionValidFrom | String | Date from which redemption is valid. |

| productInfo | Array | Information about the products on which the coupon can be applied. |

| productInfo.productType | Enum | Type of the product. Supported values: SKU, CATEGORY, BRAND. |

| productInfo.productIds | Array | IDs of product. |

| redemptionOrgEntityDetails | Array | Details about the organization entities where the coupon can be redeemed. |

| redemptionOrgEntityType | Enum | Type of redemption organization entity. Supported values: CONCEPT, TILL, ZONE, STORE. |

| orgEntityId | Integer | ID of the organization entity. |

| targetUserDetails | Object | Details of the criteria that the customer must meet to redeem the coupon. |

| validMaxUserTransactionLimit | Integer | Number of transactions required by the customer to redeem the coupon. |

| validUserRegistrationStartTime | Integer | Customer can redeem the coupon only if their registration date is after the specified date. |

| validUserRegistrationEndTime | Integer | Customer can redeem the coupon only if their registration date is within the specified date. |

| redemptionValidAfterDays | Integer | Number of days after which the redemption becomes valid. |

| alphaNumeric | Boolean | Indicates if the code is alphanumeric. |

| randomCodeLength | Integer | Length of the random code for the coupon. |

| resendMessageEnabled | Boolean | Indicates if the resend message feature is enabled. |

| clientHandlingType | String | Method using which the coupons should be generated. Supported values: DISC_CODE (generate coupon codes automatically), GENERIC (provide a common coupon code), DISC_CODE_PIN (Upload existing coupon codes). |

| genericCode | String | Generic code of the coupon.Note:Only required if the clientHandlingType is set to GENERIC. |

| expiryStrategyType | Enum | Defines the method for coupon expiry.Supported values: SERIES_EXPIRY(defines the coupon expires based on the rules defined for its series), MONTHS_END(defines the number of months from issuance until the coupon expires.), DAYS(defines the number of days from issuance until the coupon expires). |

| discountType | Enum | Specifies the type of discount provided by the coupon. Supported values: ABS(a fixed amount is discounted), PERC(a percentage of the total amount is discounted). |



`anyUser`

`true`

`null`

`-1`

`DISC_CODE`

`DISC_CODE_PIN`

`GENERIC`

`EXTERNALLY_MANAGED`

`true`

[Create Offer](/docs/create-offer)

# Response parameter

| Parameter | Datatype | Description |

| --- | --- | --- |

| customPropertyMap | Object | An object containing a collection of keys that represents unique property names and each value represents the corresponding property's value. |

| standard_terms_and_conditions | string | Custom field in the coupon series that provides information about the terms and conditions. |

| id | integer | Unique identifier of the coupon series |

| orgId | integer | Organization ID associated with the coupon series |

| description | string | Description of the coupon series |

| discountCode | string | The code given for the coupon as the POS identifier that was created during the creation of coupon series. |

| validTillDate | string | Validity of the card series in UTC timestamp. Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone). |

| validDaysFromCreation | integer | Number of days the coupon is valid from creation |

| expiryStrategyValue | integer | Specifies the duration a coupon remains valid based on the expiryStrategyType.For expiryStrategyType: "SERIES_EXPIRY", expiryStrategyValue is always 1, which defines the coupon expires based on the rules defined for its series.For expiryStrategyType: "DAYS", and expiryStrategyValue: "5", specifies that coupon will be valid till 5 days of issuanceFor expiryStrategyType: "MONTHS_END", and expiryStrategyValue: "10" specifies that the coupon will be valid for 10 months of issuance. |

| maxCreate | integer | Maximum number of coupons that can be created |

| maxRedeem | integer | Maximum number of coupons that can be redeemed. |

| isTransferrable | boolean | Indicates if the coupon is transferable |

| anyUser | boolean | Indicates if any user can use the offer. |

| redemptionPerCouponMaxLimit | integer | Specifies the maximum number of times a particular coupon code can be redeemed across all users. |

| sameUserMultipleRedeem | boolean | Indicates if the same user can redeem multiple times. |

| isReferralExistingUsersAllowed | boolean | Indicates if the referral is allowed for existing users. |

| isMultipleUseAllowed | boolean | Indicates if multiple uses of the offer are allowed. |

| isValidationRequired | boolean | Indicates if validation is required for the coupon |

| isValidWithDiscountedItem | boolean | Indicates if the offer is valid with discounted items. |

| createdBy | integer | ID of the user who created the coupon series |

| numIssued | integer | Number of coupons issued from this series |

| numRedeemed | integer | Number of coupons redeemed from this series |

| createdOn | string | Date and time when the coupon series was created. |

| lastUsed | string | Date and time when the coupon was last used |

| seriesCode | string | Code for the coupon series |

| smsTemplate | string | Template for the SMS that is sent to users. |

| isSMSDisabled | boolean | Indicates if SMS is disabled. |

| info | string | Additional information about the coupon |

| isMultipleVouchersPerUserAllowed | boolean | Indicates if multiple vouchers per user are allowed |

| doNotResendExistingVoucher | boolean | Indicates not to resend existing vouchers. |

| mutualExclusiveSeriesIds | string | Allows you to specify a list of offer IDs that are mutually exclusive to the current offer. If a customer already has a coupon from any of the offer IDs in this list, they will not be eligible to receive a coupon from the current series. |

| storeIdsJson | string | IDs of stores where the coupon is valid. |

| isDvsEnabled | boolean | Indicates if DVS (Dynamic Voucher System) is enabled |

| dvsExpiryDate | string | Expiry date for DVS. |

| priority | integer | Priority level of the offer. |

| shortSMSTemplate | string | Short template for the SMS to be sent to users |

| maxVouchersPerUser | integer | Maximum number of vouchers allowed per user |

| minDaysBetweenVouchers | integer | Minimum days between issuance of vouchers. |

| maxReferralsPerReferee | integer | Maximum number of referrals allowed per referee |

| discountUpto | integer | Maximum discount value |

| discountValue | integer | Discount value of the coupon |

| dvsItems | string | Items for DVS (Dynamic Voucher System). |

| redemptionRange | string | Defines the specific days, weekdays, and hours during which the coupon can be redeemed. |

| minBillAmount | integer | Minimum bill amount required to use the coupon. |

| maxBillAmount | integer | Maximum bill amount allowed for coupon redemption |

| redeemAtStore | string | Stores IDs where redemption is allowed. |

| campaignId | integer | Identifier of the campaign associated with the coupon |

| tag | string | Tag or label for the coupon |

| maxRedemptionsInSeriesPerUser | integer | Maximum redemptions in the series per user. |

| minDaysBetweenRedemption | integer | Minimum days required between redemptions. |

| redemptionValidFrom | string | Date from which redemption is valid. |

| sourceOrgId | integer | Identifier of the source organization |

| issueToLoyalty | boolean | Indicates if the coupon is issued to loyalty members |

| redeemStoreType | string | Type of store where the coupon can be redeemed. Supported values : redeemable_stores. |

| offlineRedeemType | boolean | Indicates if offline redemption is enabled |

| isOldFlowEnabled | boolean | Indicates if the old redemption flow is enabled |

| isPreRedeemEventRequired | boolean | Indicates if a pre-redeem event is required |

| termsAndConditions | string | Terms and conditions for the offer. |

| signalRedemptionEvent | boolean | Indicates if a redemption event signal is required |

| syncToClient | boolean | Indicates if the coupon data should be synchronized to the client |

| showPinCode | boolean | Indicates if a PIN code should be displayed |

| validMaxUserTransactionLimit | integer | Number of transactions required by the customer to redeem the coupon. |

| validUserRegistrationStartTime | integer | Customer can redeem the coupon only if their registration date is after the specified date. |

| validUserRegistrationEndTime | integer | Customer can redeem the coupon only if their registration date is within the specified date. |

| numUploadedNonIssued | integer | Number of non-issued coupons uploaded |

| numUploadedTotal | integer | Total number of coupons uploaded |

| redemptionValidAfterDays | integer | Number of days after which the redemption becomes valid. |

| ownedBy | string | Ownership details for the offer. |

| ownerId | integer | Identifier of the owner of the coupon |

| ownerValidity | integer | Validity period of the owner's rights to the coupon |

| alphaNumeric | boolean | Indicates if the code is alphanumeric. |

| shortCodeLength | integer | Length of the short code generated for the coupon |

| randomCodeLength | integer | Length of the random code for the coupon. |

| fixedExpiryDate | integer | Fixed expiry date of the coupon (in epoch milliseconds) |

| numTotal | integer | Total number of coupons issued |

| latestIssualTime | integer | Latest issuance time of the coupon (in epoch milliseconds) |

| latestRedemptionTime | integer | Latest redemption time of the coupon (in epoch milliseconds) |

| resendMessageEnabled | boolean | Indicates if the resend message feature is enabled. |

| seriesType | string | Type of coupon series. |

| clientHandlingType | string | Method using which the coupons should be generated. Supported values: DISC_CODE (generate coupon codes automatically), GENERIC (provide a common coupon code), DISC_CODE_PIN (Upload existing coupon codes). |

| expiryStrategyType | string | Defines the method for coupon expiry.Supported values: SERIES_EXPIRY(defines the coupon expires based on the rules defined for its series), MONTHS_END(defines the number of months from issuance until the coupon expires.), DAYS(defines the number of days from issuance until the coupon expires). |

| discountOn | string | Type of discount. |

| discountType | string | Specifies the type of discount provided by the coupon. Supported values: ABS(a fixed amount is discounted), PERC(a percentage of the total amount is discounted). |

| updateProductData | boolean | Indicating if the product data can be updated. |

| externalIssual | boolean | Indicating if external issuance is allowed. |

| warnings | array | List of warnings related to the coupon. |



`Try It!`