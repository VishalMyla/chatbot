# Import Earned Badges of Customer in Bulk

This template enables you to import earned badges of customers, for historical migration. It can be used to migrate customers with badges:

- that have expired or

- were assigned in the past but are still active.

# Use Case

Consider Brand X, which has been running a successful loyalty program for several years, where customers earn badges for purchases, engagement, and specific achievements on their existing loyalty platform.

When Brand X decides to switch to the Capillary loyalty platform to take advantage of advanced features and better system integration, it can transfer all historical badges awarded to customers using the Historical Migration and Creation of Badges template. This ensures a smooth transition without losing any customer achievements.

# Configuring the template

Below is the screenshot of the template showing the different steps.

![](https://files.readme.io/fe4c9dc8856773195629b4a28e8cbf0bad7cb3f3a8e5dad05707fed715af8b11-Import_Earned_Badges.png)

To configure the Badges template, perform the below steps/actions:

1. In theConnect-to-sourceBlock, enter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.Sample CSV file:badgeMetaId,customerId,earnEventDate,earnExpiresOn 663df210d4e8ad163b1bfaaa,382442802,1674292011,1705828011badgeMetaIdcustomerIdearnEventDateearnExpiresOn663df210d4e8ad163b1bfaaa38244280216742920111705828011

In theConnect-to-sourceBlock, enter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.Sample CSV file:badgeMetaId,customerId,earnEventDate,earnExpiresOn 663df210d4e8ad163b1bfaaa,382442802,1674292011,1705828011

```
badgeMetaId,customerId,earnEventDate,earnExpiresOn 663df210d4e8ad163b1bfaaa,382442802,1674292011,1705828011
```

| badgeMetaId | customerId | earnEventDate | earnExpiresOn |

| --- | --- | --- | --- |

| 663df210d4e8ad163b1bfaaa | 382442802 | 1674292011 | 1705828011 |



2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.The below fields are mandatory:Field NameData TypeDescriptionbadgeMetaIdStringUnique identifier for the badge.customerIdIntegerUnique identifier for the customer.earnEventDateDateTimestamp of when the earning event occurred. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ.earnExpiresOnDateTimestamp of when the earned item expires. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ.For details on the API fields, refer to theImport earned (issued) badges of customerAPI.

In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

1. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.The below fields are mandatory:Field NameData TypeDescriptionbadgeMetaIdStringUnique identifier for the badge.customerIdIntegerUnique identifier for the customer.earnEventDateDateTimestamp of when the earning event occurred. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ.earnExpiresOnDateTimestamp of when the earned item expires. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ.For details on the API fields, refer to theImport earned (issued) badges of customerAPI.

In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.

The below fields are mandatory:

| Field Name | Data Type | Description |

| --- | --- | --- |

| badgeMetaId | String | Unique identifier for the badge. |

| customerId | Integer | Unique identifier for the customer. |

| earnEventDate | Date | Timestamp of when the earning event occurred. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |

| earnExpiresOn | Date | Timestamp of when the earned item expires. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |



For details on the API fields, refer to theImport earned (issued) badges of customerAPI.

4. In theConnect-to-destinationblock, enter the API endpoint details. The API fields are configured by default and is not recommended to make changes. SeeConnect to destination.

In theConnect-to-destinationblock, enter the API endpoint details. The API fields are configured by default and is not recommended to make changes. SeeConnect to destination.

5. In theTrigger sectionblock, enter the details to schedule the trigger. Refer to the documentation on schedulingTrigger.

In theTrigger sectionblock, enter the details to schedule the trigger. Refer to the documentation on schedulingTrigger.

Updated4 months ago