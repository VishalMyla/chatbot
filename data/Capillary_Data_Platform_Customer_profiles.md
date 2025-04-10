# Customer profiles

When you import data to the local database, you will see the list of errors, auto-corrections, and download report option. You can download the entire report. The following table provides the list of errors that could encounter while importing for the customer.

## Error Description

To know about supported fields and template configuration for each profile, skip to the next section.

| Error | Explanation |

| --- | --- |

| When different users are linked with the email | Email is already present for some other registered user in the system |

| When an error on duplicate external id occurs | All records would be rejected |

| When an error on duplicate value for mobile in the file occurs | All records would be rejected |

| When an error on duplicate value for external_id in the file occurs | All records would be rejected |

| When an error on duplicate value for an email in the file occurs | All records would be rejected |

| When a different user is linked with the mobile | Mobile number is already registered for a different user in the system |

| When different mobile is linked with the users | Since the mobile number is not allowed to update though import, trying to update an existing mobile for a user leads to such error |

| Different external id linked to the user | The external id already exists in our database or the external id is associated with a different user |

| Invalid Mobile Number | Check the pre-configured mobile regex for brand |

| When a different user gets linked with the external id, duplicate value for mobile in a file, duplicate value for an email in file occurs | External ID / Card number is already registered for a different user |

| Invalid email id | Deviation from standard Email regex |

| Deactivated user / Fraud User | The user is inactive or marked as fraud (as per brand requirement) |

| When customer name contains special characters | Customer Name should not contain any special characters other than alphabets/space |

| join_date is invalid/null/void/of future date | Invalid join date |

| join_store is invalid/null/void | The store(s) specified in the file are not present in the system |



## Card Import

Lets you import the historical data of customer’s card details

Setup ImportTo set up the import, follow these steps.

- In Choose profile, select Card Import profile to create an import template.

![473](https://files.readme.io/ac7769b-setup_import.png)

- In Choose template, select template using the drop-down options. If no template available in the drop-down option, follow these stepsIn Create new template, enable the checkbox to create a new template.In Name of the template, enter the name of the template.

- In Create new template, enable the checkbox to create a new template.

- In Name of the template, enter the name of the template.

- Click Submit.

Template ConfigurationTo configure the template, follow these steps.

- InChoose customer's unique identifier, select customer identifier that is present in the CSV file -mobile, email, external id, user id.

- InLink user, enable the option to tag the customer.

- ClickSubmit.

Configure Field MappingThe following are the fields to map with the CSV headers(column names).

| Field | Description |

| --- | --- |

| Card Number(Number) * | The unique number of the card as per the card series configuration. |

| Card Series Code(Series Code) * | The unique code (supports up to 50 characters) for the card series. Only alpha-numeric is allowed. |

| Card Status Label(Status Label) * | Current user-defined status of the card. Check your user-defined values for the system values (not issued, active, inactive, deleted, expired). |

| Till IUN Or Store Ext Id(Store Code) * | The unique identifier of the Till or store which is tagged to the card series. |

| User Id | The unique code to identify the customer to whom the card is allotted. |

| Mobile | The mobile number of the customer to whom the card is allotted. |

| External Id | The external ID of the customer. |

| Email | Email address of the customer to whom the card is allotted. |

| Card External ID(Card External Id) | This is the external reference ID of a card provided by the Org. |



Note: * Mandatory field.

CSV Sample:

Card Number,Card Series Code,Card Status Label,Till IUN,Mobile,Email,External Id,User Id,Card External ID

GOLDPHY2TT12311,GOLDPHY2,NOT_ISSUED,1234,8765433279,[email protected],WA8765433279,1234234,E34334

## Card Series Import

Lets you create new card series for the organization or organization units. For example, value cards, premium cards, digital cards, physical cards, and many more cards.

Card series stores information such as card series name, the procedure to create card numbers for the card series, card expiry date or time period, and more.

The following are a few more information stored on the card series.

- Card series name

- Card series code

- Card number generation configurations

- Card expiry configuration

To auto-generate the card for the series set the Card Generation Enabled field value - true.

Setup ImportTo set up the import, follow these steps.

- In Choose profile, select Card Series Import profile to create an import template.

![508](https://files.readme.io/cbf5247-import.png)

- In Choose template, select template using the drop-down options. If no template available in the drop-down option, follow these stepsIn Create new template, enable the checkbox to create a new template.In Name of the template, enter the name of the template.

- In Create new template, enable the checkbox to create a new template.

- In Name of the template, enter the name of the template.

- Click Submit.

Template ConfigurationTo configure the template, follow these steps.

- In Select fields to be Update, add or remove your preferred fields to update.

![503](https://files.readme.io/6a9d8fe-configure.png)

- ClickSubmit.

Configure Field MappingThe following are the fields to map with the CSV headers(column names).

| Field | Description |

| --- | --- |

| Card Series Code(Series Code) * | Unique code (supports up to 50 characters) for the card series. Only alpha-numeric is allowed. |

| Expiry Days | Validity of the card series in the number of days from the issued date. |

| Card Type * | Type of the card. For example, PHYSICAL (for physical cards), DIGITAL (for digital or soft copies). |

| Card Suffix | Ending characters of a card series. |

| Card Prefix | Starting characters of a card series. |

| Card Length | Length of the card series number. For example, on a credit or debit card you can see 16 digits of the card number. |

| Card Generation Enabled | Enter the value as true to auto-generate cards for the series, false to generate cards manually. |

| Till IUN Or Store Ext Id(Store Code) * | Unique identifier of the Till or store which is tagged to the card series. |

| Card Series Description(Description) | Description of the card series. |



Note: * Mandatory field.

CSV Sample:

Card Series Code,Card Series Description,Card Type,Card Generation Enabled,Card Suffix,Card Prefix,Card Length,Expiry Days,Till IUN

GOLDPHY2,Gold Card,PHYSICAL,true,2021,GOLD2,16,1000,1234

## Coupon Redemption

This profile allows you redeem coupons offline. To redeem coupons in bulk, create a CSV file with the following fields

- Voucher Series Id*

- Voucher Code*

- Store's External ID/ Store Terminal User Name*

- User Identification Input*

- Date of Redemption*

- Transaction Number*

- Transaction Amount

- CSV Sample:

Coupon Series Id(Voucher Series Id),Coupon Code(Voucher Code),Till IUN,User Identification Input,Redeemed Date,Transaction Number(Bill Number)5309,7003008,mal1,919900111111,12/15/2016 15:06

#### Template Configuration

![588](https://files.readme.io/388f942-TemplateConfiguration.png)

| OPTION | DESCRIPTION |

| --- | --- |

| Disable existing data updation | Check this box to not allow updating existing details |

| Denote stores by external ids | Check this box if the stores of the organization use store external ids as store codes |

| Select fields to be updated | Add fields that you want to allow updating for the current profile template |

| Validate Transaction Number | Check this box to validate transaction numbers before saving to the database |

| Choose customers' unique identifier | Choose the unique identifier of the customer used at the organization |

| Do not check redemption range | Check this box to disable validating redemption date range |

| Replace invalid voucher series id with | Choose the coupon series id that you want to replace with in place of invalid series ids identified in the import |

| Append country code to the mobile number automatically | Check this box to prefix the base country code of the org's base country wherever mobile numbers without country code are identified |



## Customer Status Import (Customer Status Update)

Lets you update customers` status labels.

The following are the supported fields for the profile.

- Customer identifier* (user ID/email ID/external ID/mobile)

- Customer Status Label* - New status label of the customer

- Till IUN Or Store Ext Id(Store Code)   - to associate with the update action.

CSV Sample:

Mobile,External ID,Status Label,StoreCode,

91982737437,Active,store.4683

Setup Import

To set up the import, follow these steps.

- In Choose profile, select Customer Status Import profile to create an import template

![588](https://files.readme.io/47ef9f7-setup.png)

- In Choose template, select template using the drop-down options. If no template available in the drop-down option, follow these stepsIn Create new template, enable the checkbox to create a new template.In Name of the template, enter the name of the template.

- In Create new template, enable the checkbox to create a new template.

- In Name of the template, enter the name of the template.

- Click Submit.

Template ConfigurationTo configure the template, follow these steps.

- In Choose customers' unique identifier, select your preferred customer's identifier - *Mobile, External ID, User ID, and Email.

- 

![450](https://files.readme.io/86613bb-email.png)

- Click Submit.

Configure Field MappingThe following are the fields to map with the CSV headers(column names).

| Field | Description |

| --- | --- |

| User Id | The unique code to identify the customer. |

| Mobile | The mobile number of the customer. |

| External Id | The external ID of the customer. |

| Email | The email address of the customer. |

| Customer Status Label(Status Label) | Current user-defined status label of the customer.Check user-defined values created for each standard status (Active, Suspended, Deleted, Fraud Suspected, Fraud Confirmed, and Internal).To know more, see create customer status labels. |

| Till IUN Or Store Ext Id(Store Code) | The unique identifier of the Till or store that is tagged to the customer. |



Note: * Mandatory field.

## Entity Life Cycle

Lets you map customer registrations with the source registration events of the org such as WeChat Follow, and WeChat Register.

The following are the supported fields for the Entity Life Cycle profile.

- Entity Type*

- Entity ID*

- Org Source ID*  (ID of the source through which the customer is registered)

- Activity* (Activity for which the customer is registered)

- State*

- Added by*

- Reference ID*

- Updated on*

## Loyalty Customers

This profile is used to manage loyalty customers - add new customers or update existing customers' profiles. Apart from the standard fields specified below, you can also add custom field values and customer-level extended field values. The CSV file of loyalty customers should contain the following fields.

- Mobile no./External id* (Email id that represents unique customer identity)

- Store's External ID/ Store Terminal Username*

- Registration date

- First Name

- Last Name

- Email ID*

- Mobile No.*

- Loyalty Points

- Lifetime Points

- Lifetime Purchases

- External ID*

- Date of Joining

- Store Code*

- Slab Name

- User ID** (required to update existing customer profile)

CSV Sample:

First Name,Last Name,Mobile,Email,External Id,Till IUN Or Store Ext Id

Tom,Sawyer,9900111111,[email protected],lb67p,mal

Template Configuration

![820](https://files.readme.io/d8fbb3e-submitttt.png)

| Option | Description |

| --- | --- |

| Disable existing data updation | Check this box to not allow updating existing customer details |

| Disable updation of custom fields with empty values | Check this box to not allow updating custom field values with null values |

| Select fields to be updated | Add the fields that you want to allow updating for the current template |

| Replace invalid store names with | Choose the store that you want to replace with wherever invalid stores are identified |

| Append country code to the mobile number automatically | Check this box to prefix the base country code of the org's base country wherever mobile numbers without country code are identified. |

| Disable mobile number validation | Check this box to disable validating mobile numbers while registering customers (through the current import) |

| Disable email id validation | Check this box to disable validating email ids while registering customers (through the current import) |

| Denote stores by external ids | Check this box if the stores of the organization use store external ids as store codes |

| Choose customers' unique identifier | Choose the unique identifier of the customer used at the organization |



## User Subscription (Subscription Service New)

This profile is used to update the status of the subscription of customers for different channels. You can only use mobile numbers and email IDs that are registered in the org. Extended fields update also has Replay option - When an import job is failed to upload from the temporary database to the main database for some reason, the system retries to upload for up to three times, until successful upload. If the import fails even then, you have an option to manually retry in the import details using Click to Replay on the Import File Details page. This option is available for up to seven days.

![1036](https://files.readme.io/ae88265-profit.png)

Template Configuration

![273](https://files.readme.io/01d6804-subm.png)

- In Select the user input type, select the unique identifier of customers used in the CSV file (MOBILE/EMAIL/ETERNAL ID/USER ID)For bulk subscription update, create a CSV file with the  following fields.

| Field | Description |

| --- | --- |

| Account Name | Required for channels with multiple accounts. |

| Org Unit or Concept Code | Concept code or org unit code for which you want to update subscription details. |

| Comm Channel* | The communication channel for which you need to update customer subscription status.Supported values: line, mobile, email, whatsapp, ios, android, postmail, mobilePush |

| Priority* | Type of message to update status.Supported values: TRANS, BULK |

| Sub Status* | The new status of the channel.Supported values: OPTIN, OPTOUT |

| Mobile* * | Mobile number of the customer. This is required if  Select the user input type inTemplate Configuration is Mobile. |

| External ID** | External ID of the customer. This is required if  Select the user input type in Template Configuration is External_ID. |

| User ID** | User ID of the customer. This is required if  Select the user input type in Template Configuration is User_ID. |

| Email** | Email ID of the customer. This is required if  Select the user input type in Template Configuration is Email. |



CSV Sample of Subscription to Trans SMS:

Mobile,Subscription Status,Channel,Priority9900111111,OPTIN,SMS,TRANS

CSV Sample of subscription to bulk emailMobile,Subscription Status,Channel,Priority9900111111,OPTIN,EMAIL,BULK

## Update Fraud Status

This profile lets you update the fraud status of customers.

The CSV file should contain the following fields.

- Mobile no./External id/External ID/User ID*

- Fraud status* (Values: INTERNAL, MARKED, CONFIRMED, RECONFIRMED, NOT_FRAUD)

- Fraud reason*

- Store code*

Any one customer identifier among the mobile number, email ID, external ID, or user ID is mandatory.

CSV Sample to update fraud status

Mobile,Status,Reason,StoreCode9900111111,INTERNAL,Staff customer,store654

Template configuration

![450](https://files.readme.io/1142374-none.png)

| Option | Description |

| --- | --- |

| Replace invalid store names with | Choose the store that you want to replace with instead of invalid stores. |

| Denote stores by external ids | Check this box if the stores of the organization use store external ids as store codes. |

| Select the user input type | Choose the unique identifier used for the customer in the CSV file - MOBILE, EMAIL, EXTERNAL_ID, USER_ID. |



Updatedover 1 year ago