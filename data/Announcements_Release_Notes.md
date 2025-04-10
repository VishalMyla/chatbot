# Release Notes

# Engage+

## Mobile SDK

### Hydra iOS SDK release1.6.0

[1.6.0](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.6.0)

- Performance ImprovementsUsed backgroundContext for CRUD operations to improve Core Data efficiency.Optimized database operations using asynchronous perform methods.Created a separate queue for thread-safe resource access.

- Used backgroundContext for CRUD operations to improve Core Data efficiency.

- Optimized database operations using asynchronous perform methods.

- Created a separate queue for thread-safe resource access.

- Bug FixesResolved issues in event handling and pull notifications.

- Resolved issues in event handling and pull notifications.

- Feature EnhancementsAdded public methods to update various Hydra attributes.Added completion blocks for critical asynchronous operations like DLR event reporting and database insertions.

- Added public methods to update various Hydra attributes.

- Added completion blocks for critical asynchronous operations like DLR event reporting and database insertions.

- Database and Notification HandlingSet mergePolicy for the backgroundContext to handle conflicts gracefully.Improved unread notification count retrieval with a dedicated method.Updated notifications as read when a user interacts with them.Enhanced pull approach by saving valid notifications into the database before further processing.

- Set mergePolicy for the backgroundContext to handle conflicts gracefully.

- Improved unread notification count retrieval with a dedicated method.

- Updated notifications as read when a user interacts with them.

- Enhanced pull approach by saving valid notifications into the database before further processing.

### Hydra iOS SDK release1.6.2

[1.6.2](https://github.com/Capillary/hydra-sdk-ios-packages/releases/tag/1.6.2)

New Features & Enhancements

- Database Improvements:Added missing fields in the database.Changed the type of the custom field to [[String: Any]].

- Added missing fields in the database.

- Changed the type of the custom field to [[String: Any]].

- Shared Data Support:Added support to share the Events database using App Groups.Now using shared user defaults to store and fetch the push notification opt-in status.

- Added support to share the Events database using App Groups.

- Now using shared user defaults to store and fetch the push notification opt-in status.

- SwiftUI Support:Introduced a public API to get the NotificationCenterView in SwiftUI applications.

- Introduced a public API to get the NotificationCenterView in SwiftUI applications.

- Badge Count Enhancements:Reset badge count to zero on the first-time install of the app.

- Reset badge count to zero on the first-time install of the app.

### Andoroid SDK release (1.8.10)

Included the following versions of dependencies -versions = [               core     : '1.6.9',               pushbase        : '1.7.10',               firebase        : '1.7.9',               richnotification: '1.3.9',               mipushkit       : '1.3.9',               inboxcore: '1.4.9',               inboxui  : '1.4.10',               inapp           : '1.3.9',               catalog  : '1.8.10'       ]

```
versions = [               core     : '1.6.9',               pushbase        : '1.7.10',               firebase        : '1.7.9',               richnotification: '1.3.9',               mipushkit       : '1.3.9',               inboxcore: '1.4.9',               inboxui  : '1.4.10',               inapp           : '1.3.9',               catalog  : '1.8.10'       ]
```

## New event onboarded

On popular demand, we have onboarded the below events as entry trigger to journeys:

- Customer Update

- Promotion Issued

- Coupon Issued

- Points Issued

- Reward Issued

- Tier Upgraded

- Tier Downgraded

You can find all the available entry trigger events overhere.

## New tags added

We added the below tags to journeys:

Transaction Id and Bill Points to the Transaction Profile as a part of Transaction Entry Event. We have also added the User Id AES tag to the Customer section

![](https://files.readme.io/d112737213bc628994f9d4a7ddb90d4acc57a7694a88d671f96c25faa34bafb2-Screenshot_2025-02-11_at_3.27.22_PM.png)

![](https://files.readme.io/fabf873022d61e44f7ea0ce01f088cf4a02952d82b7c8026d373030a5c4574bc-Screenshot_2025-02-11_at_3.26.56_PM.png)

## View multiple user entry in Journey History

Now that we allow the same user to enter the journey multiple times, we have enhanced the journey user history feature. When you click on the search icon, a side panel opens where you enter the user's Id. When searching, you can see the list of entries for the user ordered by latest first. You can then select a specific entry to see the user's journey.

![](https://files.readme.io/cae0e483b69a83bc2ddc1ce016050733ae81e51036b3ad8bfbe7a187a4d36838-830e2b84627893e715e20155a4ceefc8e55059d19dc16b98efcd9b82969a904c-Search_Customer.gif)

You can find more informationhere.

# Insights+

## Enhancing Reporting - Support for all types of Audience Groups as filters

Previously, only filter-based audience groups were supported as filters in the reports. As a part of this minor enhancement, we have enriched reporting to support all types of audience groups—combined, uploaded, or filter-based as filters.This will enable brands to compare reports across a combination of audience groups, including uploaded ones.You can find more informationhere.

# Incentives

## Enhanced Coupon Code Redemption Limits

Brands can now set a maximum redemption limit for a coupon code across all customers.

Example

A brand issues a "SALE50" coupon with the following settings:

- Coupon code redemption limit as 50 and anyone can redeem the coupon

John receives the "SALE50" coupon and shares it with his friends. Since the coupon is not restricted to a single user, anyone with the code can redeem it. However, once the total number of redemptions reaches 50, the coupon becomes invalid for all customers, even if some individuals have not yet used it.

This update provides brands with greater control over coupon distribution, preventing excessive redemptions beyond the predefined limit.

![](https://files.readme.io/df211fbf69c74a72bd0793454a6d9beb5a6062f1bd5c5c81525b822aabf1d03f-image1.png)

### UX Revamp: Improved Coupon Issuance & Redemption Limits UI

We've redesigned the coupon issuance and redemption limits interface for a more intuitive and seamless user experience. Managing limits is now simpler and more efficient.

![](https://files.readme.io/a63de45b67edf2f49cea5f4d8e332a07ed35a432b0f761ddd5b1b92f50bdcb2e-Issual_and_Redemption_Limits_Process_Steps_1.gif)

For more information, refer to the documentationhere.

# Rewards Catalog

## Merge Customer Rewards During Customer Merge

The Customer Merge feature is now enhanced to support the merge of rewards. When two customer accounts are merged, the rewards from the survivor (merged) account are transferred to the victim (retained) account. This ensures that all rewards are consolidated under the surviving account.

To know more about this feature, refer to the documentationhere.

## Ability to add metadata and images for vendors

The Vendor Management API has been enhanced to support adding a description, vendor code, rank, images, and videos related to the vendor. This enhances the presentation of vendor information, improving the customer experience.

![](https://files.readme.io/e5ca53916fa37165c799283293fa6f3c27bf0004937157480be0a1af626dd654-image.png)

To know more about this feature, refer to the documentation onVendor Management API.

## Support for adding external image URL and altText in rewards

The Reward APIs have been enhanced to support external image and video URLs, allowing reward images to be provided via a URL alongside the existing option of uploading images and videos to the internal S3 file service. Additionally, an optional alt text field has been introduced for both images and videos, which can be used to add a description of the image’s or video’s context.

![](https://files.readme.io/d838ebba75aadff92f9e4bd767868b4e55a724d2e87e563e07fb79ab9d141e0e-image.png)

For more information, refer to the documentationhere.

## Support for enum data type in custom fields

The Create Custom Field for Rewards API has been updated to support the ENUM data type. This allows you to create a custom field with multiple possible pre-defined values.

For example, as a reward manager, you can create a custom field called "Reward Category" and define possible values such as "Discount", "Free Gift", ”Merchandise” and "Cashback." When creating or updating a reward, you can select one of these predefined values for the "Reward Category" custom field.

![The UI is tentative and will come in future sprints.](https://files.readme.io/ee07f798f7afc8cc36f12e9653adc1487bb3cc85bda4fd068656fda67c7cf636-image.png)

The UI is tentative and will come in future sprints.

For more information, refer to the documentationhere.

## Get Reward Transaction API now accepts only transactionId and return the details

The GET Reward Transaction API has been enhanced to retrieve reward transaction details using only the reward transaction id without the need to pass the customer id.

For more information, refer to the documentationhere.

Updatedabout 1 month ago