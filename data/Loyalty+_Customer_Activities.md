# Customer Activities

A rule expression is a combination of profile, attributes, sub-attributes (for selected attributes), operators, and expression values. Profiles might vary based on the activity and accordingly the attributes, and sub-attributes.

The following table provides the list of profiles supported for each activity. Each profile supports  certain attributes. You can read more about each profile in the next article.

| Activity | Description | Supported Profiles |

| --- | --- | --- |

| Make a transaction (TransactionAdd) | Transaction Add is a combination of a new transaction and tracker finished activities.  Here, you can evaluate conditions and execute actions on a new transaction, tracker, and transaction complete activities. | currentCustomercurrentCustomerPartnercurrentEventcurrentStorecurrentTrackercurrentTrackerConditioncurrentTxngroupPrimaryCustomerorganizationprogramreferrerCodetenderProfile |

| DelayedAccrual | Credits points to customer account after a specific number of days. | currentCustomercurrentEventcurrentStoreprogram |

| CustomerRegistration | Create rules and execute actions on a new customer registration activity. | currentCustomercurrentCustomerPartnercurrentEventcurrentStoregroupPrimaryCustomerorganizationprogramreferrerCode |

| PointsRedemption | Configure rules and actions on points redemption activity.Even before validating points redemption conditions, the system checks whether the points are redeemable. | currentCustomercurrentCustomerPartnercurrentEventcurrentStoreorganizationprogram |

| CouponRedemption | Define rules and conditions on coupon redemption activity. | currentCustomercurrentCustomerPartnercurrentEventcurrentStoreorganizationprogram |

| ReturnTransaction | Configure rules and actions on transaction return activity. | currentCustomercurrentCustomerPartnercurrentEventcurrentStoregroupPrimaryCustomerorganizationprogramreturnBilltenderProfile |

| CustomerUpdate | Configure rules and actions on the customer profile update activity. | currentCustomercurrentCustomerPartnercurrentEventcurrentStoregroupPrimaryCustomerorganizationprogram |

| TransactionUpdate | Configure rules and actions on the transaction update activity. | currentCustomercurrentCustomerPartnercurrentEventcurrentStorecurrentTxngroupPrimaryCustomerorganizationprogram |

| SocialConnect | Execute actions for social events (events through Social Connect) | currentCustomercurrentCustomerPartnercurrentEventcurrentStoregroupPrimaryCustomerorganizationprogram |

| SlabUpgrade | Configure rules for the tier upgrade activity. | currentCustomercurrentCustomerPartnercurrentEventcurrentStorecurrentTxngroupPrimaryCustomerorganizationprogramreferrerCodetenderProfile |

| TargetCompleted | Configure rules for target-based loyalty. | currentCustomercurrentCustomerPartnercurrentEventcurrentStoregroupPrimaryCustomerorganizationprogram |



Updatedover 1 year ago