# Force generate barcode template

The force-generate barcode template allows you to generate barcodes for an existing customer. For more information on barcodes, refer to the documentationhere.

# Configuring force generate barcode dataflow

To configure force generate barcode dataflow, perform the below steps/actions:

1. In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. For the information on configuring this block, refer toConnect to sourcedocumentation.

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. For the information on configuring this block, refer toDecrypt datadocumentation.

3. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.

4. In theConnect-to-destinationblock, enter the API endpoint details.For this template an internal API/v2/customers/barcode/forceGenerate, is used.  For the information on configuring this block, refer toConnect to destinationdocumentation.

`/v2/customers/barcode/forceGenerate`

5. In theTriggerblock, enter the details to schedule the trigger. For the information on configuring this block, refer toTriggerdocumentation.

For troubleshooting information, refer to thetroubleshooting sectionof the documentation.

Updated11 months ago