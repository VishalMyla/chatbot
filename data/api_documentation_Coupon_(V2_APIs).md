# Coupon (V2 APIs)

Coupon represents store promotions or discounts created through Capillary Campaign Manager. A single campaign could contain one or more coupons or coupon series. Coupons are issued to loyalty or non-loyalty customers through SMS or email.

You cannot create new coupons using coupon APIs. You can just send or retrieve coupons that are already created in your campaigns. Hence, it is important to note the coupon code, coupon id or coupon series id for making API calls.

You cannot create new coupons using coupon APIs; instead, you can send or retrieve coupons that are already created in your campaigns. Hence, it is important to note the coupon code, coupon id or coupon series id to use coupon APIs.

The V2 coupon entity just allows you to -

- Redeem coupons in batch

- Check whether specific coupons can be redeemed or not

For any other coupon related APIs, please use v1.1 APIs.

## Status Codes

### Error Codes

| Code | Description |

| --- | --- |

| 500 | All requests have failed due to errors |

| 510 | Invalid Redemption ids present |

| 629 | Invalid Input. This can also occuer if you try to redeem more than 100 coupons. |

| 660 | Coupon code has been revoked |

| 661 | No Redemption id passed |

| 683 | Voucher Redemption event failed |

| 687 | Points activities are queued and will be updated later |

| 700 | Coupon series fetched successfullyCoupon processing successful.Coupon resent successfully.Coupon processing successful.Coupon isRedeem successful |

| 701 | The customer could not be found. Please check mobile, email, external id passed |

| 702 | Coupon code is invalid |

| 707 | Coupon Series ID is invalid |

| 703 | Coupon not issued to this customer |

| 704 | Error in sending coupon through SMS |

| 705 | Both coupon code and the validation code are invalid |

| 707 | Coupon Series ID = {x} is invalid |

| 709 | Coupon processing failed |

| 710 | Coupon is not meant for this customer |

| 711 | Coupon is already used |

| 712 | Coupon Series / Campaign has expired |

| 713 | Coupon has expired |

| 714 | Campaign over, it was first come first serve |

| 715 | Invalid organization |

| 716 | Cannot redeem same Coupon multiple times |

| 718 | Transaction number needed for redemption |

| 719 | Coupon code does not exist |

| 720 | Coupon is a test Coupon. Cannot be redeemed |

| 721 | Invalid customer |

| 722 | Unable to create coupon |

| 723 | Coupon not issued to this customer |

| 724 | Unable to communicate information to customer |

| 725 | Validation required |

| 726 | Validation not required |

| 728 | Maximum number of redemptions reached |

| 729 | Invalid redemption range For coupon series |

| 730 | Unknown error |

| 731 | Coupon redemption successful |

| 732 | No Missed call received from the customer |

| 733 | Invalid transaction amount |

| 735 | Invalid store |

| 736 | Allowed redemption consumed |

| 738 | Allowed redemption gap is invalid |

| 739 | Allowed redemption date is invalid |

| 740 | Fraud customer |

| 742 | Coupon issue and redemption blocked for customer |

| 744 | Couldn't save coupon series fields |

| 745 | Saved coupon series fields successfully |

| 746 | Please provide series id |

| 747 | Multiple redemption not allowed |

| 748 | Coupon service timed out |

| 749 | Coupon Redeem/isRedeem failed because of failure on other coupons in the batch |

| 750 | Operation not allowed. Not allowed - customer is marked as fraud. |

| 751 | coupon series with same series code is already present |

| 752 | coupon series with same series code is already present |

| 753 | series code cannot be empty |

| 754 | generic cannot be empty for series type GENERIC |

| 755 | invalid coupon series id |

| 756 | invalid value for mutually exclusive config series |

| 759 | Coupon redemption failed |

| 777 | coupon source not valid for issue coupon |

| 780 | Coupon not found Identifier: {x}.Coupon isRedeem failed |

| 781 | Either coupon ID or coupon code is missing |

| 786 | Coupon processing failed, Please try again later |

| 787 | Coupon processing failed, Please try again later |

| 788 | Invalid configuration. Please report to capillary support |

| 789 | Coupon processing failed, Please try again later |

| 790 | Coupon processing failed, Please try again later |

| 791 | Coupon processing failed, Please try again later |

| 792 | Coupon processing failed, Please try again later |

| 793 | Coupon processing failed, Please try again later |

| 794 | Coupon processing failed, Please try again later |

| 795 | Invalid configuration. Please report to capillary support. |

| 796 | Coupon processing failed, Please try again later |

| 797 | Coupon processing failed, Please try again later |

| 798 | Coupon processing failed, Please try again later |

| 799 | Invalid configuration. Please report to capillary support |

| 1000 | Filters not provided |

