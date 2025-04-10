# Profile : Current Customer

currentCustomer (Customer Profile)- Allows you to write conditions based on the properties of the customer who is currently performing the activity.

## Attributes - Customer Identity

The below grouping of attributes is based on customer identity information.

| Attributes | Definition | Link |

| --- | --- | --- |

| name | Customer’s Full Name. | Learn More |

| firstname | Customer’s First Namestring. | Learn More |

| lastname | Customer’s Last Name. | Learn More |

| email | Customer's Email ID. | Learn More |

| externalId | Customer's External ID. | Learn More |

| mobile | Mobile number of a customer. | Learn More |

| hasInstoreProfile | Checks if the current customer is registered and has an in-store Profile. | Learn More |

| hasWeChatProfile | Returns True, if the current customer has a WeChat Profile. | Learn More |



[Learn More](/docs/attributes-namefirst-namelast-name#name)

[Learn More](/docs/attributes-namefirst-namelast-name#first-name--last-name-)

[Learn More](/docs/attributes-namefirst-namelast-name#first-name--last-name-)

[Learn More](/docs/attributes-namefirst-namelast-name#email)

[Learn More](/docs/attributes-namefirst-namelast-name#external-id-externalid)

[Learn More](/docs/attributes-namefirst-namelast-name#mobile)

[Learn More](/docs/attributes-namefirst-namelast-name#hasinstoreprofile)

[Learn More](/docs/attributes-namefirst-namelast-name#haswechatprofile)

## Attributes - Custom Field

The below grouping of attributes is based on custom fields created at the customer level.

| Attributes | Definition | Link |

| --- | --- | --- |

| customFieldValueIncludes | Check if the customer has some custom field present with a value. | Learn More |

| customFieldValueExcludes | If the customer has some custom field present. | Learn More |

| customFieldValueExists | checks If the customer data has some custom field present. | Learn More |



[Learn More](/docs/attributes-custom-field#customfieldvalueincludes)

[Learn More](/docs/attributes-custom-field#customfieldvalueexcludes)

[Learn More](/docs/attributes-custom-field#customfieldvalueexists)

## Attributes - KPI based on Points

The below grouping of attributes is based on the Key Performance Indicators on customer's points.

| Attributes | Definition | Link |

| --- | --- | --- |

| currentPoints | Customer's current redeemable points. | Learn More |

| initialCurrentPoints | Customer's current redeemable points before evaluating the event. | Learn More |

| currentAllPoints | The sum of all Points, redeemable as well as Promised Points. | Learn More |

| lifetimePoints | Total points earned by a customer from the date of registration. | Learn More |

| lifetimeAllPoints | The sum of lifetimePoints and lifetimeNonRedeemablePoints. | Learn More |

| initialLifetimePoints | Customer's lifetime redeemable points before the current event. | Learn More |



[Learn More](/docs/attributes-current-customer-points#attribute--currentpoints)

[Learn More](/docs/attributes-current-customer-points#attribute-initialcurrentpoints)

[Learn More](/docs/attributes-current-customer-points#currentallpoints)

[Learn More](/docs/attributes-current-customer-points#lifetimepoints)

[Learn More](/docs/attributes-current-customer-points#lifetimeallpoints)

[Learn More](/docs/attributes-current-customer-points#intiallifetimepoints)

## Attributes - KPI based on transaction data

The below grouping is done based on the Key Performance Indicators on the customer's transaction data.

| Attributes | Definition | Link |

| --- | --- | --- |

| avgBasketSize | Returns the average number of line items present in a transaction. | Learn More |

| avgSpendPerVisit | This is the average amount a customer is spending on a transaction. | Learn More |

| numberOfTxns | Number of transactions since the registration date of the customer | Learn More |

| numberOfTxnsToday | Number of transactions made by a customer on the current day. | Learn More |

| numberOfVisits | Number of unique days when a customer made the transaction | Learn More |

| lifetimePurchase | Customer's purchases since start including current transaction's purchase | Learn More |

| InitialLifetimePurchase | Customer's purchase since start before current transaction's purchase | Learn More |



[Learn More](/docs/attributes-kpis#1-attribute-avgbasketsize)

[Learn More](/docs/attributes-kpis#2-avgspendpervisit)

[Learn More](/docs/attributes-kpis#3-numberoftxns)

[Learn More](/docs/attributes-kpis#4-numberoftxnstoday)

[Learn More](/docs/attributes-kpis#5-numberofvisits)

[Learn More](/docs/attributes-kpis#6-lifetimepurchase)

[Learn More](/docs/attributes-kpis#7-initiallifetimepurchase)

## Attributes - Date

| Attribute | Definition | Link |

| --- | --- | --- |

| joinDate | Registration date | Learn More |



[Learn More](/docs/attribute-joindate#joindate)

## Attributes - Tracker based

| Attribute | Definition |

| --- | --- |

| trackerValueBeforeEvent | Gets the tracker value of a customer excluding the current event. Can be used in any set of the workflows, and can be used in loyalty promotions also.Trackers that are created based on alternate currencies will only work with this profile, as those tracker won't be visible in tracker/points-tracker sets.E.g.:currentCustomer.trackerValueBeforeEvent("Tracker name", "Case name")><=X |

| trackerValueCurrentEvent | Gets the tracker value of a customer including the changes that happened during the current event (until the previous set). Can be used in any set of the workflows (evaluation set, end set), and can be used in loyalty promotions also.Trackers that are created based on alternate currencies will only work with this profile, as those tracker won't be visible in tracker/points-tracker sets.E.g.:currentCustomer.trackerValueCurrentEvent("Tracker name", "Case name")><=X |



## Attributes - Slab Information

This grouping of attributes is done on the basis of Tier/Slab Information associated with the customer's loyalty.

| Attributes | Definition | Link |

| --- | --- | --- |

| initialSlabName | Initial slab name of the Current Customer before evaluating an event. | Learn More |

| initialSlabNumber | Initial slab number of the Current Customer before evaluating an event. | Learn More |

| slabName | Customer’s current tier name. | Learn More |

| slabNumber | Current Customer slab number let's say 10, 1, 3, etc | Learn More |



[Learn More](/docs/attribute-slab-information#initialslabname)

[Learn More](/docs/attribute-slab-information#initialslabnumber)

[Learn More](/docs/attribute-slab-information#slabname)

[Learn More](/docs/attribute-slab-information#slabnumber)

## Attributes - User Segment (EI)

This grouping of attributes is based on the User Segment (Cluster) creations over the customer's base by brands.

| Attributes | Definition | Link |

| --- | --- | --- |

| clusterValueIncludes | Returns true, if a customer belongs to a particular cluster (segment). | Learn More |

| clusterValueExcludes | Returns true, if a customer does not belong to a particular cluster (segment). | Learn More |



[Learn More](/docs/user-segment-ei-attributes#cluster-value-includes)

[Learn More](/docs/user-segment-ei-attributes#cluster-value-excludes)

## Attribute - Other

| Attribute | Definition | Link |

| --- | --- | --- |

| isLoyal | Checks if the current customer is registered in the brand's loyalty program. | Learn More |



[Learn More](/docs/attributes-namefirst-namelast-name#isloyal)

## Attribute - Customer status & label

| Attribute | Definition | Link |

| --- | --- | --- |

| customerStatus | When one wants to write rules based on the staus of the customer | Link |

| customerStatusLabel | When one wants to write rules based on the label of the customer | Link |



[Link](/docs/attribute-customer-status-label)

[Link](/docs/attribute-customer-status-label)

## Attribute - Milestones & Streaks

| Attribute | Definition | Link |

| --- | --- | --- |

| avgTargetAchieved(targetName) | Returns the average of the target value achieved by the customer across the cycles of the milestone (target). | Link |

| targetAchievedInPeriod(targetName, periodRefCode) | Returns the target value achieved by the customer in a specific cycle/period of a particular milestone.periodRefCodeis the name of the cycle, not the cycle ID. | Link |

| isStreakAchieved(streakName) | Returns a true/false value indicating whether a user has achieved a specific streak level. Assume there is a streak (ABC) with two levels in it (ABC_1, ABC_2).This will indicate whether the customer has achieved the specific level or not. | Link |

| streakCurrentValue(streakName) | Returns the current streak value of the customer (instead of a simple true/false) for a specific streak level. | Link |

| targetsAchievedForUnified(unifiedTargetGroupName, periodRefCode) | Returns the number of targets achieved by the user in a specific cycle/period of a specific unified target.Assume there is a unified target (ABC) that contains three targets (A, B, C) which the user has to achieve. This will return the number of targets achieved by the user in a cycle of ABC. | Link |

| targetAchievedInCurrentPeriod(targetName) | Returns the target value achieved by the customer during the current cycle.Only target name is required here and there's no need to specify the cycle's refCode. If there is no current cycle, the return value will be 0. | Link |

| targetsAchievedForUnifiedInCurrentPeriod(unifiedTargetGroupName) | Returns the number of targets achieved by the user during the current cycle of a specific unified target.Only target name is required here and there's no need to specify the cycle's refCode If there is no current cycle, the return value will be 0. | Link |



[Link](/docs/attributes-milestones-streaks#avgtargetachievedtargetname)

`periodRefCode`

[Link](/docs/attributes-milestones-streaks#targetachievedinperiodtargetname-periodrefcode)

[Link](/docs/attributes-milestones-streaks#isstreakachievedstreakname)

[Link](/docs/attributes-milestones-streaks#streakcurrentvaluestreakname)

[Link](/docs/attributes-milestones-streaks#targetsachievedforunifiedunifiedtargetgroupname-periodrefcode)

[Link](/docs/attributes-milestones-streaks#targetachievedincurrentperiodtargetname)

[Link](/docs/attributes-milestones-streaks#targetsachievedforunifiedincurrentperiodunifiedtargetgroupname)

Updated8 months ago