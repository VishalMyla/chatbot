# Coupons Fact Table

This table captures the event wherein coupons are issued to or redeemed by the customer. It captures the date and time of the coupon issual/ redemption, the associated bill amount, expiry date of the coupon, and the customer for which the coupon issual/ redemption has been done.

Databricks Table Name:coupons

Coupons  - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details

# LegendPKPrimary KeyLKLinking Key

Coupons Fact Table

| Column Name | Data Type | Description New | Linked Table | Availability for Export in theCouponstemplate |

| --- | --- | --- | --- | --- |

| auto_update_time_coupons | string | Date and time when the corresponding record in the coupons table available at the source was last updated. It is in the Unix timestamp format. | _ | Yes; Measure Name: Auto Update Time Coupons |

| bill_id | bigint | Identifier for the bill against which the coupons have been issued or redeemed. | _ | Yes; Measure Name: Bill Id |

| coupon_code | string | A unique identifier generated for the coupons. | _ | Yes; Measure Name: Coupon Code |

| coupon_code_src | string | Represents the source coupon code. It is the same as the coupon code. | _ | Yes; Measure Name: Coupon Code Src |

| dim_campaign_group_id | bigint | Identifier for the campaign group (test or control) for which the coupon has been issued or redeemed. | campaign_group | Yes; Dimension Name: Campaign Group |

| dim_campaign_id | bigint | Identifier for the campaign for which the coupon has been issued or redeemed. | campaigns | Yes; Dimension Name: Campaign Id |

| dim_coupon_issual_type_id | bigint | Identifier of the type of coupon issued. Possible values are - Single, and Bulk. Single: A single coupon is issued, in response to a specific event. Bulk: Multiple coupons are issued simultaneously. | coupon_issual_typeLink | Yes; Dimension Name: Coupon Issual Type |

| dim_coupon_series_id | bigint | Identifier of the coupon series against which the coupon has been issued or redeemed. | coupon_series | Yes; Dimension Name: Coupon Series |

| dim_entry_type_id | bigint | Captures the entry type for the coupon, whether it is a manual entry or through Intouch. | entry_type | Yes; Dimension Name: Entry Type |

| dim_event_date_id | bigint | Date when the coupon issual or redemption has occurred. | date | Yes; Dimension Name: Date |

| dim_event_time_id | bigint | Time when the coupon issual or redemption has occurred. | time | Yes; Dimension Name: Time |

| dim_event_user_id | bigint | Identifier of the user, set internally by Capillary. | users | Yes; Dimension Name: User Id |

| dim_event_zone_till_id | bigint | Identifier assigned to the point-of-sale (POS) terminal within a store, where the coupon was issued/redeemed. It distinguishes one checkout location from another within the same store. | zone_tills | Yes; Dimension Name: Store Hierarchy > Till Id |

| dim_expiry_date_id | bigint | Date when the coupon is set to expire. | date | Yes; Dimension Name: Expiry Date |

| dim_issual_campaign_group_id | bigint | Identifier for the campaign group associated with the coupon issual. | campaign_group | Yes; Dimension Name: Campaign Group |

| dim_issual_date_id | bigint | Date when the coupon has been issued. | date | Yes; Dimension Name: Issual Date |

| dim_issual_time_id | bigint | Time when the coupon has been issued. | time | Yes; Dimension Name: Issual Time |

| dim_issual_type_id | bigint | Captures the issual type. Possible values are store and customer. | coupon_issual_typeLink | Yes; Dimension Name: Issual Type |

| dim_issual_zone_till_id | int | Identifier assigned to the point-of-sale (POS) terminal within a store, where the coupon was issued. It distinguishes one checkout location from another within the same store. | zone_tills | Yes; Dimension Name: Issual Zone Till |

| dim_issued_to_user_id | bigint | Identifier of the customer to whom the coupon has been issued. | users | Yes; Dimension Name: User Id |

| dim_latest_updated_date_id | bigint | Date when the data corresponding to this event/row is changed in the source table. | date | Yes; Measure Name: Latest Updated Date |

| dim_latest_updated_time_id | bigint | Time when the data corresponding to this event/row is changed in the source table. | time | Yes; Measure Name: Latest Updated Time |

| event_id | bigint | Unique identifier of the coupons issual/redemption event, It is the primary key of this table. | _ | Yes; Measure Name: Event Id |

| issual_coupon_id | bigint | Unique identifier assigned to the coupon which has been issued. | _ | Yes; Measure Name: Issual Coupon Id |

| redemption_bill_amount | double | Total transaction amount of the bill against which the coupon has been redeemed. | _ | Yes; Measure Name: Redemption Bill Amount |

| used_bill_number | string | Bill number used while redeeming the coupon. | _ | Yes; Measure Name: Used Bill Number |

| year | int | Year when the coupon was issued/redeemed. | _ | Yes; Dimension Name: Year |

| dim_coupon_event_type_id | bigint | Identifier for the coupons event type (issual, redemption).  It is the primary key of this table. | redeemed_status | Yes; Dimension Name: Coupon Event Type |



[Coupons](/docs/coupons-standard-export-template)

[campaign_group](/docs/dimension-tables#campaign-group)

[campaigns](/docs/dimension-tables#campaigns)

[Link](/docs/dimension-tables#coupon-issual-type-coupon_issual_type)

[coupon_series](/docs/dimension-tables#coupon-series-coupon_series)

[entry_type](/docs/dimension-tables#entry-type-entry_type)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[zone_tills](/docs/dimension-tables#zone-till)

[date](/docs/dimension-tables#date)

[campaign_group](/docs/dimension-tables#campaign-group)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[Link](/docs/dimension-tables#coupon-issual-type-coupon_issual_type)

[zone_tills](/docs/dimension-tables#zone-till)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[redeemed_status](/docs/dimension-tables#redeemed-status-redeemed_status)

Updated7 months ago