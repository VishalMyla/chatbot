# Configure Streaks

# Accessing streaks

> 🚧AttentionBy default, Streaks is not enabled for the orgs. To enable, contact your CSR.

## 🚧Attention

Attention

By default, Streaks is not enabled for the orgs. To enable, contact your CSR.

1. Login into the homepage of the org where you want to create streaks

2. Click on the "profile" icon on the top-right corner.

3. Click on the "Organization settings".

4. Search for "Streaks", that's it. You'll be taken to the home page of the streaks.

# Streaks home page

This is how the Streak home page appears.

![](https://files.readme.io/344bbbd-Screenshot_2024-08-05_at_6.24.15_PM.png)

This is the Streaks landing page, where all existing streaks are visible. Brands can search for a specific streak using the following criteria:

1. Name of the streak

2. Duration of the streak: Brings all the streaks that are falling in the given start & end date.

3. Status of the streak: There can be 2 types of statusTimeline based: Live, Upcoming, EndedActivity-based: Active, Inactive

1. Timeline based: Live, Upcoming, Ended

2. Activity-based: Active, Inactive

This landing page also provides the following capabilities against each streak:

1. Activate/Deactivate: A streak can be activated/deactivated depending on the use case by clicking on the 3-dot symbol at the end of each row.

1. 

![](https://files.readme.io/885ff53-Screenshot_2024-08-05_at_6.24.34_PM.png)

3. Edit flow of the flow: Once a streak is created, certain components of the streak (like scope, rule, etc...) can be edited by clicking on the "pencil" icon at the end of the row.

# Creating streak

To create a new streak, on the home page, clickNew streakand enter the below details:

1. Basic details

2. Customer enrolment details

3. Activity details

## Basic details

In theBasic detailssection, define the following:

Name- Name of the streak. Always provide a suitable name (related to your use case) as it helps in searching for the streaks easily in the future.

Description- A short description of the streak. Always provide a suitable description as it helps in understanding the purpose of the streak in the future.

Duration: Duration for which the Streaks need to be active & running.

For example, a brand wants to run a weekly streak, requiring its users to make three weekly transactions. If a user accomplishes this for five, ten, and fifteen consecutive weeks, they will receive 10, 20, and 30 points respectively.

If the brand intends to start this streak on January 10th, 2023, the start date is defined as January 10th, 2023, and the end date is 15 weeks from January 10th, 2023.

> 📘A streak can be created with both start & end date in the past. This helps in creating backdated streak type of promotions as when required.For example, assume current date is 15th May 2024. On this current date:Case 1:User could create a streak whose start date is 1st Jan 2024, and end date is 1st June 2024. In this case, start date is in the past.Case 2:User could create a streak whose start date is 1st Jan 2024, and end date is 31st march 2024. In this case, both the start & end date are in the past.Points to remember:Past transactions/events as per the date of creation of the streak has to be re-processes again to consider that past date in the tracking of the streak.In the case of 1st case, all the past data as per streak's created date (1st Jan 2024 to 14th May 2024) has to be re-processed again for that data to be tracked. Transactions from 15th May 2024 to the end will be tracked automatically.In the case of 2nd case, all the past data as per streak's created date (1st Jan 2024 to 31st March 2024) has to be re-processed again for that data to be tracked. As the streak is ending on 31st March, there is nothing that will be tracked automatically here.User can create a past streak upto 6 months in the past. For any use cases where higher limit is needed, reach out to product team.When APIs are being used to create past streak, it may not throw the 6 months validation but be careful when using the APIs directly for compatibility issues.

## 📘A streak can be created with both start & end date in the past. This helps in creating backdated streak type of promotions as when required.

A streak can be created with both start & end date in the past. This helps in creating backdated streak type of promotions as when required.

For example, assume current date is 15th May 2024. On this current date:

Case 1:User could create a streak whose start date is 1st Jan 2024, and end date is 1st June 2024. In this case, start date is in the past.

Case 2:User could create a streak whose start date is 1st Jan 2024, and end date is 31st march 2024. In this case, both the start & end date are in the past.

Points to remember:

1. Past transactions/events as per the date of creation of the streak has to be re-processes again to consider that past date in the tracking of the streak.

2. In the case of 1st case, all the past data as per streak's created date (1st Jan 2024 to 14th May 2024) has to be re-processed again for that data to be tracked. Transactions from 15th May 2024 to the end will be tracked automatically.

3. In the case of 2nd case, all the past data as per streak's created date (1st Jan 2024 to 31st March 2024) has to be re-processed again for that data to be tracked. As the streak is ending on 31st March, there is nothing that will be tracked automatically here.

4. User can create a past streak upto 6 months in the past. For any use cases where higher limit is needed, reach out to product team.

5. When APIs are being used to create past streak, it may not throw the 6 months validation but be careful when using the APIs directly for compatibility issues.

Till code: Select the till code. This till code is used to attribute all the points that are going out from the streaks module. If you are a brand where there is no concept of till-code present, please create a dummy till-code from the org settings. The same till can be used in milestones as well.

![](https://files.readme.io/e484b7d-Bandges_-_Listing_page_and_its_interaction_310.jpg)

## Customer enrollment

In theCustomer enrolmentsection, define the audience to whom you want to enroll in the Streaks program.

- All customers:All customers in the organization who have registered for loyalty will become part of the streak.

- Audience list:This helps enroll the users into the streaks based on filters, existing user groups, or via CSV upload. This is similar to the audience capability inEngage+.

Note:This step is the same as the "customer enrollment" step in Milestones. For detailed information on this step, please visit the following page:here.

![](https://files.readme.io/3f92a4b-Bandges_-_Listing_page_and_its_interaction_311.jpg)

## Activity

This is the core section of the streak where the brand has to configure the below components of the streak:

1. Activity on which the streak will run, and the associated KPI.

2. Target value for each cycle

3. Frequency of the streak

4. Scope filter & rule filters

5. Levels of the streak also known as streak definitions

![](https://files.readme.io/9c057ad-Streaks_creation_flow19.jpg)

### Defining the type of activity on which Streaks need to be created.

#### Customer Activities

Customer activity refers to the various interactions a customer has with a brand. The table below lists the customer activities that can be tracked for a milestone.

| Activity | Description | Example |

| --- | --- | --- |

| Transaction | Track customer purchases, in-store, online, or at a point-of-sale (POS) system. | A customer purchases a pair of sneakers online or at a store. |

| Behavioural event | Track customer activities like signing up, changing their profile picture, or adding items to their wish list. | A customer adds items to their wish list on the app or website. |

| Earn reward currency | Track the reward currencies (pointsoralternate currencies) that a customer has earned during a certain period. The configuration for points and alternate currencies  are the same.You can select only one reward currency per target. To track both points and alternate currencies within the same target / milestone, create aunified milestonewith two or more targets and select points or alternate currencies as the reward currencies for each target. | A customer earns 500 reward points for purchasing a ₹5000 jacket during a promotional event. |

| Referrals | Track the number of times a customer has successfully referred another person. | A customer refers a friend using a unique link, and the friend makes the first purchase, earning the customer rewards. |

| Points redemption | Track how often customers use their points to redeem rewards, provided redemption is available. | A customer uses 500 points to redeem a ₹500 discount while purchasing groceries |

| Coupon redemption | Track the number of times a customer uses coupons to get discounts or benefits. | A customer applies a 20% discount coupon during checkout in an online store. |

| Returning a transaction | Track the number of transactions a customer returns, whether a full return or part of the purchase. | A customer returns a t-shirt purchased online as it did not fit properly. |

| Updating a transaction | Track how many times a customer changes details about their previous purchases. | A customer orders 1kg bananas and 1kg mangoes but later adjusts the order, reducing the mangoes to 500gms after receiving a partial refund. |

| Updating customer profile | Track how often a customer updates their personal information on their profile. | A customer updates their phone number on the app. |

| Promised points conversion | Track how many timespromised points(temporary or pending rewards) are turned into regular points for the customer. |  |

| Transfer points | Track how many times points aretransferredbetween customers oruser groups. | A customer transfers their loyalty points to another customer. |

| Milestone achieved | Track how many times a customer completes a target, such as spending a specific amount or completing a behavioral event such as drinking eight litres of water.Notes:The following conditions are required to select a milestone/target to track:- The milestone/target timeline must be a fixed calendar window.- The frequency of the milestone must be lower than the milestone being created. For example, if the milestone being tracked has a frequency of daily, then the milestone being created must have a higher frequency like weekly or monthly.- The duration of the milestone must fit within the milestone being created.- The milestone must be active.- The tracking type must be default or unified. This is also supported for streaks, enabling “third-level tracking” use cases. For example: Brush twice a day, six times a week, for ten weeks in a quarter. Walk 5,000 steps a day, five times a week, for three weeks in a month Refer to the documentation for more information onthird-level tracking. | A customer achieves a milestone by walking 10,000 steps daily for five consecutive days, as part of a fitness challenge. |

| Points redemption reversal | Track how many times redeemed points are reversed to the customer due to cancellations or errors. | A customer cancels a flight ticket they booked using points, and the points are returned to their account. |



[Behavioural event](/docs/setup-test-behavioral-events)

[points](/docs/points)

[alternate currencies](/docs/alternate-currencies)

[unified milestone](/docs/unified-milestones)

[Updating a transaction](/reference/update-transaction-bulk)

[promised points](/docs/glossary-1#delayed-accrual-and-promised-points)

[transferred](/reference/-customer-points-transferrable)

[user groups](/docs/group-loyalty)

[third-level tracking.](https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/4085579838/3rd+level+tracking+Using+milestones+achieved+tracking)

1. Transactional activities:Helps in tracking transactional propertiesGross sales (both bill level & line item level)The total gross sales made by the user in the cycle. The gross amount is the amount on the bill before the user avails any kind of discount.Net sales (both bill level & line item level)The total net sales made by the user in the cycle. The net amount is the final amount that the user has paid. This means the discounts will be excluded from the tracking.Quantity (line item level)The number of quantities purchased by the user in the cycle. When used with a specific line item rule, the brand can track the number of specific line items bought by the user in the cycle.Transactions count (bill level)The total number of transactions made by the user in the cycle.Days of activity (bill level)The total number of unique days on which the user has made at least 1 transaction.Transactional extended fieldsThe following KPIs are supported:COUNT: The number of times a transactional extended field came with a specific value. This specific value needs to be configured in the rule box.E.g.: The number of transactions that came with extended field value as "Gold".SUM: The sum of the selected transactional extended field in the cycle.Lineitem extended fieldsThe following KPIs are supported:COUNT: The number of times a line-item extended field came with a specific value. This specific value needs to be configured in the rule box.E.g.: The number of line items that came with the extended field value as "edible food".SUM: The sum of the selected line-item extended field in the cycle.Reward currencies (aka points):Regular points: Number of regular points earned by the user in the cyclePromotional points: Number of promotional points earned by the user in the cycleBoth: Number of total regular & promotional points earned by the user in the cycle

1. Gross sales (both bill level & line item level)The total gross sales made by the user in the cycle. The gross amount is the amount on the bill before the user avails any kind of discount.

1. The total gross sales made by the user in the cycle. The gross amount is the amount on the bill before the user avails any kind of discount.

3. Net sales (both bill level & line item level)The total net sales made by the user in the cycle. The net amount is the final amount that the user has paid. This means the discounts will be excluded from the tracking.

1. The total net sales made by the user in the cycle. The net amount is the final amount that the user has paid. This means the discounts will be excluded from the tracking.

5. Quantity (line item level)The number of quantities purchased by the user in the cycle. When used with a specific line item rule, the brand can track the number of specific line items bought by the user in the cycle.

1. The number of quantities purchased by the user in the cycle. When used with a specific line item rule, the brand can track the number of specific line items bought by the user in the cycle.

7. Transactions count (bill level)The total number of transactions made by the user in the cycle.

1. The total number of transactions made by the user in the cycle.

9. Days of activity (bill level)The total number of unique days on which the user has made at least 1 transaction.

1. The total number of unique days on which the user has made at least 1 transaction.

11. Transactional extended fieldsThe following KPIs are supported:COUNT: The number of times a transactional extended field came with a specific value. This specific value needs to be configured in the rule box.E.g.: The number of transactions that came with extended field value as "Gold".SUM: The sum of the selected transactional extended field in the cycle.

1. The following KPIs are supported:COUNT: The number of times a transactional extended field came with a specific value. This specific value needs to be configured in the rule box.E.g.: The number of transactions that came with extended field value as "Gold".SUM: The sum of the selected transactional extended field in the cycle.

1. COUNT: The number of times a transactional extended field came with a specific value. This specific value needs to be configured in the rule box.E.g.: The number of transactions that came with extended field value as "Gold".

1. E.g.: The number of transactions that came with extended field value as "Gold".

3. SUM: The sum of the selected transactional extended field in the cycle.

16. Lineitem extended fieldsThe following KPIs are supported:COUNT: The number of times a line-item extended field came with a specific value. This specific value needs to be configured in the rule box.E.g.: The number of line items that came with the extended field value as "edible food".SUM: The sum of the selected line-item extended field in the cycle.

1. The following KPIs are supported:COUNT: The number of times a line-item extended field came with a specific value. This specific value needs to be configured in the rule box.E.g.: The number of line items that came with the extended field value as "edible food".SUM: The sum of the selected line-item extended field in the cycle.

1. COUNT: The number of times a line-item extended field came with a specific value. This specific value needs to be configured in the rule box.E.g.: The number of line items that came with the extended field value as "edible food".

1. E.g.: The number of line items that came with the extended field value as "edible food".

3. SUM: The sum of the selected line-item extended field in the cycle.

21. Reward currencies (aka points):Regular points: Number of regular points earned by the user in the cyclePromotional points: Number of promotional points earned by the user in the cycleBoth: Number of total regular & promotional points earned by the user in the cycle

1. Regular points: Number of regular points earned by the user in the cycle

2. Promotional points: Number of promotional points earned by the user in the cycle

3. Both: Number of total regular & promotional points earned by the user in the cycle

The following image shows the screen when "transaction" is selected:

![](https://files.readme.io/4520336-Screenshot_2024-04-09_at_4.45.01_PM.png)

1. Behavioral activities:Helps in tracking behavioral eventsAll the Behavioural events configured for the org will be available here.The following KPIs are supported in behavioral events tracking:COUNT: The number of times the event has been triggered in a cycle.VISIT: The number of unique days on which the event has been triggered in a cycle.SUM: Summing the attribute value of the behavioral event in a cycle.E.g.: Assume there is a behavioral event called "walking" with an attribute called "steps walked". Now, this attribute value can be summed in a period & based on that rewards can be assigned.

1. All the Behavioural events configured for the org will be available here.

2. The following KPIs are supported in behavioral events tracking:COUNT: The number of times the event has been triggered in a cycle.VISIT: The number of unique days on which the event has been triggered in a cycle.SUM: Summing the attribute value of the behavioral event in a cycle.E.g.: Assume there is a behavioral event called "walking" with an attribute called "steps walked". Now, this attribute value can be summed in a period & based on that rewards can be assigned.

1. COUNT: The number of times the event has been triggered in a cycle.

2. VISIT: The number of unique days on which the event has been triggered in a cycle.

3. SUM: Summing the attribute value of the behavioral event in a cycle.E.g.: Assume there is a behavioral event called "walking" with an attribute called "steps walked". Now, this attribute value can be summed in a period & based on that rewards can be assigned.

1. E.g.: Assume there is a behavioral event called "walking" with an attribute called "steps walked". Now, this attribute value can be summed in a period & based on that rewards can be assigned.

The following image shows the screen when the "behavioral event" is selected:

![](https://files.readme.io/cf3cde6-Screenshot_2024-04-09_at_4.44.30_PM.png)

1. All other customer level activities:Helps in tracking how many times the various customer level activities/events (aka different customer level events present in the workflow in the loyalty) are triggered for a user in the defined period as per the configuration. The following are the supported customer activities:Points redemptionsCoupon redemptionsReturn transactionPoints transferTransaction updatesCustomer profile updatesPromised points conversionsPoints redemption-reversalReferralsMilestones achieved: This type of tracking is available only during the creation of a fixed-calendar window (aka where a specific start date is selected) type of milestones and helps in tracking how many times a user has achieved a specific target group.Once this tracking is selected, a new drop-down asking to select the target group will appear.A target group will be shown in this drop-down only when it satisfies the following conditions:Fixed-calendar window (aka where a specific start date is selected) typeFrequency is inferior to the current milestone's frequencyDuration should fit within the current milestone's durationShould be activeThe tracking type should be either "default" or "unified".This type of tracking helps in unlocking "3rd level tracking use cases" which are extremely difficult to implement. Some of the sample use cases that will be possible are:Brush 2 times a day, 6 times a week, 10 weeks in a quarterWalk 5000 steps a day, 5 times a week, 3 weeks in a month.Refer to thisconfluence pageto understand more about these "3rd level tracking" use cases, and how they work with the help of simulations.The following KPIs are supported for all the above events:COUNT: The number of times the specific event selected is triggered in a cycleVISIT: The number of unique days on which the specific event has been triggered in a cycle.Note: Tracking for all the other events also will be available soonThe following example shows the screen when one of the EMF events (points redemption is selected):

All other customer level activities:Helps in tracking how many times the various customer level activities/events (aka different customer level events present in the workflow in the loyalty) are triggered for a user in the defined period as per the configuration. The following are the supported customer activities:

1. Points redemptionsCoupon redemptionsReturn transactionPoints transferTransaction updatesCustomer profile updatesPromised points conversionsPoints redemption-reversalReferralsMilestones achieved: This type of tracking is available only during the creation of a fixed-calendar window (aka where a specific start date is selected) type of milestones and helps in tracking how many times a user has achieved a specific target group.Once this tracking is selected, a new drop-down asking to select the target group will appear.A target group will be shown in this drop-down only when it satisfies the following conditions:Fixed-calendar window (aka where a specific start date is selected) typeFrequency is inferior to the current milestone's frequencyDuration should fit within the current milestone's durationShould be activeThe tracking type should be either "default" or "unified".This type of tracking helps in unlocking "3rd level tracking use cases" which are extremely difficult to implement. Some of the sample use cases that will be possible are:Brush 2 times a day, 6 times a week, 10 weeks in a quarterWalk 5000 steps a day, 5 times a week, 3 weeks in a month.Refer to thisconfluence pageto understand more about these "3rd level tracking" use cases, and how they work with the help of simulations.The following KPIs are supported for all the above events:COUNT: The number of times the specific event selected is triggered in a cycleVISIT: The number of unique days on which the specific event has been triggered in a cycle.Note: Tracking for all the other events also will be available soon

1. Points redemptions

Points redemptions

2. Coupon redemptions

Coupon redemptions

3. Return transaction

Return transaction

4. Points transfer

Points transfer

5. Transaction updates

Transaction updates

6. Customer profile updates

Customer profile updates

7. Promised points conversions

Promised points conversions

8. Points redemption-reversal

Points redemption-reversal

9. Referrals

Referrals

10. Milestones achieved: This type of tracking is available only during the creation of a fixed-calendar window (aka where a specific start date is selected) type of milestones and helps in tracking how many times a user has achieved a specific target group.Once this tracking is selected, a new drop-down asking to select the target group will appear.A target group will be shown in this drop-down only when it satisfies the following conditions:Fixed-calendar window (aka where a specific start date is selected) typeFrequency is inferior to the current milestone's frequencyDuration should fit within the current milestone's durationShould be activeThe tracking type should be either "default" or "unified".This type of tracking helps in unlocking "3rd level tracking use cases" which are extremely difficult to implement. Some of the sample use cases that will be possible are:Brush 2 times a day, 6 times a week, 10 weeks in a quarterWalk 5000 steps a day, 5 times a week, 3 weeks in a month.Refer to thisconfluence pageto understand more about these "3rd level tracking" use cases, and how they work with the help of simulations.

Milestones achieved: This type of tracking is available only during the creation of a fixed-calendar window (aka where a specific start date is selected) type of milestones and helps in tracking how many times a user has achieved a specific target group.

1. Once this tracking is selected, a new drop-down asking to select the target group will appear.

Once this tracking is selected, a new drop-down asking to select the target group will appear.

2. A target group will be shown in this drop-down only when it satisfies the following conditions:Fixed-calendar window (aka where a specific start date is selected) typeFrequency is inferior to the current milestone's frequencyDuration should fit within the current milestone's durationShould be activeThe tracking type should be either "default" or "unified".

![](https://files.readme.io/b3c0858-Screenshot_2024-08-05_at_3.23.30_PM.png)

A target group will be shown in this drop-down only when it satisfies the following conditions:

1. Fixed-calendar window (aka where a specific start date is selected) type

2. Frequency is inferior to the current milestone's frequency

3. Duration should fit within the current milestone's duration

4. Should be active

5. The tracking type should be either "default" or "unified".

8. This type of tracking helps in unlocking "3rd level tracking use cases" which are extremely difficult to implement. Some of the sample use cases that will be possible are:Brush 2 times a day, 6 times a week, 10 weeks in a quarterWalk 5000 steps a day, 5 times a week, 3 weeks in a month.Refer to thisconfluence pageto understand more about these "3rd level tracking" use cases, and how they work with the help of simulations.

This type of tracking helps in unlocking "3rd level tracking use cases" which are extremely difficult to implement. Some of the sample use cases that will be possible are:

1. Brush 2 times a day, 6 times a week, 10 weeks in a quarter

2. Walk 5000 steps a day, 5 times a week, 3 weeks in a month.Refer to thisconfluence pageto understand more about these "3rd level tracking" use cases, and how they work with the help of simulations.

1. Refer to thisconfluence pageto understand more about these "3rd level tracking" use cases, and how they work with the help of simulations.

22. The following KPIs are supported for all the above events:COUNT: The number of times the specific event selected is triggered in a cycleVISIT: The number of unique days on which the specific event has been triggered in a cycle.Note: Tracking for all the other events also will be available soon

The following KPIs are supported for all the above events:

1. COUNT: The number of times the specific event selected is triggered in a cycle

2. VISIT: The number of unique days on which the specific event has been triggered in a cycle.Note: Tracking for all the other events also will be available soon

The following example shows the screen when one of the EMF events (points redemption is selected):

![](https://files.readme.io/00fd85e-Screenshot_2024-04-09_at_4.44.38_PM.png)

An eagle-eye view of the above looks like this:

![](https://files.readme.io/442813e-Screenshot_2024-04-18_at_11.55.39_AM.png)

note: In the above table, EMF-level events are nothing but all other customer-level events/activities described in the previous paragraphs.

### Frequency of each cycle

After selecting the tracking configurations based on the use case, the frequency for each cycle in which the user must achieve the defined value by the streak needs to be selected.

You can select a frequency from the available options or define a duration (custom duration).

1. Custom duration

This option can be used when the user has to perform the specified activity within a custom duration, which is not available in the above options. For example, every 5 days, every 13 days, every 2 months, etc. Refer to the below images to learn more about custom duration.

![](https://files.readme.io/5d64aa9-Streaks_creation_flow19_5.jpg)

![](https://files.readme.io/a54950c-Streaks_creation_flow19.png)

![](https://files.readme.io/bb5d8f4-Streaks_creation_flow19_1.png)

Upload duration

You can clickUpload durationand add the duration details in the sample template format provided.

![](https://files.readme.io/2553759-Upload_duration.png)

1. Selecting predefined duration

The below options are available:

1. Daily

2. Weekly

3. Monthly

4. Yearly

Depending on the chosen frequency, this option will present two choices for Weekly/Monthly/Yearly types. In the "Any day" scenario, users can perform their activity on any day of the cycle, while in the "Specific days" scenario, users are required to perform the activity on designated days.

1. Weekly:Any day of the weekSpecific days of the week**

1. Any day of the week

2. Specific days of the week**

4. Monthly:Any day of the monthSpecific days of the month**

1. Any day of the month

2. Specific days of the month**

7. YearlyAny day of the yearSpecific days of the month**

1. Any day of the year

2. Specific days of the month**

- Target value needed to be achieved in selected each frequency:When the "Any day of the week/month/year" is selected for the duration, then the target value that needs to be achieved has to be entered manually.When the "Specific day of the week/month/year" is selected for the duration, then the target value for the frequency will be calculated automatically.For example, say frequency is selected "weekly" and "specific days of the week" are selected as Monday, Wednesday & Friday, then the target value will be interpreted as 3 automatically.

1. When the "Any day of the week/month/year" is selected for the duration, then the target value that needs to be achieved has to be entered manually.

2. When the "Specific day of the week/month/year" is selected for the duration, then the target value for the frequency will be calculated automatically.For example, say frequency is selected "weekly" and "specific days of the week" are selected as Monday, Wednesday & Friday, then the target value will be interpreted as 3 automatically.

1. For example, say frequency is selected "weekly" and "specific days of the week" are selected as Monday, Wednesday & Friday, then the target value will be interpreted as 3 automatically.

### Filters: scope-based & rule-based

The filters available are scope-based & rule-based filters.

Scope based filtering:

- Stores: Limit the streak to specific retail locations.

- Zones: Apply the streak to defined geographical areas.

- Concepts: Limits the streak to specific OUs

To define the streaks for complete stores, zones, and concepts, selectAll store, zone, and concept.

![](https://files.readme.io/61b0db7-Screenshot_2024-04-09_at_8.27.52_PM.png)

To define the Milestones for a specific store, zone, and concept, selectSpecific store, zone, and conceptand select the stores/zones/concept.

![](https://files.readme.io/c8f6ccf-Screenshot_2024-04-09_at_8.28.11_PM.png)

Rule-based filtering:

For further refinement, you can define the rules in the rule box. For example, rules can be written to target specific line items, categories, minimum transaction amounts, etc.

- Categories: Target specific product categories within the Milestone.

- Line items: Apply the Milestone to specific products or SKUs.

- Transaction amount: Set minimum or maximum purchase amounts for Milestone progress.

![](https://files.readme.io/1c0a772-Screenshot_2024-04-09_at_8.28.23_PM.png)

## Streak levels also known as definitions

In the text box, you can enter the duration for which the streak should be maintained.

You can use the toggle switch to disable or enable a non-continuous streak.

Consider a scenario for your coffee brand's loyalty program:

- Requirement: Customers must enjoy a cup of your brand's coffee every day.

- Streak level/definition: Maintain a streak of 5 months within the streak duration.

- Streak Duration: one year

How it works:

- Achievement: Customers achieve the streak by drinking the brand's coffee every single day for a continuous period of 5 months.

- Break Reset: If a customer misses a day, the streak counter resets to zero, and they must start building the streak again from scratch.

Notes:

1. A user can add 10 different streak definitions in a single streak

2. Streak levels need to be entered in ascending order.

3. A user can achieve the streak level "X+1", only when the user has already achieved the "X" level.

4. The maximum streak value should always be "<=" number of cycles. For example, say the duration is given as 2 months & frequency is given as weekly, then the maximum number of possible cycles is 8.

![](https://files.readme.io/6577cd6-Continous_streaks.jpeg)

Non-continuous streaks

Non-continuous streaks, allow users to maintain a streak without performing the associated activity continuously. In this type of streak, breaks or gaps between performing the activity are permitted, as long as the user completes the activity a specified number of times within a defined timeframe. This feature is particularly useful when users may not be able to consistently engage in an activity every day or on a regular schedule but still want to achieve a goal over a period of time.

In the example above, if you set it as a non-continuous streak, customers achieve the streak if they drink the brand's coffee for any of the 5 months in the streak duration.

![](https://files.readme.io/47638e5-Non_cont_streak.jpeg)

ClickShow previewto view a preview of the streak definition.

Once all these configurations are successfully configured, clickPreview & Saveto save the streaks.

> 📘As of today, event notifications are not available for streaks. Please be mindful about this, we will bring this soon.

## 📘As of today, event notifications are not available for streaks. Please be mindful about this, we will bring this soon.

As of today, event notifications are not available for streaks. Please be mindful about this, we will bring this soon.

## Sub-targets in streaks

Sub-targets are a powerful capability that brands can use to interact with their customers mid-day the customer's journey towards the full target.

![](https://files.readme.io/6d2ef25-Screenshot_2024-08-05_at_6.25.44_PM.png)

The behavior of sub-targets in streaks is the same as the behavior of sub-targets in milestones.

1. They work across each cycle of the entire streak duration

2. The sub-target rules that need to be written in promotions are the same as the milestones

3. Sub-targets can be created based on absolute/percentage value based on the KPI

Refer to the following section for more details:here

Updated2 months ago