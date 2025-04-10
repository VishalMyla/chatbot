# Alternate Currencies

> 🚧NoteAlternate currencies are not available for all organisations. Contact your CSM to enable alternate currencies for your organisation.

## 🚧Note

Note

Alternate currencies are not available for all organisations. Contact your CSM to enable alternate currencies for your organisation.

Alternate Currencies are a variation of thereward currencies (points). Some of the prominent features of alternate currencies are:

- They can have an image associated with them (for example, a stamp image for the stamp currency).

- These can be made active or inactive as per the use case.

- Operates at the program level rather than the organization level.

Example

In the E-commerce, Gaming, or Entertainment sectors, brands often offer various incentives such as stars, stamps, boosts, and more to engage their customers. These currencies serve specific purposes, including exchanging stamps for reward catalog items and using boosts to advance to the next level.

A high-level view of the incentives with these Alternate Currencies looks like below:

![](https://files.readme.io/d7eeb8b-Screenshot_2024-02-28_at_3.45.26_PM.png)

Alternate Currencies can be also provided along with other incentives such as points, coupons, and badges during a transaction. For instance, in the airline industry, you may wish to reward customers with regular points equivalent to 3% of their transaction value. If a customer spends $1000, they would receive 30 regular points.

However, suppose your brand strategy dictates that regular points should not be used for tier-related activities like upgrades or downgrades. In that case, you might introduce a new currency called "tier points" for such purposes.

For example, if you decide to allocate 5% of these "Alternate Currencies," also known as "tier points," per transaction, the customer would earn 50 tier points alongside their regular points.

# Creating Alternate Currency

To create Alternate Currencies, perform the following steps:

1. Go to the loyalty program in which the currency needs to be created.

2. ClickEdit programif not already in the edit flow.

3. ClickAdvanced settings.

4. ClickReward currencies.

![](https://files.readme.io/29c8219-Desktop_-_493.jpg)

![](https://files.readme.io/f4dc0f7-Frame_717605.jpg)

1. Click theNew reward currencyCTA.

2. Enter the required details needed to create the currency:Name of the new currencyDescription of the new currencyActivate/Deactivate: Similar to promotions, an active/inactive status can be assigned to Alternate Currencies. This is an editable feature, so this can be updated as & when needed.Duration: By default, currency is valid from the date of creation to 99 years. However, a custom duration can also be configured depending on the use case. This can be helpful when the brand wants to allocate alternate currency only during a specific duration.Image: Each Alternate Currency must be assigned an image, which will serve as a symbol of the currency. For example, you can upload a stamp image when creating a stamp alternate currency.Redeemability of Alternate Currency: If a brand desires, the redeemable property of the currency can be revoked, making it non-redeemable. This is an irreversible property once created, and currently not supported.Return of Alternate currency: If a brand desires, the return property (return & return re-evaluation) can be revoked for an alternate currency. This is an irreversible property once created.Reward currency conversion: Similar to the feature in points, each Alternate Currency can also be assigned a conversion value. This is valid only when the redeemability is enabled for the currency.

1. Name of the new currency

2. Description of the new currency

3. Activate/Deactivate: Similar to promotions, an active/inactive status can be assigned to Alternate Currencies. This is an editable feature, so this can be updated as & when needed.

4. Duration: By default, currency is valid from the date of creation to 99 years. However, a custom duration can also be configured depending on the use case. This can be helpful when the brand wants to allocate alternate currency only during a specific duration.

5. Image: Each Alternate Currency must be assigned an image, which will serve as a symbol of the currency. For example, you can upload a stamp image when creating a stamp alternate currency.

6. Redeemability of Alternate Currency: If a brand desires, the redeemable property of the currency can be revoked, making it non-redeemable. This is an irreversible property once created, and currently not supported.

7. Return of Alternate currency: If a brand desires, the return property (return & return re-evaluation) can be revoked for an alternate currency. This is an irreversible property once created.

8. Reward currency conversion: Similar to the feature in points, each Alternate Currency can also be assigned a conversion value. This is valid only when the redeemability is enabled for the currency.

11. ClickDone.

![](https://files.readme.io/fdbe716-Screenshot_2024-08-07_at_12.41.46_PM.png)

# Viewing Alternate Currencies

Upon creation, an Alternate Currency appears immediately on the listing page. To view, navigate to Loyalty program > Edit program > Advanced settings > Reward currencies.

![](https://files.readme.io/db33b61-Desktop_-_409.jpg)

This listing page displays Alternate Currency with the below information:

1. Name, Image uploaded, and Created by.

2. Status & duration.

3. If the currency is redeemable or not, and returnable or not.

4. Last updated by

# Alternate Currencies in MLP

Alternate Currencies are created at the program level and their entire life cycle exists within the program itself.

For instance, consider an MLP organization called ABC, which comprises five distinct programs established based on different verticals of operation:

1. Fashion (fashion vertical)

2. Electro (electronics vertical)

3. Grocer (groceries vertical)

4. Hosp (hospitality vertical)

5. Sport (sports vertical)

Now, if the brand introduces an Alternate Currency named 'boosts' within the Sport program, the users earn these boosts through purchases from Sport, and they can only utilize them within the Sport program.

# Distribution of Alternate Currencies

Since Alternate Currencies function in parallel with points, brands can distribute them like points through loyalty programs & loyalty promotions. These can't distributed through Engage+ as of now.

1. Alternate currencies can be distributed from both loyalty programs & loyalty promotions. In the actions, the brand can find "Issue {{AC name}}" actions for all the ACs configured in the program. The behavior of this action will be similar to "transaction point allocation" for transaction-based activity, "allocation of points" for behavioral event-based activity, and "target point allocation" for milestone/streak related activity.

2. Alternate currencies can be issued for customer activities such as AddTransaction, Milestone/Streak is updated (also called as Target period elapsed), and Generic events.The conditions (Earn, Expiry, Return) configured for points can also be applied to the distribution of Alternate Currencies.Delayed strategies (aka promised points strategies) that we currently support for points are not supported for alternate currencies.

1. The conditions (Earn, Expiry, Return) configured for points can also be applied to the distribution of Alternate Currencies.Delayed strategies (aka promised points strategies) that we currently support for points are not supported for alternate currencies.

1. Delayed strategies (aka promised points strategies) that we currently support for points are not supported for alternate currencies.

> 📘Once the support of redemption is available for ACs, then the redemption conditions created for points can be used for alternate currencies as well.

## 📘Once the support of redemption is available for ACs, then the redemption conditions created for points can be used for alternate currencies as well.

Once the support of redemption is available for ACs, then the redemption conditions created for points can be used for alternate currencies as well.

Example

Suppose a brand has established an Alternate Currency named "tier points" and wishes to allocate these points to customers for various activities. This can be accomplished as follows:

![](https://files.readme.io/ac710fd-24471_frame.jpg)

![](https://files.readme.io/bea8fcc-25127_frame.jpg)

Here, similar to points, the necessary earn condition, expiry condition, etc., must be selected according to the use case. Once these selections are made and saved, they begin to appear in the actions.

![](https://files.readme.io/611b4f9-25791_frame.jpg)

# Alternate Currencies in Tracker: managing double liability

Consider a brand running a promotion offering 5%, 10%, and 15% points to customers categorized as bronze, silver, and gold. Reusing the same points for tier-related actions, such as upgrades or downgrades, poses a double liability risk. This arises because:

- Users can redeem the points.

- Users can utilize the same points to upgrade to another tier, increasing the brand's liability further.

To address this challenge, you can create an Alternate Currency and a tracker to monitor and minimize double liability concerns. For example, for the above use case, you can create an Alternate Currency 'Tier Points' and track the entity.

Some important points regarding ACs in trackers:

1. Trackers created on alternate currencies won't be available in the tracker set/points tracker set.

2. They can be accessed directly from any set using the following rules:currentCustomer.trackerValueBeforeEvent("Tracker name", "Case name") ><= Value: This rule will fetch the value of the tracker for the user excluding the current event.currentCustomer.trackerValueCurrentEvent("Tracker name", "Case name") ><= Value: This rule will fetch the value of the tracker for the user including the earnings from the current event until before set.

1. currentCustomer.trackerValueBeforeEvent("Tracker name", "Case name") ><= Value: This rule will fetch the value of the tracker for the user excluding the current event.

2. currentCustomer.trackerValueCurrentEvent("Tracker name", "Case name") ><= Value: This rule will fetch the value of the tracker for the user including the earnings from the current event until before set.

5. As these trackers are not tightly coupled with tracker set/points tracker set, the above rules can be written in loyalty promotion also. This means that tracker information can be accessed from promotions also which was not possible before.

### To create a tracker based on alternate currency:

1. Login to your respective org

Login to your respective org

2. Click on the 9-dot symbols in the top-left corner

Click on the 9-dot symbols in the top-left corner

3. Click on Loyalty+

Click on Loyalty+

4. Click on your loyalty program

Click on your loyalty program

5. Click on "Edit program"

Click on "Edit program"

6. Go to the "Trackers" section in the workflow

Go to the "Trackers" section in the workflow

7. Click on "Add new tracker".When you do the above, the following screen appears.In this, all the configs of trackers will work as it is.However, to create a tracker based on an alternate currency, the corresponding currency has to be selected in the tracked entity. Say, there are 2 alternate currencies (stars, tier points) present in your program:Then both the stars & tier points will appear as options in the "tracked entity"

Click on "Add new tracker".

1. When you do the above, the following screen appears.

2. In this, all the configs of trackers will work as it is.

3. However, to create a tracker based on an alternate currency, the corresponding currency has to be selected in the tracked entity. Say, there are 2 alternate currencies (stars, tier points) present in your program:Then both the stars & tier points will appear as options in the "tracked entity"

1. Then both the stars & tier points will appear as options in the "tracked entity"

12. Click on "Save" to create the tracker

Click on "Save" to create the tracker

![](https://files.readme.io/60a5a80-Milestone_-_Option-2_1.jpg)

### Tracker based on alternate currencies in workflows:

Once a tracker based on alternate currency is created successfully, it can be used right away in workflows. One important differentiation between these trackers from normal trackers is, that there is no need to go to the "Trackers" or "Points Tracker" section in the workflow to use them.

Rather, these trackers can be used in the normal sets directly making them very flexible. All the tracker rules that are currently supported for trackers will be supported for the trackers based on alternate currencies too.

![](https://files.readme.io/5ae5ded-Screenshot_2024-04-19_at_3.52.49_PM.png)

### Trackers based on alternate currencies in tier settings.

Once a tracker based on alternate currency is created successfully, the same tracker can be used in tier settings as well to configure the upgrade/downgrade/renew conditions.

For example, say as a brand you have created an alternate currency called "tier-points" and you want to do all the tier-related activities based on this currency. To achieve this

1. Create a tracker based on alternate currency

2. Once it is created successfully, go to the appropriate.

3. Select the above tracker in the tracker-based tier-settings configurations

4. Done

Preview of using the above tracker for tier eligibility:

![](https://files.readme.io/5b2dd76-Screenshot_2024-04-19_at_2.02.19_PM.png)

Preview of using the above tracker for renewal check:

![](https://files.readme.io/0410ae7-Screenshot_2024-04-19_at_2.03.12_PM.png)

## Alternate currencies in MLP

Alternate currencies will be created on the program level. This means that, when an alternate currency is created inside a loyalty program, its entire life cycle exists within the program only.

For example, say there is an MLP org (Tapa, a conglomerate) that contains 5 programs:

1. Frona (fashion vertical)

2. Erona (electronics vertical)

3. Grona (groceries vertical)

4. Hrona (hospitality vertical)

5. Srona (sports vertical)

Now, whenever an alternate currency (say Pebble) is created in Frona, it can be used only in Frona. This means:

- Redemption of the Pebble is possible only in Frona.

- Trackers can be created based on Pebble only in Frona.

- A new alternate currency called "Pebble" can be created in other orgs with the same name, but all of them work independently & confined only to their respective orgs.

## Alternate currencies information in APIs

Once an alternate currency is created, and distributed via workflows/promotions, then the information of them will be available in the following APIs.

1. getCustomerLedgerInfo:Link

2. getLedgerExplodeInfo:Link

3. getCustomerLedgerBalance:Link

4. getCustomerDetails V2:Link

5. getTransactions V2:Link

> 📘The information of alternate

## 📘The information of alternate

The information of alternate

> 📘NotesAlternate currency information is stored behind query parameters. This approach aims to maintain lightweight and fast APIs.

## 📘Notes

Notes

Alternate currency information is stored behind query parameters. This approach aims to maintain lightweight and fast APIs.

## FAQs

1. Does an alternate currency have all the capabilities of points?Currently, alternate currencies can be created, distributed, returned, return re-evaluated, and can be tracked using the trackers. However, many core properties like expiry and redemption won't work with them.

1. Currently, alternate currencies can be created, distributed, returned, return re-evaluated, and can be tracked using the trackers. However, many core properties like expiry and redemption won't work with them.

3. How many alternate currencies can I have?Alternate currencies work on the program level. In each program, a brand can have up to 5 active alternate currencies. If a brand has use cases where more than 5 are needed, reach out to the product team.

1. Alternate currencies work on the program level. In each program, a brand can have up to 5 active alternate currencies. If a brand has use cases where more than 5 are needed, reach out to the product team.

5. Can I distribute alternate currencies from any customer activities?Yes, these can be distributed from any customer activity like add transaction, target completed, generic events, etc. making the distribution seamless & universal.

1. Yes, these can be distributed from any customer activity like add transaction, target completed, generic events, etc. making the distribution seamless & universal.

7. Are event notifications supported for Streaks?Yes, streak supports 6 event notifications. Following are the:Streak startStreak endEnrolment into streakUn-enrolment into streakStreak-level achievedStreak-level unachieved

1. Yes, streak supports 6 event notifications. Following are the:Streak startStreak endEnrolment into streakUn-enrolment into streakStreak-level achievedStreak-level unachieved

1. Streak start

2. Streak end

3. Enrolment into streak

4. Un-enrolment into streak

5. Streak-level achieved

6. Streak-level unachieved

Updated2 months ago