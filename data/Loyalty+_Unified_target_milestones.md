# Unified target/milestones

A unified target, also called unified milestones, can be achieved by completing two or more individual targets. This enables brands to configure multiple targets in a single milestone for their customers, and reward them for achieving all the targets. Unified targets help brands improve their sales across verticals, across categories, and sales across a specific category by giving customers various targets.

# Components of a unified target

A unified milestone primarily consists of the following:

1. Multiple targets (at least 2 targets need to be present)

2. A logical operator (ALL or ANY) between the specified targets. Users can choose ALL or ANY, but not a mix between the targets.

3. An overall target if a brand desires (currently supported only for the ALL operator & transaction type activity ).

4. Supported only for fixed calendar window (aka only when the "start date of the first cycle" is specified explicitly by the brand)

> 📘NoteA maximum limit of 10 targets can be created in a unified milestone.

## 📘Note

Note

A maximum limit of 10 targets can be created in a unified milestone.

## Use case 1

XYZ, a leading conglomerate, operates across various sectors, including electronics, fashion, groceries, medicines, and more. Customers enjoy unique benefits by engaging in cross-vertical purchases, including:

1. Buying any two electronic items from the electronics vertical.

2. Making a minimum jewelry purchase of $1000 from the fashion vertical.

3. Completing five transactions, each amounting to a minimum of $10, within the e-commerce vertical.

Upon reaching the specified targets, users can redeem a $30 coupon.

## Use case 2

A customer of a fuel brand can earn rewards by meeting specific purchase targets, which include:

1. Buying a minimum of 5 liters of a specified quality of petrol.

2. Making purchases in the food & beverages category totaling at least $30.

Upon successfully achieving these targets within a specified timeframe, the user is eligible to receive 300 points as a reward.

## Use case 3

To meet the target set by a renowned electronics brand, a user is required to:

Buy electronics with a minimum total value of $600, fulfilling all of the following conditions:

- Purchase heavy electronics amounting to $150.

- Conduct 5 transactions, each valued at a minimum of $30.

- Make 3 visits, each with a minimum expenditure of $50.

- Purchase any combination of 5 electronic items.

# Creating a unified target

To create a unified target, navigate to the Milestone page and follow a process similar tocreating a regular Milestone. However, for unified targets, do the following in the "target activity" step:

1. Choose theSame target value for each cycleoption.

![](https://files.readme.io/1beb8c5-image.png)

1. You'll see a section asking for details about a single target.

![](https://files.readme.io/8064ebb-image.png)

1. Configure the KPI on which the single target needs to be created.

![](https://files.readme.io/c06ff9b-image.png)

1. From the drop-down set the scope of the target (like rules, stores, zones, etc..)

![](https://files.readme.io/be8ae14-image.png)

1. To add another target, clickAdd target.

![](https://files.readme.io/d6a667e-image.png)

1. Enter the details of the second target.

![](https://files.readme.io/78cf56c-image.png)

1. Toggle the slider to enableOverall target. The Overall target is applicable only when the activity is a "transaction type" for all the targets and "all" the targets need to be achieved. This is optional and applies to scenarios such asUse case 3where you have an overall target and individual targets with "all" as a condition between them. The Overall target option cannot be used with the operator "ANY".

Toggle the slider to enableOverall target. The Overall target is applicable only when the activity is a "transaction type" for all the targets and "all" the targets need to be achieved. This is optional and applies to scenarios such asUse case 3where you have an overall target and individual targets with "all" as a condition between them. The Overall target option cannot be used with the operator "ANY".

![](https://files.readme.io/912987b-image.png)

2. By default, when you add a new target, "ALL" will be configured between them. However, from the drop-down, chooseAllorANYto define the target conditions that need to be achieved. Select  ALL for scenarios such asUse case 2or select ANY and define the number of targets that need to be achieved if only a certain number of the defined targets need to be achieved.

By default, when you add a new target, "ALL" will be configured between them. However, from the drop-down, chooseAllorANYto define the target conditions that need to be achieved. Select  ALL for scenarios such asUse case 2or select ANY and define the number of targets that need to be achieved if only a certain number of the defined targets need to be achieved.

![](https://files.readme.io/a646058-image.png)

![](https://files.readme.io/21e6048-image.png)

1. ClickContinue. You cannot add a sub-target for a unified target.

![](https://files.readme.io/8a73f09-image.png)

1. ClickDone. A unified target has been successfully created.

> 📘Benefits can be given for unified targets in the following ways:For the whole unified target achievementFor the achievement of an individual target inside the unified targetExample:Say, there is an unified target called "ABC" that has 3 targets (X, Y, Z) in it.X: User has to purchase $100 in a monthY: User has to make 3 transactions in a monthZ: User has to update profile picture 2 times in a monthHere, say the rewarding is:If user achieves ANY(2) of the 3, will get 500 points. However, the brand also wants to reward 100 points whenever the user achieves individual target also.For the unified achievement, write the rule "currentEvent.isUnifiedTargetAchievedEvent" in the rule-box on the promotions side. Add the "issue points" action by selecting the 'unified target' as the response for the 'target(s)' after selecting the correct option (aka 'ABC' here) in 'Milestones/Streaks' drop-down.In the unified achievement case, pro-rate won't work as there is no source value.For the achievement of individual targets inside the unified targe, follow the exact rules that we write for normal targets & just make sure you are providing the correct name. For example, to configure the benefit of 100 points for 'X' target which is present inside the unified target:Write the rule currentEvent.targetExists("X") && (currentEvent.targetAchieved("X")>=currentEvent.targetDefined("X")) in the rule-box.This time, select the specific target (aka 'X' here) in the 'Target(s)' drop-down after selecting the correct option (aka 'ABC' here) in the 'Milestones/Streaks' drop-down.In this case, pro-rated also will work as there is a source value.

## 📘Benefits can be given for unified targets in the following ways:

Benefits can be given for unified targets in the following ways:

1. For the whole unified target achievement

2. For the achievement of an individual target inside the unified target

Example:Say, there is an unified target called "ABC" that has 3 targets (X, Y, Z) in it.

X: User has to purchase $100 in a month

Y: User has to make 3 transactions in a month

Z: User has to update profile picture 2 times in a month

Here, say the rewarding is:If user achieves ANY(2) of the 3, will get 500 points. However, the brand also wants to reward 100 points whenever the user achieves individual target also.

- For the unified achievement, write the rule "currentEvent.isUnifiedTargetAchievedEvent" in the rule-box on the promotions side. Add the "issue points" action by selecting the 'unified target' as the response for the 'target(s)' after selecting the correct option (aka 'ABC' here) in 'Milestones/Streaks' drop-down.In the unified achievement case, pro-rate won't work as there is no source value.

For the unified achievement, write the rule "currentEvent.isUnifiedTargetAchievedEvent" in the rule-box on the promotions side. Add the "issue points" action by selecting the 'unified target' as the response for the 'target(s)' after selecting the correct option (aka 'ABC' here) in 'Milestones/Streaks' drop-down.

![](https://files.readme.io/f6d9d65-Screenshot_2024-08-05_at_4.13.07_PM.png)

- In the unified achievement case, pro-rate won't work as there is no source value.

- For the achievement of individual targets inside the unified targe, follow the exact rules that we write for normal targets & just make sure you are providing the correct name. For example, to configure the benefit of 100 points for 'X' target which is present inside the unified target:Write the rule currentEvent.targetExists("X") && (currentEvent.targetAchieved("X")>=currentEvent.targetDefined("X")) in the rule-box.This time, select the specific target (aka 'X' here) in the 'Target(s)' drop-down after selecting the correct option (aka 'ABC' here) in the 'Milestones/Streaks' drop-down.In this case, pro-rated also will work as there is a source value.

For the achievement of individual targets inside the unified targe, follow the exact rules that we write for normal targets & just make sure you are providing the correct name. For example, to configure the benefit of 100 points for 'X' target which is present inside the unified target:

- Write the rule currentEvent.targetExists("X") && (currentEvent.targetAchieved("X")>=currentEvent.targetDefined("X")) in the rule-box.

- This time, select the specific target (aka 'X' here) in the 'Target(s)' drop-down after selecting the correct option (aka 'ABC' here) in the 'Milestones/Streaks' drop-down.

- In this case, pro-rated also will work as there is a source value.

Updated6 months ago