# List of KPIs and Dimensions

# KPIs

A broad grouping ofKPIsis given below:

- Coupon - Includes KPIs such as Coupon Issued, Coupon Redeemed, Badge Earned.

- Campaign - Includes KPIs such as Contacted Customers, Responding Customers, Message Delivered.

- Points -  Includes KPIs such as Current Points, Points Returned, Expired Cashback.

- Customer - Includes KPIs such as New Customers, Customer Sales, Repeat Customers Visits.

- Transaction - Includes KPIs such as Loyalty Transactions, Return Transactions, Active Stores.

- Capillary AI - Includes KPIs such as Lap Customers, Expected Win Back Sales, Transact Spend Per Visit.

- Credits - Includes KPIs such as Credited, Debited, Balance.

- External Fact KPIs - Includes KPIs such as NPS Score.

Each KPI group has multiple subsections. For example, the coupons KPI along with the coupons related KPIs has multiple badges KPIs such as Badge Issued, Badge Earned, Badge Issued customers, and Badge Earned customers. You can select the KPI of interest for creating charts and reports.

![](https://files.readme.io/eef687f52873f83eee13068bd610fcabe8131022fea6661ead97436465da26fe-image.png)

## KPI Library: Definitions and Applications

A list of the most frequently used KPIs is provided below, along with their descriptions, formulas for calculating KPI values (if applicable), and the business use of each KPI.

| KPI | Description | Formula used for calculation | Business Use |

| --- | --- | --- | --- |

| Redemption Rate | Ratio of the number of coupons issued and the number of coupon redeemed, in the specified report duration. | Redemption Rate = 100* (Number of Coupon Redeemed) / (Number of Coupon Issued)Count of the coupons derived from the COUPONS fact table. | Percentage of coupons redeemed by the customers during the report period. This can be further evaluated with respect to dimensions such as date, time, user attributes, store and zones, or campaign attributes. |

| Coupon Issued | Total number of coupons issued, in the specified report duration. | Count of the total issued coupons derived from the COUPONS fact table. | Total number of coupons distributed, in the specified report duration. This can be further evaluated with respect to dimensions such as date, time, user attributes, store and zones, or campaign attributes. |

| Coupon Redeemed | Total number of coupons redeemed, in the specified report duration. | Count of the total redeemed coupons derived from the COUPONS fact table. | Total number of coupons redeemed, in the specified report duration. This can be further evaluated with respect to dimensions such as date, time, user attributes, store and zones, or campaign attributes. |

| Coupon Redeemer | Total number of customers who redeemed the coupon, in the specified report duration. | Distinct count of the customers who redeemed the coupons from the COUPONS fact table. | Total number of unique customers who redeemed a coupon. This can be further evaluated with respect to dimensions such as date, time, user attributes, store and zones, or campaign attributes. |

| Total sales | The sum of final bill amount including taxes and discounts, but excluding returns. Transactions include both members and non-members. | Sum of the bill_amount derived from the BILL_LINEITEMS fact table. | Revenue generated from transactions. This can help to evaluate business performance. |

| Total Sales with Discount | Total sales from transactions made by both members and non-members, where a discount has been applied. | Sum of the bill_amount derived from the BILL_LINEITEMS fact table, where discount is greater than 0. | Total sales from transactions made by both members and non-members, where a discount has been applied. This helps analyze the impact of discounts on overall sales performance. |

| Net Sales | The sum of final transaction amount including taxes, discounts and returns. Return sales are the value of items customers has returned. | Net Sales = (Total Sales) - (Return Sales)Total sales The values are derived from the BILL_LINEITEMS fact table and Return Sales are derived from the RETURN_BILL_LINEITEM fact table. | Actual revenue generated from sales after adjustments, providing insights into overall sales performance. |

| % Return Sales | Percentage of the total sales that resulted in return transactions. | % Return Sales = 100*( (Return Sales) / (Total Sales) )Total sales The values are derived from the BILL_LINEITEMS fact table and Return Sales are derived from the RETURN_BILL_LINEITEM fact table. | Proportion of sales that resulted in returns, useful for evaluating product performance and customer satisfaction. |

| ATV | Average Transaction Value is calculated by dividing the total sales by the total number of transactions. | ATV = (Total Sales) / (Total Transactions)Total sales and Total Transactions are derived from the BILL_LINEITEMS fact table. | Average value of transaction, helps in understanding the purchasing behavior of the customers. |

| ABS | Average Basket Size is the ratio of sum of item quantity and the total number of transactions. This does not consider returns. | ABS = (Total Quantity) / (Total Transactions)Total Quantity and Total Transactions are derived from BILL_LINEITEMS fact table. | Average number of items per transaction, helps understand purchase volume per visit. |

| Loyalty conversion | The percentage of total transactions made by customers enrolled in the loyalty program. | Loyalty Conversion = 100*( (Loyalty Transactions) / (Total Transactions) )Transaction values are derived from the BILL_LINEITEMS fact table. | Percentage of total transactions made by loyalty customers. |

| Loyalty sales | The sum of final bill amount of all loyalty transactions including taxes, and discounts (excluding returns). | Sum of the bill_amount derived from the BILL_LINEITEMS fact table for the loyalty customers. | Total revenue generated from loyalty customers, useful for tracking loyalty-driven sales. |

| Product sales | The sum of line item amount in the transactions. | Sum of the line_item_amount derived from the BILL_LINEITEMS fact table. | Product performance can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for buying, or product attributes. |

| % Loyalty Txns | Percentage of total transactions that were loyalty transactions (transactions made by loyalty customers). | % Loyalty Txns = 100*( (Loyalty Transactions) / (Total Transactions) )Transaction values are derived from the BILL_LINEITEMS fact table. | Percentage of total transactions that were loyalty transactions, helps understand the contribution of loyalty members to overall transactions. |

| Loyalty ATV | Average transaction value for transactions done by loyalty customers. | Loyalty ATV = (Loyalty Sales) / (Loyalty Transactions)values are derived from the BILL_LINEITEMS fact table. | Average transaction value for loyalty customers, useful for understanding loyalty customer spending behavior. |

| Loyalty ABS | Average number of items per transaction for loyalty customers. | Loyalty ABS = (Loyalty Quantity) / (Loyalty Transactions)Values are derived from the BILL_LINEITEMS fact table. | Average number of items per transaction for loyalty customers, valuable for understanding purchase volume by loyalty members. |

| Point Redemption bills | Total number of bills where points are redeemed by the loyalty customers. | Distinct count of the customers who redeemed the points from the POINTS fact table. | Count of transactions where points were redeemed, useful for understanding customers point redemption behavior. |

| Point redemption sales | The sales generated by customers against redeeming points including taxes, and discounts (excluding returns). | Sum of the bill_amount derived from the BILL_LINEITEMS fact table, where redeemed_points is greater than 0. | Sales generated by customers against redeeming points, useful for understanding customers point redemption behavior. |

| Loyalty txns | Total number of transactions made by loyalty customers, across slabs. | Count of the bill_id derived from the BILL_LINEITEMS fact table. | Total transactions by loyalty members, useful for understanding loyalty customer behaviour across slabs. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Points Expiry Communications Sent | Total communications sent to notify customers of points expiration within the selected time period. | Count of reminder_id derived from the POINTS_EXPIRY_REMINDER_INFO fact table. | Number of reminders sent to customers about expiring points, in a specific period of time. This can be further evaluated with respect to dimensions such as date, time, communication channel, and user attributes. |

| Points Expiry Customers Contacted | Number of customers contacted regarding points expiry, during the selected period. | Distinct count of dim_event_user_id in the POINTS_EXPIRY_REMINDER_INFO fact table. | Number of customers contacted regarding points expiry, during the selected period. This can be further evaluated with respect to dimensions such as date, time, communication channel, and user attributes. |

| Days Before Points Expiry | Number of days before which the expiry reminder SMS was sent (before scheduled date of points expiry). | Maximum value for reminded_before_days column derived from the POINTS_EXPIRY_REMINDER_INFO fact table. | Timing of expiry notifications, providing insights into the optimal reminder period for encouraging point redemption. |

| Total Task | Total number of call tasks created within a specified date range. Call tasks are tasks created and assigned to store staff to process. The tasks could be call customers for birthday wishes that will get populated every day for the cashier to process. | Count of the dim_task_id derived from the CALL_TASK_CUSTOMER_STATUS fact table. | Total number of call tasks created within a specified date range. This data can be further evaluated with zone, customer segment, call task action type, start or end date of the call task, or creator of the call task. |

| Total Closed Task | Total number of call tasks closed within the specified date range. | Count of the dim_task_id derived from the CALL_TASK_CUSTOMER_STATUS fact table, where the status of the call task is COMPLETE. | Number of completed call tasks in a specific date range, useful for measuring task completion with respect to time. This data can be further evaluated with zone, customer segment, call task action type, start or end date of the call task, or creator of the call task. |

| Total Open Task | Total number of call tasks remaining open within the specified date range. | Count of the dim_task_id derived from the CALL_TASK_CUSTOMER_STATUS fact table, where the status of the call task is OPEN. | Number of tasks still open, helping monitor pending tasks. This data can be further evaluated with zone, customer segment, call task action type, start or end date of the call task, or creator of the call task. |

| % Tasks Open | Percentage of total call tasks that are open. | % Tasks Open = 100*( (Total Number of Open Tasks) / (Total Number of Tasks) )Values are derived from the CALL_TASK_CUSTOMER_STATUS fact table. | Proportion of tasks still open. This data can be further evaluated with zone, customer segment, call task action type, start or end date of the call task, or creator of the call task. |

| % Tasks Closed | Percentage of total call tasks that are closed. | % Tasks Closed = 100*( (Total Number of Closed Tasks) / (Total Number of Tasks) )Values are derived from the CALL_TASK_CUSTOMER_STATUS fact table. | Percentage of tasks completed. This data can be further evaluated with zone, customer segment, call task action type, start or end date of the call task, or creator of the call task. |

| % Tasks Picked | Percentage of call tasks picked up (closed + in-progress). | % Tasks Picked = 100*(( (Total Number of Closed Tasks) + (Total Number of InProgress Tasks) )/ (Total Number of Tasks) )Values are derived from the CALL_TASK_CUSTOMER_STATUS fact table. | Percentage of tasks engaged (either closed or in-progress). This data can be further evaluated with zone, customer segment, call task action type, start or end date of the call task, or creator of the call task. |

| Test Responders - Closed and In-Progress Tasks | In a campaign there are two group of audiences - Test and Control.Test: The audience that receives the campaign communication to measure its impact.Control: The audience excluded from the campaign communication to serve as a benchmark for comparison.Test Responders - Closed and In-Progress Tasks - This metric tracks the number of Test audience members who responded to the campaign by interacting with closed or in-progress call tasks. These tasks represent actions initiated by the store staff that have either been completed (Closed) or are actively being worked on (In Progress). | Values are derived from the RESPONSE_INFO and CALL_TASK_CUSTOMER_STATUS fact tables. | Behaviour of the Test Responders with respect to Closed and In-Progress Tasks. This can be compared for multiple campaigns, for a specified period. |

| Test Responder Sales - Closed and In-Progress Tasks | Total sales value generated by the Test audience members who responded to closed or in-progress call tasks. It reflects the revenue impact of tasks assigned to store staff that led to customer engagement and purchases. | Values are derived from the RESPONSE_INFO and CALL_TASK_CUSTOMER_STATUS fact tables. | Total sales generated from responses associated with closed or in-progress tasks, for multiple campaigns, for a specified period. |

| Test Responder Txns - Closed and In-Progress Tasks | This metric represents the total number of transactions conducted by the Test audience members in response to closed or in-progress call tasks. It provides insights into the transactional behavior resulting from store staff's engagement efforts. | Values are derived from the RESPONSE_INFO and CALL_TASK_CUSTOMER_STATUS fact tables. | Total number of transactions linked to customer responses in closed or in-progress tasks, for multiple campaigns, for a specified period. |

| % Tasks In-Progress | Percentage of total tasks created in the selected duration that are currently in progress, assigned by a particular store. | % Tasks In-Progress = 100*( (Total Number of InProgress Tasks) / (Total Number of Tasks) )Values are derived from the CALL_TASK_CUSTOMER_STATUS fact table. | Proportion of tasks currently in-progress out of all tasks created. These can be further evaluated with respect to the dimensions such as store attributes, user attributes, task action type, campaign attributes, date and time. |

| Total InProgress Task | The total number of call tasks created in a date range and are in-progress. | Count of the dim_task_id derived from the CALL_TASK_CUSTOMER_STATUS fact table. | Volume of tasks still in progress within a selected date range. These can be further evaluated with respect to the dimensions such as store attributes, user attributes, task action type, campaign attributes, date and time. |

| Customers_ITD | Customer ITD (Inception to Date) - Total number of customers registered in loyalty program in the selected duration. | Values are derived from the CUSTOMER_SUMMARY fact table. | Number of customers who registered in the loyalty program within a specified period. This data can be further evaluated with store, date, time or customer segment. |

| Unsubscribed_ITD | The total number of customers who unsubscribed from communication channels within the selected date range. | Values are derived from the CONTACT_INFO fact table. | Total number of customers who unsubscribed from communication channels within the selected date range. This data can be further evaluated with store, date, time or customer segment. |

| Active Campaigns | Number of campaigns active in selected duration. A campaign is considered active if a customer is contacted or a contacted customer responds. | Values are derived from the CONTACT_INFO and RESPONSE_INFO fact tables. | Number of campaigns active in selected duration. This data can be further evaluated with respect to dimensions such as date, time, store, slab details of the customer, or campaign type. |

| Contacted Customers | The total number of customers whose communications were successfully delivered during the campaign period. | Values are derived from the CONTACT_INFO fact table. | Number of customers who received campaign communications, enabling analysis of campaign reach and communication success. This data can be further evaluated with respect to dimensions such as date, time, store, slab details of the customer, or campaign type. |

| Responder Sales | The total sum of all transaction amounts, generated by customers who responded during the campaign. These include taxes and discounts (excluding returns). | Values are derived from the RESPONSE_INFO fact table. | Total sales generated by customers who engaged with the campaign. This data can be further evaluated with respect to dimensions such as date, time, store, slab details of the customer, or campaign type. |

| Responder Txns | The total number of transactions made by contacted customers during the campaign period. | Values are derived from the RESPONSE_INFO fact table. | Number of transactions by customers who engaged with the campaign. This data can be further evaluated with respect to dimensions such as date, time, store, slab details of the customer, or campaign type. |

| % Repeat Customers | The percentage of customers who made multiple purchases (repeat customers) within the selected period. It is calculated as the ratio of repeat customers to the total number of customers who shopped. | % Repeat Customers = 100*( (Total number of repeat customers) / (total number of customers shopped) )Values are derived from the BILL_LINEITEMS fact table. | Share of customers making repeat purchases, useful for understanding customer loyalty and retention within the period. This data can be further analyzed with respect to dimensions such as date, time, store, product details, ordering channel, or customer's card details. |

| % Repeat Among New | The percentage of new customers, who joined and made multiple transactions within the selected time range, calculated against the total new customers. | % Repeat Among New Customers = 100*( (Customers who made multiple transaction and joined in a date range) / (Total customers who joined and transacted in the same date range) )Values are derived from the BILL_LINEITEMS fact table. | Percentage of new customers making repeat transactions. This data can be further analyzed with respect to dimensions such as date, time, store, product details, ordering channel, or customer's card details. |

| Extra Sales | The sales generated by customers against redeeming points including taxes, and discounts (excluding returns). | Sum of the bill_amount derived from the BILL_LINEITEMS fact table. | Revenue from point-redemption purchases. This data can be further evaluated with store, date, time or customer segment. |

| Current Points | The total points that customers (registered during the report period) can currently redeem. | Sum of the loyalty_points derived from the CUSTOMER_SUMMARY fact table. | Current points that loyalty customers can redeem. This data can be further evaluated with store, date, time or customer segment. |

| Earn To Burn Ratio | The ratio of total points earned and the total points redeemed by loyalty customers. | (Total points earned) / (Total points redeemed)Values are derived from the POINTS fact table. | Balance between points earned and redeemed. This data can be further evaluated with store, date, time or customer segment. |

| Points Redeemed | Total number of points redeemed by the loyalty customers. | Values are derived from the POINTS fact table. | Total points redeemed by loyalty members. This data can be further evaluated with store, date, time or customer segment. |

| Member ATV | The average transaction value (ATV) for members, calculated as total sales from members divided by the number of member transactions. | (Member Sales) / (Member Transactions)Values are derived from the BILL_LINEITEMS fact table. | Average transaction value for loyalty members, allowing for comparison with non-members. This data can be further analyzed with respect to dimensions such as date, time, store, product details, ordering channel, or customer's card details. |

| Non Member ATV | The average transaction value (ATV) for not-interested customers, calculated as total sales from not-interested customers divided by the number of not-interested customer transactions. | ((Non members sales) / (Non member transactions)) | Average transaction value for non-members. This can be compared to member values and analyzed across dimensions such as date, time, store, product details, ordering channel, or customer card details. |

| Customers | The total number of customers registered in the loyalty program, during the selected time period, with a particular store. | Distinct count of user_id derived from the BILL_LINEITEMS fact table. | Total number of customers registered in loyalty program, during a specific period, at a particular store. Helps evaluate the performance of the store, with respect to date, time, and customer attributes. |

| % Member Txns | The percentage of total transactions made by members, with a particular store. | % Member Txns = 100*( (Member Transactions) / (Total Transactions) )Values derived from the BILL_LINEITEMS fact table. | Proportion of transactions made by loyalty members, in a particular store. This can be further evaluated with respect to date, time, or customer attributes. |

| % Sign Ups | The percentage of customers who signed up for the loyalty program, in a particular month. | % Sign Ups = 100* (customers) /( (customers) + (Non Member Transactions) )Values are derived from the BILL_LINEITEMS and CUSTOMER_SUMMARY fact tables. | Percentage of customers who joined the loyalty program, in a particular month. This can be further evaluated with respect to dimensions such as time, store, or user attributes. |

| Active Customers | The total number of customers who are still actively purchasing (in recent months) and have not yet lapsed, having joined within the given date range. The default lapsation period is 90 days since their last purchase. | Values are derived from the BILL_LINEITEMS fact table. | Total number of active customers, in a given time period. This can be further evaluated with respect to dimensions such as time, store, or user attributes. |

| Winback Customers | The total number of customers who made a purchase within the selected date range, with their previous transaction being more than 90 days ago. | Distinct count of days_since_last_visit derived from the BILL_LINEITEMS fact table. | Number of lapsed customers who resumed purchasing after a set period. This can be further evaluated with respect to dimensions such as time, store, or user attributes. |

| Avg Latency | The average number of days between consecutive customer visits. | Values are derived from the CUSTOMER_SUMMARY fact table. | Average number of days between consecutive customer visits. Provides insights into visit frequency. |

| Member Sales | The sum of final bill amount of all member transactions including taxes, and discounts (excluding returns). | Values are derived from the BILL_LINEITEMS fact table. | Tracks revenue generated from loyalty members. |

| Points Issued | The total number of points issued to loyalty customers, excluding any points deducted due to returns. | Values are derived from the POINTS fact table. | Total number of points issued to loyalty customers, excluding any points deducted due to returns. These can be further evaluated with respect to the dimensions such as date, time, promotion attributes, programs, store and user attributes. |

| Expired Cashback | The total number of points that have expired for loyalty customers within the selected date range. | Values are derived from the POINTS fact table. | Total number of points that have expired for loyalty customers. These can be further evaluated with respect to the dimensions such as date, time, promotion attributes, programs, store and user attributes. |

| LCI | The contribution of incremental sales to total sales, given as a percentage. | Incremental sales /total salesValues are derived from the BILL_LINEITEMS fact table. | Highlights the contribution of loyalty program-driven sales. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Incremental sales LCI | The contribution of incremental sales made by customers who redeemed their loyalty points (redeemers) compared to those who did not (non-redeemers). | Incremental sales LCI = ( (Redeemers count) *(( (Redeemers Sales) / (Redeemers count) )-( (Non Redeemers Sales) / (Non Redeemers count) )))Values are derived from the BILL_LINEITEMS fact table. | Sales contribution from the redeemers in comparison to non-redeemers. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Redeemers Sales | The sum of final bill amount made by customers who redeemed their loyalty points (redeemers) | Values are derived from the BILL_LINEITEMS fact table. | Revenue generated by redeemers sales. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Non Redeemers Sales | The sum of final bill amount made by customers who did not redeem their loyalty points (non-redeemers). | Values are derived from the BILL_LINEITEMS fact table. | Revenue generated from non-redeemers. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Spend per redeemers | The average amount spent by redeemers, calculated as the total sales generated by redeemers divided by the number of redeemers. | Spend per redeemers = (Redeemers sales) / (Redeemers count)Values are derived from the BILL_LINEITEMS fact table. | Average amount spend by redeemers. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Spend per non-redeemers | The average amount spent by non-redeemers, calculated as the total sales generated by non-redeemers divided by the number of non-redeemers. | Spend per non-redeemers = (Non redeemers sales) / (non redeemers count)Values are derived from the BILL_LINEITEMS fact table. | Average amount spent by non-redeemers. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Spend Per Visit Non Redeemers | The average amount spent per visit by non-redeemers, calculated as the total non-redeemer sales divided by their visit count. | Spend Per Visit Non Redeemers = (Non redeemers sales) / (Non redeemers visit count)Values are derived from the BILL_LINEITEMS fact table. | Average amount spent per visit by non-redeemers, helps in understanding their spending behavior. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Spend Per Visit Redeemers | The average amount spent per visit by redeemers, calculated as the total redeemer sales divided by their visit count. | Spend Per Visit Redeemers = (Redeemers sales) / (Redeemers visit count)Values are derived from the BILL_LINEITEMS fact table. | Average amount spent per visit by redeemers, helps understand their spending pattern. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Non Redeemers count | The total number of customers who did not redeem any loyalty points within the selected period. | Values are derived from the BILL_LINEITEMS fact table. | Non Redeemers count is the count of customers who have never redeemed their loyalty points. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Redeemers count | The total number of customers who redeemed loyalty points within the selected period. | Values are derived from the BILL_LINEITEMS fact table. | Redeemers count is the count of customers who redeemed their loyalty points. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Visit per customers Non Redeemers | The average number of visits per non-redeemer customer, calculated as the total number of non-redeemer visits divided by the number of non-redeemer customers. | Visit per customers Non Redeemers = (Non Redeemers visit count) / (Non Redeemers count)Values are derived from the BILL_LINEITEMS fact table. | Average number of visits per non-redeemer customer. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Visit per customers Redeemers | The average number of visits per redeemer customer, calculated as the total number of redeemer visits divided by the number of redeemer customers. | Visit per customers Redeemers = (Redeemers visit count) / (Redeemers count)Values are derived from the BILL_LINEITEMS fact table. | Average number of visits per redeemer customer. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Avg Sales Price | The average sales price, calculated as total sales divided by the total quantity sold within the selected date range. | Avg Sales Price = Total Sales / Total quantity countValues are derived from the BILL_LINEITEMS fact table. | Provides average sales price. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Qty per customer | The average quantity purchased per customer, calculated as the total quantity sold divided by the total number of customers in the selected date range. | Qty per customer = Total qty / Total customer countValues are derived from the BILL_LINEITEMS fact table. | Average purchase quantity per customer, helps understanding customer buying patterns. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Points credited | The total number of points credited to loyalty customers, including both issued points and any adjustments made. Points adjustments are changes made to a customer's points balance, in cases such as returns. | Points credited = (Points Issued) + (Points Adjustments)Values are derived from the POINTS fact table. | Total number of points credited to loyalty customers, in a specific time period. |

| Points Debited | The total number of points debited for the loyalty customers. | Values are derived from the POINTS fact table. | Total number of points debited for the loyalty customers, in a specific time period. |

| Liability | This provides the current points liability of the redeemable points. Calculated as Points issued + Points Adjustment - Points Debited. It is recommended to use this KPI as ITD in charts. The standard report includes fraud users and admin tills. To exclude them, create a custom chart. | Liability = (Points Issued) + (Points Adjustments) - (Points debited)Values are derived from the POINTS fact table. | Shows the current points liability. It is advisable to use this KPI as ITD in charts. In the standard report, this KPI includes data from fraud users and admin tills. To exclude them, consider creating a custom chart. |

| Redemption Transaction Net Sales | The average net sales per redemption transaction. Redemption transactions are transactions where customers redeem points for a purchase. | Redemption Transaction Net Sales = (Extra Sales) / (Points Redeemed)Values are derived from the BILL_LINEITEMS and POINTS fact tables. | Helps evaluate how much revenue, on average, is generated during a transaction involving points redemption. |

| Points Returned | The sum of points adjusted due to return transactions. | Values are derived from the POINTS fact table. | Tracks points returned due to transactions, helps understand customer behavior. |

| Test Responder Sales | The sum of transaction amount generated by test customers in campaigns. This includes taxes and discounts but excludes returns. | Sum of bill_amount derived from the RESPONSE_INFO fact table. | Reflects sales generated from test responders, providing data to evaluate campaign impact. |

| Hit Rate | The ratio of the total Customers Responded to the total Customers Contacted, during a campaign. | Hit Rate = 100* (Responding Customers) / (Contacted Customers)Values are derived from the RESPONSE_INFO and CONTACT_INFO fact tables. | Measures campaign effectiveness by identifying the percentage of contacted customers who responded. |

| Responding Customers | The total number of customers who responded to the campaign, including both the test and control groups. | Values are derived from the RESPONSE_INFO fact table. | Indicates the total customer response count for a campaign, helps evaluate campaign performance. |

| Response Product Sales | The sum of lineitem amount of all response transactions. Response transactions are transactions where customers respond to a campaign by making a purchase. | Sum of line_item_amount derived from the RESPONSE_INFO fact table. | Tracks revenue generated from customer responses to measure campaign effectiveness. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Msg Sent | The total number of messages sent to customers during the campaign. | Count derived from the CONTACT_INFO fact table. | Provides insight into the volume of messages sent to customers during a campaign. This can be further evaluated with respect to dimensions such as time, store, or user attributes. |

| Msg Delivered | The total number of messages delivered to customers during the campaign. | Count derived from the CONTACT_INFO fact table. | Provides insight into the volume of messages delivered to customers during a campaign. This can be further evaluated with respect to dimensions such as time, store, or user attributes. |

| Delivery Rate | The percentage of sent messages that were successfully delivered. | Delivery Rate = 100* (Msg delivered) / (Msg sent)Values are derived from the CONTACT_INFO fact table. | Reflects the success of message delivery. A higher rate indicates that more messages reached the intended recipients, improving the overall campaign effectiveness. This can be further evaluated with respect to dimensions such as time, store, or user attributes. |

| Incremental Sales | The additional sales generated by test customers compared to control customers, in a campaign, calculated as Incremental Sales = ((Test Hit Rate - Control Hit Rate) *(TEST Responders Spend per Customer) * (Test Customers Contacted))/100 | Incremental Sales = maxOf(((( (Test Responding Customers) / (Test Contacted Customers) )-( (Control Responding Customers) /maxOf( (Control Contacted Customers) ,0.0001)))* (Test Contacted Customers) * (Test Responder Sales) / (Test Responding Customers) ),0)Values are derived from the CONTACT_INFO and RESPONSE_INFO fact tables. | Reflects the additional sales generated in a campaign, by the test group relative to the control group. This helps determine the impact of the campaign on sales. This can be further evaluated with respect to dimensions such as time, store, or user attributes. |

| UpLift | The percentage increase in response rate of test customers compared to control customers, calculated as UpLift = ((Test Hit Rate - Control Hit Rate) / Control Hit Rate) * 100. | UpLift = 100*(( (Test Responding Customers) / (Test Contacted Customers) )-( (Control Responding Customers) /maxOf( (Control Contacted Customers) ,0.0001)))/(( (Control Responding Customers) /maxOf( (Control Contacted Customers) ,0.0001)))Values are derived from the CONTACT_INFO and RESPONSE_INFO fact tables. | Measures the relative performance increase in the test group compared to the control group. It helps evaluate the effectiveness of the campaign. This can be further evaluated with respect to dimensions such as time, store, or user attributes. |

| Responder ATV | The average transaction value for customers who responded to the campaign, excluding returns. Calculated as Responder ATV = Responder Sales / Responder Transactions. | Responder ATV = (Responder Sales) / (Responder Txns)Values are derived from the RESPONSE_INFO fact table. | Calculates the average transaction value for customers who responded to the campaign. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| Campaign Points redeemed | The total number of points redeemed by loyalty customers in response to the campaign. | Sum of the redeemed_points derived from the RESPONSE_INFO fact table. | Tracks the total number of loyalty points redeemed by customers in response to the campaign, helping understand customer redemption behavior. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| Campaign Points redeemer | The total number of customers who redeemed points while responding to the campaign. | Distinct count of user_id derived from the RESPONSE_INFO fact table, where redeemed_points are GREATER_THAN 0. | Shows the total number of customers who redeemed points during the campaign. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| Test Contacted Customers | The total number of customers contacted as part of the test group in the campaign. | Distinct count of user_id derived from the CONTACT_INFO fact table, where group_type is TEST. | Provides the number of customers contacted in the test group. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| Control Contacted Customers | The total number of customers contacted as part of the control group in the campaign. | Distinct count of user_id derived from the CONTACT_INFO fact table, where group_type is CONTROL. | Provides the number of customers contacted in the control group. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| Test Responding Customers | The total number of customers from the test group who responded to the campaign. | Distinct count of user_id derived from the RESPONSE_INFO fact table, where group_type is TEST. | Tracks the number of customers from the test group who responded to the campaign. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| Control Responding Customers | The total number of customers from the control group who responded to the campaign. | Distinct count of user_id derived from the RESPONSE_INFO fact table, where group_type is CONTROL. | Shows the number of customers from the control group who responded to the campaign. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| Test Hit Rate | The percentage of customers from the test group who responded to the campaign, calculated as Test Hit Rate = (Test Responding Customers / Test Contacted Customers) * 100. | Test Hit Rate = 100* (Test Responding Customers) / (Test Contacted Customers)Values are derived from the CONTACT_INFO and RESPONSE_INFO fact tables. | Measures the success rate of the campaign. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| Control Hit Rate | The percentage of customers from the control group who responded to the campaign, calculated as Control Hit Rate = (Control Responding Customers / Control Contacted Customers) * 100. | Control Hit Rate = 100* (Control Responding Customers) / (Control Contacted Customers)Values are derived from the CONTACT_INFO and RESPONSE_INFO fact tables. | Serves as a baseline to compare the test group's campaign performance. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| Msg Not Delivered | The total number of messages that were not delivered to customers during the campaign. | Values are derived from the CONTACT_INFO fact table, where campaign_delivery_status is Delivered','Marked Unsubscribe','Marked Spam','Clicked','Opened'. | Helps identify campaign message delivery issues to optimize messaging strategies. |

| Unsubscribed | The total number of customers who unsubscribed from the communication channel. | Values are derived from the CONTACT_INFO fact table. | Provides insight into customer disengagement. |

| Unique open rate | The percentage of delivered messages that were opened at least once, during the campaign. Calculated as Unique Open Rate = (Unique Open Count / Msg Delivered) * 100. | Unique open rate = 100* (Unique open count) / (Msg Delivered)Values are derived from the CONTACT_INFO fact table. | Measures customer engagement by tracking how many delivered messages were opened, helping to assess the effectiveness of campaign messaging. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| Unique Click Rate | The percentage of delivered messages that were clicked at least once, during the campaign. Calculated as Unique Click Rate = (Unique Click Count / Msg Delivered) * 100. | Unique Click Rate = 100*( (Unique Click Count) / (Msg Delivered) )Values are derived from the CONTACT_INFO fact table. | Assesses the level of customer interest in the campaign, tracking how often delivered messages are clicked. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| Total open count | The total number of times emails were opened, during the campaign. Currently, this is equivalent to the "open count" KPI. | Count of the msg_id derived from the CONTACT_INFO fact table. | Tracks overall email opens, helping to evaluate the reach of email campaigns and their engagement level. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, channel used for communication, or campaign message attributes. |

| First Timer Customers | The total number of loyalty customers who transacted for the first time with the brand. | Distinct count of user_id derived from the BILL_LINEITEMS fact table, where repeat_status equals FIRST_TIME. | Monitors the success of acquiring new customers. |

| Customers Shopped | The total number of customers who made a purchase and provided contact information, such as an email or phone number. | Distinct count of user_id derived from the BILL_LINEITEMS fact table, where membership column equals MEMBER. | Tracks the customer base that has provided contact details and made purchases, helping businesses understand their active customer set. |

| Repeat Customers Shopped | The total number of customers who have purchased on more than 1 transaction day. Once a customer makes a repeat purchase, they are considered a repeat customer for all future transactions. | Values are derived from the BILL_LINEITEMS fact table, where visit_day_count is GREATER_THAN 1. | Provides insight into customer retention by tracking repeat buyers. |

| Repeat Sales | The sum of final bill amount of all repeat transactions including taxes, and discounts (excluding returns) by repeat customers in a transaction date range. | Sum of the bill_amount derived from the BILL_LINEITEMS fact table, where visit_day_count is GREATER_THAN 1 and membership equals MEMBER. | Measures the value of repeat purchases by loyal customers, important for evaluating long-term customer value and loyalty program effectiveness. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |

| Total Txns | The total number of transactions made by both members and non-members, excluding returns. | Count of bill_id derived from the BILL_LINEITEMS fact table | Shows the total transaction volume, for understanding the overall sales performance for both loyalty members and non-members. This can be further evaluated with respect to dimensions such as date, time, user attributes, store attributes, ordering channel, card and product attributes. |



# Dimensions

The list ofdimensionsis given below, with each group containing multiple dimensions organized under these header dimensions. For detailed description of the dimentsion tables, refer to theDimension Tables documentation.

|  |  |  |

| --- | --- | --- |

| Source | Time | Last Purchased Store |

| Last Purchased Concept Store | Conversion Date | Last Transaction Date |

| User | User Segments | Store Hierarchy |

| Concept Hierarchy | Conversion Time | First Transaction Date |

| First Redemption Date | Loyalty | Date |

| Last Redemption Date | Lapsation Date | Preferred Order Channel |

| First Purchased Till | First Purchased Concept Store | Dob |

| Wedding Date | First Points Redemption Date | Last Points Redemption Date |

| Repeat | First Awarded Date | Voucher Redemption Status |

| Points Redemption Status | Latest Updated Date | Latest Updated Time |

| Joined Date | Coupon Event Type | Coupon Series |

| Expiry Date | Issual Date | Issual Time |

| Issual Type | Campaign Group | Campaign |

| Issual Zone Till | Entry Type | Membership |

| Line Item Outlier | Product | Bill Outlier |

| Line Item Type | Parent Item | Order Channel |

| Special Lineitem Type | Nps | Cashier Id |

| Lineitem Cashier | Conversion Request Date | Conversion Request Time |

| Bill Conversion Date | Bill Conversion Time | Item Discount Type |

| Cashier Name | Card Used | Group Id |

| Communication Type | Communication Channel | Unsubscription Status |

| Link Open Date | Link Open Time | Campaign Message |

| Campaign Delivery Status | Journey Block | Credit Event Type |

| Credit Channel Rate | Credit Utilization Campaign | Credit Usage |

| Badgemeta | Badges Owner Type | Badges Issue Active |



Each dimension group has multiple subsections. For example, theExpiry Datehas multiple selectable levels such as Day of Month, Week of Year and Day of Week. You can select the dimension of interest for creating charts and reports.

![](https://files.readme.io/fd3ea00c9b073cc4a39d985ce84b38f124eddf4f290c501d4d359ded87276739-image.png)

Updated2 months ago