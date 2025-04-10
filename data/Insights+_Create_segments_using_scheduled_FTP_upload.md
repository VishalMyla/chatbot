# Create segments using scheduled FTP upload

## Introduction

This feature enables you to automate user segment uploads. You can create a new segment or select any segment that is manually refreshed through FTP upload. For these segments, you can configure an automated refresh cycle using scheduled upload features. For example, a segment created on Insights+ using analytics notebooks(Databricks) refreshes automatically every week - update the segment values to a CSV file by syncing it to the specific FTP path(folder). Insights+ automatically selects the latest file and refreshes the segment according to the selected frequency and validity.

There are two types of customer segments -SCDandNon-SCD. SCD based scheduled upload records segment snapshots at multiple points of time, whereas to perform upload on the latest segment snapshot Non-SCD based scheduled upload is used.

![650](https://files.readme.io/b16e0c0--DKuFy97J7LWudhz3fRxEWfS-BtyXgI5zQ.png)

## Segment Status

The following are the segment status.

1. Inprogress: Segment creation is under process.

2. Draft: Signifies a draft state where the recent changes are not saved. You can open the segment to save the draft available and click on Create to save the partition values. You can also edit partitions or Deactivate draft segments.

3. Active: Only active segments are available for services that use Segments. You can either edit or deactivate an active segment.

4. Inactive: These segments will be inactive and not appear in any service that consumes segments. You can modify an inactive segment to activate it.

## Create a new segment

To create a new segment with scheduled FTP server upload, follow the steps.

1. On the EI navigation pane, clickSegments>User Segments.

2. Click theCreate Segment.

3. In theSegment Name, specify a name for the group.

4. In theDescription, specify a short description of the segment.

5. InType, selectSCDto keep track of customer behavior for the current segment. SelectNon-SCDto save only the current snapshot.

6. In theMethod, selectUploadand clickNextto continue.

7. InUpload Type, selectScheduled Upload.

8. InScheduled Upload, select theFTP Configurationto configure the following options

![1350](https://files.readme.io/c73d050-MjkYsbfP9lfb1h8WNrrxcZIUCfSHvl32hw.png)

| Options | Description |

| --- | --- |

| FTP name | Select the FTP name from the list. You can select from five FTP names as configured in FTP settings. |

| FTP path | Enter a valid FTP path. FTP path must be relative to the configured root folder. For example, root_folder/FTP path such as ftp://demo_apac/demo_master/demo_path/demo**points.csv. Here, demo_apac/demo_master/ is the root folder and /demo_path/ is the FTP path.Note:- Name of the file must be in the format 'name of the segment**any suffix'. For example, consider demo__points.csv as a file name here demo is the segment name separated by a double underscore from the suffix(points).- The FTP path must point to the correct CSV file.- The first row of the CSV sheet must be a column header.- First column header must be a user identifier such as user id, mobile, email, and external_ID.- If the identifier is mobile(mobile number), country code is mandatory (without the "+" sign). For example, 919972752991.- The second column header must have a partition value. For example, If the first column header is the user_id(1,2,3, and so on) then the second column header must hold the partition value( high, medium, or low). |

| Frequency | Schedule the FTP upload frequency by selecting the options - daily, weekly, or monthly. This schedule starts on the day the user segment is created and ends on the last day, week, or month as selected in the frequency and validity option. Since this update occurs after the ETL process, the underlying data may be up to 24 hours old.Consider the segment created using FTP scheduled upload on October 1, 2020.Daily: The schedule starts from October 1, 2020, till the last(to) date of validity.Note: Daily schedule always runs on the system sync time. It is recommended to use a daily schedule rather than a weekly and monthly schedule for a regular refresh in the upload of data.Weekly: The schedule starts from October 5, 2020, till the last(to) week of validity.Note: Weekly schedule always starts on Monday. If on Monday the schedule is created before the system sync time then the schedule starts on the same day.Monthly: The schedule starts from November 1, 2020, till the last(to) month of validity.Note: Monthly schedule always starts from the 1st day of every month. If the schedule is created before the system sync time then the schedule starts from October 1, 2020. |

| Validity | To mention the validity of the scheduled upload's frequency, select the start(from) and end(to) date using a calendar picker. |

| Recipient | To receive the error notifications, select the recipient(s) using the drop-down list. Any recipient who has access to the organization can receive the notification based on your selection from the drop-down list. |



1. ClickSaveandProceed. Once the process is complete, review the details and clickCreate.

2. After the segment creation using scheduled FTP upload, you can see the segment with a list of partitions as shown below.

> 📘You can see the segment partition once the segment is created depending on the start date of the scheduled FTP upload

## 📘

- You can see the segment partition once the segment is created depending on the start date of the scheduled FTP upload

![878](https://files.readme.io/f69ef14-u0EmBd4wUEaed05AEUhvu9K7zqSGeRCPjw.png)

- Partitions: Partitions are different values of a segment. For example, suppose a segment has High loyal, Medium loyal, and Low loyal as segment values. In that case, three partitions will be created (one for each value).

## Edit existing uploaded segment

To modify an existing upload-based segment using a scheduled FTP server upload, follow the steps.

1. On the EI navigation pane, clickSegments>User Segments.

2. Click on theSegment Namethat you want to edit. You can filter the summary list byType (SCD)andMethod (Upload)and search for a specific filter in theSearch box.

3. Click theEdit Segment.

4. In theEdit segment, click onEdit partitions.

5. InUpload Type, selectScheduled Upload.

6. InScheduled Upload, configure upload options such asFTP,FTP path,Frequency,Validity, andRecipient.

> 📘For detailed information on configurable options, refer to step 8 under the heading Create a new segment.

## 📘

- For detailed information on configurable options, refer to step 8 under the heading Create a new segment.

1. ClickSaveandProceed. Once the process is complete, review the details and clickCreate.

2. After updating the segment using scheduled FTP upload, you can see the segment with a list of partitions. You can also edit the partition.

> 📘After updating the segment, initially, it will be in Inprogress status until the scheduled upload happens, post-process completion the status label disappears

## 📘

After updating the segment, initially, it will be in Inprogress status until the scheduled upload happens, post-process completion the status label disappears

## Execution logs

To track each scheduled upload status, you can check the execution logs that contain a list of details of successful and unsuccessful scheduled uploads.

- Green Dot: Signifies successful execution

- Red Dot: Signifies failed execution.

![837](https://files.readme.io/3345d98-sB6CkMqmjlQMALFDnAr6_UE5yJFDQD6Z9w.png)

Updatedabout 1 month ago