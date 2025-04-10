# Create Chart

# Normal Chart

To create a normal chart:

1. From the left panel, clickLibrary>Charts.

From the left panel, clickLibrary>Charts.

2. Click onCreate Chart.

Click onCreate Chart.

3. Expand theChart Typedrop-down box and selectNormalchart.

Expand theChart Typedrop-down box and selectNormalchart.

![](https://files.readme.io/abcc534-Normal_Chart_Creation.png)

| Option | Description |

| --- | --- |

| KPIs | Select KPIs that you want to add to the chart. You can have a maximum of 20 KPIs per chart.The KPIs are categorized into two sections,My Org KPIsandAll KPIs.-My Org KPIsare those KPIs created by your org, along with KPIs that are currently used within your org.-All KPIsare those KPIs that are global. The user can toggle between the two tabs to select the KPI.You can viewMy Org KPIsby default. |

| Dimensions | Select the dimensions that you want to apply to the chart. You will see dimensions corresponding to the selected KPIs only. |

| Show advanced chart options / Hide advanced chart options | Click to see the advanced options mentioned in the rows below. You can also hide it by clicking theHide advanced chart option. |

| Inclusion Factors | Allows you to add additional filters. These are based on the corresponding KPIs.NOTE:IfCustomer statusis enabled for your org, make sure that you select all filters ofEvent Usersand select the relevant filters underCustomer status. |

| Show selected KPIs w.r.t the following time periods | If you want to create charts with different time periods (multi-KPI charts) then use this option. This lets you view data for selected time dimensions.For example, if you select a KPI Loyalty ABS and select Till date period, YTD, and MTD, you will see columns Loyalty ABS (YTD), Loyalty ABS (MTD) in the chart.Note: You can have a maximum of 20 KPIs - either only KPIs or the combination of KPIs and time period dimensions.Till date period: Lets you select a week to date (WTD), Month to date (MTD), year to date (YTD), Inception to date (ITD) - from the starting until the current data.Last time period: Lets you define the last `x' days, weeks, or months.*Report time period (RTP): To consider the time period of the report where the chart is used |

| Compare with | Choose Previous Period to show the data compared with a previous duration. For instance, the current month's data with the previous month'sChoose Previous Year to compare data with the same duration of the previous year. For example, data of May 1, 2019 - May 20, 2019, with May 1, 2018 - May 20, 2018. |



> 🚧WARNINGIf customer status is enabled for your organisation,make sure that you select all filters ofEvent Usersand select the relevant filters underCustomer status. Else a warning will appear to use the Customer Status instead of Event user.by default, customers with Deleted/Internal/Fraud confirmed are excluded from the report

## 🚧WARNING

WARNING

If customer status is enabled for your organisation,

- make sure that you select all filters ofEvent Usersand select the relevant filters underCustomer status. Else a warning will appear to use the Customer Status instead of Event user.

- by default, customers with Deleted/Internal/Fraud confirmed are excluded from the report

1. ClickApplyto preview the chart. If you want to modify input fields, clickModifyand make the necessary changes.

![1051](https://files.readme.io/6d090ce-iPI3fd0DyW8Qo1DlOVY_Q36Nsvux5bZg6A.png)

1. InEnter name for the chart, specify a name for the chart.

2. ClickCreate.

3. You can change the chart view toPie Chart, Table, or Bar graph.  To change the chart view, click on the ellipsis and select the required chart type.

![](https://files.readme.io/9aca74d-Change_view_type.png)

![](https://files.readme.io/6c139a0-Chart_View.png)

1. If you want to rearrange the data trends and patterns in the chart, go to theTable Optionsand perform the following:Drag and drop the parameters in theRowsandColumnsbox. This provides an improved analysis of the selected KPIs and dimensions. For example, in the below image, on adding Reward type from row to column, the reward type is changed from row to column providing details associated with it.Drag the KPIs up or down toPrioritisethem.ClickApply.

If you want to rearrange the data trends and patterns in the chart, go to theTable Optionsand perform the following:

1. Drag and drop the parameters in theRowsandColumnsbox. This provides an improved analysis of the selected KPIs and dimensions. For example, in the below image, on adding Reward type from row to column, the reward type is changed from row to column providing details associated with it.

Drag and drop the parameters in theRowsandColumnsbox. This provides an improved analysis of the selected KPIs and dimensions. For example, in the below image, on adding Reward type from row to column, the reward type is changed from row to column providing details associated with it.

![](https://files.readme.io/ae472a5-CreateNormalChart_PivotTable.gif)

2. Drag the KPIs up or down toPrioritisethem.

Drag the KPIs up or down toPrioritisethem.

3. ClickApply.

ClickApply.

![](https://files.readme.io/51ba5b6-Create_Normal_Chart_Prioritise.gif)

## Example - Creating a Badges Earned Chart

Consider a scenario where a brand wants to generate reports for the badges earned by their customers. To achieve this, we can create a chart using "Badges Earned" as the KPI, alongside several dimensions like customer tier/slab, latest transaction date (latest updated date), total transaction value, and the customer's loyalty type.

Follow the given steps to create the "Badges Earned" chart:

1. On the Insights+ home page, clickLibrary>Chartsfrom the left navigation panel.

2. ClickCreate Chart.

3. Keep theChart TypeasNormal. Click theKPIdropdown to expand the list of KPIs. Select theBadges EarnedKPI from the list or type badges in the search box to locate the KPI. ClickSelect.

4. Click theDimensiondropdown to expand the list of dimensions. Select the following dimensions -Slab Name; Total Sales and Loyalty Type(underCustomers); and Date (underLatest Updated Date). ClickSelect.

5. ClickApply. This will populate the chart values and shown in the preview.

6. Name the chart and clickCreate. The chart with the specified KPIs and dimensions is created and is now available in the chart list. Click on the chart to view or edit it. This chart can be incorporated into a report for deeper analysis and reporting.

![](https://files.readme.io/61389fbd49a597f3d9a007100aaeebdb86a52a0f746f7a47f8418103c0895ff8-Create_Chart_Badges_GIF.gif)

### Chart Analysis

The chart shows the distribution of badges earned by customers across different loyalty slabs and dates. The majority of badges (43%) were earned by customers in the 0-1000 loyalty slab on 2024-08-04. Another significant portion (29%) was earned by customers in the same loyalty slab on 2024-08-05. Higher loyalty slabs, such as Gold and Platinum, accounted for fewer badges earned, with 14% badges earned on 2024-08-13 and 2024-08-28, respectively.

### Key Insights

Lower Loyalty Slab Engagement: Customers in the 0-1000 loyalty slab are more active in earning badges, indicating higher engagement or possibly a larger customer base in this segment.Lower Badge Activity in Higher Tiers: The Gold and Platinum tiers show lower badge earning activity, which could imply fewer customers or less engagement in these segments.This chart helps identify which customer segments are most active and where there might be opportunities to boost engagement, especially in the higher loyalty tiers.

# Migration Chart

To create a migration chart:

1. From the left panel, clickLibrary>Charts.

2. ClickCreate Chart.

![](https://files.readme.io/dc25205-Create_Migration_Chart.png)

1. Expand theChart Typedrop-down box and selectMigrationchart.

2. Expand theSegmentdrop-down box and selectslab_name.

3. Choose the desired visualization type based on the description provided in the following:

- Multiple migrations: Customer Migrations across all the partitions of a segment. Use this to track the movement of customers activity in different partitions of a segment.

- Single migration grouped by time period: Let you track the migration from one partition to another partition of a segment in the specified period. You need to set the change of from partition and to partition along with the period.

![294](https://files.readme.io/2376245-A8Td5NytSTZBIZ7kAcjXcK1fNsScWF-rEw.png)

| Option | Description |

| --- | --- |

| From | Choose the migration in theFrompartition andTopartition based on the chosen segment |

| To | Choose the migration in theFrompartition andTopartition based on the chosen segment |

| Time Period | Choose the desired frequency of data split - eitherMonthly or Quarterly |



1. ClickApply.

2. InEnter name for the chart, specify a name for the chart.

3. ClickCreate.

![](https://files.readme.io/94f46f5-Migration_chart.png)

# Funnel Chart

To create a funnel chart:

1. Navigate toLibrary>Charts>Funneland clickCreate Chart.

2. Expand theChart Typedrop-down box and selectFunnelchart.

3. In theFunnel Completion Time, enter the duration (in the number of days, weeks, or months) to complete all stages.

- Funnel completion timeis the total duration that a user takes to complete the sequence of steps/stages to achieve a qualified goal.

![](https://files.readme.io/6991b80-Report_Date_Range.png)

![](https://files.readme.io/d475aee-Funnel_Completion_Range.png)

1. ClickAdd Step. Expand the event name drop-down list and select the event.

![](https://files.readme.io/77025d7-Add_Step.png)

1. ClickAdd Filter, andInclude or Excludethe filter values (dimensions) as required.

> 📘NoteFilter values that are relevant to the selected event automatically populate in the drop-down list. You can add multiple filters to a step.

## 📘Note

Note

- Filter values that are relevant to the selected event automatically populate in the drop-down list. You can add multiple filters to a step.

1. ClickApply. You will see the chart preview.

2. Enter thechart name.

3. ClickCreate.

![](https://files.readme.io/b040397-Funnel_Chart.png)

## Example - Promotion Funnel Drop-off Detection

Scenario: Identify customers left from any page (stage/step) during the product promotion process. It could be due to poor experience, a slow site, unexpected costs, or other factors that influence the objective (points allocation) during an email promotion.Solution: Here, the funnel chart helps visualize points allocation conversion steps through different transition levels. You can focus on the events - Added to cart and Check out, where many audiences are not moving towards the goal.

Example: Consider you have selected report duration from 1 March to 30 September and a funnel completion time of 10 days.

Table below gives the case scenarios where report duration is from1 Marchto30 Septemberand a funnel completion time of10 days.

| Case Scenario | Customer’s funnel start date (first step) | Customer’s funnel end date (last step) | Availability of funnel steps during analysis (report creation) |

| --- | --- | --- | --- |

| 1 | 5 March | 14 March | Include the customer with all the steps (as all the steps are completed in the funnel completion time of 10 days, within the report duration). |

| 2 | 22 September | 1 October | Include the steps from 22nd September to 30th September performed by the customer (only till 30th September as 1st October exceeds the report duration). |

| 3 | 10 August | 30 August | Include the steps from 10th August to 19th August performed by the customer (as funnel completion time is 10 days). |

| 4 | 10 August | Not ended | Include the steps from 10th August to 19th August performed by the customer. |



> 📘NoteThe first step should start within the report duration to be a part of the funnel chart analysis.

## 📘Note

Note

The first step should start within the report duration to be a part of the funnel chart analysis.

Hence, you can track the sum of the actions of all the customers who enter the funnel by performing Step 1, from1 Marchto30 September, and exit it within 10 days by calculating; The number of converted customers between each step and the customer conversion rate between each step.

Table below gives the detailed data of the funnel chart presentation.

| Events | Number of Customers | Customer Attrition Rate (%) |

| --- | --- | --- |

| Product viewed | 55 | 0% |

| Product viewed > Added to cart | 39 | 29% |

| Added to cart > Check out event | 13 | 66% |

| Check out event > Product review | 0 | 100% |



![](https://files.readme.io/e8a2a99-Attrition_percent.png)

# Overlap and Ledger Chart

To create an Overlap or Ledger chart, kindly contact the sustenance team.

Updated7 months ago