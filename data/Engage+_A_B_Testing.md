# A/B Testing

# Overview

A/B testing, also known as split testing, is a method in customer Journeys that helps to compare different content and engagement methods for specific segments of customers over a defined period. This allows you to gather valuable insights about which configurations perform better with the audience. Based on the results obtained, you can make informed decisions about which configuration to adopt for the remainder of the customer journey.

## Example

Consider a scenario where a brand wants to run a holiday e-mail marketing campaign journey for 20 days. With A/B testing you can trigger the campaign with two different subject lines: "Save Big Today!" and "Limited-Time Offer Inside!".Here, the independent variable would be the subject line variation, while the dependent variable would be the click-through rate – how many recipients open the email and click on the links inside.By conducting A/B testing for the initial few days, you can compare the performance of these two subject lines and determine which one leads to a higher click-through rate. Once you've analyzed the results and identified the most effective subject line, you can use that version for the remaining duration of the holiday email campaign journey, maximizing engagement with your target audience.

# Configuring A/B testing for a journey

To configure the A/B testing for a journey, perform the following while configuring a journey:

1. Drag and drop theA/B testing blockon the journey canvas.

> 📘NoteThe A/B testing block is a replacement for the engagement block. If you are running an A/B test, you don’t need to include another engagement block.

## 📘Note

Note

The A/B testing block is a replacement for the engagement block. If you are running an A/B test, you don’t need to include another engagement block.

1. In theBlock name, enter a name for the A/B testing.

2. From theVariants and audience split section, select theEngagement channelandIncentives(optional).

3. In theVariants, add Creatives and Incentives (if applicable) for the variants. To add an additional variant, clickAdd more variant. A maximum of three variants are supported.

![](https://files.readme.io/845553e-AB_Testing.png)

1. ClickEdit audience splitand define the audience proportion for the variants, the split of what %age of your test customers should get which variant. By default, audiences for the variants are split equally.

> 📘NotesSum of audience split percentages for each variant should equal 100%.Audience split for any variant cannot be zero.Fractional values are not allowed.

## 📘Notes

Notes

- Sum of audience split percentages for each variant should equal 100%.

- Audience split for any variant cannot be zero.

- Fractional values are not allowed.

![](https://files.readme.io/ad8d318-Audience_split.png)

1. In theDeliver settings, configure the delivery settings.

![](https://files.readme.io/62353fb-Delivery_setting.png)

1. In theLength of the testsection, define the following:Number of customers (mandatory):The minimum number of customers that should enter the journey.You can define this number based on your knowledge and should be realistic based on the journey configured and your organization’s customer base. For example, if your organisation’s customer base is 10,000 do not set the test criteria to be more than 1000-2000. The ideal number of test customers is 20-30% of your expected audience count who will enter the journey.The number of entrants should be equal to or greater than the number of variants.The number of entrants should not exceed the total number of customers in the organization.ii.Duration (Optional): After defining the number of entrants, you can choose toconclude the test immediatelyor select anadditional number of daysfor the test to run after reaching the minimum number of entrants. The system then automatically selects the next set of defined number of entrants for the additional days.

1. Number of customers (mandatory):The minimum number of customers that should enter the journey.You can define this number based on your knowledge and should be realistic based on the journey configured and your organization’s customer base. For example, if your organisation’s customer base is 10,000 do not set the test criteria to be more than 1000-2000. The ideal number of test customers is 20-30% of your expected audience count who will enter the journey.The number of entrants should be equal to or greater than the number of variants.The number of entrants should not exceed the total number of customers in the organization.ii.Duration (Optional): After defining the number of entrants, you can choose toconclude the test immediatelyor select anadditional number of daysfor the test to run after reaching the minimum number of entrants. The system then automatically selects the next set of defined number of entrants for the additional days.

1. You can define this number based on your knowledge and should be realistic based on the journey configured and your organization’s customer base. For example, if your organisation’s customer base is 10,000 do not set the test criteria to be more than 1000-2000. The ideal number of test customers is 20-30% of your expected audience count who will enter the journey.

2. The number of entrants should be equal to or greater than the number of variants.

3. The number of entrants should not exceed the total number of customers in the organization.ii.Duration (Optional): After defining the number of entrants, you can choose toconclude the test immediatelyor select anadditional number of daysfor the test to run after reaching the minimum number of entrants. The system then automatically selects the next set of defined number of entrants for the additional days.

> 📘Note:A minimum of one-day wait duration is applicable to all A/B tests after the number of test users criteria is met. For example, if the A/B testing gets completed in a couple of hours, the system still takes a minimum of one day to decide the winning variant.

## 📘Note:

Note:

A minimum of one-day wait duration is applicable to all A/B tests after the number of test users criteria is met. For example, if the A/B testing gets completed in a couple of hours, the system still takes a minimum of one day to decide the winning variant.

![](https://files.readme.io/9294b43-AB_testing_length.png)

1. From theTest- criteriadropdown, select the KPIs to calculate the winning variant of your test. The system displays the KPIs based on the engagement selected.Engagement Level KPIs: The engagement level KPIs are available by default. The Engagement Level KPIs listed in the dropdown depend on the selected channel. For instance, in Email, you will have access to metrics such as open rate and delivery rate, whereas in SMS, only the delivery rate will be available.Incentive Level KPIs: These are available only if you have added Incentives for the test.You can select a Maximum of 5 KPIs in total across both categories.

From theTest- criteriadropdown, select the KPIs to calculate the winning variant of your test. The system displays the KPIs based on the engagement selected.

1. Engagement Level KPIs: The engagement level KPIs are available by default. The Engagement Level KPIs listed in the dropdown depend on the selected channel. For instance, in Email, you will have access to metrics such as open rate and delivery rate, whereas in SMS, only the delivery rate will be available.

2. Incentive Level KPIs: These are available only if you have added Incentives for the test.You can select a Maximum of 5 KPIs in total across both categories.

![](https://files.readme.io/2b0c8ef-KPIs.png)

4. ClickWeightage, edit the weightage for the KPIs and arrange the order of the KPIs. The winning variant is calculated based on the KPI value and the %age weightage assigned to it. Ranking order is needed if there is a tie between the scores of two variants.

ClickWeightage, edit the weightage for the KPIs and arrange the order of the KPIs. The winning variant is calculated based on the KPI value and the %age weightage assigned to it. Ranking order is needed if there is a tie between the scores of two variants.

> 📘NoteTotal sum weightage for all KPIs should be 100%.

## 📘Note

Note

Total sum weightage for all KPIs should be 100%.

1. ClickDone. Your A/B test setup is complete.

2. Send your journey for approval.

> 📘NotesA user can set up multiple A/B tests in a single journey. Setting up of each A/B test should be done in a similar way as defined aboveOnce your journey is live, your A/B test begins.When the criteria defined for the test, such as the number of entrants and wait duration, are met, the test results are calculated.Based on the specified Key Performance Indicators (KPIs) and their respective weightage, the winning variant is determined.After the test is completed and until the user takes any action, the winning criteria are sent by default.Overriding the winning criteriais only allowed for 2 days after the test is completed. After that, the winning criteria are sent by default.

## 📘Notes

Notes

- A user can set up multiple A/B tests in a single journey. Setting up of each A/B test should be done in a similar way as defined aboveOnce your journey is live, your A/B test begins.

A user can set up multiple A/B tests in a single journey. Setting up of each A/B test should be done in a similar way as defined aboveOnce your journey is live, your A/B test begins.

- When the criteria defined for the test, such as the number of entrants and wait duration, are met, the test results are calculated.

When the criteria defined for the test, such as the number of entrants and wait duration, are met, the test results are calculated.

- Based on the specified Key Performance Indicators (KPIs) and their respective weightage, the winning variant is determined.

Based on the specified Key Performance Indicators (KPIs) and their respective weightage, the winning variant is determined.

- After the test is completed and until the user takes any action, the winning criteria are sent by default.

After the test is completed and until the user takes any action, the winning criteria are sent by default.

- Overriding the winning criteriais only allowed for 2 days after the test is completed. After that, the winning criteria are sent by default.

Overriding the winning criteriais only allowed for 2 days after the test is completed. After that, the winning criteria are sent by default.

# After A/B test setup: Understanding the post-setup process

> ❗️AttentionYou cannot edit the A/B test block after a journey is live.

## ❗️Attention

Attention

You cannot edit the A/B test block after a journey is live.

## Notification on the A/B testing

- Users will receive an email notification informing them of the test completion and providing detailed results.

- Email IDs of users who should receive the results of the A/B test should be added in Engage Settings > Alerts > Journey alerts > A/B test alerts.

![](https://files.readme.io/7433855-Alerts.png)

## Editing Journeys with Active A/B Tests:

If you edit the journey while an A/B test is in progress, your test will be reset. When you make the edited journey live, your test will start from the beginning, starting again from entrant number 1.

## A/B testing scenario when pausing a journey:

If you pause a journey where an A/B test is live, the test will also be paused. The test will resume when you resume the journey and the test will be completed when the test criteria (number of entrants) and additional wait duration are fulfilled.

## A/B testing in a Sunset journey scenario:

An A/B test block in a sunset journey will work the same as it does in a live version of a journey.

## Overriding the winning variant

You can override a winning variant within two days of the result.For instance, if three variants (A, B, and C) were defined and Variant B is determined as the winner, but you prefer to send Variant C to customers entering the journey after the test, you can do so. Perform the following:

1. Navigate to the Journey where the A/B test was set up and access the A/B test block. By default, the winning variant is selected.

2. Select Variant C and declare it as the final variant to be sent to all customers entering the journey.

Updatedabout 1 year ago