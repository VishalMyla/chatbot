# Data cleanup

## Identifier Cleanup

This profile is used to clean up wrong or invalid identifiers of customers including first name and last name. Once the values are removed, you can update identifiers with the correct details using the Loyalty Customers profile.

You can also use this to delete a customer account by cleaning up all the registered identifiers and marking the customer Fraud.

In CSV file, you need to pass the user IDs of customers and in Configure Template, you need to select the fields that you want to remove for those customers.

- Customer id or account will not be removed completely through identifier clean up. You need to mark the customer fraud to exclude cleaned up accounts in activities such as reporting.

Customer id or account will not be removed completely through identifier clean up. You need to mark the customer fraud to exclude cleaned up accounts in activities such as reporting.

- Currently, identifier cleanup is supported only for the InStore profile. You cannot remove identifiers from profiles of other sources.This profile is used to clean up the following fields of customers:

Currently, identifier cleanup is supported only for the InStore profile. You cannot remove identifiers from profiles of other sources.This profile is used to clean up the following fields of customers:

- First Name

First Name

- Last Name

Last Name

- Email ID

Email ID

- UserID

UserID

- Mobile No.

Mobile No.

- External ID

External ID

CSV Sample:UserId

3128907

Template configuration for Identifier CleanupSelect and add identifiers that you want to clean up.

![571](https://files.readme.io/5c2e4af-opDHXcr81yCTKWKv5Vm-q_SUU0DFdvHghg.png)

## Lifetime Purchases Recalculation

This profile calculates the lifetime purchases amount of a specific user based on the user id provided. For example, if transactions are imported from bill dump, you can calculate the lifetime purchases of those users through this profile.

CSV field:

- User ID*

Updatedover 1 year ago