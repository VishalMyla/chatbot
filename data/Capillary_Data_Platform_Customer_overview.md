# Customer overview

In Member Care, you can view profile information, customer status, subscription details, interactions, transactions, and other loyalty details of a customer. This section provides information on how to access customer details and update specific information from Member Care.

To view the overview of customer details:

1. Log on to InTouch and navigate toMember Care.

2. From the drop-down inSearch, selectCustomers.

3. In the search box, enter the complete customer identifier such as registered mobile number, email ID, external ID, card number, card external ID, or name, and from the search result list select the customer profile.

![](https://files.readme.io/94cfca6-Customer_seach.png)

By default, the application displays theOverviewtab. TheOverviewtab displays the basic details of the customer. This page is also called Customer Single View (CSV).

To know more details about the customer click theLoyalty,Events,Incentives, andCommunicationstabs.

# Overview

![](https://files.readme.io/c87a2af-Customer_overview.gif)

The overview tab contains below details:

| No. | Title |

| --- | --- |

| 1 | Source profile |

| 2 | Customer status and name |

| 3 | Customer identifiers |

| 4 | Communication channels |

| 5 | Customer attributes |

| 6 | Customer stats |

| 7 | Store details |

| 8 | Active Coupons |

| 9 | Recent transactions |

| 10 | Customer segments |



[Source profile](/docs/customer-overview#source-profiles)

[Customer status and name](/docs/customer-overview#customer-status-and-name)

[Customer identifiers](/docs/customer-overview#customer-identifiers)

[Communication channels](/docs/customer-overview#communication-channels)

[Customer attributes](/docs/customer-overview#customer-attributes)

[Customer stats](/docs/customer-overview#customer-stats)

[Store details](/docs/customer-overview#store-details)

[Active Coupons](/docs/customer-overview#active-coupons)

[Recent transactions](/docs/customer-overview#recent-transactions)

[Customer segments](/docs/customer-overview#customer-segments)

## Source profiles

This page shows the customer registration sources in multiple tabs. Capillary supports different sources such as InStore, Facebook, Webengage, WeChat (China-specific), mobile app websites, Line, TMALL, E-commerce sites, WhatsApp, and more.By default, InStore is set as the default source. There are also sources such as Mobile Push, Facebook, and WeChat that can have multiple accounts within the org. You can see the customer details from each account of the source.

![](https://files.readme.io/a8a2028-Customer_source.png)

For example, in the above image, you can see numbers on top of the profile icons. The number 3 on the Whatsapp icon means that the customer has profiles from three WhatsApp accounts of the org. You can click on the Whatsapp icon and choose between one of the three profiles that you want to see.

## Customer status and name

This section shows the current status (custom status label or fraud status) of the customer, the name, and the date when the customer registered. The customer status setting is not by default enabled for an org, its enabled only on a request from the Success team.

![](https://files.readme.io/ecda604-Customer_status.png)

All orgs might not have Customer Status enabled. Hence, you would see Fraud Status (default enabled) for orgs that have not enabled Customer Status. TheFraud Statusis the legacy version ofCustomer Status.

Fraud status contains predefined values (MARKED, CONFIRMED, NOT_FRAUD, RECONFIRMED, INTERNAL), unlike Customer label which contains user-defined values (called custom labels).

This remains blank when Both Customer Status and Fraud Status are not set for the customer.

You can also see the Status card available in the overview tab.

![552](https://files.readme.io/bb7ddd7-Status.png)

Here you can see the following statuses of the customer:

- Loyalty status: Displays the loyalty status. For example, Loyal.

- Test & control status: You can also change the current group of customers from test to control or vice versa. Click on the more options icon > Change test and control status > InChange to, set the new status.

- Customer status code:  Defines the current customer status in the Capillary system.

- Customer status label: Defines the customer status.   To change the customer status label, click on the more options icon >Change customer status label>Change to, choose the new status >Reason, type the reason or notes for updating the status label > ClickSave.

> 👍NoteFrom June 2024, the customer status feature will be enabled by default for new organizations.

## 👍Note

Note

From June 2024, the customer status feature will be enabled by default for new organizations.

## Group details

> ❗️This is applicable only to customers who are part of a hierarchy. SeeMember hierarchyfor more details.

## ❗️This is applicable only to customers who are part of a hierarchy. SeeMember hierarchyfor more details.

This is applicable only to customers who are part of a hierarchy. SeeMember hierarchyfor more details.

The section shows below details:

- The number of groups the customer belongs to

- Customer's contribution towards the group

- Group lifetime spend

- (for non-friends&family groups) Company name and role of the member in the group

You can click the download icon and download the total list of groups the customer belongs to.

![Friends and family group](https://files.readme.io/118b709-small-Total_groups.png)

Friends and family group

![Company group](https://files.readme.io/971f2ba-small-Company_info_and_role.png)

Company group

## Customer identifiers

This section shows the registered identifiers of the customer. The first identifier is the primary identifier of the org and the remaining are the supported secondary identifiers. Member Care supports mobile numbers, email ID, external ID, card number, card external ID, WeChat union ID, and more. However, you will see only org-supported identifiers

![](https://files.readme.io/d508da7-Customer_identifier.png)

By default, it shows up to three identifiers. To view more identifiers, clickShow more.

## Member hierarchy

> ❗️This is applicable only for customers who are part of a company group.

## ❗️This is applicable only for customers who are part of a company group.

This is applicable only for customers who are part of a company group.

For members who are part of a company/non-family & friends group, you can click the hierarchy icon and view the member hierarchy. For more information on hierarchy, seeMember hierarchy.

![](https://files.readme.io/9cc024c-small-Hierarchy.png)

The member hierarchy page displays the member hierarchy with their primary identifier. You can search for a member and also click on theDownloadoption to download the member list.

![](https://files.readme.io/fc369d5-small-Member_hierarchy_page.png)

## Communication channels

This shows the communication channels associated with each source profile. Click on the drop-down to expand. Each source can have multiple communication channels. A customer can have different identifiers for a channel across sources.

The sectionReachable onshows the communication channels that are available for the customer. For example, if a customer has logged in to the org's app, we capture the Android or iOS device ID. A mobile push icon will be shown. Similarly, if a user has shared his/her email address, we will show the e-mail icon.

![](https://files.readme.io/482e5d6-Communication_details.png)

> 📘The Communication channels section shows blank when no information is available. This happens especially when customer has registered using card number or external  ID without providing any communication details.

## 📘

The Communication channels section shows blank when no information is available. This happens especially when customer has registered using card number or external  ID without providing any communication details.

## Active coupons

Shows the list of active coupons available for the customer. Use the horizontal scroll options to toggle between different coupons available. You will see the code and the applicable discount for each coupon.

![](https://files.readme.io/da89e81-Active_Coupons.png)

## Recent transactions

This section shows the recent transactions of the customer. You will see the transaction date, transaction number, points issued, points redeemed, and the type of transaction - Regular, Return, or Mixed. Use the horizontal scroll options to toggle between different transactions available.

![](https://files.readme.io/5f31237-Recent_Transactions.png)

To view complete details of each transaction or access recent transactions, clickView all.

## Customer attributes

This shows the custom field and extended field details captured for the customer. The names shown in the screenshot may differ for each org depending on what was created or enabled for your org.

Custom fields are denoted with a blue dot.

![1111](https://files.readme.io/1229c5c-customfields.png)

## Store details

This shows the store-related information of the customer such as registered TILL, recently transacted store, date and time of the recent transaction, and preferred store (store code).

You can also change the preferred store of the customer. To change click the more options icon >Change preferred store. You will see the current store and an option to change the store.

InChange to, choose the new preferred store and clickSave.

![](https://files.readme.io/621c8d1-Store_details.png)

## Behavioural stats

This shows the key metrics of the customer transactions such as:

- Lifetime purchase

- Average transaction value

- Total transactions

- Average basket size

- Frequency of visit

- Earn-burn ratio

- Coupon redemption rate

- Referrals made

![](https://files.readme.io/3424601-Behavioural_stats.png)

## Segments

Customer Segmentation is a logical grouping of audiences based on shared characteristics. Segments are used to tailor the marketing efforts of brands effectively. Segmentation is usually done based on demographics or customer behavior. Member Care shows the list of segments that the customer is in. These segments were created on Insights+. You can see the segment value of the customer in each segment.

To view segment details, clickView all. You can search for a specific segment using the Search box.

![](https://files.readme.io/332129c-Customer_segments.png)

## Groups

> ❗️This is only applicable if customer is part of any group.

## ❗️This is only applicable if customer is part of any group.

This is only applicable if customer is part of any group.

Displays the details of groups the customer belongs to. You can also click the download icon and download the group details.

![](https://files.readme.io/9f022eb-small-Groups.png)

## Subscription status

This section allows you to view and set the subscription status of a customer.

To view the subscription status, click on the desired source profile > select the org from the drop-down > select the channel.

![](https://files.readme.io/2301a8d-View_Subscription_status.png)

To set the subscription status,

1. Select the source > org and click on the three dots.

2. Select the channel.

3. To enable or disable the promotional subscription status, click thePromotional statustoggle switch.

4. To enable or disable the transactional subscription status, click theTransactional statustoggle switch.

5. ClickSave.

![](https://files.readme.io/05ebee6-Set_subscription.jpg)

## Cards

You can view the details of each active card of the customer. To toggle between different cards,  either use the horizontal scroll options or the drop-down box.To view the loyalty details of a specific card, click on the card or select the card from the drop-down.

![](https://files.readme.io/4833403-Card_options.png)

### Link card

To link a card,

1. On theCardssection, click the three dots menu.

2. In theCard numberfield, enter the card number that you want to link.

3. ClickCheck availabilityto check the availability of the card.

4. From theCard labeldrop-down, selectACTIVE. Only ACTIVE labels can be assigned to the cards issued from here.

5. ClickSave.

![](https://files.readme.io/68f8be3-Link_card.png)

To configure card issual settings and OTP validation, referCard issual settings.

## Issue card

To issue a card,

1. From theSelect card seriesdrop-down, select the card series.

2. From theCard labeldrop-down, selectACTIVE. Only ACTIVE labels can be assigned to the cards issued from here.

3. If OTP validation is enabled for the org, enter the OTP received.

4. ClickIssue.

![](https://files.readme.io/2b9cc15-image.png)

## Change card status & label

To change the status and label of a card,

1. On theCardssection, click the three dots menu.

2. From theCard numberdrop-down, select the card number for which you want to change the status and label.

3. From theNew card status & label, select the card status and label.

4. ClickSave.

![](https://files.readme.io/5d1c91e-image.png)

> 📘NoteYou cannot configure any restrictions/blocking actions for customers based on the card status.

## 📘Note

Note

You cannot configure any restrictions/blocking actions for customers based on the card status.

Updated10 months ago