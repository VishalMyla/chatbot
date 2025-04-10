# Configure Validity and Renewal Conditions

# Validity period

The validity period indicates how long a customer can access the benefits of their respective tier.

The validity of the tier can be validated by one of the following options:

- Until tier upgrade or fixed duration

- Until next registration date of customer

- Until fixed date

## Until tier upgrade or fixed duration

The validity of the tier is validated after a specific fixed duration period. During this time, customers have the opportunity to upgrade to a higher tier and then the validity period of the customer is adjusted to align with their upgraded tier.

### Use case

Consider the below scenario:

- The date the customer upgraded to a higher tier was April 15, 2024.

- The fixed duration for the renewal check is 12 months.

The renewal check for the customer happens on April 15, 2025. Suppose the customer has met his eligibility criteria for upgrading to a higher tier and gets upgraded on October 25, 2024. Now the customer gets the renewal check extended to October 25, 2024, instead of April 15, 2025.

> 📘NoteIf the expiry date for a tier is changed, only new customers who will be upgraded or downgraded to that tier are affected by the change. Existing customers will keep their previous expiry date.To update the tier expiry information of existing customers of a tier, use theslab data import function.

## 📘Note

Note

If the expiry date for a tier is changed, only new customers who will be upgraded or downgraded to that tier are affected by the change. Existing customers will keep their previous expiry date.

To update the tier expiry information of existing customers of a tier, use theslab data import function.

## Until the next registration date of customer

The registration date refers to the date when a customer registers as a loyalty customer. In this scenario, the program annually validates the validity of the tier based on the registration date of the customer.

### Use cases

Scenario 1

Consider the below scenario:

- The registration date of a customer into a program is October 25, 2024

- The date on which the customer made an upgrade to a higher tier: October 15, 2025

In that case, the renewal check of the tier happens on October 25, 2025. But, if you prefer to make the customer stay in that new tier for a minimum duration, you can set the minimum duration as 6 months.

In this case, the renewal check becomes nullified for 6 months on entering the new tier, then the renewal check will only happen to the customer on October 15, 2026.

Scenario 2

Consider another scenario, where the customer registration date is on a leap year.

The customer registers into a program on February 29, 2024, which is a leap year.

The following renewal checks for the tier in the years ahead occur on the following dates:

- February 28, 2025

- February 28, 2026

- February 28, 2027

- On the next leap year 2028, the renewal check happens on February 29.

## Until fixed date

The validity of the tier is validated on a configured fixed date every year.

### Use case

Consider the below scenario:

- The date the customer upgraded to a higher tier: April 15, 2024

- Configured fixed date: April 20

In this case, the renewal check of the tier happens on April 20, 2025. But, you prefer to make the customer stay in the new tier for a minimum duration of 6 months.

In this case, the renewal check becomes nullified for 6 months on entering the new tier and the next renewal check happens on April 20, 2026.

# Configuring validity period

To configurevalidity period, perform the following steps:

1. InEdit tier, enableValidity. Once this is enabled in any of the tiers, the validity options will get enabled for you in advanced settings.

![](https://files.readme.io/4903dd2-Screenshot_2024-05-13_232907.png)

1. InAdvanced settings, under "Validity", selectValidity Period.

![](https://files.readme.io/1b8f044-Image_2_validity_period.png)

As you can see here, The Validity section provides three options.

- Until tier upgrade or Fixed duration

- Until the next registration date of customer

- Until fixed date

1. If you select:

- Until Tier upgrade or Fixed Duration, in theFixed duration, enter the months after which the tier expires.

![](https://files.readme.io/292f0fd-Screenshot_2024-05-13_172958.png)

- Until next registration date of customer, checkAdd minimum durationbox to set the minimum duration.

![](https://files.readme.io/1e92912-Screenshot_2024-05-13_174647.png)

> 📘Minimum Duration in case of Registration dateBy setting a minimum duration, the tier stays valid for that  minimum duration during the first cycle, the validity check will begin from the customer’s registration date every year.

## 📘Minimum Duration in case of Registration date

Minimum Duration in case of Registration date

By setting a minimum duration, the tier stays valid for that  minimum duration during the first cycle, the validity check will begin from the customer’s registration date every year.

- Until Fixed Date, in theFixed date, you can set the date for which the tier expires.

![](https://files.readme.io/2c10118-Screenshot_2024-05-13_174345.png)

> 📘Minimum Duration in case of Fixed dateBy setting a minimum duration, the tier stays valid for that minimum duration during the first cycle, and the validity check will begin from the fixed date every year.

## 📘Minimum Duration in case of Fixed date

Minimum Duration in case of Fixed date

By setting a minimum duration, the tier stays valid for that minimum duration during the first cycle, and the validity check will begin from the fixed date every year.

## Check tier expiry on a daily basis

Enabling this option allows you to validity check the renewal conditions and corresponding downgrades daily.

![](https://files.readme.io/7952116-Check_validity_on_daily_basis.png)

> 📘Note:By default, the validity check of the renewal conditions and corresponding downgrades happens only on the last day of each month.

## 📘Note:

Note:

By default, the validity check of the renewal conditions and corresponding downgrades happens only on the last day of each month.

# Configuring renewal conditions

To configurerenewal conditions, perform the following steps:

1. InEdit tier, enable theRenewal conditions.

![](https://files.readme.io/0b1af3a-Screenshot_2024-05-13_175922.png)

1. InRenew current tier if any of the following conditions are true from, perform the following steps:

![](https://files.readme.io/7ce97dd-Screenshot_2024-05-13_180621.png)

- EnablePurchasesand enter the purchase value.

[Purchases](/docs/tier-downgrade-renewal#purchases)

![](https://files.readme.io/05f336d-Purchases.png)

- EnableNo of visitsand enter the number of visits that the customer has to make within the validity period of the tier.

[No of visits](/docs/tier-downgrade-renewal#number-of-visits)

![](https://files.readme.io/6e3edab-No_of_visits.png)

- EnablePoints earnedand enter the number of points that the customer needs to earn within the validity period.

[Points earned](/docs/tier-downgrade-renewal#points-earned)

![](https://files.readme.io/0e64480-Points_earned.png)

> 📘You can also add tracker as an renewal condition on selecting+Add tracker.

## 📘

You can also add tracker as an renewal condition on selecting+Add tracker.

1. Select "Done".

> 📘Tier renewal happens if any of the when conditions enabled are satisfied.

## 📘

Tier renewal happens if any of the when conditions enabled are satisfied.

# Extension of tier after renewal

Extension of tier renewal specifies how long the tier is extended once the customer meets the renewal conditions. The extension of tier duration relies on the option set in the tier validity configuration.

You can define the extension period based on the following:

- Until tier upgrade or fixed duration

- Until the next registration date of the customer

- Until a fixed date

## Tier renewal until tier upgrade or fixed duration

The following options are available under this condition:

- By one month

- By tier’s validity period duration

- From fixed date by tier’s validity period duration

### By one month

The tier gets renewed for one more month, with the next renewal check happening after one month, and this process continues repeatedly.

Use Case

Consider the below scenario:

- The renewal check date of the tier: is April 15, 2024.

On April 15, 2024, the renewal check happens and upon meeting the renewal conditions, the tier is extended until May 15, 2024. The system will then perform the next renewal check on May 15, 2024, evaluating the renewal conditions from May 15, 2023, to May 15, 2024.

### By tier’s validity period duration

The tier gets renewed for the predefined value set in the fixed duration of the tier validity.

Use Case

Consider the below scenario:

- The date the customer upgraded to a higher tier was April 15, 2024.

- The fixed duration configured for the renewal check is 12 months.

The renewal check for the customer happens on April 15, 2025, and the tier gets renewed for 12 months and the next renewal check happens only on April 15, 2026.

### By the duration of the tier's validity period from a fixed date

The tier gets renewed till the configured fixed date, and the renewal check happens on the fixed date.

Use case

Consider the below scenario:

- Configured fixed date of the tier: January 1, 2025

In this case, the renewal check happens for all the customers in the organization on January 1, 2025.

> 📘Note:Once the set fixed date has passed, you must access the tier configuration to establish the fixed date for the following year.

## 📘Note:

Note:

Once the set fixed date has passed, you must access the tier configuration to establish the fixed date for the following year.

## Tier renewal until the next registration date of the customer

After the renewal check, the tier stays valid for 12 months from the registration date to the same date the next year.

### Use case

Consider the below scenario:

- The registration date of a customer into a program is October 25, 2024.

- The date the customer upgraded to a higher tier was October 15, 2025.

- Configured minimum duration: 6 months.

In this case, the program is configured with a minimum duration of 6 months, so the renewal check on October 15, 2025, will be nullified. The system will conduct the renewal check of the tier on October 25, 2026, and upon meeting the renewal conditions, the tier of the customer is renewed, and the next renewal check happens only on October 25, 2027.

## Tier renewal until fixed date

After the renewal check on the fixed date, the tier stays valid from the fixed date to the fixed date next year.

### Use case

Consider the below scenario:

- The configured fixed date: January 1

In this case, the system conducts the renewal check of the tier for all the customers within that organization on January 1, 2025. If the tier of the customers is renewed, the next renewal check happens only on January 1, 2026.

Updated5 months ago