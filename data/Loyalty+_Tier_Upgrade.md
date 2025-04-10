# Tier Upgrade

A tier upgrade moves a customer from their current tier within aloyalty programto a higher tier which could have more benefits & incentives. Customers receive a tier upgrade when they meet specific eligibility criteria set within the tier configurations or sometimes via workflows (using upgrade-to-tier action).

> 📘NoteTier upgrades for a loyalty program can be configured in the advanced settings of the program. Refer to the documentation onadvanced settingsfor more information.

## 📘Note

Note

Tier upgrades for a loyalty program can be configured in the advanced settings of the program. Refer to the documentation onadvanced settingsfor more information.

# Prerequisites

Before configuring the eligibility criteria for a tier upgrade, ensure the following are met:

- Configure a loyalty program

- Create the tiers

- Create the trackers

# Eligibility criteria

A customer can receive a tier upgrade by meeting the eligibility criteria set in the program. The following are the criteria available currently for a tier upgrade:

## 1. Current points

Current points are the active points that a customer has at present. The customer must meet a certain threshold of points set by the loyalty program to qualify for the upgrade.

### Example

Consider the following case:

- Upgrade eligibility from a base tier to a higher tier:1000 points

- The points the customer holds at present:900 points

In this case, the customer must earn100 more active pointsto meet the criteria for upgrading the tier. When the customer meets the eligibility criteria of1000 points, they are upgraded to the higher tier.

## 2. Lifetime points

Lifetime points are the total points a customer has earned throughout their journey in the program. These include active, expired, and redeemed points. The customer must meet a certain threshold of lifetime points set by the loyalty program to qualify for the upgrade.

### Example

Consider the following case:

- Upgrade eligibility from a base tier to a higher tier:5000 lifetime points

- Total lifetime points customer earned:3500 points

In this case, the customer must earn1500 more pointsto meet the eligibility criteria. When the customer reaches5000 lifetime points, they are upgraded to the higher tier.

## 3. Lifetime purchases

Lifetime purchases are the total amount a customer has spent throughout their journey in the program. The customer must meet a certain threshold of lifetime purchases set by the loyalty program to qualify for the upgrade.

### Example

Consider the following case:

- Upgrade eligibility from a base tier to a higher tier:$5000 lifetime purchases

- Total lifetime purchases of the customer:$4000

In this case, the customer has to make a purchase of at least$1000to meet the eligibility criteria. When the customer reaches $5,000 in spending, they are upgraded to the higher tier.

## 4. Trackers

A tracker is a tool used to track custom values over a specific period and set it as an eligibility criterion for upgrading the tier. Custom values can include bill amount, gross bill amount, points, line item price, and number of customer visits to the store.

Up to three trackers can be defined for a tier upgrade.

Refer to the documentation ontrackersfor more information.

> 📘Note:When a tier program is updated to include a tracker as an eligibility criterion, the tracker will only track the customer’s previous custom values for tier upgrades. For tier downgrades and renewals, the tracker will start monitoring custom values from the date it was configured in the tier program.

## 📘Note:

Note:

When a tier program is updated to include a tracker as an eligibility criterion, the tracker will only track the customer’s previous custom values for tier upgrades. For tier downgrades and renewals, the tracker will start monitoring custom values from the date it was configured in the tier program.

### Example

Consider the following case:

- Eligibility criteria: number of customer visits to the store>4

- Tracking period:12 months

- The number of times the customer has visited the store in the last 10 months:4

In this case, the customer must visit the store again in the next two months to meet the eligibility criteria. When the customer visits the store and makes a purchase, the customer is upgraded to a higher tier.

If the customer returns their transaction made on the fifth visit, the value will be reduced to four visits. Consequently, the tier upgrade will be reversed, and the customer will be downgraded to the previous tier.

# Creating upgrade criteria

You can create dynamic upgrade criteria for tier upgrades by combining multiple criteria. You can define up to three eligibility criteria for a tier upgrade.

Three types of logical operations can be placed between these criteria depending on the use case:

## 1. Any (N-1) condition

TheAny (N-1)operation can define the number of conditions required to qualify for a tier upgrade. When this operation is applied, the customer must meet the specified number of criteria to qualify for a tier upgrade.

For example, assume there are 4 conditions/criteria defined in the eligibility criteria of the tier. Now, when the "ANY" is selected, the brand will have the following options:

1. ANY 1This is just like a simple 'OR' condition. Among the 4 conditions, the user has to satisfy any 1 condition.

1. This is just like a simple 'OR' condition. Among the 4 conditions, the user has to satisfy any 1 condition.

3. ANY 2Among the 4 conditions present, the user has to satisfy any 2 conditions.

1. Among the 4 conditions present, the user has to satisfy any 2 conditions.

5. ANY 3Among the 4 conditions present, the user has to satisfy any 3 conditions.

1. Among the 4 conditions present, the user has to satisfy any 3 conditions.

Note:As per the above example, there is no "ANY 4". This is because, if the user has to follow all the 4 conditions that are present, then it is like "ALL 4". That is why, the ANY will have values till (N-1).

To understand more about this, refer to the following example:Any condition example section.

![](https://files.readme.io/bbea5fd34238dfc74570f332bf6c1988ba1aa1b2c362f9d0dcb28970e4bce0e5-image.png)

![](https://files.readme.io/71c191a2fcf87db393fe56ec7e7b175ce38db19e563e927c6c5a524fc800a140-Frame_6.png)

## 2. All condition

If all the criteria must be satisfied to qualify for a tier upgrade, theAllcondition can be used. When anAllcondition is applied, the customer must meet all of specified criteria to qualify for a tier upgrade.

Refer to theAll condition example sectionfor more information.

![](https://files.readme.io/b01ab7c023d012f9a6977b676a69590c8b81344cf05f6966318063e5e145a452-image.png)

![](https://files.readme.io/6e124bbc004da21125c4b62defc8daff72cf62019d7db5d2d9f6534336a9fdb5-Frame_7.png)

> 📘NoteFor anAnycondition, the upgrade type must be the same for all criteria. Selecting multiple upgrade types is not supported.This is primarily because, if different upgrade types are used in different conditions, in the event of success there is no way for the system to know "which condition's upgrade" criteria it should follow.Refer to thetypes of tier upgradesfor more information.

## 📘Note

Note

For anAnycondition, the upgrade type must be the same for all criteria. Selecting multiple upgrade types is not supported.

This is primarily because, if different upgrade types are used in different conditions, in the event of success there is no way for the system to know "which condition's upgrade" criteria it should follow.

Refer to thetypes of tier upgradesfor more information.

## 3. Custom condition

Custom conditions allow you to create a combination ofAnyandAllconditions and define a custom expression for the eligibility criteria for a tier upgrade.

Refer to thecustom condition example sectionfor more information.

![](https://files.readme.io/7cb5879b33121f90199a41f041b220307de4444ef24377ed9f4296a36cf21114-image.png)

![Customer tracker with the condition `(A AND B) OR C`](https://files.readme.io/a15e28916663c8313777be6cab1cef781b55e5592d20c0f7fe241e10b440c780-Frame_8.png)

Customer tracker with the condition(A AND B) OR C

`(A AND B) OR C`

> ❗️ImportantAll expressions are evaluated from left to right.E.g.: The expressionA OR B AND Cis read as(A OR B) AND Cas it is evaluated from left to right.It is recommended to use parentheses()and define the operators in full (ANDorOR) or as (&&or||) when defining expressions to avoid ambiguity and ensure successful validation.Using a single&or|is invalid and unsupported.

## ❗️Important

Important

All expressions are evaluated from left to right.E.g.: The expressionA OR B AND Cis read as(A OR B) AND Cas it is evaluated from left to right.

`A OR B AND C`

`(A OR B) AND C`

It is recommended to use parentheses()and define the operators in full (ANDorOR) or as (&&or||) when defining expressions to avoid ambiguity and ensure successful validation.

`()`

`AND`

`OR`

`&&`

`||`

Using a single&or|is invalid and unsupported.

`&`

`|`

# Examples of tier upgrades

## 1. Any (N-1) condition

A brand has a travel rewards program that rewards customers and rewards a Platinum status for its most loyal customers. Platinum customers receive extra perks, such as larger discounts and access to premium partner hotels.

The criteria for reaching Platinum status are as follows:

- Earn1500 lifetime pointsby using the brand's services

- Take5 flightsin the last12 months

- Stay in3 partner hotelsin the last12 months

The brand has set anAny 1condition for the tier upgrade. This means that if a customer meets any one of the above criteria, they will be upgraded to the Platinum tier.

To create anAnycondition tier upgrade criteria, follow these steps:

1. Navigate toHome > Loyalty+from the InTouch portal.

Navigate toHome > Loyalty+from the InTouch portal.

2. Create or editan existing loyalty program andcreate the tiersif required.

Create or editan existing loyalty program andcreate the tiersif required.

3. Create and configureall the required criteria trackers.Creating a flight trackerCreating a hotel stay tracker

Create and configureall the required criteria trackers.

![Creating a flight tracker](https://files.readme.io/bfd4bb6d16cf7878673beae806aee92fc930dee88ccd6691590266a4cb97ca39-FlightTrackerEdited_-_Made_with_Clipchamp.gif)

Creating a flight tracker

![Creating a hotel stay tracker](https://files.readme.io/d851b069e1b9648060ee2509b57bb5fb5ba1b6da78f52c7598354af98b6fd483-HotelTracker_-_Made_with_Clipchamp.gif)

Creating a hotel stay tracker

4. Navigate to theAdvanced settingsfor the program to define conditions for a tier upgrade.

Navigate to theAdvanced settingsfor the program to define conditions for a tier upgrade.

5. Select+Trackerto add a new tracker and select theTracker,Tracking periodand theUpgrade type.

Select+Trackerto add a new tracker and select theTracker,Tracking periodand theUpgrade type.

6. SelectAnyas the condition once all the trackers have been defined.

SelectAnyas the condition once all the trackers have been defined.

7. Select the minimum number of conditions to be satisfied for a tier upgrade.

Select the minimum number of conditions to be satisfied for a tier upgrade.

![](https://files.readme.io/bbea5fd34238dfc74570f332bf6c1988ba1aa1b2c362f9d0dcb28970e4bce0e5-image.png)

1. Click onDoneto save the changes.

## 2. All condition

A gym has a fitness reward program that rewards regular customers. There are three tiers in the program: Pro, Elite and Ultimate. The Ultimate tier has the most perks: six free fitness classes per month and access to personal trainers.

The criteria for reaching the Ultimate tier are as follows:

- Accumulate2000 current points

- Workout at least15 timesin the last3 months

- Purchase gym accessories worth$500in the last3 months

The brand has set anAllcondition for the tier upgrade. This means that if a customer has met ALL of the above three criteria, they will be upgraded to the Ultimate tier.

To create anAllconditions tier upgrade criteria, follow these steps:

1. Navigate toHome > Loyalty+from the InTouch portal.

Navigate toHome > Loyalty+from the InTouch portal.

2. Create or editan existing loyalty program andcreate the tiersif required.

Create or editan existing loyalty program andcreate the tiersif required.

3. Create and configureall the required criteria trackers.Creating a workout trackerCreating a purchase tracker

Create and configureall the required criteria trackers.

![Creating a workout tracker](https://files.readme.io/838c3084505ab0d7454934156989917f0956a2ade15a8e86a0ed307dd1e855c4-GymVisits_-_Made_with_Clipchamp.gif)

Creating a workout tracker

![Creating a purchase tracker](https://files.readme.io/d181eb89689522e3bf1c317a98d0d2b34c05a19ca510a37c20beb8a98daf3016-GymPurchases_-_Made_with_Clipchamp.gif)

Creating a purchase tracker

4. Navigate to theAdvanced settingsfor the program to define conditions for a tier upgrade.

Navigate to theAdvanced settingsfor the program to define conditions for a tier upgrade.

5. Select+Trackerto add a new tracker and select theTracker,Tracking periodand theUpgrade type.

Select+Trackerto add a new tracker and select theTracker,Tracking periodand theUpgrade type.

6. SelectAllas the condition once all the trackers have been defined.

SelectAllas the condition once all the trackers have been defined.

![](https://files.readme.io/b01ab7c023d012f9a6977b676a69590c8b81344cf05f6966318063e5e145a452-image.png)

1. Click onDoneto save the changes.

## 3. Custom condition

An e-commerce site has a loyalty reward program that rewards regular users of the platform. The site offers a Plus status for its most loyal customers. Plus users receive extra perks, such as larger discounts and early access to sales.

The criteria for reaching Plus status are as follows:

- Accumulate3000 current points(A)

- Make at least5 purchasesin the last6 months(B)

- Spend over$1000in a single transaction (C)

The brand has set a custom condition with the expression(A AND B) OR Cfor the tier upgrade. The customer must meet both conditions A and B or meet condition C to be eligible. This means that if a customer has accumulated 3000 points AND made five purchases in the last six months, OR if the customer has spent over $1000 in a single transaction, they will be upgraded to the Plus tier.

`(A AND B) OR C`

To create a custom tier upgrade criteria, follow these steps:

1. Navigate toHome > Loyalty+from the InTouch portal.

Navigate toHome > Loyalty+from the InTouch portal.

2. Create or editan existing loyalty program andcreate the tiersif required.

Create or editan existing loyalty program andcreate the tiersif required.

3. Create and configureall the required criteria trackers.Creating a customer purchase trackerCreating a tracker for purchases over $1000

Create and configureall the required criteria trackers.

![Creating a customer purchase tracker](https://files.readme.io/e31665a87b86e8883b2dc3ace472b1dbe9872bbbd0462501f799b507ebc2f8f7-5purchases_-_Made_with_Clipchamp.gif)

Creating a customer purchase tracker

![Creating a tracker for purchases over $1000](https://files.readme.io/04459f806f6436c80264f903bfd067f5a8b04c7ccd32faa00500cfc7505b1e7c-1000purchase_-_Made_with_Clipchamp.gif)

Creating a tracker for purchases over $1000

4. Navigate to theAdvanced settingsfor the program to define conditions for a tier upgrade.

Navigate to theAdvanced settingsfor the program to define conditions for a tier upgrade.

5. Select+Trackerto add a new tracker and select theTracker,Tracking periodand theUpgrade type.

Select+Trackerto add a new tracker and select theTracker,Tracking periodand theUpgrade type.

6. SelectCustomas the condition once all the trackers have been defined.

SelectCustomas the condition once all the trackers have been defined.

7. Define the expression for the custom tier upgrade under theExpressionsbox.

Define the expression for the custom tier upgrade under theExpressionsbox.

> ❗️ImportantAll expressions are evaluated from left to right.For example, the expressionA OR B AND Cis read as(A OR B) AND Cas it is evaluated from left to right.It is recommended to use parentheses()and define the operators in full (ANDorOR) or as (&&or||) when defining expressions to avoid ambiguity and ensure successful validation.Using a single&or|is invalid and unsupported.

## ❗️Important

Important

All expressions are evaluated from left to right.For example, the expressionA OR B AND Cis read as(A OR B) AND Cas it is evaluated from left to right.

`A OR B AND C`

`(A OR B) AND C`

It is recommended to use parentheses()and define the operators in full (ANDorOR) or as (&&or||) when defining expressions to avoid ambiguity and ensure successful validation.

`()`

`AND`

`OR`

`&&`

`||`

Using a single&or|is invalid and unsupported.

`&`

`|`

1. Select ✔ to validate the expression.

![](https://files.readme.io/7cb5879b33121f90199a41f041b220307de4444ef24377ed9f4296a36cf21114-image.png)

1. Click onDoneto save the changes.

# Types of tier upgrades

The classification of tier upgrades depends on how points are awarded when a transaction occurs at the eligibility threshold between two tiers.

Consider the following case:

| Tier | Reward percentageper purchase amount | Lifetime purchase requirement |

| --- | --- | --- |

| Silver | 10% | - |

| Gold | 20% | >= $10000 |

| Diamond | 30% | >= $15000 |



In this case, there are three tiers in a loyalty program: Silver, Gold, and Diamond. The Silver tier awards 10% points for every transaction amount spent, Gold awards 20%, and Diamond awards 30%.

A customer is currently in the Gold tier with a lifetime purchase value of $14,000 and the criteria for upgrading to the Diamond tier is a lifetime purchase requirement of $15,000.

The customer now makes a transaction of $2000.

In this situation, you can award points to the customer in three ways:

1. Issue points and then upgrade to the next tier (Lazy):Award points based on the current tier before upgrading. In this case, the customer receives the benefits of the Gold tier, which amounts to 20% of $2000, that is 400 points, and is then upgraded to the Diamond tier.

2. Upgrade to the next tier and then issue points (Eager):Upgrade the tier first, then award points based on the new tier. In this case, the customer is upgraded to the Diamond tier and is then rewarded with points equal to 30% of $2000 that is 600 points.

3. Issue points, upgrade tier, and then issue remaining points (Dynamic):Award points for the portion of the transaction that qualifies for the current tier, then upgrade the tier and award points for the remaining transaction amount. In this case, the customer earns 200 points for the initial $1000 transaction and then advances to the Diamond tier. Afterward, within the Diamond tier, the customer earns the remaining 300 points for the additional $1000 transaction amount.

> 🚧Impact on tier upgrades on returning a transactionIf a customer returns a transaction that resulted in a tier upgrade, the upgrade will be reversed, and the customer will be downgraded to the previous eligible tier.

## 🚧Impact on tier upgrades on returning a transaction

Impact on tier upgrades on returning a transaction

If a customer returns a transaction that resulted in a tier upgrade, the upgrade will be reversed, and the customer will be downgraded to the previous eligible tier.

Updated6 months ago