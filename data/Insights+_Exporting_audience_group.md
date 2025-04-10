# Exporting audience group

Export Framework lets you export metric values of a specific customer list using an Audience filter in a template. For example, you can export transactions made by a specific audience in a particular store. Use the right template based on the data you want to export.

See the following example for a better understanding:

> 📘ALAN NEEDS TO EXPORT LOYALTY DETAILS OF CUSTOMERS WHO REGISTERED AT A SPECIFIC STOREYou can get registered customers of a specific store using the Members template. However, the maximum duration that you can have is one year. So you cannot get the entire set of registered customers through one export.Solution:Create an audience group using filters to get customers that registered in a specific store. For more information, See Registered Store filter of the loyalty categoryIn Export Framework, use Members template and select the specific Audience filterSchedule the export. The exported list will have all customers that registered in a specific store irrespective of the selected date range

## 📘

ALAN NEEDS TO EXPORT LOYALTY DETAILS OF CUSTOMERS WHO REGISTERED AT A SPECIFIC STORE

You can get registered customers of a specific store using the Members template. However, the maximum duration that you can have is one year. So you cannot get the entire set of registered customers through one export.

Solution:

1. Create an audience group using filters to get customers that registered in a specific store. For more information, See Registered Store filter of the loyalty category

2. In Export Framework, use Members template and select the specific Audience filter

3. Schedule the export. The exported list will have all customers that registered in a specific store irrespective of the selected date range

Important points to note while creating audience list:

- You can get only loyalty and non-loyalty customers through the Members template

- You can get all target audience of a campaign through the Users template irrespective of their loyalty status

- Date range is not applicable in audience list export and Based on will be set to Audience selected by default

![633](https://files.readme.io/38d889f-rVYYCEvFbiWnfNrLrAyzsG4o4ctWBVFMhQ.png)

> 📘Note:If you want to export the audience of a specific campaign through templates other than Users and Members, it is required to select the campaign name, campaign id, or group name as a filter. Else, you will get an audience list from all campaignsCustom fields are not selected by default in any templateYou cannot get customers with the birth year before 1901You cannot apply standard filters such as outlier status, fraud status, merge status, and admin TILL

## 📘Note:

Note:

- If you want to export the audience of a specific campaign through templates other than Users and Members, it is required to select the campaign name, campaign id, or group name as a filter. Else, you will get an audience list from all campaigns

- Custom fields are not selected by default in any template

- You cannot get customers with the birth year before 1901

- You cannot apply standard filters such as outlier status, fraud status, merge status, and admin TILL

Configuring a customer list export schedule involves the following steps:

1. Define a name and description for the export job

2. Set up the frequency and validity of the job

3. Choose the templates with events data

4. Tag the audience list to the template

To export audience list:

1. On Essential Insights, navigate toData connectors > Export Schedules

2. ClickCreate Export Schedule

![1333](https://files.readme.io/ec318e3-yl-3GOj21-yH5o2SYwfhQkEaUFLO8bdefw.png)

1. Schedule Name: Specify a name for the current schedule job

2. Description: Specify a short description of the schedule job

3. Schedule Type: The target destination of the export files. Select FTP to save the files in the preferred FTP location, S3 to save the files in the internal S3 server. S3 is only used internally.

4. Frequency: Choose the frequency of running the current export job - Once, Daily, Weekly or Monthly. You can set a maximum of one-year duration

> 📘The duration (From & Till dates) of the schedule job should always be future dates.

## 📘

The duration (From & Till dates) of the schedule job should always be future dates.

| OPTION | DESCRIPTION |

| --- | --- |

| Once | Runs the export job on the scheduled date(only once).  The data is considered based on the last updated date.In this, the Execute on date will be selected by default, which is the current date.In Export Data from, you need to choose the duration for which you want to capture the data (supports up to one-year duration). You cannot select the current date or future date.IMPORTANT NOTE:If you want to export data for a specific date range, the date range of Execute Date should always be more than the end date filter that youapply in the chosen template (s) - Modify Templates > Filters > DateNote: You can use Date or Time in filters to get the data by event date or event time respectively. |

| Daily | Runs the export job on a daily basis for the duration you specify.In Validity, choose the duration for which you want this daily schedule to run. You can select only current and future dates. You will get previous day's data the next day. For example, you will get current day's data the next day.Note: You cannot select past date in Validity |

| Weekly | Runs the job on a weekly basis for the duration you specify.In Execute on, select the day of the week when you want to run the weekly scheduleIn Validity, choose the duration for which you want this weekly schedule to run. You can select only current and future dates. You can select a maximum of 1 year duration.Note: If Execute on is set to Sunday (s), you will get weekly data every Monday. |

| Monthly | Runs the job on a monthly basis for the specified duration.InExecute on, select the day of the month when you want to run the monthly schedule, which is from 1-30/31.InValidity, choose the duration for which you want this monthly schedule to run. You can select only current and future dates and a maximum of 1-year duration.Note: If Execute on is set to 1, you will get monthly data that is available until the 1st of every month on the 2nd. |



1. Notify Recipients: Select the recipients for the current schedule and clickSelectto apply. These users will get recurring notifications (until the validity of the job) whenever the job runs and sends the link of the target location of the exported data.

2. In Export Templates, clickAdd/RemoveTemplates

![824](https://files.readme.io/d774d2b--Du4K4RMvfYZOE9WoAM_AxhQHEeRD8zh0w.png)

1. Check the templates that you wanna add to the export job and clickSelect. The templates should contain events data to download the customer listBy default, all the applicable KPIs and dimensions of the template are selected. You need to modify the template to select the customer list and also the KPIs and dimensions that you want to export.ClickModifythe template.

![673](https://files.readme.io/eb01701-vydWUrJt3e0BrquS2hMphiL-b3u64rkK9g.png)

*Note: Once you select a template other than users or members, it is required to add the filter campaign name, campaign id, or group name to get customers of that campaign or group. Else, you will get the details from all campaigns.*10. Click theFiltersicon and navigate to theAudiencetab.

![193](https://files.readme.io/8b90b46-NOdjiwUXAphJI6AD_yphp0dRflpsL48yiA.png)

1. Select your preferred audience list. You can also search for a specific list using theSearchbox. You will see all the selected audience list (segment) as shown below.

![845](https://files.readme.io/8f34b00-FDAcNellJ-4PRv7zLIyTmkqUQK5vNXwH_Q.png)

1. ClickSave.

Updatedover 1 year ago