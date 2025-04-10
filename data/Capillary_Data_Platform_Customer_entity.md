# Customer entity

The Customer entity is the focal point around which all our data revolves. This entity includes information about each customer, ranging from essential contact details to demographic and geographic data. In addition, It also includes information about their purchase history, behavioural activities, loyalty details, the user groups they are part of, reward and coupon details and other related information.

Within this framework, the source through which a customer is registered is called a customer data source. This source serves as the initial touchpoint, capturing the basic details that contribute to the making of a customer profile. Additionally, the channels available for communication with the customer are referred to as customer communication channels. These channels play a pivotal role in establishing meaningful connections and fostering effective communication with customers.

## Related entities

A customer entity can have information related to other entities and similarly the other entities can include customer entity information. For example, card entity, and transaction entity can include information related to customer entity and vice-versa.

# Supported objects and fields

The below image provides you with information about the supported objects and fields in the customer entity.

![](https://files.readme.io/d643219-Customer.jpg)

# Understanding data sources

In our system, a "Source" refers to the origin or system from which customer information is integrated. Each source represents a unique system, integration, or data feed.

Customers may be represented differently across various sources. For instance, a customer named "Christopher" in one source could appear as "Christo" in another. This discrepancy underscores the necessity for identity resolution to establish a unified and accurate view of the customer.

Data integration involves collecting information from different sources, including identifiers, subscription statuses, and email addresses. This process merges and creates a consolidated, reliable customer profile. When the system receives information from the same identifier already present but from a different source, it analyzes,merges, and adds it to the existing customer profile under a different source.

On Member Care, within the customer profile, you can view all the sources from which the customer registered.

![](https://files.readme.io/afc70c0-Customer_source.png)

## Supported data sources

The entity supports the following data sources:

1. Facebook

2. Web_engage

3. WeChat

4. Instore

5. E-Commerce

6. Website

7. Line

8. Mobile-APp

9. Linkedin

10. Mpush-FCM

11. Mapp_SDK

12. OAuth_External

# Understanding communication channels

A "Communication Channel" represents the medium through which customers receive messages. Examples include SMS, push notifications, web engagement, and POS (Point of Sale) systems.Some sources may act as both a source and a communication channel. For instance, WeChat not only provides customer information but also serves as a communication channel.Communication channels can vary, and information may be collected from diverse sources. For instance, a customer's communication channel, such as WeChat, may exclusively come from the WeChat system.Overlapping scenarios may arise where the source and communication channel are the same, while in other cases, they can be different. The system is designed to handle these variations effectively.

## Supported communication channels

The entity supports the following communication channels:

1. WeChat

2. Mobile

3. iOS

4. Line

5. Email

6. WhatsApp

7. Android

8. Postmail

# Managing customer lifecycle with customer status

A customer status defines the relationship between a brand and a customer. For example, a customer who interacts often with the brand can be defined as an active customer. Further, these statuses can be used to run the loyalty program and assign coupons, reward points etc accordingly. For example, more offers can be offered to a customer to make an inactive customer to active customer..

## Activating customer status

To activate customer status for your organisation, navigate toOrganisation settings> Miscellaneous> Customer Status configurationand select theEnable customer statuscheck box.

On enabling the customer status, the existing fraud status will be replaced by the customer status function.

## Types of customer statuses

The various customer statuses available in the Capillary platform that you can configure are:

1. Active

2. Suspended

3. Deleted

4. Fraud suspected

5. Fraud confirmed

6. Internal

7. Pending deletion

## Creating a custom label

You can click theCreate new labeloption in the customer label and enter a new label name to assign a custom name for the status. You can add multiple labels if required. The first status label that you create is set as the default status value.

![](https://files.readme.io/e70b5ed-H3fEa_kClhg1C9buCL58znQ3t4tvnHcb2g.png)

## Active customer status

The active status can be used to indicate that the customer is active.

> 📘NOTES:There are no restrictions for customers with Active status.All customers are marked Active by default.

## 📘NOTES:

NOTES:

- There are no restrictions for customers with Active status.

- All customers are marked Active by default.

## Suspended, Fraud suspected, Fraud confirmed, and Internal customer status

You can restrict the following operations for the users with Suspended, Fraud suspected, Fraud confirmed or Internal status.

| Restriction | Description |

| --- | --- |

| Block coupons redemption | Restrict from redeeming coupons. |

| Block issual of loyalty promotions | Restrict from receiving points. |

| Block identifier change and account merge | Restrict from account merging and identifier change requests. |

| Block issual of badges | This is a future development feature. |

| Block issual of coupons | Restrict from providing coupons. |

| Block enrollment into loyalty promotions | This is a future development feature. |

| Block points allocation | Restrict from providing points.When this restriction is added on any label, then the points allocation from any points-related action (like transaction point allocation, allocation points, target point allocation, issue to the referrer, issue to referee, goodwill points, import profile) will be blocked for the customer. |

| Block points redemption | Restrict from redeeming points. |

| Block tier upgrade | Restrict from tier upgrade. |

| Block transaction | Restrict future transactions. |

| Mark transaction outlier | Mark the transactions made by the selected label(s) as outliers. |



To restrict access, select the individual status labels or all the created status labels from the desired restriction drop-down. ClickSelect, and then clickUpdate.

![](https://files.readme.io/ccef7e2-lb5ZVDRSQL_JkADaNE0G9ONiVhqtT0GynQ.png)

## Deleted customer status

The deleted status allows you to block every action for customers with this status. To configure restriction, from theBlock everythingdrop-down, select the individual custom labels or select all labels created for Deleted. ClickSelectand then clickUpdate.

![](https://files.readme.io/a198377-Delete_customer_status.png)

## Pending deletion customer status

This status is used to indicate the status of customers for whom a deletion request is raised. ForPending Deletion, whenever a PII deletion request is triggered, a label Deletion_pending is automatically created and assigned to the customer, regardless of any other label that may have been created and set as default.

# Managing subscription

A subscription refers to the voluntary action taken by customers to either opt in or opt out of receiving promotional or transactional communications from specific sources within the organization.

You can configure the promotional and transactional subscription settings for a customer according to their preferences. For more information, refer to theSubscription managementdocumentation.

You can also view and set the subscription statuses on the customer's profile onMember Care.

# Managing loyalty status

A customer can be of two types: a loyalty customer and a non-loyalty customer. A loyalty customer is a registered member of your organization's loyalty program, while non-loyalty customers are those who have not enrolled in your loyalty program but have subscribed using their mobile number or email ID with the organization. Transactions for these customers are tagged to their respective identifiers (mobile number/email ID).

You can define the loyalty type of a customer duringcustomer registrationor whileadding a transaction.

The loyalty status of a customer is displayed on theCustomer statusin the customer's Member Care profile.

# Managing test and control status

The customer list is split into a test and control group. Customers in the test audience group receive campaign communications, while those in the control audience group do not. The test and control statuses are displayed based on the group to which they belong. These statuses are maintained by the brands or auto-assigned and can be changed either throughMember CareorConnect+.

# Managing fraud status

You can configure the fraud management and the statuses as per your requirements. For more information on fraud management, refer to theFraud management documentation.

> 📘NoteIf customer status is enabled, the fraud status will be superseded by the customer status.

## 📘Note

Note

If customer status is enabled, the fraud status will be superseded by the customer status.

# Getting started

## Setup customer fields

Standard fields, Extended fields and Custom fields are the fields that are applicable for Customer entity. For more information on these, refer to thedocumentation on fields.

## Setup customer configs

To configure customer registration, follow these steps.

1. On the InTouch home page, navigate toProfile > Organization Settings > Miscellaneous > Registration Configuration.

2. Configure the required fields based on the description provided in the following table.

| OPTION | DESCRIPTION |

| --- | --- |

| CONF_REGISTRATION_PRIMARY_KEY | Choose the primary identifier of the customer. This is the unique identifier of the customer required for registration. |

| CONF_ALLOW_REGISTRATION_FROM_ANY_IDENTIFIERS | Select this to allow the registration of customers using any of the identifiers. |

| CONF_USERS_IS_EMAIL_REQUIRED | Check this if email id is a mandatory parameter to register a customer. |

| CONF_USERS_IS_EMAIL_UNIQUE | Check this to make the email ID a unique identifier. If any registered email ID is registered the accounts will be merged automatically. |

| CONF_USERS_USE_EXTERNAL_ID | Check this to capture the external ID of customers while registering. |

| CONF_USERS_IS_EXTERNAL_ID_REQUIRED | Check this to make the external ID mandatory to register a customer. Not applicable if the external ID is the primary identifier. |

| CONF_USERS_IS_MOBILE_REQUIRED | Check this to make the mobile number mandatory to register a customer. Not applicable if mobile is the primary identifier. |

| CONF_ALLOW_MOBILE_UPDATE | Check this to allow updating registered mobile numbers of customers. |

| CONF_ALLOW_EMAIL_UPDATE | Check this to allow updating registered email IDs of customers. |

| CONF_LOYALTY_ALLOW_EXTERNAL_ID_UPDATE | Check this to allow updating registered external IDs of customers. |

| CONF_PRIMARY_IDENTIFIER_STRICT_CHECK | Check this to verify if the primary identifier is already registered in a different account.An error message will be displayed that the secondary identifier match is found in a different account but not the primary identifier. |

| CONF_SKIP_SECONDARY_ID_ON_PRIMARY_MISMATCH | Check this to skip account merging if only secondary identifiers match but primary identifiers are different.A new customer will be created with the provided primary identifier. The secondary identifier will be ignored automatically. |

| USE_CRM_REGISTRATION_INFO_FROM_BASE_STORE | NA |

| CONF_GIFT_CARD_ENABLED | Check this to enable gift card |

| CONF_ORG_CURRENCY_CODE | Set the ISO currency code of the org. |

| CONF_ORG_CURRENCY_SYMBOL | Set the currency symbol of the org as per the currency code. |

| CONF_MIN_REGISTRATION_DATE | Set the minimum date and time from which the registration is valid. Registration fails if the registration date and time is prior to the value set herein ( especially through API or Data Import). |

| SERVER_VALIDATION_PIN_SMS | Configure the verification SMS that will be sent to customers to validate the registered mobile numbers. Use the tag {{pin}} to insert the verification PIN in the message.For example, Please use the code {{pin}} to verify your mobile number. |

| SERVER_VALIDATION_PIN_EMAIL | Configure the verification email that will be sent to customers to validate the registered email ID. Use the tag {{pin}} to insert the verification PIN in the message.For example, Please use the code {{pin}} to verify your email ID. |

| CONF_LOYALTY_REGISTER_CUSTOMER_GENDER | Choose the custom field for gender from the drop-down. |

| CONF_LOYALTY_REGISTER_CUSTOMER_AGE | Choose the custom field for age from the drop-down. |

| CONF_CLIENT_V2_API_ENABLED | Check this if sources other than InStore are supported for the org. |

| CONF_GEN_CARD_NUMBER_AS_EXTERNAL_ID_ENABLED | Check this to enable generating external IDs automatically from the Capillary end. |

| SOURCE_ACCOUNTS_EXTERNALID_ENABLED | Check this to enable support for external ID capture. |

| CONF_CARD_NUMBER_GENERATION_ENABLED | Check this to enable generating card numbers automatically from the Capillary end. |

| CONF_CARD_NUMBER_SUFFIX | Specify the suffix you want to have for the external card (supports alphanumeric value). |

| CONF_CARD_NUMBER_PREFIX | Specify the prefix for the external card (supports alphanumeric value). For example, BRAND20. |

| CONF_CARD_NUMBER_LENGTH | Specify the length of the external card. You can have up to 50 characters. |

| CONF_CARD_NUMBER_OFFSET | Specify the card sequence numbers that you want to ignore from the top. For example, if you set 10, the first 10 cards will be considered invalid. |

|  | Check this to enable primary identifier checks when registering or updating customers. |

| CONF_IDENTIFIERS_SYNC_ENABLED | Check this to synchronize identifiers such as mobile numbers, email addresses, and external IDs between Instore profiles and V2 profiles (external profiles such as WebEngage)  within the system.-When the identifier change request is made from Membercare, any changes to identifiers (mobile/email, externalId) will update both the Instore profile and the corresponding V2 profile identifiers.Note:The Customer Unique Identifier (CUID) will not change in V2 profiles if this identifier exists.-To make changes to the external profile CUID, the following steps are performed after the identifier change request on Membercare:- -Creation of a new payload with updated identifiers and pushing it to an S3 bucket.--Execution ofv2/integrations/customer/upsert APIwith the source set toWEB_ENGAGEand the new payload.  The upsert API ensures that the changes are reflected in all instances of the profile, including updating the CUID and communication channels.Default value:False. |

| -CONF_CLIENT_DEFAULT_COUNTRYCODE_PASSED | Check this to auto select country code to the mobile number entered on the registration screen. The validation sequence will be as follows.validates initial letters of mobile numbers for base or supported currency codes.inserts each country code and validates the number. First with base country code, followed by supported country codes. |



`v2/integrations/customer/upsert API`

`WEB_ENGAGE`

# External ID configuration

You can use the below configurations to enable the generation of a customised external ID for the customers. Once this configuration is enabled, the external ID in the customer add API payload will be replaced with the generated external ID.

> ❗️AttentionThere is no UI to enable this configuration. You need to raise a JIRA ticket (sample ticket) to the sustenance team to enable these configurations. Turn around time is five days.

## ❗️Attention

Attention

There is no UI to enable this configuration. You need to raise a JIRA ticket (sample ticket) to the sustenance team to enable these configurations. Turn around time is five days.

| Configuration & Description | Value |

| --- | --- |

| CONF_CARD_NUMBER_GENERATION_ENABLED (Mandatory)Enables external ID number generation. | 0 - Disable1 - Enable |

| SOURCE_ACCOUNTS_EXTERNALID_ENABLED (Mandatory)Enables external ID generation only for the defined source account in the Customer ADD API. | ["INSTORE:"] -  Instore["web_engage:1234"] -Webengage where 1234 is the account id["INSTORE:", "web_engage:1234"]  -  Both Instore and webengage where 1234 is account id. |

| CONF_CARD_CHECKSUM_DIGIT_ALGO (Mandatory)Defines the algorithm to generate the checksum. The checksum is added as the last digit of the external ID. | LUHN_ALGO, MOD7_ALGO, AUTO_INC |

| CONF_CARD_NUMBER_LENGTH (Mandatory)Defines the external ID length. This is the total length of the external id including prefix, suffix, and checksum.Note: Suffix is not applicable for MOD7 and LUHN_ALGO (MOD10) algorithms.Example: If card number length = 12, Prefix = 1234, Suffix = 3401, Offset = 3000, and algorithm = AUTO_INC, then card number can be 123430003401. | Integers ranging from 1-50. |

| CONF_CARD_NUMBER_OFFSET (Optional)Defines the offset value for the external ID. For example for a card number series with offset value 3000, can be 111200000030004, 111200000030015 etc. | Any integer value |

| CONF_CARD_NUMBER_PREFIX  (Optional)Defines the prefix for the external ID number. | Any integer value but prefix + suffix + system-generated number should not be more than 50. |

| CONF_CARD_NUMBER_SUFFIX  (Optional)Defines the SUFFIX for the external ID number. This is only applicable for AUTO_INC alogrithm. | Any integer value but prefix + suffix + system-generated number should not be more than 50. |

| CONF_VALUES_TO_INCLUDE_FOR_CHECKSUM_DIGIT  (Optional)Specifies whether the prefix should be considered when generating the checksum value. | PREFIX - Prefix is consideredNONE - Prefix is not considered |



# Customer ingestion restriction configuration

> ❗️WarningThere is no UI to enable this configuration. You need to raise a JIRA ticket (sample ticket) to the sustenance team to enable these configurations. Turn around time is five days.

## ❗️Warning

Warning

There is no UI to enable this configuration. You need to raise a JIRA ticket (sample ticket) to the sustenance team to enable these configurations. Turn around time is five days.

CONF_RESTRICT_ORPHAN_V2_PROFILE- This configuration prevents the ingestion of a WebEngage profile into the Capillary platform for a specific customer if they do not already have an existing Instore profile.

`CONF_RESTRICT_ORPHAN_V2_PROFILE`

## Setup customer status

For configuring customer status, refer to theActivating customer status section.

# Dual eligibility

The Dual Eligibility feature allows you to register multiple users with the same secondary identifiers. When the Dual Eligibility feature is enabled, only one identifier is considered the primary identifier and the rest of the identifiers are considered for communication. The primary identifier for both of these profiles must be unique.

Example:Consider a brand user who is registered on the platform using Email[email protected], Mobile 123-456-7890, and External ID ABC123 (primary identifier). With the Dual Eligibility feature enabled, another user can be registered again using Email[email protected], Mobile 123-456-7890, and External ID ABC124.

Notes:

- For the users registered with Dual Eligibility, the information about the user can be retrieved only using the primary identifier.

- If a customer is registered with the same identifier through a different registration source, the customer gets merged with the existing user.

## Enabling dual eligibility

To enable dual eligibility for an organization, create a JIRA ticket to the Product Support team and enable the configuration CONF_INSTORE_V2_ENABLED.

In addition, make sure that the below configurations are configured as per the table:

| Configuration Name | Configuration |

| --- | --- |

| CONF_REGISTRATION_PRIMARY_KEY | External ID or mobile or email |

| CONF_REGISTRATION_PRIMARY_KEY_REQUIRED | 1 - Enable |

| CONF_ALLOW_REGISTRATION_FROM_ANY_IDENTIFIERS | 0 - Disable |

| CONF_USERS_IS_MOBILE_REQUIRED | 0 - Not required |



## FAQs

Q: Is dual eligibility applicable for both loyalty and non-loyalty users?A: Dual eligibility is applicable only for Loyalty users.

Q: Is it applicable to all types of orgs such as connected orgs, standard orgs, and Org Units?A: The dual eligibility feature applies to all the orgs.

Q: Can we migrate users with the same secondary identifiers and unique primary identifiers?A: Yes. You can migrate.

Q: What happens if I register a customer with the same primary identifier and other identifiers but a different source?A: The customer gets merged, and on MemberCare, you will be able to see both registration sources.

Updated21 days ago