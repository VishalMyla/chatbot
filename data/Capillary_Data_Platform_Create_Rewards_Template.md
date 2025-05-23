# Create Rewards Template

This template allows you to create rewards in bulk.

> ❗️NoteCreate rewards using either Intouch points or payment configuration, but not both at the same time. Attempting to use both configurations in a single operation will cause reward creation to fail. To avoid this, use separate CSV files and data flows for each configuration. For instance, one CSV file should contain only rewards created with Intouch points, while a separate CSV and data flow should be used to create rewards with the payment configuration.

## ❗️Note

Note

Create rewards using either Intouch points or payment configuration, but not both at the same time. Attempting to use both configurations in a single operation will cause reward creation to fail. To avoid this, use separate CSV files and data flows for each configuration. For instance, one CSV file should contain only rewards created with Intouch points, while a separate CSV and data flow should be used to create rewards with the payment configuration.

# Configuring Rewards Template

Perform the below steps/actions:

1. From the dataflow templates, select theCreate Rewardstemplate.

From the dataflow templates, select theCreate Rewardstemplate.

![](https://files.readme.io/c90a11c9779dcd1578c883ec6c50f5a2953e58477c8cdbe143e392d1a4adaa74-image.png)

2. In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. For the information on configuring this block, refer toConnect to sourcedocumentation

In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. For the information on configuring this block, refer toConnect to sourcedocumentation

3. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. For the information on configuring this block, refer toDecrypt datadocumentation.

In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. For the information on configuring this block, refer toDecrypt datadocumentation.

4. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.   For information on the API fields, refer to theRewards API documentation.📘Reward Custom FieldsOnlycustom fields created with scopeREWARDare applicable.The custom fields created for the selected workspace are displayed.It is mandatory to map the following fields:brandIdtypestartTimeendTimeredemptionTypelanguageCode information including itsnameandenabledstatus

In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.   For information on the API fields, refer to theRewards API documentation.

> 📘Reward Custom FieldsOnlycustom fields created with scopeREWARDare applicable.The custom fields created for the selected workspace are displayed.

## 📘Reward Custom Fields

Reward Custom Fields

- Onlycustom fields created with scopeREWARDare applicable.

`REWARD`

- The custom fields created for the selected workspace are displayed.

It is mandatory to map the following fields:

- brandId

- type

- startTime

- endTime

- redemptionType

- languageCode information including itsnameandenabledstatus

`name`

`enabled`

![](https://files.readme.io/ccdd22fceadebe4bb5b269d83a24e1438df80d24de91a8e4bd51c8e6c76882a8-CreateReward.gif)

1. In theConnect-to-destinationblock, enter the API endpoint details. For the information on configuring this block, refer toConnect to destinationdocumentation.

2. In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

For troubleshooting information, refer to thetroubleshooting sectionof the documentation.

# Sample CSV File

```
brandId,type,startDate,endDate,enabled,priority,intouchPoints,paymentConfigs.paymentMode,paymentConfigs.points,paymentConfigs.cash,paymentConfigs.conversionRatio,redemptionType,categories,intouchSeriesId,vendorId,vendorRedemption,tier,group,tillId,programId,label,languageCode1,name1,description1,termNConditionsId1,enabled1,imageId1,thumbnailId1,images_name1,images_id1,images_name2,images_id2,videos_name1,videos_id1,videos_url1,videos_isExternal1,videos_name2,videos_id2,videos_url2,videos_isExternal2,customField1 key,customField2 key,customField3 key,customField4 key,customField5 key,customField6 key,customField7 key,customField8 key,customField9 key,customField10 key,customField11 key,customField12 key,customField13 key,customField14 key,customField15 key,languageCode2,name2,description2,termNConditionsId2,enabled2,imageId2,thumbnailId2,images,videos,customFields,owners.ownerType,owners.ownerId,loyaltyProgramId1,tierIds1,partnerProgramIds1,loyaltyProgramId2,tierIds2,partnerProgramIds2,loyaltyProgramId3,tierIds3,partnerProgramIds3,groupName,rewardRank,customerLevel.kpi1,customerLevel.limit1,customerLevel.repeatFrequencyType1,customerLevel.interval1,customerLevel.kpi2,customerLevel.limit2,customerLevel.repeatFrequencyType2,rewardLevel.kpi1,rewardLevel.limit1,rewardLevel.repeatFrequencyType1,rewardLevel.interval1,rewardLevel.kpi2,rewardLevel.limit2,rewardLevel.repeatFrequencyType2
3,VOUCHER,2024-11-12T05:30:00Z,2025-11-09T12:00:00Z,true,,,FREE,,,,MILES,,,18,13247,,,,,,en,Reward 8,Reward 1 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,fr,Reward 1,Reward 1 description,36797a3b-7726-4d75-ad8b-aa1dc0bd7874,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
3,VOUCHER,2024-11-12T05:30:00Z,2025-11-09T12:00:00Z,true,,,POINTS_CASH,100,10,,CHARITY,,,19,16288,,,,,,en,Reward 9,Reward 2 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,fr,Reward 2,Reward 2 description,36797a3b-7726-4d75-ad8b-aa1dc0bd7874,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
3,VOUCHER,2024-11-12T05:30:00Z,2025-11-09T12:00:00Z,true,,,CASH,,90,,INTOUCH_REWARD,,16745,,,,,,,,en,Reward 10,Reward 3 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,fr,Reward 3,Reward 3 description,36797a3b-7726-4d75-ad8b-aa1dc0bd7874,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
3,VOUCHER,2024-11-12T05:30:00Z,2025-11-09T12:00:00Z,false,,,POINTS,200,,,INTOUCH_REWARD,,16745,,,,,,,,en,Reward 11,Reward 4 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,fr,Reward 4,Reward 4 description,36797a3b-7726-4d75-ad8b-aa1dc0bd7874,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
3,VOUCHER,2024-11-12T05:30:00Z,2025-11-09T12:00:00Z,true,,,CONV_RATIO,,,0.5,MILES,,,18,13247,,,,,,en,Reward 12,Reward 4 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,fr,Reward 4,Reward 4 description,36797a3b-7726-4d75-ad8b-aa1dc0bd7874,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
```

```
brandId,type,startDate,endDate,enabled,priority,intouchPoints,paymentConfigs.paymentMode,paymentConfigs.points,paymentConfigs.cash,paymentConfigs.conversionRatio,redemptionType,categories,intouchSeriesId,vendorId,vendorRedemption,tier,group,tillId,programId,label,languageCode1,name1,description1,termNConditionsId1,enabled1,imageId1,thumbnailId1,images_name1,images_id1,images_name2,images_id2,videos_name1,videos_id1,videos_url1,videos_isExternal1,videos_name2,videos_id2,videos_url2,videos_isExternal2,customField1 key,customField2 key,customField3 key,customField4 key,customField5 key,customField6 key,customField7 key,customField8 key,customField9 key,customField10 key,customField11 key,customField12 key,customField13 key,customField14 key,customField15 key,languageCode2,name2,description2,termNConditionsId2,enabled2,imageId2,thumbnailId2,images,videos,customFields,owners.ownerType,owners.ownerId,loyaltyProgramId1,tierIds1,partnerProgramIds1,loyaltyProgramId2,tierIds2,partnerProgramIds2,loyaltyProgramId3,tierIds3,partnerProgramIds3,groupName,rewardRank,customerLevel.kpi1,customerLevel.limit1,customerLevel.repeatFrequencyType1,customerLevel.interval1,customerLevel.kpi2,customerLevel.limit2,customerLevel.repeatFrequencyType2,rewardLevel.kpi1,rewardLevel.limit1,rewardLevel.repeatFrequencyType1,rewardLevel.interval1,rewardLevel.kpi2,rewardLevel.limit2,rewardLevel.repeatFrequencyType2
3,VOUCHER,2024-11-12T05:30:00Z,2025-11-09T12:00:00Z,true,,,FREE,,,,MILES,,,18,13247,,,,,,en,Reward 8,Reward 1 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,fr,Reward 1,Reward 1 description,36797a3b-7726-4d75-ad8b-aa1dc0bd7874,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
3,VOUCHER,2024-11-12T05:30:00Z,2025-11-09T12:00:00Z,true,,,POINTS_CASH,100,10,,CHARITY,,,19,16288,,,,,,en,Reward 9,Reward 2 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,fr,Reward 2,Reward 2 description,36797a3b-7726-4d75-ad8b-aa1dc0bd7874,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
3,VOUCHER,2024-11-12T05:30:00Z,2025-11-09T12:00:00Z,true,,,CASH,,90,,INTOUCH_REWARD,,16745,,,,,,,,en,Reward 10,Reward 3 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,fr,Reward 3,Reward 3 description,36797a3b-7726-4d75-ad8b-aa1dc0bd7874,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
3,VOUCHER,2024-11-12T05:30:00Z,2025-11-09T12:00:00Z,false,,,POINTS,200,,,INTOUCH_REWARD,,16745,,,,,,,,en,Reward 11,Reward 4 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,fr,Reward 4,Reward 4 description,36797a3b-7726-4d75-ad8b-aa1dc0bd7874,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
3,VOUCHER,2024-11-12T05:30:00Z,2025-11-09T12:00:00Z,true,,,CONV_RATIO,,,0.5,MILES,,,18,13247,,,,,,en,Reward 12,Reward 4 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,fr,Reward 4,Reward 4 description,36797a3b-7726-4d75-ad8b-aa1dc0bd7874,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
```

Updated5 months ago