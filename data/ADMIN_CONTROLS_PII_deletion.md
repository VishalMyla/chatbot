# PII deletion

# Introduction

The Personally Identifiable Information (PII) data deletion feature allows customers to delete their personal data from the customer data platform. This provides customers greater control over their privacy and helps to protect their data or unauthorised access to their information.

# Prerequisites

1. Enable customer status. SeeEnable customer status.

![](https://files.readme.io/8f013a2-Enable_customer_status.png)

1. Make sure that a label is created for each customer status. For more information on customer status labels, seeCreate customer status label.📘For Pending Deletion, the platform creates a deletion_pending status automatically and assigns it whenever a deletion request is raised. The platform does not use any label that you created against the Pending Deletion status.

> 📘For Pending Deletion, the platform creates a deletion_pending status automatically and assigns it whenever a deletion request is raised. The platform does not use any label that you created against the Pending Deletion status.

## 📘

For Pending Deletion, the platform creates a deletion_pending status automatically and assigns it whenever a deletion request is raised. The platform does not use any label that you created against the Pending Deletion status.

2. Configure PII deletion. SeeConfiguring PII deletion.

3. If required, select and mark the required extended field, custom field and payment mode attributes as PII data. SeeClassifying custom field, extended field and payment attribute as PII data.

# Data deletion workflow

![](https://files.readme.io/c669af0-PII.jpg)

# Raising deletion request

A PII deletion request can be performed from the Member Care, refer to .the documentation on user deletion from Member Care.For more information on the PII deletion APIs, seeAdd deletion request API documentation.

# Configuring PII deletion

To enable and configure the PII deletion

1. From Organisation settings, navigate toOrganization Setup->PII Configurations.

2. To enable the PII deletion, select theCONF_ENABLE_PII_DELETIONcheck box.

![](https://files.readme.io/5cc0ebb-Enable_delete_PII.png)

1. To set the number of days after which the data is deleted (deletion waiting period), enter the number in theCONF_PII_DATA_DELETE_AFTER_DAYSfield. You can enter any value between 0-90.📘If the waiting period is set to 0 days, the system deletes the data on the same day that you raised the requests and approves if approval workflow is involved. For example, if a customer raises a deletion request at 1400 hrs, the system processes deletion at midnight on the same day depending on the time zone of the cluster the org belongs to on the Capillary platform.

> 📘If the waiting period is set to 0 days, the system deletes the data on the same day that you raised the requests and approves if approval workflow is involved. For example, if a customer raises a deletion request at 1400 hrs, the system processes deletion at midnight on the same day depending on the time zone of the cluster the org belongs to on the Capillary platform.

## 📘If the waiting period is set to 0 days, the system deletes the data on the same day that you raised the requests and approves if approval workflow is involved. For example, if a customer raises a deletion request at 1400 hrs, the system processes deletion at midnight on the same day depending on the time zone of the cluster the org belongs to on the Capillary platform.

If the waiting period is set to 0 days, the system deletes the data on the same day that you raised the requests and approves if approval workflow is involved. For example, if a customer raises a deletion request at 1400 hrs, the system processes deletion at midnight on the same day depending on the time zone of the cluster the org belongs to on the Capillary platform.

2. ClickSubmit.

For information about the data deleted and retained, seeUnderstanding what data is deleted and retained.To classify custom fields, extended fields, and payment attributes as PII data, seeClassifying custom fields, extended fields and payment attributes as PII data.

# Understanding what data is deleted and retained

| Deleted data | Non-deletion data |

| --- | --- |

| First name and last name | User ID |

| Identifiers such as mobile, e-mail and external id | Transactions (but transaction custom/extended fields can be configured to be deleted).  SeeClassifying custom field, extended field and payment attribute data as PII data. |

| Customer custom and extended fields. This is configurable. SeeClassifying custom field, extended field and payment attribute data as PII data. | Communications data |

| Payment mode attributes against a transaction | Payment mode (Card, UPI, BNPL) details used for the transaction. But the attributes can be deleted. See Configuring data that need not be deleted. |

| V1 and V2 profile identifiers | PII data in the promo engine or on the OTA (Over The Air) side |

| V1 and V2 profile comm channels | Coupons/promotions/gift vouchers |

| Identifiers/login details in the auth engine | Behavioural events |

| Card custom fields and card extended fields. See Configuring data that need not be deleted. | Points data (will still be attributed to User ID) |

| Search database (solr/ES) | Supplementary and coalition memberships |

| Identifier change logs | Targets and Member care profiles -  If you have the profile URL, you can access the profile; however, the page displays a message indicating that the customer has been deleted. |

| Identifiers that are kept in the change requests log are set to null | User group dependencies and associations. Deleted customers remain part of groups/companies unless explicitly removed from groups (User ID remains) |

| Customer data audit logs | PII captured in leads data |

| - | Any other details not mentioned under Deleted data. |



[Classifying custom field, extended field and payment attribute data as PII data](/docs/pii-configuration#classifying-custom-field-extended-field-and-payment-attribute-data-as-pii-data)

[Classifying custom field, extended field and payment attribute data as PII data](/docs/pii-configuration#classifying-custom-field-extended-field-and-payment-attribute-data-as-pii-data)

# Classifying custom field, extended field and payment attribute data as PII data

By default when you enable PII deletion configuration, the mobile, e-mail and external ids from the customer entity data get deleted. For custom fields, extended fields and payment attributes, you have the option to include them as part of the PII data.

## Custom field and Extended fields

If you want to include custom fields and extended fields as part of PII data, perform the following:

1. From the Organisation settings, navigate toMaster Data Management>Data Model>Custom fields/Extended fields.

![](https://files.readme.io/13613e9-Navigate_to_Custom_field.png)

1. Select the desired custom field/extended field that needs to be part of PII data.

2. ClickEdit.

3. Select theIs this pii data/Is it PII datacheck box.

![](https://files.readme.io/043f915-PII_data_Custom_field.png)

1. ClickSubmit.

## Payment attributes

If you want  to include payment attributes as part of the PII data, perform the following:

1. From theOrganisation settings, navigate toOrganisation set up>Payment modes>Tenders.

![](https://files.readme.io/6717c50-Payment_mode.png)

1. Select the desired tender and click the edit icon.

![](https://files.readme.io/4ee96f5-Edit_tender.png)

2. Select the desired attribute that needs to be part of the PII data and click the edit icon.

![](https://files.readme.io/cabd710-Edit_attribute_.png)

1. Click the attributes value icon.

![](https://files.readme.io/8c348d7-Click_attribute_icon.png)

1. From the Selection drop-down, select the desired unit.

![](https://files.readme.io/e6faa1d-Clear_PII_data_.png)

1. Select theIs PII Data checkbox.

2. ClickSave.

# Submitting and approving requests through Membercare

For information on submitting and approving member account deletion requests from Membercare, refer toRequest managementdocumentation.

# Deletion request status

| Action | Request status | Customer status and status label |

| --- | --- | --- |

| Capillary receives a deletion request | PENDING | No change to the customer status |

| The brand rejects the deletion request | REJECTED | No change to the customer status |

| Capillary receives a deletion request | APPROVED | Pending Deletion: Deletion_pending |

| The customer cancels the deletion request | CANCELED | Previous customer status |

| Capillary deletes the customer PII after the waiting period. | DELETED | DELETED: Deleted |



# FAQs

1. Can we raise bulk PII data deletion requests?For bulk PII deletion, use Connect+. SeePII data flow.

2. Is the PII deletion request approved by default?This depends on the query parameter. PII deletions need to be approved.

3. Are custom fields and extended fields part of PII data?No. But, you can mark the desired custom fields and extended fields as PII data.

4. Will PII details in the Auth engine be deleted for the users who raised the request?Yes. After the PII deletion waiting period lapses.

5. Will event data (behavioural events, transaction events, etc.)be deleted?No. Data attributed to the user id is not deleted as the user id is not categorized as PII data.

6. What happens if the waiting period is set as 0 days?If the waiting period is set to 0 days, the system deletes the data on the same day.

7. My brand's transaction custom fields/extended fields also have PII data. Can those be marked for deletion?Yes. You can mark those data as PII data. SeeCustom field and extended field PII data.

8. Can I view a deleted customer's events on Member Care?Yes.

9. Will the profile be visible if I go to the profile using user_id in the Member Care URL?No.

10. Are payment mode attributes deleted by default?No. But you can configure payment attributes as PII data. Seepayment attributes.

11. My brand's payment mode attributes have sensitive PII data. Can I delete that?You can configure payment attributes as PII data. Seepayment attributes.

12. I want to delete event data (transactions, behavioural events and so on) of customers. Is this possible?No.

13. Will communications sent to a customer be deleted?No.

14. What happens to active coupons that are not redeemed?You cannot redeem the active coupons associated with the deleted customer ID.

15. Will OTP messages get sent to customers?After the PII deletion, the customer will not get any message.

16. How can a customer track the status of a deletion request?Brands can use the GET APIs and the event notifications to update the status of the customers.

17. Is there a UI to view all deletion requests raised in an org?Yes.

18. How can a CSR raise a deletion request?CSR can raise deletion requests through member care.

19. Can any CSR raise a deletion request?This depends on access rights. If you have access, you can raise deletion requests on behalf of a customer.

Updated11 months ago