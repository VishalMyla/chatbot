# Add customer template

Using the Customer v2 add template on Connect+ you can add customers to the organization in bulk.

To configure the template, perform the following:

1. In theConnect-to-sourceBlock, enter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

3. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.📘NoteSelect theCustomer Creation Date Formatcheckbox to include the date of customer creation . You can select the date format of your choice from theCustomer Create Date Formatdropdown.You can add card details of a customer such as card status, card number and card series ID in the Identifers tab and custom name for the card can be assigned from theextendedFieldstab.

> 📘NoteSelect theCustomer Creation Date Formatcheckbox to include the date of customer creation . You can select the date format of your choice from theCustomer Create Date Formatdropdown.You can add card details of a customer such as card status, card number and card series ID in the Identifers tab and custom name for the card can be assigned from theextendedFieldstab.

## 📘Note

Note

- Select theCustomer Creation Date Formatcheckbox to include the date of customer creation . You can select the date format of your choice from theCustomer Create Date Formatdropdown.

- You can add card details of a customer such as card status, card number and card series ID in the Identifers tab and custom name for the card can be assigned from theextendedFieldstab.

![](https://files.readme.io/14300a0-customer_creation.png)

1. In theConnect-to-destinationblock, enter the API endpoint details. SeeConnect to destination.For this template, the API used is /v2/bulk/addCustomers.

2. In theTrigger sectionblock, enter the details to schedule the trigger.See Trigger.

Updatedabout 1 year ago