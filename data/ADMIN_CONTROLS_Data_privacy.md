# Data privacy

## Introduction

Customers can subscribe or unsubscribe from receiving SMS communications for each source of your organization. This module helps you in automating customer subscriptions for InStore, eCommerce accounts, and WeChat.

Two types of subscriptions are supported by Capillary - transaction messages for personalized messages and promotional messages for bulk communications such as campaign messages.

This section provides a detailed procedure on configuring subscriptions for the sources InStore, WeChat, and e-commerce.

### Limitations

- Only registered customers can request opt-in or out-out services.

- Success messages for opt-in or opt-out depend on the message you configure on the respective pages.

- When non-registered customers request such opt-in or opt-out service, the request will be silently ignored.

- When a customer who is already opted-in, places a request for opt-in no action will be taken and such requests will be silently ignored.

> 📘Supported communication channels are email, SMS, and WeChat.Supported sources are all sources with active accounts that are mapped to the supported channels.

## 📘

- Supported communication channels are email, SMS, and WeChat.

- Supported sources are all sources with active accounts that are mapped to the supported channels.

For detailed help on configuring opting in or opting out, see the following topics.

1. Email Subscription Settings: You can configure email subscriptions through a link that facilitates customers to opt-in or opt-out from org emails.

2. Mobile Number Subscriptions: You can configure mobile number subscriptions by two options - either through SMS or missed call.Missed Call-based Subscription Settings: In this, a customer needs to give a missed call to the dedicated number that is configured for opt-in or opt-out.SMS-based Subscription Settings: In this, the customer needs to send an SMS in the format that is configured for opt-in or opt-out.

- Missed Call-based Subscription Settings: In this, a customer needs to give a missed call to the dedicated number that is configured for opt-in or opt-out.

- SMS-based Subscription Settings: In this, the customer needs to send an SMS in the format that is configured for opt-in or opt-out.

> 📘WeChat subscription settings are configured by default (if applicable for the org). You cannot modify WeChat subscription settings.

## 📘

- WeChat subscription settings are configured by default (if applicable for the org). You cannot modify WeChat subscription settings.

## SMS based Subscription Settings

TheCapillary Subscription Settingsmodule lets you configure opt-in or opt-out through a missed call or SMS.

- For missed call-based opt-in and opt-out, you need to configure different numbers for each action. i.e., opt-in to promotional SMSs, opt-in to transaction SMSs, opt-out of promotional SMSs, opt-out of transaction SMSs.

- For SMS-based opt-in and opt-out, you can have just one number for all actions but with different commands. For example, to opt-out, send STOP to 1234; to opt-in send START to 1234.

### Access SMS subscription settings page

To configure the SMS Subscription Settings page:

1. On InTouchSettings, clickSubscription Settings>SMS

On InTouchSettings, clickSubscription Settings>SMS

2. ClickEditSettings

ClickEditSettings

![](https://files.readme.io/fa00f2d-_vrlMZfhpshaolhek0oBoGEUxI-kCqjkgw.jfif)

1. For orgs with multiple brands, you need to configure settings for each organization unit (OU).To configure settings at the OU level, check Have different settings for different organizational units.

For orgs with multiple brands, you need to configure settings for each organization unit (OU).

- To configure settings at the OU level, check Have different settings for different organizational units.

### Enable subscription status syncing across OUs (for MLP enabled orgs)

Orgs with multiple org units can engage a customer through different org units of the org. The customer gives confirmation for opt-ins and opt-outs through the option configured for the org unit.

- Opt-in to all OUs if subscription entry from any of the OUs is Opt-in: Check this option to opt-in customers to all org units If they opt-in to any of the org units.

For example, assume the org has four org units - OU1, OU2, OU3, and OU4. if a customer opts into OU3, enabling this option will opt in the customer to OU1, OU2, and OU4 also.

- Opt-out from all OUs if the first subscription entry from any of the OUs is Opt-out: Check this option to opt-out customers from all org units of the org if they were to opt-out from any of the org units.

For example, in the preceding example, if a customer opt-outs from OU2, enabling this option will opt out the customer from the other OUs as well - OU1, OU3, and OU4

The following settings are common for both single-brand orgs and multi-brand orgs.

### Subscription Settings for Promotional SMSs

For Promotional SMSs subscription through missed call, you need to have a different number for each action and follow the steps specified below.

1. InCustomers can modify preference by, choose togive a missed call

InCustomers can modify preference by, choose togive a missed call

2. If you are switching the preference, you will see a prompt screen to confirm the change in preference. ClickReset & Proceedto continue.

If you are switching the preference, you will see a prompt screen to confirm the change in preference. ClickReset & Proceedto continue.

Note: The current preference settings will be lost once you clickReset & Proceed

![](https://files.readme.io/3906259-abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA.jfif)

| OPTION | DESCRIPTION | SETTINGS |

| --- | --- | --- |

| Promotion {{SMS Optout}} tag | Lets you configure the optout tag. | ClickConfigureto setup the optout tag. You will see the following options_Define the {{code}} to be sent: Define the {{code}} tag - the command that you want to have in the SMS to opt-out a mobile number from the promotional SMSs of the current org or OU_Define the {{num}} to which the code to be sent: Define the {{num}} tag - a number to which customers need to send an SMS to opt-out of promotional SMSs of the current org or OU-Define the {{Optout}} tag: Specify the opt-out message that needs to be sent to customers in place of the tag. Use the + icon and insert {{code}} and {{num}} as appropriateClickSave |

| Promotion {{SMS Optin}} tag | Lets you configure the optin tag. | ClickConfigureto setup the optin tag. You will see the following options_Define the {{code}} to be sent: Define the{{code}} tag - the command that you want to have in the SMS to opt-in a mobile number_Define the {{num}} to which the code to be sent: Define the {{num}} tag - Specify a number to which the user needs to send SMS for opting in to the org's promotional SMS-Define the {{Optin}} tag: Specify the opt-in message that you want to send to customers in place of the {{Optin}} tag used in SMS templates. Click the + icon and insert {{code}} and {{num}} as appropriateClickSave |



1. Select the desired Optin type:

i.Single: Registered customers with no opt-in preference and customers who are opted-in for org's or OU's promotional are targeted in this type.ii.Restricted Single: Only customers who are opted-in for the org level or OU level promotional SMS are targeted in this typeiii.Double: Customers are allowed to manually opt-in to the org's promotional SMS and receive SMSs only after verifying their opt-in status.

- InDouble, you will need to send a verification message to allow the customers to confirm their opt-in manually.  You will see a new fieldVerification Message. Click the respectiveConfigureoption and set the verification message. If you are using Unicode characters in the message, checkAllow Unicode Characters

The following table shows the org's preference of sending promotional messages in each type

| Type | Promotional SMS to Opt In numbers | Promotional SMS to no Preference numbers | Promotional SMSs to Opted out numbers |

| --- | --- | --- | --- |

| Single | Yes | Yes | No |

| Restricted Single | Yes | No | No |

| DoubleIn Double type, you need to configure the verification message that will be sent to customers to manually opt-in | No by default (Customers will start getting promotional SMSs only after verifying their numbers) | No by default (Customers will start getting promotional SMSs only after verifying their numbers) | No |



1. Check toSend Optin confirmation SMSand configure the message to be sent on a successful opt-in

Check toSend Optin confirmation SMSand configure the message to be sent on a successful opt-in

2. Check toSend Optout confirmation SMSand configure the message to be sent on a successful opt-out

Check toSend Optout confirmation SMSand configure the message to be sent on a successful opt-out

3. InSender Number, specify the dedicated number to send promotional SMS (for the current org or OU)

InSender Number, specify the dedicated number to send promotional SMS (for the current org or OU)

### SMS based Subscription Settings for Transaction SMSs

For Transactional SMSs, you can configure only opt-in and opt-out tags. The Optin Type and Optout Type are set by default. You cannot modify it.

Scroll down to the Transactional SMS setting section

![](https://files.readme.io/6fe1035-EnCiS4rBiNvFaLtWSGRAgNaDGSge2tOFAQ.jfif)

To configure the Optout tag, click the Configure option corresponding to the Transactional SMS setting

![](https://files.readme.io/734b418-LwC5baZ9JnGwK2I6N577MUCD9oWVGTCmfg.jfif)

1. Define the {{trans_unsub_command}} to be sent: Specify your preferred command to out out of transactional SMSs (for example: STOP).

2. Define the {{trans_unsub_shortcode}} to be sent: Specify the shortcode to which customers need to send the SMS out of transactional SMSs.

3. Define the {{Optout}} tag: Specify the opt-out message that will go with the transactional SMSs for SMS-based opt-out.

4. ClickSaveto save the changes.

## Missed Call based Subscription Settings

The Capillary Subscription Settings module lets you configure opt-in or opt-out through a missed call or SMS.

- For missed call-based opt-in and opt-out, you need to configure different numbers for each action. i.e., opt-in to promotional SMSs, opt-in to transaction SMSs, opt-out of promotional SMSs, opt-out of transaction SMSs.

- For SMS-based opt-in and opt-out, you can have just one number for all actions but with different commands. For example, to opt-out, send STOP to 1234; to opt-in send START to 1234.

To configure missed call based Subscriptions Settings:

1. On InTouchSettings, clickSubscription Settings>SMS

2. ClickEditSettings

![](https://files.readme.io/1275421-3RscDqi_bdqpzX1ecNNP7uYJjtl-8YEdlg.jfif)

1. For orgs with multiple brands, you need to configure settings for each organization unit (OU).

- To configure settings at the OU level, checkHave different settings for different organizational unitsThe following settings are common for both single-brand orgs and multi-brand orgs.

Subscription Settings, Customer Preference

How brands regard them:

### Missed Call based Subscription Settings for Promotional SMSs

You need to have a unique number for each action that you wanted to configure for the missed calls based.

To configure missed call based subscription settings:

1. InCustomers can modify preference by, choose togive a missed call

2. If you are switching the preference, you will see a prompt screen to confirm the change in preference. ClickReset & Proceedto continue.

Note: The current preference settings will be lost once you clickReset & Proceed

![](https://files.readme.io/6dd2eeb-abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA_1.jfif)

| OPTION | DESCRIPTION | SETTINGS |

| --- | --- | --- |

| Promotion {{SMS Optout}} tag | Lets you configure the optout tag. | ClickConfigureto setup the optout tag. You will see the following options_Define the {{num}} to be given a missed call: Define the {{num}} tag - a number to which customers need to give a missed call to opt-out of promotional SMSs of the current org or OU._Define the {{Optout}} tag: Specify the opt-out message that needs to be inserted for the {{Optout}} tag used in SMS template. Use the + icon and selectnumto insert the missed call number tag - {{num}} - in the messageClickSAVE |

| Promotion {{SMS Optin}} tag | Lets you configure theoptin tag. | ClickConfigureto setup the optin tag. You will see the following options_Define the {{num}} to be given a missed call: Define the {{num}} tag - Specify a number to which the user needs to give a missed call to opt-in to the promotional SMS of the current org or OU_Define the {{Optin}} tag: Specify the opt-in message that you want to send to customers in place of the {{Optin}} tag used in SMS template .  Use the + icon to insert the missed call number tag - {{num}} - in the messageClickSAVE |



1. Select the desiredOptin type:i.Single: Registered customers with no opt-in preference and customers who are opted-in for org's or OU's promotional are targeted in this type.ii.Restricted Single: Only customers who are opted-in for org's or OU's promotional SMS are targeted in this typeiii.Double: Customers are allowed to manually opt-in to the org's or OU's promotional SMS and receive SMSs only after verifying their opt-in status.

- In Double, you will need to send a verification message to allow the customers to confirm their opt-in manually.  You will see a new field Verification Message. Click the respective Configure option and set the verification message. If you are using Unicode characters in the message, check Allow Unicode Characters

The following table shows the org's preference of sending promotional messages in each type

| Type | Promotional SMS to Opt In numbers | Promotional SMS to no Preference numbers | Promotional SMSs to Opted out numbers |

| --- | --- | --- | --- |

| Single | Yes | Yes | No |

| Restricted Single | Yes | Yes | No |

| DoubleIn Double type, you need to configure the verification message that will be sent to customers to manually opt-in | No by default (Customers will start getting promotional SMSs only after verifying their numbers) | No by default (Customers will start getting promotional SMSs only after verifying their numbers) | No |



1. Check to Send Optin confirmation SMS and configure the message to be sent on a successful opt-in

Check to Send Optin confirmation SMS and configure the message to be sent on a successful opt-in

2. Check Send Optout confirmation SMS and configure the message to be sent on a successful opt-out

Check Send Optout confirmation SMS and configure the message to be sent on a successful opt-out

3. In Sender Number, specify the number from which you want to send promotional SMS

In Sender Number, specify the number from which you want to send promotional SMS

### SMS based Subscription Settings

You can have a single number for all actions but with different commands.

To configure SMS based subscription settings:

1. InCustomers can modify preference by, choosingSending an SMSand configuring other fields as explained in the table below

InCustomers can modify preference by, choosingSending an SMSand configuring other fields as explained in the table below

2. If you are switching the preference, you will see a prompt screen to confirm the change in preference. ClickReset & Proceedto continue.

If you are switching the preference, you will see a prompt screen to confirm the change in preference. ClickReset & Proceedto continue.

Note: The current preference settings will be lost once you clickReset & Proceed

![](https://files.readme.io/625bd78-abGX6XRqpsk3WSOCCpMNbTcS8HfgfPcrzA_2.jfif)

| OPTION | DESCRIPTION | SETTINGS |

| --- | --- | --- |

| Define the {{code}} to be sent | Lets you set the command for |  |

| Promotion {{SMS Optout}} tag | Lets you configure theoptout tag. | ClickConfigureto setup the optout tag. You will see the following options_Define the {{code}} to be sent: Define the{{code}} tag- the command that you want to have in the SMS to opt out a mobile number from the current org's or OU's promotional SMS_Define the {{num}} to which the code to be sent: Define the {{num}} tag- a number to which customers need to send an SMS to opt-out from the current org's or OU's promotional SMS-Define the {{Optout}} tag: Specify the opt-out message that needs to be inserted for the {{Optout}} tag wherever used in SMS templates. Use the + icon and insert {{code}} and {{num}} as appropriateClickSAVE |

| Promotion {{SMS Optin}} tag | Lets you configure theoptin tag. | ClickConfigureto setup the optin tag. You will see the following options_Define the {{code}} to be sent: Define the{{code}} tag- the command that you want to have in the SMS to opt in a mobile number_Define the {{num}} to which the code to be sent: Define the {{num}} tag - Specify a number to which the user needs to send SMS for opting in to the org's promotional SMS-Define the {{Optin}} tag: Specify the opt out message that will be replaced wherever the {{Optin}} tag is used in SMS templates. Use the + icon and insert {{code}} and {{num}} as appropriateClickSAVE |



1. Select the desired Optin type:

i.Single: Registered customers with no opt-in preference and customers who are opted-in for org's or OU's promotional are targeted in this type.ii.Restricted Single: Only customers who are opted-in for org's or OU's promotional SMS are targeted in this typeiii.Double: Customers are allowed to manually opt-in to the org's or OU's promotional SMS and customers will keep receiving messages only after verifying opt-in status.

- When you select Double, you will see theVerification Messageoption. Click the respective Configure option and configure the message. If you want to use Unicode characters in the message, checkAllow Unicode Characters

The following table shows the org's preference of sending promotional messages in each type

| Type | Promotional SMS to Opt In numbers | Promotional SMS to no Preference numbers | Promotional SMSs to Opted out numbers |

| --- | --- | --- | --- |

| Single | Yes | Yes | No |

| Restricted Single | Yes | Yes | No |

| DoubleIn Double type, you need to configure the verification message that will be sent to customers to manually opt-in | No by default (Customers will start getting promotional SMSs only after verifying their numbers) | No by default (Customers will start getting promotional SMSs only after verifying their numbers) | No |



1. Check to Send Optin confirmation SMS and configure the message to be sent on a successful opt-in

Check to Send Optin confirmation SMS and configure the message to be sent on a successful opt-in

2. Check Send Optout confirmation SMS and configure the message to be sent on a successful opt-out

Check Send Optout confirmation SMS and configure the message to be sent on a successful opt-out

3. In Sender Number, specify the number from which you want to send promotional SMS

In Sender Number, specify the number from which you want to send promotional SMS

### Missed Call based Subscription Settings for Transaction SMSs

For Transactional SMs, you can configure only opt-in and opt-out tags. TheOptin TypeandOptout Typeare set by default. You cannot modify it.

Scroll down to theTransactional SMSsetting section

![](https://files.readme.io/42c22f8-EnCiS4rBiNvFaLtWSGRAgNaDGSge2tOFAQ_1.jfif)

To configure the Optout tag, click theConfigureoption corresponding to theTransactional SMS setting

![](https://files.readme.io/cd180e6-NcFVlGu7gtc7_7DhrtQKqGdqcZWrknysvg.jfif)

1. Define the {{trans_unsub_shortcode}} to be given a missed call: Specify the shortcode to which customers want to give a missed call to out out of transactional SMSs

2. Define the {{Optout}} tag: Specify the opt-out message that will go with the transactional SMSs

3. ClickSaveto save the changes

## Email Subscription Settings

### Subscription Settings for Single Brand Org (InStore)

1. On Capillary InTouch, navigate toSettings>Subscription Settings (v2)

2. Navigate to the InStore source and clickEmail Channel.

3. CheckHave different subscription settings for different organizational unitsto configure email subscription settings separately for each org unit (applicable only for orgs with multiple org units).

![](https://files.readme.io/ee2a148-uxJvJEho-HQnpGSoE_GStxThHWBV_Vc7Gw.png)

1. InSelect Org Unit, choose the OU (Org Unit) for which you want to configure the email subscription. You will not see this option for single OU orgs.

2. ConfigureSettings for Promotional Emailsas explained in the following table.

| OPTION | SUB OPTION | DESCRIPTION |

| --- | --- | --- |

| Optin type | Single (by default) | Customers who are opted in and the customers with no subscription preference are considered as opted in customers for promotional messages. |

|  | Restricted | Only opted in customers are considered. |

| Send Optin Confirmation email | Configure | Configure the email that you want to send for the opt-in confirmation. |

| Send optout confirmation email | Configure | Configure the email that you want to send for the opt-out confirmation. |

| Sender ID for verification and confirmation emails | - | Choose the sender id from which you want to send promotional messages. |

| Sender name | - | Specify your preferred sender name for the promotional messages. |



> 📘Confirmation messages of a customer opt-in or opt-out will not be sent for transaction messages.UseGo to next org unitto view and edit details of each org unit. Similarly, clickGo to the previous org unitto view and edit details of the preceding OU (if available).

## 📘

- Confirmation messages of a customer opt-in or opt-out will not be sent for transaction messages.

- UseGo to next org unitto view and edit details of each org unit. Similarly, clickGo to the previous org unitto view and edit details of the preceding OU (if available).

### Email Subscription Settings for e-commerce

1. On Capillary InTouch, navigate to Settings > Subscription Settings (v2)

2. Navigate to the Ecommerce account for which you want to set or modify email subscription settings and click Email Channel.

![](https://files.readme.io/e2a77bb--eN2vVXjSpea201T9IW-6RPwA012Kd4gdA.png)

1. ConfigureSettings for Promotional Emailsas explained in the following table.

| OPTION | SUB OPTION | DESCRIPTION |

| --- | --- | --- |

| Optin type | Single (by default) | Customers who are opted in and the customers with no subscription preference are considered as opted in customers for promotional messages. |

|  | Restricted | Only opted in customers are considered. |

|  | Double | Customers need to opt-in manually. |

| Send Optin Confirmation email | Configure | Configure the email that you want to send for the opt-in confirmation. |

| Sender ID for verification and confirmation emails | - | Choose the sender id from which you want to send promotional messages. |

| Sender name | - | Specify your preferred sender name for the promotional messages. |



> 📘Confirmation messages of a customer opt-in or opt-out will not be sent for transaction messages.UseGo to next org unitto view and edit details of each org unit. Similarly, clickGo to the previous org unitto view and edit details of the preceding OU (if available).

## 📘

- Confirmation messages of a customer opt-in or opt-out will not be sent for transaction messages.

- UseGo to next org unitto view and edit details of each org unit. Similarly, clickGo to the previous org unitto view and edit details of the preceding OU (if available).

### Email Subscription Settings for WeChat

1. On Capillary InTouch, navigate to Settings > Subscription Settings (v2)

2. Navigate to the WeChat account for which you want to set or modify email subscription settings and click Email Channel.

![](https://files.readme.io/04821bf-n70sH_zjttOUnFABs3otZNQ_PwsVnxyceA.png)

1. Configure Settings for Promotional Emails as explained in the following table.

| OPTION | SUB OPTION | DESCRIPTION |

| --- | --- | --- |

| Optin type | Single (by default) | Customers who are opted in and the customers with no subscription preference are considered as opted in customers for promotional messages. |

|  | Restricted | Only opted in customers are considered. |

|  | Double | Customers need to opt-in manually. |

| Send Optin Confirmation email | Configure | Configure the email that you want to send for the opt-in confirmation. |

| Send optout confirmation email | Configure | Configure the email that you want to send for the opt-out confirmation. |

| Sender ID for verification and confirmation emails | - | Choose the sender id from which you want to send promotional messages. |

| Sender name | - | Specify your preferred sender name for the promotional messages. |



> 📘Confirmation messages of a customer opt-in or opt-out will not be sent for transaction messages.Use Go to next org unit to view and edit details of each org unit. Similarly, click Go to the previous org unit to view and edit details of the preceding OU (if available).

## 📘

- Confirmation messages of a customer opt-in or opt-out will not be sent for transaction messages.

- Use Go to next org unit to view and edit details of each org unit. Similarly, click Go to the previous org unit to view and edit details of the preceding OU (if available).

Updatedover 1 year ago