# Mask Data in Databricks

Data masking can be done at the organization level to prevent the exposure of sensitive data.

# PII Data Masking

Admin users can enable PII data masking in Databricks and hide the PII data (including custom field and extended field data) of customers during the export of data from Databricks. Once the ETL is done, the data gets masked.

Perform the following steps to enable PII data masking:

1. From the Rizer UI home page, navigate toPII configs.

2. For the brands you want to enable PII data masking, clickConfigure.

![](https://files.readme.io/d30b549-a3b39d1-Configure_2.png)

3. ClickEnable.

![](https://files.readme.io/5281118-Enable_PII_masking.png)

After enabling, when you export data, the PII fields are masked. Same steps can be followd to mask the PSI data.

![](https://files.readme.io/91079d8-Masked_PII_data.png)

1. To pause PII data masking, clickPauseand to disable PII data masking, clickDisable.

![](https://files.readme.io/c0c1f1a-Disable.png)

# PSI Data Masking

WhenPSI data masking is enabled for a brand, PSI fields including custom and extended fields, are masked in the Databricks. In the Analytics database (read_api tables), they are displayed as a string of asterisks ("*").

Create a Jira ticket for the product support team to pause or disable masking.

> 📘NoteTo access unmasked PSI data, jobs must be run on admin_read_api tables, which are restricted to authorized Databricks users.

## 📘Note

Note

To access unmasked PSI data, jobs must be run on admin_read_api tables, which are restricted to authorized Databricks users.

Updatedabout 2 months ago