# User Group loyalty

A user group comprises individuals in a hierarchical order who belong to a particular org. An individual can belong to multiple user groups. An org can designate different roles to these members and incentivize them according to the org’s preference. User group loyalty allows an org to incentivize not only its customers but also incentivize other business entities or individuals that contribute to their profits. It is a customer retention solution with custom group structures and includes generic loyalty mechanics which helps an org to establish brand loyalty.In user group loyalty, an individual’s (member of a group) action will lead to other group members being rewarded.

For example, if a fleet driver fills petrol from BPCL, the manager of the fleet group can receive points for the transaction.This way of incentivizing the upper management encourages other members of the group to transact from an org.

## Key Concepts

The following are some of the key concepts of user group loyalty

1. In B2B Loyalty, an org is identified as an entity.

2. An individual can be part of multiple groups.

> 📘You can configure the total number of groups that a member can be part of.

## 📘

You can configure the total number of groups that a member can be part of.

1. The parent control or the admin role can be transferred from one member to another.

2. Permissions to manage group benefits.

3. A member of a group can still make individual transactions.

4. All the members in a group can pool in their transactions for a tier upgrade.

5. Points return and downgrade checks are supported in case of transaction return.

6. Both the group and the individual can be incentivized when they transact while representing the group.

## Difference between B2B and B2C

The existing user group programs (B2C or friends and family programs) only cater to customers and include family members and friends of these customers. These groups have a primary member who can redeem points and secondary members as well. In the B2C model, with the help of the Engage+ platform, orgs are able to directly benefit the primary member of the group, ignoring the secondary members. B2C model has only one primary member with multiple secondary associated.

The B2B user group programs aim to involve all members in the group actively by incentivizing everyone based on their roles in the group. B2B user group programs also include all the functionalities of the existing B2C programs.

## Use Cases

Following are the different scenarios where user group loyalty is applicable for both B2B and B2C scenarios.

### B2B Loyalty

| Vertical | Description |

| --- | --- |

| Fleet Loyalty | Fuel Brands can enroll fleet companies in their B2B loyalty programs. Fleet Drivers can earn loyalty points by purchasing fuel at retail outlets but points redemption can happen by fleet owners who are in the same group as the driver. |

| Corporate Loyalty Programs | Points earned by an employee of a company enrolled in a B2B loyalty program can be redeemed at the company level where other members of the company will also enjoy the benefits of the transaction made by a particular employee. |

| CPG and Distributor Loyalty Programs | A sales structure where existing distributors can recruit new distributors to sell the products. Distributors make money through a percentage of their recruits' sales and also direct sales of products to customers. |

| Affiliate Marketing Programs | The affiliate enrolled in the program can make customers buy products. With a product purchased by the customer, the rewards are accrued to the affiliate's account. |



### B2C Loyalty

| Vertical | Description |

| --- | --- |

| Hospitality and Restaurants | Hotel chains and restaurants where repeat customers drive significant value and family group engagement are very high can leverage this structure to boost profit and to drive stickiness. |

| Retail | Retail brands such as apparel, beauty, etc. can incentivize customers to engage with the brand as a group of friends or as a family to accrue benefits together in an accelerated fashion to get better returns. |

| Healthcare | Hospitals and pharmacy chains can provide benefits to the entire family as part of insurance tie-ups and subscriptions. |

| Airports and Airlines | Airline Miles and other benefits such as lounge access and class upgrades can be provided to the entire family group. |



## Important Terminologies

1. Company: Any business entity which is enrolled in the brand’s B2B loyalty program.

- Sub-company: A smaller business entity associated with a Company. For example, a big company like Tata can be registered as a company while Tata Motors, TCS can be registered as sub-companies.

1. Customer Role: Role is used to capture the association between customer and company. A company can have customers in various roles. For example, a company enrolled in a fleet loyalty program of a brand can have customers in various roles like a driver, associate, owner, etc.

2. Customer Hierarchy: Customer hierarchy is used to capture the association between two customer roles. To know how to create and configure a hierarchy, click here.

## How a User Group works

A user group includes a primary member and multiple secondary members. The concept of incentivizing and tier rewarding at the group level is called Group Loyalty, In group loyalty, when a secondary member makes a transaction, you can issue points to both secondary and the primary member.

Tier upgrade is on the basis of cumulative purchases of group members (if the upgrade strategy for the program is on lifetime purchases). Hence, the tier of all the group members remain the same (as per the primary member). When a secondary member leaves the group, his/her tiers downgrades to the lowest tier.

The common tier is achieved through the syncing of the secondary member's tier with the primary member's. Tier syncs either upgrade or downgrade when a secondary member makes a transaction or joins the group. The sync includes both upgrade and downgrade.

## Creating a User Group

Creating a user group involves two steps -

1. Adding a group with the primary member.

Adding a group with the primary member.

2. Adding group members (secondary members).

Adding group members (secondary members).

For details of each user group API, see the User Groups of the V2 API Documentation.

1. You can create user groups through API POST /usergroups. Using identifiers of the primary member, there are two approaches of creating a user group.

- User ID of the primary member (which is generated internally when registering).

- With InTouch credentials of the primary member.

1. Add each secondary member to the group using the API POST /{groupId}/members/{userId}, either with user Id or identifiers.

2. Configure the loyalty program. There are new events introduced for Group Loyalty - Group Transaction Add, Group Transaction Update, and Group Return Transaction. You can create rules for these events as required.

## Points pooling from secondary members to the primary member

Loyalty+ allows transferring of points earned for an event by a secondary member to the primary member automatically for each event.

To enable transferring points for an event, you will need to change the Advanced Settings for Friends & Family Program, see more about this [here](desired level of precision, contributing to consistency and accuracy in financial calculations).

## Communicating group points to the primary member

1. On the Workflow, select the customer activity PointsContributionToGroup and set the action Points Contribution to Group.

![](https://files.readme.io/573d614-sd.png)

You can see options to configure messages for the primary member and secondary member.

1. Configure the message for primary and secondary members separately and click Save.

Currently, you can use communication to notify the primary member that points are credited to his loyalty account for an activity done by a secondary member of the group. Similarly, you can also notify the secondary member that points are transferred to the primary member. Points pooling tags are still in the development phase.

![](https://files.readme.io/647810d-zdf.png)

1. Click Reconfigure save the changes in the live program.

To see the points contribution or points pooling of secondary members, use v2/usergroups/pointContributionHistory. For more details, see V2 API Documentation.

## Group transaction (Add, Update, and Return)

There are new events introduced for Group Loyalty - Group Transaction Add, Group Transaction Update, and Group Return Transaction.

## Actions supported for Group Loyalty

All the loyalty actions (such as points allocation, coupon issual, communication) for group events is for the primary member and the respective secondary member.

For example, points could be allocated for a new transaction (transaction/add) to the member who made the transaction, and also allocate points to the primary member for the Group Transaction/Add event.

## Points import for the primary member

Support for  importing Bill Promotion points and Line Item Promotion points for the primary member of a group

by enabling the Import on group primary customer option during import.

In Import profiles, Bill Promotion Points and Line Item Promotion Points, for a group, customer refers to the primary member of the group, and original customer refers to the secondary member who made the transaction.

![](https://files.readme.io/22aa033-nUjyo2KXQDzXFF2RJmLZJm0f1xAn82T0pw.png)

## Tier syncing of secondary members and primary members

When a secondary member joins a group, the tier of the secondary members is upgraded or downgraded to that of the primary member's. The following sections provide how the tier of secondary members is effected in different scenarios.

### When a secondary member joins/leaves the group

1. When a secondary member joins a group, his/her tier is upgraded or downgraded as per the tier of the primary member. When a secondary member leaves a group, his/her tier is downgraded to the lowest tier of the program.

2. However, if the secondary member is qualified for tier upgrade due to individual KPIs,  the tier is upgraded on the first transaction after leaving the group. The individual KPIs refer to the member’s current points, lifetime points, or lifetime purchases as per the tier upgrade strategy. The individual KPI values include the activities of the member within the group and outside the group.

For example, assume a member has made three transactions as mentioned in the following. The member’s lifetime purchase = B1 + B2 + B3 and member’s lifetime points = P1 + P2 + P3.

▪ Bill 1 (before the member joined the group) – Points allocated: P1

▪ Bill 2 (when the member was in the group as a secondary member) – Points allocated: P2

▪ Bill 3 (after the member left the group) – Points allocated: P3

### Tier upgrade on transactions of group members

When a secondary member makes a transaction, the group transaction is evaluated first. If the program uses lifetime purchases as the upgrade strategy, and the primary member is eligible for the upgrade, firstly, the primary member is upgraded and then the secondary member who made the transaction will also be upgraded.

- The tier upgrade for both the primary member and the secondary member who made the transaction happen in the same event flow. The tier of the other members of the group will not upgrade in the same event flow.

- However, if another secondary member makes a transaction, his/her tier is upgraded with the tier of the primary member.  In this, the secondary member is first upgraded to the new tier, and then the transaction/add event is evaluated.

- This states that the tier upgrade of the secondary member will always be in Eager mode irrespective of the tier upgrade strategy type (Eager, Dynamic or Lazy). Only the tier of the primary member upgrades according to the tier upgrade strategy type.

For example ◦ A group has 4 members – P1 (Primary), S1, S2, and S3 (Secondary)

T = T1, S1 makes a purchase

▪ On the purchase, P1 gets eligible for the tier upgrade.

▪ P1 gets upgraded first and then

▪ S1 gets upgraded.

T = T2, S2 makes a purchase

▪ Loyalty checks if the primary member P1 is already upgraded

▪ S2 gets upgraded

▪ Event rule gets evaluated

T = T3, S3 makes a purchase

▪ Loyalty checks if the primary member P1 is already upgraded

▪ S3 gets upgraded

▪ Event rule gets evaluated

### Tier upgrade of a secondary member on purchases made of the primary member

Scenario: The tier of the primary member upgrades due to a transaction made or an import.

- In both cases, the tier of each secondary member is upgraded only when the member makes a transaction (after the tier upgrade of the primary member) in Eager mode. That is, the tier of the secondary member is first upgraded and then the transaction/add event is evaluated.

For example:A group has 4 members – P1 (Primary), S1, S2, and S3 (Secondary)

T = T1, P1 makes a purchase

▪ On the purchase, P1 gets applicable for upgrade

▪ P1 gets upgraded

T = T2, S1 makes a purchase

▪ Loyalty checks if the primary member P1 is already upgraded

▪ S2 gets upgraded ▪ Event rule gets evaluated

T = T3, S3 makes a purchase

▪ Loyalty checks if the primary member P1 is already upgraded

▪ S3 gets upgraded

▪ Event rule gets evaluated

### Tier Downgrade of secondary members

The tier of secondary members is downgraded only when the tier of the primary member downgrades.

If the downgrade See the Primary Member Downgrade on Purchase or Visits section for the primary member downgrade if downgrade strategy is based on Purchase or Visits  Primary Member Downgrade on Earned Points section covers primary member downgrade if downgrade strategy is based on Earned Points

## Tier upgrade of the primary member on lifetime purchases

If the tier upgrade  (in tier upgrade strategy) is set based on Lifetime Purchases, then for the primary member it is the sum of lifetime purchase of the primary member and purchases done by the secondary member while they are in the group.

Lifetime Purchases of Primary Member for Strategy Upgrade = (Lifetime purchase of the primary member) + (Purchases of the secondary member while they are in the group).

Below are additional details on ‘Lifetime Purchase of Primary Member for Strategy Upgrade’

- The calculation is applicable only for the upgrade strategy on lifetime purchases

- Trackers for the primary member is purchase and visits of the primary member only; purchases or visits of secondary members are not considered

- However, rule expressions and tags consider the Lifetime Purchases of the primary member as the purchases of that particular member only and do not include the purchases of secondary members (while they are in the group)

- Group Lifetime Purchases on Member Care and API is not the same as ‘Lifetime Purchase of Primary Member for Strategy Upgrade’

- The transactions of secondary members before joining the group or after leaving the group are not included in the 'Lifetime Purchase of Primary Member for Strategy Upgrade’

- Lifetime Purchase of Primary Member for Strategy Upgrade includes transactions of a secondary member when the member was in the group. So even if the secondary member leaves the group, his/her transactions when in the group is included in ‘Lifetime Purchase of Primary Member for Strategy Upgrade’.

For example: Primary (P1) and Secondary (S1 and S2)

T=T0, P1 member does a purchase of Bill 1T=T1, S1 member does a purchase of Bill 2 (outside the group)T=T2, P1 member forms the groupT=T3, P1 member does a purchase of Bill 3T=T4, S1 joins the groupT=T5, S2 member makes a purchase of Bill 4 (outside the group)T=T6, S2 joins the groupT=T7, S1 makes a purchase of Bill 5 (within the group)T=T8, S1 leaves the groupT=T9, S2 makes a purchase of Bill 6 (within the group)At T= T9, ‘Lifetime Purchase of Primary Member for Strategy Upgrade’ =

(Lifetime purchase of primary member i.e. Bill 1 + Bill 3) + (Purchases of secondary members while they are/were in the group i.e. Bill 5 + Bill 6).

## Tier upgrade of primary member based on Points and Trackers

If the tier is on current points, lifetime points, or tracker values, these values is corresponding to primary member only and do not consider the points/tracker of secondary members.

For example: A group has 3 members – P1 (Primary), S1 and S2 (Secondary)

- P1 – Current Points: 500, Lifetime Points: 1,000

- S1 – Current Points: 800, Lifetime Points: 2,000

- S2 – Current Points: 2,000, Lifetime Points: 3,000

The upgrade strategy is on lifetime points with Tier 1 to Tier 2 threshold as 2,000 points. so, none of the members will get upgraded as the lifetime points of the primary member is only 1,000.

## Tier Downgrade of the primary member

If the loyalty program uses purchases in the downgrade strategy, the downgrade calculation for the primary member is (purchases of the primary member) + (purchases done by the secondary member while they are in the group) for the tier duration.

For brands using loyalty on user groups, It is recommended to have Purchase or Visits as one of the downgrade criteria so that cumulate purchases by all members get evaluated.

For example: Downgrade criteria is set to 12 months from the last slab change date

- The primary member gets upgraded to a tier on January 07, 2018.

- On January 31, 2019, while evaluating for downgrade, ‘Purchase’ value for the primary member is (Purchases done by the primary member during Jan 07th, 2018 – Jan 31, 2019) + (Purchases done by secondary members during Jan 07, 2018, – Jan 31, 2019, while they were in the group).

### Downgrade on points earned

If a loyalty program uses ‘Earned Points’ in downgrade strategy, these values is corresponding to the primary member only. These values will not include points earned by secondary members.

For example: a group has 3 members – P1 (Primary), S1 and S2 (Secondary)

- Tier duration – Jan 07, 2018 – Jan 31, 2019

- Downgrade Criteria – Downgrade if ‘Earned Points’ < 1,000P1 – points earned during tier duration: 500S1 – points earned during tier duration: 1,100S2 – points earned during tier duration: 2,000

- P1 – points earned during tier duration: 500

- S1 – points earned during tier duration: 1,100

- S2 – points earned during tier duration: 2,000

- In this case, all the members get downgraded because the primary member doesn’t satisfy the downgrade criteria.

> 📘Two additional profiles are present in the system for User Group Loyalty: currentgroupprimary and currentusergroup

## 📘

Two additional profiles are present in the system for User Group Loyalty: currentgroupprimary and currentusergroup

## Expire Points for Group / Fleet Users

A fleet user is a member of afleet loyalty program. To enable point expiration for fleet users, enable theFLEET_GROUP_LOYALTY_ENABLEDconfiguration flag and configure theFLEET_ENTITY_TYPEparameter. Once enabled, points earned by individual users in a fleet will expire based on the expiration conditions.

`FLEET_GROUP_LOYALTY_ENABLED`

`FLEET_ENTITY_TYPE`

To enable this for an organisation, raise a JIRA ticket to the sustenance team.

Updated27 days ago