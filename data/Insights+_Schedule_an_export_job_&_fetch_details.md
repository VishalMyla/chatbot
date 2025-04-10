# Schedule an export job & fetch details

Before starting with scheduling an export job, ensure that the FTP server is configured for Data Export.An export job could be a recurring event or one-time activity. In a recurring event, only fresh data is downloaded every time the scheduled job runs. For example, if a user has scheduled an export job to run for one month on a daily basis, only the previous day's data will be exported every day for one month.

Note:The system does not assure a fixed finish time for the jobs. The export framework picks up a job according to the order of scheduled time.

Configuring an export schedule involves the following steps:

1. Create an Export Job (Step 1 of 3)export job]

2. Select Data Templates (Step 2 of 3)templates that you want to export]

3. Modifying Template & Creating Schedule (Step 3 of 3)templates to add or remove fields, apply filters and dimensions to export a specific data that you need

4. ClickCreateto schedule

> 📘ImportantWhen you use a Dimension template, the entire data will be exported irrespective of the duration filter applied. Hence, it is recommended not to use templates of Dimensions, Users for example, for recurring schedules unless you wanted to apply the Audience Group filter on itYou cannot apply standard filters such as outlier status, fraud status, merge status, and admin TILL

## 📘Important

Important

- When you use a Dimension template, the entire data will be exported irrespective of the duration filter applied. Hence, it is recommended not to use templates of Dimensions, Users for example, for recurring schedules unless you wanted to apply the Audience Group filter on it

- You cannot apply standard filters such as outlier status, fraud status, merge status, and admin TILL

Once scheduled, the recipients will receive emails as per the scheduled frequency with the job details including the destination link of the exported data.

![673](https://files.readme.io/aa16acc-Uv54KdWoMjekGZdBu9jNzng3_KTWhoGbUQ.png)

> 📘NoteAs the export job writes the files in the specified FTP location, It is recommended to periodically check whether the username/password of the FTP location is configured correctly.To access files from the FTP location, user should have read access to the FTP location

## 📘Note

Note

As the export job writes the files in the specified FTP location, It is recommended to periodically check whether the username/password of the FTP location is configured correctly.To access files from the FTP location, user should have read access to the FTP location

## Fetching Export Jobs

Once an export job is created, you can see the status of the job on theExport Schedulespage. There are more options available to make your search easy.

- Search a scheduled job: Use the search box to search for a specific export job

- Filter list by frequency: See jobs with only frequency Once, Daily, Weekly, or Monthly. By default, you will see 'All' frequency jobs

- Filter list by status: See jobs with the current status - All, Active, or Completed. By default, All jobs are selected.

- Actions: Click the more ... icon to Duplicate or Delete a job and View Execution log

- Job Execution Status: A job can have any of the following statuses - Yet to Execute, Success, In Progress

![1342](https://files.readme.io/49d0d25-io363_yGFFgtwcUvfbi1hc5DM4Dwa8BrFA.png)

- A clock sign Indicates the job is created and is yet to execute (not even once)

- A yellow icon Indicates an execution is in progress currently. A recurring schedule job can have more than 1 executions where as a one-time schedule will have only one execution.

- A green icon Indicates the current execution is successfully executed. For example, if there is a weekly schedule, and the current weeks execution is completed successfully, it shows the green icon. However, when the next execution starts in the next week, it will change to yellow again

- A red icon for the status indicates that the job is unable to execute

## 

> 📘NoteA recurring schedule job can have more than 1 executions where as a one-time schedule will have only one executionWhen the job is in progress, you cannot kill or rerun the jobFor each successful export job, an email will be sent to all the chosen recipients with the destination links of the exported files  (either FTP or S3). To download files from FTP server, click the respective link received on the email, login and download the zip file

## 📘Note

Note

- A recurring schedule job can have more than 1 executions where as a one-time schedule will have only one execution

- When the job is in progress, you cannot kill or rerun the job

- For each successful export job, an email will be sent to all the chosen recipients with the destination links of the exported files  (either FTP or S3). To download files from FTP server, click the respective link received on the email, login and download the zip file

To view details of a specific job:

1. Click on theschedulethat you want to see

![948](https://files.readme.io/d5a41f4-fZmsndk_oK3ggNnBVcKb-n8BbUNWhJmqhg.png)

1. On theOverviewtab, you can see the details of the schedule such as schedule name, description, schedule type, FTP tag, frequency, execution date, export data fields, notify recipients, and templates.

On theOverviewtab, you can see the details of the schedule such as schedule name, description, schedule type, FTP tag, frequency, execution date, export data fields, notify recipients, and templates.

2. To see the execution log, click theExecutionLog tab.

To see the execution log, click theExecutionLog tab.

![1090](https://files.readme.io/0169fe1-auWMH_aldn_gOCem_FvvTDtrV8GBHmpE_Q.png)

1. If an export job fails in the middle for some reason, you can run the job manually by clicking theRerunbutton. The job will run from the previous successful schedule.

## 

Updatedover 1 year ago