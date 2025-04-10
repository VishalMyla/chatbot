# Tracker Value Standard Export Template

The Tracker Value template is based on thePointsfact.

It lets you export tracker values generated through the Loyalty Engine to update slabs.

- Provides tracker values at the bill or line-item level.

- Includes all tracker bills within the specified duration, regardless of slab status.

- Exports are by entry, not cumulative.

Limitations

- You cannot export the current tracker value.

To know more about trackers and configurations, seeTrackers

## Measures

| Measure | Description |

| --- | --- |

| Allocated Points | Number of points allocated. |

| Auto Update Time PA | Date and time when the Points Awarded table is recently updated (Unix timestamp). |

| Auto Update Time PABP | Date and time when the Points Awarded Bill Promotion table is recently updated (Unix timestamp). |

| Auto Update Time PACP | Date and time when the Points Awarded Customer Promotion table is recently updated (Unix timestamp). |

| Auto Update Time PAL | Date and time when the Points Awarded Lineitem table is recently updated (Unix timestamp). |

| Auto Update Time PALP | Date and time when the Points Awarded Lineitem Promotion table is recently updated (Unix timestamp). |

| Auto Update Time PD | Date and time when the Points Deductions table is recently updated (Unix timestamp). |

| Awarded Ref Id | The reference id of the source from where the points are awarded. |

| Bill Id | Loyalty log id or bill id for which the points are awarded or redeemed. |

| Bill Number | Bill number for which the points are awarded or redeemed. |

| Event Id | Unique id of each event entry of the corresponding table. |

| Deducted Points | Number of redeemed, returned or expired points. |



## Dimensions

latest_updated_date, latest_updated_time, awarded_date, awarded_expiry_date,awarded_points_promotion, awarded_zone_till, category, deduction_type, Date, Time, User, User Segments,Store Hierarchy, Concept Hierarchy, expiry_date, expiry_time, points_awarded_type, points_event_type,points_promotion

Updated6 months ago