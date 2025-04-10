# Coupon redeem template

The coupon redeem template allows you to redeem active coupons of a loyalty customer.

# Configuring coupon redeem dataflow

To configure coupon redeem dataflow, perform the below steps/actions:

1. In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

3. In theTransform Datablock, map the API fields with the source file. For information on how to map the fields, seeTransform data.🚧Make sure that you include at least one identifier detail, such as a mobile number or email address. At least one identifier value is mandatory.

> 🚧Make sure that you include at least one identifier detail, such as a mobile number or email address. At least one identifier value is mandatory.

## 🚧

Make sure that you include at least one identifier detail, such as a mobile number or email address. At least one identifier value is mandatory.

4. In theConnect-to-destinationblock, enter the API endpoint details.For this template the API/v2/coupon/redeem, is used.  SeeConnect to destination.

`/v2/coupon/redeem`

5. In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

Updatedover 1 year ago