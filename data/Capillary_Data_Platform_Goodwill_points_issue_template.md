# Goodwill points issue template

The goodwill points issue template allows you to issue goodwill points to the customer.

# Configuring goodwill points issue dataflow

To configure goodwill points issue dataflow, perform the below steps/actions:

1. In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

3. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.It is mandatory to map the fields marked in asterisks (*) with the file.📘NoteThereferenceIdis for future use only. This ensures that in the future, if there is a need to replay the failures from the workflow, in cases where EMF is successful but Intouch end fails due to a timeout, points won't be mistakenly awarded twice to the same customer, as the reference ID is always unique.

In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.

It is mandatory to map the fields marked in asterisks (*) with the file.

![](https://files.readme.io/4b7c8ec-image.png)

> 📘NoteThereferenceIdis for future use only. This ensures that in the future, if there is a need to replay the failures from the workflow, in cases where EMF is successful but Intouch end fails due to a timeout, points won't be mistakenly awarded twice to the same customer, as the reference ID is always unique.

## 📘Note

Note

ThereferenceIdis for future use only. This ensures that in the future, if there is a need to replay the failures from the workflow, in cases where EMF is successful but Intouch end fails due to a timeout, points won't be mistakenly awarded twice to the same customer, as the reference ID is always unique.

`referenceId`

4. In theConnect-to-destinationblock, enter the API endpoint details.For this template the APIv2/request-workflow/GOODWILL-POINTS, is used.  SeeConnect to destination.

In theConnect-to-destinationblock, enter the API endpoint details.For this template the APIv2/request-workflow/GOODWILL-POINTS, is used.  SeeConnect to destination.

`v2/request-workflow/GOODWILL-POINTS`

5. In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

For troubleshooting information, refer to thetroubleshooting sectionof the documentation.

Updated11 months ago