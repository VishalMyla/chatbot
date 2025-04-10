# Retro transaction request

# Introduction

Retroactive transactions or Retro transactions are those transactions that are applied to a loyalty program account after the transaction has taken place. This can occur due to a number of factors such as an error in the transaction process, a delay in the transaction being recorded, or a promotion being applied retroactively to a past purchase. Retro transaction allows brands to choose the date to be followed for retro transactions as per their policies.

> 📘To enable retro transactions for your org, contact the Capillary sustenance team.

## 📘To enable retro transactions for your org, contact the Capillary sustenance team.

To enable retro transactions for your org, contact the Capillary sustenance team.

# Handling retro transactions

Capillary handles retro transactions based on the date of the transaction as well as the date of processing. A not-interested transaction can be tagged to the respective customer when the customer registers into the loyalty program within the window period.

For instance, if a customer took a flight on March 20th but did not provide loyalty details on that date and later reached out to the airline’s customer care to obtain loyalty points, the transaction date is March 20th, and the date on which the loyalty points are processed becomes the date of processing.

To avail of the airline rewards, the customer can provide flight and loyalty program account information to the airline. The airline then tags the transaction and awards the reward to the customer based on the date of transaction or date of processing.

# Configuring the window period for retro transaction

To customize the retro transaction window, perform the following:

1. Navigate toOrganisation settings.

2. Navigate toSystems & Deployment>Intouch POS Configuration>Billing.

![](https://files.readme.io/4be7138-image.png)

1. On theBilling configurationpage, enter the  value in theCONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYStextbox to configure the maximum allowed window for a retro transaction.

`CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS`

![](https://files.readme.io/d77ad59-image.png)

1. To configure buffer time, in theCONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURSset the value of your choice.

```
CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS
```

For instance, if the value is set to 3, the customer registering at 9:00 AM will be able to claim loyalty points for a non-interested transaction with billing times later than 6:00 AM but not before 5:59 AM.

![](https://files.readme.io/d469cee-Billing_config.png)

# Submiting transaction tagging request

Transaction tagging request allows you to tag a not-interested transaction into a regular transaction.

Perform the steps below to submit a transaction tagging request:

1. On the Member Care homepage, search for the user you want to submit a transaction tagging request.

![](https://files.readme.io/3d5f1e8-image.png)

1. Click the three-dot menu.

![](https://files.readme.io/f0df43f-image.png)

1. Expand theMore actionsdropdown, and clickTransaction requests.

![](https://files.readme.io/ab5f704-image.png)

1. Enter the non-tagged transaction number and clickSearch transaction.You can filter the transactions based on date and store.

![](https://files.readme.io/1921442-image.png)

1. ClickSave.

![](https://files.readme.io/2a7aac8-image.png)

Transaction linking request is raised successfully.

# Viewing transaction tagging request

To view the transaction tagging request, perform the following steps:

1. On the Member Care home page sidebar, navigate toMember Care>Requests>Member requests.

2. ClickTransaction claims.

![](https://files.readme.io/f681c5e-image.png)

1. Click theAlltab to view all requests. You can click thePendingtab to review a request, theApprovedtab to view approved requests, and theRejectedtab to view requests that were rejected.

![](https://files.readme.io/4d92552-image.png)

1. You can select the desired date range and view the transaction tag request that was created within that specific duration.

![](https://files.readme.io/12a5bbe-image.png)

You can view retro transaction information within the transaction details on Member Care. For more information, refer to the Event detailsdocumentation.

Updatedover 1 year ago