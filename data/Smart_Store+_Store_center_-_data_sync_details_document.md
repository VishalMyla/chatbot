# Store center - data sync details document

## Information contained in the Data Sync Details Document

The attached Data Sync Details document contains the following information:

- Different components and attributes that will be synced

- Description of different sync statuses for every attribute

- Fields that will be updated for each component

Note:To download the Data Sync Details document, scroll to the bottom of the topic. For background information on the synchronization process and the data updated during the syn, continue reading below.

## What is Synchronization?

The synchronization process updates data between the main server and the local server to which Store Center is connected.

The sync process starts automatically after logging on to the Store Center. The duration for sync completion varies depending on the amount of data to be synced and your Internet speed.

## Sync Types

The sync process is categorized into three kinds based on the sync behavior:

- Fresh Sync:Fresh Sync happens when you log on to the Store Center for the first time. During Fresh Sync, the entire data available in the local server is uploaded to the main server and the entire main server data is downloaded to the local server. Fresh Sync completion is checked after every one hour until the entire process is complete

- Delta Sync: Delta sync downloads and uploads only the updated data. Instead of updating the entire data every time, Delta Sync saves updating time and server load by synchronizing only the fresh data from both local server and Capillary server. Delta Sync happens every time you log in to the Store Center. However, for Delta Sync to happen, the Fresh Sync should have completed successfully

- Manual Sync:Manual sync can be chosen when the Fresh or Delta sync fails. You can select the manual sync option from the Sync window of Advanced Settings

## Components Updated

The following components will be updated in synchronization:

- Customer:Contains customer profile details, loyalty details, line store transactions, redemption and points, slabs, and subscription status

- Custom Fields: Contains values of the custom fields filled for customers. The custom fields typically appears in registration and updation screen

- Voucher Series:Contains the details of coupons issued to customers and the validity of each coupon* Inventory Master:Not used

- Customer Attributes: Not used

- Store Attributes:Not used

- Loyalty Tracker:Not used

- Fraud Users List: Contains the list of fraud customers.

- Task Metadata:Contains metadata of the call tasks created for the store associates. This data is fetched only for Clienteling versions

- Tasks:Contains list of call tasks created for the store associates. This data is fetched only for Clienteling versions

- Associates:Contains the list of associates of the store. This data is fetched only for Clienteling versions

- Reminders:Contains the list of reminders created for the store. This data is fetched only for Clienteling versions

- Communication Template:Contains SMS and email templates created for your organization. This data is fetched only for Clienteling versions

- Stores:Contains the list of all stores of your organization. This data is fetched only for Clienteling versions

Updatedover 1 year ago