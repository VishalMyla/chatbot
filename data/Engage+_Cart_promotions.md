# Cart promotions

This page lets you configure some key org-level promotion settings.

To configure promotion settings, on Engage+, navigate toSettings>Cart Promotions.Click on the section that you want to configure.

- Select cart & line item evaluation mechanism

- Enable multiple promotions for a single line item

- Select promotion ranking strategy

- Enable ranking based on promotion type

- Custom fields

![1324](https://files.readme.io/8986a26-g8gke4pQlMYixwXHB7yEG7an5zexkRXu6Q.png)

## Select cart & line item evaluation mechanism

This lets you set the order of evaluation on the entity level.

- Line-item with cart: Select this option to first apply for promotions on line-item and then the cart level promotion on the new amount (sub-total).For example:Assume the cart items mentioned in the table and their prices along. Promotions are applied as per the following ranking.

1. 10% off on shoes

2. Buy 1 towel & get 1 free

3. 10% off on cart for purchases above 99

| Lineitem | Quantity | Value | Amount | After promotion discount (#1, #2) |

| --- | --- | --- | --- | --- |

| Shoes | 1 (pair) | $100 | $100 | $90 |

| Towel | 2 | $10 | $20 | $10 |

| Total | 3 | $ 110 | $120 | $100 |



Now as per the option, promotion #3 is applied on the cart subtotal (after the line-item promotion is applied) -$100.

- Cart or line-item with cart first: Select this option to apply for cart promotions first. If cart promotions are not available, then apply for line-item promotions.Considering the previous example, only Promotion #3 (cart promotion) will be applied.  No line item promotions are applied.

## Enable multiple promotions for a single lineitem

Enable this option to allow multiple promotions on different quantities of a line item or SKU.

For example, consider the following items in the cart.

- 2 coke

- 3 biscuits

- 1 chai

If this is enabled, then multiple promotions are applied (see the below example)

- 10 off on one coke

- 10% off on coke

## Select promotion ranking strategy

When there are multiple promotions applicable for cart items (cart or catalog discount), you can define the ranking of promotions before applying them.

The promotion is either based on the maximum discount or earliest expiry. However, there could be instances where more than one promotion could be applicable to the cart or product. The secondary parameter is auto-applied in such cases.

- Earliest expiry: Select this to associate the promotion that has the earliest expiry date compared to other promotions that are applicable.For example, assume the following promotions are applicable for Cart items - 2 shirts,3 Jeans, and 1 t-shirt - the following promotions are applicable.

1. 100 off on T-shirts expiring in 3 days.

2. 20% off on jeans expiring in 7 days.

3. 10% off on jeans expiring in 5 days.

4. 100 off on shirt each shirt expiring in 1 day.

5. 10% off shirts expiring in 10 days.

6. Buy 1 shirt get 1 shirt expiring in 1 day

In this, the promotions are sorted by the expiry date and applied as follows.

1. Buy 1 shirt get 1 shirt expiring in 1 day -Applied

2. 100 off on shirt each shirt expiring in 1 day

3. 100 off on T-shirt expiring in 3 days -Applied

4. 10% off on jeans expiring in 5 days-Applied

5. 20% off on jeans expiring in 7 days

6. 10% off shirts expiring in 10 days

In this example, you could observe that two promotions 1 and 2 (applicable on shirts) have the same expiry. In such cases, the system applies the one that was created earlier (say the first promotion was created earlier).

- Maximum discount:  The promotion with the maximum discount value is considered. However, if there is more than one promotion with the same maximum discount value, among these promotions, the one that expires earlier is considered.

> 📘If the conflict still persists, then the system would choose a promotion randomly.

## 📘

- If the conflict still persists, then the system would choose a promotion randomly.

## Enable ranking based on promotion type

Enable this option to prioritize the promotions.

![](https://files.readme.io/87ad112-Screenshot_2023-02-14_at_7.01.51_PM.png)

- Promotion first: Select this to prioritize normal promotion programs such as Loyalty, Loyalty earning, and POS promotions when normal, reward promotions and code-based promotions are applicable.

- Rewards first: Select this to apply all promotions purchased from the rewards catalog (Marvel rewards) irrespective of any other settings. If the org has multiple promotions per line item disabled,  the setting is bypassed and multiple rewards will apply.  Rewards are essentially considered pre-bought gift items.

- Code first: Select this to prioritize code-based promotions over customer or reward-linked promotions.

Cart promotions module previously offered three options for ranking strategies in cart promotions, including reward-based promotions, code-linked promotions, and customer promotions. However, within customer promotions, which include loyalty, loyalty earning, and POS promotions, there was no option for internal ranking.

To address this, we have made enhancements to the promotion ranking strategy in cart promotions to include the ability to rank between loyalty, loyalty earning, and POS promotions.

Ex: a POS promotion can be ranked above loyalty or loyalty earning promotion. This ranking applies to both gift voucher (payment voucher) and cart promotions (discount).

For the orgs already using cart promotions stacking order, a confirmation message is added, post accepting, all types of promotions will be listed andthis action can't be reversed

![](https://files.readme.io/98c399e-Screenshot_2023-04-10_at_8.20.23_PM.png)

![](https://files.readme.io/f81c124-Screenshot_2023-04-10_at_8.22.45_PM.png)

For orgs that are not using promotion stacking order, all types of promotions will be available for stacking.

![](https://files.readme.io/048f5a6-Screenshot_2023-04-10_at_8.43.01_PM.png)

### API Changes:

/v1/promotion-management/promotions/settings/

1. New parameter issuanceTypePromotionRanking is added with default false. This ensures backward compatibility and flexibility that the new elements are optional.

2. New parameters are added to Reward Ranking Strategy:POS_PROMOTION_FIRSTREWARDS_FIRSTCODE_FIRST

To get started,When issuanceTypePromotionRanking is set to true, 3 new types are added as follows:

- POS Promotion

- Loyalty Promotion (Translates to customer promotion in backend)

- Earning Promotion

PROMOTION_FIRST will not be added in request, instead PROMOTION_FIRST will be replaced with the new types mentioned above.

For eg if your ranking strategy is as per below,

1. POS promotion

2. Loyalty promotion

3. Loyalty earning promotion

4. Reward-linked promotion

5. Code-based promotion

Below sample shows the payload that needs to be passed as requesthttps://{{url}}/v1/promotion-management/promotions/settings/strategy

```
{
"rewardRankingStrategies": [
    "POS_PROMOTION_FIRST",
    "LOYALTY_PROMOTION_FIRST",
    "EARNING_PROMOTION_FIRST",
    "REWARDS_FIRST",
    "CODE_FIRST"
    ],
    "issuanceTypePromotionRanking": true
  }
```

```
{
"rewardRankingStrategies": [
    "POS_PROMOTION_FIRST",
    "LOYALTY_PROMOTION_FIRST",
    "EARNING_PROMOTION_FIRST",
    "REWARDS_FIRST",
    "CODE_FIRST"
    ],
    "issuanceTypePromotionRanking": true
  }
```

When issuanceTypePromotionRanking is set to false, all the other promotions other than reward and code based (i.e POS, Earning and Customer based) are treated as one unit.These changes will be applicable to all modes such as discount, payment vouchers and tenders.

Example 1

Requirement: Brands want to apply POS promotion first, then code-based promotions, and then rest of the promotions.

Based on the old feature, brands could rank code-based promotion first or loyalty promotion first (where the default ranking is loyalty, loyalty earning and POS)

Existing strategy: loyalty, reward-linked, code-based

| Promo Type | Type | Ranking |

| --- | --- | --- |

| 10% discount to customers who purchase more than $50 worth of goods at a time. | POS | 3 |

| 5% discount on all items in the store for customers who enter the code "SAVE20" at checkout | Code-based | 4 |

| Payment mode discounts :10% always off on HDFC bank cards | Loyalty Promotions (tender based) | 1 |

| Get a flat 15% off on your purchase when you sign-up for email updates. The offer applies to the first 250 customers and each customer can avail the offer only once. | Loyalty Earned Promotions | 2 |



Based on the enhancement, brands can now rank any promotion first i.e POS can come before code-based promotion and loyalty earned promotion can come after code-based promotion.

New strategy: POS, code-based, loyalty, loyalty earned

| Promo Type | Type | Ranking |

| --- | --- | --- |

| 10% discount to customers who purchase more than $50 worth of goods at a time. | POS | 1 |

| 5% discount on all items in the store for customers who enter the code "SAVE20" at checkout | Code-based | 2 |

| Payment mode discounts  :10% always off on HDFC bank cards | Loyalty Promotions (tender based) | 3 |

| Get a flat 15% off on your purchase when you sign-up for email updates. The offer applies to the first 250 customers and each customer can avail the offer only once. | Loyalty Earned Promotions | 4 |



Example 2 - Fuel vertical

Brands want to apply POS promotions first (both for loyalty and non-loyalty customers) and then apply the rest of the promotions based on the selected strategy i.e. POS can be ranked higher than loyalty & loyalty earning. However if there is another POS promotion that gives a better discount, then it will be ranked higher and will apply.

| Promo Type | Type | Ranking | Calculated on |

| --- | --- | --- | --- |

| Fuel DiscountEg. 5% off for all customers on Fuel | POS | 1 | Net Amount of the line item received from POS i.e SaleItems.Amount |

| Fuel DiscountEg. National Day Offer: 2% off on all grades of Fuel | POS | 2 | Net Amount of the line item received from POS i.e SaleItems.Amount |

| Payment mode discounts10% always off on CITI bank cards | Loyalty Promotions (tender based) | 3 | Tender Value allocated to the line item/ SKU |



POS discounts along with MOP discounts

|  | Amount | Ranking |

| --- | --- | --- |

| Fuel | 100 |  |

| Canopy-5% | 5 | 1 |

| National day-2% | 2 | 2 |

| CITI bank -10% | 10 | 3 |



Tender based promotions are always applied after regular promotions. After processing promotions for a customer, MOP discounts are processed and are applied separately.

Cautionary Note: Until UI is available

if issuanceTypePromotionRanking is false, then there are no issues in the UI and setup of ranking.if issuanceTypePromotionRanking is true, then brands can use the API to define the ranking of promotions and it will work but later, if they use the UI to make any changes and save it then it will reverse to the original state.

API endpoint and request bodyhere

## Custom fields

You can add promotion level custom fields (meta-information) that are required for your promotion. For example, you can include Terms & Conditions, Disclaimer, and so on.

To add promotion custom fields:

1. In Custom Fields, clickAdd custom field

![334](https://files.readme.io/23fda95-5khNONTdXYDgFimjA0gNdr92dh2fHGlh9w.png)

1. InName, enter the name of the custom field.

2. In Datatype, choose the input value supported for the custom field -Date(for date fields),Number(to input numeric values),String(to input alpha-numeric values).

3. If the field is required to create a promotion, checkMandatory.

4. ClickSave.You can see the fields you added here in the Additional Information section of the promotion configuration page.

Updatedover 1 year ago