# Points rolling expiry

Points rolling expiry is a feature that resets or extends the expiry date of loyalty points when a customer performs certain actions, such as making a transaction or redeeming points. These actions are referred to as "rolling events." Points rolling expiry allows you to control when loyalty points expire, ensuring that points remain valid as long as the customer continues to engage in rolling events.

When a rolling event occurs, the expiry date for all points earned is updated or rolled to a later date. The "rolling window" determines how far this expiry date is extended. For example, a rolling window of 12 months will extend the expiry date of the earned points by 12 months.

## Including Zero Points in Rolling Expiry

By default, the rolling expiry process only considers points with a value greater than zero. If a customer performs a rolling event and receives no points for it, the system will not consider the rolling event even if it is valid, and the expiry window is not extended. To consider zero points, you can enableROLLING_EXPIRY_INCLUDE_ZERO_POINTSto ensure that even zero-value points are considered for extending the expiry.

`ROLLING_EXPIRY_INCLUDE_ZERO_POINTS`

For example:A retail loyalty program allows customers to earn points on purchases. Points expire after 12 months unless they engage in a rolling event — such as making another purchase — to extend the expiry.

A customer earns 100 points in January 2024, with a 12-month rolling expiry (set to expire in January 2025).

Now, in December 2024, the customer purchases as part of a special promotion. However, this promotion does not award any new points (0 points are awarded).

WithROLLING_EXPIRY_INCLUDE_ZERO_POINTSDisabled:

`ROLLING_EXPIRY_INCLUDE_ZERO_POINTS`

- Since the promotion awards 0 points, it is ignored by the rolling expiry.

- The customer’s100 points still expire in January 2025.

WithROLLING_EXPIRY_INCLUDE_ZERO_POINTSEnabled:

`ROLLING_EXPIRY_INCLUDE_ZERO_POINTS`

- The system recognizes the0-point award purchase as a valid rolling event.

- Theexpiry date of the 100 points is extended to August 2026.

To enableROLLING_EXPIRY_INCLUDE_ZERO_POINTS,  raise a ticket to the sustenance team.

`ROLLING_EXPIRY_INCLUDE_ZERO_POINTS`

# Creating a Points Rolling Expiry

To configure the points rolling expiry for a loyalty program, follow these steps:

1. On the Loyalty+ home page, navigate to theSettingspage by clicking theicon

On the Loyalty+ home page, navigate to theSettingspage by clicking theicon

![Gear Icon](https://cdn-icons-png.flaticon.com/512/158/158384.png)

![](https://files.readme.io/64b830120e85aec6c4247c2d2384fd11cf16521b55bd38edd0ced7e2dcdc0b74-image.png)

2. SelectPoints Rolling Expiryfrom the menu.

SelectPoints Rolling Expiryfrom the menu.

3. Enable points rolling expiry for all programs using thePoints rolling expiry across programtoggle.

Enable points rolling expiry for all programs using thePoints rolling expiry across programtoggle.

4. Select the rolling expiry strategy using thePoints rolling expiry strategydropdown.

Select the rolling expiry strategy using thePoints rolling expiry strategydropdown.

The rolling expiry strategies are as follows:

| Rolling Expiry Strategy | Description | Example |

| --- | --- | --- |

| Maximum expiry date | All points earned by the customer are assigned a single expiry date. If the date passes without a new rolling event, the expiry date for the points is reset to theexpiry conditionsconfigured within the loyalty program. This applies to points with a 'rolling' expiry strategy. | A  customer earns points on January 1st 2025. The following configurations define the expiration of the points earned by the customer:- Points expiry for loyalty program: six months from date of issual (July 1st 2025).- Points rolling expiry strategy: 12 months from the date of issual.The customer makes a transaction on June 1st 2025, extending the expiry to June 1st of the following year (2026). If no further rolling events occur and the rolling window date (June 1st, 2026) has passed, the points will expire on this day. |

| Add one more rolling window | If no rolling events happen during the last rolling window, the expiry date is extended by another rolling window. The strategies for which the rolling window applies can be selected.Refer to theexpiry conditions tablefor more information on the strategies available for points expiry. | A customer earns points that expire after 12 months. If no rolling events occur during this time, the expiry date automatically extends by another 12 months. |



[expiry conditions](/docs/points#expiry-conditions)

[expiry conditions table](/docs/points#expiry-conditions)

1. Select the expiry strategies for which the rolling window is applied using theTypes of points expiry strategies to be rolled overdropdown. This is applicable for theAdd one more rolling windowrolling expiry strategy.

2. Enter the period for the rolling window and select the units (DaysorMonths) from the dropdown menu.

3. Select the customer activities for which the rolling window is applied using theCustomer activities for points expiry extensiondropdown.For more information on the types of activities and events, refer to the documentation oncustomer activitiesandbehavioural events.

4. SelectDoneto save the changes and create a points rolling expiry.

The points rolling expiry for all loyalty programs is successfully created.

![](https://files.readme.io/9f89c4ca36b909be2d93d4cd800d64cc0e20704ba7187cf095d7202144dde136-Points_Expiry_Settings_Guide.gif)

# Editing a Points Rolling Expiry

1. On the Loyalty+ home page, navigate to theSettingspage by clicking theicon.

On the Loyalty+ home page, navigate to theSettingspage by clicking theicon.

![Gear Icon](https://cdn-icons-png.flaticon.com/512/158/158384.png)

![](https://files.readme.io/64b830120e85aec6c4247c2d2384fd11cf16521b55bd38edd0ced7e2dcdc0b74-image.png)

2. SelectPoints Rolling Expiryfrom the menu.

SelectPoints Rolling Expiryfrom the menu.

3. Edit the required fields.

Edit the required fields.

4. SelectDoneto save the changes.

SelectDoneto save the changes.

The points rolling expiry for all loyalty programs is successfully edited.

Updatedabout 1 month ago