# Rewards Fact Tables

Rewards are perks or benefits offered to customers as part of a loyalty program or promotional campaign. These can be in the form of discounts, free products, points, cashback, or exclusive offers, given to encourage customer engagement, repeat purchases, or brand loyalty.

Given below are the fact tables associated with the rewards data:

- reward_issue_fact

- reward_payment_currency_fact

- reward_transaction_fact

- reward_transaction_customfield_fact

- reward_transaction_fullfillment_fact

# Reward Issue Fact

This table captures details of rewards issued to customers. It includes unique identifiers for brands/ organisations, and promotions, points deducted, vouchers issued, and associated expiry dates within the Intouch system.

Databricks Table Name:reward_issue_fact

Reward Issue Fact - Entity Relationship Diagram (ERD)

> 📘All the rewards fact tables share the same ERD.

## 📘All the rewards fact tables share the same ERD.

All the rewards fact tables share the same ERD.

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

Reward Issue Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| brand_id | bigint | Unique identifier of the brand. | _ |

| Id | bigint | Unique identifier for the table. | _ |

| intouch_points_deducted | string | Points deducted for the reward in the Intouch system. | _ |

| intouch_user_id | bigint | Intouch user ID of the customer. | _ |

| intouch_voucher | string | Voucher associated with the reward within the Intouch system. | _ |

| intouch_voucher_expiry | string | Date and time for the voucher expiry in the Intouch system. | _ |

| issued_ref_id | string | Reference id for cart promotion or gift voucher. | _ |

| org_id | bigint | Identifier associated with the org. | _ |

| points_ref_id | bigint | Reference id for points-related transactions, and is null for transactions that are free or paid with cash. | _ |

| reward_promotion_link_id | bigint | Identifier for the promotion that is linked to the reward. | _ |

| vendor_reward | string | Reward provided by the vendor. | _ |

| dim_catalog_promotion_id | bigint | Identifier for the catalogue promotion. | rewards_catalogue_promotion |

| dim_event_date_id | bigint | Date when the reward is issued. It is in the YYYYMMDD format. | date |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. It is in the YYYYMMDD format. | date |

| dim_latest_updated_time_id | bigint | Identifier for the time when the data corresponding to this event/ row is changed in the source table. | time |

| dim_reward_id | bigint | Identifier of the reward. | rewards |

| dim_reward_issue_update_on_id | bigint | Date when the reward issue table is updated.  It is in the YYYYMMDD format. | time |

| transaction_id | bigint | Identifier of the transaction. |  |

| year | integer | Year of the reward issual. | _ |



[rewards_catalogue_promotion](/docs/dimension-tables#catalog-promotion-reward_catalog_promotion)

[date](/docs/dimension-tables#date)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[rewards](/docs/dimension-tables#rewards-rewards)

[time](/docs/dimension-tables#time)

# Reward Payment Currency Fact

Brands can issue rewards individually or in bulk. This table captures the transaction event where a reward is issued, including themode of paymentused for redeeming the reward. It has entries based on the type of reward and the type of mode of payment.

Customers can purchase rewards with cash, fixed points, variable points, or a combination of both. So, if a customer chooses to use points plus cash, the system issues rewards based on redeeming both cash and points from the customer's wallet. In this case, even for a single reward, two entries will be made in this fact table, as it would capture the total number of points needed and the total amount of cash needed for the reward issual, as separate entries.

Databricks Table Name:reward_payment_currency_fact

Reward Payment Currency Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| auto_update_time | bigint | Date and time when the reward_transaction source table was last updated. It is in the Unix timestamp format. | - |

| auto_update_time_redemption | bigint | Date and time when the corresponding record in the redemption source table was last updated. It is in the Unix timestamp format. | - |

| dim_event_date_id | bigint | Date on which the issue reward transaction occurred. It is in the YYYYMMDD format. | date |

| dim_event_time_id | bigint | Identifier for the time when the issue reward transaction occurred. | time |

| dim_event_user_id | bigint | Identifier for the customer associated with the reward. | users |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. It is in the YYYYMMDD format. | date |

| dim_latest_updated_time_id | bigint | Identifier for the time when the data corresponding to this event/ row is changed in the source table. | time |

| dim_owner_id | string | Identifier for the owner module to which the reward belongs. They include journeys, goodwill, loyalty program, milestone, and campaigns. | reward_owner_dim |

| dim_owner_type_id | int | Identifier for the owner module type. Possible values of owner module types, in the linked dimension table include journeys, goodwill, loyalty program, milestone, and campaigns. | reward_owner_standard_dim |

| dim_payment_config_currency_type_id | bigint | Identifier for the currency type used in the payment configuration. Possible values of the currency types, in the linked dimension table include - conv_ratio, points, and cash. | reward_payment_config_currency_dim |

| dim_payment_config_id | bigint | Identifier for thepayment configurationused by the customer to redeem rewards. Possible values of the payment configurations, in the linked dimension table include - cash, conv_ratio, free, points, and points_cash. | reward_payment_config_dim |

| dim_redemption_type_identifier_id | bigint | Identifier for the redemption type associated with the reward. Possible values of the redemption types, in the linked dimension table include: games, auction, cart_promotion, cash_wallet, vendor_only_reward, voucher, cash_back, intouch_reward, physical_reward, charity, miles, gift_card, sweepstakes, vendor_intouch_reward, card_disc. | reward_redemption_types_dim |

| dim_reward_id | bigint | Identifier for the reward. | rewards |

| dim_vendor_id | bigint | Identifier for the vendor associated with the reward transaction. | reward_vendor_dim |

| dim_vendor_redemption_id | bigint | Identifier for the redemption transaction from the vendor. | reward_vendor_redemption_dim |

| group_loyalty_redemption | int | Identifier forgroup loyalty redemption. | - |

| id | bigint | Unique identifier for the table record. It is the primary key for the table. | - |

| intouch_series_id | string | Identifier for the series within the Intouch system. It can be the promotion id or coupons series id. | - |

| issue_reference_id | string | Reference id for cart promotion or gift voucher. | - |

| payment_config_currency_value | double | The monetary value associated with the payment configuration. It can be either the cash value or the number of points. | - |

| quantity | bigint | Number of rewards issued in the transaction. For instance, if two units of Reward Type A and three units of Reward Type B are issued, there will be two entries: one with a quantity of two and another with a quantity of three. | - |

| redemption_id | bigint | Internal identifier for the redemption transaction. | - |

| request_id | string | Unique identifier for the request related to the reward issuance. | - |

| status_code | string | Status code indicating the result of the reward issuance process. | - |

| status_message | string | Message describing the status of the reward issuance, such as Reward issued successfully, or Promotion issued successfully. | - |

| success | int | Indicator for whether the reward issuance was successful (1 for success/ partial success, 0 for failure). | - |

| tender_details_id | bigint | Identifier for payment details where the currency is CASH. Although Capillary does not process this payment method, it stores related information (such as credit card usage) for reference. | - |

| user_payment_config_currency_id | bigint | Internal identifier for the user's payment configuration currency. | - |

| user_payment_config_id | bigint | Internal identifier for the user's payment configuration. | - |

| year | int | Year of the reward issual. | - |



[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[reward_owner_dim](/docs/dimension-tables#reward-owner-reward_owner_dim)

[reward_owner_standard_dim](/docs/dimension-tables#reward-owner-standard-types-reward_owner_standard_dim)

[reward_payment_config_currency_dim](/docs/dimension-tables#reward-payment-config-currency-reward_payment_config_currency_dim)

[payment configuration](/docs/pointscash-journeys-in-rewards-catalog#the-supported-payment-modes-are)

[reward_payment_config_dim](/docs/dimension-tables#reward-payment-config-reward_payment_config_dim)

[reward_redemption_types_dim](/docs/dimension-tables#reward-redemption-types-reward_redemption_types_dim)

[rewards](/docs/dimension-tables#rewards-rewards)

[reward_vendor_dim](/docs/dimension-tables#reward-vendor-reward_vendor_dim)

[reward_vendor_redemption_dim](/docs/dimension-tables#reward-vendor-redemption-reward_vendor_redemption_dim)

[group loyalty redemption](/docs/redeeming-points-from-user-groups)

# Reward Transaction Fact

This table captures transaction details whenever a reward is issued. It shows one entry per reward issue transaction. Unlike the payment currency fact table entries, where there are two entries for a points plus cash redemption method, this table shows only one entry for the same transaction.

Databricks Table Name:reward_transaction_fact

Reward Transaction Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| auto_update_time | bigint | Date and time when the reward_transaction source table was last updated. It is in the Unix timestamp format. | - |

| auto_update_time_redemption | bigint | Date and time when the corresponding record in the redemption source table was last updated. It is in the Unix timestamp format. | - |

| dim_event_date_id | bigint | Date when the reward transaction occurred. It is in the YYYYMMDD format. | date |

| dim_event_time_id | bigint | Identifier for the time when the reward transaction occurred. | time |

| dim_event_user_id | bigint | Identifier for the customer associated with the reward. | users |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. It is in the YYYYMMDD format. | date |

| dim_latest_updated_time_id | bigint | Identifier for the time when the data corresponding to this event/ row is changed in the source table. | time |

| dim_owner_id | string | Identifier for the owner module to which the reward belongs. They include journeys, goodwill, loyalty program, milestone, and campaigns. | reward_owner_dim |

| dim_owner_type_id | int | Identifier for the owner module type. Possible values of owner module types, in the linked dimension table include journeys, goodwill, loyalty program, milestone, and campaigns. | reward_owner_standard_dim |

| dim_redemption_type_identifier_id | bigint | Identifier for the redemption type associated with the reward. Possible values of the redemption types, in the linked dimension table include: games, auction, cart_promotion, cash_wallet, vendor_only_reward, voucher, cash_back, intouch_reward, physical_reward, charity, miles, gift_card, sweepstakes, vendor_intouch_reward, card_disc. | reward_redemption_types_dim |

| dim_reward_id | bigint | Identifier for the reward. | rewards |

| dim_vendor_id | bigint | Identifier for the vendor associated with the reward transaction. | reward_vendor_dim |

| dim_vendor_redemption_id | bigint | Identifier for the redemption transaction from the vendor. | reward_vendor_redemption_dim |

| group_loyalty_redemption | int | Identifier forgroup loyalty redemption. | - |

| id | bigint | Unique identifier for the table record. It is the primary key for the table. | - |

| intouch_series_id | string | Identifier for the series within the Intouch system. It can be the promotion id or coupons series id or null. | - |

| issue_reference_id | string | Reference id for cart promotion or gift voucher. | - |

| quantity | bigint | Number of rewards issued in the transaction. For instance, if two units of Reward Type A and three units of Reward Type B are issued, there will be two entries: one with a quantity of two and another with a quantity of three. | - |

| redemption_id | bigint | Internal identifier for the redemption transaction. | - |

| request_id | string | Unique identifier for the request related to the reward issuance. | - |

| status_code | string | Status code indicating the result of the reward issuance process. | - |

| status_message | string | Message describing the status of the reward issuance, such as Reward issued successfully, or Promotion issued successfully. | - |

| success | int | Indicator for whether the reward issuance was successful (1 for success/ partial success, 0 for failure). | - |

| tender_details_id | bigint | Identifier for payment details where the currency is CASH. Although Capillary does not process this payment method, it stores related information (such as credit card usage) for reference. | - |

| year | int | Year of the reward is issual. | - |



[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[reward_owner_dim](/docs/dimension-tables#reward-owner-reward_owner_dim)

[reward_owner_standard_dim](/docs/dimension-tables#reward-owner-standard-types-reward_owner_standard_dim)

[reward_redemption_types_dim](/docs/dimension-tables#reward-redemption-types-reward_redemption_types_dim)

[rewards](/docs/dimension-tables#rewards-rewards)

[reward_vendor_dim](/docs/dimension-tables#reward-vendor-reward_vendor_dim)

[reward_vendor_redemption_dim](/docs/dimension-tables#reward-vendor-redemption-reward_vendor_redemption_dim)

[group loyalty redemption](/docs/redeeming-points-from-user-groups)

# Reward Transaction Custom Field Fact

This table captures the reward issue transaction along with its custom field data. Entries are based on the number of custom fields. For example, if a reward with three custom fields is issued, the table will have three entries for that single transaction, each with the same transaction ID.

Databricks Table Name:reward_transaction_customfield_fact

Reward Transaction Custom Field Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| auto_update_time | bigint | Date and time when the reward_transaction source table was last updated. It is in the Unix timestamp format. | - |

| auto_update_time_redemption | bigint | Date and time when the corresponding record in the redemption source table was last updated. It is in the Unix timestamp format. | - |

| auto_update_time_user_custom_field | bigint | Date and time when the corresponding record in the user_custom_field source table was last updated. It is in the Unix timestamp format. | - |

| custom_field_mapping_isactive | int | Indicates whether the custom field mapping is active (1 for active, 0 for inactive). | - |

| custom_field_value | string | The value associated with a custom field. | - |

| dim_custom_field_id | bigint | Identifier for the rewards custom field. | reward_custom_fields_dim |

| dim_event_date_id | bigint | Date when the reward transaction occurred. It is in the YYYYMMDD format. | date |

| dim_event_time_id | bigint | Identifier for the time when the reward transaction occurred. | time |

| dim_event_user_id | bigint | Identifier for the user associated with the reward transaction. | users |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. It is in the YYYYMMDD format. | date |

| dim_latest_updated_time_id | bigint | Identifier for the time when the data corresponding to this event/ row is changed in the source table. | time |

| dim_owner_id | string | Identifier for the module to which the reward belongs. They include journeys, goodwill, loyalty program, milestone, and campaigns. | reward_owner_dim |

| dim_owner_type_id | int | Identifier for the owner module type. Possible values of owner module types, in the linked dimension table include journeys, goodwill, loyalty program, milestone, and campaigns. | reward_owner_standard_dim |

| dim_payment_config_id | bigint | Identifier for thepayment configurationused by the customer to redeem rewards. Possible values of the payment configurations, in the linked dimension table include - cash, conv_ratio, free, points, and points_cash. | reward_payment_config_dim |

| dim_redemption_type_identifier_id | bigint | Identifier for the redemption type associated with the reward. Possible values of the redemption types, in the linked dimension table include: games, auction, cart_promotion, cash_wallet, vendor_only_reward, voucher, cash_back, intouch_reward, physical_reward, charity, miles, gift_card, sweepstakes, vendor_intouch_reward, card_disc. | reward_redemption_types_dim |

| dim_reward_id | bigint | Identifier for the reward. | rewards |

| dim_scope_id | bigint | Identifier for the scope. Scope defines where the additional custom fields will apply:- REWARD: While creating or updating a reward.- CATALOGUE_PROMOTION: While creating or updating a promotion.- ISSUE_REWARD: While issuing a reward. | reward_fulfillment_details_scope_dim |

| dim_vendor_id | bigint | Identifier for the vendor associated with the reward. | reward_vendor_dim |

| dim_vendor_redemption_id | bigint | Identifier for the vendor redemption. | reward_vendor_redemption_dim |

| group_loyalty_redemption | int | Identifier forgroup loyalty redemption. | - |

| id | bigint | Unique identifier for the table record. It is the primary key for the table. | - |

| intouch_series_id | string | Identifier for the series within the Intouch system. It can be the promotion id or coupons series id or null. | - |

| issue_reference_id | string | Reference ID for cart promotion or gift voucher. | - |

| quantity | bigint | Number of rewards issued in the transaction. For instance, if two units of Reward Type A and three units of Reward Type B are issued, there will be two entries: one with a quantity of two and another with a quantity of three. | - |

| redemption_id | bigint | Internal identifier for the redemption transaction. | - |

| request_id | string | Unique identifier for the request related to the reward issuance. | - |

| status_code | string | Status code indicating the result of the reward issuance process. | - |

| status_message | string | Message describing the status of the reward issuance, such as Reward issued successfully, or Promotion issued successfully. | - |

| success | int | Indicator for whether the reward issuance was successful (1 for success, 0 for failure). | - |

| tender_details_id | bigint | Identifier for payment details where the currency is CASH. Although Capillary does not process this payment method, it stores related information (such as credit card usage) for reference. | - |

| user_custom_field_id | bigint | Internal identifier for the user's custom field. | - |

| user_payment_config_id | bigint | Internal identifier for the user's payment configuration. | - |

| year | int | Year of the reward issual. | - |



[reward_custom_fields_dim](/docs/dimension-tables#reward-custom-fields-reward_custom_fields_dim)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[reward_owner_dim](/docs/dimension-tables#reward-owner-reward_owner_dim)

[reward_owner_standard_dim](/docs/dimension-tables#reward-owner-standard-types-reward_owner_standard_dim)

[payment configuration](/docs/pointscash-journeys-in-rewards-catalog#the-supported-payment-modes-are)

[reward_payment_config_dim](/docs/dimension-tables#reward-payment-config-reward_payment_config_dim)

[reward_redemption_types_dim](/docs/dimension-tables#reward-redemption-types-reward_redemption_types_dim)

[rewards](/docs/dimension-tables#rewards-rewards)

[reward_fulfillment_details_scope_dim](/docs/dimension-tables#reward-fulfillment-scope-reward_fulfillment_details_scope_dim)

[reward_vendor_dim](/docs/dimension-tables#reward-vendor-reward_vendor_dim)

[reward_vendor_redemption_dim](/docs/dimension-tables#reward-vendor-redemption-reward_vendor_redemption_dim)

[group loyalty redemption](/docs/redeeming-points-from-user-groups)

# Reward Transaction Fullfillment Fact

This fact table captures the issue reward event, along with the fullfillment details of the transactions. It includes multiple entries based on the number of fullfillment details.Fullfillmentdetails include statuses of the reward issual such as order confirmed, voucher issued, shipped, or delivered.

Databricks Table Name:reward_transaction_fullfillment_fact

Reward Transaction Fullfillment Fact Table

| Column Name | Data Type | Description | Linked Table |

| --- | --- | --- | --- |

| auto_update_time | bigint | Date and time when the reward_transaction source table was last updated. It is in the Unix timestamp format. | - |

| auto_update_time_fulfillment_details | bigint | Date and time when the fulfillment_details source table was last updated. It is in the Unix timestamp format. | - |

| auto_update_time_redemption | bigint | Date and time when the redemption source table was last updated. It is in the Unix timestamp format. | - |

| dim_event_date_id | bigint | Date when the reward transaction occurred. It is in the YYYYMMDD format. | date |

| dim_event_time_id | bigint | Identifier for the time when the reward transaction occurred. | time |

| dim_event_user_id | bigint | Identifier for the user associated with the reward transaction. | users |

| dim_ful_fillment_status_id | bigint | Identifier for the fulfillment status of the reward. Possible values are integers that represent statuses such as, Shipped, Delivered, Order Confirmed, On the Way, Voucher Issued, Delivering Soon, or In Transit. | reward_fulfillment_status_dim |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/ row is changed in the source table. It is in the YYYYMMDD format. | date |

| dim_latest_updated_time_id | bigint | Identifier for the time when the data corresponding to this event/ row is changed in the source table. | time |

| dim_owner_id | string | Identifier for the owner module to which the reward belongs. They include journeys, goodwill, loyalty program, milestone, and campaigns. | reward_owner_dim |

| dim_owner_type_id | int | Identifier for the owner module type. Possible values of owner module types, in the linked dimension table include journeys, goodwill, loyalty program, milestone, and campaigns. | reward_owner_standard_dim |

| dim_payment_config_id | bigint | Identifier for thepayment configurationused by the customer to redeem rewards. Possible values of the payment configurations, in the linked dimension table include - cash, conv_ratio, free, points, and points_cash. | reward_payment_config_dim |

| dim_redemption_type_identifier_id | bigint | Identifier for the redemption type associated with the reward. Possible values of the redemption types, in the linked dimension table include: games, auction, cart_promotion, cash_wallet, vendor_only_reward, voucher, cash_back, intouch_reward, physical_reward, charity, miles, gift_card, sweepstakes, vendor_intouch_reward, card_disc. | reward_redemption_types_dim |

| dim_reward_id | bigint | Identifier for the reward. | rewards |

| dim_scope_id | bigint | Identifier for the scope. Scope defines where the additional custom fields will apply:- REWARD: While creating or updating a reward.- CATALOGUE_PROMOTION: While creating or updating a promotion.- ISSUE_REWARD: While issuing a reward. | reward_fulfillment_details_scope_dim |

| dim_vendor_id | bigint | Identifier for the vendor associated with the reward transaction. | reward_vendor_dim |

| dim_vendor_redemption_id | bigint | Identifier for the redemption transaction from the vendor. | reward_vendor_redemption_dim |

| fulfillment_details_enabled | int | Indicator of whether fulfillment details tracking is enabled (1 for yes, 0 for no). | - |

| fullfillment_details_id | bigint | Identifier for the specific fulfillment details associated with the transaction. | - |

| group_loyalty_redemption | int | Identifier forgroup loyalty redemption. | - |

| id | bigint | Unique identifier for the reward transaction fulfillment record. This is the primary key of this table. | - |

| intouch_series_id | string | Identifier for the series within the Intouch system. It can be the promotion id or coupons series id or null. | - |

| issue_reference_id | string | Reference id for cart promotion or gift voucher. | - |

| quantity | bigint | Number of rewards issued in the transaction. For instance, if two units of Reward Type A and three units of Reward Type B are issued, there will be two entries: one with a quantity of two and another with a quantity of three. | - |

| redemption_id | bigint | Internal identifier for the redemption transaction. | - |

| request_id | string | Unique identifier for the request related to the reward issuance. | - |

| status_code | string | Status code indicating the result of the reward issuance process. | - |

| status_message | string | Message describing the status of the reward issuance, such as Reward issued successfully, or Promotion issued successfully. | - |

| success | int | Indicator for whether the reward issuance was successful (1 for yes, 0 for no). | - |

| tender_details_id | bigint | Identifier for payment details where the currency is CASH. Although Capillary does not process this payment method, it stores related information (such as credit card usage) for reference. | - |

| user_payment_config_id | bigint | Internal identifier for the user's payment configuration. | - |

| year | int | Year of the reward issual. | - |



[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[reward_fulfillment_status_dim](/docs/dimension-tables#reward-fulfillment-status-reward_fulfillment_status_dim)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[reward_owner_dim](/docs/dimension-tables#reward-owner-reward_owner_dim)

[reward_owner_standard_dim](/docs/dimension-tables#reward-owner-standard-types-reward_owner_standard_dim)

[payment configuration](/docs/pointscash-journeys-in-rewards-catalog#the-supported-payment-modes-are)

[reward_payment_config_dim](/docs/dimension-tables#reward-payment-config-reward_payment_config_dim)

[reward_redemption_types_dim](/docs/dimension-tables#reward-redemption-types-reward_redemption_types_dim)

[rewards](/docs/dimension-tables#rewards-rewards)

[reward_fulfillment_details_scope_dim](/docs/dimension-tables#reward-fulfillment-scope-reward_fulfillment_details_scope_dim)

[reward_vendor_dim](/docs/dimension-tables#reward-vendor-reward_vendor_dim)

[reward_vendor_redemption_dim](/docs/dimension-tables#reward-vendor-redemption-reward_vendor_redemption_dim)

[group loyalty redemption](/docs/redeeming-points-from-user-groups)

Updatedabout 2 months ago