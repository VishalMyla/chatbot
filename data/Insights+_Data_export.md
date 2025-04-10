# Data export

Data Export helps you export the CRM data available in Capillary's system to an SFTP location or internal server. You can export data related to customers, transactions, coupons, points, Footfall, and campaigns.

You can create an export job using (predefined) standard templates or custom templates. Each template is a combination of either KPIs or facts, and dimensions.

> 👍NoteFor the data export, brands should have their own hosting infrastructure. Capillary supports only Secure FTP (SFTP) for the data export.

## 👍Note

Note

For the data export, brands should have their own hosting infrastructure. Capillary supports only Secure FTP (SFTP) for the data export.

## Features

- Create custom data templates

- Support for Extended Fields, Footfall Data, and Profile V2

- Get data by recently updated date or event date

- Export IDs of stores, users, and products

- Export custom fields, and extended fields

- Export a specific audience list using KPIs and dimensions

- Works on auto-update time of tables

## Limitations

- Supports a maximum of one year's data. The maximum size of the file which can be exported is 20GB. If the exported file exceeds this limit, a validation error is triggered.

- Always works on Incremental Data Set. An incremental data set refers to a subset of data that has been updated or modified since the last export or processing operation. Instead of exporting or processing the entire data set each time, only the changes or additions made since the last operation are considered. This approach helps in optimizing resource usage and improving efficiency, especially when dealing with large volumes of data.

- Unable to edit a template once created

- Unable to modify KPIs, dimensions, filters, and customer list once scheduled

- Unable to export measures (such as bill id, bill number, bill amount, auto update time) and custom fields in custom templates. You can export only KPIs and its dimensions

- Limit of selecting only five dimensions in a custom template for an export job

- Current day's data will not be included in the exported data as the data will be synced to the capillary server only during nights

For more details on Data Export, check out the following topics

- Schedule an Export Job & Fetch Details

- Data Export

Updated8 months ago