# Create SMS template

## Create SMS Template for Indian Orgs (as per TRAI Regulations)

TRAI has formulated certain guidelines to enhance control, prevent any fraudulent practice and provide greater safety to the end customer. As per the guidelines, the orgs that want to communicate with their customers will now have to register themselves with Telecom Operators for sending SMS. The system is governed using Blockchain technology also known as Distributed Ledger Technology (DLT).

## Message Categories

For DLT enabled organizations, the following are the three different SMS categories available.

1. Promotional: Any message sent with an intention to promote or sell a product, goods, or service. Service content mixed with promotional content is also treated as promotional. Sender ID of 3-9 numeric digits needs to be used. Promotional messages sent to non-registered customers after receiving their consent will come under the category of Service Explicit.

2. Service Explicit: Any service message which doesn’t fall under the category of service message (inferred consent) will be considered a Service explicit message. To send such messages, the Sender ID of 3-9 alphabetic characters needs to be used. Promotional messages sent to registered customers after receiving their consent will come under the category of Service Explicit.3.Service-Inferred/Implicit: Any message, arising out of the customer's actions or their relationship with the sender, that is not promotional, and is not in the interest of the customer to block. A sender ID of 3-9 alphabetic characters needs to be used. Notifications such as order confirmations, payment alerts, purchase updates, website/app login OTP, and other vital updates can be transmitted from Service Implicit route.

![1044](https://files.readme.io/e10e680-NoNuoNbSQKx8QAUp-iZrB0o6m53BgFNEXw.png)

## Prerequisites

1. An Org should register itself on any of the DLT platforms and share the Entity ID with Capillary.

> 📘To make an org DLT enabled, raise a ticket and tag the Engage+ Sustenance team requesting to enable the DLT settings.For existing Orgs, this will be taken care of as part of the Feature rollout process.DLT settings have to be enabled only for Indian clients.

## 📘

- To make an org DLT enabled, raise a ticket and tag the Engage+ Sustenance team requesting to enable the DLT settings.

- For existing Orgs, this will be taken care of as part of the Feature rollout process.

- DLT settings have to be enabled only for Indian clients.

1. An org should register Headers/ Sender IDs on the DLT platform. Multiple sender IDs can be registered under an Entity ID depending on the type of message.

> 📘Once the Header is registered it needs to be shared with the Capillary Gateways team ([email protected]). The Gateways team will do the Domain and Gateway mapping. This step is internal to Capillary.

## 📘

- Once the Header is registered it needs to be shared with the Capillary Gateways team ([email protected]). The Gateways team will do the Domain and Gateway mapping. This step is internal to Capillary.

1. Org needs to register Content templates in the DLT platform.

## Uploading Template

The following are the key points to remember before uploading a file:

- You can use only the templates that are currently active and approved by the DLT Portal.

- Existing templates with the same template ID will be overridden. For example, when you change a message related to a template ID in excel, it overrides the one which is in Engage+.

- Different DLT portals act differently and hence they can provide different CSV files. These may include whitespaces, curly braces({}), quotes(“”) or anything. Engage+ will take care of such things and trim the final file accordingly.

### To upload an SMS template, follow these steps

1. On the dashboard, clickCreativesand then click theSMStab.

2. ClickUpload template.

![1043](https://files.readme.io/5bc3790-1FZlVU9MGQ7HnmneqvSDOhMuym-hpKsGwg.png)

1. Upload the CSV file with all the required details.

> 📘NoteUsers can upload a file containing DLT approved content templates by clicking on the Upload Template button.Follow all the mentioned instructions.The template will be successfully uploaded after it gets approved by TRAI.Only the templates with valid Template name, Template ID, Type, Sender ID, Approval status, Status, Template message will be saved in Engage+.

## 📘Note

Note

- Users can upload a file containing DLT approved content templates by clicking on the Upload Template button.Follow all the mentioned instructions.The template will be successfully uploaded after it gets approved by TRAI.Only the templates with valid Template name, Template ID, Type, Sender ID, Approval status, Status, Template message will be saved in Engage+.

- Follow all the mentioned instructions.

- The template will be successfully uploaded after it gets approved by TRAI.

- Only the templates with valid Template name, Template ID, Type, Sender ID, Approval status, Status, Template message will be saved in Engage+.

![1149](https://files.readme.io/e5515d9-6rYPS4g_nEoZXyKl9Wrx4MbWfmNKBTp6ng.png)

![512](https://files.readme.io/3d0e6a1-JwhILIaetLVR9u74EMpzYS3ij-hhDutnwg.png)

1. ClickDone.

### Columns of a CSV file:

The sample CSV file contains the following mandatory fields that you need to upload:

- Template ID: Unique ID of the template. It is a 19 or 20 digit unique numeric identifier which is provided by the DLT portal.Note: To avoid shortening your value(truncation), you should change the type to text

- Template name: Unique name of the respective template.

- Type: Specify whether the template is promotional, service explicit or service implicit.

- Header: Sender ID used for broadcasting each message.

- Registered DLT: It consists of the registered DLT portal that is used for the template. For example, Vodafone Idea or Jio.

- Approval Status: The current status of the template from the DLT’s end - approved, pending, or rejected.

- Actual Status: It specifies if the template is active or inactive in the DLT portal.

- Template message: It contains the actual template message that the end-user will receive.

> 📘If there is an error in any row of the uploaded file, the template in that row will not be saved in the Capillary system. However, the file containing error details can be downloaded to check the errors.

## 📘

- If there is an error in any row of the uploaded file, the template in that row will not be saved in the Capillary system. However, the file containing error details can be downloaded to check the errors.

![763](https://files.readme.io/f46ec5b-9SYf5t6FjkzJkoCy4NQrWfl3FGZ3ak7WWQ.png)

![512](https://files.readme.io/a700322-OhNoV7Fls2UpZNTVbt0sj9BpnO5vb8VsIA.png)

### Guidelines to add links in Template

You can also add links in the template message. In India, as there is DLT compliance, users need to ensure the following guidelines while adding a link in SMS:

- The users need to add the link in the {#var#} tag only so that the whitelisted template does not get affected. This is due to DLT compliance restrictions and hence adding links outside the {#var#} tag will result in template mismatch leading to delivery failure.

- If there are any recurring messages that have links in SMS, the link has to be added in the {#var#} tag.

- If there are templates set for coupon expiry reminders or resend messages and has links, these links must be added in the {#var#} tag otherwise, the campaign will fail once the feature gets enabled for your ORG.

### To know how the link works internally, see the following:

- The system replaces the mentioned link with an internal tiny URL.

- The link added by you will be transformed, that is the appearance of the link which has to be tracked would change. For example, if the link iswww.google.com, it would be changed to s.cplry.com/7383936D89.

- The changing of the link would also affect the characters of the SMS script. The replaced link would be 20-22 characters in length and hence the SMS character count can be changed by 15 characters (either add or remove). This could also affect the credits used for a particular SMS script.

## Using approved templates

1. Once the file is successfully uploaded all the templates will be shown in Creatives > SMS.

![889](https://files.readme.io/92f74b2-opL_Ah8YPYHsOKWlx6fFGb-TeuCBWWdS9w.png)

> 📘In the campaign creation flow,  while adding creativity users can select any of the listed templates.

## 📘

- In the campaign creation flow,  while adding creativity users can select any of the listed templates.

1. Selecting the template will open the edit SMS screen. However, in the edit SMS screen, only the variable portion of the template can be edited.

2. You can replace the variables with static text or labels, but a maximum of 30 characters are allowed per variable {#var#} field. Hence, while adding text, users will be able to add a maximum of 30 characters. In case labels are used and a variable field resolves to more than 30 characters the message will fail for sure. Hence, the message for that user will be skipped by Engage+.

> 📘If length for any dynamic variable is more than 30 characters but less than 60, use {{var}} two times consecutively like {{var}}{{var}}. In that case, Engage+ will not skip the message. If the length is more than 60 characters but less than 90, use {{var}}{{var}}{{var}} and so on.

## 📘

- If length for any dynamic variable is more than 30 characters but less than 60, use {{var}} two times consecutively like {{var}}{{var}}. In that case, Engage+ will not skip the message. If the length is more than 60 characters but less than 90, use {{var}}{{var}}{{var}} and so on.

![512](https://files.readme.io/4a9dddd-3h8cr4mH8hsRgMADDjga6e7BrcrVgTrhlg.png)

1. You can map a content template against multiple sender IDs.

> 📘The DLT portal allows this.In such a case the user will have to select one of the sender ids that’s tagged to the content from the delivery settings section

## 📘

- The DLT portal allows this.

- In such a case the user will have to select one of the sender ids that’s tagged to the content from the delivery settings section

![512](https://files.readme.io/9d4975b-QcK6Nzhk3DcaELlCbr6nKoX6_U9OqwizdQ.png)

1. If any of the sender IDs tagged to the content is not shown in the dropdown it means that the sender ID is not registered with Capillary. The gateways team should be contacted to have that sender ID registered with Capillary.

![512](https://files.readme.io/3609d93-gcmge3VITIrhGbn-Iqn0QS3NtqKNeJeUCw.png)

### View the details of failed messages (if any)

Details on the percentage of message failures with corresponding reasons will be available both on Engage+Message Summary PageandMember Care.

Messages might not get delivered due to the following reasons.

- Error related to DLT template

- Error related to Sender ID

- Customers in the NDNC list

## Create SMS template for other Orgs

To create an SMS template for other organizations (non-Indian organizations) refer to the following.

![968](https://files.readme.io/7f5e13b-n1Q0wXLzD4CM2SkQuVtfW6H2ptLBUhdJAQ.png)

1. On the dashboard, click theCreativestab and then click theSMStab.

2. ClickCreate new.

3. Enter aCreative name.

4. Enter aCreative message. Click+Add Labelto use appropriate tags in your message.

5. ClickSave

![951](https://files.readme.io/8fc825c-RqTKSr4V-Fh-1Q7jpNgPDVseh8_ifQxseQ.png)

Note:

- You can see a sample view of your message on the right-side panel.

- Optout tag is compulsory to include. To know more about each tag, see the Message content section.

- If you want to include special characters in your message content, select theAllow Unicode characterscheckbox.

- You can also create SMS content from theCreate messagesection.

For information on Generate OTP APIs, refer to theAPI documentation.

Updated1 day ago