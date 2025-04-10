# Configure journey

To configure a journey perform the following steps:

# 1. Configure entry trigger

An entry trigger defines which customers will enter the journey.

An entry trigger is used to differentiate between customers and move them onto different entry paths based on their behavior to enhance their engagement with the brand. A user enters the journey only after the entry condition is satisfied by them.

Key features:

- Enables brands to segregate their customers based on their transactional and behavioral patterns

- Enables brands to create hyper-personalized journeys for their customers which in turn results in higher customer retention.

Customer behavior can be either transactional or behavioral, and brands can configure their exact requirements within the entry trigger.

![](https://files.readme.io/33f2b09-small-Entry_Trigger.png)

## User events trigger

In a User event trigger which is also called a user-initiated trigger, the customer enters the journey based on any transactional or non-transactional activity (behavioural events). With the help of user events, brands can include multiple paths within a journey depending on customer activity.

Transactional events are standard whereas behavioral events are configurable by individual brands to suit their requirements. While adding transactional triggers, the brand has to choose between the following events:

Transactional events

| Event Name | Description |

| --- | --- |

| Customer Registration | Triggers a user's entry into a journey based on thecustomer registrationevent. Configure the associated rules and actions as needed. |

| Current Transaction | Triggers a user's entry into a journey when atransaction is completed. |

| Coupon Redemption | Triggers a user's entry into a journeywhen a coupon is redeemed. Use this event to configure actions based on coupon redemption. |

| Customer Update | Triggers a user's entry into a journey based on thecustomer updateevent. |

| Reward Issued | Triggers a user's entry into a journey whenever areward is issued. |

| Target Enrollment | Triggers a user's entry into a journey when they areenrolled in a target. |

| Target Value Achieved | Triggers a user's entry into a journey when thepredefined target value is achieved. |

| Partner Program Linked | Triggers a user's entry into a journey when they arelinked to a partner program. |

| Promotion Issued | Triggers a user's entry into a journey when apromotion is issued to them. |

| Points Issued | Triggers a user's entry into a journeywhen points are issued. |

| Coupon Issued | Triggers a user's entry into a journeywhen a coupon is issued. |

| Tier Upgraded | Triggers a user's entry into a journeytheir tier is upgraded. |

| Tier Downgraded | Triggers a user's entry into a journeywhen their tier is downgraded. |



[customer registration](/docs/event-schema-payload#customer-added-event-customeradded)

[transaction is completed](/docs/event-schema-payload#transaction-added-event-transactionadded)

[when a coupon is redeemed](/docs/event-schema-payload#coupon-redeem-event-couponredeem)

[customer update](/docs/event-schema-payload#customer-updated-event-customerupdated)

[reward is issued](/docs/event-schema-payload#reward-issued-event-rewardissued)

[enrolled in a target](/docs/event-schema-payload#target-customer-enrolment-event-targetcustomerenrolment)

[predefined target value is achieved](/docs/event-schema-payload#target-value-achieved-event)

[linked to a partner program](/docs/event-schema-payload#partner-program-linked-partnerprogramlinked)

[promotion is issued to them](/docs/event-schema-payload#issued-loyalty-promotion-promotionissued)

[when points are issued](/docs/event-schema-payload#points-issued-event-pointsissued)

[when a coupon is issued](/docs/event-schema-payload#coupon-issue-event-couponissue)

[their tier is upgraded](/docs/event-schema-payload#tier-upgraded-tierupgraded)

[when their tier is downgraded](/docs/event-schema-payload#tier-downgraded-event-tierdowngraded)

Behavioral events

These events include both standard as well as customized events. The standard events include events based on attributes such as price, quantity, productType, cardId, and productName. For more information on behavioural events, seebehavioural events.

Further, you can also define conditions, filter the adience and define differnt patths accordingly.

### Example Use Case

1. Requirement:The brand wants to configure a journey where the user enters the journey immediately upon being registered as a customer.Solution:Use the Customer Registration event as the entry trigger for the journey. This event is triggered when a new user completes the registration process and their customer profile is created.

2. Requirement:Brand wants to configure a journey where the user enters the journey when they achieve a target set as part of the loyalty promotion they are enrolled in. Additionally, only users whose whose total transaction amount is greater than 10000 should enter the journey.Solution:-Use the Target Value Achieved event as the entry trigger for the journey. This event is triggered when a user reaches the target value defined as part of their loyalty promotion.Define an additional condition to filter users based on their life time transaction amount: Set the Lifetime Transaction Amount  in the entry criteria filter.

- Use the Target Value Achieved event as the entry trigger for the journey. This event is triggered when a user reaches the target value defined as part of their loyalty promotion.

- Define an additional condition to filter users based on their life time transaction amount: Set the Lifetime Transaction Amount  in the entry criteria filter.

![](https://files.readme.io/21830f233ee6b7d806e42c61f9aebe7c37657cd21770abfa7c7de95b1c49b2ea-Select_user.png)

## Audience list trigger

Brands can add a selected audience list to a journey. They can either choose an already created list from the audience manager or they can click oncreate audience group

[create audience group](/docs/audience-management)

## Configuring an entry trigger

1. On the Journey canvas page, clickEntry triggerand define the entry trigger for the customer to enter the journey.

2. Select the type of entry trigger -User eventorAudience List

3. For User events trigger, perform the following:From theWho have performed the eventdrop-down, select the event -Current Transaction, Coupon Redemption or Customer RegistrationClick+Add entry paths. This defines further criteria for the customer to enter the journey.Click+Add conditionand define the conditions.You can click+Add conditionto add further conditions and combine them with the AND operator.ClickAdd groupto add conditions and combine them with the OR operator.For includingStoresin the condition, you also have the option to upload a .csv file with the stores list. SeeUploading store CSVTo create further conditions for the filtered customers, click+ Pathand define the conditions.Note: In case of multiple paths, the journey will proceed to the 1st matching path condition from top to bottom.

1. From theWho have performed the eventdrop-down, select the event -Current Transaction, Coupon Redemption or Customer Registration

2. Click+Add entry paths. This defines further criteria for the customer to enter the journey.

3. Click+Add conditionand define the conditions.

4. You can click+Add conditionto add further conditions and combine them with the AND operator.

5. ClickAdd groupto add conditions and combine them with the OR operator.For includingStoresin the condition, you also have the option to upload a .csv file with the stores list. SeeUploading store CSV

1. For includingStoresin the condition, you also have the option to upload a .csv file with the stores list. SeeUploading store CSV

7. To create further conditions for the filtered customers, click+ Pathand define the conditions.Note: In case of multiple paths, the journey will proceed to the 1st matching path condition from top to bottom.

11. For the Audience list, perform the followingClick+Audience group.Select an existing audience group or create an audience group. To create a new audience list, refer toAudience Management. You can select multiple audience groups.ClickDone.If you want to exclude customers from a specific group entering the journey, enable Exclude Audiences, click+Audience Groupsand select the audience group.

1. Click+Audience group.

2. Select an existing audience group or create an audience group. To create a new audience list, refer toAudience Management. You can select multiple audience groups.

3. ClickDone.

4. If you want to exclude customers from a specific group entering the journey, enable Exclude Audiences, click+Audience Groupsand select the audience group.

16. To change the entry trigger type, clickChange

17. ClickDone

18. To edit an entry trigger, hover on the entry trigger block and click theedit icon.

![](https://files.readme.io/3d8bb60-Entry_Trigger.gif)

# 2. Add the building blocks

For information on building blocks, seeBuilding blocks of a journey.

# 3. Schedule the journey

1. Click on theSchedule triggercard below the entry trigger. A side-bar will be displayed wherein which start and end of the journey can be configured

![](https://files.readme.io/7155708-small-1.png)

1. In theStartssection, there are two options.Immediately after approval- Starts the journey as soon as it is approved by the respective stakeholderOn a specific date- Starts the journey from a specific day. The date can be added within the calendar that is displayed once this option is selected

1. Immediately after approval- Starts the journey as soon as it is approved by the respective stakeholder

2. On a specific date- Starts the journey from a specific day. The date can be added within the calendar that is displayed once this option is selected

![](https://files.readme.io/de6e333-small-2.png)

4. In theEndssection, there are two optionsNever- Runs journey continuously and never ends.On a specific date- The journey ends on a specific date. The date can be added to the calendar that is displayed once this option is selected.

1. Never- Runs journey continuously and never ends.

2. On a specific date- The journey ends on a specific date. The date can be added to the calendar that is displayed once this option is selected.

# 4. (Optional) Configure exit trigger

An exit trigger is to remove a customer from a journey if they satisfy a given condition. Brands can configure transactional and behavioural events that can cause a customer to exit a journey. This ensures that customers do not get spam/out-of-context engagements.This leads to a higher click rate on engagements and in turn leads to successful conversions.

## Use Cases

- A brand wants to target customers who have purchased shoes from them and want to motivate them to buy clothes as well. If a customer has already purchased from the clothes category, they should not receive promotional messages to buy clothes which can be configured in the exit trigger.

- Brands want to motivate users by asking them to upgrade to members. Customers who purchased the membership should be exited from the membership promotional journey

## Adding an exit trigger

1. In the journey canvas page, clickExit trigger.

2. In theDefine: Exit triggerpage, select how you want to make a user exit a journey. Here, two ways to exit a customer are supportedFiltered audience exitUser Event

1. Filtered audience exit

2. User Event

The two types of exit triggers have different use cases, determining which to use depends on the situation.

### When to use a Filtered Audience exit

Use Case:The brand has used the Audience list as an Entry trigger in Journeys.The requirement is that anyone who does not satisfy the audience list at any point in time should get exited from the journey.

How to use a Filtered Audience Exit:

1. To enable this, Toggle the option Filtered Audience exit to “ON”. By default, it will be set as No.

To enable this, Toggle the option Filtered Audience exit to “ON”. By default, it will be set as No.

2. If this is enabled, customers will exit the journey if they no longer satisfy the audience-filtered criteria configured in the entry trigger.📘NOTEThis can be used only when the entry criteria is set as Audience list.

If this is enabled, customers will exit the journey if they no longer satisfy the audience-filtered criteria configured in the entry trigger.

> 📘NOTEThis can be used only when the entry criteria is set as Audience list.

## 📘NOTE

NOTE

This can be used only when the entry criteria is set as Audience list.

![](https://files.readme.io/975ebe8-Exit_trigger.png)

### When to use a User Event-based exit

Use Case:Brand has used a User-based event as an Entry trigger in Journeys.The requirement is that when a particular customer does any event (standard event such as transaction/coupon redemption) or a behavioural event, they exit from a journey.

How to use a User Event Exit trigger:

1. Select the User Event Exit trigger and ClickNext.

2. From theWho have performed the eventdrop-down, select the event. You can select either transactional or behavioural events.

3. Define the conditions for the customer to exit the journey. This is similar to the defining conditions in the entry event.You can define only one condition/path for the exit trigger.

4. ClickDone.

5. To edit the exit condition, hover over the block and click on the edit icon.

![](https://files.readme.io/e3fa264-small-Exit_Trigger.png)

## How to reset an exit trigger

This feature enables brands to reset their exit trigger within a journey. With this feature, a brand can remove an existing condition from its journey that allows customers to exit the journey.

### Use Cases

A simple reset button not only allows brands to remove a pre-configured existing trigger but in case of multiple triggers, brands can remove all of them with the click of a button. It saves time and the hassle of removing each condition manually.

### Resetting an exit trigger

1. Once the journey canvas is opened, navigate to the exit trigger.

2. Upon hovering over the exit trigger, a reset icon will appear.

![](https://files.readme.io/26c75a6-small-4.png)

1. Click on the reset icon to reset the entire configuration of the exit trigger.

# 5. Configure journey settings

You can configure the below two settings for the journey.

## Entry settings

### Customer entry to the same journey

This feature allows brands to enable the same journey for customers several times if they match the entry condition. It enables consistency of engagement and targets customers at the right time.This helps to:

1. Reduce the hassle of recreating the same journey multiple time

2. Maintain consistency in engagement

- Just once- Allows the customer to enter the journey only once. Example use case: A welcome email to a new customer of a brand. In this scenario, the user is allowed to enter the journey only once during onboarding.

- More than once- Allows the customers to enter the journey multiple times. There is no limit set.Example use case:A "Step Challenge Journey" rewards users for walking 10,000 steps daily for five consecutive days. The journey includes:An email encouraging participation.Daily reminders to log steps.A reward upon successful completion.If users complete the challenge and later rejoin a new session of the challenge, they can re-enter the journey multiple times as long as they meet the entry conditions (e.g., signing up for a new challenge).You canuse the search optionand search for the customer who has entered the journey. The search result displays the date and time at which the customer entered the journey.

- Example use case:A "Step Challenge Journey" rewards users for walking 10,000 steps daily for five consecutive days. The journey includes:An email encouraging participation.Daily reminders to log steps.A reward upon successful completion.If users complete the challenge and later rejoin a new session of the challenge, they can re-enter the journey multiple times as long as they meet the entry conditions (e.g., signing up for a new challenge).You canuse the search optionand search for the customer who has entered the journey. The search result displays the date and time at which the customer entered the journey.

- An email encouraging participation.

- Daily reminders to log steps.

- A reward upon successful completion.If users complete the challenge and later rejoin a new session of the challenge, they can re-enter the journey multiple times as long as they meet the entry conditions (e.g., signing up for a new challenge).You canuse the search optionand search for the customer who has entered the journey. The search result displays the date and time at which the customer entered the journey.

To save the changes, clickSave.

![](https://files.readme.io/28b21eefd3efe5ff5bf27c9ffe8bb3ae9778d3f13669eacb51fa388d25ca3d16-Entry_Settings.png)

### Allow global control customers to enter the journey

You can enable this to include the Control audience (a control audience is a group of individuals who are intentionally left out of a campaign, in order to serve as a group for comparison) in the journey. By default, the control audience is not included in the journey.

## Communication Settings

You can enable the toggle switchIgnore subscription status for all communication channelsto send messages including transactional messages to all customers, even if their promotional subscriptions are configured to not receive messages. This bypasses the promotional subscription status settings.

![](https://files.readme.io/4174ed2e3c839c408dcbf6d2a69ebfeffb388c4efb183248e26e074bd02076e0-Communication_setting.png)

## Link Tracking Settings

You can enable the toggle switch to shorten URLs in communication messages.

![](https://files.readme.io/ec79d7143a54251662b2ff7f5fa6c353ae6a017736fb0ae017c1d4ec802cf91c-Link_tracking.png)

# 6. Send Journey for Approval

> 🚧Before sending a journey for approval, ensure the following:New Credit management system is enabled for your org. If it is not, kindly raise a ticket to the Sustenance team.Credit rates for all channels that are used for communication in the journey are configured.

## 🚧Before sending a journey for approval, ensure the following:

Before sending a journey for approval, ensure the following:

1. New Credit management system is enabled for your org. If it is not, kindly raise a ticket to the Sustenance team.

2. Credit rates for all channels that are used for communication in the journey are configured.

After you have configured steps 1 to 5 above, you need to save the journey and send it for approval by clicking on "Send for approval".

![](https://files.readme.io/b120824-image.png)

Once the journey has been sent for approval, the approver can approve the journey and the journey will go live as per the schedule configured in Step 3 above.

![](https://files.readme.io/d16e1ea-image.png)

Approver can also reject the journey if the journey needs certain modifications. In that case, journey will go to "Rejected" state and you will have to make changes to the journey by clicking "Edit"

![](https://files.readme.io/57b2436-image.png)

Updatedabout 1 month ago