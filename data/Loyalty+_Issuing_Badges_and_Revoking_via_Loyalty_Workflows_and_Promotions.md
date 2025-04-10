# Issuing Badges and Revoking via Loyalty Workflows and Promotions

# Issuing badges

You can issue badges from loyalty workflows and loyalty promotions. The implementation of badges in transactional and non-transactional activities can enhance customer behavior and contribute to increased engagement with the brand.Issue badge action has been added in the below events in loyalty workflows and loyalty promotions:

1. VoucherRedemption

2. TransactionAdd

3. ReturnBill

4. PointsRedemption

5. DelayedAccrual

6. CustomerUpdate

7. CustomerRegistration

8. Behavioral events

9. Target Period Elapses

Perform the following:

1. In the workflows, after writing the qualifying conditions, clickWhen>Add action>Issue badgeand clickSave.All the Loyalty-owned live and activated badges are displayed.

2. You can hover over the info tooltip to view information related to the badges such as images, Issual Duration, Status, Benefits Linked, and Issual Expiry. ClickView badge for configurationto view more details related to the badge.

![](https://files.readme.io/932d77c-image23.png)

1. If required, enable theSetup communicationtoggle switch andset up the communication channels.

![](https://files.readme.io/7c497d0-Enable_comm_channel.png)

1. In the communication channel creative, add the badge tags as required.

![](https://files.readme.io/73de350-Screenshot_2024-01-25_at_10.23.09_PM.png)

1. Click Claim. A confirmation dialogue box appears.

2. ClickYes, claimto confirm the claim. Once a badge is claimed by any module, it cannot be unclaimed, but other modules can still claim it.

![](https://files.readme.io/2d5d7d6-image37.png)

The badge is claimed and added to the workflows.

![](https://files.readme.io/921a350-image6.png)

1. ClickSave & Continueto save the changes and publish the program.

![](https://files.readme.io/437d65c-image25.png)

> 📘NoteIf the brand has enabled the below configuration from UI (EMFConfiguration page), then the badges will be revoked on returnBil and ReturnTargetCompletedEvent. Make sure that the program is reconfigured after enabling this option to make changes in return events.

## 📘Note

Note

If the brand has enabled the below configuration from UI (EMFConfiguration page), then the badges will be revoked on returnBil and ReturnTargetCompletedEvent. Make sure that the program is reconfigured after enabling this option to make changes in return events.

# Revoking badges

Badges are revoked on return and target completed events, the return event can be returnLineItem or returnAmount. In return bills, badges are revoked on the whole bill return and not on partial return.

Updatedabout 1 year ago