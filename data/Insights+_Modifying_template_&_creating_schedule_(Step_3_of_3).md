# Modifying template & creating schedule (Step 3 of 3)

Once you select the required templates, you can modify each template to add or remove default dimensions, modify FTP location for each template, and customize the columns to be exported. You will also need to select the required custom fields.

> 📘Note:You cannot export customer level custom fields through transaction templates. However, you can export customer level extended fields through transaction templates.Custom fields are not selected in a template by default.

## 📘Note:

Note:

- You cannot export customer level custom fields through transaction templates. However, you can export customer level extended fields through transaction templates.

- Custom fields are not selected in a template by default.

To modify a template:

1. Once you select a template, you will see the option to modify it. ClickModify.

2. To save the file in a specific location, click, enter the folder name or path, and clickSave. For more details,scroll down to the Choose the default location of the file in FTP locationsection.

3. In Based on, choose whether you want to export data based onLast Updated date or Event Date(not applicable for audience list export).

![](https://files.readme.io/8594ede-SDbcTeu3mTnqG6bgmWUPSJjLlRqsu8ruMA_1.png)

- Last Updated: Use this to fetch records that are updated during a specified period.

- Event Date: Use this to fetch records based on the actual event date. An event could be registration, transaction, points redemption, and so on.

- For example, if a customer is registered on 1st Apr 2019, but it is synced to our system through Data Import on 15th Apr 2019, the event date of registration is Apr 1, 2019, and the latest updated date is Apr 15, 2019.

> 📘Important Note:It is important to understand the applicable date types based on the type of template:Fact Template: Both Event Date and Last Updated date are applicableDimension Template: Both the Event Date and Last Update date are not applicableCustom Template: Event Date is applied by default. You can modify the template to choose the desired date type

## 📘Important Note:

Important Note:

It is important to understand the applicable date types based on the type of template:

- Fact Template: Both Event Date and Last Updated date are applicable

- Dimension Template: Both the Event Date and Last Update date are not applicable

- Custom Template: Event Date is applied by default. You can modify the template to choose the desired date type

1. In the Preview table, you can see the fields that will be downloaded for the template. See the preceding note for more details

2. For each available KPI, you will see the KPI name as in the system. InRenameField, you can set your preferred name to see in the exported file.For example, for the bill_conversion _date.day_of_month, I could have Daily Bill Conversion. You can also use Chinese names if required.

![](https://files.readme.io/81a8e72-gVNw_isoqU1jDyShfrBNBLkL2Vgl3Q24Rw.png)

1. ClickSaveto save the template. Similarly, you can configure all the selected templates.

2. ClickCreateto complete the export job creation.

> 📘The filename of an exported file will have the following naming convention.schedulenametemplateName_timestamp. For example, DailySlabChangeSlabChangeLog2019-10-29-12-30-021572356331802.

## 📘

The filename of an exported file will have the following naming convention.

- schedulenametemplateName_timestamp. For example, DailySlabChangeSlabChangeLog2019-10-29-12-30-021572356331802.

## Change the default location of the file in FTP location

By default, the data of each template is saved in the location set in FTP configurations. However, you can export the file to a specific folder in the default path as explained in the following procedure.

1. On theModify Templatepage, click on the location icon.

![817](https://files.readme.io/2d47b82-9iAkxZP3ZDxLajt2e_Sn17ZTYddILjwfXQ.png)

You will see the default path with an option to enter the file location. You can add up to two folders.

1. Enter the path and clickSave.

![436](https://files.readme.io/7789673-hWegUgy4VXBqFLqGJAB0VDWniHsyphbIaw.png)

Updated10 months ago