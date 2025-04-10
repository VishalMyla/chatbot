# Actions

Here's a look at all the actions available in Workflows:

## Award Points to Referee

A referrer is an actor who refers other customers to transact with the brand. A referee is an actor referred by a referrer. Brands can configure to incentivize either a referee or referrer or both.To award points to the referee, you need to have points earned condition, points expiry condition (if required), and channels through which you want to communicate or notify the customers when points are awarded.You need to configure earn condition, expiry condition, and channels through which you want to communicate on the points earned by the referee.

> 👍NoteTheAward Points to Refereeaction is available only forworkflowswithin the defaultloyalty program.

## 👍Note

Note

TheAward Points to Refereeaction is available only forworkflowswithin the defaultloyalty program.

![512](https://files.readme.io/8fe5a44-JgRNTWNS6_kiLOGEFGhMO9hsEKIUBAuIIg.png)

### Earn condition

Click on theEarn Conditiondrop-down to choose the desired points earning condition for the referee.To create a new earning condition and use it:

1. Click+ Add condition.

![510](https://files.readme.io/a9019c4-2HJ1Cg8_sayOAYk1aN7nX_qt-RVtGShT3A.png)

1. InName, enter a relevant condition name.

2. InDescription, enter a short description of the condition.

3. InModule using this condition, choose the module where you want to use the condition. In this case, it is Loyalty+.

4. InAllocate based on, choose on what basis points need to be allocated.

- Loyalty Registration: To issue points when the referee registers. This should be based on the configuration settings for the referral program.

- Loyalty Transaction: To issue points when the referee makes a transaction.

1. InAllocation type, choose whether to issue fixed points or prorated points.

- Fixed: A fixed number of points will be allocated irrespective of the transaction amount.

- Prorated: Points are issued as a percentage of the transaction amount or custom field value.

1. To have a common allocation to all tiers, check theSame for all Tiers.To allocate points differently for each tier, uncheck Same for all tiers. You will see an option to configure for each tier. Set your preferred values for each tier based on theAllocation typechosen.

![416](https://files.readme.io/49ee456-gi4uMb251xFMHvjFtEmBlOp5gI_xaObQOg.png)

1. SetEnable delayed accrualto green to allocate points to the current account after a certain period. This is usually the transaction return period that is configured for the org. So, customer can redeem points only if the transaction is not returned. Use this especially in cases where transaction return is allowed.

![454](https://files.readme.io/099343d-XFCQNNSUjdLqeKc7D3c5vn4X5bRu3EwbHQ.png)

- You need to set the number of days after which points are accrued inAccrue points after. An example is shown in the following screenshot.

![454](https://files.readme.io/cfab465-mMngKwOVf5SbRyJY6QLVlxTeQxMOE4VYGw.png)

- In Delayed accrual, points for a transaction are added as promised points immediately. When the specified period (usually the allowed return period) is completed, these points will be credited to the current account.

### Expiry condition

For the points that will be issued for referee, you need to set the expiry condition - when the awarded points should lapse.Click on theExpiry Conditiondrop-down to choose the desired expiry condition for the points earned by the referee.To create a new expiry condition and add it,  click on the respective+ Add condition.In the drop-down box, choose the expiry condition (if created already).To create a new expiry condition and add it, follow these steps.

1. Click +Add condition

2. InName, enter a relevant condition name.

3. InDescription, enter a short description about the condition.

4. InModule using this condition, choose the module where you want to use the condition. In this case, it is Loyalty+.

5. InExpire points based on, choose the criteria for point expiry. You have three options, Event date, Rolling expiry from event date, and Membership event date. For more information, see here.

- Event date: Points expire on the configured date based on the last activity (transaction/registration) done by the customer.

- Rolling expiry from event date: The current date of points expiry is reset to a new date based on the recent transaction date.

- Membership event date: Points expire automatically when the membership expires.

1. EnableSame for all Tiersand the condition becomes relevant for all tiers. If disabled, you have to configure conditions for each tier. For more information, see here.

2. ClickDoneto save the condition.

### Configure communication channel(s)

Once you set the points earning and expiry conditions, it is important to communicate the points earned by the referee.Loyalty+ supports two different configurations for communications.

### Mandatory channels

Here you can select the channels through which the communication has to be sent out for sure. Then, configure the message for each channel you select.

![1350](https://files.readme.io/a9fb95a-MandatoryChannels.png)

### Priority channels

Here, you can set the channels through which the communication needs to be sent out based on the priority and availability. For example, if you set the priority in the order SMS, email, and mobile push, the system will first check if the customer's mobile number is available,

- If available, it will send an SMS communication and ignores the rest.

If available, it will send an SMS communication and ignores the rest.

- If not available, it will check whether the customer has email ID

If not available, it will check whether the customer has email ID

- If email ID is available, it sends out an email notification to the customer.

If email ID is available, it sends out an email notification to the customer.

- If not, it will check if the customer is active through mobile push and process the message accordingly.Once the priority channels are set, configure the message for each channel.For more information on communication channels, see here.

If not, it will check if the customer is active through mobile push and process the message accordingly.Once the priority channels are set, configure the message for each channel.For more information on communication channels, see here.

## Award Points to Referrer

A referrer is an actor who refers other customers to transact with the brand. A referee is an actor referred by a referrer. Brands can configure to incentivize either a referee or referrer or both.

To award points to the referrer, you need to have points earn condition, points expiry condition (if required), and channels through which you want to communicate or notify the customers when points are awarded.

> 👍NoteTheAward Points to Referreraction is available only forworkflowswithin the defaultloyalty program.

## 👍Note

Note

TheAward Points to Referreraction is available only forworkflowswithin the defaultloyalty program.

The following are the options available for theAward points to referreraction.

![512](https://files.readme.io/2a1efce-nrV50--2GIuO3iKJZXu6J30KErJz_q0U8A.png)

### Earn condition

Click on the Earn Condition drop-down to choose the desired points earning condition for the referrer.

To create a new earning condition and add it, follow these steps.

1. Click +Add condition.

![510](https://files.readme.io/0b85d95-SzjlJPA3FV8z7Y-GT_pZRdkPnrErIsEMag.png)

1. InName, enter a relevant condition name.

2. InDescription, enter a short description of the condition.

3. InModule using this condition, choose the module where you want to use the condition. In this case, it is Loyalty+.

4. InAllocate based on, choose on what basis points need to be allocated.

- Loyalty Registration: To issue points when the referrer registers. This should be based on the configuration settings for the referral program.

Loyalty Registration: To issue points when the referrer registers. This should be based on the configuration settings for the referral program.

- Loyalty Transaction: To issue points when the referrer makes a transaction.

Loyalty Transaction: To issue points when the referrer makes a transaction.

1. InAllocation type, choose whether to issue fixed points or prorated points.

- Fixed: A fixed number of points will be allocated irrespective of the transaction amount.

- Prorated: Points are issued as a percentage of the transaction amount or custom field value.For more information, see Create points allocation strategies.

1. To have a common allocation to all tiers, checkSame for all Tiers.To allocate points differently for each tier, uncheckSame for all tiers. You will see an option to configure for each tier. Set your preferred values for each tier based on theAllocation typechosen.

![416](https://files.readme.io/f7cf7c8--2bD-FDk92J7DMjz2WexJ-cQZwPNpvOdWA.png)

1. SetEnable delayed accrualto green to allocate points to the current account after a certain period. This is usually the transaction return period that is configured for the org. So, customers can redeem points only if the transaction is not returned. Use this especially in cases where transaction return is allowed.

![454](https://files.readme.io/a228c5a-jvMip47fx66Xxh7ZXEq3c4cdSDf_FnKcSg.png)

- You need to set the number of days after which points are accrued in Accrue points after. An example is shown in the following screenshot.

![454](https://files.readme.io/01bea1f-O1BFi0EAxjjzho5llyXEyWczfsLJpvOdaQ.png)

- In Delayed accrual, points for a transaction are added as promised points immediately. When the specified period (usually the allowed return period) is completed, these points will be credited to the current account.

1. ClickDoneto save the condition.

### Expiry condition

Points that will be awarded for referrer need to have an expiry condition which indicates when the award will expire.

Click on the Expiry Condition drop-down to choose the desired expiry condition for the points earned by the referee.In the drop-down box, choose the expiry condition (if created already).

To create a new expiry condition and add it, follow these steps.

1. Click +Add condition

2. InName, enter a relevant condition name.

3. InDescription, enter a short description of the condition.

4. InModule using this condition, choose the module where you want to use the condition. In this case, it is Loyalty+.

5. InExpire points based on, choose the criteria for point expiry. You have three options, Event date, Rolling expiry from event date, and Membership event date. For more information, see here.

- Event date: Points expire on the configured date based on the last activity (transaction/registration) done by the customer.

Event date: Points expire on the configured date based on the last activity (transaction/registration) done by the customer.

- Rolling expiry from event date: The current date of points expiry is reset to a new date based on the recent transaction date.

Rolling expiry from event date: The current date of points expiry is reset to a new date based on the recent transaction date.

- Membership event date: Points expire automatically when the membership expires.

Membership event date: Points expire automatically when the membership expires.

1. EnableSame for all Tiersand the condition becomes relevant for all tiers. If disabled, you have to configure conditions for each tier. For more information, see here.

2. ClickDoneto save the condition.

### Configure communication channel(s)

Mandatory channels: From here, you can choose the communication channels that will invariably be used and through which the communication will definitely be sent out.

Priority channels: According to priority and availability, you can specify how to send the communication. For example, if you set the priority in the order of SMS, email, and mobile push, the system will first check if the customer's cell phone number is available,

- If available, it will send an SMS communication and ignore the rest.

- If not available, it will check whether the customer has an email ID

- If an email ID is available, it sends out an email notification to the customer.

- If not, it will check if the customer is active through mobile push and process the message accordingly.

Finally, configure the message for each communication channel you have chosen.

For more information on communication channels, see here.

## Forward to Set

The general expressions that you define at the parent set level allow you to evaluate conditions at the transaction level. However, you need to use Forward to set to evaluate line-items, payment mode, or tracker values of the transaction. When you use Forward to set on a condition, it creates a subset where you can define rules on the transaction items.

You can either use line-item unrolling or payment method unrolling, or both of them in a single action.

The following are the options available for the Forward to set action.

![313](https://files.readme.io/ad36405-LDaxbpQ7QHB2TRoU8NrcMjptr-iDoj8IhA.png)

## Evaluate rules at the line-item level (Enable line-item unrolling)

Enable the toggle button to evaluate rules on transaction line items. When enabled, L+ evaluates the defined rules for every line item of the transaction.

You will see the options shown in the following image.

![316](https://files.readme.io/a93fb85-tog_VIK2U16ig9kWjteXVTznONNU1ybgdA.png)

- Use line item proportions: Enable this option when line item amounts may not add up to the transaction amount. Enable this when there is a bill-level discount that you want to distribute to the line items of the transaction.

- Maximise points allocation: Enable this option to maximize points for the eligible payment methods - payment methods marked as eligible under Advanced Settings.

Points are allocated for the total eligible amount rather than on a prorated basis. Individual line item amounts are not considered when this option is enabled.

## Evaluate payment modes (Enable payment method unrolling)

This option lets you run rules on individual payment methods. When you on Enable payment method unrolling, the rules defined in the forwarded set would be evaluated multiple times - it repeats for every payment method in the transaction.

> 📘Forward to set is also used for trackers.When Enable line item unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every item in the transaction).When Enable payment method unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every payment method in the transaction).When you choose Forward to set action, you can either use line item unrolling or payment method unrolling, or both of them. If you just need to evaluate more expressions, you can disable both and click Save to proceed to configure the new sub-set. In the following screenshot, Set3 is the new subset created.

## 📘

- Forward to set is also used for trackers.When Enable line item unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every item in the transaction).When Enable payment method unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every payment method in the transaction).When you choose Forward to set action, you can either use line item unrolling or payment method unrolling, or both of them. If you just need to evaluate more expressions, you can disable both and click Save to proceed to configure the new sub-set. In the following screenshot, Set3 is the new subset created.

- When Enable line item unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every item in the transaction).

- When Enable payment method unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every payment method in the transaction).

- When you choose Forward to set action, you can either use line item unrolling or payment method unrolling, or both of them. If you just need to evaluate more expressions, you can disable both and click Save to proceed to configure the new sub-set. In the following screenshot, Set3 is the new subset created.

![512](https://files.readme.io/a2102d5-AOWvcueJ4CHnNiL5fMvup2sv_5DuCbPEYg.png)

## Evaluate multiple conditions (at the event level)

If you just need to evaluate more expressions before executing an action:

1. Disable both Enable line item unrolling and Enable payment method unrolling

2. Click Save to proceed to configure the new subset. You will see a new sub-set.

![313](https://files.readme.io/1a0581e-fIx04qRUPZhpYHMzJLuKaejGeW-MDtOXVg.png)

The general expressions that you define at the parent set level allow you to evaluate conditions at the transaction level. However, you need to use Forward to set to evaluate line-items, payment mode, or tracker values of the transaction. When you use Forward to set on a condition, it creates a subset where you can define rules on the transaction items.

You can either use line-item unrolling or payment method unrolling, or both of them in a single action.

The following are the options available for the Forward to set action.

![313](https://files.readme.io/ad36405-LDaxbpQ7QHB2TRoU8NrcMjptr-iDoj8IhA.png)

## Evaluate rules at the line-item level (Enable line-item unrolling)

Enable the toggle button to evaluate rules on transaction line items. When enabled, L+ evaluates the defined rules for every line item of the transaction.

You will see the options shown in the following image.

![316](https://files.readme.io/a93fb85-tog_VIK2U16ig9kWjteXVTznONNU1ybgdA.png)

- Use line item proportions: Enable this option when line item amounts may not add up to the transaction amount. Enable this when there is a bill-level discount that you want to distribute to the line items of the transaction.

- Maximise points allocation: Enable this option to maximize points for the eligible payment methods - payment methods marked as eligible under Advanced Settings.

Points are allocated for the total eligible amount rather than on a prorated basis. Individual line item amounts are not considered when this option is enabled.

## Evaluate payment modes (Enable payment method unrolling)

This option lets you run rules on individual payment methods. When you on Enable payment method unrolling, the rules defined in the forwarded set would be evaluated multiple times - it repeats for every payment method in the transaction.

> 📘Forward to set is also used for trackers.When Enable line item unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every item in the transaction).When Enable payment method unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every payment method in the transaction).When you choose Forward to set action, you can either use line item unrolling or payment method unrolling, or both of them. If you just need to evaluate more expressions, you can disable both and click Save to proceed to configure the new sub-set. In the following screenshot, Set3 is the new subset created.

## 📘

- Forward to set is also used for trackers.When Enable line item unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every item in the transaction).When Enable payment method unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every payment method in the transaction).When you choose Forward to set action, you can either use line item unrolling or payment method unrolling, or both of them. If you just need to evaluate more expressions, you can disable both and click Save to proceed to configure the new sub-set. In the following screenshot, Set3 is the new subset created.

- When Enable line item unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every item in the transaction).

- When Enable payment method unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every payment method in the transaction).

- When you choose Forward to set action, you can either use line item unrolling or payment method unrolling, or both of them. If you just need to evaluate more expressions, you can disable both and click Save to proceed to configure the new sub-set. In the following screenshot, Set3 is the new subset created.

![512](https://files.readme.io/a2102d5-AOWvcueJ4CHnNiL5fMvup2sv_5DuCbPEYg.png)

## Evaluate multiple conditions (at the event level)

If you just need to evaluate more expressions before executing an action:

1. Disable both Enable line item unrolling and Enable payment method unrolling

2. Click Save to proceed to configure the new subset. You will see a new sub-set.

![313](https://files.readme.io/1a0581e-fIx04qRUPZhpYHMzJLuKaejGeW-MDtOXVg.png)

## Renew Tier

Tier renew is retaining the current tier that the customer is enrolled in and providing all the privileges of the tier.

To configure theRenew Tieraction, follow these steps.

1. SelectRenew Tierand clickSave.

![343](https://files.readme.io/2eb0fc4-Capture.PNG)

1. After you selectRenew Tier, you will see the following screen. Click on theSaveoption.

![992](https://files.readme.io/3dd470b-Capture2.PNG)

> 📘There are no specific options to be set in Renew tier action.

## 📘

There are no specific options to be set in Renew tier action.

## Send mail

You can send an email to your customers when they satisfy a certain condition. It could be regarding the rewards they earned or just a general notification. You can design the email from the scratch or use an existing template from creatives library.

To configure the Send mail action, follow these steps.

1. InWhen, selectSend mailand clickSave.

![549](https://files.readme.io/10e7ae8-Send_mail_action.png)

1. Click onAdd creativeto configure the email message.

![523](https://files.readme.io/e8db430-Add_Creative_-_Send_mail.png)

1. To create the message from the scratch, clickCreate new.To use an existing template, hover on the desired template and clickSelect.

![1656](https://files.readme.io/64b9491-CretiveTemplates.png)

1. Enter Subject, design email body, and clickDone. You canPreviewthe email before saving and use the respective icons to see how the email renders in laptop/desktop, mobile phone, and tablet.

2. ConfigureSender information. By default, the the default sender ID will be selected. If you wish to send from a different sender ID:i. Click on the more options icon and selectEdit.ii. UncheckUse default sender ID.  You will see options to choose a sender ID.

![543](https://files.readme.io/3c848b1-SenderID_Config.png)

iii. Choose your preferred senderDomain,Sender ID, andSender Label.iv. ClickSaveto continue.

1. You can also set the delay in sending email from the event time. For example, you want to communicate something to the customer two days post a transaction.i. Click onAdd delay while sending.ii. Choose your preferred period in the drop-down -Sec,Mins,Hours, orDays.iii. InDelay byenter the duration.iv. ClickSaveto continue

> 📘Delay time should be greater than 120 seconds or 2 minutes.

## 📘

Delay time should be greater than 120 seconds or 2 minutes.

![509](https://files.readme.io/1dd6f79-DelayConfig.png)

## Send messages

You can notify customers when an action is executed successfully. Notifications can be sent through different channels such as SMS, email, WeChat, and Mobile Push.

Notification channels are of two types:

- Mandatory Channels:, Channels that are mandatory for sending the notifications

- Priority Channels: Channels that needs to be triggered based on the priority and availability. For example, if SMS is set as priority 1, Mobile Push as priority 2 and email as priority 3, the system first checks whether SMS is configured and then checks if the mobile number is available for the customer. If any one fails, then it will try to send the notification through mobile push and so on.

Channels that are selected in Mandatory Channels will not appear in Priority Channels and vice versa.

To configure notifications, follow these steps.

1. Click theAdvanced Settingsof the campaign you want to make the changes.

2. Click onCommunication Channelsand you will see the following screen.

![1360](https://files.readme.io/d9f716d-image_6.png)

1. SelectMandatory ChannelsandPriority Channelsfor the notifications and clickSave

![1014](https://files.readme.io/b7e11ee-image_7.png)

## Send mobile push

You can send push notifications to your customers by customizing the notifications with creatives. You can design the notification from the scratch or use an existing template from the creatives library.

To configure theSend mobile pushaction, follow these steps.

1. SelectSend mobile pushand clickSave.

![344](https://files.readme.io/868e3d9-Capture.PNG)

1. Click onAdd creativeto configure the mobile push message.

![340](https://files.readme.io/6d0dc63-Capture1.PNG)

1. Choose one account for which you want to configure the mobile push message

![299](https://files.readme.io/c0fb84d-Capture2.PNG)

1. To create the message from scratch, clickCreate new.To use an existing template, hover on the desired template and clickSelect.

![1107](https://files.readme.io/9ea1814-Capture3.png)

1. Enter Title, and the message body. You can Preview the message before saving it and use the respective icons to see how the message renders mobile phone.

![1150](https://files.readme.io/7a1b6b2-Capture4.PNG)

> 📘Android and iOS platforms are both supported, so you can set up push notifications for both.

## 📘

Android and iOS platforms are both supported, so you can set up push notifications for both.

i. Select+ Add Labelto use the dynamic tags to personalize the text for the customer-rich experience.

![1145](https://files.readme.io/1b08ea6-Capture5.png)

ii. SelectUpload Imageto set the cover image of the push notification message.

![1145](https://files.readme.io/e1c3084-Capture6.PNG)

> 📘The maximum file size acceptable is 5 MB

## 📘

The maximum file size acceptable is 5 MB

iii. CheckAdd action link to contentto add a hyperlink of the page where the customer will be directed to.

- Deeplink: Link use to direct the customer within the mobile application on a specific page.

- External Link: Link used to direct the customer to the external web page

![474](https://files.readme.io/0b84a9a-Capture7.PNG)

iv. CheckAdd primary button to notificationto enter a CTA (Call to action) label.

![1045](https://files.readme.io/99b6571-Capture8.PNG)

v. CheckAdd secondary button to notificationto enter a secondary CTA (Call to action) label.

![1061](https://files.readme.io/dd368b8-Capture9.PNG)

1. You can also set the delay in sending mobile push from the event time. For example, you want to communicate something to the customer after a specific interval of time.i. Click onAdd delay while sending.

![345](https://files.readme.io/0f2b9ff-Capture11.PNG)

ii. Choose your preferred period in the drop-down - Sec, Mins, Hours, or Days.iii. In Delay by entering the duration.

![316](https://files.readme.io/a82a1ab-Capture10.png)

> 📘Delay by value should be greater than 120 Seconds or 2 minutes.

## 📘

Delay by value should be greater than 120 Seconds or 2 minutes.

1. ClickSaveto continue.

## Send SMS

You can send an SMS to your customers when they satisfy a certain condition. It could be regarding the rewards they earned or just a general notification. You can create an SMS from the scratch or use an existing template from the creatives library.

> 📘The message configuration varies for customers in India. You can use only DLT complaint message templates.

## 📘

The message configuration varies for customers in India. You can use only DLT complaint message templates.

To configure the Send SMS action, follow these steps.

1. SelectSend SMSand clickSave.

![348](https://files.readme.io/3cdbca7-SMS1.PNG)

1. Click onAdd creativeto configure the SMS.

![344](https://files.readme.io/fa657b5-SMS2.PNG)

1. To create the message from scratch, clickCreate new.To use an existing template, hover on the desired template and clickSelect.

![1105](https://files.readme.io/b3890f4-SMS3.png)

1. Configure SMS text, and clickDone. You canpreviewthe SMS before saving it to see how the SMS renders on a mobile phone.i. Select+ Add Labelto use the dynamic tags to personalize the text for the customer-rich experience.ii. SelectAllow Unicode charactersto allow the support of a much wider character set, and includes pretty much every character in the world, including Indian languages, some of the stranger European characters (like í), all the Cyrillic alphabet (e.g. Arabic, Russia, Punjabi, and Greek), all the Asian ones (Chinese, Japanese, etc), and also some of the emoticons out there!

![1149](https://files.readme.io/dc0093c-SMS5.PNG)

1. ConfigureSender information. By default, the default sender ID will be selected. If you wish to send from a different sender ID:i. Click on the more options icon and selectEdit.ii. UncheckUse default sender ID. You will see options to choose a sender ID.

![351](https://files.readme.io/d4db426-SMS6.PNG)

1. SelectShorten all URLsto shorten links used in SMS,

![352](https://files.readme.io/9bce0eb-Capture7.PNG)

> 📘As an SMS has a character limit, it is usual that the links that you use in SMS could occupy lot of characters. Hence, we highly recommended using shorten links or tiny URLs in such instances.

## 📘

- As an SMS has a character limit, it is usual that the links that you use in SMS could occupy lot of characters. Hence, we highly recommended using shorten links or tiny URLs in such instances.

1. You can also set the delay in sending SMS from the event time. For example, you want to communicate something to the customer two days post a transaction.i. Click onAdd delay while sending.ii. Choose your preferred period in the drop-down - Sec, Mins, Hours, or Days.iii. InDelay byentering the duration.

You can also set the delay in sending SMS from the event time. For example, you want to communicate something to the customer two days post a transaction.i. Click onAdd delay while sending.ii. Choose your preferred period in the drop-down - Sec, Mins, Hours, or Days.iii. InDelay byentering the duration.

2. ClickSaveto continue.

ClickSaveto continue.

> 📘Delay time should be greater than 120 seconds or 2 minutes.

## 📘

Delay time should be greater than 120 seconds or 2 minutes.

![348](https://files.readme.io/cd07040-SMS4.PNG)

## Send Wechat

## Tag Customer

## Transaction point allocation & Allocate Points action

Transaction points allocation lets you create various allocation strategies and use the desired one when configuring rule sets. You can allocate points on the transaction amount. You can also have common points allocation across tiers or different allocations for each tier.

To configure the Transaction point allocation action, follow these steps.

1. SelectTransaction point allocationand clickSave.

![346](https://files.readme.io/fdc9915-Capture.PNG)

1. In theEarn condition, choose the desired condition from the drop-down list.To create a new condition, click on+ Add Condition.

![975](https://files.readme.io/3aaaabf-Untitled1.png)

1. In theZero earn condition, choose an appropriate condition from the drop-down.Note:The configuration for the zero earn condition is not determined by these options and depends on the other configurations explainedhere.

![766](https://files.readme.io/5987ed8-Untitled2.png)

1. Select theExpiry conditionfrom the drop-down menu.To create a new Expiry earn condition from scratch, click+ Add condition.

![769](https://files.readme.io/6841eed-Untitled3.png)

1. InProrate on, choose on what basis you want to issue a percentage of points - transaction amount or event value. This is applicable only for prorated points allocation. If bill amount, choose a current event, if tracker, choose current aggregate or previous aggregate

- Amount: Choose this to allocate prorated points on the transaction amount.

- Current aggregate: Choose this to allocate prorated points on the value of the tracker post the current transaction. This is disabled in Evaluations start and Evaluation end sets.

- Previous aggregate: Choose this to allocate prorated points on the value of the tracker before the current transaction. This is disabled in Evaluations start and Evaluation end sets.

1. In thePoints rounding strategy, you can choose which points rounding strategy you prefer using from the drop-down list. Points rounding strategy informs how many decimal points to use when allocating points to customers.

- Actual: Issues the actual number of points as configured in the prorated condition. For example, the customer will receive 19.9 points for the transaction amount of 199, if the points allocation condition is set as 10%.

Actual: Issues the actual number of points as configured in the prorated condition. For example, the customer will receive 19.9 points for the transaction amount of 199, if the points allocation condition is set as 10%.

- Floor: Evaluate and assign the values without considering the decimal value. For example, assume customers should receive 10% of points for transactions. If a customer has purchased for $199, instead of 19.9 points, the customer will receive 19 points.

Floor: Evaluate and assign the values without considering the decimal value. For example, assume customers should receive 10% of points for transactions. If a customer has purchased for $199, instead of 19.9 points, the customer will receive 19 points.

- Round: Determine the number of decimal points you want to support for decimal points. Zero is for no decimal, one is for one, two is for two, and three is for three decimal points.

Round: Determine the number of decimal points you want to support for decimal points. Zero is for no decimal, one is for one, two is for two, and three is for three decimal points.

![593](https://files.readme.io/086d85e-Untitled5.png)

1. SelectDelay strategy: Following are the different delayed-accrual (or point conversion strategies) that are currently available for the brands to use.

As defined in the allocation strategy:Points are assigned based on the conditions defined in the allocation strategy. If no conditions are defined, points will be directly issued as current points.

Fixed delay days from item return period:Based on the return period configured against the product, issue the promised points as current points once the return period expires. For example, assume for a transaction with a return period of 7 days, the customer is promised to get 1000 points. These promised points will be converted into current points after 7 days i.e. after the return period is over.

- Available only for transaction-based customer activities.

Fixed delay days from the line-item extended field:Based on the value of the line-item extended field that is selected in the drop-down. Say, there is a line-item extended field called "ABC" & this is selected in the drop-down of "delay strategy" during the point allocation action after selecting this delay strategy. Now, say a user made a transaction & the value of this field is arrived as 10. Then the points that are being allocated from that action will have a delayed accrual of 10 days.

- Available only for transaction-based customer activities, and the line-item extended field should mandatorily come from the transaction payload.

On external trigger:Issue points at the event of “transaction add” as promised points and convert them at the event of “transaction update”. For example: In hospitals, promised points will be issued immediately when you make a booking and will be converted into current points when the bill is settled.

- Available only for transaction-based customer activities.

Based on the behavioral event attribute: Based on the date that is coming via the attribute of the behavioral event. Assume, there is a behavioral "ABC" that has 3 attributes (X, a date type attribute; Y, a customer identifier attribute; Z, a numerical attribute). During the point allocation from a promotion (that is created based on this behavioral event), if the delay strategy is selected as "Based on the event attribute", then there will be a drop-down where the attribute should be selected. The following are vital points:

- In the drop-down of "delay strategy", only the date type of the attribute of the behavioral event will appear.

- Under the prorate drop-down, only the double-type attributes of the behavioral event will appear.

- If the date coming is a past date as per the event processing date, the conversion will happen on the same day.

- This option will be available only for promotions based on behavioral events.

Following are the accrual strategies available for transaction-based activities:

![581](https://files.readme.io/aabfd04-Untitled6.png)

Following are the accrual strategies available for behavioral event-based activities:

![](https://files.readme.io/9a49bb5-Screenshot_2024-08-07_at_11.18.13_AM.png)

### Zero earn condition

In the Zero-earn condition, points are not allocated in the following cases:

- Bill Number Prefix:When the bill number starts with a prefix defined in theIGNORE_POINTS_FOR_BILL_NUMBER_STARTS_WITHconfiguration.

Bill Number Prefix:When the bill number starts with a prefix defined in theIGNORE_POINTS_FOR_BILL_NUMBER_STARTS_WITHconfiguration.

```
IGNORE_POINTS_FOR_BILL_NUMBER_STARTS_WITH
```

![](https://files.readme.io/5989db268d0c55407f1e6ea73b31b3d2e94402a27196a92089c849a3250d197a-Config.png)

- Customer Label:When theBLOCK_POINTS_ALLOCATIONlabel is set for a customer. You can configure this fromOrganisation settings > Miscellaneous > Customer Status Configuration.

Customer Label:When theBLOCK_POINTS_ALLOCATIONlabel is set for a customer. You can configure this fromOrganisation settings > Miscellaneous > Customer Status Configuration.

`BLOCK_POINTS_ALLOCATION`

> 📘NoteIn these cases, the customer tier will be upgraded if eligible, despite no points being allocated.

## 📘Note

Note

In these cases, the customer tier will be upgraded if eligible, despite no points being allocated.

## Configure communication channel(s)

## Mandatory channels

Here you can select the channels through which the communication has to be sent out for sure. Then, configure the message for each channel you select.

![959](https://files.readme.io/dfa5099-Untitled7.png)

## Priority channels

Here, you can set the channels through which the communication needs to be sent out based on the priority and availability. For example, if you set the priority in the order SMS, email, and mobile push, the system will first check if the customer's mobile number is available,

- If available, it will send an SMS communication and ignore the rest.

- If not available, it will check whether the customer has an email ID

- If an email ID is available, it sends out an email notification to the customer.

- If not, it will check if the customer is active through mobile push and process the message accordingly.

![954](https://files.readme.io/e9efd45-Untitled8.png)

Once the priority channels are set, configure the message for each channel.

For more information on communication channels, see here.

## Upgrade tier

You can upgrade the tier for the customer based on a tracker value or any specific event value and provide all the privileges of the tier.

To configure theUpgrade to tieraction, follow these steps.

1. SelectUpgrade to tierand click *Save.

![344](https://files.readme.io/cf128cc-Capture.PNG)

1. After you selectUpgrade to tier, you will see the following screen.Hover toSlab to upgradeand choose the desired option from the drop-down.

![399](https://files.readme.io/4ee2e31-Untitled.png)

1. ToggleAward pointsto green to enable the criteria to award the points to the customer.

![395](https://files.readme.io/06fcfcf-Capture3.PNG)

1. In theEarn condition, choose the desired condition from the drop-down list.To create a new condition, click on+ Add Condition.

![696](https://files.readme.io/39c48b9-Capture4.png)

1. Select theExpiry conditionfrom the drop-down menu.To create a new expiry earn condition from scratch, click+ Add condition.

![719](https://files.readme.io/d7e139a-Capture5.png)

1. InProrate on, choose on what basis you want to issue a percentage of points - transaction amount or event value. This is applicable only for prorated points allocation. If bill amount, choose a current event, if tracker, choose current aggregate or previous aggregate.

- Event default value: Choose this to allocate prorated points on the transaction amount.

- Current aggregate: Choose this to allocate prorated points on the value of the tracker post the current transaction.

- Previous aggregate: Choose this to allocate prorated points on the value of the tracker before the current transaction.

![550](https://files.readme.io/5d87797-capture6.png)

1. Select the channels through which the communication has to be sent out for sure.

i.Mandatory channels: You can select the channels through which the communication has to be sent out for sure. Then, configure the message for each channel you select.

![934](https://files.readme.io/1aaf99f-capture7.png)

ii.Priority channels: Here, you can set the channels through which the communication needs to be sent out based on the priority and availability. For example, if you set the priority in the order SMS, email, and mobile push, the system will first check if the customer's mobile number is available,

- If available, it will send an SMS communication and ignore the rest.

- If not available, it will check whether the customer has an email ID

- If an email ID is available, it sends out an email notification to the customer.

- If not, it will check if the customer is active through mobile push and process the message accordingly.

![929](https://files.readme.io/fb21729-capture8.png)

1. Click onSave.

## Upgrade using tier

You can upgrade customers using the tier conditions when they satisfy a certain condition. It could be regarding the rewards they earned or just a general notification.

To configure the Upgrade using tier action, follow these steps:

1. In Action, selectUpgrade using tier.

![1389](https://files.readme.io/407cf91-Upgrade_using_tiers.png)

1. InUser entity, choose Individual to issue points to customers who met the condition.ORChoose Group to issue points to the group (Deprecated).

2. To issue points, enable Award points.

![1395](https://files.readme.io/652e7eb-Upgrade_using_tiers3.png)

1. In theEarn condition, choose the earning condition that you want to associate using the drop-down list.To create a new condition, click on+ Add Condition.

2. InExpiry condition, choose the expiry for the points using the drop-down list.To create a new expiry earn condition, click+ Add condition.

3. InProrate on, choose on what basis you want to issue percentage of points - transaction amount or event value. This is applicable only for prorated points allocation. For bill amount, you can choose theCurrent event, for tracker, you can chooseCurrent aggregateorPrevious aggregate.

- Event default value: Choose this to allocate prorated points on the transaction amount.

- Current aggregate: Choose this to allocate prorated points on the value of the tracker post the current transaction.

- Previous aggregate: Choose this to allocate prorated points on the value of the tracker before the current transaction.

## Issue Coupon

This action allows you to issue coupons based on a specific activity.

![Issue Coupon using Quantity](https://files.readme.io/0f05a18e2275d108382e5a742bd742d184844f3d62efd62cb32935faa2b48537-image.png)

Issue Coupon using Quantity

The coupons used here are the ones which are claimed by loyalty in strategies.

> 📘NOTE:All quantity values, whether initially provided as integers or decimals, will always be converted to integers. Decimal values will be rounded accordingly. For example, 4.7 will be rounded to 5, while 3.2 will be rounded to 3.

## 📘NOTE:

NOTE:

All quantity values, whether initially provided as integers or decimals, will always be converted to integers. Decimal values will be rounded accordingly. For example, 4.7 will be rounded to 5, while 3.2 will be rounded to 3.

### Coupon issue types

1. Fixed Quantity:

Fixed quantity lets you allocate a predetermined number of coupons either uniformly across all tiers or uniquely for each tier.

Same for all tiers:Set a single, fixed quantity of coupons to be issued across all tiers.For example, if you allocate 10 coupons, each customer, regardless of tier, receives 10 coupons for completing an action.

![](https://files.readme.io/4ef794ef99653d8b679cf91c59d0d8efa4bf90f5d57886649400462824c50f52-FixedQuant_Same.png)

![](https://files.readme.io/81a702661fe10f3981078deccd0d90e24c35ca440344bd5dfac702c533d65834-fq-same.gif)

Different for each tier:Set a different quantity of coupons for each tier.For example, Tier 1 customers are issued 20 coupons, Tier 2 are issued 30 coupons, and Tier 3 are issued 50 coupons for completing an action.

![](https://files.readme.io/93aac7c5ba13debc93cb0bc44f8a1fd31dc4a0f58fa47e7f84040b14a191c6f3-FixedQuant_Diff.png)

![](https://files.readme.io/40295715c74cd3332f35e6663b0881fb5a6601b866b1f4ca064defa5743d7b75-fq-diff.gif)

2. Transaction Step Function

The transaction step function dynamically allocates coupons based on transaction amounts, either uniformly across all tiers or uniquely for each tier.

> 📘Note:The Transaction Step Function is triggered only when aTransactional Eventis performed by the customer. For all other events Fixed Quantity is supported.

## 📘Note:

Note:

The Transaction Step Function is triggered only when aTransactional Eventis performed by the customer. For all other events Fixed Quantity is supported.

![](https://files.readme.io/18dc783e50b86523c623ea1a7a95827baf465f0602b1aaa5b8d8521efe439faa-image.png)

Same for All Tiers:Set a specific transaction amount and fixed quantity of coupons to issue across all tiers.For example, for every transaction worth ₹1000, each customer, regardless of their tier, will be issued 10 coupons for completing the transaction.

![](https://files.readme.io/abb74eeacda9a159ff0943fb38607c585d4ddfb14628af55aa76e0c889941abe-TSF_Same.png)

![](https://files.readme.io/801a868f8aa7fc30feb321b41a2664a4bf6893c5d7d1186b6f7d9efd5c57356c-tsf-same.gif)

Different for Each Tier:Set a specific transaction amount and different quantity of coupons for each tier.For example, for every transaction worth ₹1000, Tier 1 customers receive 20 coupons, Tier 2 receive 30 coupons, and Tier 3 receive 50 coupons for completing the transaction.

![](https://files.readme.io/45612273564622265ed4de30888aff4ac824731a7f75687a03ae8a21157a8a1e-TSF_Diff.png)

![](https://files.readme.io/0d8b94e4fbd4669ae120b57b7e38afd2278bd8af9a8ebf3a73d1578e6c57ce8c-tsf-diff.gif)

> ❗️The maximum number of coupon that can be allocated to the customer is500.

## ❗️The maximum number of coupon that can be allocated to the customer is500.

The maximum number of coupon that can be allocated to the customer is500.

![](https://files.readme.io/53d0231113f86e7f5f1a69d1ffb6aab0aa4237b04654988a8c0c3fa60181f552-image.png)

## Issue Catalog Reward

You can use theIssue Catalog Rewardoption to reward customers for specific events. For example, you can issue rewards to customers who register for your loyalty program or, in a health and fitness app, to those who burn 500 kilocalories in a day.

Once you create a reward inMarvel Reward UI, you can issue it based on different events. Rewards can be triggered by:

- Promotions: Customers automatically receive rewards when they join promotional campaigns.

- Milestones: Rewards are issued when customers reach specific milestones, like spending a certain amount or completing a set number of purchases.

- Events: Customers earn rewards by initiating transaction, customer, or measurablebehavioral events(with the datatype integer or double).

You can issue rewards throughIssue Catalog Rewardusing the following:

- For milestones, streaks, and behavioural events, use Loyalty Promotions flow.

- For other events, use Loyalty Program workflows.

Follow these steps to issue a catalog reward:

1. From theAdd Actionwindow, click onIssue Catalog Reward.

![](https://files.readme.io/e69886b22b7847c78591f38b56f754155011af7e5a351a302e30b8b3bbb45665-image.png)

1. ClickSave.TheAdd action: Issue catalog rewardwindow opens.

ClickSave.TheAdd action: Issue catalog rewardwindow opens.

![](https://files.readme.io/30ee4ed6c4272691d34b8455d7fe3b81d6347fb971f3b9879a9c5c80d82cba0d-note_issue_catalog.png)

A note appears in the window stating:The behavior of the “Issue Catalog Rewards” action differs when configured in the “Point to Reward Conversion” customer event compared to other events.This means the behaviour ofIssue Catalog Rewardsdiffers between the[Point to Reward Conversion](https://docs.capillarytech.com/docs/auto-points-conversion-to-reward)and other events such as theCustomer RegistrationTransaction Add,Points Redemptionetc.

```
[Point to Reward Conversion](https://docs.capillarytech.com/docs/auto-points-conversion-to-reward)
```

`Customer Registration`

`Transaction Add`

`Points Redemption`

The table below shows the difference in the behaviour ofIssue Catalog Rewardsaction forCustomer RegistrationandPoint to Reward Conversionevents.

`Customer Registration`

`Point to Reward Conversion`

| Aspect | Customer Registration | Point to Reward Conversion |

| --- | --- | --- |

| Reward Quantity | Quantity is defined manually or based on the event. | Quantity is automatically calculated based on the points earned in the event. |

| Reward Calculation | You define how many rewards to issue. Example: 1 reward for registration | The system calculates the reward quantity by dividing the total points by the reward value. |

| Points Requirement | Points may or may not be required for issuing the reward. | Points are required, and rewards are issued based on accumulated points.Example: 1,000 points = 10 rewards if each reward is worth 100 points. |

| Flexibility | You can control the number of rewards issued manually. | The system automatically adjusts the number of rewards based on points earned. |



1. Choose the Reward you want to issue from the dropdown.The active catalog rewards with Live and Upcoming statuses appear here.

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/fd46f0c2-9866-4558-bd23-8f0d82653bb8/48d5c536-2950-47ff-afb7-1e8ab8f8791d/images/a33116a8-6f94-4612-9a60-e98f222d06b3.png)

1. Choose one of the following from theReward quantity same asdropdown:

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/fd46f0c2-9866-4558-bd23-8f0d82653bb8/48d5c536-2950-47ff-afb7-1e8ab8f8791d/images/b48d6506-f52e-4add-9f6a-991edc511a73.png)

a.Add Manuallyi. SelectAdd Manuallyto specify the number of rewards you want to issue to a customer.ii. InAdd manuallyfield, enter the number of rewards.

![](https://files.readme.io/cec3a8f5385d8e2dbf9998d7ea97bdb2095778e8e98d5379c708f388ac6483c3-image.png)

b.Transaction Extended Fieldi. SelectTransaction Extended Fieldto set the number of rewards a customer receives based on the value captured by thetransaction extended field.ii. Select the transaction attribute or value that determines the reward quantity using theSelect transaction extended fielddrop-down.For example, if the transaction extended fieldGross Weightvalue is 50, the system issues 50 rewards.

![](https://files.readme.io/7e5f872ec980d6e4f1a18f1c5ac5d579967e12e3dd795c73eaa5f695f982a0a7-image.png)

c.Points Issued on Eventi. SelectPoints Issued on Eventto give rewards based on the points a customer earns during an event.For example, if a customer earns 10 points during an event, they get 10 rewards. The system uses the points earned to decide the number of rewards.

![](https://files.readme.io/05c1c49e0c1db39b8117711a60284ff8fa1388555f86543f9ee0a71ddd79299b-image.png)

1. (Optional) Choose theFulfilment statusfrom the drop-down. Fulfilment status allows you to track and assign a specific status to a reward when it is given to a customer. By setting a fulfilment status, you can let the customer know the reward status whether it isbeen shipped,is on the way, orbeing processed.

`been shipped`

`is on the way`

`being processed`

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/fd46f0c2-9866-4558-bd23-8f0d82653bb8/48d5c536-2950-47ff-afb7-1e8ab8f8791d/images/a9b71700-a526-4000-a29a-613b550a13a1.png)

1. (Optional) Add additional information about the issuance of the reward underNotes.  This information is shared with the vendor responsible for fulfilling the reward.

![](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/fd46f0c2-9866-4558-bd23-8f0d82653bb8/48d5c536-2950-47ff-afb7-1e8ab8f8791d/images/57b69c20-de29-484e-a13c-91fcf911d262.png)

1. Click on+Reward transaction custom fields. A list of custom fields available for the organisation is displayed. These are the customer fields created for the Reward (using scope ISSUE_REWARD when using API)and allow you to send extra information, such as customer details or specific requirements when issuing a catalog reward. This feature is useful when passing data to a vendor who will fulfil the reward.

Click on+Reward transaction custom fields. A list of custom fields available for the organisation is displayed. These are the customer fields created for the Reward (using scope ISSUE_REWARD when using API)and allow you to send extra information, such as customer details or specific requirements when issuing a catalog reward. This feature is useful when passing data to a vendor who will fulfil the reward.

![](https://files.readme.io/057f118b499d313689de094cfa16f84fac4b45aaccac806a1be765cdebfca2b7-reward_transaction_cf.png)

2. Select the required custom fields by checking the box or use theSearchoption to find it, then clickSelect. The selected custom fields are displayed.

Select the required custom fields by checking the box or use theSearchoption to find it, then clickSelect. The selected custom fields are displayed.

![](https://files.readme.io/9d912add15484f089c0d62cb968de29502176c5074ea3b862f09fe23bcb64efe-image.png)

3. Choose aMapping typefrom the drop down.

Choose aMapping typefrom the drop down.

![](https://files.readme.io/f3d06747a45a96a0b25bee3cd5d0e553597d92ef4e84d14d1ebf13b1f50c1d45-image.png)

a.Add Manually- SelectAdd Manuallyto manually add extra information against a reward transaction custom field. The information can be added against theMapped entityfield. For example, if you want to add information to the vendor to Issue the reward after 10 days, you can select an appropriate custom field and manually add this message.

![](https://files.readme.io/d3f23be0d68e9d43db6bfc69b0d4ef827fc8e685f5ea25e11b1bb4de579784c5-image.png)

b.Transaction Extended Field- This mapping type sends information to the vendor through a transaction extended field. For example, if you want to share the GST number of a transaction with the vendor, you can select the appropriate custom field and map it to the GST number transaction extended field. The system resolves the transaction extended field information against the customer in the backend. To use this, selectReward Transaction Custom Fieldand choose the relevant transaction extended field from theMapped Entitydrop-down.

![](https://files.readme.io/d3f4b7177e668def9c76c76f105c551fa3bca514dd55490a8dbb9c427569efc8-image.png)

c.Customer Extended Field: This mapping type is used to share information with the vendor through a customer extended field. For example, if you want to provide the customer’s communication address to the vendor for sending the reward, you can select the appropriate custom field and map it to the address customer extended field. The system resolves the customer extended field information against the customer in the backend. To use this, selectReward Transaction Fieldand, from theMapped Entitydrop-down, choose the relevant customer extended field

![](https://files.readme.io/defa757262a123686101708a696468b31f283c5c3c33beee5f5623a6c73cee09-image.png)

Note: You can add, edit, and delete theReward transaction custom fields.

1. ClickDoneto issue the reward.

ClickDoneto issue the reward.

![](https://files.readme.io/18c79819de7ca1314cc9d86752d173b8158dcdc3617f50756b87579a4c5e7a7e-done.png)

Note: The UI currently does not display the source of coupon issuance, and you cannot filter rewards by fulfilment status. However, you can retrieve the fulfilment status using theGet Purchased Rewards for UserAPI.

## Customer status & label

This action lets you configure the "customer status & label" for your customers directly from the workflows. This action will be available in both the loyalty programs & loyalty promotions.

For example:

1. If you want to change the "label" of all the customers who made transactions worth more than 10,000 as "high-value", it can be done with this action directly from workflows.

2. If you want to change the "label" of all the customers who made more than 5 returns to "suspecting", it can be simply done with this action.

To use this action, do the following steps. Go to workflow -> action, and there you'll find:

An action "change customer status & label"

![](https://files.readme.io/d248215-Screenshot_2024-01-08_at_5.40.36_PM.png)

Now select the status & label you want to configure. Note that, the label is unique across status. This means that, when you are selecting the label, you are selecting the status also.

![](https://files.readme.io/80afd2b-Screenshot_2024-01-08_at_5.40.52_PM.png)

You'll find that configured action in the display once it is done.

![](https://files.readme.io/2452025-Screenshot_2024-01-08_at_5.41.09_PM.png)

In this way, you can change the status & label of your customers directly from workflows.

Updated2 months ago