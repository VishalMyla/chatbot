# Create and Publish Custom Report

## Normal, Migration and Funnel Report

To create a Custom Report perform these steps:

1. In Insights+, from the left panel, expand theReportsdrop-down and click onAll Reports.

![](https://files.readme.io/05b0192-Create_Reports.png)

1. ClickCreate Report.

![](https://files.readme.io/7c963ac-Create_report_Page.png)

1. InReport Name, specify a name for the report.

2. Write the appropriate report description in theDescriptionbox.

3. Choose the reportCategory. To add a new category, click+Add category.

4. Select the reportTypefrom the following options: Normal, Migration, or Funnel. To create an External report, clickhere.

> 📘The type of report depends on the type of chart you choose to add. For example, if you select "Normal" as the report type, you can only add Normal charts. Likewise, to add a Funnel chart, choose "Funnel" as the report type.

## 📘

The type of report depends on the type of chart you choose to add. For example, if you select "Normal" as the report type, you can only add Normal charts. Likewise, to add a Funnel chart, choose "Funnel" as the report type.

1. ClickNext.

![](https://files.readme.io/ef13f5a-Create_report.png)

1. Click+ Add/Remove Charts. You will be directed to the add/remove charts interface.

![](https://files.readme.io/e5abdf2-Add_Chart.png)

1. Select the chart from the list or search for the required chart in the search box and clickDone.  If you want to create a new chart, click+ Create new chart. To know more on creating charts, clickhere.

![](https://files.readme.io/e582dc1-Select_Normal_Chart.png)

1. If you cannot recall the chart name, use the Advanced Filter option. Select the KPIs and Dimensions by expanding the drop-down boxes and clickApply.

![](https://files.readme.io/f12c16b-Advanced_Filters.png)

> 📘Advanced filters are applicable to Normal and Migration charts only.

## 📘

Advanced filters are applicable to Normal and Migration charts only.

1. ClickDone. The selected chart is added to your report.

2. Click+ Add/Remove Chartto add additional charts or remove existing ones from the report.

![](https://files.readme.io/c594ca7-Add_or_Remove_Chart.png)

1. Click on the calendar icon to select the desired date range for the report. CheckCompare time periodto compare data of a previous duration, and clickApply. To know more about date filter and comparison with a previous duration, clickhere.

![](https://files.readme.io/4f0deac-Report_Date.png)

1. ClickSave Report.

## External Report

Prerequisite:

Databrick notebook access.

To create an External report, perform these steps:

1. In theReport Namefield, enter a name for the report.

2. In theDescriptiontext box, enter a description of the report.

3. Choose the reportCategory. To add a new category, click+Add category.

![](https://files.readme.io/62977ab-External_report.png)

1. From theType, selectExternal.

2. In theReport URL, enter the Databricks notebook path.

![](https://files.readme.io/919c288-External_report_url.png)

1. SelectAuthorizationmode for the report. For third party tool credentials (like Zeppelin, Databricks) selectCapillary Notebook. For Capillary Insights+ credentials selectCapillary Authorization.

2. To enterQuery parameter details, clickShow.

![](https://files.readme.io/5359559-Add_query.png)

1. In theReport URL preview, clickOpen linkto preview the report.

2. ClickDone.

3. ClickNextand then, clickSave report.

In case of any error viewing the report, verify andupdate the Databricks report URL link.

# Publish report

Upon creating the report, you can see it in the respective category inAll Reports.  If you want other users of your organization to access the report, you need to publish it manually. Else, only you (creator) can access the report. To publish the report, perform the following steps:

1. InAll Reports, click the report that you want to publish. Use the Search box and filters to find the desired report.

2. ClickMore options >Make public.

![](https://files.readme.io/1a9092e-Publish_Report.png)

Alternatively, from the reports list, you can clickMore optionsof the desired report and clickMake public, without having to open the report.

![](https://files.readme.io/971ffd1-Publish_from_home_page.png)

A success message is displayed when the report is published.

![323](https://files.readme.io/8276c31-2X3tHxYytXzLF8U6lt9UTZjMGgKt958rTg.png)

# Example Scenario: Analysing Badge Earnings

Consider a scenario where a brand wants to analyse the badge earnings of their customers. To support this analysis, a chart has been created in the "Create Charts" section. Please refer to thebadges earned chart. In this section, we will add the chart to our report for further analysis.

Follow the steps below to create a report using the badges earned chart:

1. Navigate to Insights+ >Reports.

2. ClickCreate report.

3. Fill in theReport NameandDescription. Select the appropriateCategory. Select the reportTypeasNormal.

4. ClickNext.

5. Click+Add/remove charts.

6. Type the chart name or scroll through the chart list to locate the desired chart. In this use case, we will select theBadges Earnedchart from the chart list.

7. ClickDone. The chart gets added to the report.

8. Set the report Date range by clicking on the calendar icon. In this report we are selecting the report date to contain data for the last 1 year. ClickApply.

9. The chart having the desired KPIs and dimensions in the specified date range, gets populated. ClickSave report.

![](https://files.readme.io/014440e2a95ab1d602a3d71810c2aefca83239b2d95d6725cd07b622bdc0ce78-Create_Report_Badges_GIF.gif)

# Key Insights from the Badges Earned Report

Majority Engagement from Lower TiersCustomers in lower sales ranges, especially the Base tier, account for nearly 80% of all badge earnings, indicating strong engagement at the lower end of the loyalty spectrum.

Peak Engagement PeriodJune 2024 has a high number of badges earned, suggesting successful campaigns or promotions during this time, particularly among Base and Silver customers.

Low Engagement in Premium TiersHigher-tier customers, such as those in Gold and Platinum, contribute significantly fewer badges, indicating a need for strategies to increase engagement.

Opportunities for Re-engagementBadge earnings are minimal in certain tiers, contributing only 1% or less, signalling an opportunity to re-engage these customers with targeted efforts.

These insights suggest focusing on maintaining base tier engagement while improving badge earning in higher tiers.

Updated7 months ago