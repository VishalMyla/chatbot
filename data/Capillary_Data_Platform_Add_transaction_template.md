# Add transaction template

The transaction templates allow you to post the customer transaction data.

# Use case

Using this template, you can post customer transactions according to the filters of your choice.

# Configuring transaction templates

There are six transaction templates available to choose from based on your requirements.

| Template name | Description |

| --- | --- |

| InTouch transaction V2 add | Enables you to sort, transform, and post your data using the OAuth client. |

| Transaction V2 add with payment mode | Allows you to add a single transaction data file. |

| Transaction V2 add | Enables you to decrypt, sort, transform, filter, and post the transaction data using the OAuth client. |

| Transaction V2 add with filter | `Enables you to filter, sort, transform, and post the transaction data using the OAuth client. |

| Transaction line item payment mode merge | Enables you to merge three files and post the transaction data using the OAuth client |

| Transaction customer v2 add | Enables you to post transaction data with the option to post customer data using the OAuth client. |



To configure an add transaction template, perform the below steps:

1. In theConnect-to-sourceBlock, enter the source server details where the source data is present and the location for saving the processed file. SeeConnect to source.

2. In theDecrypt-datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

3. (Applicable only for Transaction LineItem PaymentMode Merge and Transactions Customers V2 Add)In theJoin-Datablock, enter the required details and define the conditions to merge the two files and join the data. SeeJoin Data.

4. In theTransform-datasection, enter the required details and define the conditions to transform the headers. SeeTransform-data.

5. In theEncrypt-datablock, enter the encryption details to encrypt the file. SeeEncrypt Data.

6. In theConnect-to-destinationblock, enter the SFTP server details. EnterConnect to destination.

7. In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

Updatedover 1 year ago