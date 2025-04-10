# MLP Scope in Campaign

Many organizations either conglomerates or single entities might require to configure multiple loyalty programs.

- Large conglomerates may require to set up different loyalty programs for their sub-organizations.For example:A conglomerate that operates in different verticals such as hotels, airlines, retail, etc. under different brand names. All these brands have their own loyalty program. Again, a customer can be part of more than one Loyalty Program.

- An organization may partner with various other companies and have different partner-loyalty programs with different partners.For example:A petroleum company has partnered with many companies. It has rolled out partner-loyalty programs with 130+ partners. It gives partner-co-branded loyalty cards to its customers. Customers use these cards during purchases and avail of points/discounts and other benefits. Again, a customer can be part of more than one partner-loyalty program.

Either way, a customer from the same organization becomes part of multiple loyalty programs. To ensure personalized communication to customers, it becomes important to uniquely segment customers in the context of a particular loyalty program and then interact with them. This will help the brands to drive KPIs such as cross-vertical sales, and boost average transaction value, and transaction frequency.

In addition to the filter to segment customers based on their subscription to a specific loyalty program, the following filters are also added to the scope of the loyalty program.

- Loyalty program registration date

- Active points

- Redeemed points

- Number of transactions

For Example:If marketers were to identify customers who have more than 5000 active points from the loyalty program, then the active points filter should consider how many active points the customer has with this Loyalty program and not the total active points she has from all loyalty programs combined. This is achieved when

- the scope/information about the loyalty program is passed to each filter

- filters honor the scope and accordingly filter users.

## Feature updates

The following changes are added in Engage+.

1. In Campaign, Message users can now select a Loyalty Program. This selected program/ scope will be passed to Filters.

> 📘With this, if a loyalty program is chosen, then the audience through filters contains customers of that Loyalty Program.Any other filter chosen will work in accordance with the scope.

## 📘

- With this, if a loyalty program is chosen, then the audience through filters contains customers of that Loyalty Program.

- Any other filter chosen will work in accordance with the scope.

1. In the Campaign Message, users can select a Loyalty Program. This selected program/ scope will be passed to Labels.

> 📘If in creatives, any labels such as total_points, points_expiry_date are chosen, then the values of the loyalty program passed in scope.

## 📘

- If in creatives, any labels such as total_points, points_expiry_date are chosen, then the values of the loyalty program passed in scope.

## Use case

1. Customer Understanding: One customer can be part of multiple loyalty programs. A marketing manager would want to reach out to customers belonging to a certain loyalty program and send promotional messages with tags such as current points, card number, expiry date, coupons, and promotional points.In a single promotional message, the marketing manager would not like to talk about different loyalty programs (as these could be entirely different organizations or partners).With the new development, the scope gets restricted to the loyalty program chosen, so the audience targeted remains specific to the selected loyalty program and the labels resolve to values with respect to the selected loyalty program. Hence, the error of sending messages to non-intended audiences and the error of showing wrong points, card numbers, expiry dates, etc. in the content reduces significantly.

2. Loyalty program-specific use case: A brand can have programs for different partners or sub-organizations. With each partner or sub-organization, they might want to focus on different strategies or objectives such as boosting sales, getting feedback, and running offers.For example:

- Increase transaction frequency: For Partner 1, if the brand wants to increase transaction frequency, using the Scope filter, the marketing manager will be able to first identify the audience for Partner 1 and then use transaction filters to identify customers with a low visit count for Partner 1 (only). Then the identified customers can be given relevant offers to promote visits to the store and transact with Partner 1.

- Increase sales: Loyalty sales for sub-organization A/ Partner A is low. The marketing manager can identify the audience only for that loyalty program and run campaigns for increasing visits, ATV, ATB, etc. Communication/ offers can be personalized by segmenting customers. Filters such Recency < 3 months, ATV > $500, active point = 1000, transaction frequency = 7 times/ year etc. can be applied.

## Prerequisites

1. Org needs to have Multiple Loyalty Programs.

2. Brand or Capillary POC can raise a ticket with the sustenance team requesting to enable the <> campaigns.

## Enhancements

1. Added Scope selection in the message creation flow to target customers belonging to a specific loyalty program.

> 📘This scope will remain valid throughout the Campaign Message and thus will get applied to Filters and Labels.

## 📘

- This scope will remain valid throughout the Campaign Message and thus will get applied to Filters and Labels.

![1366](https://files.readme.io/5869421-lNyChLOGkxUVBQMPTaz71joiVoEgjA1d0A.png)

To use this feature, follow these steps.

1. The Loyalty program can be selected from the dropdown menu. Search functionality is also provided for ease of use.

2. Since there can be multiple Card Series/ OUs belonging to the same Loyalty program, the selection needs to be done at the Card Series or OU level.

Usage example:

- For orgs, one loyalty program may encompass multiple card series. Hence, the scope can be selected at the Card Series level. Marketers can select Loyalty Program > Card Series.

- For Petron Org, however, there is a 1-1 mapping between loyalty program and card series hence the scope can be selected at Card series structure.

![1366](https://files.readme.io/aaac03c-QyWgPAc9MdoiN7ilPUJQBS3XlL1DWBZF0Q.png)

- For orgs such as Tata, one loyalty program like the Tata Group Loyalty Program may encompass loyalty programs for different OUs such as Titan, Tanishq, etc. Hence the scope can be selected at the OU level and hence marketers can select Loyalty Program > OU.

> 📘Once the scope is selected it will remain the same throughout the Campaign Message and cannot be changed.None needs to be selected in case the Loyalty Program scope is not needed.

## 📘

- Once the scope is selected it will remain the same throughout the Campaign Message and cannot be changed.

- None needs to be selected in case the Loyalty Program scope is not needed.

1. Filters in Audience Manager will honor the selected scope: If any message scope is 'None’ then in Audience Group the selected Loyalty Program is passed as scope. The Filtered Customers List will have customers who belong to the selected Loyalty Program.

- Creating Audience by applying Filter:

![1366](https://files.readme.io/8a3d6af-wdItssaOAaaYLz5EjdDlnRpsLqlaZEPXxw.png)

Transaction and Loyalty Filters can now understand scope definition -

- Transaction filter example: If Loyalty Program/Card Series A is selected and we give the condition “Include customers whose transaction count is 0-5 during specific date range", then only customers of the card series A who have done less than 5 transactions appear in the list.Since one customer can belong to more than one Loyalty Program, 5 transactions might have been done with a combination of Card Series A/B/C. Without passing scope the identification of the right customer is not possible.

- Loyalty filter example: If Loyalty Program/Card Series A is selected and we give the condition “Include customers whose active points are in the range of 0-500 then customers who have less than 500 active points with Card Series A will only appear in the list.Since one customer can belong to more than one Loyalty Program, less than 500 points might have been with a combination of Card Series A+B+C. Without passing scope the identification of the right customer is not possible.

- Limitation: There is no way for Engage+ backend to understand if the Audience List (filtered/ uploaded) contains an Audience belonging to a single Loyalty Program/ Card Series type.If the scope of the Campaign is Loyalty Program A / Card Series A and the audience list contains customers from card series A and B then people from series B will not be reached out/ skipped.

Hence, it is advisable to create an Audience list with the correct scope or upload a list with only one type of Loyalty program customer and then use the same in the Campaign.

1. Label resolution for content will be as per the selected scope: If for any message scope is ‘not-None’ then for Label resolution the selected Loyalty Program is passed as scope. The Loyalty and card-related Labels/ tags will get resolved for the respective Program only.

For example: If the selected Loyalty program is A and the tag used in creatives is {{total_points_to_expire_day(7)}} then the Card Series A points will be mentioned in the message.

New Labels for Card Series (Card Number, Card Issue Date, Card Series Name) have also been added.Usage Nuance:For a petroleum company, one customer can have more than one card from the same Card series/ Loyalty Program. In case of any conflict on tag resolution, the card which was more recently used in a transaction or recently registered will be used.

![1366](https://files.readme.io/0eca994-cotFUqEz1WiNuKpwT4Sf-LXxjEx1NWvEpA.png)

## Future scope

### Multiple Loyalty Programs selection in the scope:

Marketers will be able to select more than one Loyalty Program as a scope. If Loyalty Program A and B are selected together then customers only in Loyalty Program A, only in Loyalty Program B, and both in Loyalty Program A & B will be part of the campaign. The tag resolution will also happen for both of the Loyalty Programs.

Updatedover 1 year ago