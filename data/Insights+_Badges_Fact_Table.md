# Badges Fact Table

# Introduction to Badges Fact Tables

Badges are a type of visual recognition used in loyalty programs to reward customers for their progress, specific actions or achievements. They act as a form of gamification and instill a sense of pride and accomplishment within the user, thus, reinforcing the targeted behaviors and boosting engagement.

For more information about how badges work in Capillary product suite, please refer to theBadges Documentation.  This part of the documentation covers how you can analyze and report on badges featured in the Capillary system.

There are a few crucial elements of Badges lifecycle which a user would like to track and analyze. They include events such as earning a badge (without enrolment), the issual of badge (based on enrolment) and the promotions linked with the badge. The information of these events are stored in the form of fact and dimension tables based on star schema.The fact tables store the details of these events and the corresponding dimension tables contain the fields on the basis of which the entries in these fact tables can be grouped/filtered for reporting.

Badges - Entity Relationship Diagram (ERD)

Zoom in the table for more clarity. Click the table title to view its details.

# LegendPKPrimary KeyLKLinking Key

## Badges - Earn (badges_earn)

Each row in this table represents an event in which a customer earns a badge on completing a specified activity or meeting a set of pre-defined criteria. This doesn’t require the customer to enrol for the badge beforehand. It captures information like the badge ID, customer ID, earning date, expiry date, and whether the badge is active or revoked.

For example-When a customer registers, they automatically receive the "New Member" badge if the configuration specifies that pre-enrollment is not needed. These types of events are stored in the Badges_earn fact table.By linking this fact table with the dimension tables, you would be able to have a complete picture of this event.

Databricks Table Name:badges_earn

Badges Earn Fact Table

| Column name | Data type | Description | Linked Table | Availability for Export in theBadges EarnTemplate |

| --- | --- | --- | --- | --- |

| auto_update_time_badges_earn | bigint | Date and time when the badges_earn table was last updated. It is in the Unix timestamp format. The update takes place only when the badge deactivation occurs. | _ | Yes; Measure Name: Auto Update Time Badges Earn |

| dim_badgeMeta_id | string | Unique identifier assigned to a badge when it is generated. It is a common key that connects to the badgeMeta dimension table for providing badge details. | badgemeta | Yes; Dimension Name: Badgemeta |

| dim_badges_earn_active_id | bigint | Indicates if the badge is currently active or not. | enabled | Yes; Dimension Name: Badges Earn Active |

| dim_badges_owner_type_id | string | Provides information about the module (name) that granted the customer a particular badge. For instance, if the badge was awarded by the Journeys module, you can retrieve Journeys module details by linking to the badges_owner_type field using this column. The types of modules are - Loyalty/ Referral_Campaigns/ Journeys/ Auidence_Campaigns/ Rewards_Catalog/ Goodwill_Module/ Milestones. | badges_owner_type | Yes; Dimension Name: Badges Owner Type |

| dim_createdOn_date_id | bigint | Date on which the badge was earned by the customer. | date | Yes; Dimension Name: Date |

| dim_createdOn_id | bigint | Time when the badge was earned by the customer. | time | Yes; Dimension Name: Time |

| dim_customer_id | bigint | Unique identifier for the customer associated with the badge. | users | Yes; Dimension Name: Customer user Id |

| dim_event_date_id | bigint | Date on which the badge was earned. | date | Yes; Dimension Name: Date |

| dim_event_time_id | bigint | Time when the badge was earned. | time | Yes; Dimension Name: Time |

| dim_expiresOn_date_id | bigint | Date on which the badge expires. | date | Yes; Dimension Name: Date |

| dim_expiresOn_id | bigint | Time when the badge expires. | time | Yes; Dimension Name: Time |

| dim_latest_updated_date_id | bigint | Date when the table was last updated. | date | Yes; Dimension Name: Date |

| dim_latest_updated_time_id | bigint | Time when the table was last updated. | time | Yes; Dimension Name: Time |

| earnId | string | Unique identifier assigned to each row of the earn badges fact table. It is the primary key of this table. It is useful in accessing information related to the customer, badge earn date, badge expiration details, etc. | _ | Yes; Measure Name: Earnid |

| isActive | string | Indicates if the badge is currently active or not. | _ | Yes; Measure Name: Isactive |

| lastUpdatedBy | bigint | Identifier of the user who last updated the badge. It could be a brand representative, a Customer Success Manager (CSM), or someone similar. | _ | Yes; Measure Name: Lastupdatedby |

| ownerReferenceId | string | Orchestered ID assigned to the module responsible for awarding the badge, e.g, milestone id, journey id, campaign id, loyalty id, etc. | _ | Yes; Measure Name: Ownerreferenceid |

| year | int | Year of the event. | _ | Yes; Dimension Name: Year |



[Badges Earn](/docs/badges-standard-export-template#badges-earn)

[badgemeta](/docs/dimension-tables#badges-meta-badgemeta)

[enabled](/docs/dimension-tables#enabled)

[badges_owner_type](/docs/dimension-tables#badge-owner-type-badges_owner_type)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

## Badges - Issue (badges_issue)

Each row in this table represents the event, where the customer has to enrol in the badge before they can earn it. It captures information like the badge ID, customer ID, issuance date, expiry date, and whether the badge is active or revoked.

For example-A brand launches a campaign to ensure proactive engagement. In this campaign, the first 1000 participants would have the opportunity to become premium members. As configured, the "premium member" badge requires pre-enrollment. Therefore, such types of events are stored in this table.

Databricks Table Name:badges_issue

Badges Issue Fact Table

| Column Name | Data Type | Description | Linked Table | Availability for Export in theBadges IssueTemplate |

| --- | --- | --- | --- | --- |

| auto_update_time_badges_issue | bigint | Date and time when the badges_issue table was last updated. It is in the Unix timestamp format. The update takes place only when the badge deactivation occurs. | _ | Yes; Measure Name: Auto Update Time Badges Issue |

| badges_issued_id | string | It is an unique identifier for the 'badges issued' fact table. As a primary key, it uniquely identifies each record or entry within the table. It allows tracking and analysis of individual badge issuance events. | _ | Yes; Measure Name: Badges Issued Id |

| createdBy | bigint | Identifier of the user who issued the badge, such a brand representative. | _ | Yes; Measure Name: Createdby |

| dim_badgeMeta_id | string | Unique identifier assigned to a badge when it is generated. It is a common key that connects to the badgeMeta dimension table for providing badge details. | badgemeta | Yes; Dimension Name: Badgemeta |

| dim_badges_issue_active_id | bigint | Indicates whether the badge is currently active or not. | enabled | Yes; Dimension Name: Badges Issue Active |

| dim_badges_owner_type_id | string | Provides information about the module (name) that granted the customer a particular badge. For instance, if the badge was awarded by the Journeys module, you can retrieve Journeys module details by linking to the badges_owner_type field using this column. The types of modules are - Loyalty/ Referral_Campaigns/ Journeys/ Auidence_Campaigns/ Rewards_Catalog/ Goodwill_Module/ Milestones. | badges_owner_type | Yes; Dimension Name: Badges Owner Type |

| dim_createdOn_date_id | bigint | Date when the badge was issued to the customer. | date | Yes; Dimension Name: Date |

| dim_createdOn_id | bigint | Time when the badge was issued to the customer. | time | Yes; Dimension Name: Time |

| dim_customer_id | bigint | Unique identifier for the customer associated with the badge. | users | Yes; Dimension Name: Customer user Id |

| dim_event_date_id | bigint | Date on which the badge was issued. | date | Yes; Dimension Name: Date |

| dim_event_time_id | bigint | Time when the badge was issued. | time | Yes; Dimension Name: Time |

| dim_expiresOn_date_id | bigint | Date on which the badge expires. | date | Yes; Dimension Name: Date |

| dim_expiresOn_id | bigint | Time when the badge expires. | time | Yes; Dimension Name: Time |

| dim_latest_updated_date_id | bigint | Date when the table was last updated. | date | Yes; Dimension Name: Date |

| dim_latest_updated_time_id | bigint | Time when the table was last updated. | time | Yes; Dimension Name: Time |

| isActive | string | Indicates whether the badge is currently active or not. | _ | Yes; Measure Name: Isactive |

| lastUpdatedBy | bigint | Identifier of the user who last updated the badge. It could be a brand representative, a Customer Success Manager (CSM), or someone similar. | _ | Yes; Measure Name: Lastupdatedby |

| ownerReferenceId | string | Orchestered ID assigned to the module responsible for awarding the badge, e.g. milestone id, journey id, campaign id, loyalty id, etc. | _ | Yes; Measure Name: Ownerreferenceid |

| requestId | string | It is a request ID generated during the issue of a badge. This ID serves as a reference point for tracking and managing the issuance of badges. | _ | Yes; Measure Name: Requestid |

| year | int | Year of the event. | _ | Yes; Dimension Name: Year |



[Badges Issue](/docs/badges-standard-export-template#badges-issue)

[badgemeta](/docs/dimension-tables#badges-meta-badgemeta)

[enabled](/docs/dimension-tables#enabled)

[badges_owner_type](/docs/dimension-tables#badge-owner-type-badges_owner_type)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

## Badges - Earned Benefits (badges_earned_benefits)

Each row in this table represents the event, wherein the promotions or benefits are linked to the badge. It captures information on the benefit type, coupon code, points earned, and validity of the benefit that comes along.

For example-A brand wants to run a campaign where customers who purchase items worth Rs. 10,000 during the campaign will earn a "Super Customer" badge. Additionally, the brand will provide extra coupons to "Super Customers." Here, the event of badge creation is linked to a promotion, and thus such events will be captured in this table.

Databricks Table Name:badges_earned_benefits

Badges Earned Benefits Fact Table

| Column Name | Data Type | Description | Linked Table | Availability for Export in theBadges Earned BenefitsTemplate |

| --- | --- | --- | --- | --- |

| allocationStrategyId | bigint | Denotes the strategy selected to allocate points for badges. In case of tier-based allocation, points are allocated according to predefined tiers or categories. | _ | Yes: Measure Name: Allocationstrategyid |

| auto_update_time_badges_benefits_earn | bigint | Date and time when the badges_benefits_earn table was last updated. It is in the Unix timestamp format. The update takes place only when the badge deactivation occurs. | _ | Yes: Measure Name: Auto Update Time Badges Benefits Earn |

| benefitType | string | Type of benefit linked to the badge. The benefit types are: coupons and points. | _ | Yes: Measure Name: Benefittype |

| couponCode | string | The coupon code associated with the benefit. It is generated by the coupons system. | _ | Yes: Measure Name: Couponcode |

| description | string | Description of the coupon. | _ | Yes: Measure Name: Description |

| dim_badgeMeta_id | string | Unique identifier assigned to a badge when it is generated. It is a common key that connects to the badgeMeta dimension table for providing badge details. | badgemeta | Yes; Dimension Name: Badgemeta |

| dim_coupon_series_id | string | Unique identifier for coupon series id. Whenever a coupon is generated, it is allocated a unique coupon series ID. It links to the coupon series dimension table, establishing a relationship between the benefits earned and the details of the coupon series. | coupon_series | Yes; Dimension Name: Coupon Series |

| dim_customer_id | bigint | Unique identifier for the customer associated with the badge. | users | Yes; Dimension Name: Customer user Id |

| dim_event_date_id | bigint | Date on which the benefit (coupon or point) was earned. | date | Yes; Dimension Name: Date |

| dim_event_time_id | bigint | Time when the benefit (coupon or point) was earned. | time | Yes; Dimension Name: Time |

| dim_latest_updated_date_id | bigint | Date when the table was last updated. | date | Yes; Dimension Name: Date |

| dim_latest_updated_time_id | bigint | Time when the table was last updated. | time | Yes; Dimension Name: Time |

| dim_validTill_id | bigint | Denotes the coupon validity date. | date | Yes; Dimension Name: Validtill |

| discountCode | string | Discount code associated with the coupon series. | _ | Yes; Measure Name: Discountcode |

| discountType | string | Type of discount. Can be ABS - absolute discount type where the discount value is fixed, or percent discount or a fixed discount. | _ | Yes; Measure Name: Discounttype |

| earnId | string | Unique identifier for the badges_earn table. | _ | Yes; Measure Name: Earnid |

| expirationStrategyId | bigint | Denotes the strategy used for deciding how points expire for the customer, such as fixed expiry date, or no expiry, etc. | _ | Yes; Measure Name: Expirationstrategyid |

| notes | string | Provides additional information or remarks related to badges. | _ | Yes; Measure Name: Notes |

| pointsEarned | bigint | Points earned by the customer. | _ | Yes; Measure Name: Pointsearned |

| programId | bigint | The Loyalty program ID is the identifier assigned to the loyalty program linked to the allocated points. | _ | Yes; Measure Name: Programid |

| promoIdentifier | string | Unique identifier assigned to a promotion. | _ | Yes; Measure Name: Promoidentifier |

| promotionId | string | Unique id assigned to a particular promotion. | _ | Yes; Measure Name: Promotionid |

| promotionName | string | Refers to the name of the promotion to which points were allocated, redeemed, or expired. | _ | Yes; Measure Name: Promotionname |

| statusCode | int | Status code for the action (used for internal purpose). | _ | Yes; Measure Name: Statuscode |

| uniqueId | string | Unique identifier for the table. As a primary key, it uniquely identifies each record or entry within the table. It allows tracking and analysis of individual badge benefits events. | _ | Yes; Measure Name: Uniqueid |

| year | int | Year of the event. | _ | Yes; Dimension Name: Year |



[Badges Earned Benefits](/docs/badges-standard-export-template#badges-earned-benefits)

[badgemeta](/docs/dimension-tables#badges-meta-badgemeta)

[coupon_series](/docs/dimension-tables#coupon-series-coupon_series)

[users](/docs/dimension-tables#users-users)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[date](/docs/dimension-tables#date)

[time](/docs/dimension-tables#time)

[date](/docs/dimension-tables#date)

You can use Insights and perform the following:

- Create a chartusing Badges KPI and Dimensions

- Create acustom report on Badges

- Export Badges usingstandard Badges export templates

Updated6 months ago