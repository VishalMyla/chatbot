# Loyalty information based filters

## Active Points

This filter lets you build audience group with customers with specific number of active points in their account.  Active points are points that are available for redemption.

| Filter | Description |

| --- | --- |

| Points range* | You can get customers having current points in a specific range.You can either include or exclude a given condition.You can select the points range using the operatorsGreater than equal,Less than equal,Equals, andIn the range of(this also considers the minimum and maximum points mentioned). |



## Expired Points

This filter lets you build audience group based on the number of points expired from their account.

> 📘To use optional parameters, click+/- Fields.

## 📘

To use optional parameters, click+/- Fields.

| Filter | Description |

| --- | --- |

| Points range* | You can get the customers having expired points in a specific range.You can either include or exclude a given condition.You can select the points range from (minimum to maximum promotions) using the operators Greater than equal, Less than equal, Greater than Equals, and in the range of. |

| Duration | You can further filter by points expired in a specific period. For example, get customers whose points (at least 50) were expired in the previous month.You can choose duration either bySpecific datesorRelative days. |

| Promotion name | You can further filter the specified range of expired points of a specific promotion. You can also choose multiple promotions to get customers based on the expired points of selected promotions.Click+/- Fields>Check Promotion Name> You will see the promotion name drop-down box. Select desired promotions from the available list. |



[Specific dates](/docs/common-options-in-audience-filters#specific-dates)

[Relative days](/docs/common-options-in-audience-filters#relative-days)

## Lifetime Points

This lets you build audience group based on the total points earned in their lifetime.

![679](https://files.readme.io/f90bfb9-POvEcs0pn3vXIxU-3ZRaD2Gta8i_INY3cw.jpg)

| Filter | Description |

| --- | --- |

| Points range* | You can get the customers having lifetime points in a specific range.You can either include or exclude a given condition.You can select the points range from (minimum to maximum promotions) using the operators Greater than equal, Less than equal, Greater than Equals, and in the range of. |



## Registered store

Include or exclude customers who have registered at a specific store(s), zone(s) or concept(s) in a given duration.

You can select zones or concepts in the available drop-down box directly.

![920](https://files.readme.io/4da3500-download.png)

| Filter | Description |

| --- | --- |

| Registered at* (store/zone/concept) | You can get customers who registered in specific stores, zones, or concepts.You can select stores either byuploading store ids (upload list),fetching manually by entering values, orthrough store attributes such as external id, name, country, channel, billable and more (based on attribute)Sample Scenario: Select customers of all billable stores in India (The values specified in the example might differ from org to org)Include Customers who registered at store based on attributes with attribute {select Is billable, Store Country} and select Is billable billable and store country India.For more details on how to select stores, seeStore filter. |

| Date | This lets you filter customers who registered in a specific period.You can select duration either by relative days or specific days.For more details, see [Date] inCommon filter options (in filters). |



[Store filter](/docs/common-options-in-audience-filters#store-hierarchy)

[Common filter options (in filters)](/docs/common-options-in-audience-filters)

## Registration date

Lets you build audience group with customers who registered in a specific period.

![924](https://files.readme.io/628cafe-download_1.png)

| Filter | Description |

| --- | --- |

| Date* | This lets you filter customers who registered in a specific period.You can select duration either by relative days or specific days.For more details, see Date inCommon filter options (in filters). |



[Common filter options (in filters)](/docs/common-options-in-audience-filters)

## Current tier

Lets you build audience group with customers who are in a specific tier (current tier). You can include or exclude customers for a given condition.

![724](https://files.readme.io/eaf9c90-yRhktvZkFVaOcMmHGm05fP5V3bRsVJjUew.png)

| Filter | Description |

| --- | --- |

| Current Tier Name | Specify tier names by which you want to create audience group.Sample scenario: Fetch customers who are in the Gold tier (The tier names are configured as per the org preference and the names would vary)Include customers whosecurrenttier is {Select Gold} |

| Date | This lets you filter customers in a specific slab during a specific period.You can select duration either by relative days, specific days, or lifetime.For more details, see Date inCommon filter options (in filters). |



[Common filter options (in filters)](/docs/common-options-in-audience-filters)

## Redeemed points

Fetches customers based on the number of points redeemed during a specific duration. You can either include or exclude a given condition.

![723](https://files.readme.io/adbcfd4-84WdUlIys0MUT249q79OBcwq-e1ngYPEJw.png)

| Filter | Description |

| --- | --- |

| Points Range* | You can get customers who have redeemed a specific number of points (range).You can select the points range using the operatorsGreater than equal,Less than equal,Equals, andIn the range of(this also considers the minimum and maximum points mentioned).For more details, seepoints range. |

| Date | This lets you filter customers who redeemed points in a specific period.You can select duration either by relative days, specific days, or lifetime.For more details, see Date inCommon filter options (in filters). |

| Promotion Name | Filter customers who redeemed points of a specific promotion name such as bill promotion, and slab upgrade bill promotion. |

| Promotion Type | Filter customers who redeemed specific points by promotion scope/type such as bill, customer, return, and line item. |

| Points Awarded Type | Filter customers based on the type of points redeemed, such as the points awarded, points awarded through bill promotion, points awarded line item, points awarded through line item promotion, and points awarded through customer promotion. |



[points range](/docs/common-options-in-audience-filters#active-points)

[Common filter options (in filters)](/docs/common-options-in-audience-filters)

## Slab migration

Lets you build audience group with customers whose loyalty slabs were upgraded or downgraded in a specified period.

![903](https://files.readme.io/20451b3-mvj357VWrx_HK4aAiJtoLXiy0BWlqZAliQ.jpg)

| Filter | Description |

| --- | --- |

| Tier Change (From & To)* | This lets you choose the tier migration - from tier and to tier.Select the slab migration from x slab to y slab. You can either get customers based on tier upgrade or downgrade based on the slabs you in from and to fields. You can also select multiple slabs at a time.For example,  you can get customers whose loyalty slabs were upgraded from Silver, Gold to Diamond. Similarly, you can get customers in Silver tier upgraded to Gold, Platinum. |

| Date* | This lets you further filter by the date of migration (duration).You can select duration either by relative days or specific days.For more details, see Date inCommon filter options (in filters). |



[Common filter options (in filters)](/docs/common-options-in-audience-filters)

## About to expire points

Fetches customers based on the number of expiring points in a specific duration.

![919](https://files.readme.io/d6df86b-download_2.png)

| Filter | Description |

| --- | --- |

| Points Range* | You can get the customers whose specific points are going to expire in the selected range.You can either include or exclude a given condition.You can select the points range using the operatorsGreater than equal,Less than equal,Equals, andIn the range of(this also considers the minimum and maximum points mentioned).For more details, seepoints range. |

| Date* | This lets you filter customers whose points are going to expire in a specific period.You can select duration either by relative days or specific days.For more details, see Date inCommon filter options (in filters). |



[points range](/docs/common-options-in-audience-filters#active-points)

[Common filter options (in filters)](/docs/common-options-in-audience-filters)

Updatedover 1 year ago