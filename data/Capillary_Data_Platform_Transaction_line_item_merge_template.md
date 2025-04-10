# Transaction line item merge template

This template enables comparison and merging of transaction data from both the line item file and the bill-level file, then adds the merged data to the platform.

During merging, the template also performs additional calculations, such as determining the bill amount using expressions, and includes the calculated values in the merged file.

## Use case

Scenario:

A retail company receives data in two separate Excel files. One file contains bill-level information, including total amounts, dates, and customer details. The other file contains line-level data, such as individual items, quantities, and prices. The retail company wants to create a consolidated dataset that combines bill-level and line-level data. They want to know which items were purchased in each bill and calculate the total cost of each item in every bill.

Solution:

They can use Transaction line item merge template and choose the "Inner Join" option to include only the records that have matching BillNumbers in both data sources.

## Configuring transaction line item merge dataflow

To configure transaction line item merge dataflow, perform the below steps/actions:

1. In theConnect-to-sourceBlock, enter the source server details where the source data is present and the location for saving the processed file. SeeConnect to source.

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

3. In theJoin-Datablock, enter the required details and define the conditions to merge the two files and join the data. SeeJoin Data.

4. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.

5. In theConnect-to-destinationblock, Enter the API endpoint details. SeeConnect to destination.For this template, the API/v2/transactions/bulkis used.

6. In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

## FAQ

Q:Is it mandatory to enableMerge based on common Namecheckbox?A:Yes, It is mandatory toMerge based on common Namecheckbox to make sure the correct files are merged together.

Q:How to view the transaction details in Memebercare against the customer?A:You can view the customer details in Membercare by clicking on Transactions under the Events tab.

Q:Is it mandatory to enable theAlphabetical sortcheckbox?A:Yes, it is highly recommended to enable theAlphabetical sortcheckbox to ensure accurate sorting of the files in alphanumerical order.

Updatedover 1 year ago