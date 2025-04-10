# Getting Started with Rewards Catalog

Note : Rewards catalog is based on API first architecture, so brands can directly use the APIs to create, update and view the rewards.

# Prerequisite

- Marvel Rewards should be enabled for the orgTo enable, create a JIRA request to the Capillary Product Support Team with the following info:Org IDTill ID. Onboarding can be performed for only one Till in an org. The till code is necessary for onboarding organizations in Marvel because it enables the Gamification application to make an InTouch API call. This call validates the customer by retrieving their details and ensuring they are valid. Without the till code, the Gamification application cannot perform this validation during the onboarding process.

- To enable, create a JIRA request to the Capillary Product Support Team with the following info:Org IDTill ID. Onboarding can be performed for only one Till in an org. The till code is necessary for onboarding organizations in Marvel because it enables the Gamification application to make an InTouch API call. This call validates the customer by retrieving their details and ensuring they are valid. Without the till code, the Gamification application cannot perform this validation during the onboarding process.

- Org ID

- Till ID. Onboarding can be performed for only one Till in an org. The till code is necessary for onboarding organizations in Marvel because it enables the Gamification application to make an InTouch API call. This call validates the customer by retrieving their details and ensuring they are valid. Without the till code, the Gamification application cannot perform this validation during the onboarding process.

# Create Rewards

To create rewards on the Marvel UI, perform the following:

1. Go to the old UI of Capillary and type Marvel in the search bar.

![](https://files.readme.io/25357e9-image7.png)

1. Click on Marvel Rewards. You will be redirected to the below page for your org

![](https://files.readme.io/b29bae0-image10.png)

1. To create a new reward, click on the + icon on the top right corner. Enter all the fields mentioned below:

![](https://files.readme.io/adf406c-image12.png)

> ❗️Note:Ensure that an external points system (e.g., Bonus Link) is configured when enabling external points redemption at the organization level. If external points APIs are not configured, the "Create Reward" option in the UI will remain disabled.

## ❗️Note:

Note:

Ensure that an external points system (e.g., Bonus Link) is configured when enabling external points redemption at the organization level. If external points APIs are not configured, the "Create Reward" option in the UI will remain disabled.

![](https://files.readme.io/7a735b2da4eb31239e7bf74d9981dcc4b20ecd6ee3997b4c3bffa39e433d824c-image.png)

a. Type - Select the type of reward you want to create (e.g., points, voucher, free voucher). This is just a metadata.

1. Vouchers: Digital coupons generated against redeeming customer points. For example, redeem 50 points for a 10% off coupon.

2. Physical voucher: Physical coupons generated against redeeming customer points. For example, redeem 150 points for a flat 150 off coupon.

3. Free voucher: Digital coupons generated without any points redemption.

b. Priority - Set the priority level for the reward (e.g., high, medium, low or 1, 2, 3, 4 and so on). This is a metadata for the reward.

c. Category - Select the category for the reward (e.g., fashion, electronics, groceries). You can create the categories in the category section in Marvel. This is a metadata for the reward.

![](https://files.readme.io/c914bfd-image9.png)

d. Subscription - This is not working and to be ignored while creating a reward.

![](https://files.readme.io/916cba9-image5.png)

e. Advanced Filtering - Use filters such as tier, group, or label to specify the target audience for the reward. This is a metadata for the reward. The character limit for tiers, groups, and labels is 255 characters each.

f. Intouch Points - Define the number of intouch points required to purchase a reward.

g. Redemption type - Define the redemption type if it is intouch reward or vendor reward or cart promotion.

1. InTouch only rewards: These are points or coupons created in Capillary and uses Capillary APIs.

2. Vendor only rewards: These are either points or coupons created at the vendor end. Capillary uses vendor specific APIs directly to identify and issue rewards. In this case, there will be no data at the Intouch side and redemption doesn’t happen in Capillary.I

3. Vendor Intouch reward:

> 🚧AttentionIt is not recommended to use theVendor Intouch rewardredemption type. Instead, you can use theVendor only rewardredemption type to issue coupons directly through the vendor API.

## 🚧Attention

Attention

It is not recommended to use theVendor Intouch rewardredemption type. Instead, you can use theVendor only rewardredemption type to issue coupons directly through the vendor API.

`Vendor Intouch reward`

`Vendor only reward`

Here, the system will use the vendor specific API to issue vendor coupons and after receiving a successful response from the API, the system will use thecapillary issue couponAPI to issue coupons and retrieve the coupon codes. This redemption type helps to track the number of coupons issued to customers through the vendor system.

1. Cart Promotion rewards: These are promotions created in Capillary.

h. Vendor and vendor redemption

![](https://files.readme.io/9d133c0-image4.png)

In Vendor redemption, you can configure rewards linked to a particular vendor. You can also configure multiple actions in a single vendor redemption, for example, one to check if the customer has points and another to issue the reward.

> ❗️Note:Ensure that an external points system (e.g., Bonus Link) is configured when enabling external points redemption at the organization level. If external points APIs are not configured, the "Create Reward" option in the UI will remain disabled.

## ❗️Note:

Note:

Ensure that an external points system (e.g., Bonus Link) is configured when enabling external points redemption at the organization level. If external points APIs are not configured, the "Create Reward" option in the UI will remain disabled.

Begin by creating the reward partners. Navigate to the rewards vendor section

![](https://files.readme.io/df3b3f3-image6.png)

1. Click on the plus icon and assign a name to your reward partner, such as "target". Assign key-value pairs to the target. These will be used in all vendor redemptions created in subsequent steps. You can add frequently used fields as key-value pairs here. Then, click on save and create the vendor.

![](https://files.readme.io/7542727-image2.gif)

1. With the vendor created, select "target" and create vendor redemptions. Vendor redemption under vendor means specific APIs for the target will be called, created as a partner reward, and later linked to the catalog item.

![](https://files.readme.io/9b46d36-image5.gif)

1. Click on the plus icon and assign a name to your vendor redemption. Choose the type of reward, such as miles, cash wallet, cashback card, discount, charity games, vouchers, sweepstakes, auction, etc.

![](https://files.readme.io/77c56b3-image4.gif)

1. Actions are the APIs that will be called to issue this particular reward. Assign an execution order to the actions.

![](https://files.readme.io/14da9bc-image11.gif)

1. Provide the API URL for the vendor and specify the API type.

![](https://files.readme.io/475abc8-image12.gif)

1. Add the request body. Specify the redemption value and mobile number as variables here which will be passed in the request to issue a reward call. You can also include custom fields, fulfilment status and reward transaction ID in the API body. The fulfilment status and the reward transaction ID are variables resolved in the backend according to the associated transaction.Custom Field: Enables brands to add additional data in the API request. Use the formatcustomfield_customFieldName. For example, a custom field named "Address: Bangalore" should be written as customfield_Address then it will replace the value of custom field with Bangalore.Note:Only custom field created withISSUE REWARDscope is supported.Fulfillment Status:Enables to update the fulfilment status. Use the parameter fulfillmentStatus, formatted in camelCase.Reward Transaction ID: Enables to add the reward transaction ID. This helps the vendor to identify the transaction associated with the issued reward.  Use the parameter rewardTransactionId, formatted in camelCase.NOTE:The API body supports other parameters that can be included based on the brand's specific requirements or integration needs.Internal Capillary APIs can also be used.sample api payload with custom field, transaction id and fulfilment status,
    "apiBody" : "{\"transactionId_property\": \"${rewardTransactionId}\",\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",

- Custom Field: Enables brands to add additional data in the API request. Use the formatcustomfield_customFieldName. For example, a custom field named "Address: Bangalore" should be written as customfield_Address then it will replace the value of custom field with Bangalore.Note:Only custom field created withISSUE REWARDscope is supported.

`ISSUE REWARD`

- Fulfillment Status:Enables to update the fulfilment status. Use the parameter fulfillmentStatus, formatted in camelCase.

- Reward Transaction ID: Enables to add the reward transaction ID. This helps the vendor to identify the transaction associated with the issued reward.  Use the parameter rewardTransactionId, formatted in camelCase.NOTE:The API body supports other parameters that can be included based on the brand's specific requirements or integration needs.Internal Capillary APIs can also be used.sample api payload with custom field, transaction id and fulfilment status,
    "apiBody" : "{\"transactionId_property\": \"${rewardTransactionId}\",\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",

- The API body supports other parameters that can be included based on the brand's specific requirements or integration needs.

- Internal Capillary APIs can also be used.sample api payload with custom field, transaction id and fulfilment status,
    "apiBody" : "{\"transactionId_property\": \"${rewardTransactionId}\",\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",

```
,
    "apiBody" : "{\"transactionId_property\": \"${rewardTransactionId}\",\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
```

```
,
    "apiBody" : "{\"transactionId_property\": \"${rewardTransactionId}\",\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
```

![](https://files.readme.io/64254c3-image8.gif)

1. API headers contain authentication details and content-type. Enter the authorization in the API headers and save them by clicking on the + icon. Add more API headers as needed and save them.

![](https://files.readme.io/b9a21e1-image7.gif)

![](https://files.readme.io/44e2fde-image3.png)

1. Context keys contain the response of the vendor. Specify the fields to return in the response. Enter "voucher" as a mandatory param if storing any code or unique id. Provide the path of the response as value for that particular field.

![](https://files.readme.io/237d1c2-image9.gif)

1. Select the response value needed in the issue reward response block and click on save to save the vendor redemption.

![](https://files.readme.io/e6f04c4-image13.gif)

1. Create as many vendor redemptions as needed under a particular reward vendor.

![](https://files.readme.io/310e9ce-image10.png)

1. Once the vendor redemptions are created, return to the reward creation and create a new reward and select the vendor and vendor redemption to be linked to this reward.

![](https://files.readme.io/55ce942-image1.gif)

> 👍NoteThere is no limit on the number of rewards you can create.

## 👍Note

Note

There is no limit on the number of rewards you can create.

Example 1 for vendor redemptions

![](https://files.readme.io/87de328-Screenshot_2024-07-23_at_2.42.29_PM.png)

![](https://files.readme.io/03097c6-Screenshot_2024-07-23_at_2.42.38_PM.png)

![](https://files.readme.io/9ac1530-Screenshot_2024-07-23_at_2.42.48_PM.png)

Example 2 for vendor redemptions

![](https://files.readme.io/4c9412c-Screenshot_2024-07-23_at_3.06.43_PM.png)

![](https://files.readme.io/5f3bb1d-Screenshot_2024-07-23_at_3.06.55_PM.png)

![](https://files.readme.io/1d88885-Screenshot_2024-07-23_at_3.07.04_PM.png)

i. start and end date of the redemption period. While creating the reward, start date must be in the future.

j. Geographies - Select the country where the reward is applicable. This is a metadata for the reward. You can define these in the Geography section in Marvel.

![](https://files.readme.io/b705974-image8.png)

k. Name - Enter a unique name for the reward.

l. Description - Provide a brief description of the reward and its benefits.

m. Reward Image - Upload an image that represents the reward. Only one reward image can be linked to a reward in a single language.

n. Thumbnail Image - Upload a thumbnail image for the reward. Only one thumbnail image can be linked to a reward in a single language.

o. Terms and Conditions - Provide the terms and conditions associated with the reward.

1. You can also define the name, description, reward image, thumbnail image, terms and conditions in multiple languages for a particular reward. Create the languages in the languages section of Marvel and use them while creating a reward.

![](https://files.readme.io/8014249-image3.png)

1. Points Vendor: Brands can either use Capillary as the points vendor or use their own loyalty platform or partnered platform and do the configuration here in the Points vendor section of Marvel. This allows brands to use rewards catalog even if they don’t use Capillary as their loyalty product.

![](https://files.readme.io/e5fc649-image2.png)

1. Enable this option to define third party vendors for points redemption in the Points vendor section of Marvel.

![](https://files.readme.io/6b818c6-image11.png)

1. Once you have filled in all the required fields, click on the Save button to create the reward.

## Use cases

1. Intouch Rewards - Coupons & Cart Promotions

- Get a 20% discount upto 100 on your next transactions.

- Redeem 500 points and get this offer

1. External or Vendor based rewards

- Get 10 AirCap miles for every 10000 points you redeems

- Get a recharge of 100 for 500 points

## Points to Note

1. If a reward is enabled, then it will be returned in the get call. To filter out the rewards which are enabled but start date is in future, app layer can control this.

2. In case of vendor rewards, vendors should support the reversal of rewards issued.

3. Subscription section is present in Marvel UI but it is not functional.

## API documentation for Rewards Catalog

You can find the API documentationhere

Updated2 months ago