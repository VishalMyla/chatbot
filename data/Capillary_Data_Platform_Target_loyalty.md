# Target loyalty

## User target loyalty import

This profile lets you update custom target values for a list of customers. Target loyalty import overrides the default target value for a customer that is defined while adding a target in the UI.

- Customer identifier* (User ID/External ID/Email/Mobile)

- Target name*: Name of the target.

- Created By: User who created the target.

- Updated By: User who updated the target.

- Period 1(AF): Name of the period.

- Period 2(AF): Name of the period.

> 📘If the period field is blank in the CSV file, then the system will consider the default target value.If you pass any value including 0  in the period field, the system will set the new value as the target (by overriding the default value).

## 📘

- If the period field is blank in the CSV file, then the system will consider the default target value.

- If you pass any value including 0  in the period field, the system will set the new value as the target (by overriding the default value).

CSV Sample using User ID:

User Id,TargetName,CreatedBy,UpdatedBy,Period1,Period22334445,DemoTarget,345678,783456,P1,P2

Template configuration

![645](https://files.readme.io/4305ebe-wEaHFv7mXHsUOSKQw_MocOvf3XqDR0tATw.png)

| OPTION | DESCRIPTION |

| --- | --- |

| Choose customers' unique identifier | Choose the unique customer identifier used in the CSV to identify customers.USER_IDMOBILEEMAILEXTERNAL_ID |

| Enter Target Group Name | Select the target group name for which you want to update custom target values. |

| Target Periods | Add/remove the target duration. |



Updatedover 1 year ago