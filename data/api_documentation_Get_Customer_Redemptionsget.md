# Get Customer Redemptionsget

## Response Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| coupons_count | int | Number of coupon redemptions retrieved. |

| points_count | int | Number of points redemptions received. |

| coupons | obj | Details of coupon redemptions. |

| points | obj | Details of points redemption. |

| code | string | Unique code of the coupon. |

| series_id | long | Coupon series ID associated to the coupon. |

| description | string | Description of the coupon. |

| discount_code | string | Coupon code used to avail discount. |

| discount_type | enum | Type of discount.PERCfor discount in percentage,FLATfor flat amount discount. |

| id | long | Redemption ID of that points or coupon. |

| transaction_number | string | Transaction number associated to the points or coupon redemption. |

| bill_id | long | A numerical identifier for the bill. |

| redeemed_time | date-time | Date and time of points or coupon redemption. |

| redeemed_at | string | Store or TILL code associated to points or coupon redemption. |

| program_id | long | Unique ID of the loyalty program in which points is redeemed. |

| points_redeemed | int | Number of points redeemed. |

| transaction_number | string | Transaction number associated to the points or coupon redemption. |

| redeemed_time | date-time | Date and time of points or coupon redemption. |

| redeemed_at | string | Store or TILL code associated to points or coupon redemption. |

| redemption_breakup_by_program | obj | Breakup of points redeemed with respect to the program. |

| reversals | obj | Details of points reversed if the transaction for which points are redeemed is returned. |

| reversal_id | long | Unique ID generated for the reversal of a specific set of redeemed points. |

| points_reversed | int | number of points reversed. |

| reversal_time | date-time | Date and time of points reversal inYYYY-MM-DD HH:MM:SSformat. |

| reversed_on_till_id | long | Till ID associated to the points reversal. |

| reversal_breakup_by_program | obj | Breakup of points reversed and associated loyalty program. |



`PERC`

`FLAT`

`YYYY-MM-DD HH:MM:SS`

`Try It!`