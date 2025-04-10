# Earned badges for customer template

The earned badges for customer template allows you to issue badges for customers in bulk. The badges can be also issued for a past (retro) transaction.

# Use Case 1: Weekly Behavioral Events Data Import

Scenario:A brand receives weekly data from its third-party vendor who manages their mobile app and websites. This data contains behavioural events from users' interactions with the app and website.

The third-party vendor provides the brand with weekly behavioural event data and on adding these data to the Capillary platform, the loyalty promotions on the Capillary platform are triggered. Accordingly, based on the loyalty programs, badges also may need to be provided to the customers in bulk. This template can be used to achieve the same.

# Use Case 2: Offline Event Badge Issuance

Scenario:A brand organizes offline events, where customers participate and interact with the brand physically. As part of these events, some badges are issued to the customers. This template can be used to assign the badges to the existing customers.

# Configuring earned badges for customer dataflow

To configure earned badges for customer dataflow, perform the below steps/actions:

1. In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. For the information on configuring this block, refer toConnect to sourcedocumentation.

In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. For the information on configuring this block, refer toConnect to sourcedocumentation.

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. For the information on configuring this block, refer toDecrypt datadocumentation.

In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. For the information on configuring this block, refer toDecrypt datadocumentation.

3. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.It is mandatory to map theearnExpiresOn,earnEventDate,badgeMetaIdandcustomerIdfields with the file.

In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.

It is mandatory to map theearnExpiresOn,earnEventDate,badgeMetaIdandcustomerIdfields with the file.

`earnExpiresOn`

`earnEventDate`

`badgeMetaId`

`customerId`

![](https://files.readme.io/53547ef-image.png)

4. In theConnect-to-destinationblock, enter the API endpoint details.For this template the API[/api_gateway/v1/badges/import/customerBadges](https://docs.capillarytech.com/reference/import-earned-badges-of-customer), is used.  For the information on configuring this block, refer toConnect to destinationdocumentation.

In theConnect-to-destinationblock, enter the API endpoint details.For this template the API[/api_gateway/v1/badges/import/customerBadges](https://docs.capillarytech.com/reference/import-earned-badges-of-customer), is used.  For the information on configuring this block, refer toConnect to destinationdocumentation.

```
[/api_gateway/v1/badges/import/customerBadges](https://docs.capillarytech.com/reference/import-earned-badges-of-customer)
```

5. In theTriggerblock, enter the details to schedule the trigger. For the information on configuring this block, refer toTriggerdocumentation.

In theTriggerblock, enter the details to schedule the trigger. For the information on configuring this block, refer toTriggerdocumentation.

For troubleshooting information, refer to thetroubleshooting sectionof the documentation.

Updated7 months ago