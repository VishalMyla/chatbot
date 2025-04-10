# July-August-September 2024

# Loyalty+

## Leaderboards for Milestones

A new feature to gamifymilestones. Leaderboards provide a high-score list where customers are ranked based on their progress towards a milestone. Brand can enable leaderboards for existing milestones or create new leaderboard-enabled milestones.

To enable leaderboards for a milestone refer to theleaderboards documentation.

### APIs for leaderboards

1. Get top ranked users:Get a ranked list of users who have achieved a target within a timeframe.

2. Get user rank across target groups: Get a user’s rankings in all enrolled targets within a timeframe.

Refer to the documentation on theget top ranked usersAPI and theget user rank across target groupsAPI.

## User Created Challenges

A new feature formilestonesthat lets users create a challenge for themselves and earn rewards for completing them. Existing milestone APIs have been updated to support this feature.

To know more, refer to the documentation onuser created challenges.

## Connected Organisations Milestone APIs

Connected Organisations (Connected Orgs) represent an enhanced version of the Org Unit concept, designed with data segregation and security in consideration. In this model, each business unit is structured as a separate organisation, connected to one common organisation, which itself functions as an independent entity.

To know more about the Milestone APIs that supports connected orgs, refer to the documentationhere.

## Tier Enhancements

With the latest tier enhancements, brands now will be able to implement the following use cases in both tier upgrades & tier renewals.

1. ANY (N-1)

2. ALL N

3. Custom conditions

To know more about this, refertier-upgrades&tier-renewals.

## Enhancements to Advanced Capping

Enhancements to the advanced settings for capping loyalty points.

1. Configuration page for advanced capping is moved to theAdvanced settingsof the loyalty program.

2. Support for all types ofcustomer activities.

3. Limit for individual customer limits increased to 50.

4. Choose the customer segment (audience) when creating a limit for individual customers.

To know more, refer to the documentation onadvanced capping.

## Enhancements to Ledger Explode API

Enhancements to the get points ledger explode info API.

1. Addition of two new query parameters:eventNameandeventReferenceIds.

`eventName`

`eventReferenceIds`

2. Support for behavioral events.

To know more, refer to the documentation onGet Points Ledger Explode infoAPI.

# Incentives+

## Coupons

### Issue Multiple Coupons to a Customer in a Single API Call

What’s New:Introducing a new API that allows issuing multiple coupons from the same series to a single customer in one API call.

Problem Solved:Brands previously faced limitations when issuing multiple coupons to a single customer for tier changes or event-based activities, requiring repetitive API calls.

How It Helps:

- Efficient Coupon Distribution: Streamlines the process of issuing multiple coupons, reducing manual effort and improving response times.

- Flexible Campaigns: Supports use cases like issuing 10 coupons on tier upgrades (e.g., Silver to Gold) or rewarding customers with 5 coupons from the same series for completing a milestone.

Refer to the documentationhere.

[here](/reference/issue-bulk-coupon-with-count-from-series)

### Custom Expiry Date Changes for Coupons

What’s New:You can now extend or shorten the expiry dates of active or expired coupon codes, providing enhanced flexibility to meet unique customer needs.

Problem Solved:

- Lack of Flexibility: Previously, customers could not extend or modify the expiry dates of active or expired coupons, limiting their ability to redeem offers when needed.

- Inability to Accommodate Special Circumstances: Brands struggled to adjust coupon expiry dates to address special requests or unforeseen delays, impacting customer satisfaction and loyalty.

Use Cases:

- Frequent Flyer: Imagine a frequent flyer who receives a special coupon for her next flight. Due to unforeseen delays, she can't book in time. With the new feature, her request to extend the coupon's expiry is promptly handled by customer support, ensuring a seamless experience.

- Hotel Guest: A hotel guest can now use an active coupon even if it originally expired during their stay, thanks to the ability to extend the expiry date. This flexibility enhances the guest's experience and ensures they benefit from the offer.

This feature ensures the coupons remain relevant and useful, helping to boost customer satisfaction and brand loyalty.

Refer to the documentationhere.

[here](/reference/update-coupon-code-expiry-date)

### API for Revoking Active Issued Coupons

What’s New:

- Revoke active issued coupons for a particular customer for a coupon series

Revoke active issued coupons for a particular customer for a coupon series

- Revoke specific active issued coupons for a particular coupon series

Revoke specific active issued coupons for a particular coupon series

Problems Solved:

- Lack of synchronous API to revoke coupons for individual customers or specific coupon codes.

Lack of synchronous API to revoke coupons for individual customers or specific coupon codes.

Use case:

- When a customer's tier is upgraded, this API helps revoke all active issued coupons tied to their previous tier, ensuring they receive fresh, relevant coupons aligned with their new tier status. This streamlines tier-based rewards management and enhances customer experience.

When a customer's tier is upgraded, this API helps revoke all active issued coupons tied to their previous tier, ensuring they receive fresh, relevant coupons aligned with their new tier status. This streamlines tier-based rewards management and enhances customer experience.

- In cases of suspected customer fraud or business-driven decisions to deactivate certain coupon codes, this API allows users to revoke specific active issued coupon codes which are not redeemed, either individually or in bulk. This ensures control over coupon misuse and enables flexible management of coupons.

In cases of suspected customer fraud or business-driven decisions to deactivate certain coupon codes, this API allows users to revoke specific active issued coupon codes which are not redeemed, either individually or in bulk. This ensures control over coupon misuse and enables flexible management of coupons.

For detailed API documentation, referthis.

### Support for Coupon Code Formatting in Get Calls

#### What’s New:

Users can now retrieve coupon codes in their preferred format—uppercase, lowercase, or as originally entered—offering greater flexibility in how codes are displayed and managed.

#### Problem Solved:

Previously, coupon codes were returned solely in uppercase, even when created with mixed or lowercase characters. This led to redemption issues in case-sensitive third-party systems. With this update, exact-case retrieval and flexible formatting options ensure smooth compatibility and accurate coupon usage across systems.

#### Key Details:

- Formatting Options: Choose from three formats when retrieving coupon codes:LOWER: Converts codes to lowercase.UPPER: Converts codes to uppercase (default setting).AS_IT_IS: Keeps the code in its original format as entered (e.g., "abAB123" remains "abAB123").

- LOWER: Converts codes to lowercase.

- UPPER: Converts codes to uppercase (default setting).

- AS_IT_IS: Keeps the code in its original format as entered (e.g., "abAB123" remains "abAB123").

Refer to the API documentation below:

1. Get customer coupons

2. Get coupon details v2

3. Get coupon details v1

## Badges

### Badge API Updates: Group Data and Filtering Added

Customer badge APIs now pass group name, group rank, and badge rank, with added support for group ID filtering.

Read the API documentationhere.

[here](/reference/badges)

### Historical Badge Import and Earned Badge Management

What’s New:

- Historical Badge Import:Introducing a new feature to support the creation of badges in bulk with historical start dates using the Connect+ template.By using the "X-CAP-BADGES-MIGRATION":"migration" header in the Additional Headers field, you can now seamlessly migrate both expired and ongoing badges from other platforms into the Capillary system.This ensures that badges, whether expired or still active but started in the past, are accurately reflected in the system, maintaining continuity in your loyalty programs.Readhere.

- By using the "X-CAP-BADGES-MIGRATION":"migration" header in the Additional Headers field, you can now seamlessly migrate both expired and ongoing badges from other platforms into the Capillary system.

- This ensures that badges, whether expired or still active but started in the past, are accurately reflected in the system, maintaining continuity in your loyalty programs.

- Readhere.

[here](/docs/create_badges#creating-a-historical-badge-badge-with-a-past-date)

- Customer Earned Badges Import:Introducing a template to manage the migration of earned badges for customers.This template allows brands to transfer historical badges, including those that have expired or are still active but were awarded in the past.Ideal for bulk migration and offline activities, this feature ensures a seamless transition to Capillary’s loyalty platform without losing any customer achievements.Readhere.

- This template allows brands to transfer historical badges, including those that have expired or are still active but were awarded in the past.

- Ideal for bulk migration and offline activities, this feature ensures a seamless transition to Capillary’s loyalty platform without losing any customer achievements.

- Readhere.

[here](/docs/import-earned-badges-of-customer-template)

### Fixed Window Tracking for Badge Issual Restrictions

What’s New:

- Added support for fixed window tracking in badge issual restrictions, allowing brands to set time-based limits (daily, weekly, or monthly) for badge issuals.

Added support for fixed window tracking in badge issual restrictions, allowing brands to set time-based limits (daily, weekly, or monthly) for badge issuals.

Problem Solved:

- Brands with retroactive workflows needed more flexible time-based limits for badge issuals. The current moving window approach didn't fully support retro activities.

Brands with retroactive workflows needed more flexible time-based limits for badge issuals. The current moving window approach didn't fully support retro activities.

Use Cases:

- Brands can now set fixed time-based limits when badges are issued within a specific period.

Brands can now set fixed time-based limits when badges are issued within a specific period.

- Supports retroactive flows where the system evaluates badge limits based on fixed window defined instead of moving window.

Supports retroactive flows where the system evaluates badge limits based on fixed window defined instead of moving window.

- Users can choose daily, weekly, or calendar-monthly windows for badges and configure them with specific refresh rates.

Users can choose daily, weekly, or calendar-monthly windows for badges and configure them with specific refresh rates.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeDHywu6hEuvfrbnVs4L8miztAnUXtF7YpKVKBWVpbX-hosylPn_hJ0pVNSaCwcc-CLxLeqKUfFx9auQ4T-uklAU2Dt1eGBAJiG60bR1c2nYVPB_vX4k7hdtyeaSr1MBrLnZ4jdpDUXo4Rr_tULhkRYely8?key=3e6wj4YfXYwm_21fhkjmcA)

For more details, refer tothisdocumentation.

### Now add Cart Promotions and Gift Vouchers as a benefit to Badges

What’s New:

Introducing the ability to add cart promotions and gift vouchers as benefits to badges, in addition to existing options like points and coupons.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeVBMB5VVTO4Y-KfKz-wCl3esyRyUrcxMLg23oZUVhqRzB8e1N2MxnUcumPMobdGPNIt1vSw8szpA8MwjfZD2Fu6-4_Vn6ag3V1VZsdxXpHHebKICIj3yP_-pQD0LbYJpAhWZAejJCCavBH2pFZ6IADTwkH?key=3e6wj4YfXYwm_21fhkjmcA)

For more details, refer tothisdocumentation

### UI for Managing Custom Fields and Placement Metadata in Badges

What’s New:

UI to manage custom fields for badges as well as organize group and rank placement metadata is now available.

Key Features:

- Custom Fields Management:Easily create, update, and manage custom fields for badges through the UI, offering more flexibility and control.

Custom Fields Management:Easily create, update, and manage custom fields for badges through the UI, offering more flexibility and control.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeWwwBfuHdcrki94TJibJ3aGfPfF6lV6JMEEUyeKsdqjJ4_a0nAbsqiP3suXmjc7PbL0C9Wa3XD-BiyEZ-JZjRH6sQ4DDwXXWCN4KQZPH7bqVDzJW_3tMeuPNf8R669EzwGQ1-4QeXg8SO0SAIPprPAKvo?key=3e6wj4YfXYwm_21fhkjmcA)

- Groups & Rank Placement Metadata:Organize badges with group and rank placement metadata to enhance sorting and display, all within a user-friendly interface.

Groups & Rank Placement Metadata:Organize badges with group and rank placement metadata to enhance sorting and display, all within a user-friendly interface.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdSgEyDl-veD-x_zIxIWzBZ0liXr6mfQSYVx3ganyOdV6YoUVlrZ7B366t3rc09KUfjg9D8so8CXPZNE9mjILSgvBX9ozfy3xYkFdOEesdJMbcmvKmmY2lyU8sb_kC03hIBUiHh_yo-Ktf_qFFY_Gnktws?key=3e6wj4YfXYwm_21fhkjmcA)

Refer to the documentationhere.

### Track and Export Badge Metrics

Now, effortlessly track badge performance with our robust reporting feature. Export badges issued and earned, and dive deep into key metrics like badge issuance, and earning based on badge type.

Key Features:

- Standard insights report

Standard insights report

- Export Badges: Seamlessly export all badges in which customers are enrolled and all badges which are issued to the customers for in-depth analysis.

Export Badges: Seamlessly export all badges in which customers are enrolled and all badges which are issued to the customers for in-depth analysis.

- Track Performance KPIs: Monitor metrics such as number of badges created, issued, and earned, along with distribution by status and key criteria.

Track Performance KPIs: Monitor metrics such as number of badges created, issued, and earned, along with distribution by status and key criteria.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe9-q-XNW2yAku0DM1jdImjTyalAY6F1aKA5CdVqHjvI8TRYEgk3phs4umENOlOSOrEruV3iJhITPHjAYigQyGZ7cLK0nOIcTLNZodD1DZY-Pg7sVaJ_HuFDcPQa8AkapzdVksBBXZPMOqk1MtPUpX8YN0?key=3e6wj4YfXYwm_21fhkjmcA)

Read the documentationhere

### Enhanced Badge Ownership and Claim Information

What’s New:

We’ve introduced a clear distinction between badge ownership in Loyalty Promotions and Loyalty Workflows to improve auditing and reporting.

Key Changes:

- New Ownership Categories:Badges now have distinct owners: "Loyalty" for loyalty workflows and "Loyalty Promotions" for loyalty promotions.

New Ownership Categories:Badges now have distinct owners: "Loyalty" for loyalty workflows and "Loyalty Promotions" for loyalty promotions.

- Badge Visibility:Badges tagged as "Loyalty Promotions" will appear in Loyalty Promotions.Badges tagged as "Loyalty" will be listed in Loyalty Workflows under Programs.If a badge is tagged as both "Loyalty Promotions" and "Loyalty", it will be visible in both sections.

Badge Visibility:

- Badges tagged as "Loyalty Promotions" will appear in Loyalty Promotions.

Badges tagged as "Loyalty Promotions" will appear in Loyalty Promotions.

- Badges tagged as "Loyalty" will be listed in Loyalty Workflows under Programs.

Badges tagged as "Loyalty" will be listed in Loyalty Workflows under Programs.

- If a badge is tagged as both "Loyalty Promotions" and "Loyalty", it will be visible in both sections.

If a badge is tagged as both "Loyalty Promotions" and "Loyalty", it will be visible in both sections.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf_qDDPgYbZMlRLdJBWwMifec7syWpNSme2ktVqx8Y5gPyZnw63AKJN7iYWqHEV_q9wrypavtUjrhRH_O5TykOKCcfdwGPAUIgM0bWCE1VMIMGq5r1ymdsX_kcd-potdXeOu70NBvvAIKi3g0BO7HNiBwdr?key=3e6wj4YfXYwm_21fhkjmcA)

Refer to the documentationhere.

### View Customer Badges in Membercare

We've enhanced the Membercare experience by enabling users to access and view customer badges directly within the Membercare interface. This provides clearer visibility into customer achievements and improves support insights. Users can now view customer badges within Membercare, with clear categorization for easier navigation—showing badges that are Available to Enrol, Available to Issue, Issued, and Expired.

![](https://files.readme.io/73802dbbe9197713b05748a7cad02e1d02e0916c4d6c2fe698194f882ca111ed-Membercare_view_of_badges.gif)

Refer to the documentationhere

## Rewards Catalog

### Save Time and Increase Efficiency by Creating/Updating Rewards in Bulk using Connect+ Template

Say goodbye to the days of creating rewards one by one. Introducing the power of bulk reward creation through CSV file upload which will save your time and increase efficiency.

Let's dive into the details,create rewardsandupdate rewards.

### Enhanced Reward Data Tracking in Facts and Dimensions

All issued reward transaction data is now stored in facts and dimensions, offering a unified, detailed view for seamless reporting and tracking.

Check out the detailed documentation for the tableshere.

### Event notification when a reward expires

What’s New:

Now you can create event notifications to alert users when a reward expires.

Key Benefits:

- User Engagement: Notify users via push, email, or SMS when rewards expire, improving re-engagement. Helps prevent users from missing the opportunity to redeem rewards.

- Automation: Automatically trigger the databricks notebook to finalize sweepstake winners, ensuring timely and transparent winner selection.

- Flexibility: Allows configuration of notification triggers at both the reward end date and pre-defined intervals. Ex: on the day of reward expiry or 7 days before reward expiry.

Read the documentationhere.

### Enhancements in APIs:

Key Changes:

- Status Field: A new status field has been added to track rewards with values LIVE, UPCOMING, and ENDED based on their start and end date.

- Filtering: Enhanced filters for date range, reward status, vendor, and reward type.

- Response Improvements: New response fields include vendor info, reward status, last updated timestamps etc.

- Custom Fields Filtering: Introduced a scope parameter to filter the list of custom fields for rewards, issue reward and catalog promotions.

- Vendor Redemptions: A new API to fetch all vendor redemptions for the org with support for filters, pagination, and sorting.

Check the API documentationhere.

# Rewards+

## Content Type Integrations

### Cinema e-Vouchers

What are Cinema e-Vouchers?Cinema e-vouchers are digital coupons or electronic vouchers that can be redeemed for movie tickets at participating cinemas. These e-vouchers allow customers to purchase movie tickets online or at the cinema using the voucher instead of cash or credit. These vouchers make it easier for customers to plan their cinema visits and enjoy discounted movie experiences.

Key Features

- Easy Purchase Process - Customers can now browse, select, and purchase cinema e-vouchers effortlessly within the platform

- The platform is integrated with third-party API's to ensure a smooth booking experience for e-vouchers purchases

- The entire process, from selecting a cinema chain to purchasing an e-vouchers has been optimized for a user-friendly experience

- E-vouchers are delivered instantly upon purchases, ready to be used at participating cinema chains

- Enjoy discounted rates for cinema e-vouchers, available through our platform as a special reward offering

### Event ticket booking

#### What is Event ticket booking?

Event ticket booking refers to the process of purchasing tickets to attend various events such as concerts, sports games, theatre performances, festivals, conferences, and other live events.Rewards+ partners with multiple vendor providing event tickets and integrates with platform as a special reward offering

Key Features

- Easy Purchase Process - Customers can now browse, select, and purchase event tickets effortlessly within the platform

- The platform is integrated with third-party API's to ensure a smooth booking experience for e-vouchers purchases

- Customers are allowed to select their seats based on availability, often displaying an interactive seating chart

- The entire process, from selecting a cinema chain to purchasing a e-vouchers has been optimized for a user-friendly experience

- Customers can use their debit or credit card to make purchases

- Tickets are delivered instantly upon purchases.

### Affiliate Vouchers

Key Features:

- Customers can now access and redeem affiliate vouchers from 1000's of merchants directly through our platform

- This content type is fully integrated, ensuring a smooth and efficient user experience from voucher selection to activation.

- This enhances the platform's offering allowing us to provide more value and drive user engagement.

## New Features

### Cashback Engine

Problem statement- Due to non-disclosure agreements, commission-sharing between brands and capillary must remain confidential. It was important to handle these commissions within capillary rather than through external partners.

Solution:

- The Cashback engine allows us to manage and automate the commission split offered by merchants at a tenant and offer-type levels, significantly enhancing our platform's flexibility and scalability.

- Brands can now set up the commission splits between end-customers, Brand, Capillary and Aggregrator

- Feature will ensure the offer ingested for the brand must have commission splits so end-customers can view accordingly.For Example: If Nike offers 10% cashback, the Brand can set up 90% for end-customers and remaining 10% between Brand, capillary and aggregator. In this case the end-customer would see 9% cashback on the Rewards+ platform.

### Offer Quality Control management

Problem statement- With integration providing offers from 1000's of merchants, publishing these offers directly to customers raised quality concerns.

Solutions:

- Designed a review process of offers to ensure quality of offers published to end-customers

- New offers for a brand automatically moved to Review state for manual verification of creatives, copies and working codes (if available).

- Feature needs to be enabled for an org.

### Segmentation

While we're all familiar with segmentation in CRM, we have developed a simplified version of segmentation for Rewards+ to meet immediate client requests. This includes:

1. Create a segment on customer profile information(conditions) and tag them to specific offers.

2. Uploading a list of customers to be targeted with a particular offer.

For example -Create a segment of customers whose birthday month is the current month. A rule-based segment is created in our Content management system and tagged to an offer.When the customer launches the application, the system evaluates their attributes, and if the rule matches, the birthday offer is shown in real time.

Note- You can create Rule based segments to all customer attributes provided by brand as customer profile information in Rewards+

### Personalization of offers

We have redesigned the Rewards+ Personalization API to offer based on customer information captured in Rewards+:

- Personalised offers to customers based on customer preferences/Interest, customer offer activation, customer offer favorite

- Personalized offers are overridden to support real-estate optimization on the platform

# Engage+

## SDK

### Version 1.5.6 (September 5, 2024)

- Notification centre enhancement feature

- Added support for custom fonts, borders, and styling for CTA buttons.

- Improved logic for displaying expandable content based on notification style.

- Updated background colour functionality for primary CTAs.

- Introduced new CTA design options as per mockups.

Docs:

- Android

- iOS

### Version 1.5.5 (August 27, 2024)

- Fixed crash related to core data migration for events model

- Implemented a custom mapping model for Core Data migration to ensure all events are retained during the transition.

- Fixed the Core Data migration crash when updating from the old data model version to the newer version.

### Version 1.5.4 (August 14, 2024)

- Introduced remote logging feature

- Introduced a Remote Logger feature that syncs logs to the server, depending on the log level selected by the application.

- Updated the sign-up event to make all fields optional except for cuid.

- Now, cuid is the only required field for the sign-up event.

### Version 1.5.3 (July 19, 2024)

- Resolve bug related to date formatting

- Resolve the Date formatting issue where locale change causes converting current date to future date

### Version 1.5.2 (July 15, 2024)

- SDK will show a notification badge on the application icon

- Show notification badge count of unread notifications on application icon whenever application receives valid notification

- Resolve issue where application receives an in-app message in the background unable to show it when application comes to foreground

Updated2 months ago