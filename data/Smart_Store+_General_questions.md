# General questions

Can I alter the order of custom fields that appear in the Registration window?Yes. You can set the order of the custom fields with numbers. The custom field with least number will be on the on the top of the custom fields list list. To set the priority,  log on to Capillary InTouch and go toSettings > Master Data Management > Data Model > Custom Fields. Set the order of the custom fields in numbers (1, 2, 3 and so on).

\Will I be able to use Capillary InStore when there is a temporary internet outage?Yes. The Capillary InStore application automatically switches to offline mode when there is no internet connectivity. All the registrations and transactions that happen in offline mode are saved in a local server. Once the internet is connected, the data will be automatically synced to the main server.However, in offline mode points and coupons cannot be redeemed.

Will I be able to redeem points/coupons when InStore is not connected to the internet?No. InStore will communicate to the main database over the internet to check whether the points/coupons you want to redeem are valid. Hence, points/coupons cannot be redeemed when InStore is not connected to the internet.

What is the validity of the verification code issued to the customer for redeeming points?By default, the validity of a verification code is set for 20 minutes. Based on the organization's preference, this configuration could be changed.

When will complete data synchronization happens?When you login to the InStore for the first time.

When does online customer fetch option appears?The online fetch option will appear when the keyword (mobile no/email id/name/external id) you are entering to search is not identified in your local database. You will see the online search icon only after entering 5 characters.

If customer data is updated , when will it be available in all TILLs?Usually, the updated customer details can be seen in all the tills on next day when you log in to InStore. However, you can instantly see the updated information of a customer by clicking Refresh icon after selecting the customer in the Search Customer box.

How logs are created and saved by In-Store?Log file records all the activities of InStore. In-Store creates two types of log files.

- Capillary Client Log: Client Log captures In-Store logs in a file. Once the file size reaches 2 MB, the entire data in this file will be pushed to Capillary Client Full Log.

Capillary Client Log: Client Log captures In-Store logs in a file. Once the file size reaches 2 MB, the entire data in this file will be pushed to Capillary Client Full Log.

- Capillary Client Full Log: Capillary Client Full Log file captures data from the Client Log file once the Client Log file reaches its size limit of 2 MB. Full log file can save data up to 50MB. Once the size reached of Client Full Log file reaches 50MB, it creates a new copy of the full log file, pushes the entire data to the new file and clears the data from the existing file. The new activities again captured in the Client Full Log file.

Capillary Client Full Log: Capillary Client Full Log file captures data from the Client Log file once the Client Log file reaches its size limit of 2 MB. Full log file can save data up to 50MB. Once the size reached of Client Full Log file reaches 50MB, it creates a new copy of the full log file, pushes the entire data to the new file and clears the data from the existing file. The new activities again captured in the Client Full Log file.

Where is my In-Store log file(s) saved?/ How can I see In-Store log files?As explained there are two types of log files. The recent log history is available in the CapillaryClientLog.txt file and the old data is available in the CapillaryClientLogFull.txt file.To get the recent log file (CapillaryClientLog), in InStore and clickSettings > Local Settings > Open Log.To view all log files, navigate to the following path and open CapillaryClientLog.txt for recent log history and CapillaryClientLogFull.txt for the entire log history.

C:\Users[User Name]\AppData\Local\Apps\2.0\JNTYDTE4.9JZ\V1NVD9JQ.DDB\capi..tion_103ff715a589dd8e_0005.0005_bdf1bc21725037da\Logging

Note:After reaching 50 MB, a new full log file is created.To get the recent log file, check the last modified date of the file or sort the list by recent modified date and view the latest file.For example, if you are logged in with the user John then the directory of the log files will be C:\Users\John\AppData\Local\Apps\2.0\JNTYDTE4.9JZ\V1NVD9JQ.DDB\capi..tion_103ff715a589dd8e_0005.0005_bdf1bc21725037da\Logging

Updatedover 1 year ago