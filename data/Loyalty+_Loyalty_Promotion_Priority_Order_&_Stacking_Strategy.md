# Loyalty Promotion Priority Order & Stacking Strategy

> 🚧Attention!By default, the Promotion Priority Order & Stacking Strategy are not available for the orgs by default and needs to be configured seprately. To enable these, contact your CSR.

## 🚧Attention!

Attention!

By default, the Promotion Priority Order & Stacking Strategy are not available for the orgs by default and needs to be configured seprately. To enable these, contact your CSR.

# What is a Promotion priority order & stacking strategy and how are they useful?

## Promotion priority order (ranking promotions)

Promotion Priority Order, also known as the ranking of promotions, allows brands to determine the sequence in which promotions are applied to events such as transactions or registrations. With this feature, brands can specify the order in which promotions are evaluated and applied, providing greater control over the discounts and offers presented to customers.

## Promotion stacking

In addition to prioritizing promotions, brands may also want to manage the number of promotions applied to a transaction, whether at the line-item level or for the entire bill, to avoid giving over-discounts. The promotion stacking feature helps limit the number of promotions applied, avoiding excessive discounts and ensuring that only the most relevant promotion is used.

> 📘Note:When the Promotions 2.0 feature is enabled, Promotion Priority Order is automatically activated, while the stacking strategy can be enabled or disabled based on brand preferences.The priority order and stacking strategy only evaluate promotions awarding points, i.e the promotions which have point allocation action configured within them.

## 📘Note:

Note:

- When the Promotions 2.0 feature is enabled, Promotion Priority Order is automatically activated, while the stacking strategy can be enabled or disabled based on brand preferences.

- The priority order and stacking strategy only evaluate promotions awarding points, i.e the promotions which have point allocation action configured within them.

# Configuring promotion priority order and the type of ranking order

You can configure the promotion priority order in the Advanced settings of the loyalty program. To configure, navigate toLoyalty+ programs > Edit Program > Advance Settings > Loyalty Promotions > Promotion Priority order

In this section, you can arrange the promotion order types by dragging and dropping them to define the sequence in which promotions will be applied. You can prioritize promotions using the following order types as listed in the table below:

|  |  |

| --- | --- |

| Maximum points allocation | Promotions that allocate the maximum number of points will be applied first, in descending order. For example, if Promotion 1 allocates 100 points and Promotion 2 allocates 350 points, Promotion 2 will be applied first, followed by Promotion 1. |

| Promotion Expiry | Promotion expiry - Promotions are applied based on their expiry dates, with those expiring earliest being applied first. For example, if P1 is expiring in 1 month and P2 is expiring in 3 months, P1 will be applied first followed by P2. |

| Promotion Weightage | This order type is not released and will be available in future. |



By default, the Priority order is  - Promotion expiry > Maximum points allocation.

## Example

If the priority order is set as "Maximum points allocation" followed by "Promotion expiry", then all promotions that allocate points will be ranked from highest to lowest. Subsequently, promotions will be ranked based on their expiry from earliest to farthest.

For instance, consider the below promotions:

P1: Allocates 100 points, Promotion expiring in the next 30 days

P2: Allocates 300 points, Promotion expiring in the next 45 days

P3: Allocates 300 points, Promotion expiring in the next 20 days

P4: Allocates 200 points, Promotion expiring in the next 10 days

In this scenario, the evaluation rank of promotions will be: P3 → P2 → P4 → P1.

![](https://files.readme.io/02cc611369c8296096af08cc22caffd60f5f60e49b07d08ea446145b71dd0315-Advanced_Settings.png)

# Enabling Promotion Stacking strategy

You can configure the promotion priority order in the Advanced settings of the loyalty program. To configure, navigate toLoyalty+ → Edit Program→ Advance Settings → Loyalty Promotions > Promotion Stacking Strategy.

![](https://files.readme.io/98d53a0-Promotions_stacking_strategy.png)

There are two stacking strategy options available:

- Multiple promotions to apply in a transaction at a line-item level:Stacking for promotions which are running on a line-item level in a transaction.

- Multiple promotions to apply in a transaction at a transaction/bill level:Stacking for promotions which are running on the entire transaction or bill level in a transaction.

When creating a promotion based on a transaction event, we specify whether the promotion should be applied at the line-item level or the bill level.

![](https://files.readme.io/9e2e41c-Customer_Activity.png)

By default, the Stacking strategy is Off for both types of promotions.

## Functionality when Stacking strategy is ON

Stacking on refers to the process where multiple promotions are applied within a single transaction. This is the behaviour by default but the stacking strategy helps to enable this in a controlled manner. With the stacking strategy feature, you can define a promotion as Exclusive and Non-exclusive.

|  |  |

| --- | --- |

| Mark this promotion exclusive | Exclusive promotions are the ones, which are treated and evaluated individually. These promotions do not get stacked with any other promotion. |

| Mark this Promotion non-exclusive | Non exclusive promotions are the ones which get stacked with other non exclusive promotions, and are treated together as a bundle or stack. |

| Always apply this promotion | These promotions will always apply no matter what the stacking strategy is. They are neither exclusive nor non exclusive. |



![](https://files.readme.io/9441fd5-Mark_this_promotion.gif)

### Benefits of marking promotion exclusive and non-exclusive

When a promotion is marked as exclusive, it is treated as standalone and does not stack with any other promotion. The benefits allocated by the exclusive promotion, such as points or discounts, are considered independently, and the promotion's expiry date is only relevant to itself.

#### Example :

Consider the promotions in the table below and a scenario where the priority order is set as Maximum points allocation > Promotion expiry:

| Promotions | Type | points | Expiry |

| --- | --- | --- | --- |

| P1 | Non-exclusive | 100 | 30 days |

| P2 | Non-exclusive | 300 | 45 days |

| P3 | Non-exclusive | 300 | 20 days |

| P4 | Exclusive | 200 | 10 days |



Firstly, P1, P2, and P3 will be stacked together, allowing them to potentially allocate a total of 700 points.  P4, being exclusive, is compared with (P1+P2+P3). Since P4 < (P1+P2+P3), a total promotion of 700 (P1+P2+P3) is applied. Among P1, P2, and P3, the priority order will be P3 → P2 → P1.

## Disabling stacking strategy: Turning off and its impact on loyalty promotion behaviour

When Stacking is turned off, only a single promotion will be applied in a transaction. This implies that brands do not want multiple promotions to be applied in a transaction. The single promotion applied will be the one prioritized at the top of the promotion priority order.

To disable a stacking strategy, set the toggle switch to off for bothMultiple promotions to apply in a transaction at a line-item level and Multiple promotions to apply in a transaction at a transaction/bill level.

![](https://files.readme.io/20e1b60-Multiple_promotions_to_apply.png)

## Ensuring consistent application of a promotion even when the stacking strategy is disabled

In addition to the single best promotion, you have the option to apply a promotion persistently in transactions, regardless of the priority order and stacking strategy. For instance, Birthday or Anniversary promotions are intended to always apply irrespective of the configured settings.

In such cases, you can enable "Always apply this promotion" in the Promotion level advanced settings. By checking the “Always apply this promotion” option, the promotion will consistently be evaluated and applied. You can enable during creation or while editing a promotion.

The promotions not marked ‘Always apply this promotion’, will be ranked, and the one on the top of the priority order will get applied.

![](https://files.readme.io/cc2457c-Always_apply_the_promotion.gif)

## Promotion behaviour during stacking mode changes

### When switching from stacking off to on

In this scenario, promotions marked as "always applied" will retain that designation, while the rest of the promotions (those not marked as "always applied") will be labeled as "Exclusive".

### When switching from stacking on to off

In this case, promotions marked as "always applied" will retain that designation. However, the remaining promotions (those marked as both exclusive or non-exclusive) will be evaluated individually, and only the best among them will be applied, similar to how the functionality works when stacking is off.

### When switching back from stacking off to on

This is a rare scenario where stacking was previously on, and promotions were marked as exclusive, non-exclusive, and always applied. After switching stacking off, only "always applied" promotions remained. Now, if stacking is turned back on (it's advised to avoid frequent changes in stacking strategies as it disrupts promotion evaluation), the status of each promotion from when stacking was on is restored. Thus, promotions marked as exclusive will regain that status, those marked as non-exclusive will revert to non-exclusive, and "always applied" promotions will remain unchanged.

In summary, once a promotion is assigned a status, it will remain unchanged until altered when stacking is on. However, when stacking is off, these statuses are disregarded except for the "always applied" status.

# Examples

The example scenarios below will help you understand more about the ranking and stacking strategy

## Scenario 1

Ranking: Maximum Points > Promotion Expiry

Stacking Strategy for bill-level promotions: OFF

Stacking Strategy for line item level promotions: OFF

| Promotion | Promotion type - bill level/line-item level | Configuration | Points awarded | Promotion applied? |

| --- | --- | --- | --- | --- |

| P1 | Bill level | Always apply ✅ | 100 | Yes |

| P2 | Bill level |  | 120 | No |

| P3 | Bill level |  | 40 | No |

| P4 | Bill level |  | 150 | Yes (Allocating max points) |

| P5 | Bill level |  | 130 | No |



Conclusion:

- Stacking off ensures only a single promotion applies, prioritizing the one that allocates the maximum points.

- P1, marked for always application, is ensured to be applied.

- Additionally, P4, which allocates the highest points, is also applied.

- Consequently, only P1 and P4 are applied, resulting in a total of 250 points allocated.

## Scenario 2

Ranking - Maximum Points > Promotion Expiry

Stacking Strategy for bill level promotions - OFF

Stacking Strategy for line item level promotions - OFF

Here is the table:

| Promotion | Promotion type -bill level/line-item level | Configuration | Points Awarded | Promotion applied? |

| --- | --- | --- | --- | --- |

| P1 | Bill | Always apply ✅ | 100 | Yes (since it's Always apply) |

| P2 | Line-item |  | L1 -120              L2-100 | Apply for L1 (Allocating max points to L1) |

| P3 | Line-item |  | L1 -50                L2-200 | Apply for L2 (Allocating max points to L2) |

| P4 | Bill |  | 150 | Yes (Allocating max points) |

| P5 | Bill |  | 130 | No |



Conclusion :

- With stacking turned off, only a single promotion will be applied, prioritizing the one that allocates the maximum points.

- Since P1 is marked as always applied, it will be applied automatically.

- Among the line-item promotions, both P2 and P3 allocate the maximum points to their respective line-items (L1 in P1 and L2 in P2), so they will both apply accordingly.

- Among the bill-level promotions, P4 allocates the maximum points and will also be applied.

- Therefore, promotions P1, P2, P3, and P4 will be applied, resulting in a total of 570 points allocated.

## Scenario 3

Ranking - Maximum Points > Promotion Expiry

Stacking Strategy for bill level promotions - ON

Stacking Strategy for line item level promotions - ON

| Promotion | Promotion type -bill level/line-item level | Configuration | Points Awarded | Promotion applied? |

| --- | --- | --- | --- | --- |

| P1 | Bill | Always apply ✅ | 100 | Yes (since it's Always apply) |

| P2 | Bill | Exclusive | 120 | No (Individually compared to the stack of P4+P5) |

| P3 | Bill | Exclusive | 40 | No (Individually compared to the stack of P4+P5) |

| P4 | Bill | Non-Exclusive | 150 | Yes (Getting stacked with P5 & total 270 points from the stack) |

| P5 | Bill | Non-Exclusive | 130 | Yes (Getting stacked with P4 & total 270 points from the stack) |



Conclusion:

- Stacking: On, multiple promotions are applied in the transaction. The non-exclusive will be stacked or bundled together and the entire stack of total points will be compared with all the exclusive promotions individually.

- Promotions P4 and P5 will be bundled together as they are non-exclusive promotions, resulting in a stack totalling 270 points.

- This stack (P4 + P5) will then be compared with each exclusive promotion individually.

- Since the stack's total points (270) exceed the points allocated by both P2 (120) and P3 (40) individually, the stack (P4 + P5) will be applied.

- Additionally, P1, which is marked as always applied, will also be applied.

- Therefore, promotions P1, P4, and P5 will be applied.

- Points allocated: 100 + 150 + 130

## Scenario 4

Ranking - Maximum Points > Promotion Expiry

Stacking Strategy for bill level promotions - ON

Stacking Strategy for line item level promotions - OFF

| Promotion | Promotion type -bill level/line-item level | Configuration | Points Awarded | Promotion applied? |

| --- | --- | --- | --- | --- |

| P1 | Bill | Always apply ✅ | 100 | Yes (since it's Always apply) |

| P2 | Line-item |  | L1 -120     L2-100 | Apply for L1 (Allocating max points to L1) |

| P3 | Line-item |  | L1-50         L2-200 | Apply for L2 (Allocating max points to L2) |

| P4 | Bill | Exclusive | 150 | Yes (Allocating more points compared to other exclusive promotions and the stack of non-exclusive promotions) |

| P5 | Bill | Exclusive | 130 | No |

| P6 | Bill | Non-Exclusive | 50 | No |

| P7 | Bill | Non-Exclusive | 30 | No |



Conclusion:

- Stacking is disabled for line item level promotions, ensuring only the best promotion applies to each line item.

- For bill-level promotions, stacking is enabled, allowing multiple promotions to apply in the transaction. Non-exclusive promotions are bundled together, and their total points are compared with exclusive promotions individually.

- P1, marked as always applied, will be applied automatically.

- Among the line-item promotions, both P2 and P3 will apply to their respective line items, as they allocate maximum points to L1 and L2, respectively.

- P6 and P7, being non-exclusive promotions, will be bundled together, allocating a total of 80 points.

- The stack (P6 + P7) will then be compared with P4 and P5 individually. Since the total points of the stack (80) are less than the points allocated by both P4 (150) and P5 (130) individually, P4 will apply alone as it allocates maximum points and is an exclusive promotion.

- Therefore, promotions P1, P2, P3, and P4 will be applied.

- Points allocated: 100 + 120 + 200 + 150

## Scenario 5

Ranking - Maximum Points > Promotion Expiry

Stacking Strategy for bill level promotions - OFF

Stacking Strategy for line item level promotions - ON

| Promotion | Promotion type -bill level/line-item level | Configuration | Points Awarded | Promotion applied? |

| --- | --- | --- | --- | --- |

| P1 | Bill | Always apply ✅ | 100 | Yes (since it's Always apply) |

| P2 | Line-item | Exclusive | L1-120          L2-100 | No |

| P3 | Line-item | Non-exclusive | L1-50            L2-20 | Apply for L1 (Getting stacked with P3 & total 200 points) |

| P4 | Line-item | Exclusive | L1-100         L2-500 | Apply for L2 (Allocating more points to L2 compared to other exclusive promotions and the stack of non-exclusive promotions) |

| P5 | Line-item | Non-exclusive | L1-150         L2-200 | Apply for L1 (Getting stacked with P3 & total 200 points) |

| P6 | Bill |  | 50 | Yes (Allocating max points) |

| P7 | Bill |  | 30 | No |



Conclusion:

- Stacking is disabled for bill-level promotions, allowing only the best promotion to apply.

- For line item level promotions, stacking is enabled, permitting multiple promotions to apply in the transaction. Non-exclusive promotions are bundled together, and their total points are compared with exclusive promotions individually.

- If a single exclusive promotion allocates more points than the entire stack, it takes precedence; otherwise, the stack applies. This evaluation is performed for each line item separately.

- P1, marked as always applied, will be applied automatically.

- Among the line-item promotions, for L1, both P3 and P5 will apply, as they together allocate the most points. For L2, P4 allocates the most points compared to other exclusive promotions and the stack of non-exclusive promotions.

- Among the bill-level promotions, both P6 and P7 will apply.

- Therefore, promotions P1, P3 (for L1), P4 (for L2), P5 (for L1), and P6 will be applied.

- Points allocated: 100 + 50 + 500 + 150 + 50

## Scenario 6 :

Ranking - Maximum Points > Promotion Expiry

Stacking Strategy for bill level promotions - ON

Stacking Strategy for line item level promotions - ON

| Promotion | Promotion type -bill level/line-item level | Configuration | Points Awarded | Promotion applied? |

| --- | --- | --- | --- | --- |

| P1 | Bill | Always apply ✅ | 100 | Yes (since it's Always apply) |

| P2 | Bill | Exclusive | 120 | No (Individually compared to the stack of P4+P5) |

| P3 | Bill | Exclusive | 40 | No (Individually compared to the stack of P4+P5) |

| P4 | Bill | Non-Exclusive | 150 | Yes (Getting stacked with P5&P6. Total 270 points & a coupon from the stack) |

| P5 | Bill | Non-Exclusive | 130 | Yes (Getting stacked with P4&P6. Total 270 points & a coupon from the stack) |

| P6 | Bill | Non-Exclusive | Issue coupon | Yes (Getting stacked with P4&P5. Total 270 points & a coupon from the stack) |



Conclusion:

- With stacking enabled, multiple promotions will apply in the transaction. Non-exclusive promotions are bundled together, and their total points are compared with exclusive promotions individually.

- P1, marked as always applied, will be applied automatically.

- Promotions P4, P5, and P6 are non-exclusive and will be bundled together as a stack. Together, they allocate 270 points and a coupon. This stack is compared with exclusive promotions P2 and P3 individually.

- The stack (P4 + P5) allocates more points than both P2 and P3 individually.

- Despite P6 issuing coupons, it will also apply because the stack is elected to apply, as it allocates maximum points.

- Therefore, promotions P1, P4, P5, and P6 will be applied.

- Points allocated: 100 + 150 + 130

# Use case

As a brand, I want to apply a single promotion in the transaction which allocates the maximum number of points, but along with this, I want to apply the Birthday and Anniversary promotions if some customer is eligible for these.

Solution:

- Priority Order: Maximum Points > Earliest Expiry (To prioritize promotions allocating maximum points)

- Stacking Strategy: Off (To ensure only a single promotion is applied)

| Promotion | Benefit | Promotion applied? |

| --- | --- | --- |

| P1 | 100 | No |

| P2 | 250 | Yes |

| P3-Birthday Promotion | 50 | Marked Always Applied |

| P4-Anniversary Promotion | 10% off coupon | Marked Always Applied |



Conclusion:

P2 will get applied for all the customers, as it gives maximum points i.e 250. Along with this, customers who are eligible for P3 or P4 or both, will also get benefits from them, along with P2.

Updated7 months ago