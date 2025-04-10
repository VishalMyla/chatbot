# OTP template guidelines

An OTP template is a predefined format or structure for sending One-Time Passwords (OTPs). An OTP template includes placeholders for the one-time password, expiration time, and other details as required.Example:Dear user, your one-time password (OTP) is: {{otp_code}}. This OTP is valid for the next 10 minutes.

# SMS and Email template

> 🚧Approval for SMS templateDepending on the country of operation, approval might be required from the respective authorities for the SMS template. Make sure that you have appropriate approval.

## 🚧Approval for SMS template

Approval for SMS template

Depending on the country of operation, approval might be required from the respective authorities for the SMS template. Make sure that you have appropriate approval.

To create or update the OTP template for SMS and Email, create a JIRA ticket (sample ticket) and assign it to the sustenance team. The ticket should have the following details:

- Name of the template

- Action for which the template is used. The supported actions are:COUPONPOINTSREGISTRATIONGENERICUSERGROUPPOINTSTRANSFERSUBSCRIPTIONCUSTOMER_STATUS_UPDATECUSTOMER_IDENTIFIER_CHANGECUSTOMER_ISSUE_LINK_CARD.

- COUPON

- POINTS

- REGISTRATION

- GENERIC

- USERGROUP

- POINTSTRANSFER

- SUBSCRIPTION

- CUSTOMER_STATUS_UPDATE

- CUSTOMER_IDENTIFIER_CHANGE

- CUSTOMER_ISSUE_LINK_CARD.

- Template format

- Org ID and the org name

- Email subject (for Email templates only)

- For the Email template, include HTML tags/creative information as required. This needs to be pasted as part of the body.

> 📘NoteOnly one template can be create for an action (coupon, point, subscription etc) for both SMS and Email.

## 📘Note

Note

Only one template can be create for an action (coupon, point, subscription etc) for both SMS and Email.

You can create an Email template on Engage+ also. Refer to thedocumentationfor more information.

# WhatsApp

The OTP template for WhatsApp is created on Engage+.  For information on creating the template, refer to the documentation oncreating a WhatsApp template on Engage+. This needs to be approved by WhatsApp.

> 📘Notes:The template should be separate for each language and the template name should be unique at the org level.Make sure that the OTP template does not have multiple placeholders for the OTP. This can lead to displaying OTP in all placeholders.The template should be as per theWhatsApp guidelines.

## 📘Notes:

Notes:

- The template should be separate for each language and the template name should be unique at the org level.

- Make sure that the OTP template does not have multiple placeholders for the OTP. This can lead to displaying OTP in all placeholders.

- The template should be as per theWhatsApp guidelines.

# ZALO

Zalo is a multi-functional mobile application which is popular in Vietnam.

For creating an OTP template for ZALO, contact your CSR. Detailed documentation on the Zalo template is availablehere.

> 📘NoteMake sure that the OTP template does not have multiple placeholders for the OTP. This can lead to displaying OTP in all placeholders.

## 📘Note

Note

Make sure that the OTP template does not have multiple placeholders for the OTP. This can lead to displaying OTP in all placeholders.

# Sending OTP - flow chart

![](https://files.readme.io/b48302e-Flowchart.png)

For information on configuring the channel gateway, refer to thechannel configuration documentation.

For information on configuring OTP settings, refer to theOTP settings configurationdocumentation.