# FAQ

1. Is it possible to transfer coupons?A: No, you cannot transfer coupons directly. However, you can revoke the coupon and assign the same code to a new user by uploading the details.

2. How is the slab for points allocation determined—based on the new slab considering ongoing transactions, past transactions, or a combination of both?A: It depends on the configuration. Sometimes the slab upgrades after points are allocated, while other times it upgrades first, and then allocates the remaining points based on the new slab.

3. Can the system generate QR codes for coupons?A: Yes, the system can generate QR codes for coupons. contact the Capillary support team to access this feature.

4. How do I apply a coupon to a transaction after it has been added to the system?A: If you want the coupon information to be reflected in the transaction, you must include the coupon details at the time of submitting the transaction.

5. Can we cap the coupon discount at a customer level for coupons that allow multiple redemptions?A: No, this feature is not supported.

6. Is it possible to find out which promotion issued a coupon through MemberCare?A: No, MemberCare does not provide specific details about which promotion issued a coupon. please contact capillary customer support for assistance.

7. What values need to be adjusted in the Add Transaction API payload when redeeming a coupon?A:When redeeming a coupon, reduce the total bill and tender values by the coupon amount, and adjust each line item's amount to reflect the discount.

8. Are there any ways to ingest coupon codes automatically if the coupon code is generated from POS?A: We offer integration via APIs if the series is already created. You can refer to the below documentation linkshttps://capillary.github.io/api-documentation/#issue-coupon-to-customer-singlehttps://capillary.github.io/api-documentation/#issue-coupons-to-customer-bulkhttps://capillary.github.io/api-documentation/#upload-coupons-batch

9. Can we have more than one series per offer?A: Currently, our system supports only one series per offer. However, we have taken this as a feature request.

10. Does the system support 100 % as a discount value?A: Currently, the system accepts only 2-digit values (supporting up to 99%). But considering some special cases we came across yesterday, we will get this to 100%.

11. Can I tag customers with auto-generated coupon codes?A: Yes, you can enable Issue to specific customers only in Coupons details and upload your customer list with any one of their identifiers (mobile no./email id, external ID, user ID). The auto-generated coupons are then tagged only to these customers.

12. Can I configure the WeChat template for resending the coupon templates through POS?A: Currently, we support only the SMS template.

13. How can I see no. of uploaded coupons?A: When you upload coupons, you will see the uploaded count. We will also make this available on the dashboard page.

14. Can we change the discount once created?A: Currently, you can change the discount value or discount type of an existing offer. However, we are still evaluating this feature.

15. How can I get the series ID of a coupon through coupon/issue API?A: You can get the series ID through an API call. You can use a series ID, and Point of Sale (POS) identifier to consume an offer through an API call.

16. What happens if the expiry date of an offer is after the campaign expiry date?A: After the expiry date of a campaign, the offer is still valid but in campaign reporting, you will get details only till the campaign end date.

17. What if my coupon expiry is after my Offer expiry?A: If the expiry of the series is 31st Aug and the coupon code expiry is set as 3 days from issue. Now someone got the coupon on 31st Aug, then they can use it till 3rd Sept.

18. Do we have test vs. control in Loyalty?A: No. We do not have a test vs. control check for the loyalty program.

19. Do we need to reconfigure the loyalty program if we make any changes in the Offers tab of Loyalty?A: No, it is not required to reconfigure the loyalty program.

20. Will there be any change in the isRedeemable get call nodes?A: We will add an additional node - Max Discount. Rest everything will remain the same.

21. Can we have the same offer names?A: Yes, you can have duplicate offer names. But, it is highly recommended not to keep duplicate names, at least within a module.

22. How do you create coupons to be awarded on a member's birthday?A: To award birthday coupons, you can compile a list of members whose birthdays fall on the current date and launch a birthday campaign through Engage+, sending out coupons specifically to them.

23. . If we upload a customer with a coupon code in the Incentive UI, will this trigger a coupon issue event?A: No, we do not send an event notification when a coupon is uploaded with a customer identifier.

24. Can we redeem a coupon using specific item codes through an API?

A:  No, coupons can not be redeemed using specific item codes through the API.

Updated6 months ago