# Advanced Loyalty Features

## Overview

Large enterprises that are global in nature have complex structures. For example, theymay have multiple brands, franchisees, or other partners who have different outlets. They may also have brands spanning multiple countries and want a program that supports all of these different spectrums.

As companies move towards giving customers a global experience they may want a situation where a customer signed up in Country A, they can go to Country B and say they are a member and then redeem the points they earned in Country A. This would mean that a member of the topmost tier would receive all of the perks, no matter which country the member traveled to and that is a very attractive incentive that can be provided to customers.

> 📘An org cannot have one program for a zone and another for a concept.

## 📘

An org cannot have one program for a zone and another for a concept.

> 📘In MLPs, you have a single customer database for different programs across different industries, countries, etc.

## 📘

In MLPs, you have a single customer database for different programs across different industries, countries, etc.

# Use Cases

- Conglomerate businesses that have multiple brands ranging from, say, apparel to pharma and healthcare. All of these kinds of businesses may be experiencing very common programs like cash back or gift vouchers and other programs like that and multiple different brands across industries can come together and form a single program where customers can earn in one program. Also, using MLPs, these brands can have their own tier and earn conditions.

- Global companies can run cross-border loyalty program each with their own local flavors

- Brands can cater to different customer segments and needs by having multiple types of memberships

- For programs created through multiple partnerships that are integral parts of the program

### Basic concepts of Multi-loyalty Programs.

- An org will have a Default Loyalty Program (org level program) that is created while setting up the org on InTouch.

- The Default Loyalty Program is applicable to all zones/concepts and the individual loyalty program is applicable to the zone/concept/card series. So a zone or concept can have two loyalty programs - one is the program created for that particular zone/concept and the other is the default program.

- Based on the Till from which an event is triggered, the system identifies the respective zone/concept and initiates the loyalty program associated with it.

- If an event such as a transaction or registration is triggered, the system first identifies the loyalty program associated with the Till and executes the rules and actions associated with the program.

- If two programs are identified, then the system executes both programs.

- Strategies or configurations of a loyalty program will be applicable only for that program.

### Limitations of MLP

- For an org, you can create programs either on concepts or zones but not both.

- A zone, concept, or card series can have only one loyalty program (excluding the default program).

- A store or Till cannot have multiple loyalty programs (excluding the default loyalty program).

- Product category/brand-based loyalty program configurations are not available.

- Points or coupons are redeemed from one program at a time.

- Multiple currencies are not supported across loyalty programs.

- An org can either have zone-based, concept-based, or card-series-based loyalty programs. You cannot have one with concept-based (OU) and another with card-based.

### Transaction Behavior

- New Transaction- Once a transaction is made, the corresponding programs are identified, and accordingly “new transactions” rules will execute.

- Transaction Update- Any transaction update event will only pass through the corresponding program that is configured for the till from which the update event is initiated. In case the transaction add and transaction update tills are different then rules will run for the program where the transaction has originated.

- Transaction Return- For the Transaction return event, the rules are executed from the program where the purchase was made, not where the return is made. For example, if a customer transacts at till 1(Program 1) but returns products at till 3 (Program 2), in this case, the return rules are executed from Program 1, not from Program 2.

## Types of multi-loyalty program

### OU-based Loyalty

Each loyalty program needs to be configured in the system and there should be a defined boundary between each program. For example, if a conglomerate wants to run different brands, sayTrends,Jewel, andFoodworld, working across zonesEast,West, andSouth. In this case, conglomerates can either run loyalty programs at a brand level (concept) or zone level.

Also, if an org runs in different countries, you can run a separate loyalty program for each country. The following are the different functionalities supported for an org that runs in different countries. For details, see here.

##### Independent Programs for each of the countries.

- Separate earning rules and tiers across countries.

- Separate redemption rules across countries.

- Separate points-to-currency ratio.

##### Independent Programs for each of the countries + 1 Umbrella Program

- Separate earning and redemption rules for independent programs.

- Additionally, One umbrella group program for a group of countries.

- Earn points in the umbrella group program on purchases in any of the countries.

##### Unified/Single Group Program

- Separate earning rules and tiers across countries.

- Single points balance for the end customer.

- A common set of redemption rules across countries.

- Single points-to-currency ratio.

Other types of loyalty programs that brands can achieve through MLP.

- Multi-Currency and Multi-Country Programs

| OPTION | DESCRIPTION |

| --- | --- |

| Bill Amount | Captures in local currency and uses conversion ratio for local-to-base currency conversion. |

| Bill Amount in Loyalty | Points on a bill amount in on the base currency. |

| Points Earning | Points on a bill amount in on the base currency. |

| Upgrade on Amount | Earning of points/bill amount in base currency or based on the custom field of bill amount in local currency. |

| Points Redemption across Programs | Single redemption across programs with single points-to-currency conversion (upcoming). |

| Points Redemption Discount | Currency is not applicable for points discount. |



### Card-based Loyalty

A group company issues multiple loyalty cards of that org and a customer could have one or more loyalty cards that they can use across countries. The loyalty benefits such as points balance, earning rules, redemption rules, tiers, etc - are associated with a loyalty card (and not a country). For details, seecard series overview,create card series,generate a card numberandissue a card to a customer.

# Getting Started

All orgs start off with a single Loyalty Program - this is and becomes the “Default” program for the org.Once you ascertain the need for an MLP and it has been subscribed - raise a request via JIRA to enable MLP specifying the type of MLP needed (Note: The type can’t be changed later on)You can then start creating more programs and mapping different card series, concepts or zones to the new programs

- You can’t change the mapping once set so take care to set this up properly

- One program can have multiple zones, concepts or card series mapped to it, but one zone/concept or card series can only be mapped to a single program

![](https://files.readme.io/5b6b45d-Screenshot_159.png)

This graph shows the KPI trend for the whole org, not individual org units.

![](https://files.readme.io/f2e1225-Screenshot_160.png)

## Create Zone/Concept/Card series based Loyalty Program

Before creating a new program for the org, you need to create a ticket to the support team or PM team requesting your preferred categorization - on what basis do you want loyalty programs to be created for your org. You can have zone, concept, or card series.

To create a loyalty program for an Org Unit, follow these steps.

1. Log on toInTouch.

2. In the menu, clickLoyalty+.

3. ClickCreate Programto create a new program.

![1223](https://files.readme.io/255c106-NW4S_7Tp13QXUtW2vKFhqPboszb-t7px7Q.png)

1. On theCreate Program page, enter the program details. Refer to the table for field descriptions

![329](https://files.readme.io/d4e383c-y6qnC5msqla9zEmQ7fea2RIPt-isn6JFHg.png)

| OPTION | DESCRIPTION |

| --- | --- |

| Name | Specify a name for the current loyalty program.Special characters such as:! @ # $ % ^ & \* ( ) - \_ = + \\ | [ ] { } ; : / ? . >are unsupported. |

| Description | Enter a short description of the program. |

| Add contributors | Add the capillary POCs that you want to notify on modifications in the loyalty program (reconfigured). |

| Select Entities | You will see either zones, concepts, or card series based on the org's program type.Add zone(s), concept(s), or card series that you want to associate with the current loyalty program.SelectingROOTselects all the listed options. |



```
! @ # $ % ^ & \* ( ) - \_ = + \\ | [ ] { } ; : / ? . >
```

1. ClickSave. A blank loyalty program is created without any configurations.

2. If the program is inactive, select the program and clickSaveon the activation prompt that appears.

![394](https://files.readme.io/f247dca-8M6dhr9RTfouomkt3il7N12tVB1Kq3bCsw.png)

1. Once the program is enabled, click on the program to open and clickEdit program.

![655](https://files.readme.io/cb47f33-2dClCkLLR9t0-exWmbkuOYbkAxhRpIBOEQ.png)

> 📘To modify details of a loyalty program, clickEdit program.While configuring ensure that there is no overlap between the two loyalty programs.To inactivate a loyalty program, open the program > Click on theEditicon > DisableActivate Program> ClickSave.

## 📘

- To modify details of a loyalty program, clickEdit program.While configuring ensure that there is no overlap between the two loyalty programs.To inactivate a loyalty program, open the program > Click on theEditicon > DisableActivate Program> ClickSave.

- While configuring ensure that there is no overlap between the two loyalty programs.

- To inactivate a loyalty program, open the program > Click on theEditicon > DisableActivate Program> ClickSave.

![317](https://files.readme.io/5ec0405-yn7WWqts-hMQUyo4IQn2TjFNk50ncEiyDQ.png)

- Customer activities: For any activity such as transaction and customer update, first, the relevant programs will be identified and then the configured rules and actions will be executed for that particular program.

> 📘The default program will always be executed. However, if the event also matches with any other non-default program, that will also be executed.

## 📘

The default program will always be executed. However, if the event also matches with any other non-default program, that will also be executed.

- Get Details (API): Whenever any information such as Current points, tier, and the bulk call is required, either the calling module will pass the corresponding program or the system will identify the corresponding program from the configuration and pass the relevant value to the caller.

# Significance of Default Program

All customer activities and events will necessarily be “evaluated” by the default program, so the default program acts as sort of the global or umbrella program for MLP setups

- Actions and configs wrt to umbrella program type setting need to be configured inside the default program (e.g. group redemptions)

- As of now, Referral and User Group based Loyalty are only supported inside the Default Program

In addition to the default program, one other program is also evaluated based on the store concept, zone or card series used. For concept, if a customer shops in a grocery chain, they would be added to that program. For zone, if a customer shops in, say, west Singapore, they wuld be added to that program. For cards, it depends on the type of card that is presented.

# Points in MLP

## Earn Anywhere, Burn Anywhere

The points awarded from programs along with the earn conditions, and expiry conditions are all contained in sort of individual “accounts” as part of the programHowever MLP allows a feature of allowing the points to be used in a fungible manner across all the programs at the time of redemption or transferStep 1: Navigate to the Default Program > Workflows

Step 2: Select thecurrentEventactivity, and set the ruleisGroupProgramRedemptionto True.

`currentEvent`

`isGroupProgramRedemption`

Step 2: Select the the “Redeems Points” customer activity

Step 3: Add the action “Redeem group points”

(the default redemption strategy would be decided based on the program strategy)

Step 4: Repeat the same for “Transfer Points” activity as well using the “Transfer group points” action

Step 5: In the API for redemption use the parameter ”group_redemption”: true  and for transfer use ”groupProgramTransfer”: true  in the request body

Note: The system automatically chooses the earliest expiring points across all programs to redeem or transfer and in case of transfers the points are transferred to the default program of the recipient

## Single Rolling Expiry

The basic option of rolling expiry works only for “Makes a transaction” event and works only for the points within that particular programWhat if you want to have points rolling together across all programs for different events - single rolling expiry helps to achieve this (this is not present inside Loyalty+ right now, you would need to go to organsation settings)

Step 1: Navigate to the Organisation Settings > Miscellaneous > Points Management > Single Points Expiry

Step 2: Check the option to enable Single Rolling Expiry across programs

You can define the rolling period in Days or Months - The period configured here will now override the duration configured inside the Rolling Expiry conditions

You can also select the various events that will cause points to roll across all programs

Note: This setting continues to roll only the points that were awarded using some rolling expiry condition, all other points do not roll

![](https://files.readme.io/225be70-Screenshot_158.png)

## Configure Strategies

1. Points Allocation Strategy: Each program has its own points allocation strategies. A point allocation strategy can be created and used within a program. The allocation strategy of one program cannot be used in any other program, not even within the Default Program. To know how to create Points Allocation Strategies, clickhere.

2. Points Expiry strategy: Each program has its own points expiry strategy. A point expiry strategy can be created and used within a program. The expiry strategy of one point cannot be used in any other program, not even in the Default Program. To know how to create Point Expiry Strategy, clickhere.

3. Points Redemption Strategy: Each program has its own points redemption strategy and points to currency conversion ratio. The redemption strategy of one program cannot be used in any other program, not even in the Default Program. Points redemption strategies can be created and used within a program. To know how to create points redemption strategies, clickhere.

- While making redemption, the caller has to specify from which program and how much point needs to be redeemed. Whenever a redemption call is made and the program id is not passed, the points will deduct from the program/till where the redemption call is made.

1. Manage Trackers: Trackers created within a program can be used and evaluated within the program. It will work the same as in the case of a single loyalty program. Tracker of one program can not be used or evaluated in any other program, not even in the default program. To know more clickhere.

2. Customer Registration: Customer once registered in any program by default will register across brands in the org but the enrollment will be done only for the program where the till belongs to.  Enrollment in other brands will not happen till the customer makes a transaction in that program.

3. Customer updates: Customer update events will pass through all the programs which as associated with the till from where the event is fired. So if the Org wants to allocate points to the brand loyalty program or Default program, then they have to write rules on the brand loyalty program and Default program as well.

4. Manage Tiers: Tiers for each program can be created within the program and they work within the program only. Clickhereto know more.

## Configuring Rules/Sets

Rule and set configuration need to be configured at the program level depending on the requirement. The rules configured for lifetime purchases, current points, and no. of transactions, are always in the context of the program.

For example, let's assume a customer has made 6 transactions across the organization in different tills/stores.

If one writes a rule within program 1 oncurrentcustomer.lifetimepurchase, it will be evaluated on 1200, and on program 2, it will be evaluated on 900. Moreover, each program will have over customer KPIs such as Lifetime purchase, current points, lifetime points, trackers Visit count, and the number of transactions. Clickhereto know more.

## View Loyalty Details on Member Care

You can see program-wise (including Default Program) details of a customer with program-level KPIs in Member care and Binary.

![1279](https://files.readme.io/293a704-fwA3bQSSPvK8wtKpdvfO3KITcSgmt9H9bg.png)

![1267](https://files.readme.io/574cf84-fdPDXiDKa7Lnfk2Lb1RZUjaOwv4JLaOP8g.png)

# Handling MLP Integrations

Customer EnrollmentsCDP Registration and Program enrollment are distinct events and customers will have to be individually enrolled in each program

For Card series, an additional integration option will be to use thehttps://{host}/v2/customers/{userId}/changeIdentifierAPI to add a new card from that card series to the customer to enrol them to that program

Note: Enrolling customers across multiple brands, countries and programs will be subject to local state, country and global laws on privacy and consent - please ensure they are adhered to at the time of integration

## Posting transactions and events

Transactions and other events posted via APIs are always evaluated by the default program and resolved & evaluated by any 1 other non-default program based on the till_id or store code associated with the authorisation used - this is in case of zone or concept based MLP

Note: In case invalid or non-existent till code is passed while using oAuth then system would assume the admin till and process the event only within the default program

In case of card series based MLPs, during integration it has to be ensured that the card number is used as the identifier across all available events - this causes the right program to be chosen for evaluation based on the card series.

Note: In case the card number is not passed, then the event will only be evaluated by the default program

## Fetching MLP details

Most Fetch APIs by default will only provide the loyalty details of the default program for the customer when fetchingWatch for explicit parameters in the request to fetch details across all programs or other programsThe exact param would be different across different APIs - so please refer to the documentation for each APIMost APIs will also commonly support program_id as a query parameter to pass the program ID and get the specific details for that particular programFetching details across multiple programs in a single request can result in bulky responses that can be slow and increase network costs, instead try to use one program at a time as needed and use light APIs whenever available (e.g. points expiry schedule, tier details, etc.)

# FAQs

Can a TILL have two loyalty programs?

No. For an org, a loyalty program can be created either for a zone or concept but not both. For example, an org cannot have one loyalty program for a zone and another for a concept.

What is the default loyalty program?

It is the base loyalty program of the org which is created by default, all zones/concepts of an org are part of the default program as shown in the illustration. Default programs work as a normal program with its own slab, strategies, and rules.

> 📘All programs of an org, either default or brand specific one, runs independently and are not related or dependent on other programs.

## 📘

All programs of an org, either default or brand specific one, runs independently and are not related or dependent on other programs.

Can points earned in one program be burned in another program?

Yes.

Can points earned in one country be burned in another country for the same org?

It completely depends on the implementation.

Can we change the default loyalty program?

No. Default loyalty program is created at the org level once the Loyalty module is enabled for that org. Every brand (concept/zone) can have only one loyalty program (except the default program). You can create slabs, points strategies, and rules for each program just like a normal loyalty program

Can multiple programs run on a same till?

No

What if a store that is mapped to a zone changes through import?

Program will work as per new zone loyalty configuration and you can fetch customer details program wise. However, the loyalty details such as points earned, points burned are still associated to the previous program.

Will there be any change in  Sharingan for MLP?

No changes are required for the existing functionalities. However, if MLP is required, then integration needs to be changed accordingly.

Will there be any change in e-com for MLP?

No changes are required in the existing functionalities. However, if MLP is required, then integration needs to be changed accordingly.

How to use APIs in case of cross-brand redemption?

You have to pass the program id from which the redemption is required, if program id is not passed then it will try to redeem from the till's program.

If no program id is passed while redeeming points, from which program the points will be deducted?

Points are deducted from the non-default loyalty program which the current TILL is mapped to. However, if the till is not mapped to any loyalty program, points will be deducted from the default program.

What should I do when I get an errorgroup redemption action executed for non group redemption payload?Make sure that you have set the following:

- Make sure that the configENABLE_GROUP_PROGRAM_REDEMPTIONis enabled.

`ENABLE_GROUP_PROGRAM_REDEMPTION`

- Make sure that theparameter group_redemptionis set to true`.

`parameter group_redemption`

- Make sure that the loyalty workflow rulecurrentEvent.isGroupProgramRedemptionis set to true.Group redemption event configured under loyalty workflow and enabled the group redemption option and also enabled the “allow skipping validation” under redemption setting for marvel api to work….Is there any other configs..According to the system, for group program redemption scenario to be handled properly, there has to be a rule called “currentEvent.isGroupProgramRedemption” set properly in the condition, and depending on whether it is true or false, the appropriate redeem points action should be set for it, as can be seen here from the screenshot.

`currentEvent.isGroupProgramRedemption`

Updated5 months ago