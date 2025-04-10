# Reward Tracking with Status and Custom Fields in Reward Fulfillment

You can utilize the standard field "Status" and add custom fields in the issueReward API to include additional metadata related to reward issuance for tracking purposes. This is especially useful for tracking rewards fulfilled outside the Capillary system.

Key Features:

- Standard Field - STATUS:A new ENUM field called STATUS is now available in the issueReward call to track the current status of reward fulfillment (e.g., received, in-progress, pending, denied, completed).This field is optional and validated against predefined values.

Standard Field - STATUS:

- A new ENUM field called STATUS is now available in the issueReward call to track the current status of reward fulfillment (e.g., received, in-progress, pending, denied, completed).

A new ENUM field called STATUS is now available in the issueReward call to track the current status of reward fulfillment (e.g., received, in-progress, pending, denied, completed).

- This field is optional and validated against predefined values.

This field is optional and validated against predefined values.

- Custom Fields:Issue Reward call now supports custom fields with data types such as String, Integer, Date, and Boolean.Custom fields are unique at the organization level, with options for default values and case sensitivity.A max of 10 custom fields can be passed in the issue Reward call

Custom Fields:

- Issue Reward call now supports custom fields with data types such as String, Integer, Date, and Boolean.

Issue Reward call now supports custom fields with data types such as String, Integer, Date, and Boolean.

- Custom fields are unique at the organization level, with options for default values and case sensitivity.

Custom fields are unique at the organization level, with options for default values and case sensitivity.

- A max of 10 custom fields can be passed in the issue Reward call

A max of 10 custom fields can be passed in the issue Reward call

- Integration with Other APIs:The newly introduced fields are supported by the getPurchasedRewards API and membercare API, ensuring consistent data representation across platforms.

Integration with Other APIs:

- The newly introduced fields are supported by the getPurchasedRewards API and membercare API, ensuring consistent data representation across platforms.

The newly introduced fields are supported by the getPurchasedRewards API and membercare API, ensuring consistent data representation across platforms.

Benefits:

- Enhanced Metadata Handling : Improved tracking of reward fulfillment statuses and additional metadata to streamline operations.

Enhanced Metadata Handling : Improved tracking of reward fulfillment statuses and additional metadata to streamline operations.

- Improved Customer Interactions :Real-time updates and detailed information available on partner portals and mobile apps, enhancing customer satisfaction.

Improved Customer Interactions :Real-time updates and detailed information available on partner portals and mobile apps, enhancing customer satisfaction.

Steps to follow for fulfillment status:

1. Define the predefined values for fulfillment statuses using this API:Create Fulfillment Status.

Define the predefined values for fulfillment statuses using this API:Create Fulfillment Status.

2. Update the predefined values for fulfillment statuses using this API:Update Fulfillment Status.

Update the predefined values for fulfillment statuses using this API:Update Fulfillment Status.

3. Retrieve the predefined values for fulfillment statuses using this API:Get Fulfillment Status.

Retrieve the predefined values for fulfillment statuses using this API:Get Fulfillment Status.

4. Issue Reward Call:Use these fulfillment statuses in the issueReward call (single or bulk). Here, it will be validated against predefined values.Issue Reward (Single)Issue Reward (Bulk)

Issue Reward Call:

- Use these fulfillment statuses in the issueReward call (single or bulk). Here, it will be validated against predefined values.

Use these fulfillment statuses in the issueReward call (single or bulk). Here, it will be validated against predefined values.

- Issue Reward (Single)

Issue Reward (Single)

- Issue Reward (Bulk)

Issue Reward (Bulk)

8. Update the fulfillment status using the update txn API:Update txn API

Update the fulfillment status using the update txn API:Update txn API

9. Retrieve Fulfillment Status:Call the purchased rewards for user API or txn level API to see the value of the fulfillment status of the reward.Get Purchased Rewards for UserGet Txn Level Details for User

Retrieve Fulfillment Status:

- Call the purchased rewards for user API or txn level API to see the value of the fulfillment status of the reward.

Call the purchased rewards for user API or txn level API to see the value of the fulfillment status of the reward.

- Get Purchased Rewards for User

Get Purchased Rewards for User

- Get Txn Level Details for User

Get Txn Level Details for User

Steps to follow for txn custom fields:

1. Create custom fields with scope as ISSUE_REWARD using this API:Create custom field

Create custom fields with scope as ISSUE_REWARD using this API:Create custom field

2. Update custom fields with scope as ISSUE_REWARD using this API:Update custom field

Update custom fields with scope as ISSUE_REWARD using this API:Update custom field

3. Retrieve custom fields with scope as ISSUE_REWARD using this API:Get custom field

Retrieve custom fields with scope as ISSUE_REWARD using this API:Get custom field

4. Issue Reward Call:Use these custom fields in the issueReward call (single or bulk)Issue Reward (Single)Issue Reward (Bulk)

Issue Reward Call:

1. Use these custom fields in the issueReward call (single or bulk)

Use these custom fields in the issueReward call (single or bulk)

2. Issue Reward (Single)

Issue Reward (Single)

3. Issue Reward (Bulk)

Issue Reward (Bulk)

8. Update the custom fields using the update txn API:Update txn API

Update the custom fields using the update txn API:Update txn API

9. Retrieve txn custom fields:Call the purchased rewards for user API or txn level API to see the value of the txn custom fields of the reward.Get Purchased Rewards for UserGet Txn Level Details for User

Retrieve txn custom fields:

1. Call the purchased rewards for user API or txn level API to see the value of the txn custom fields of the reward.

Call the purchased rewards for user API or txn level API to see the value of the txn custom fields of the reward.

2. Get Purchased Rewards for User

Get Purchased Rewards for User

3. Get Txn Level Details for User

Get Txn Level Details for User

Using the IssueReward API to pass fulfillment status and txn custom fields:

1. Passing STATUS and Custom Fields:Include the STATUS field and any txn custom fields in the issueReward call.

Passing STATUS and Custom Fields:

- Include the STATUS field and any txn custom fields in the issueReward call.

Include the STATUS field and any txn custom fields in the issueReward call.

3. Bulk Issue:STATUS and custom fields can also be passed in bulk issue calls.Ensure that the STATUS and custom fields are included for each reward in the bulk call.

Bulk Issue:

- STATUS and custom fields can also be passed in bulk issue calls.

STATUS and custom fields can also be passed in bulk issue calls.

- Ensure that the STATUS and custom fields are included for each reward in the bulk call.

Ensure that the STATUS and custom fields are included for each reward in the bulk call.

6. Issue reward APIsIssue Reward (Single)Issue Reward (Bulk)

Issue reward APIs

- Issue Reward (Single)

Issue Reward (Single)

- Issue Reward (Bulk)

Issue Reward (Bulk)

Example Use Case:

1. Fulfillment Process:A reward partner logs into the partner portal and sees a list of rewards with a pending STATUS.Upon receiving a fulfillment request, the partner updates the STATUS to confirmed.Additional metadata such as ticket number or order ID can be entered.Once fulfillment is complete, the STATUS is updated to completed.

Fulfillment Process:

- A reward partner logs into the partner portal and sees a list of rewards with a pending STATUS.

A reward partner logs into the partner portal and sees a list of rewards with a pending STATUS.

- Upon receiving a fulfillment request, the partner updates the STATUS to confirmed.

Upon receiving a fulfillment request, the partner updates the STATUS to confirmed.

- Additional metadata such as ticket number or order ID can be entered.

Additional metadata such as ticket number or order ID can be entered.

- Once fulfillment is complete, the STATUS is updated to completed.

Once fulfillment is complete, the STATUS is updated to completed.

6. Customer View:End customers can view the STATUS of their rewards and any additional information on their mobile app, providing transparency and enhancing their experience.

Customer View:

- End customers can view the STATUS of their rewards and any additional information on their mobile app, providing transparency and enhancing their experience.

End customers can view the STATUS of their rewards and any additional information on their mobile app, providing transparency and enhancing their experience.

By following these steps, reward partners and brands can effectively use the new STATUS and custom fields to manage reward fulfillment and provide a better experience for end customers.

Updated6 months ago