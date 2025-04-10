# Setup Entities and Fields

### View and Configure Extended Fields for the org

#### View Extended fields on InTouch

To view extended fields of your organization:

1. On InTouch navigate toSettings>Master Data Management>Data Model>Extended Fields.

You will see extended fields of each vertical as shown below.

![1366](https://files.readme.io/2436ad5-iCqnsovk8iYCGrvOmGDPRPrB5eBhMvwVMw.png)

Click on each vertical to see the extended fields enabled for your org.

![1366](https://files.readme.io/d30c293-T3O4kDeYFdpD4OLV9KSnRSg1UlsmCWxLSg.png)

#### Edit extended fields & Add enum values using InTouch

You can update an extended field to show/hide it, set the position on the UI, choose whether mandatory or optional, and add enum values. The extended field format islongtext, which supports up to 4GB of text.

`longtext`

To add custom enum values to an extended field, click on the extended field

![663](https://files.readme.io/dec6404-Is_Extended_field.png)

| Field | Description |

| --- | --- |

| Insert Enum Values (applicable for fields with datatype enum) | Enter each supported value for the field and clickAdd. |

| New Enum Values (applicable for fields with datatype enum) | You will see the list of values added for the extended field. To remove any value from the list, click on the value to select and clickRemove. |

| Hide Display | Check this hide the entended field. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Is Mandatory | Check this to make the extended field mandatory. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Is Updatable | Chis this to allow updating the extended field values once entered. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Position | Set the position of the extended field on the client application. 1 for the top, 2 for the second, and so on. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Default Value | Default value for the extended field. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Enable audit trail | Select the checkbox to enable audit logging of the extended field. You can add up to 5 extended fields for audit logging. |

| Is it PII data | Select the checkbox to classify the extended field as PII data. |

| Is this psi data | Select the checkbox to classify the extended field as sensitive data. Refer to the PSI data documentation for moreinformation on classifying PSI data. |

| Reject txn on invalid value | Select the checkbox to reject the transaction if the values are invalid. |



[information on classifying PSI data](/docs/classify-potentially-sensitive-information-psi)

1. To see extended fields of a vertical, click the respective +icon.

![1161](https://files.readme.io/082f850-Extended_field_overview.png)

| FIELD | Description |

| --- | --- |

| Name | Name of the extended field as created in the DB |

| Entity Type | Type of the field |

| Label | Name of the field as it appears on the UI |

| Data Type | The data type of the field |

| Enum Values | Supported values of the field (if applicable) |

| Is Mandatory | Indicates if the extended field is mandatory. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Is Updatable | Indicates if the extended field is updatable. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Hide Display | Indicates if extended field is configured to hide from the client application. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Position | Displays the position set for the extended field. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Default value | Displays the default value of the extended field. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Is Audit trial enabled | Indicates if audit logging of extended field is enabled. |

| Is PII data | Indicates if the extended field is classified as PII data. |

| Is PSI data | Indicates if the extended field is classified as PSI data. Refer to the PSI data documentation for moreinformation on classifying PSI data. |



[information on classifying PSI data](/docs/classify-potentially-sensitive-information-psi)

#### Configure org extended fields and enum values through API

You can view the list of extended fields enabled for an organization through a V2 API.

Request:https://{host}/v2/extendedFields

Method: GET

Sample Request:https://newapi.nightly.capillary.in/v2/extendedFields

Sample Response:

```
{
"entity": {
"CUSTOMER": [
{
"name": "gender",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "Gender",
"entityType": "CUSTOMER",
"dataType": "STANDARD_ENUM"
},
{
"name": "marital_status",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "Marital Status",
"entityType": "CUSTOMER",
"dataType": "STANDARD_ENUM"
},
{
"name": "Age",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "amount",
"entityType": "CUSTOMER",
"dataType": "INTEGER"
},
{
"name": "Region",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "Region",
"entityType": "CUSTOMER",
"dataType": "CUSTOM_ENUM"
},
{
"name": "dob",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Date of Birth",
"entityType": "CUSTOMER",
"dataType": "DATETIME"
},
{
"name": "ssnNumber",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "SSN Number",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "nationality",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Nationality",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "language",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Preferred Language",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "ethnicity",
"createdBy": -1,
"createdOn": "2017-07-20",
"modifiedBy": -1,
"modifiedOn": "2017-07-20",
"label": "Ethnicity",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "zip",
"createdBy": -1,
"createdOn": "2017-07-20",
"modifiedBy": -1,
"modifiedOn": "2017-07-20",
"label": "Zip Code",
"entityType": "CUSTOMER",
"dataType": "STRING"
}
],
"REGULAR_LINEITEM": [
{
"name": "associate",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "Associate",
"entityType": "REGULAR_LINEITEM",
"dataType": "CUSTOM_ENUM"
},
{
"name": "uuid",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "UUID",
"entityType": "REGULAR_LINEITEM",
"dataType": "STRING"
      },

"warnings": [],
"errors": [],
"success": true
}
```

```
{
"entity": {
"CUSTOMER": [
{
"name": "gender",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "Gender",
"entityType": "CUSTOMER",
"dataType": "STANDARD_ENUM"
},
{
"name": "marital_status",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "Marital Status",
"entityType": "CUSTOMER",
"dataType": "STANDARD_ENUM"
},
{
"name": "Age",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "amount",
"entityType": "CUSTOMER",
"dataType": "INTEGER"
},
{
"name": "Region",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "Region",
"entityType": "CUSTOMER",
"dataType": "CUSTOM_ENUM"
},
{
"name": "dob",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Date of Birth",
"entityType": "CUSTOMER",
"dataType": "DATETIME"
},
{
"name": "ssnNumber",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "SSN Number",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "nationality",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Nationality",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "language",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Preferred Language",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "ethnicity",
"createdBy": -1,
"createdOn": "2017-07-20",
"modifiedBy": -1,
"modifiedOn": "2017-07-20",
"label": "Ethnicity",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "zip",
"createdBy": -1,
"createdOn": "2017-07-20",
"modifiedBy": -1,
"modifiedOn": "2017-07-20",
"label": "Zip Code",
"entityType": "CUSTOMER",
"dataType": "STRING"
}
],
"REGULAR_LINEITEM": [
{
"name": "associate",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "Associate",
"entityType": "REGULAR_LINEITEM",
"dataType": "CUSTOM_ENUM"
},
{
"name": "uuid",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "UUID",
"entityType": "REGULAR_LINEITEM",
"dataType": "STRING"
      },

"warnings": [],
"errors": [],
"success": true
}
```

### Creating reports using extended fields

To display the extended fields on Insights and use this data for creating reports, perform the following:

1. Create a JIRA ticket to the Sustenance team and create a vertical level field on Capillary platform.

2. Create a JIRA ticket to the Insights team and create audience filter for the extended field.

### Convert custom field to extended field

Once you have the custom field created, raise a ticket to the Platforms team requesting the conversion to the extended field. Once it is created, you can use the field in reports and campaigns.

However, the team verifies the request and decides whether to convert to the extended field.

> 📘The team might reject the request if the custom field is too specific and does not make general sense.The platform team takes care of mapping custom field values to extended fields.

## 📘

- The team might reject the request if the custom field is too specific and does not make general sense.

- The platform team takes care of mapping custom field values to extended fields.

## Custom Fields

Custom fields are columns that store special or custom information related to customers, transactions, transaction line-items, coupons, and so on. As there is no control over the field values, it is difficult to run reports on custom fields. For example, if the custom field Gender has values M, F, and MF,  it becomes difficult for an analyst to work directly on such data.

### Create new custom fields

On InTouch, navigate toProfile>Organization Settings>Master Data Management>Data Model>Custom Fields.

![](https://files.readme.io/f4779df-c1988e8-KhizBuomOEMzTo6etQ_D6jatvalsXsdMdQ.png)

The following are different entries for which you can create custom fields.

- Loyalty registration

- Loyalty transaction

- Customer feedback

- Zone custom fields

- Store custom fields

- Points redemption

- Voucher redemption (coupon redemption)

- Customer advanced feedback

- Customer preferences

- Customer Card

To see the custom fields of an entry, click the respective + icon.

![](https://files.readme.io/7aa0226-Custom_field_overview.png)

To create a new custom field, clickAdd new custom field. The maximum number of characters supported for a custom field name is 20, and the maximum number of supported values for the custom field value is 250.

![](https://files.readme.io/b14da53-Create_custom_field.gif)

Fill in the fields and clickSubmit.

| OPTION | DESCRIPTION |

| --- | --- |

| Disabled | Check this to hide the custom field on the UI. |

| Is Compulsory | Check this to make the field mandatory. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Is Updatable | Check this to make the field value modifiable - once entered can be updated again when needed. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Disable Custom Field | Check this to inactivate the custom field. |

| Field Name | Name of the field. |

| Field Type | Choose the input type - text, text area, select box, checkbox, radio button, button, email body, feedback, and so on.Based on the option you choose, you will see relevant configuration fields. For example, if it is a select box, you need to enter the supported values to select. |

| Field Scope | Choose the entry of the custom field from the options available.Loyalty registrationLoyalty transactionCustomer feedbackZone custom fieldsStore custom fieldsPoints redemptionVoucher redemption (coupon redemption)Customer advanced feedback- Customer preferences |

| Label | Enter the field name to appear on the UI |

| Default Values | Enter the values of the field in case of a selection field such as radio button, checkbox, select box, and so on. |

| Position | Specify the sequence order of the custom field. For example, 1 to appear in the first position of the form. This field applies to client-side applications like Instore and does not undergo any server-side validation. |

| Regular Expression for verification | Configure regex for the field value in the case of the free text field. |

| Error message for Regex Failure | Enter the error message to show in case of regex failure. |

| Help Text For The Field | Enter the help text(more information) you want to show for the field. This appears on the right of the field |

| Attributes (Format = Label:Value) |  |

| Enable Audit Trail | Select the checkbox if you want to enable audit logging of the custom field. You can add up to 5 custom fields for audit logging. |

| Is this pii data ? | Select the checkbox if you want to classify the custom field as PII data. |

| Is this psi data | Select the checkbox to classify the extended field as sensitive data. Refer to the PSI data documentation for moreinformation on classifying PSI data. |



[information on classifying PSI data](/docs/classify-potentially-sensitive-information-psi)

> 📘When you make changes in a custom fieldFor Store Server, do a complete sync from Settings or wait until the next auto-sync completes (usually every one hour).For Thin Client, please restart your thin client and check whether you are able to see the changes.

## 📘

When you make changes in a custom field

- For Store Server, do a complete sync from Settings or wait until the next auto-sync completes (usually every one hour).

- For Thin Client, please restart your thin client and check whether you are able to see the changes.

Updated9 months ago