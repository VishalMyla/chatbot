# Target Setting & Tracking at KPI level

You can set a target for a KPI and dimension and track it through the reports associated with the same KPI and dimension. For example, you can set a target sale amount at the store level and then track the status of the sale through the reports that have the same KPI and dimension.

# Setting Target

To set a target value for a KPI, perform the following:

1. From the home page, click the settings icon.

![](https://files.readme.io/ae8d5f1-image.png)

1. On the Settings page, selectTargetand clickCreate target template.

![](https://files.readme.io/b80047c-image.png)

1. In theTemplate namefield, enter a name for the target template.

![](https://files.readme.io/eea2e95-image.png)

1. Expand theKPIdrop-down list and select the KPI for which you want to set a target. Selecting the KPI will populate the relevant dimensions. You can select up to a maximum of three KPIs.

2. Expand theDimensionsdrop-down list and select the dimensions. You can select up to a maximum of three dimensions. Selection ofDimensionsis optional.

3. ClickCreate.  The target template is created and appears in the target templates list.

![](https://files.readme.io/d3fcefb-Target_list_page.png)

If the desired template is not visible in the list, you have the option to either search for it by name using the search box or apply an advanced filter to locate it.

![](https://files.readme.io/50f1b92-Target_List.png)

![](https://files.readme.io/b0f6997-Advanced_filter_for_Target_Template.png)

1. Click on the target template to open it.

![](https://files.readme.io/071d886-Test_Target.png)

![](https://files.readme.io/18eece5-Test_Target1.png)

1. ClickDownload target template. This template is used for adding the target values.

![](https://files.readme.io/2f78548-Downlod_target_template.png)

![](https://files.readme.io/0a0c0bb-image.png)

1. Choose the date range for which you want to set the target.

![](https://files.readme.io/1f6ef8a-Target_dates.png)

1. Expand the time range divider by clicking the drop-down box and selecting from Day, Week, Month and Year.

![](https://files.readme.io/01639be-Target_date_divider.png)

1. ClickDownload. The Target Template file (in CSV format) will be downloaded.

2. Navigate to your device's downloads folder (or wherever downloaded files are stored) and open the CSV target template.

![](https://files.readme.io/58acda7-CSV_zeros.png)

1. In the sheet, enter the target values in the column with zeros.

![](https://files.readme.io/dfae362-CSV_values.png)

1. Save the CSV file.

2. Navigate toInsights+> Settings >Targets > Clickthe target template you created to open it.

3. ClickUpload Targetand choose the CSV file containing the target values that you've added. Make sure that the date is in YYYY-MM-DD format.

![](https://files.readme.io/7175022-Upload_target.png)

The target upload gets validated.

![](https://files.readme.io/adc8a34-Validating_the_target.png)

Once the upload and validation is completed, the target for the selected KPI and dimension is set and ready to track.

![](https://files.readme.io/88a2d0e-Target_Upload_Successful.png)

The configured targets are available atInsights Settings > Target > Uploaded Target Log. You can clickDownload Targetand download the configured target.

![](https://files.readme.io/f3313b5-Navigate_to_Target.png)

> 📘NoteCombination of additive and non-additive KPIs is not supported in target tracking.

## 📘Note

Note

Combination of additive and non-additive KPIs is not supported in target tracking.

# Tracking Target

To track the targets that you have created, perform the following:

1. Form the Insights+ page, navigate toLibrary > Chartsfrom the left panel.

2. ClickCreate chartand create a chart using the same KPI and dimension that you used to set the target. For information on creating a chart, clickhere.

3. Add the chart to a report. For information on adding a chart to a report, clickhere.

4. From theReports, open the report with the KPI and dimension that you used to configure and create the target and filter the dates accordingly.The chart displays the target values. You can use the hide/view icon to view or hide the target from the chart.

![](https://files.readme.io/94128b4-image.png)

# Use case for creating target template

Creating target template to track Loyalty Sales Per Store for Birthday - Anniversary User Segment from 1 June 2024 to 1 July 2024.

By breaking down sales data by user segments like birthdays and anniversaries, you can understand how different segments contribute to overall sales. For example, you can see if there is a spike in sales around birthdays or anniversaries compared to regular days.

To create and upload the target template, perform the following steps:

1. Navigate toInsights+>Settings>Target.

2. ClickCreate target template.

3. Type the target name. Select the KPI asLoyalty Sales Per StoreunderTransactions, and Dimension asBirthday - Anniversary segmentunderUser Segment.

4. ClickCreate. The target is created and is displayed in the list.

![](https://files.readme.io/5c1307c-Create_Target.gif)

1. Click on the target file to open it and clickDownload target template.

2. Select the date range from 1 June 2024 to 1 July 2024, and the time range divider from day, week, month or year. In this use case we have selected week wise division.

3. ClickDownload. This will download the target template (CSV file) in your devices downloads folder.

![](https://files.readme.io/28d1451-Part_2_template.gif)

1. Open the CSV file and fill in the target values. In this case study we are adding Loyalty Sales per Store target sales values as 100. The targets are divided per week, where the start and the end date of the week is displayed.

2. Save the CSV file.

Note: The customers who have not provided their birthday/ anniversary details are referred as NOT_CLASSIFIED.

![](https://files.readme.io/8f9b613-excel.gif)

1. Navigate to the target template that you have created in Insights+. ClickUpload Target. Select the CSV target file (having the target values) and clickOpen. The target file is uploaded and you are ready to track the target.

![](https://files.readme.io/af8a2a0-Final_upload.gif)

Updated10 months ago