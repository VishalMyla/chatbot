# Building blocks of a journey

The building blocks available to create a journey is classified into 3 sections:

1. Engagements

2. Flow control

3. Actions

# Adding a building block to the journey canvas

To add any building block to the canvas, drag and drop the desired block to the journey canvas.

# A/B testing block

A/B testing, also known as split testing, is a method in customer Journeys that helps to compare different content and engagement methods for specific segments of customers over a defined period. This allows you to gather valuable insights about which configurations perform better with the audience. Based on the results obtained, you can make informed decisions about which configuration to adopt for the remainder of the customer journey.

For information on configuring the A/B testing block, refer to thedetailed documentation on the A/B testing block.

> 📘NoteThe A/B testing block is a replacement for the engagement block. If you are running an A/B test, you don’t need to include another engagement block.

## 📘Note

Note

The A/B testing block is a replacement for the engagement block. If you are running an A/B test, you don’t need to include another engagement block.

# Engagement building block

The engagement block contains different types of channels that can be used to engage with your customers. A marketer can add an engagement block (of a particular channel) and configure the content in that block (specific to that channel) to reach out to users.

The various engagement blocks available are:

1. SMS

2. Email

3. M-push

4. WhatsApp

5. Zalo

6. Line

7. Viber

## Use Case

A brand wants to include customers whose transactional value is greater than $10,000 in the Journey and communicate the discounts that can be availed by these customers via SMS.

## Adding engagement block

To add an engagement block,

1. Click on the engagement block.

2. In theEngagement nametext box, enter a name for the engagement block.

3. ClickAdd creative.

4. Select an existing template or create a new template. For information on creating templates, seeSMS Template,Email Template,M-Push Template,WhatsApp template,ZALO template,Line template, andViber template. You can use the Channel Priority block to send the communication message based on the availability of the customer's communication channel. For more information, refer to thedocumentation on Channel Priority in Journey.

5. Add the information as required.

6. ClickDone.

7. To add incentives along with the engagement message, click+Add incentivesand add desired incentives. Currently offers, points, cart promotions, gift vouchers and badges are the Incentives supported in Journeys. For more information on how to add incentives, seeAdd incentives.

8. To remove or change incentives, click the three dots adjacent to the offers/points and clickRemove/Change.

9. To preview or remove the template added, click the three dots inside the template and clickPreview/Remove.

10. In theDelivery settings, enter the delivery settings details. SeeDelivery settings.

![](https://files.readme.io/8277f2e-Configuring_creatives.gif)

## Incentives in engagement message

You can add incentives such as offer, points and cart promotion details along with the engagement messages. To add, perform the following:

1. Click on the engagement block.

2. ClickAdd incentives.

3. Select the desired option.

![](https://files.readme.io/6200d43-Add_incentives.png)

1. ClickSelect/Done/Claim.

![](https://files.readme.io/da69176-Add_Incentive.jpg)

1. ClickDone.

The selected incentive is added to the engagement message. For information on creating any type of incentive, seeIncentive management.

# Flow control building block

Flow control helps you control the flow of the journey by applying conditions to user events or user preferences.

Marketers can define different conditions in a customer journey to guide users through different flows based on specific criteria such as time or event-based preferences. These conditions serve as additional decision points that determine whether the user will continue on the same path or be directed to a different flow.

The various flow control blocks available are:

1. Time-based wait

2. Event-based wait

3. Join

4. Decision split

## Time-based wait

The time-based wait is used by brands to engage customers at a particular time/date or after a specified period. This is preferred after analyzing user behaviour and targeting users at a crucial time to improve engagement.

This feature allows brands to target their customers at the right time to increase engagement and can avoid spamming the customer. This can increase click-through rates and would motivate the target customer to perform a desired behaviour.

### Use Cases

- A brand has analyzed that their customers have high activity rates mostly on the weekends and they want to send out communication messages during that period.

- Certain countries have rules that engagements with customers should go out on particular days of the week/date of the month and rates for some days of the week are lower than the other. This would allow brands to comply with government rules and also save engagement costs

### Configuring time-based wait

1. Drag and drop theWaitblock on the journey canvas.

2. On the journey canvas, clickTime based wait.

3. In theBlock name, enter a name for the wait block.

4. Define the wait duration. Note: At present only, Wait for a duration is supported.Wait for- Enter the wait time in hours/ day/week/month/year.Then proceed from this block Immediately - From the drop-down, select when the customer should proceed to the next block. The available options are:ImmediatelyOn a specific time- Select the desired timeOn the nearest day- Select the desired day and timeOn the nearest date- Select the desired date and time

1. Wait for- Enter the wait time in hours/ day/week/month/year.

2. Then proceed from this block Immediately - From the drop-down, select when the customer should proceed to the next block. The available options are:ImmediatelyOn a specific time- Select the desired timeOn the nearest day- Select the desired day and timeOn the nearest date- Select the desired date and time

1. Immediately

2. On a specific time- Select the desired time

3. On the nearest day- Select the desired day and time

4. On the nearest date- Select the desired date and time

![](https://files.readme.io/3ad34a9-small-3.png)

![](https://files.readme.io/59498a5-small-4.png)

1. Once the wait block is added to the canvas, click on the delete icon to remove the block or click on the setting icon to edit the block.

> 📘NoteIf a customer's wait time in v1 is 2 days, and they are moved to v2, the wait time will not reset. It will continue from the remaining duration.

## 📘Note

Note

If a customer's wait time in v1 is 2 days, and they are moved to v2, the wait time will not reset. It will continue from the remaining duration.

## Event-based wait

This feature allows brands to configure user journeys based on the behaviour of the customer. Brands can configure separate paths for customers based on an event-based wait time. The wait can be configured in two ways - wait since event and wait till event.

This allows brands to personalize journeys for users who perform a desired action and for new users that are yet to act. This also reduces the redundancy of messages and eliminates sending irrelevant messages to users.

### Use Cases

- The brand wants to give the customers a 10% off coupon if they make a purchase of 5000 within 30 days and if they do not make a purchase, the brand wants to share an upcoming offer message.

- The brand wants to give customers a 10% off coupon after they have completed 90 days since the last purchase date.

### Configuring event-based wait block

1. Drag and drop theEvent based waitto the Journey canvas.

Drag and drop theEvent based waitto the Journey canvas.

2. ClickEvent based waitin the canvas.

ClickEvent based waitin the canvas.

3. In theBlock nametext box, enter a name for the block.

In theBlock nametext box, enter a name for the block.

4. FromHow you want to specify the wait time?, select the desired option.Wait till eventWait since event

FromHow you want to specify the wait time?, select the desired option.

1. Wait till event

2. Wait since event

7. Choose how to specify the wait timeWait till eventFrom the drop-down, select the type of event and define conditions to define the customer group.  Click +Add condition to add conditions. You can click +Add condition to add further conditions and combine them with the AND operator. Click Add group to add conditions and combine them with the OR operator.Choose a timeframe for the customer to perform the action mentioned in the conditions. Time frames can include hours, days, weeks, months or years. If the customer doesn’t perform the desired action, they will move on to the next block after the time frame is over.Wait since event- Add a time frame since the user acted. Time frames can include hours, days, weeks, months or years. Include actions such as - Registration date, Last purchase date and First purchase date to proceed from the block. The KPIs are directly calculated based on the user action specified.Based on entry trigger event- Here, the journey's wait duration is tied to the event that initiated the customer's entry into the journey (e.g., the promotion issuance date, enrollment, or another trigger event). You can configure the wait time based on:Exact Date: Waits until a specific date. This is determined based on the user entry trigger event type. For example, if the user's entry is triggered by a transaction, you can set the date to the transaction date.Specific Time Before the Date: Allows you to set a waiting period before a defined date. For example, if the user's entry is triggered by a transaction, you can configure it to wait for 2 days, hours, weeks, or years before the transaction date.Specific Time After the Date: Allows you to set a waiting period after a defined date. The method of defining the date is similar to the optionSpecific Time Before the Date.Example:If the entry trigger event is "Promotion Issued on December 20, 2024", and you configure the block to wait 4 days before a defined date, the system calculates when to resume the journey based on the trigger event plus the specific wait setting.How This Can Be Used:You can configure this to send reminders or other messages before a key date, like a challenge start date. For example:Promotion Issued: December 20, 2024.Promotion (Challanege) Start Date: December 25, 2024.Wait Configuration: Wait until 2 days before the promotion/challenge start date (December 23, 2024) before sending a reminder message about the event. The customer receives a message on December 23, 2024, reminding them about the upcoming challenge.

Choose how to specify the wait time

1. Wait till eventFrom the drop-down, select the type of event and define conditions to define the customer group.  Click +Add condition to add conditions. You can click +Add condition to add further conditions and combine them with the AND operator. Click Add group to add conditions and combine them with the OR operator.Choose a timeframe for the customer to perform the action mentioned in the conditions. Time frames can include hours, days, weeks, months or years. If the customer doesn’t perform the desired action, they will move on to the next block after the time frame is over.

Wait till event

1. From the drop-down, select the type of event and define conditions to define the customer group.  Click +Add condition to add conditions. You can click +Add condition to add further conditions and combine them with the AND operator. Click Add group to add conditions and combine them with the OR operator.

![](https://files.readme.io/8fe9117-small-5.png)

2. Choose a timeframe for the customer to perform the action mentioned in the conditions. Time frames can include hours, days, weeks, months or years. If the customer doesn’t perform the desired action, they will move on to the next block after the time frame is over.

![](https://files.readme.io/c771020-small-6.png)

4. Wait since event- Add a time frame since the user acted. Time frames can include hours, days, weeks, months or years. Include actions such as - Registration date, Last purchase date and First purchase date to proceed from the block. The KPIs are directly calculated based on the user action specified.

Wait since event- Add a time frame since the user acted. Time frames can include hours, days, weeks, months or years. Include actions such as - Registration date, Last purchase date and First purchase date to proceed from the block. The KPIs are directly calculated based on the user action specified.

![](https://files.readme.io/c5b7c52-small-7.png)

5. Based on entry trigger event- Here, the journey's wait duration is tied to the event that initiated the customer's entry into the journey (e.g., the promotion issuance date, enrollment, or another trigger event). You can configure the wait time based on:Exact Date: Waits until a specific date. This is determined based on the user entry trigger event type. For example, if the user's entry is triggered by a transaction, you can set the date to the transaction date.Specific Time Before the Date: Allows you to set a waiting period before a defined date. For example, if the user's entry is triggered by a transaction, you can configure it to wait for 2 days, hours, weeks, or years before the transaction date.Specific Time After the Date: Allows you to set a waiting period after a defined date. The method of defining the date is similar to the optionSpecific Time Before the Date.Example:If the entry trigger event is "Promotion Issued on December 20, 2024", and you configure the block to wait 4 days before a defined date, the system calculates when to resume the journey based on the trigger event plus the specific wait setting.How This Can Be Used:You can configure this to send reminders or other messages before a key date, like a challenge start date. For example:Promotion Issued: December 20, 2024.Promotion (Challanege) Start Date: December 25, 2024.Wait Configuration: Wait until 2 days before the promotion/challenge start date (December 23, 2024) before sending a reminder message about the event. The customer receives a message on December 23, 2024, reminding them about the upcoming challenge.

Based on entry trigger event- Here, the journey's wait duration is tied to the event that initiated the customer's entry into the journey (e.g., the promotion issuance date, enrollment, or another trigger event). You can configure the wait time based on:

1. Exact Date: Waits until a specific date. This is determined based on the user entry trigger event type. For example, if the user's entry is triggered by a transaction, you can set the date to the transaction date.

2. Specific Time Before the Date: Allows you to set a waiting period before a defined date. For example, if the user's entry is triggered by a transaction, you can configure it to wait for 2 days, hours, weeks, or years before the transaction date.

3. Specific Time After the Date: Allows you to set a waiting period after a defined date. The method of defining the date is similar to the optionSpecific Time Before the Date.Example:If the entry trigger event is "Promotion Issued on December 20, 2024", and you configure the block to wait 4 days before a defined date, the system calculates when to resume the journey based on the trigger event plus the specific wait setting.How This Can Be Used:You can configure this to send reminders or other messages before a key date, like a challenge start date. For example:

`Specific Time Before the Date`

- Promotion Issued: December 20, 2024.

- Promotion (Challanege) Start Date: December 25, 2024.

- Wait Configuration: Wait until 2 days before the promotion/challenge start date (December 23, 2024) before sending a reminder message about the event. The customer receives a message on December 23, 2024, reminding them about the upcoming challenge.

![](https://files.readme.io/9d22567c7b98b29dec09f2b7f92c0a7a99863462f58bdfaf2093091c2cc27ede-User_entry_based_event_based_wait.gif)

## Join

This feature is used to connect multiple paths within a journey onto a single common path. It reduces the time and effort of the brand to configure similar paths within a single journey. This feature saves the time of the marketer by disabling the hassle of creating multiple journeys/paths to send customers on a common path. It also maintains continuity and familiarity of engagements sent to customers

### Use Cases

Brands want to nudge their customers to purchase their seasonal collections. They share an SMS as well as a coupon code with the customer. They want to wait for 10 days for the user to act and if not performed, they want to re-send the message to customers.

### Configuring a join block

1. Drag and drop theJoinblock on the journey canvas. Whenever a user reaches this block, they will be redirected to a common path as configured.

2. Click on theJoinblock in the canvas.

3. In theBlock nametext box, enter a name for the block.

4. From the Join the end before drop-down, select the block the customer should join. A list of block names previously configured within the journey is displayed in the drop-down as eitherengagementorflow controldepending on the components included. You can use the search button to search the block names.

![](https://files.readme.io/e17c5be-small-8.png)

1. ClickDoneto finish configuring the block. Post configuration, you can view where the join block merges the journey.

![](https://files.readme.io/95a1ef7-small-9.png)

1. Once the wait block is added to the canvas, click on the delete icon to remove the block or click on the setting icon to edit the block

## Decision Split

This feature helps brands to define different paths for multiple kinds of users. Brands can define multiple criteria and the customers will move in a path as per the criteria they fit in. This enables brands to target customers based on their past purchases and behavioural patterns which leads to extremely personalized journeys for users. It allows brands to create multiple paths for customers matching various criteria and to send out relevant engagement messages and nudges

### Use Cases

1. Incentive customers based on their previous behaviour which will result in an increase in coupon redemption and increase transaction frequency. Brands will be able to send relevant messages to users based on their behavioural patterns and can increase personalisation.

2. Incentivise customers on special days such as birthdays/anniversaries to make them feel special and increase loyalty towards the brand.

3. Send customers wishes and offers based on the festivals celebrated in their respective regions. This will increase personalisation.

## Configuring a decision split block

1. Drag and drop the Decision Split block on the journey canvas. Whenever a user reaches this block, they will be directed on the path according to which condition they match

Drag and drop the Decision Split block on the journey canvas. Whenever a user reaches this block, they will be directed on the path according to which condition they match

2. Click on theDecision split block in the canvas.

Click on theDecision split block in the canvas.

3. In theBlock nametext box, enter a name for the block.

In theBlock nametext box, enter a name for the block.

4. Configure the loyalty status and add filter conditions.Within loyalty status, choose the category of customers you want to select.Click+Add conditionto add conditions and further refine the customer group. You can click+Add conditionto add further conditions and combine them with the AND operator. Click Add group to add conditions and combine them with the OR operator.Along with multiple conditions, brands can also define multiple paths within the same block.Once a filter is selected within a condition, further define which group of customers will be included in the condition. This is populated based on the filter chosen.

Configure the loyalty status and add filter conditions.

1. Within loyalty status, choose the category of customers you want to select.

![](https://files.readme.io/449a7be-small-10.png)

2. Click+Add conditionto add conditions and further refine the customer group. You can click+Add conditionto add further conditions and combine them with the AND operator. Click Add group to add conditions and combine them with the OR operator.

![](https://files.readme.io/08cb5d0-small-11.png)

3. Along with multiple conditions, brands can also define multiple paths within the same block.

4. Once a filter is selected within a condition, further define which group of customers will be included in the condition. This is populated based on the filter chosen.

![](https://files.readme.io/f638771-small-12.png)

9. Once the conditions have been configured, clickDone. The journey will get divided into two paths- for customers who satisfy the condition within the decision split block and for customers who do not.

Once the conditions have been configured, clickDone. The journey will get divided into two paths- for customers who satisfy the condition within the decision split block and for customers who do not.

![](https://files.readme.io/2917670-small-13.png)

1. Further blocks can be added within the separate paths of the decision blocks. Once the wait block is added to the canvas, click on thedelete iconto remove the block or click on thesetting iconto edit the block.

# Action building block

## Jump

The jump functionality allows brands to connect multiple journeys. Some of the salient features of JUmp block are:

- Allows marketing team to simplify their journey-designing process

- Eliminates the redundancy of creating the same flows within multiple journeys by allowing users to jump from one journey to another if they meet certain conditions.

- Through personalized journeys, you can ensure customer retention and satisfaction.

- Avoids the complications of creating a complex journey in a single flow and thus simplifies creating hyper-personalized journeys.

- Avoids monotony creating similar flows within each journey separately and saves time.

### Use Cases

Assume that a brand wants to give customers who spend more than 1000 rs in their store 500 bonus points and certain other incentives. If a customer spends more than 5000$ in Journey A, they will jump to Journey B (elite customers) which includes customers that have a free membership + incentives. The brand can include a Jump activity within their journey A that caters to the value of a transaction.

### Configuring a jump block

1. Drag and drop theJumpblock to end of the path on the journey canvas. Whenever a user reaches this block, they will be directed to a different journey as per the configuration in the Jump block.

2. Click on theJumpblock in the canvas.

3. In theBlock nametext box, enter a name for the block.

4. From the drop-down, select the desired existing journey. You can also use the search box and search for a particular journey.  You can click on the info icon and  view the summary of the selected journey

5. ClickDone

![](https://files.readme.io/d026eda-small-14.png)

1. To view a summary of the added journey, click on the info icon below the Jump block. The summary block displays the entry trigger and duration of the journey.

![](https://files.readme.io/b7087bd-small-15.png)

1. Once the wait block is added to the canvas, click on the delete icon to remove the block or click on the setting icon to edit the block.

## Issue incentive without sending communication

> ❗️AttentionBy deafult, this block is not available for all orgs. Contact your CSR for enabling this block.

## ❗️Attention

Attention

By deafult, this block is not available for all orgs. Contact your CSR for enabling this block.

The Incentives block allows you to reward customers during their journey without sending a communication. This can be used by brands which run multiple offers and incentives not to spam their customers with numerous notifications.

To issue incentives without sending a communication, perform the following while configuring the journey:

1. Drag and drop the Incentives block to the Journey.

2. Click on the Incentives block.

3. In the Incentive configuration page, enter a name for the Incentive.

4. Add the desired incentive and selectDone. You can add only one incentive for anIssue Incentivesblock. An error message will be displayed if the attached incentive is already claimed. In addition, claims such as cart promotion are claimed after the Journey is approved and not while sent for approval.

You can edit or remove the configured incentive while editing the Journey. The configured incentives will be displayed when previewing the Journey.

![](https://files.readme.io/5af24c8-NoCommIncentives.gif)

Updated3 days ago