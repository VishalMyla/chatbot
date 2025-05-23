# Running Attractive Discounts on Rewards Catalog

Through marvel rewards, brands setup catalogs with products, coupons, cart promotions, vendor reward etc. The currency for all these rewards are points owned by the customer.

- With this feature, brands canCreate/edit/fetch catalog promotions on rewards

- Fetch applicable promotions in the get rewards api

Feature Description

Consider a scenario where, during a festive season or clearance sale, a brand can offer a discount of 10 points on the rewards from Feb 12 to Feb 14

Now , once the promotion is applied to the reward, the point at which the reward is available will be the discounted value.The reward will revert back to its original points value after the promotion period ends.

![](https://files.readme.io/020a5a5-image2.png)

How to get started?

To get started , brands have to enable configuration from backend. ‘CONF_ENABLE_FEATURE_CATALOG_PROMOTION=true’.

Creating Promotion

- Brands can provide discounts on points during a specific period of time.Create a catalog promotion withStart and end dateDiscount Type : ABSOLUTE, PERCENTAGE, FIXEDDiscount value : 10List of rewards on which this promotion should be applied.Mobile : For each reward, the user sees discounted points during the applied promotion duration.Mobile : Redeem a reward deducts discounted points during the promotion duration

- Create a catalog promotion with

- Start and end date

- Discount Type : ABSOLUTE, PERCENTAGE, FIXED

- Discount value : 10

- List of rewards on which this promotion should be applied.

- Mobile : For each reward, the user sees discounted points during the applied promotion duration.

- Mobile : Redeem a reward deducts discounted points during the promotion duration

- Brands can  to create catalog promotions on reward with the following fieldsPromotion namePromotion descriptionPromotion imagePromotion URLPromotion duration  (start & end date)Start date >= current dateSelect reward(s) to which the promotion appliedPromotion benefit% discountFixedTarget Fixed PriceValidationsOne reward can only be mapped to one active promotionWhen fixed, if discount >= points configured then return 0 as cost points for the reward

- Promotion name

- Promotion description

- Promotion image

- Promotion URL

- Promotion duration  (start & end date)Start date >= current date

- Start date >= current date

- Select reward(s) to which the promotion applied

- Promotion benefit% discountFixedTarget Fixed Price

- % discount

- Fixed

- Target Fixed Price

- ValidationsOne reward can only be mapped to one active promotionWhen fixed, if discount >= points configured then return 0 as cost points for the reward

- One reward can only be mapped to one active promotion

- When fixed, if discount >= points configured then return 0 as cost points for the reward

- A promotion is active, if running or yet to start and not disabled.

![](https://files.readme.io/ac811d6-image1.png)

Editing Promotion

- Rules for editing a promotionCannot edit expired promotion.Can extend the end date of active promotion.Can disable a promotion. Cannot enable it back.Link or unlink reward, discount value/type, update promotion details.

- Cannot edit expired promotion.

- Can extend the end date of active promotion.

- Can disable a promotion. Cannot enable it back.

- Link or unlink reward, discount value/type, update promotion details.

![](https://files.readme.io/a1c1bd3-image3.png)

Please note that the corresponding UI changes for this enhancement will be available in future sprints.

Viewing the configured Promotions

Brands can  see the promotions configured for rewards under a  new tab titled “Promotions”

Following data can be seen here

- Promotion name

- Promotion duration

- Rewards linked

- Promotion benefit type & value

- Promotion status

For more information on the APIsclick here

Updated8 months ago