# Retro transaction template

The retro transaction template allows you to tag retro (old) not-interested transactions to customers and change it to regular transactions. This can occur for a variety of reasons, such as an error in the transaction process, a delay in the transaction being recorded, or a promotion being applied retroactively to a past purchase. For more information on retro transactions, refer to the documentationhere.

# Configuring retro transaction dataflow

To configure retro transaction dataflow, perform the below steps/actions:

1. In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. For the information on configuring this block, refer toConnect to sourcedocumentation

In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. For the information on configuring this block, refer toConnect to sourcedocumentation

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. For the information on configuring this block, refer toDecrypt datadocumentation.

In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. For the information on configuring this block, refer toDecrypt datadocumentation.

3. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.It is mandatory to map thecustomerId,transactionId,oldTypeandnewTypefields with the file. The value of the fieldsnewTypeandoldTypewill be NOT_INTERESTED and REGULAR respectively.

In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.

It is mandatory to map thecustomerId,transactionId,oldTypeandnewTypefields with the file. The value of the fieldsnewTypeandoldTypewill be NOT_INTERESTED and REGULAR respectively.

`customerId`

`transactionId`

`oldType`

`newType`

`newType`

`oldType`

![](https://files.readme.io/d6d3237-image.png)

4. In theConnect-to-destinationblock, enter the API endpoint details. For the information on configuring this block, refer toConnect to destinationdocumentation.

In theConnect-to-destinationblock, enter the API endpoint details. For the information on configuring this block, refer toConnect to destinationdocumentation.

5. In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

For troubleshooting information, refer to thetroubleshooting sectionof the documentation.

Updated11 months ago