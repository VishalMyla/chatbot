# Manage ID change requests

You can submit the following change requests:

- Goodwill requests (coupons and points)

- Change mobile number

- Change Email ID

- Change external ID

- Account merge

- Edit profile

- Delete member's account

## Configure notifications, auto-approval, OTP settings , and set escalation flow

Note:This can be performed only from old Membercare

To configure Email, Mobile, External ID, or Account Merge settings, do the following:

1. On Member Care, navigate to theSettingscategory and clickID Change Request Settings. You will see different change request types -Email, Mobile, External ID, Account, andRetro Transaction.

![](https://files.readme.io/cdd3725-7-73GvoR3hQKuNrt4Gsl-V2OJd5TIptOyQ.png)

1. Click on the option that you want to configure. You will see the corresponding options as shown below.

![](https://files.readme.io/e3b20c3-image.png)

1. Configure the following settings and then click Save.

| Option | Description |

| --- | --- |

| Email these on arrival of request | Select the employees of your org (org POCs) that you want to notify through emails when identifier change or account merge requests are submitted - it could be through Member Care, InStore, or API. Use theFilterbox to search users by name.InAllow Request, select any of the following options.Never: Select this if you do not want to send any alerts to org POCs.Always: Select this to always send alerts to org POCs whenever a new request is logged.- Only when: Select this to alert org POCs based on the transaction value of the customer. |

| Auto Approve | SetAuto Approveto On if you want to automatically approve Email, Mobile, External ID, or Account Merge requests, without the requests having to be queued for approval. |

| Communicate Change to | For Email or Mobile select whether to notify to the old identifier or new identifier and click Configure to set the notification message.SelectOld IDto send a notification to the old email id or mobile number regarding the identifier change.SelectNew IDto send a notification to the new mobile number or email id.For External ID, you can notify through both SMS and email. Click the respectiveCONFIGUREbutton to set the message. |

| Configure Email(not applicable for Mobile) | 1. Click theConfigurebutton to configure the Email message.2. In theConfigure Emailwindow, type the subject in theSubjectbox. In the message body, type the content and insert images. Add custom tags in the message body using the predefined tags wherever required.3. ClickSaveChanges. |

| Configure SMS(not applicable for Email) | 1. Click theConfigurebutton to configure the SMS message.2. In theConfigure SMS window, type in the message and include predefined tags wherever required. |

| OTP settings(Applicable to all identifiers) | Set the to OTP slider toOnto enable OTP validation for the customer identifier. |



1. ClickSaveto save the changes.

## Update Identifiers Directly (One Step Change)

Org admins can update identifiers through one-step change without the need of sending for approval.

1. Open the respective identifier change request page that you want to update - mobile, email or external id

2. ClickOne Step Change.

3. Enter the current identifier (email ID/mobile number/external ID) in theExistingbox.

4. Enter the new identifier (email ID, mobile number, or external ID) in theRequested Tobox.

5. ClickProceed.

## Download Identifier Change Requests

You can download ID change requests (Account Merge, Mobile Reallocation, Email, Mobile, or External ID) as a CSV file. To download the list of requests, do the following.

1. On the respective identifier change requests page, click theDownloaddrop-down that appears on the top-right

2. Set the duration of the requests that you want to download inStart DateandEnd Date

3. In Download, select the statuses that you want to download - Pending, Approved, and Declined

4. ClickProceed

![](https://files.readme.io/fa48402-ElpdhWWYb2FsDzo5mdA4kcYmOdi2x31g9Q.png)

The list gets downloaded as a CSV file.

## Delete member account

Navigate to the Membercare home page, then click the three-dots menu. From theID change requestdropdown, selectDelete member's accountand submit the request.

After a deletion request is raised for a customer, their status changes toDeletion Pending. The member account is deleted only after the deletion request is approved. For information on approving or rejecting a request, refer toManage requests.

## Merge Accounts

When duplicate accounts of a customer can exist. you can merge those accounts into one. One account will be survived and another account will be moved

*Surviving Account: The customer account that will remain to continue after merging accounts is the Surviving Account.Deactivating Account: The customer account that will be removed after merging is a deactivating account. The account *once deactivated cannot be activated again and its data cannot be retrieved. However, the entire data will be validated and moved to the surviving account.

### Settings for Account Merge Requests

You can configure to notify org POCs on merge requests, automatically approve merge requests without the need of the back-end team to approve it, and notify customers through SMS and email when their accounts are merged.

1. On the Member Care navigation pane, clickSettings > ID Change Request Settings > Account.

2. InEmail these on arrival of request, select the org POCs that you want to notify on new merge requests.

3. SetAuto approveto On to automatically approve merge requests directly.

4. InCommunicate change to, select whom to notify in case of account merge.

- CheckRequestorto notify the customer that requested for account merge.

- CheckSurvivorto notify the customer whose remains after merging.

- Check bothRequestorandSurvivorto notify both.

1. To configure SMS notification, click theConfigurebutton next to Configure SMS and create the message. Use predefined tags wherever required.

2. To configure email, click theConfigurebutton next to Configure Email.

- InSubject, enter the subject of the email.

- In the message body, set up the message body with content and insert images. You can add predefined tags in the message wherever required. To add tags, just click the tag from the list on the left.

- ClickSave Changes.

1. ClickSave.

![](https://files.readme.io/1a38e6b-EZ2KzSZPLt6ceFoD1IPtiaKeo71CX7EEsg.png)

### Merge Accounts Directly (One Step Change)

To merge duplicate accounts directly, you can use the One Step Change option. Only admin users of an org have access to this feature.

1. In theAccount Merge Change Requestpage, clickOne Step Change.

2. In theExistingBox, type the email ID, mobile number, or external ID of the existing account that you want to merge.

3. In theRequested Tobox, type the email ID, mobile number, or external ID of the account into which you want to merge - survivor account.

4. ClickProceed.

![](https://files.readme.io/5a5ffe2-e-eLH_sC6JW09BNYO0HYwZMEkQMjuPuyug.png)

### Download Account Merge History

To download accounts merge history as a CSV file, do the following:

![](https://files.readme.io/0ce1453-ElpdhWWYb2FsDzo5mdA4kcYmOdi2x31g9Q_1.png)

1. On theAccount Mergepage, click theDownloaddrop-down that appears on the top-right

2. Set the duration of the requests that you want to download inStart DateandEnd Date

3. InDownload, select the statuses that you want to download - Pending, Approved, and Declined.

4. ClickProceedThe list gets downloaded to your computer as a CSV file.

### Effect of account merging on the customer data

After merging, the account that continues to remain is a survivor account and the account that is merged into the survivor account is a victim account.

* Registration date: The registration date will be the earlier date between the two accounts

- Transactions: All transactions of the victim will be merged into the survivor's account

- Points & Coupons: All points and coupons of the victim will be merged into the survivor's account

- Rewards: All rewards of the victim will be merged into the survivor's account.The following table provides a comprehensive list of changes that will occur when two accounts are merged.

| Parameter | Victim | Survivor | Final Values after Merging |

| --- | --- | --- | --- |

| Mobile Number/Email ID/External ID | ID1ID1Null | ID2NullID2 | ID2ID1ID2The customer identifier will be the unique id of the surviving account if the customer id is available in both accounts.If the customer id is not available in the surviving account, then the values will be picked from the deactivating account (if available in that account). |

| Registered Date | D1 | D2 | D1 - If D1<D2D2 - If D2<D1The earlier date among the two accounts will be considered as the final registration date. |

| Registered Till | Till1 | Till2 | Till1 - If D1<D2Till2 - If D2<D1Based on the final registered date considered, registered at till varies.The final registration at till will be the till of the registered date considered after merging in surviving account. |

| Registered Store | Store 1 | Store 2 | Store1 - If D1<D2Store2 - If D2<D1Based on the final registered date considered, registered at store varies.The registered store will be the store of the earlier registered account among the two.For example, if the registered date of the deactivating account is earlier than the registered date of surviving account then the entire registration details such as the registered date and registered at store/till/base terminal will be considered from the deactivating account. |

| Base Terminal | T1 | T2 | Terminal1 - If D1<D2Terminal2 - If D2<D1The final value will be the base terminal of the earlier registered account among the two.For example, if the registered date of the deactivating account is earlier than the registered date of surviving account then the entire registration details such as the registered date and registered at store/till/base terminal will be considered from the deactivated account. |

| Customer Level Custom Fields | F1F3Null | F2NullF4 | F2F3F4The resultant custom fields after merging will be the custom fields of the surviving account if the custom field values are available in both accounts.If any custom field is not available in the surviving account then the custom field value will be taken from the deactivating account (if available in that account). |

| Transactions | Tran1 | Tran2 | Tran1+Tran2The final transaction amount after merging will be the sum of transactions of individual accounts. |

| Return Transactions | RT1 | RT2 | RT1+RT2After merging, the return transactions will be the sum of return transactions of individual accounts |

| Lifetime Points | LP1 | LP2 | LP1+LP2The lifetime points after merging will be the sum of the lifetime points of individual accounts. |

| Current Points/Active Points | CP1 | CP2 | CP1+CP2The current points or active points after merging will be the sum of the current points of individual accounts. |

| Expired Points | EP1 | EP2 | EP1+EP2The final expired points after merging will be the sum of the total number of points expired in each account. |

| Redeemed Points | RP1 | RP2 | RP1+RP2The final redeemed points after merging will be the sum of the total number of points redeemed in each account. |

| Till ID |  |  | We retain till id as is in points tables. In CPS, we keep the till attribution for registration as the survivor's. The points award entry will remain connected to the till where it was originally generated. So you can achieve whatever you want. |

| Promised points | PP1 | PP2 | PP1+PP2The promised points after merging will be the sum of the promised points of individual accounts.When the transaction is returned, the return will be processed. |

| Imported points | IP1 | IP2 | IP1+IP2Imported points are PACP points (Points Awarded Customer Promotions table) and will follow all the rules as mentioned in this table. |

| Opening points (points of third-party) |  |  | We don't store third party points. Hence, the opening points scenarios are invalid. |

| Till ID of points issued |  |  | The points issued from each TILL is retained as is while merging. There will not be any change in the TILL ID associated with each set of points. |

| Points Expiry (Expiry schedule) | Date1 | Date2 | Date1 and Date2.Points will get expired as per the expiry schedule for points earned each time, even after merging.For instance, if a customer has earned 300 points for purchase and assumes that the points will get expired on Aug 1, 2014, if not redeemed. Now, the customer account is merged with another account. Then, the 300 points that are transferred to the surviving account will still get expired on Aug 1, 2014, irrespective of the merge date or any other factor. |

| Tracker Data | Tracker1 | Tracker2 | The trackers for both the accounts will be combined, and the tracker condition will be calculated on the final values (values in surviving account after merging). |

| Tier | S1 | S2 | If S1>S2, then S1 will be the final tier.If S2>S1, then S2 will be the final tier.- If S1=S2, then no tier upgrade takes place.The new tier will be the highest of the two tiers. |

| Tier Movement History | S1 | S2 | If S1>S2, then S1 will be the final tier, and a new record for upgrading from S2 to S1 will be created on the retaining account.If S2>S1, then S2 will be the final tier. As no tier upgrade happens in the continued account, no new record will be created in his/her account.- If S1=S2, then no tier upgrade takes place, and hence no additional record will be created. |

| Issued Rewards | IR1 | IR2 | IR1+IR2The issued rewards of the deactivating account will be transferred to the surviving account, enabling the customer to use all the rewards of both accounts.For unique rewards: Each reward will be transferred and tagged as issued.For common rewards: Both rewards will be merged and tagged as issued. The expiry date will be the one that has the later expiration date. |

| Cluster Information | C1 | C2 | The final customer data after merging will be recomputed and the cluster will be categorized as per the new figure.For example, assume that the deactivating account is in cluster C1 and the surviving account is in cluster C2. After merging the accounts, based on the new data available cluster strategy is recalculated.Now, if the new result meets the strategy of the cluster C3 then the surviving account after merging will be moved to the C3 cluster.However, after merging the accounts there are chances for the customer to fall either in C1 or C2 based on the recomputed result. |

| NDNC Status | Status1 | Status2 | Status1 - If the mobile number of the deactivating account retains after merging,Status2 - If the mobile number of the surviving account retains after merging.NDNC status is specific to a mobile number. So, the NDNC status of the merged account depends on the mobile number that will continue to remain after merging.For example, if the deactivating account's mobile number is retained after merging, the NDNC status will remain the same in the surviving account. |

| NDNC Status (When the mobile number is a secondary identifier) | Registered/Not Registered | Not Registered/Registered | Depending on the final mobile number considered after merging, NDNC status varies.For example, if the NDNC status of the final mobile number is registered in NDNC then the same status will continue to remain. |

| Opt-in Status |  |  | Whatever the communication services the surviving account has opted-in for the same will exist even after merging. |

| Subscription Status |  |  | Whatever is the subscription status of the surviving account, same will continue to remain after merging. |

| Messages | Set ofMessages1 | Set ofMessages2 | Set of Messages2Messages or notifications will not be merged or transferred from the deactivating account to the surviving account. The only messages of the surviving account continue to exist even after merging. |

| Fraud Status | Reconfirmed | Confirmed/Marked as Fraud/Not Fraud | ReconfirmedIf the fraud status of the deactivating account is Reconfirmed then the Fraud Status of the surviving account will change to Reconfirmed. |

| Fraud Status | Confirmed/Marked as Fraud/Not Fraud | Reconfirmed | ReconfirmedEven though the fraud status of the deactivating account is Confirmed/Marked as Fraud/ Not Fraud the surviving account's fraud status will remain Reconfirmed. |

| Fraud Status | Confirmed | Marked as Fraud/Not Fraud | ConfirmedEven though the fraud status of surviving customer is Marked as Fraud/ Not Fraud the final status after merging will be changed Confirmed. |

| Fraud Status | Marked as Fraud/Not Fraud | Confirmed | ConfirmedIf both accounts are in confirmed status the final value after merging also remains Confirmed. |

| Fraud Status | Marked as Fraud | Not Fraud | Marked as FraudIf in any one account, the customer is marked as fraud, then the final status after merging will also be Marked as Fraud. |

| Fraud Status | Not Fraud | Marked as Fraud | Marked as FraudIf in any one account, the customer is marked as fraud then the final status after merging will also be Marked as Fraud. |

| Fraud Status | Reconfirmed/Confirmed/Marked as Fraud | Internal | InternalIf at least one account status is internal then the final account status will be Internal. |

| Fraud Status | Internal | Confirmed/Marked as Fraud | InternalIf at least fraud status of merging accounts is internal then the final surviving account status will be Internal. |

| Card details | C2 | C2 | C1 & C2. The cards of the victim are transferred to the survivor's account. |

| Transaction requests | Transaction Request 1 | Transaction Request 2 | Transaction request 1 & 2. The pending transaction requests of the victim are transferred to the survivor. |



> ❗️When merging cards with the survivor, the application may generate warnings in the following scenarios:If the total number of cards under the survivor exceeds the defined maximum number of active cards per customer for individual card types.If the total number of cards under the survivor exceeds the defined maximum number of active cards based on global card settings.However, you can choose to ignore the warning and proceed with adding the cards to the survivor.

## ❗️When merging cards with the survivor, the application may generate warnings in the following scenarios:

When merging cards with the survivor, the application may generate warnings in the following scenarios:

1. If the total number of cards under the survivor exceeds the defined maximum number of active cards per customer for individual card types.

2. If the total number of cards under the survivor exceeds the defined maximum number of active cards based on global card settings.

However, you can choose to ignore the warning and proceed with adding the cards to the survivor.

### Excluding card merging during account merge

By default, when merging customer accounts, the cards associated with the victim account are transferred to the survivor account automatically. In case the customer exceeds the set threshold for the maximum number of cards they can hold, the transfer of cards from a victim to a survivor account will proceed with a warning.However, if you want do not want to transfer the cards of the victim account to the survivor account during a customer merge, you can raise a ticket and disable theCONF_ALLOW_CARD_TRANSFER_TO_SURVIVORconfiguration. This ensures that the cards are not transferred along with the other existing parameters.

`CONF_ALLOW_CARD_TRANSFER_TO_SURVIVOR`

> ❗️There is no UI to enable this configuration. You need to raise a JIRA ticket (sample ticket) to the sustenance team to enable these configurations. Turn around time is five days.

## ❗️There is no UI to enable this configuration. You need to raise a JIRA ticket (sample ticket) to the sustenance team to enable these configurations. Turn around time is five days.

There is no UI to enable this configuration. You need to raise a JIRA ticket (sample ticket) to the sustenance team to enable these configurations. Turn around time is five days.

## Skipping secondary identifiers when merging user data

You can use theCONF_SKIP_SECONDARYconfiguration to determine whether to skip using secondary identifiers when merging user data. If enabled, the system will not use secondary identifiers when a matching user is found; instead, it will only consider the primary identifier.

`CONF_SKIP_SECONDARY`

The section below explains the scenarios when the configuration is enabled and disabled.

### Terms

- Campaign user -  An individual whose identifiers are present in Capillary's Campaign users' list, used for sending campaign messages.

- Loyalty user: An individual who is already a customer and enrolled into a loyalty program.

- Incoming transaction: An incoming transaction from a new or existing customer.

### CONF_SKIP_SECONDARY is disabled

When CONF_SKIP_SECONDARY is disabled, the campaign user will merge with the loyalty user based on matches with the primary identifier or any other identifier.

### Example 1:

#### Primary Identifier - Mobile

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign user | E1 | M1 |

| Incoming transaction user data | E1 | M2 |



Primary Identifier (Mobile) Match:

- The system compares the Mobile identifiers.

- Campaign User has Mobile (M1) and the incoming request has Mobile (M2).

Merge Decision:

- The Campaign User's existing details (Email: E1, Mobile: M1) will be updated to Email: E1, Mobile: M2.

- Depending on the payload passed, this updated user will be considered a loyalty or non-loyalty user.

### Example 2:

#### Primary identifier - mobile

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign User | E1 | M1 |

| Loyalty User | NULL | M2 |

| Incoming transaction user data | E1 | M2 |



Matching Process:

Primary Identifier (Mobile) Matching:

- The system compares the primary identifier (Mobile).

- Campaign User has Mobile: M1, but the request has Mobile: M2.

- Loyalty User has Mobile: M2, which matches with the request.

Secondary Identifier (Email) Matching:

- Incoming user data's Email (E1) matches the Campaign User's Email (E1).

- However, the merge is primarily driven by the primary identifier (Mobile).

Merge Process:

- Since CONF_SKIP_SECONDARY is disabled, the merge considers both primary and secondary identifiers.

- Campaign User (Email: E1, Mobile: M1) and Loyalty User (Email: NULL, Mobile: M2) are merged.

Result:

- Campaign user's Email remains NULL, and Mobile remains M1: Email(NULL), Mobile(M1).

Campaign user's Email remains NULL, and Mobile remains M1: Email(NULL), Mobile(M1).

- Loyalty user's Email is updated to E1, and Mobile remains M2: Email(E1), Mobile(M2).After Merging

Loyalty user's Email is updated to E1, and Mobile remains M2: Email(E1), Mobile(M2).

After Merging

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign User | NULL | M1 |

| Loyalty User | E1 | M2 |



> 📘NoteIf the survivor user's email or mobile is Null (Loyalty user), then the victim (Campaign user) user's email or mobile will merge into a survivor.

## 📘Note

Note

- If the survivor user's email or mobile is Null (Loyalty user), then the victim (Campaign user) user's email or mobile will merge into a survivor.

### Example 3:

#### Primary identifier - mobile

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign User | NULL | M2 |

| Loyalty User | E1 | NULL |

| Incoming transaction user data | E1 | M2 |



Primary Identifier (Mobile) Match:

- The system compares the Mobile identifiers.

- Campaign User has Mobile (M2) and the incoming request has Mobile (M2).

Merge process

The merge occurs because the mobile (M2) of the campaign user matches the corresponding data in the incoming transaction user data(M2), and the email (E1) of the loyalty user matches the corresponding data in the incoming transaction user data(E1).

After Merging

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign User | NULL | NULL |

| Loyalty User | E1 | M2 |



> 📘NoteIf the survivor (Loyalty user) user's email or mobile is null, then the victim (Campaign user) user's email or mobile will merge into the survivor.The loyalty user’s email remains the same as E1 and mobile changes to M2 because the victim details will be merged into a survivor.

## 📘Note

Note

- If the survivor (Loyalty user) user's email or mobile is null, then the victim (Campaign user) user's email or mobile will merge into the survivor.

- The loyalty user’s email remains the same as E1 and mobile changes to M2 because the victim details will be merged into a survivor.

### CONF_SKIP_SECONDARY is Enabled

When CONF_SKIP_SECONDARY is enabled, the system skips secondary identifiers during the merging process of campaign and loyalty users. In this scenario, merging will not happen based on secondary identifier matches alone. Instead, merging relies on primary identifier matches between campaign and loyalty users.

### Example 1:

#### Primary Identifier - Mobile

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign User | E1 | M1 |

| Incoming transaction user data | E1 | M2 |



Matching Process:

- Since CONF_SKIP_SECONDARY is enabled, the system ignores the secondary identifier (Email) and only considers the primary identifier (Mobile).The Campaign User has Mobile: M1, which does not match the incoming request's Mobile: M2.

Merge Process:

- No existing user with Mobile: M2 is found in the database.

- Since the primary identifier (Mobile) does not match any existing user, no merge happens with the Campaign User.

- A new loyalty user is created with the provided primary identifier (Mobile: M2).

Result:

- Campaign User: Remains unchanged: Email: E1, Mobile: M1.

- New Loyalty User: Created with: Email: NULL, Mobile: M2 (since the incoming request's primary identifier is M2, and secondary identifiers are ignored).

After Merging

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign User | E1 | M1 |

| New loyalty user (based on the payload) | NULL | M2 |



### Example 2:

#### Primary Identifier - Mobile

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign User | E1 | M1 |

| Loyalty User | NULL | M2 |

| Incoming transaction user data | E1 | M2 |



Matching Process:Primary Identifier (Mobile) Matching:

The system looks at the primary identifier (Mobile).Customer 3 has Mobile: M2, which matches with the Loyalty User's Mobile: M2.

Secondary Identifier (Email) Matching:Even though CONF_SKIP_SECONDARY is enabled, Customer 3's Email: E1 matches the Campaign User's Email: E1.However, the merge is primarily driven by the primary identifier (Mobile).

Merge Process:Since CONF_SKIP_SECONDARY is enabled, the merge is based on the primary identifier.Customer 3 (Email: E1, Mobile: M2) matches with both the Campaign User (Email: E1, Mobile: M1) and the Loyalty User (Mobile: M2).

Result:The merge happens because the primary identifier (Mobile) matches. Campaign User (Email: E1, Mobile: M1) and Loyalty User (Mobile: M2) are merged.

After Merging

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign User | NULL | M1 |

| Loyalty User | E1 | M2 |



> 📘NoteIf the survivor user (Loyalty User) has NULL in either email or mobile, the corresponding field from the victim user (Campaign User) will be merged into the survivor.In this case, since the Loyalty User's Email was NULL, it is updated to E1 from the Campaign User.

## 📘Note

Note

If the survivor user (Loyalty User) has NULL in either email or mobile, the corresponding field from the victim user (Campaign User) will be merged into the survivor.In this case, since the Loyalty User's Email was NULL, it is updated to E1 from the Campaign User.

### Example 3:

#### Primary Identifier - Mobile

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign User (Customer 1) | NULL | M2 |

| Loyalty User (Customer 2) | E1 | NULL |

| Incoming transaction user data (Customer 3) | E1 | M2 |



Primary Identifier Matching:

- The primary identifier is Mobile.

- Customer 3 has Mobile: M2, which matches Customer 1's Mobile: M2.

Secondary Identifier Matching:

- Customer 3 has Email: E1, which matches Customer 2's Email: E1.

- Since CONF_SKIP_SECONDARY is enabled, secondary identifiers should generally be ignored. However, in this case, secondary identifiers still cause a conflict due to the match.

Merging process:

- The system identifies that Customer 3's Email (E1) matches Customer 2's Email, and Mobile (M2) matches Customer 1's Mobile. The system gives preference to the Loyalty user (Customer 2).

- The attempt to add Customer 3 fails because there is a conflict with existing users, and preference is given to the Loyalty user where the primary identifiers are not a match.

Result:

| Customer Type | Email | Mobile |

| --- | --- | --- |

| Campaign User (Customer 1) | NULL | M2 |

| Loyalty User (Customer 2) | E1 | NULL |

| New request | Not added due to conflict |  |



### Example 4:

#### Primary Identifier - Mobile

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign User | E1 | NULL |

| Loyalty User | NULL | M2 |

| Incoming transaction user data | E1 | M2 |



Matching Process:

Primary Identifier (Mobile) Matching:

- The system considers the primary identifier (Mobile).

- Customer 3 has Mobile: M2, which matches with the Loyalty User's Mobile: M2.

Secondary Identifier (Email) Matching:

- Despite CONF_SKIP_SECONDARY being enabled, Customer 3's Email: E1 matches the Campaign User's Email: E1.

- However, the merge primarily relies on the primary identifier (Mobile).

Merge Process:

- Due to CONF_SKIP_SECONDARY being enabled, the merge is based on the primary identifier.

- Customer 3 (Email: E1, Mobile: M2) matches both the Campaign User (Email: E1, Mobile: M1) and the Loyalty User (Mobile: M2).

Result:The merge occurs because the primary identifier (Mobile) matches. The Campaign User (Email: E1, Mobile: M1) and the Loyalty User (Mobile: M2) are merged.

After Merging

| Type of User | EMAIL | MOBILE |

| --- | --- | --- |

| Campaign User | NULL | NULL |

| Loyalty User | E1 | M2 |



> 📘NoteIf the survivor user (Loyalty User) has NULL in either email or mobile, the corresponding field from the victim user (Campaign User) will be merged into the survivor.In this case, since the Loyalty User's Email was NULL, it is updated to E1 from the Campaign User.

## 📘Note

Note

If the survivor user (Loyalty User) has NULL in either email or mobile, the corresponding field from the victim user (Campaign User) will be merged into the survivor.In this case, since the Loyalty User's Email was NULL, it is updated to E1 from the Campaign User.

Updatedabout 1 month ago