# Create coupon seriespost

This API allows you to create a new coupon series for the org.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Access group resource: Write access to coupon group resource

# Resource information

|  |  |

| --- | --- |

| URI | /v2/coupon/series |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | No |



# API endpoint example

https://eucrm.cc.capillarytech.com/v2/coupon/series

```
https://eucrm.cc.capillarytech.com/v2/coupon/series
```

> 📘Daily Limit on API CallsYou can make as many API calls as you need to create coupon series each day. But, it is important to be careful and balanced in how many calls you make at once to avoid overloading the system.If limits are set for coupon series in the system, these limits will acts as an restriction for creating the number of coupon series per day.

## 📘Daily Limit on API Calls

Daily Limit on API Calls

You can make as many API calls as you need to create coupon series each day. But, it is important to be careful and balanced in how many calls you make at once to avoid overloading the system.

If limits are set for coupon series in the system, these limits will acts as an restriction for creating the number of coupon series per day.

# Body parameter

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

```
{
    "CouponSeriesV2": {
        "customPropertyMap": {
            "milestone": "custom property 1",
            "trackerid": "custom property 2",
            "standard_terms_and_conditions" : "terms and condtion"
        },
        "description": "DIWALI 100% OFF",
        "discountCode": "XYZ123",
        "validTillDate": "2029-05-10T00:00:00+05:30",
        "expiryStrategyValue": 1,
        "maxCreate": -1,
        "maxRedeem": -1,
        "anyUser": false,
        "sameUserMultipleRedeem": false,
        "isReferralExistingUsersAllowed": false,
        "isMultipleUseAllowed": false,
        "isValidWithDiscountedItem": true,
       "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
        "isSMSDisabled": false,
        "info": "Evil coupon",
        "isMultipleVouchersPerUserAllowed": true,
        "doNotResendExistingVoucher": true,
        "mutualExclusiveSeriesIds": "[10]",
        "maxVouchersPerUser": 11,
        "minDaysBetweenVouchers": 23,
        "discountValue": 500,
        "redemptionRange": "{\"dom\" : [1], \"dow\": [1], \"hours\": [1]}",
        "minBillAmount": 100,
        "maxBillAmount": 20000,
        "maxRedemptionsInSeriesPerUser": 122,
        "minDaysBetweenRedemption": 962,
        "redemptionValidFrom": "2024-05-18T00:00:00+05:30",
        "productInfo": [
            {
                "productType": "SKU",
                "productIds": [
                    30,
                    40
                ]
            },
            {
                "productType": "CATEGORY",
                "productIds": [
                    50,
                    60
                ]
            },
            {
                "productType": "BRAND",
                "productIds": [
                    10,
                    20
                ]
            }
        ],
        "redemptionOrgEntityDetails": [
            {
                "redemptionOrgEntityType": "CONCEPT",
                "orgEntityId": 10
            },
            {
                "redemptionOrgEntityType": "TILL",
                "orgEntityId": 20
            },
            {
                "redemptionOrgEntityType": "ZONE",
                "orgEntityId": 30
            },
            {
                "redemptionOrgEntityType": "STORE",
                "orgEntityId": 40
            }
        ],
        "targetUserDetails": {
            "validMaxUserTransactionLimit": 1,
            "validUserRegistrationStartTime": 0,
            "validUserRegistrationEndTime": 10000
        },
        "redemptionValidAfterDays": 22,
        "alphaNumeric": true,
        "randomCodeLength": 10,
        "resendMessageEnabled": true,
        "clientHandlingType": "DISC_CODE",
        "expiryStrategyType": "SERIES_EXPIRY",
        "discountType": "ABS"
    }
}
```

```
{
    "CouponSeriesV2": {
        "customPropertyMap": {
            "milestone": "custom property 1",
            "trackerid": "custom property 2",
            "standard_terms_and_conditions" : "terms and condtion"
        },
        "description": "DIWALI 100% OFF",
        "discountCode": "XYZ123",
        "validTillDate": "2029-05-10T00:00:00+05:30",
        "expiryStrategyValue": 1,
        "maxCreate": -1,
        "maxRedeem": -1,
        "anyUser": false,
        "sameUserMultipleRedeem": false,
        "isReferralExistingUsersAllowed": false,
        "isMultipleUseAllowed": false,
        "isValidWithDiscountedItem": true,
       "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
        "isSMSDisabled": false,
        "info": "Evil coupon",
        "isMultipleVouchersPerUserAllowed": true,
        "doNotResendExistingVoucher": true,
        "mutualExclusiveSeriesIds": "[10]",
        "maxVouchersPerUser": 11,
        "minDaysBetweenVouchers": 23,
        "discountValue": 500,
        "redemptionRange": "{\"dom\" : [1], \"dow\": [1], \"hours\": [1]}",
        "minBillAmount": 100,
        "maxBillAmount": 20000,
        "maxRedemptionsInSeriesPerUser": 122,
        "minDaysBetweenRedemption": 962,
        "redemptionValidFrom": "2024-05-18T00:00:00+05:30",
        "productInfo": [
            {
                "productType": "SKU",
                "productIds": [
                    30,
                    40
                ]
            },
            {
                "productType": "CATEGORY",
                "productIds": [
                    50,
                    60
                ]
            },
            {
                "productType": "BRAND",
                "productIds": [
                    10,
                    20
                ]
            }
        ],
        "redemptionOrgEntityDetails": [
            {
                "redemptionOrgEntityType": "CONCEPT",
                "orgEntityId": 10
            },
            {
                "redemptionOrgEntityType": "TILL",
                "orgEntityId": 20
            },
            {
                "redemptionOrgEntityType": "ZONE",
                "orgEntityId": 30
            },
            {
                "redemptionOrgEntityType": "STORE",
                "orgEntityId": 40
            }
        ],
        "targetUserDetails": {
            "validMaxUserTransactionLimit": 1,
            "validUserRegistrationStartTime": 0,
            "validUserRegistrationEndTime": 10000
        },
        "redemptionValidAfterDays": 22,
        "alphaNumeric": true,
        "randomCodeLength": 10,
        "resendMessageEnabled": true,
        "clientHandlingType": "DISC_CODE",
        "expiryStrategyType": "SERIES_EXPIRY",
        "discountType": "ABS"
    }
}
```

```
'{
    "CouponSeriesV2": {
        "maxCreate": -1,
        "maxRedeem": -1,
        "anyUser": true,
        "redemptionPerCouponMaxLimit": 3,
        "maxRedemptionsInSeriesPerUser": -1,
        "sameUserMultipleRedeem": true,
        "isMultipleUseAllowed": true,
        "isMultipleVouchersPerUserAllowed": true,
        "maxVouchersPerUser": -1,
        "minDaysBetweenVouchers": -1,
        "minDaysBetweenRedemption": -1,
        "redemptionValidFrom": "1970-01-01T05:30:00+05:30",
        "description": "LIKE1w2w2345678910",
        "discountCode": "XYZ1w23",
        "validTillDate": "2030-09-30T00:00:00+05:30",
        "validDaysFromCreation": 30,
        "expiryStrategyValue": 30,
        "isTransferrable": false,
        "isReferralExistingUsersAllowed": false,
        "isValidationRequired": false,
        "isValidWithDiscountedItem": false,
        "createdBy": 70,
        "numIssued": 0,
        "numRedeemed": 0,
        "createdOn": "2022-02-23T11:08:37+05:30",
        "lastUsed": "2022-02-23T11:08:36+05:30",
        "seriesCode": "seriesCode001",
        "smsTemplate": "Hi  {{first_name}}",
        "isSMSDisabled": false,
        "info": "LIKE12345678910",
        "doNotResendExistingVoucher": true,
        "mutualExclusiveSeriesIds": "[]",
        "storeIdsJson": "[-1]",
        "isDvsEnabled": false,
        "dvsExpiryDate": "2022-02-23T00:00:00+05:30",
        "priority": 0,
        "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
        "maxReferralsPerReferee": -1,
        "discountUpto": 0,
        "discountValue": 500,
        "dvsItems": "items",
        "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
        "minBillAmount": 0,
        "maxBillAmount": 9007199254740991,
        "redeemAtStore": "[-1]",
        "campaignId": -1,
        "tag": "LIKE12345678910",
        "sourceOrgId": -1,
        "issueToLoyalty": false,
        "redeemStoreType": "redeemable_stores",
        "offlineRedeemType": false,
        "isOldFlowEnabled": false,
        "isPreRedeemEventRequired": false,
        "termsAndConditions": "T&C apply",
        "signalRedemptionEvent": false,
        "syncToClient": false,
        "showPinCode": false,
        "numUploadedNonIssued": 0,
        "numUploadedTotal": 0,
        "redemptionValidAfterDays": 0,
        "ownedBy": "NONE",
        "ownerId": -1,
        "ownerValidity": 0,
        "alphaNumeric": true,
        "shortCodeLength": 0,
        "randomCodeLength": 8,
        "fixedExpiryDate": 1916937000000,
        "numTotal": -1,
        "latestIssualTime": 0,
        "latestRedemptionTime": 0,
        "resendMessageEnabled": true,
        "seriesType": "UNDEFINED",
        "clientHandlingType": "DISC_CODE",
        "expiryStrategyType": "DAYS",
        "discountOn": "BILL",
        "discountType": "ABS",
        "updateProductData": false,
        "externalIssual": false
    }
}'
```

```
'{
    "CouponSeriesV2": {
        "maxCreate": -1,
        "maxRedeem": -1,
        "anyUser": true,
        "redemptionPerCouponMaxLimit": 3,
        "maxRedemptionsInSeriesPerUser": -1,
        "sameUserMultipleRedeem": true,
        "isMultipleUseAllowed": true,
        "isMultipleVouchersPerUserAllowed": true,
        "maxVouchersPerUser": -1,
        "minDaysBetweenVouchers": -1,
        "minDaysBetweenRedemption": -1,
        "redemptionValidFrom": "1970-01-01T05:30:00+05:30",
        "description": "LIKE1w2w2345678910",
        "discountCode": "XYZ1w23",
        "validTillDate": "2030-09-30T00:00:00+05:30",
        "validDaysFromCreation": 30,
        "expiryStrategyValue": 30,
        "isTransferrable": false,
        "isReferralExistingUsersAllowed": false,
        "isValidationRequired": false,
        "isValidWithDiscountedItem": false,
        "createdBy": 70,
        "numIssued": 0,
        "numRedeemed": 0,
        "createdOn": "2022-02-23T11:08:37+05:30",
        "lastUsed": "2022-02-23T11:08:36+05:30",
        "seriesCode": "seriesCode001",
        "smsTemplate": "Hi  {{first_name}}",
        "isSMSDisabled": false,
        "info": "LIKE12345678910",
        "doNotResendExistingVoucher": true,
        "mutualExclusiveSeriesIds": "[]",
        "storeIdsJson": "[-1]",
        "isDvsEnabled": false,
        "dvsExpiryDate": "2022-02-23T00:00:00+05:30",
        "priority": 0,
        "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
        "maxReferralsPerReferee": -1,
        "discountUpto": 0,
        "discountValue": 500,
        "dvsItems": "items",
        "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
        "minBillAmount": 0,
        "maxBillAmount": 9007199254740991,
        "redeemAtStore": "[-1]",
        "campaignId": -1,
        "tag": "LIKE12345678910",
        "sourceOrgId": -1,
        "issueToLoyalty": false,
        "redeemStoreType": "redeemable_stores",
        "offlineRedeemType": false,
        "isOldFlowEnabled": false,
        "isPreRedeemEventRequired": false,
        "termsAndConditions": "T&C apply",
        "signalRedemptionEvent": false,
        "syncToClient": false,
        "showPinCode": false,
        "numUploadedNonIssued": 0,
        "numUploadedTotal": 0,
        "redemptionValidAfterDays": 0,
        "ownedBy": "NONE",
        "ownerId": -1,
        "ownerValidity": 0,
        "alphaNumeric": true,
        "shortCodeLength": 0,
        "randomCodeLength": 8,
        "fixedExpiryDate": 1916937000000,
        "numTotal": -1,
        "latestIssualTime": 0,
        "latestRedemptionTime": 0,
        "resendMessageEnabled": true,
        "seriesType": "UNDEFINED",
        "clientHandlingType": "DISC_CODE",
        "expiryStrategyType": "DAYS",
        "discountOn": "BILL",
        "discountType": "ABS",
        "updateProductData": false,
        "externalIssual": false
    }
}'
```

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



```
{
  "customPropertyMap": {
        "standard_terms_and_conditions": "terms and condtion"
    },
  "id": 86066,
  "orgId": 100458,
  "description": "DIWALI 10% OFF",
  "discountCode": "XYZ123",
  "validTillDate": "2021-05-09T00:00:00Z",
  "validDaysFromCreation": 30,
  "expiryStrategyValue": 1,
  "maxCreate": -1,
  "maxRedeem": -1,
  "isTransferrable": false,
  "anyUser": false,
  "sameUserMultipleRedeem": false,
  "isReferralExistingUsersAllowed": false,
  "isMultipleUseAllowed": false,
  "isValidationRequired": false,
  "isValidWithDiscountedItem": true,
  "createdBy": 75040399,
  "numIssued": 0,
  "numRedeemed": 0,
  "createdOn": "2021-05-13T11:11:42Z",
  "lastUsed": "2021-05-13T11:11:41Z",
  "seriesCode": "453163F75E8C4A2EAA2E",
  "smsTemplate": "Hi {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
  "isSMSDisabled": false,
  "info": "Evil coupon",
  "isMultipleVouchersPerUserAllowed": true,
  "doNotResendExistingVoucher": true,
  "mutualExclusiveSeriesIds": "[]",
  "storeIdsJson": "[-1]",
  "isDvsEnabled": false,
  "dvsExpiryDate": "2021-05-13T00:00:00Z",
  "priority": 0,
  "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
  "maxVouchersPerUser": 11,
  "minDaysBetweenVouchers": 23,
  "maxReferralsPerReferee": -1,
  "discountUpto": 0,
  "discountValue": 500,
  "dvsItems": "items",
  "redemptionRange": "{\"dom\" : [1], \"dow\": [1], \"hours\": [1]}",
  "minBillAmount": 100,
  "maxBillAmount": 20000,
  "redeemAtStore": "[-1]",
  "campaignId": -1,
  "tag": "DIWALI 10% OFF",
  "maxRedemptionsInSeriesPerUser": 122,
  "minDaysBetweenRedemption": 962,
  "redemptionValidFrom": "2020-11-17T00:00:00Z",
  "sourceOrgId": -1,
  "issueToLoyalty": false,
  "redeemStoreType": "redeemable_stores",
  "offlineRedeemType": false,
  "isOldFlowEnabled": false,
  "isPreRedeemEventRequired": false,
  "termsAndConditions": "T&C",
  "signalRedemptionEvent": false,
  "syncToClient": false,
  "showPinCode": false,
  "targetUserDetails": {
    "validMaxUserTransactionLimit": 1,
    "validUserRegistrationStartTime": 0,
    "validUserRegistrationEndTime": 10000
  },
  "numUploadedNonIssued": 0,
  "numUploadedTotal": 0,
  "redemptionValidAfterDays": 22,
  "ownedBy": "NONE",
  "ownerId": -1,
  "ownerValidity": 0,
  "alphaNumeric": true,
  "shortCodeLength": 0,
  "randomCodeLength": 10,
  "fixedExpiryDate": 1620518400000,
  "numTotal": 0,
  "latestIssualTime": 0,
  "latestRedemptionTime": 0,
  "resendMessageEnabled": true,
  "seriesType": "UNDEFINED",
  "clientHandlingType": "DISC_CODE",
  "expiryStrategyType": "SERIES_EXPIRY",
  "discountOn": "BILL",
  "discountType": "ABS",
  "updateProductData": false,
  "externalIssual": false,
  "warnings": []
}
```

```
{
  "customPropertyMap": {
        "standard_terms_and_conditions": "terms and condtion"
    },
  "id": 86066,
  "orgId": 100458,
  "description": "DIWALI 10% OFF",
  "discountCode": "XYZ123",
  "validTillDate": "2021-05-09T00:00:00Z",
  "validDaysFromCreation": 30,
  "expiryStrategyValue": 1,
  "maxCreate": -1,
  "maxRedeem": -1,
  "isTransferrable": false,
  "anyUser": false,
  "sameUserMultipleRedeem": false,
  "isReferralExistingUsersAllowed": false,
  "isMultipleUseAllowed": false,
  "isValidationRequired": false,
  "isValidWithDiscountedItem": true,
  "createdBy": 75040399,
  "numIssued": 0,
  "numRedeemed": 0,
  "createdOn": "2021-05-13T11:11:42Z",
  "lastUsed": "2021-05-13T11:11:41Z",
  "seriesCode": "453163F75E8C4A2EAA2E",
  "smsTemplate": "Hi {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
  "isSMSDisabled": false,
  "info": "Evil coupon",
  "isMultipleVouchersPerUserAllowed": true,
  "doNotResendExistingVoucher": true,
  "mutualExclusiveSeriesIds": "[]",
  "storeIdsJson": "[-1]",
  "isDvsEnabled": false,
  "dvsExpiryDate": "2021-05-13T00:00:00Z",
  "priority": 0,
  "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
  "maxVouchersPerUser": 11,
  "minDaysBetweenVouchers": 23,
  "maxReferralsPerReferee": -1,
  "discountUpto": 0,
  "discountValue": 500,
  "dvsItems": "items",
  "redemptionRange": "{\"dom\" : [1], \"dow\": [1], \"hours\": [1]}",
  "minBillAmount": 100,
  "maxBillAmount": 20000,
  "redeemAtStore": "[-1]",
  "campaignId": -1,
  "tag": "DIWALI 10% OFF",
  "maxRedemptionsInSeriesPerUser": 122,
  "minDaysBetweenRedemption": 962,
  "redemptionValidFrom": "2020-11-17T00:00:00Z",
  "sourceOrgId": -1,
  "issueToLoyalty": false,
  "redeemStoreType": "redeemable_stores",
  "offlineRedeemType": false,
  "isOldFlowEnabled": false,
  "isPreRedeemEventRequired": false,
  "termsAndConditions": "T&C",
  "signalRedemptionEvent": false,
  "syncToClient": false,
  "showPinCode": false,
  "targetUserDetails": {
    "validMaxUserTransactionLimit": 1,
    "validUserRegistrationStartTime": 0,
    "validUserRegistrationEndTime": 10000
  },
  "numUploadedNonIssued": 0,
  "numUploadedTotal": 0,
  "redemptionValidAfterDays": 22,
  "ownedBy": "NONE",
  "ownerId": -1,
  "ownerValidity": 0,
  "alphaNumeric": true,
  "shortCodeLength": 0,
  "randomCodeLength": 10,
  "fixedExpiryDate": 1620518400000,
  "numTotal": 0,
  "latestIssualTime": 0,
  "latestRedemptionTime": 0,
  "resendMessageEnabled": true,
  "seriesType": "UNDEFINED",
  "clientHandlingType": "DISC_CODE",
  "expiryStrategyType": "SERIES_EXPIRY",
  "discountOn": "BILL",
  "discountType": "ABS",
  "updateProductData": false,
  "externalIssual": false,
  "warnings": []
}
```

```
{
    "id": 698948,
    "orgId": 100737,
    "description": "LIKE1w2w2345678910",
    "discountCode": "XYZ1w23",
    "validTillDate": "2030-09-29T00:00:00Z",
    "validDaysFromCreation": 30,
    "expiryStrategyValue": 30,
    "maxCreate": -1,
    "maxRedeem": -1,
    "isTransferrable": false,
    "anyUser": true,
    "sameUserMultipleRedeem": true,
    "isReferralExistingUsersAllowed": false,
    "isMultipleUseAllowed": true,
    "isValidationRequired": false,
    "isValidWithDiscountedItem": false,
    "createdBy": 75154383,
    "numIssued": 0,
    "numRedeemed": 0,
    "createdOn": "2025-02-04T08:52:56Z",
    "lastUsed": "2025-02-04T08:52:55Z",
    "seriesCode": "fEDH0qD8rr",
    "smsTemplate": "Hi  {{first_name}}",
    "isSMSDisabled": false,
    "info": "LIKE12345678910",
    "isMultipleVouchersPerUserAllowed": true,
    "doNotResendExistingVoucher": true,
    "mutualExclusiveSeriesIds": "[]",
    "storeIdsJson": "[-1]",
    "isDvsEnabled": false,
    "dvsExpiryDate": "2025-02-04T00:00:00Z",
    "priority": 0,
    "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
    "maxVouchersPerUser": -1,
    "minDaysBetweenVouchers": -1,
    "maxReferralsPerReferee": -1,
    "discountUpto": 0,
    "discountValue": 500,
    "dvsItems": "items",
    "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
    "minBillAmount": 0,
    "maxBillAmount": 9007199254740991,
    "redeemAtStore": "[-1]",
    "campaignId": -1,
    "tag": "LIKE12345678910",
    "maxRedemptionsInSeriesPerUser": -1,
    "minDaysBetweenRedemption": -1,
    "redemptionValidFrom": "1970-01-01T00:00:00Z",
    "sourceOrgId": -1,
    "issueToLoyalty": false,
    "redeemStoreType": "redeemable_stores",
    "offlineRedeemType": false,
    "isOldFlowEnabled": false,
    "isPreRedeemEventRequired": false,
    "termsAndConditions": "T&C apply",
    "signalRedemptionEvent": false,
    "syncToClient": false,
    "showPinCode": false,
    "numUploadedNonIssued": 0,
    "numUploadedTotal": 0,
    "redemptionValidAfterDays": 0,
    "ownedBy": "NONE",
    "ownerId": -1,
    "ownerValidity": 0,
    "alphaNumeric": true,
    "shortCodeLength": 0,
    "randomCodeLength": 8,
    "fixedExpiryDate": 1916870400000,
    "numTotal": 0,
    "latestIssualTime": 0,
    "latestRedemptionTime": 0,
    "resendMessageEnabled": true,
    "redemptionPerCouponMaxLimit": 3,
    "seriesType": "UNDEFINED",
    "clientHandlingType": "DISC_CODE",
    "expiryStrategyType": "DAYS",
    "discountOn": "BILL",
    "discountType": "ABS",
    "externalIssual": false,
    "updateProductData": false,
    "warnings": []
}
```

```
{
    "id": 698948,
    "orgId": 100737,
    "description": "LIKE1w2w2345678910",
    "discountCode": "XYZ1w23",
    "validTillDate": "2030-09-29T00:00:00Z",
    "validDaysFromCreation": 30,
    "expiryStrategyValue": 30,
    "maxCreate": -1,
    "maxRedeem": -1,
    "isTransferrable": false,
    "anyUser": true,
    "sameUserMultipleRedeem": true,
    "isReferralExistingUsersAllowed": false,
    "isMultipleUseAllowed": true,
    "isValidationRequired": false,
    "isValidWithDiscountedItem": false,
    "createdBy": 75154383,
    "numIssued": 0,
    "numRedeemed": 0,
    "createdOn": "2025-02-04T08:52:56Z",
    "lastUsed": "2025-02-04T08:52:55Z",
    "seriesCode": "fEDH0qD8rr",
    "smsTemplate": "Hi  {{first_name}}",
    "isSMSDisabled": false,
    "info": "LIKE12345678910",
    "isMultipleVouchersPerUserAllowed": true,
    "doNotResendExistingVoucher": true,
    "mutualExclusiveSeriesIds": "[]",
    "storeIdsJson": "[-1]",
    "isDvsEnabled": false,
    "dvsExpiryDate": "2025-02-04T00:00:00Z",
    "priority": 0,
    "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
    "maxVouchersPerUser": -1,
    "minDaysBetweenVouchers": -1,
    "maxReferralsPerReferee": -1,
    "discountUpto": 0,
    "discountValue": 500,
    "dvsItems": "items",
    "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
    "minBillAmount": 0,
    "maxBillAmount": 9007199254740991,
    "redeemAtStore": "[-1]",
    "campaignId": -1,
    "tag": "LIKE12345678910",
    "maxRedemptionsInSeriesPerUser": -1,
    "minDaysBetweenRedemption": -1,
    "redemptionValidFrom": "1970-01-01T00:00:00Z",
    "sourceOrgId": -1,
    "issueToLoyalty": false,
    "redeemStoreType": "redeemable_stores",
    "offlineRedeemType": false,
    "isOldFlowEnabled": false,
    "isPreRedeemEventRequired": false,
    "termsAndConditions": "T&C apply",
    "signalRedemptionEvent": false,
    "syncToClient": false,
    "showPinCode": false,
    "numUploadedNonIssued": 0,
    "numUploadedTotal": 0,
    "redemptionValidAfterDays": 0,
    "ownedBy": "NONE",
    "ownerId": -1,
    "ownerValidity": 0,
    "alphaNumeric": true,
    "shortCodeLength": 0,
    "randomCodeLength": 8,
    "fixedExpiryDate": 1916870400000,
    "numTotal": 0,
    "latestIssualTime": 0,
    "latestRedemptionTime": 0,
    "resendMessageEnabled": true,
    "redemptionPerCouponMaxLimit": 3,
    "seriesType": "UNDEFINED",
    "clientHandlingType": "DISC_CODE",
    "expiryStrategyType": "DAYS",
    "discountOn": "BILL",
    "discountType": "ABS",
    "externalIssual": false,
    "updateProductData": false,
    "warnings": []
}
```

> 📘NOTE:There is no daily limit on API requests for creating coupon series. However, it's important to manage a balanced approach to maintain the performance. Issuance restrictions can be controlled through the coupon issuance settings.

## 📘NOTE:

NOTE:

There is no daily limit on API requests for creating coupon series. However, it's important to manage a balanced approach to maintain the performance. Issuance restrictions can be controlled through the coupon issuance settings.

`Try It!`