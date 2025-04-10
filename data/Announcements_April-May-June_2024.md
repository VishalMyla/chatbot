# April-May-June 2024

# Loyalty+

## Ability to create milestones/streaks in the past

As of today, one can create a milestone/streak only from the current date. However, with this enhancement, now users will be able to create a milestone/streak in the past as well.

This helps brands in creating backdated promotions of milestones/streaks type unlocking new avenues.

More details here:Milestones&Streaks

## Expiry conditions based on extended fields

After seeing several point-expiry-based use cases in the market (where few of them do not fall under any of our existing expiry strategies), we have built this new capability where the expiry date can be sent via an extended field.

Brands can send whatever date as per whatever logic they want, and the expiry will happen accordingly.

More details here:Click here

## Enrol/Unenrol API for milestones/streaks

With this brand-new API, now customers can be enrolled/unenrolled into a milestone/streak via APIs without depending on the UI. So, brands would be able to enroll/unenroll their users into a milestone/streak whenever they want (at the beginning, in the middle of the duration, etc.) as per their use case in an easy manner.

More details here:Click here

## Import profile to update customer's slab expiry date

We have enhanced the slab-related import profile where you can explicitly override the slab expiry dates of several customers in a single shot.

This slab expiry date will override the existing expiry date of the customer, and this can be very helpful to brands in a bunch of user scenarios.

More details here:Click here

## Breaking the shackles of trackers, and letting them be used anywhere in loyalty.

Until now, once a tracker is created, it has life only inside the tracker/points-tracker set of workflows. Now, we have added support for the following profiles using which the tracker value of a customer can be fetched in any set of the workflows, and can be used even in the promotions. Yes, that's right, now trackers can be used in the promotions as well using the following profiles.

- currentCustomer.trackerValueBeforeEvent("Tracker name", "Case name")

- currentCustomer.trackerValueCurrentEvent("Tracker name", "Case name")

To know more details:here

## Giving more boost to Milestones/Streaks to be used in any customer activity.

Once a milestone/streak is created, the customer's achievement (and corresponding reward allocation) can be done only via the "milestone or streak is updated (aka target-period elapsed)" customer activity so far. To solve this problem, a bundle of new profiles is created that can be used in any customer activity & access the customer's current milestone/streak status. For example:

- currentCustomer.targetAchievedInPeriod("targetName", "periodName") brings the value achieved by the customer in a specific period of a specific target.

- and many more

To know more details:here

## Promised points conversion based on behavioral event's attribute

A brand new delayed-accrual strategy support is added for behavioral events, using which the promised points can be converted to regular points based on the attribute of the behavioral event. This can unlock many customized use cases, and here is one example:

- Deadpool wants to gift 1000 points to Wolverine on the latter's birthday. But being him, the former is not sure if he can remember that so looking for a solution:

- After this enhancement, Deadpool can simply purchase the points in the promised state (with the DOB of Wolverine as the value of the attribute) & that's it. Now, these promised points will be converted to regular points on the given date.

To know more details:here: go to the 7th point (delay strategies)

## Enhancements in alternate currencies

Now, the alternate currencies become more powerful with the following enhancements:

- Support for return & return re-evaluation:here

- Event notifications:here

- Source onboarding of alternate currencies tables

## Enhancements in Milestones/Streaks

Now, the streaks become much more powerful with the following enhancement:

- Sub-targets in streaks:here

- Event notifications:here

- 3 time-dimensional tracking in Milestones/Streaks:hereAfter this enhancement, now milestones/streaks can be used to track across 3 time dimensions parallelly unlocking some of the difficult use cases in the market. For example:Use case 1:Drink apple juice 1 time a day, 4 times a week, 10 weeks a quarter.Use case 2:Walk 5k steps a day, 6 days a week, 11 weeks a quarter.

1. After this enhancement, now milestones/streaks can be used to track across 3 time dimensions parallelly unlocking some of the difficult use cases in the market. For example:Use case 1:Drink apple juice 1 time a day, 4 times a week, 10 weeks a quarter.Use case 2:Walk 5k steps a day, 6 days a week, 11 weeks a quarter.

- Individual target benefits allocation in unified targets:here

## API Enhancements

Following are some of the major API enhancements made to help brands use them more flexibly:

- API to enrol/un-enrol/re-enrol users into a milestone/streak:here&here

- Enhancements in getUserTargets:here

1. A new query param to bring only the active targets

2. Availability of achievement date in the getUserTargets for milestones & streaks

3. Timestamp along with the date for each cycle

4. Returning all streak-levels information

# Incentives

## Coupons

### Bulk Coupon Redeem API Enhancement

What’s New:

- The Bulk Coupon Redeem API now supports redeeming 100 coupons in one API call, up from the previous limit of 20.

The Bulk Coupon Redeem API now supports redeeming 100 coupons in one API call, up from the previous limit of 20.

Problem Solved:

- Users faced delays and inefficiencies when redeeming large number of coupon codes because the API only supported 20 coupon codes per call, necessitating a middle layer to call the API repeatedly.

Users faced delays and inefficiencies when redeeming large number of coupon codes because the API only supported 20 coupon codes per call, necessitating a middle layer to call the API repeatedly.

Benefits:

- Faster Redemptions: Reduced response times for bulk redemptions.

Faster Redemptions: Reduced response times for bulk redemptions.

- Improved Experience: Smoother and quicker reward processing for end users.

Improved Experience: Smoother and quicker reward processing for end users.

Refer to the API documentationhere.

## Rewards Catalog

### Reward Management: Fulfilment Status and Transaction Custom Fields

What’s New:

- Fulfilment status: Track reward fulfillment status (e.g., received, in-progress, denied, completed).

Fulfilment status: Track reward fulfillment status (e.g., received, in-progress, denied, completed).

- Custom Fields: Add up to 10 custom fields for additional metadata related to reward issuance.

Custom Fields: Add up to 10 custom fields for additional metadata related to reward issuance.

How It Helps:

- Improved Tracking: Streamline the management of reward statuses and additional details.

Improved Tracking: Streamline the management of reward statuses and additional details.

- Enhanced Experience: Provides real-time updates and clearer information for better customer interactions.

Enhanced Experience: Provides real-time updates and clearer information for better customer interactions.

When Jamie redeems his reward, the brand uses custom fields to provide details like delivery address and order ID. Additionally, real-time tracking of reward status—such as "in-progress" or "completed"—keeps Jamie informed about his reward’s journey, ensuring he always knows exactly what’s happening with his redemption.

Refer to the documentationhere.

### Multiple Payment Options for Rewards

What’s New:

- Choice of Payments: Rewards can be redeemed using different combinations of points and cash. For example, a reward can be obtained with 400 points OR 200 points + $2 OR 300 points + $1 OR $4.

Choice of Payments: Rewards can be redeemed using different combinations of points and cash. For example, a reward can be obtained with 400 points OR 200 points + $2 OR 300 points + $1 OR $4.

How It Helps:

- Flexible Redemption: Users have more options for redeeming rewards, making it easier to use their preferred payment method.

Flexible Redemption: Users have more options for redeeming rewards, making it easier to use their preferred payment method.

- Enhanced Experience: Provides varied redemption choices to suit different preferences.

Enhanced Experience: Provides varied redemption choices to suit different preferences.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdjJD7xK1UlJ3iZST7XMFjgKnqGkaSsf-hgGY41YXm0Kt9zCZbTo4kUjRRPKQXYAhjxIK_WGX-4-wFu3uE39unGG5Mh1fCkWKZhP07s8UWxe9dCyjS_ervs2Ru2wYpOckzHa7ayU8jlqGuQDlj3RfxrJonR?key=0Qibz9AGarjswM2A7Wj92g)

Sophia wants to redeem a reward but only has 200 points and $2. With the new flexible payment options, she can use her points and cash together, making it easy to get her desired reward without needing to save up more points. This versatility enhances her overall redemption experience.

Refer to the documentationhere

### Adding support for various content types

What’s New:

- New Reward Types: Introducing Gift Card, Physical Reward, Auction, Sweepstakes, Cashback, Charity, Voucher, Miles, Cash Wallet, Card-Linked Offer, Games as reward types to streamline the redemption journeys for the end user.

New Reward Types: Introducing Gift Card, Physical Reward, Auction, Sweepstakes, Cashback, Charity, Voucher, Miles, Cash Wallet, Card-Linked Offer, Games as reward types to streamline the redemption journeys for the end user.

- Flexible Payment Methods: Redeem rewards using points, cash, or a combination of both for the above reward types.

Flexible Payment Methods: Redeem rewards using points, cash, or a combination of both for the above reward types.

How It Helps:

- Enhanced Engagement: Offers diverse ways to redeem rewards, boosting user interaction and making the interface interactive for the users.

Enhanced Engagement: Offers diverse ways to redeem rewards, boosting user interaction and making the interface interactive for the users.

- Simplified Navigation:Access and manage new reward types seamlessly, improving overall user experience and satisfaction.

Simplified Navigation:Access and manage new reward types seamlessly, improving overall user experience and satisfaction.

### 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdJd-4_nctrooV4ZPzQsFJCSuh-6PBc9EayG5-5pMmsGWt-CeD3m3CPUI8fyQI0iR81G_qZ5mgBADd6wAPZhRneOw6aUuTDbAD9MrT67kIKYH-rd9znQhOXImDc8i1o30PBZh8BJcW2hrPVOa46LQTQZPA?key=0Qibz9AGarjswM2A7Wj92g)

Alex wants to get 1,000 miles towards his next flight. With the new system, he can easily convert his points to miles based on the set conversion ratio, providing a flexible and personalized redemption experience.

Refer to the documentationhere.

### Advanced Point Redemption Controls for the Catalog

What’s New:

- Enhanced Control: Marketing managers can now set limits on points redemption in the rewards catalog based on Program, Tier, Label, Supplementary Program, and Segments.

Enhanced Control: Marketing managers can now set limits on points redemption in the rewards catalog based on Program, Tier, Label, Supplementary Program, and Segments.

- Customizable Time Frames: Define redemption limits with flexible time dimensions including daily, weekly, and monthly limits, or apply overall limits without specific time frames.

Customizable Time Frames: Define redemption limits with flexible time dimensions including daily, weekly, and monthly limits, or apply overall limits without specific time frames.

How It Helps:

- Optimized Redemption: Prevents over-redemption by enforcing tailored restrictions, ensuring points are used efficiently.

Optimized Redemption: Prevents over-redemption by enforcing tailored restrictions, ensuring points are used efficiently.

- Increased Business: Encourages customers to use points during transactions, boosting overall business for brands.

Increased Business: Encourages customers to use points during transactions, boosting overall business for brands.

Jane, a Gold-tier member of the Skymiles program, enjoys exclusive access to higher point redemption limits in the rewards catalog, allowing her to redeem up to 5,000 points monthly, while base-tier members have more modest limits, ensuring tailored engagement across loyalty tiers.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfIue4RXe5Z4httK9Wf5CeVfm7Ft9deaYcYW-puIzBOzLznoiZQjmhzQ2vzi8Lfdn09RAJ_uAeMpx3ZEOw4NPLbmd2mHWlc0DNg6iLafNhOnx9xcKRZb_WWTaqm6al3Kw3DM9tRlezPhYUvmZPBwFT6cZ8?key=0Qibz9AGarjswM2A7Wj92g)

Refer to the documentationhere.

### Segment-Based Personalization for Rewards

What’s New:

- Segment-Specific Rewards:Brands can now create and display rewards based on customer segments, in addition to loyalty program tiers and supplementary programs.

Segment-Specific Rewards:Brands can now create and display rewards based on customer segments, in addition to loyalty program tiers and supplementary programs.

How It Helps:

- Personalized Experience:Offers tailored rewards to specific customer segments, increasing relevance and engagement.

Personalized Experience:Offers tailored rewards to specific customer segments, increasing relevance and engagement.

- Streamlined Catalog:Reduces clutter by showing only relevant rewards, enhancing user experience.

Streamlined Catalog:Reduces clutter by showing only relevant rewards, enhancing user experience.

- Better ROI:Focuses marketing efforts on targeted segments for improved results.

Better ROI:Focuses marketing efforts on targeted segments for improved results.

Sarah is part of the "Premium Shoppers" segment. When she browses the rewards catalog, she only sees rewards curated specifically for "Premium Shoppers," ensuring a personalized and relevant experience.

Refer to the documentationhere.

### Enhanced Reward Groups Management

What’s New:

- Multiple Group Tagging: You can now link a single reward to multiple groups and define its rank within each group.

Multiple Group Tagging: You can now link a single reward to multiple groups and define its rank within each group.

- Rank Management: Set individual ranks for rewards within groups without affecting global sorting.

Rank Management: Set individual ranks for rewards within groups without affecting global sorting.

How It Helps:

- Flexible Catalog Management: Brands can now feature rewards across different groups with specific ranks, enhancing visibility and customization.

Flexible Catalog Management: Brands can now feature rewards across different groups with specific ranks, enhancing visibility and customization.

- Improved User Experience: Users see rewards sorted by group-specific rank or default order, ensuring relevant rewards are prioritized.

Improved User Experience: Users see rewards sorted by group-specific rank or default order, ensuring relevant rewards are prioritized.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcZqkQqM2MTKpwJWtdoMAtyH5AOGxIoVmy09roYkXQwlxShJ48GXJJsiStKFy8L8qNRM72k-6kT1u0szCUX15wioK4rL1wGTZHO7Di4mWtjkmmuUJadny1el9rbgBPtolURAF9SI921_Tt5apaSgxXwAV68?key=0Qibz9AGarjswM2A7Wj92g)

A marketing manager can now tag a reward to both the “Recommended Products” group and “Home & Kitchen” group, setting distinct ranks for each. When users view rewards in the “Recommended Products” group, they see the reward at rank 1, while the “Home & Kitchen” group shows the same reward at rank 2, improving targeted visibility and relevance.

Refer to the documentationhere

# Engage+

## Journeys Reporting

You can now view block-level KPIs on the Journeys canvas as shown below:

![](https://files.readme.io/b420fb080c5a7cf83b8dc245f524ce16a90e60453a73019186c6857a49d40ed4-image.png)

Some of the KPIs that you can see on the Journeys canvas include:

Customer measures such as number of individuals who entered a block, who are waiting in a block and so on.

Channel-level measures such as messages sent, delivered, opened and clicked.

Incentives-related measures such as redemptions and issuals.

Please note this feature needs to be enabled by raising a ticket to sustenance for the time being. We will be making this available for all organizations by default by next quarter. For documentation, please gohere.

## Partner Program Linked Event in Journeys

We have added the partner program linked event to support customer journeys based on association with a subscription loyalty program. You can now use the event as the entry user event for a customer journey, in exit blocks and event-based wait blocks.

# Insights+

## Automated Onboarding of Behavioral Events:

Until recently, new behavioural events required onboarding by the Sustenance team before you could create funnel charts, export data, or build audience groups based on the filters created by an analyst. With this enhancement, behavioural events created in the CDP would be onboarded automatically into the Insights database when the data is pushed into the behavioural event, eliminating the need for the Sustenance team while allowing you to perform the same functions as before.For more information, please refer to the documentationhere.

## Reporting on Platform Extensions:

Currently, platform extensions allow you to extend the platform’s capabilities and store additional data. However, until now, reporting on this data through the extensions was not possible.  As a part of this enhancement we have built a functionality that syncs this data with the ETL runs in the Insights Database on a daily basis, enabling comprehensive reporting.For more information, please refer to the documentationhere.

# Capillary Data Platform (CDP)

## Behavioural Events Lookup API

We have introduced a new API to look up behavioural events and filter using one or more query parameters including event name, customer identifiers, group identifiers (if the event is a user group behavioural event), date range and even the value of attributes of events. For more details on this powerful API, please gohere.

## Till Custom Fields

We have introduced custom field support for the till entity. In case you want to capture additional information against a till, you can use custom fields for that purpose. However, please remember that you cannot act on data in custom fields on any of our downstream products. Please goherefor more details on how to add custom fields against a till.

## Bulk Transaction Update API

You can now update transaction-level custom fields and extended fields and also line-level extended fields (there are no custom fields supported at the line level for now) in bulk using a newtransaction update bulkAPI. Please read the FAQ section in the document to understand what the API can and cannot do.

## Update Permissions of Members in a User Group

Another update API - Permissions related to what a member of a user group (v2) can do can now be updated using our newpermissions update API.

## UI extensions on the Capillary platform (Vulcan Framework)

A brief about Vulcan Framework

Vulcan is a react-based UI framework using which you can create customized UI screens & embed them on Capillary platform. As of now, you can use it to create any react-based UI application behind intouch authentication and embed it on Membercare. Long-term vision is that you would be able to create any UI application & embed it in any intouch module apart from creating external applications.

Overall, we seek to replace our Sharingan framework which was based on PHP tech-stack with this new framework. However, it’s not just the tech-stack upgrade that we get as a part of Vulcan; it is more secure & integrates seamlessly with our Intouch UI. From these UI extension applications, you can access any Capillary API (Intouch APIs, Node APIs, API Extensions based APIs) and UI design elements out of the box.

To know more on how you can create a new application, host it on the Capillary platform & embed it in Intouch UI, check out the documentation on UI extensionshere.

Member care Customizations using Vulcan

Over the past few quarters, we have been receiving a number of customization requests on Membercare. These customizations range from very basic ones like removing a widget from a screen to very complex ones like changing the search functionality/ redoing the layout of Membercare.

To cater to these requests, we have created a Vulcan replica of our existing Member Care product (yes, Vulcan is that powerful!) & are making it available on the platform.For now, we are suggesting that if a brand has a huge list of customization requests - you can download the Vulcan replica of Membercare & edit it to suit the brand’s requirements.

However, if there are very few customization requirements - as of now, we would refrain from using the Vulcan replica of Membercare - owing to a few ongoing internal decisions.

Check out how you can completely customize abrand’s Membercare experience here.

Updated2 months ago