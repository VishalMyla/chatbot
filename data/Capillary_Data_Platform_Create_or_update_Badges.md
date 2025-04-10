# Create or update Badges

# Creating/Updating Badges in Bulk

Badges are a type of visual recognition used in loyalty programs to reward customers for their progress, specific actions or achievements. These serve as a form of gamification and a sense of pride and accomplishment within the user, reinforcing the targeted behaviours and boosting engagement. For more information on Badges, refer to theBadges user documentation.

The badges Connect+ template enables you to create and update Badges in bulk.

To configure the Badges template, perform the below steps/actions:

1. In theConnect-to-sourceBlock, enter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source. You can also create a badge with a past date. Refer to the sectionCreating a Historical Badgefor more information.

In theConnect-to-sourceBlock, enter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source. You can also create a badge with a past date. Refer to the sectionCreating a Historical Badgefor more information.

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

3. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.For details on the API fields, refer toCreate badge API documentationfor creating badges and refer toUpdate badge API documentationfor updating badges.Sample csvname,description,isActive,startOn,expiresOn,earnType,EarnexpiryType,EarnexpiryWithBadgeMeta,EarnBadgestype,restrictedToOwners,ConstraintType1 for Cx,ConstraintType2 for Cx,maxEarnLimit for Cx,rollForDays for Cx,maxEarnForDays for Cx,rollForWeeks for Cx,maxEarnForWeeks for Cx,rollForMonths for Cx,maxEarnForMonths for Cx,maxEarnLimit for badge,badge constraintType1,badge constraintType2,badge constraintType3,badge constraintType4,badge rolltype1,badge rollvalue1,badge max earn limit1,badge rolltype2,badge rollvalue2,badge max earn limit2,badge rolltype3,badge rollvalue3,badge max earn limit3,badge max earn limit4,earnType,benefitType1,benefitType2,benefitType3,points1,program ID1 for points,promotion ID1 for points,allocationStrategyId1 for points,expirationStrategyId1 for points,couponseriesId2,couponseriesId1,tag name 1,tag value 1,tag name 2,tag value 2,tag name 3,badgeRank,badgeGroupId,tag value 3
test34567,Purchase 5 pet products in 3 months and get a pet grooming voucher,TRUE,1757777926,1799632870,EARN,ABSOLUTE,TRUE,WITH_BADGE_META,"Loyalty,Milestones",CUSTOMER_BADGE_FIXED_VALUE,CUSTOMER_BADGE_ROLLING_WINDOW,100,1,1,1,2,1,10,100000,BADGE_ROLLING_WINDOW,BADGE_FIXED_VALUE,BADGE_ROLLING_WINDOW,BADGE_ROLLING_WINDOW,DAYS,1,100,WEEKS,1,2000,MONTHS,1,5000,10000,EARN,COUPON,LOYALTY_POINTS,COUPON,100,626,80332,1489,3843,234,136,Type1,Birthday,Type2,name,Type3,3,456,mnp

In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.For details on the API fields, refer toCreate badge API documentationfor creating badges and refer toUpdate badge API documentationfor updating badges.

```
name,description,isActive,startOn,expiresOn,earnType,EarnexpiryType,EarnexpiryWithBadgeMeta,EarnBadgestype,restrictedToOwners,ConstraintType1 for Cx,ConstraintType2 for Cx,maxEarnLimit for Cx,rollForDays for Cx,maxEarnForDays for Cx,rollForWeeks for Cx,maxEarnForWeeks for Cx,rollForMonths for Cx,maxEarnForMonths for Cx,maxEarnLimit for badge,badge constraintType1,badge constraintType2,badge constraintType3,badge constraintType4,badge rolltype1,badge rollvalue1,badge max earn limit1,badge rolltype2,badge rollvalue2,badge max earn limit2,badge rolltype3,badge rollvalue3,badge max earn limit3,badge max earn limit4,earnType,benefitType1,benefitType2,benefitType3,points1,program ID1 for points,promotion ID1 for points,allocationStrategyId1 for points,expirationStrategyId1 for points,couponseriesId2,couponseriesId1,tag name 1,tag value 1,tag name 2,tag value 2,tag name 3,badgeRank,badgeGroupId,tag value 3
test34567,Purchase 5 pet products in 3 months and get a pet grooming voucher,TRUE,1757777926,1799632870,EARN,ABSOLUTE,TRUE,WITH_BADGE_META,"Loyalty,Milestones",CUSTOMER_BADGE_FIXED_VALUE,CUSTOMER_BADGE_ROLLING_WINDOW,100,1,1,1,2,1,10,100000,BADGE_ROLLING_WINDOW,BADGE_FIXED_VALUE,BADGE_ROLLING_WINDOW,BADGE_ROLLING_WINDOW,DAYS,1,100,WEEKS,1,2000,MONTHS,1,5000,10000,EARN,COUPON,LOYALTY_POINTS,COUPON,100,626,80332,1489,3843,234,136,Type1,Birthday,Type2,name,Type3,3,456,mnp
```

```
name,description,isActive,startOn,expiresOn,earnType,EarnexpiryType,EarnexpiryWithBadgeMeta,EarnBadgestype,restrictedToOwners,ConstraintType1 for Cx,ConstraintType2 for Cx,maxEarnLimit for Cx,rollForDays for Cx,maxEarnForDays for Cx,rollForWeeks for Cx,maxEarnForWeeks for Cx,rollForMonths for Cx,maxEarnForMonths for Cx,maxEarnLimit for badge,badge constraintType1,badge constraintType2,badge constraintType3,badge constraintType4,badge rolltype1,badge rollvalue1,badge max earn limit1,badge rolltype2,badge rollvalue2,badge max earn limit2,badge rolltype3,badge rollvalue3,badge max earn limit3,badge max earn limit4,earnType,benefitType1,benefitType2,benefitType3,points1,program ID1 for points,promotion ID1 for points,allocationStrategyId1 for points,expirationStrategyId1 for points,couponseriesId2,couponseriesId1,tag name 1,tag value 1,tag name 2,tag value 2,tag name 3,badgeRank,badgeGroupId,tag value 3
test34567,Purchase 5 pet products in 3 months and get a pet grooming voucher,TRUE,1757777926,1799632870,EARN,ABSOLUTE,TRUE,WITH_BADGE_META,"Loyalty,Milestones",CUSTOMER_BADGE_FIXED_VALUE,CUSTOMER_BADGE_ROLLING_WINDOW,100,1,1,1,2,1,10,100000,BADGE_ROLLING_WINDOW,BADGE_FIXED_VALUE,BADGE_ROLLING_WINDOW,BADGE_ROLLING_WINDOW,DAYS,1,100,WEEKS,1,2000,MONTHS,1,5000,10000,EARN,COUPON,LOYALTY_POINTS,COUPON,100,626,80332,1489,3843,234,136,Type1,Birthday,Type2,name,Type3,3,456,mnp
```

4. In theConnect-to-destinationblock, enter the API endpoint details. SeeConnect to destination.For this template, the API used isapi_gateway/v1/badges/badgeMeta.

In theConnect-to-destinationblock, enter the API endpoint details. SeeConnect to destination.For this template, the API used isapi_gateway/v1/badges/badgeMeta.

`api_gateway/v1/badges/badgeMeta`

5. In theTrigger sectionblock, enter the details to schedule the trigger. Refer to the documentation on schedulingTrigger.

In theTrigger sectionblock, enter the details to schedule the trigger. Refer to the documentation on schedulingTrigger.

# Creating a Historical Badge (Badge with a past date)

To create a badge with a past date, use the"X-CAP-BADGES-MIGRATION":"migration"in theAddtional Headersfield. This allows you to migrate customers from other platforms who have expired badges or badges that were assigned in the past but are still active.

`"X-CAP-BADGES-MIGRATION":"migration"`

Example 1:If a brand is migrating expired badges from Platform A, they can use this header to recreate 20 badges that were active in 2023.Example 2: If a brand is migrating in September 2024 with 50 active badges that originally started on January 1st, 2024, they can use this header to ensure these badges are created in the Capillary system with their correct start date, preserving their ongoing status.

![](https://files.readme.io/16e7da9-image.png)

Updated7 months ago