# FAQs

## Messages

The Delivery Rate is lower than normally expected OR Delivery Rate shows 0% for Promotional message or Delivery Rate shows 0% for messages with Numeric Sender ID.

- The delivery statuses for Promotional SMS (SMS sent from Numeric Sender IDs) are not shared by Gateway Partner, hence are not used to calculate any metrics in Message Performance. For more details, clickhere.

- Reaching out to NDNC customers is directly handled by Telecom Operators - Airtel/ Vodafone, Jio etc. The customers are directly applying for NDNC to these operators. These are some extra settings for example customer can apply for NDNC but can wish to be reached out on certain days or time period. All this will be unknown to Capillary/ Gateway Partner/ Brand. So adding optout tag or not adding is irrelevant for NDNC. We can send entire customer list to operators and they can filter NDNC by their own. Screen reader support enabled.

- We can't handle space issues with static text. If space in coming in {#Var} field or just before or after it it will be taken as 1 character. It is advisable that the excel downloaded from DLT portal is uploaded directly to Engage+. Copy/ pasting templates in excel or manual creation of DLT template upload excel is not advisable as error can occur not only in Template content but Template id etc. as well. Screen reader support enabled.

- NDNC targeting can happen as explained here. Suppose Person1 is NDNC customer. No brands can reach out to Person1 and this will be handled directly by Operators as Person1 would have applied for DND with operators. But Brand-A collected Person1 consent against service explicit or promotional messages. Consent can be collected via microsite signup/ missed call/ manual signing consent form etc. Then Brand A will upload Person1's name and Phone number in "consent customer details" to DLT. This list will overwrite the DND status DLT has for Person1 and is valid only for 6 months. Consent need to be refreshed after 6 months. DLT will then send me messages from Brand A only (for rest brands i remain DND). Screen reader support enabled.

- DND works at Category/ Industry level - not at brand level. So a customer will be in the NDNC list for retail and not for brand X. We get a DLR stating that the customer is DND - this happens only after we have tried to reach out to the customer but the delivery failed. There is no proactive system/ data in the public domain by which Capillary/ brand can know which customer is DND. We are thinking of making a reactive system by adding DND status to the customer after getting the DLR, but for this also we will have to trigger the message once to the customer. The enhancement is not confirmed and depends on tickets we get on this.

Capillary can't make a change to the template registered for the Org in DLT. If the Marketer created a template with a #var where optout can be added, they can add the same from creative Labels as before.

- The respective APIs are not provided by the DLT portals and hence you cannot access these templates from the portal directly as of now.

- A template is expired after 3 years post approval. However, the provision of deleting a template before 3 years is provided by both DLT portal and Engage+.

- No, the template override is based on the template ID which is the unique ID. If the template name is same, you will be asked to change it to make the search easier.

- This is to provide a real-time experience to the customer and to reduce the load on the system, since the upload happens in real time. Also, if the customer wants to upload, say 1000 rows, he can always upload 2 CSV files containing 500 rows each. There is no limit on the number of CSV files to be uploaded.

- If the status is inactive, the operator will not broadcast the message to any customer even if the status was active at the time of upload. Therefore, it will affect the delivery of SMS.

## Offer

## DLT

- Special Characters and Regional language are allowed even in Capillary templates. These need to be less than 30 characters if added in place of {{#var}} or it can be part of the static text approved from DLT. The 'Allow unicode characters' feature takes care of this. It is turned on by default. Screen reader support enabled.

For a detailed answer, click on thislink.

- Reaching out to NDNC customers is directly handled by Telecom Operators - Airtel, Vodafone, Jio etc. The customers directly apply for NDNC to these operators. There are some extra settings, for example, customer can apply for NDNC but can wish to be reached out on certain days or time period. All this will be unknown to Capillary/ Gateway Partner/ Brand. So adding optout tag or not adding is irrelevant for NDNC. We can send entire customer list to operators and they can filter NDNC by their own. Screen reader support enabled.

In general, users copy and paste the templates from vendor portal to excel where space issues may occur. How to handle this?

- We cannot handle space issues with static text. If space in coming in {#Var} field or just before it or after, it will be taken as 1 character. It is advisable that the excel downloaded from DLT portal is uploaded directly to Engage+. Copy/ pasting templates in excel or manual creation of DLT template upload excel is not advisable as error can occur not only in the template content but also other properties like template ID.

- NDNC targeting can happen in the following way now. Suppose, Person1 is an NDNC customer. No brands can reach out to Person1 and this will be handled directly by operators as Person1 would have applied for DND with operators. But Brand A collected Person1 consent against service explicit or promotional messages. Consent can be collected through microsite signup/ missed call or manual signing consent form etc. Then, Brand A will upload Person1's name and Phone number in 'consent customer details' to DLT. This list will overwrite the DND status DLT has for Person1 and is valid only for 6 months. Consent need to be refreshed after 6 months. DLT will then send messages from Brand A only (for rest brands it remain DND).

- No, the header names and column order can differ with different DLT providers. However, Engage+ understands which header name means what and hence the order does not really matter. Even the header names can vary from portal to portal (say, Template ID can be Temp ID for some service providers), but all such the cases will be handled by the product itself.

- Capillary has enabled DLT compliance with three gateways namely Kaleyra, ICS, and Karix. If the Org is integrated with any other gateway the DLT feature will not work for that Org.

- Special Characters and Regional language are allowed even in Capillary templates. These need to be less than 30 character if added in place of {{#var}} or it can be part of the static text approved from DLT. The 'Allow Unicode characters' feature takes care of this. It is turned on by default is on. Screen reader support enabled.

- Optout tag is not mandatory. If a brand wants to add it they need to add a #var in the content while getting it registered in DLT portal.

## Cart Promotions

- Brands can set up the duration for lock expiry. Config is provided in the strategy API. API to release these locked promotions is also provided in case where the auto-lock fails or we don't get the txnAdd or cancel cart call. Please refer to thedocumentationfor these APIs.

- If a previous cart evaluationID is passed in the evaluate call then we release the previously locked promotions and re-evaluate this second cart with added payment modes. If the evaluationID is already cancelled or processed via txnAdd, then we throw an error.

- There are 3 scenarios here,

1. The customer checks out i.e makes the payment - The cart is converted to a transaction after payment. The temp redemptions are marked as permanent.

2. The cart is canceled - In that case, temp redemption is reversed i.e. release the lock on the promotions

3. For some reason above does not happen in that case, the promotion will either get released based on default unlock duration set in strategy or you can use the cancel cart api to release them.

Updatedover 1 year ago