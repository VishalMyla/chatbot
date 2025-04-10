# Get customer detailsget

> ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

Retrieve details of a specific loyalty customer such as loyalty information, subscription status, 10 recent transactions, active coupons, recent store interactions, custom fields, extended fields, and customer’s unique ID. To fetch the details for customers in bulk, add the identification details separated by a comma.

> 📘Note: UseV2 Get Customer Details (lookup) APIto retrieve:-Customer details across all the groups of the customer.-Details of a specific user group.-Account ID for sources with multiple accounts.-Customer status details.-Alternate currency details.

## 📘Note: UseV2 Get Customer Details (lookup) APIto retrieve:

Note: UseV2 Get Customer Details (lookup) APIto retrieve:

-Customer details across all the groups of the customer.-Details of a specific user group.-Account ID for sources with multiple accounts.-Customer status details.-Alternate currency details.

# API endpoint

```
curl --location 'https://eu.api.capillarytech.com.capillarytech.com/v1.1/customer/get?format=json&email=sai.ishina9%40gmail.com%2Csai.ishina95%40gmail.com%2C9478341389%40pixar.com' \
--header 'X-CAP-CLIENT-COUNTRYCODE: 1' \
--header 'Authorization: Basic cHVuLjAxOjIwMNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw'
```

```
curl --location 'https://eu.api.capillarytech.com.capillarytech.com/v1.1/customer/get?format=json&email=sai.ishina9%40gmail.com%2Csai.ishina95%40gmail.com%2C9478341389%40pixar.com' \
--header 'X-CAP-CLIENT-COUNTRYCODE: 1' \
--header 'Authorization: Basic cHVuLjAxOjIwMNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw'
```

```
curl --location 'https://eu.api.capillarytech.com/v1.1/customer/get?format=json&id=387020208%2C3879773' \
--header 'X-CAP-CLIENT-COUNTRYCODE: 1' \
--header 'Authorization: Basic cHVjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw'
```

```
curl --location 'https://eu.api.capillarytech.com/v1.1/customer/get?format=json&id=387020208%2C3879773' \
--header 'X-CAP-CLIENT-COUNTRYCODE: 1' \
--header 'Authorization: Basic cHVjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw'
```

# Request Query Parameters

Any of the identifiers are mandatory.

| Parameter | Type | Description |

| --- | --- | --- |

| id | int | Unique user ID of the customer whose details you want to fetch. |

| email | string | Email ID of the customer. |

| external_id | string | External ID of the customer. |

| card_external_id | string | External ID of the card associated with the customer. |

| number | int | Unique transaction number that want to fetch. |

| store_code | string | Fetch the transactions of a specific store. Pass the store code. |

| till_code | string | Fetch the transactions of a specific TILL. Pass the respective TILL code. |

| amount | long | Filter transactions of a specific amount. |

| date | date | Filter transactions of a specific date. Pass the date inYYYY-MM-DDformat. |

| type | string | Filter transactions of a specific type. Values:REGULAR,NOT_INTERESTED,RETURN,NOT_INTERESTED_RETURN,MIXED,NI_MIXED,ALL(to retrieve any transaction type, for mixed or NI mixed, it retrieves both transaction and return details). By default it shows the details of regular transaction. |

| tenders | boolean | Passtrueto retrieve transaction details. |

| credit_notes | boolean | Passtrueto retrieve credit notes. |

| user_id | boolean | Passtrueto retrieve unique ID of the customer in response. |

| coupon_limit | int | Limits the number of coupon interactions (issued, redeemed, and expired). For example, setting it to 5 retrieves the five most recent coupon interactions. |

| coupon_offset | int | Retrieves the next set of coupons according to the issuance sequence. For instance, if a customer has received 10 coupons to date, setting this parameter to 6 will return details of the 7th to 10th coupons, ignoring the first 6. |

| coupon_order_by | enum | Determines the basis for ordering the coupon history. Possible values:created_date(default),created_by,valid_till. |

| coupon_sort_order | enum | Orders coupons in ascending or descending order based on thecoupon_order_byvalue. Possible values:asc,desc(default). |

| next_slab | - | Returns details of the customer's next loyalty tier, including next slab, next slab serial number, next slab description, trackers value (for tracker-based strategies), and current NPS status. |

| slab_history | boolean | Prerequisite: Setmlp=trueto retrieve the details.The slab_history parameter returns the customer's loyalty tier change history with the following information:- From the slab/tier to which the user is upgraded or downgraded- Associated store details- Type of change. Upgrade or Downgrade- The expiry date of the slab/tier- The date on which the tier/slab got changed- Associated program id |

| registered_store | - | Returns the store where the customer registered. This is returned by default. |

| registered_till | - | Returns the specific store-TILL where the customer registered. This is returned by default. |

| fraud_details | - | Returns the customer's fraud details. This is returned by default. |

| ndnc_status | - | Returns the NDNC/DND status of the customer’s registered mobile number. |

| optin_status | - | Returns the services (SMS/email) the customer has opted in or out of. |

| expiry_schedule | - | Returns a summary of the customer's points expiry details, including the number of points set to expire, the program ID, and the date and time of expiry. |

| expired_points | - | Returns details of the customer's expired points. |

| points_summary | - | Returns the customer's points issuance and redemption history. |

| promotion_points | - | Returns the customer's promotional points issuance and redemption history, including the issuing store and expiry dates for each set of issued points. Up to 1000 results can be retrieved (maximum limit). |

| membership_retention_criteria | - | Returns the criteria set for membership or tier retention, typically for membership-based loyalty programs. |

| tier_upgrade_criteria | - | Returns the tier upgrade criteria configured in thetier_update_criteriaobject of the response payload. This is supported only for tier upgrade strategies based on Lifetime Points, Lifetime Purchases, or Current Points, but not for tracker-based strategies. It is not available if the customer is in the highest tier. |

| mlp | boolean | Retrieves the customer's loyalty information for each loyalty program, including details on the gaps to upgrade and renew. This is applicable only for brands with multiple loyalty programs (MLP). |

| gap_to_upgrade_for | int | Prerequisite:Make sure that you set themlp=truequery parameter to retrieve the details.This parameter indicates the additional purchases, points, visits, or tracker value required for a customer to upgrade to the next tier. It calculates this based on a specified number of days from the current date. Use the parameter as follows:- Set it to 0 to determine the gap for the current day.- Set it to 1 to forecast the next day.- Set it to 30 for a projection 30 days from the current day.Negative values are not supported. |

| gap_to_renew_for | int | Prerequisite:Make sure that you set themlp=truequery parameter to retrieve the details.This parameter indicates the additional purchases, visits, points, or tracker value required for a customer to renew their tier after a specified number of days from the current date. Use the parameter as follows:-Set it to 0 to determine the renewal value for the current day.-Set it to 1 to forecast the next day.-Set it to 30 for a projection 30 days from the current day.Negative values are not supported. |

| user_group | - | Retrieves details of the user group associated with the user, if available. |

| customer_image | - | Retrieves the customer’s profile image. |

| transactions | - | Retrieves the customer's transaction details. |

| subscriptions | - | Retrieves the customer's subscription details. |

| segments | - | Retrieves details of the customer's segments, if applicable. Segments are logical groupings of customers based on one or more parameters. |

| member_care_access | - | For admin users, shows customers that are active within the vicinity of that user. |

| card_details | - | Retrieves details of all the customer's cards. |

| delayed_accrual | - |  |

| coupon_active | - |  |

| basic | - |  |

| program_id | int |  |

| coupon_offer | int | Default value is 0. |

| coupon_org_entity_type | string |  |

| coupon_org_entity_value | string |  |

| coupon_status | string |  |

| program_summary | boolean | If enabled, retrieve the details of the programs the customer is associated with. |



`YYYY-MM-DD`

`REGULAR`

`NOT_INTERESTED`

`RETURN`

`NOT_INTERESTED_RETURN`

`MIXED`

`NI_MIXED`

`ALL`

`true`

`true`

`true`

`created_date`

`created_by`

`valid_till`

`coupon_order_by`

`asc`

`desc`

`mlp=true`

`tier_update_criteria`

`mlp=true`

`mlp=true`

Note: You can retrieve details of a customer using customer ID, email or external_id.

> 📘If you attempt to retrieve data of any deleted customer after a successful PII deletion, you will receive the following response:"message": "Customer is deleted after PII delete request"

## 📘

If you attempt to retrieve data of any deleted customer after a successful PII deletion, you will receive the following response:

"message": "Customer is deleted after PII delete request"

```
"message": "Customer is deleted after PII delete request"
```

# Additional Header

| Parameter | Description |

| --- | --- |

| language | Specify the ISO language code to get transaction level extended field details in your preferred language (other than English). For example,zhfor Chinese,idfor Indonesian,arfor Arabic |



`zh`

`id`

`ar`

# Response parameter

| Parameter | Description |

| --- | --- |

| status.success | Indicates the success of the operation |

| status.code | The code representing the status of the operation |

| status.message | The message describing the status of the operation |

| status.total | The total count in the response |

| status.success_count | The count of successful operations |

| customer.firstname | The first name of the customer |

| customer.lastname | The last name of the customer |

| customer.mobile | The mobile number of the customer |

| customer.email | The email address of the customer |

| customer.external_id | An external identifier for the customer |

| customer.lifetime_points | The total lifetime points accumulated by the customer |

| customer.lifetime_purchases | The total lifetime purchases made by the customer |

| customer.loyalty_points | The current loyalty points of the customer |

| customer.current_slab | The current slab of the customer in the loyalty program |

| customer.registered_on | The date and time when the customer registered |

| customer.updated_on | The date and time when the customer's information was last updated |

| customer.type | The type of customer |

| customer.source | The source through which the customer was acquired |

| customer.registered_by | The individual who registered the customer |

| registered_store.code | The code of the store where the customer was registered |

| registered_store.name | The name of the store where the customer was registered |

| registered_till.code | The code of the till used to register the customer |

| registered_till.name | The name of the till used to register the customer |

| fraud_details.status | The fraud status of the customer |

| extended_fields.field (gender) | The gender of the customer |

| extended_fields.field (city) | The city where the customer resides |

| extended_fields.field (dob) | The date of birth of the customer |

| item_status.success | Indicates the success of the customer item operation |

| item_status.code | The code representing the status of the customer item operation |

| item_status.message | The message describing the status of the customer item operation |

| programs_list | Includes the list of programs the customer is associated with. This will be available only ifprogram_summaryis set totrue. |

| program | Includes the details of the program such as program ID, program name, program description and more. |

| slab_history | Includes details of tier/slab change events. Each object in the array represents a single instance of a slab (tier) upgrade or change, with the most recent change typically listed first. |

| -to | The slab to which the user got upgraded or downgraded. |

| -from | The slab from which the user got upgraded or downgraded. |

| -store | Associated store details. |

| - type | Type of slab change. Downgrade or Upgrade. |

| -to_tier_expiry_date | Expiry date of the tier to which the customer has moved, inYYYY-MM-DD HH:MM:SSformat. |

| -from_tier_expiry_date | Expiry date of the customer's previous tier, before the tier change occurred, inYYYY-MM-DD HH:MM:SSformat. |

| -changed_on | The date on which slab was changed, inYYYY-MM-DD HH:MM:SSformat. |

| -notes | Additional notes, if any. |

| -program_id | Associated loyalty program ID. |

| points_summaries | Array containing the details of the loyalty points. |

| -points_summary | A list of individual points summaries. |

| --programId | Unique ID of the loyalty program associated with the points summary. |

| --redeemed | Number of points redeemed by the customer in the program. |

| --expired | Number of points that have expired in the program. |

| --returned | Number of points that were initially issued but later reversed or returned to the customer’s account due to specific actions, such as product returns. |

| --adjusted | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if debited points are more than credited, and positive if credited points are more than debited. |

| --lifetimePoints | Total loyalty points earned by the customer to date. |

| --loyaltyPoints | Current loyalty points available for use. |

| --cumulativePurchases | Total purchase amount of the customer, associated with the current loyalty program. |

| --currentSlab | Current tier of the customer in the loyalty program. |

| --currentSlabDescription | Description of the current tier as saved in the loyalty program. |

| --nextSlab | Next slab or tier to which the customer can upgrade to. |

| --nextSlabSerialNumber | Serial number of the next tier. The lowest tier will have 1, succeeding tier will have 2 and so on. |

| --nextSlabDescription | Description of the next tier as saved in the loyalty program. |

| --slabSNo | Serial number of the current tier of the customer. The lowest tier will have 1, succeeding tier will have 2 and so on. |

| --slabExpiryDate | Expiry date of the current loyalty tier of the customer in ISOYYYY-MM-DD HH:MM:SSformat. |

| --totalPoints | Total points earned by the customer in a loyalty program. |

| --delayed_points | Points issued to customers at a later date from issual. For more information on delayed points, refer to thePoints Delayed Accrualdocumentation. |

| --delayed_returned_points | Delayed points that were reversed or returned to the customer’s account due to specific actions, such as product returns. |

| --total_available_points | Total points available for redemption. |

| --total_returned_points | Total points that were initially issued but later reversed or returned to the customer’s account due to specific actions, such as product returns. |

| --program_title | Title of the loyalty program. |

| --program_description | Description of the loyalty program. |

| --program_points_to_currency_ratio | Ratio of points to currency. It indicates how many points are equivalent to one unit of currency. |

| --linked_partner_programs | Details of linkedpartner programs. |

| ---linked_partner_program | A list of linked partner programs, if any. |

| --gap_to_upgrade | Gap to upgrade to the next slab. It is the additional purchases, points, visits, or tracker value required for a customer to upgrade to the next tier. |

| ---custom_expression | Logical condition that defines the criteria for upgrade.Example:((A AND B) OR C)A and B must both be true, OR C alone must be true for the condition to be satisfied.Example usage: If A = Total Purchases > 5000, B = Visits > 3, and C = Points Earned > 2000, the customer qualifies for an upgrade if they either:Made purchases > 5000 and visit more than 3 times, orEarned more than 2000 points.Visible only if custom expression is set.For more information on custom conditions, refer to theTier Upgradedocumentation. |

| ---expression_relation | Structured representation of the conditions in the custom_expression.Example:[[1, 2], [3]]Visible only if custom expression is set. |

| ---upgrade_strategy | Provides the set of rules or conditions that defines how a customer progresses to a higher tier in a loyalty program. |

| ----upgrade_based_on | Parameter using which theupgrade conditionis determined.Example:CUMULATIVE_PURCHASES;TRACKER_VALUE_BASED,CURRENT_POINTS |

| ----upgrade_entity_identifers | Array containing details of the tracker, if any. Visible in case oftracker based upgrade. |

| -----tracker_name | Name of the tracker.Example:amountTracker |

| -----tracker_type | Entity tracked, such as transaction amount, line-item count, or customer visits.Example:BILL_AMOUNT |

| -----tracker_mode | Method used to evaluate tracker values over time,Example:MOVING_WINDOW,CYCLIC_WINDOW,CALENDAR_BASED_CYCLIC_WINDOW, orTIER_CHANGE_WINDOW. |

| -----tracker_case_name | Name of the specific tracker case.Example:amtTrack. |

| -----tracker_case_period_type | Specifies the duration type for evaluating the tracker case, such as days, months, or calendar cycles.Example:DAYS |

| -----tracker_case_period_value | Value of the tracker case period.Example:30 |

| ----upgrade_threshold | Threshold value required for an upgrade.Example:10000points. |

| ----customer_upgrade_entity_values | Array containing the current values related to the customer’s upgrade. |

| -----current_value | Current value attained by the customer.Example:9786points. |

| -----gap_to_upgrade | Additional value required for the upgrade.Example:15214points (threshold value minus current value) |

| -----value_valid_upto | Date until which the value is valid, inYYYY-MM-DDformat.Example:2025-05-06. |

| --gap_to_renew | Set of rules or conditions required for tier renewal for the customer in a loyalty program. |

| ---tier_expiry_date | Expiry date of the customer’s current tier, inYYYY-MM-DDformat.Example:2024-12-31. |

| ---renew_confirmed | Indicates if the tier renewal is confirmed.Values:trueorfalse. |

| ---custom_expression | Logical condition that defines the criteria for renewal.Example:((A AND B) OR C)A and B must both be true, OR C alone must be true for the condition to be satisfied.Example usage: If A = Total Purchases > 5000, B = Visits > 3, and C = Points Earned > 2000, the customer qualifies for an upgrade if they either:Made purchases > 5000 and visited more than 3 times, orEarned more than 2000 points.Visible only if custom expression is set.For more information on custom conditions, refer to theTier Renewaldocumentation. |

| ---expression_relation | Structured representation of the conditions in the custom_expression.Example:[[1, 2], [3]]Visible only if custom expression is set. |

| ---renew_strategy | Array containing details of the rules or conditions for tier renewal. |

| ----renew_based_on | Specifies therenewal strategy.Example:VISITS,PURCHASE,POINTS, orTRACKER. |

| ----renew_entity_identifiers | Array containing details of the tracker. Visible in case oftracker based renewal. |

| ----renew_threshold | Threshold value required by the customer to renew the tier.Example:5.0for store visits,10for purchases. |

| ----customer_renew_entity_value | Current value reached by the customer.Example:1store visit or123points |

| ----customer_gap_to_renew_value | Additional value required for the tier renewal.Example:4store visits,10purchases or1877points. |



`program_summary`

`true`

`YYYY-MM-DD HH:MM:SS`

`YYYY-MM-DD HH:MM:SS`

`YYYY-MM-DD HH:MM:SS`

`YYYY-MM-DD HH:MM:SS`

[Points Delayed Accrual](/docs/points#configure-points-delayed-accrual)

[partner programs](/reference/partner-program)

`((A AND B) OR C)`

[Tier Upgrade](/docs/tier-upgrade#3-custom-condition)

`[[1, 2], [3]]`

[upgrade condition](/docs/tier-upgrade)

`CUMULATIVE_PURCHASES`

`TRACKER_VALUE_BASED`

`CURRENT_POINTS`

[tracker based upgrade](/docs/tier-upgrade#4-trackers)

`amountTracker`

`BILL_AMOUNT`

`MOVING_WINDOW`

`CYCLIC_WINDOW`

`CALENDAR_BASED_CYCLIC_WINDOW`

`TIER_CHANGE_WINDOW`

`amtTrack`

`DAYS`

`30`

`10000`

`9786`

`15214`

`YYYY-MM-DD`

`2025-05-06`

`YYYY-MM-DD`

`2024-12-31`

`true`

`false`

`((A AND B) OR C)`

[Tier Renewal](/docs/tier-downgrade-renewal)

`[[1, 2], [3]]`

[renewal strategy](/docs/tier-downgrade-renewal)

`VISITS`

`PURCHASE`

`POINTS`

`TRACKER`

[tracker based renewal](/docs/tier-downgrade-renewal#4-trackers)

`5.0`

`10`

`1`

`123`

`4`

`10`

`1877`

`Try It!`