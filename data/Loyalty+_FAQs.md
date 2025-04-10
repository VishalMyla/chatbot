# FAQs

1. Can I add a tier in between two existing tiers?You cannot add a tier between two existing tiers. A new tier is always an upgrade to the last tier. If it is highlyrequired to add a tier in between two tiers, contact your Capillary PoC. The Capillary Admin needs to performthe following steps.

- Edit all the tiers from where you need to modify

- Change rule expressions and conditions

- Do a data clean up

- Reconfigure the loyalty program

1. Can I change the points allocation type of an existing tier?When you create a tier, it shows the default points allocation type - prorated (% of the transaction amount). Tochange the points allocation type, create a new points allocation strategy. Then, on theEventsViewpage,modify the action for theTransactionAddevent by replacing the existing Transaction Points Allocationstrategy with the new strategy. Save the changes and Reconfigure the loyalty program to reflect the changes in the live program.

Can I change the points allocation type of an existing tier?When you create a tier, it shows the default points allocation type - prorated (% of the transaction amount). Tochange the points allocation type, create a new points allocation strategy. Then, on theEventsViewpage,modify the action for theTransactionAddevent by replacing the existing Transaction Points Allocationstrategy with the new strategy. Save the changes and Reconfigure the loyalty program to reflect the changes in the live program.

2. How are tiers structured in an MLP?Tiers are independent across programs in an MLP. Each program can have different numbers of tiers.

How are tiers structured in an MLP?Tiers are independent across programs in an MLP. Each program can have different numbers of tiers.

3. Can different tiers have different eligibility criteria?The eligibility criteria that you set for tier upgrade remains the same for all the subsequent tiers that you create.

Can different tiers have different eligibility criteria?The eligibility criteria that you set for tier upgrade remains the same for all the subsequent tiers that you create.

4. What happens to the status of my customer if he/she does not fulfill any of the tier eligibility criteria?By default, the customer will be in the base tier of the program.

What happens to the status of my customer if he/she does not fulfill any of the tier eligibility criteria?By default, the customer will be in the base tier of the program.

5. Does each of the renewal conditions have to be met or any one of them is enough?As of now, it's an 'or' condition, so either of those conditions will result in a renewal.

Does each of the renewal conditions have to be met or any one of them is enough?As of now, it's an 'or' condition, so either of those conditions will result in a renewal.

6. Will changing eligibility force the tiers to compute the settings for all users in advanced settings?Yes, it depends on the tier evaluation cycle.

Will changing eligibility force the tiers to compute the settings for all users in advanced settings?Yes, it depends on the tier evaluation cycle.

7. Can I set an action in the workflows to send a communication to the customer after I retain the customer tier basedon conditions such as at least 10 visits or 1000 points, even if the customer has not met the tier criteria?Yes, that action can be set in the workflows.

Can I set an action in the workflows to send a communication to the customer after I retain the customer tier basedon conditions such as at least 10 visits or 1000 points, even if the customer has not met the tier criteria?Yes, that action can be set in the workflows.

8. Is it possible to upgrade tiers by using any other means apart from the usual upgrade conditions like a coupon orpassing the points rule?As of now, you can do this manually through member care.

Is it possible to upgrade tiers by using any other means apart from the usual upgrade conditions like a coupon orpassing the points rule?As of now, you can do this manually through member care.

9. When I configure 26K points to upgrade a tier (say Gold), will it consider 26,000 points or 26,001 to qualify?When configuring a tier, you will only see upgrade rules greater than or equal to (>=). Hence, a customer with26000 points or more will be in the Gold tier.

When I configure 26K points to upgrade a tier (say Gold), will it consider 26,000 points or 26,001 to qualify?When configuring a tier, you will only see upgrade rules greater than or equal to (>=). Hence, a customer with26000 points or more will be in the Gold tier.

10. Can tracker values for issuance be negatively adjusted for a return if the original transaction information is not available?In cases where a return occurs without reference to the original transaction, there are a few options to manage adjustments:Import Profiles for Downgrading Customers: To downgrade the customer's status, you can use import profiles. Currently, there are no available APIs for this process.Manual Point Adjustments: For deducting points, you can use the manual adjustment API to perform point adjustments.There is no out-of-the-box (OOB) capability to cap agent-level points. However, a custom solution can be implemented using behavioural events and loyalty promotions. Create a JIRA ticket and assign it to the Product team for guidance on this.

Can tracker values for issuance be negatively adjusted for a return if the original transaction information is not available?In cases where a return occurs without reference to the original transaction, there are a few options to manage adjustments:

- Import Profiles for Downgrading Customers: To downgrade the customer's status, you can use import profiles. Currently, there are no available APIs for this process.

- Manual Point Adjustments: For deducting points, you can use the manual adjustment API to perform point adjustments.There is no out-of-the-box (OOB) capability to cap agent-level points. However, a custom solution can be implemented using behavioural events and loyalty promotions. Create a JIRA ticket and assign it to the Product team for guidance on this.

13. Does Tier Downgrade work in real-time?The tier downgrade does not work in real-time. Instead, it operates on a 24-hour sync cycle. While tier upgrades happen in real-time, downgrades are processed within a 24-hour sync period.

Does Tier Downgrade work in real-time?

- The tier downgrade does not work in real-time. Instead, it operates on a 24-hour sync cycle. While tier upgrades happen in real-time, downgrades are processed within a 24-hour sync period.

Updated7 months ago