# Test and control template

The Test and Control template allows you to compare and change the customer test and control status in the Capillary platform according to the data provided by the brand.   This helps to reduce the number of API calls that are required to change the status in bulk.

# Use case

Brands send customer data to Capillary to change their test and control status.Using the Test and Control template, you can compare your existing customer data with the customer test and control data provided by the brand to make changes in the customer role in bulk rather than changing the data for each customer.

# Configuring test and control dataflow

> 🚧Make sure that there are no unwanted spaces in the csv file. You can convert the csv file to JSON to cehck for unwanted spaces.

## 🚧Make sure that there are no unwanted spaces in the csv file. You can convert the csv file to JSON to cehck for unwanted spaces.

Make sure that there are no unwanted spaces in the csv file. You can convert the csv file to JSON to cehck for unwanted spaces.

To configure test and control dataflow, perform the below steps/actions:

1. In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

3. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.

In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.

4. In theMap-fields-for-reconcileblock, enter the reconciliation data details.FieldsDescriptionMobileEnter the column header that contains the mobile number of the customers.EmailEnter the column header that contains the email of the customers.Test and ControlEnter the column header that contains the test and control status.External IDEnter the column header that contains the external ID.Reconciliation Results DirectorySpecify the file path to store the data reconciliation result.

In theMap-fields-for-reconcileblock, enter the reconciliation data details.

| Fields | Description |

| --- | --- |

| Mobile | Enter the column header that contains the mobile number of the customers. |

| Email | Enter the column header that contains the email of the customers. |

| Test and Control | Enter the column header that contains the test and control status. |

| External ID | Enter the column header that contains the external ID. |

| Reconciliation Results Directory | Specify the file path to store the data reconciliation result. |



5. In theConnect-to-destinationblock, enter the API endpoint details.For this template, the API/v2/tnc/change/bulk/customersis used. SeeConnect to destination.

In theConnect-to-destinationblock, enter the API endpoint details.For this template, the API/v2/tnc/change/bulk/customersis used. SeeConnect to destination.

`/v2/tnc/change/bulk/customers`

6. In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

Updatedover 1 year ago