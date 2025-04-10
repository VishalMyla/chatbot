# Block-Level Reporting in Journeys

The Journey Block Level Reporting feature provides detailed insights into the performance of individual blocks within a journey. This enhanced reporting capability helps you to understand how each block is performing and enables you to take action if required.

> 🚧NoteBy default, this feature is not available for all the orgs. You need to raise a Jira ticket to the sustenance team to enable the feature for your org.

## 🚧Note

Note

By default, this feature is not available for all the orgs. You need to raise a Jira ticket to the sustenance team to enable the feature for your org.

## Type of KPIs in the report

The application fetches different types of KPIs, depending on the blocks used in the journey:

- Basic channel measures  such as Sent, delivered, clicked and opened (wherever applicable)

- Basic journey measures such as the number of customers who entered a block, number of customers who exited the journey, number of customers waiting in a wait block and so on

- Incentives measures - Issued and Redeemed

> 📘NotesA journey report will be available 24 hours after the Journey goes live. This is based on the ETL sync time as it is based on the date from the Insights backend.

## 📘Notes

Notes

A journey report will be available 24 hours after the Journey goes live. This is based on the ETL sync time as it is based on the date from the Insights backend.

# Viewing a report

To view a report of a Journey, perform the following:

1. From the Journey listing page, open the journey for which you want to see the performance report.

From the Journey listing page, open the journey for which you want to see the performance report.

2. Turn on theView reporttoggle switch. The report is displayed for the individual blocks.

Turn on theView reporttoggle switch. The report is displayed for the individual blocks.

![](https://files.readme.io/1f48f364ce5fd5f49d95d080c923f453613ed5a0026c49f14e2118fb2b753470-image_4.png)

3. You can use the date filter the performance date based on the date range. The maximum duration of a report is not limited, but you can adjust the date range as needed. Refer to  sectionUsing date filter.

You can use the date filter the performance date based on the date range. The maximum duration of a report is not limited, but you can adjust the date range as needed. Refer to  sectionUsing date filter.

![](https://files.readme.io/3bbc180-Date_filter.png)

4. From the meat-ball menu, click theReset to default viewto reset the view.

From the meat-ball menu, click theReset to default viewto reset the view.

# Using date filter for report

The date filter allows you to view the report for a desired date range. Below are the features of the date filter:

- The default date range for the report is from the date the journey went live until the current date.

- You can alter the date range for the report by changing the start and end dates.

- When you open the report mode, the application displays relevant data based on the selected version. For instance, if you have two versions of your journey and Version 1 spans from August 2 to August 3, the application will display the report for that specific duration when you open Version 1.

# FAQs

1. Can we download a report?At present, you cannot download a report.

2. Is this available for all organisations by default?No. You need to raise a Jira ticket to enable this feature.

3. Why might the View Report button be disabled after a journey goes live?The button may be disabled if theETL Syncis still in progress. The system takes 24 hours after the journey goes live to generate the report.

4. Are there any limitations to the reporting functionality?Yes, in the initial phase of reporting functionality, certain features may be limited. For example:Report download flow is not coveredChannel priority and AB testing blocks will not display detailed metrics for sub-blocks.

- Report download flow is not covered

- Channel priority and AB testing blocks will not display detailed metrics for sub-blocks.

Updated8 months ago