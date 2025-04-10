# Card update template

The card update template allows you to update the card details.

# Configuring card update dataflow

To configure coupon redeem dataflow, perform the below steps/actions:

1. In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

3. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.It is mandatory to map the statusLabel and the cardNumber fields with the file.

In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.

It is mandatory to map the statusLabel and the cardNumber fields with the file.

![](https://files.readme.io/27e665f-image.png)

1. In theConnect-to-destinationblock, enter the API endpoint details.For this template the API/v2/card, is used.  SeeConnect to destination.

`/v2/card`

2. In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

Updated11 months ago