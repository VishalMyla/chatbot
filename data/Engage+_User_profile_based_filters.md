# User profile based filters

## Subscription Status

Lets you build an audience group based on their mobile number and email subscription status - Opt-in or Opt-out.

![919](https://files.readme.io/90ab173-HXLB6hNS5rzjWhVI9OABTMtEhWfG2Q4Zjw.png)

| Filter | Description |

| --- | --- |

| Channel (Subscription status for)* | Lets you build an audience group based on their mobile number and email subscription status.You can either Opt-in or Opt-out froma given channel. To learn more, seehere. |



[here](/docs/common-options-in-audience-filters#channel)

## NDNC Status

Lets you build an audience group based on NDNC (National Do Not Disturb) status, NDNC, Invalid, DND, and Unknown. You can select more than one option.

![926](https://files.readme.io/23df1c7-JpT1S66CXBNrQBIAKR7LwWiVZW_GFtLK4A.png)

| Filter | Description |

| --- | --- |

| Status* | You can create a group of audience members based on NDNC status (NDNC, Invalid, DND, or Unknown).You can select more than one option. To learn more, seehere. |



[here](/docs/common-options-in-audience-filters#ndnc-status)

## Fraud Customer

Lets you build audience groups based on their fraud statuses.

![924](https://files.readme.io/26552ab-MyZD_Ops_kEmt-3JHn1Wd9jCDw26D7BnjQ.png)

| Filter | Description |

| --- | --- |

| Status* | Consider the customer details based on fraud statuses.When creating an audience group, you can apply theFraud Customerfilter to exclude customers with certain fraud statuses. If you choose not to use this filter, the system automatically includes customers with statuses ACTIVE, FRAUD_SUSPECTED, SUSPENDED, NOT-CAPTURED, NOT-APPLICABLE, PENDING_DELETION, and INVALID.  Customers with all other fraud statuses are excluded from the group. |



## Demographic Details

Lets you build an audience group based on their demographic details such as language, gender, marital status, birthday, and city.You will only see demographic fields that are configured for your organization.

![934](https://files.readme.io/3248c94-mpcdzRe4q7oSrdqETad2G54uFRn4He_32Q.png)

| Filter | Description |

| --- | --- |

| Demographic* | You will see standard demographic fields such as Gender, Age, Marital Status, Birthday, and City along with custom fields and extended fields. The options will vary based on the selected filter.For example, for Gender, you will see Male, Female, Not Captured, Invalid, and Not Interested, whereas, for Marital Status, you will see Single, Married, Not Captured, Invalid, and Not Interested. You need to use these filters and options accordingly. |



## Unique Identifier

Lets you export an audience group with a specific identifier thatcontains,starts with,ends, orends witha specific keyword. You can also get customers with blank identifiers.

| Filter | Description |

| --- | --- |

| Identifier* | This filter can let you export an audience group with a specific identifier thatcontains,starts with,ends, orends witha specific keyword. You can also get customers with blank identifiers.To learn more about this filter, see here.(link)You can choose either mobile, email or external id. |



## Channel

This filter lets you build an audience list based on the channel in which they are available. Currently, EI supports the channels WeChat, Line, Web Engage, and e-commerce. You can filter customers from multiple channels. For example, you can fetch customers that are enrolled in any of the channels WeChat account, or Web Engage.

![726](https://files.readme.io/f194dc0-C6hV1-FyUwr6mHejfpiIz_x0BACzpbjvNg.png)

| Filter | Description |

| --- | --- |

| Channel* | You can further filter by how customers werecontacted through a specific communication channel(s) such as email, mobile, web engage, line, e-commerce, and WeChat. You can select one or more channels. |

| Available On | Lets you filter customers who have registered using the channel and are available on android, ios, mobile, email, WeChat, or any device. Click+/- Fields> SelectAvailable On. |

| Store Hierarchy | Lets you filter customers who have registered using the channel in the store or zone. Click+/- Fields> SelectStore Hierarchy.You can also select stores by zones and concepts.You can select the registered customer by using the hierarchy as a store, zone, and concept. |

| Duration | Lets you filter customers who have registered in the specified channel during that particular period. You can choose either between specific dates, after a specific date, or before a specific date.You can choose duration either bySpecific datesorRelative days. |

| Account Name | Lets you filter customers who have registered using the channel and account name(s). Click+/- Fields> SelectAccount Name(You can select one or more account name using the checkbox). |



[Specific dates](/docs/common-options-in-audience-filters#specific-dates)

[Relative days](/docs/common-options-in-audience-filters#relative-days)

## Custom Field

Let you build an audience list based on their custom field values.

![](https://files.readme.io/6740a56-dV00fFAWrCHw-mnQ9zcXLs5CkyCFs_IfyA.png)

| Filter | Description |

| --- | --- |

| Fields* | You can retrieve an audience list based on their custom field values.Click on the blank line to see the list of custom fields available for the org and select desired filters using the check-box.The options that appear for each custom field depend on the type of the input field and field values. |



## Global Test/Control

This filter lets you get an audience group that belongs to the global level test or control.

> 📘The customer list is split into the test group and control group using random sampling, which helps to determine the effectiveness of the campaign by comparing the results generated by the test group and control group. You can configure the test/control ratio in campaign settings for each organization.

## 📘

The customer list is split into the test group and control group using random sampling, which helps to determine the effectiveness of the campaign by comparing the results generated by the test group and control group. You can configure the test/control ratio in campaign settings for each organization.

![722](https://files.readme.io/988c4e9-u2gLUWzdmt46WcF3J__ONwCoyh5vne8q8A.png)

| Filter | Description |

| --- | --- |

| Belong to* | Select Test to get customers of the test group and Control to get customers of the control group.You can also Include or Exclude customers of the selected group(s) using the respective drop-down. |



## Age Group

This filter lets you filter customers by their age group and/or by their children's and spouses' age group. This filter supports age groups of customers and their families that are captured through extended fields and not through custom fields.

![952](https://files.readme.io/54506c6-9g5JNQsteogZGEdUgxX2vquJdhg8JIafMg.png)

| Filter | Description |

| --- | --- |

| Age* | This filter lets you filter customers by their age group. You can select more than one parameter (age, spouse age, child age). |

| Filter | You can also select the parameters likeyear,month, anddays.You can select the age range using the operatorsGreater than equal,Less than equal,Equals, and In the range of (this also considers the minimum and maximum age mentioned. |



## Slab Change

This filter lets you build an audience group with customers that moved from one loyalty slab to another (upgraded or downgraded from one slab to another) in a particular period.

![717](https://files.readme.io/4a62e2f-NyPvUG0wU0N_uvCmuK91jXrjG6Pvz347ow.png)

| Filter | Description |

| --- | --- |

| Slab Change* | To select your preferred slab change - from slab x to slab y. |

| During* | This lets you further filter customers whose slabs were changed during a specific period.You can either choose lifetime or duration. Duration could be Specific dates or Relative days.Lifetime will consider transactions of the customer from the time of enrolling into the loyalty program. |



Updated8 months ago