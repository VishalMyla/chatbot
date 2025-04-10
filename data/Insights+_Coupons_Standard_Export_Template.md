# Coupons Standard Export Template

The coupons template is based on theCouponsfact.

[Coupons](/docs/coupons-fact-table)

The template lets you export details of:

- Coupons issued at customer level and transaction level;

- Transaction numbers along with coupon details, redeemed and expired coupons, and coupon level custom fields.

> 📘NoteWhile using the coupons template, you need to select custom fields manually.Coupons that are issued or redeemed will be tagged to a transaction, only if both the transaction and coupon issual or redemption occurs within the span of  +/- 15 minutes.

## 📘Note

Note

- While using the coupons template, you need to select custom fields manually.

- Coupons that are issued or redeemed will be tagged to a transaction, only if both the transaction and coupon issual or redemption occurs within the span of  +/- 15 minutes.

## Measures

| Measure Name | Description |

| --- | --- |

| Bill Id | Identifier key for the bill against which the coupons have been issued or redeemed |

| Redemption Bill Amount | Total transaction amount of the bill against which coupon has been redeemed |

| Issual Coupon Id | Unique Id assigned to the coupon which has been issued |

| Used Bill Number | Bill_number  used while the redeeming the coupon |

| Auto Update Time Coupons | Date and time when the coupons table is recently updated (Unix timestamp) |

| Coupon Code Src | It is same as coupon code |

| Coupon Code | A unique id generated for the coupons |

| Event Id | A unique id generated for the coupon's event by capillary system |



## Dimensions

| Dimension Name | Description |

| --- | --- |

| coupon_event_type | Identifier for the coupons event type, such as issuance or redemption. |

| User | Identifier of the user involved in the coupon event, set internally by Capillary. |

| User Segments | Segment details of the customers involved in the coupon event, such as valued customer or lapsed customer. |

| Date | Date attributes of the coupon issuance or redemption. |

| Time | Time attributes of the coupon issuance or redemption. |

| Store Hierarchy (zone till) | Identifier for the store, till id. |

| Concept Hierarchy | Identifier for the concept associated with the coupon event. |

| OU Hierarchy | Identifier for the organization unit where the coupon event occurred. |

| coupon_series | Coupon series against which the coupon has been issued or redeemed. |

| expiry_date | Date when the coupon is set to expire. |

| issual_date | Date when the coupon has been issued. |

| issual_time | Time when the coupon has been issued. |

| issual_type | Captures the issuance type, with possible values such as store or customer. |

| campaign_group | Identifier for the campaign group associated with the coupon issuance. |

| campaign | Identifier for the campaign under which the coupon is issued. |

| Issual Zone Till | Captures the store till where the coupon has been issued. |

| entry_type | Captures whether the coupon entry is manual or through Intouch. |

| latest_updated_date | Latest date when the data is updated. |

| latest_updated_time | Latest time when the data is updated. |



[coupon_event_type](/docs/dimension-tables#redeemed-status-redeemed_status)

[User](/docs/dimension-tables#users-users)

[User Segments](/docs/dimension-tables#users-users)

[Date](/docs/dimension-tables#date)

[Time](/docs/dimension-tables#time)

[Store Hierarchy (zone till)](/docs/dimension-tables#zone-till)

[Concept Hierarchy](/docs/dimension-tables#zone-till)

[OU Hierarchy](/docs/dimension-tables#zone-till)

[coupon_series](/docs/dimension-tables#coupon-series-coupon_series)

[expiry_date](/docs/dimension-tables#date)

[issual_date](/docs/dimension-tables#date)

[issual_time](/docs/dimension-tables#time)

[issual_type](/docs/dimension-tables#coupon-issual-type-coupon_issual_type)

[campaign_group](/docs/dimension-tables#campaign-group)

[campaign](/docs/dimension-tables#campaigns)

[Issual Zone Till](/docs/dimension-tables#zone-till)

[entry_type](/docs/dimension-tables#entry-type-entry_type)

[latest_updated_date](/docs/dimension-tables#date)

[latest_updated_time](/docs/dimension-tables#time)

Updated6 months ago