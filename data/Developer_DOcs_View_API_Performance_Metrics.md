# View API Performance Metrics

Platform metrics is a key feature of the Dev Console that enhances observability and simplifies debugging for platforms such as Neo, Extensions, and Vulcan. It serves as a central hub for monitoring performance, identifying issues, and streamlining troubleshooting. Furthermore, it enables you to analyze API behaviors and performance trends.

The Platform Metrics consists of a dashboard which caters to different applications or extensions. ThePlatform Metricsdashboard gives a high-level overview of all metrics.

# Accessing Platform Metrics

To access Platform Metrics,

Navigate to theLogs and Metrics>Platform Metricsfrom the left pane of the Dev Console.

The following image shows the Platform Metrics page.

![](https://files.readme.io/d0406da50ec07345aa680e68fcd456340ef17d5423180a69811f70e72eed448d-platform_metrics.gif)

# Working with Platform Metrics

In the Platform Metrics, you can choose to see the performance based on time range, product, or dashboard.

To view metrics,

1. From the Platform Metrics page, select the date range from the drop-down and clickApply.Note: The maximum custom date range you can select is 30 days.

From the Platform Metrics page, select the date range from the drop-down and clickApply.Note: The maximum custom date range you can select is 30 days.

![](https://files.readme.io/fa76ea77da107de96f0a3386726862ed650e76219a4fe10d10ab3c07116fdedf-image.png)

2. Select the product from theSelect Productdrop-down.

Select the product from theSelect Productdrop-down.

`Select Product`

![](https://files.readme.io/87743b6458689fd27bcebed1f567fe64d0ae8695cce7a046cc119072037230ec-image.png)

3. Select the dashboard from theSelect DasbBoarddrop-down.

Select the dashboard from theSelect DasbBoarddrop-down.

`Select DasbBoard`

![](https://files.readme.io/155fe3d8e1fb199d6a1856643f5e715b28e0bf405e1b10b2cb51aff1f9f01ab4-image.png)

1. (Optional)Filter your search by selecting specific API endpoints for the chosen products.

![](https://files.readme.io/f60e67a01b7641cc5fd6556775065e160cc61dd2f97acf4bdef10449ff8cd0bd-image.png)

The metrics are displayed based on the selected values.

# Drill-Down Flow for Debugging

Each dashboard has different sections that display various metrics to help with debugging.Platform Metricsfollows a four-step drill-down process. Below are the drill-down sections and their fields for theNeo Platformsproduct.

## Performance Metrics

The Performance Metrics displays the overall metrics related to Neo Platforms.  The fields in this section are:

### Total Requests (ABS)

The total number of API calls the Neo platform processes within the selected timeframe. You can viewThroughputin a graph.

### Latency In ms P(95)

The time within which the Neo platform completes 95% of API calls, measuring worst-case performance. ThePercentileappears as a graph.

### Error Percentage

The percentage of failed API calls in the Neo platform relative to total requests.

### Requests Per Request Uri

The Neo platform tracks API requests to each unique endpoint (Request URI) within the selected timeframe. This helps identify the most frequently accessed endpoints and analyze usage patterns. It includes the following fields:

| Field Name | Description |

| --- | --- |

| Api Endpoint | The name of the API being monitored. |

| Requests | The total requests made to the API. |

| Error % | The percentage of failed requests for the API. |

| Rpm | The number of API requests processed per minute within the selected timeframe. |

| Latency in ms 90% | The response time (in milliseconds) within which 90% of requests are completed. In other words, 90% of API calls finish within this time, while the slowest 10% take longer. |

| Latency in ms 95% | The response time (in milliseconds) within which 95% of requests are completed. In other words, 95% of API calls finish within this time, while the slowest 5% take longer. |



### Requests per status code

The number of API requests grouped by their HTTP status codes within the selected timeframe. It includes the following fields:

| Field Name | Description |

| --- | --- |

| Status code | The HTTP status code of the API execution. The different statuses are:2xx  - Success4xx - Client Errors5xx - Server Errors |

| Requests | The number of API calls made to the platform. |

| Rpm | The number of API requests processed per minute within the selected timeframe. |

| Latency in ms 90% | The response time (in milliseconds) within which 90% of requests are completed. In other words, 90% of API calls finish within this time, while the slowest 10% take longer. |

| Latency in ms 95% | The response time (in milliseconds) within which 95% of requests are completed. In other words, 95% of API calls finish within this time, while the slowest 5% take longer. |



## Capillary Core Platform

This is the second level of the drill-down. It displays the metrics of the Intouch or Capillary APIs invoked in the Neo Platform. The fields in this section are:

### Total Requests (ABS)

The total number of Intouch API invoked within the selected timeframe. You can viewThroughputin a graph.

### Latency In ms P(95)

The time within which the Intouch APIs complete 95% of API calls, measuring worst-case performance. ThePercentileappears as a graph.

### Error Percentage

The percentage of failed Intouch API calls relative to total requests.

### Parent Api Calls

The Parent API Calls refer to the primary API that triggered the Intouch APIs. It includes the following fields:

| Field Name | Description |

| --- | --- |

| Parent Uri | The name of the API that calls the Intouch API. |

| Requests | The total requests made to the API. |

| Average Calls Per Api | The frequency at which each Intouch API is called on average within a selected timeframe. It is calculated by dividing the total number of API calls by the number of unique APIs. |

| Distinct Intouch Calls | The number of unique Intouch API calls made, counting each distinct request only once. |

| Intouch Calls Latency in ms 90% | The response time (in milliseconds) within which 90% of requests are completed. In other words, 90% of API calls finish within this time, while the slowest 10% take longer. |

| Intouch Calls Latency in ms 95% | The response time (in milliseconds) within which 95% of requests are completed. In other words, 95% of API calls finish within this time, while the slowest 5% take longer. |



### Requests Per Request Uri

Requests Per Request URI refers to the number of API requests made to each unique endpoint (Request URI) within a selected timeframe. Below are the fields.

| Field Name | Description |

| --- | --- |

| Parent Uri | The name of the API that calls the Intouch API. |

| Name | Name of the Intouch API. |

| Requests | The total requests made to the Intouch API. |

| Error % | The percentage of failed requests for the Intouch API. |

| Rpm | The number of API requests processed per minute within the selected timeframe. |

| Intouch Calls Latency in ms 90% | The response time (in milliseconds) within which 90% of requests are completed. In other words, 90% of API calls finish within this time, while the slowest 10% take longer. |

| Intouch Calls Latency in ms 95% | The response time (in milliseconds) within which 95% of requests are completed. In other words, 95% of API calls finish within this time, while the slowest 5% take longer. |



### Requests Per Status Code

Requests Per Status Code refers to the number of API requests grouped by their HTTP response status codes within a selected timeframe. Below are the fields.

| Field Name | Description |

| --- | --- |

| Status code | The HTTP status code of the Intouch API execution. The different statuses are:2xx  - Success4xx - Client Errors5xx - Server Errors |

| Requests | The number of Intouch API calls made. |

| Rpm | The number of Intouch API requests processed per minute within the selected timeframe. |

| Latency in ms 90% | The response time (in milliseconds) within which 90% of requests are completed. In other words, 90% of API calls finish within this time, while the slowest 10% take longer. |

| Latency in ms 95% | The response time (in milliseconds) within which 95% of requests are completed. In other words, 95% of API calls finish within this time, while the slowest 5% take longer. |



## Error Insights

This is the third level of the drill-down. It provides a detailed analysis of API errors within a selected timeframe. The fields in this section are:

### Error Count By Status Code

Error Count By Status Code refers to the number of API errors grouped by their HTTP status codes within a selected timeframe.

### Error Message Summary

Error Message Summary is a consolidated view of all error messages generated by API calls within a selected timeframe. Below are the fields.

| Field Name | Description |

| --- | --- |

| Error Message | A message indicating the error. |

| Count | The number of times the error occurs within the given timeframe. |



### Error Message By Org Id

Error Message By Org ID" refers to a report or metric that shows the error messages associated with a specific organization (Org ID). The following are the fields.

| Field Name | Description |

| --- | --- |

| Error Message | A message indicating the error. |

| Org ID | ID of the organisation where the error occurred. |

| Count | The number of times the error occurs within the given timeframe. |



### Error Message By Org Id And Uri

Error Message by Org ID and URI provides a breakdown of API errors grouped by organization ID (Org ID) and request URI (endpoint) within a selected timeframe.

| Field Name | Description |

| --- | --- |

| Timestamp | The date and time when an API call occurs. |

| Api Endpoint | The API URL that receives requests and returns responses. |

| Method | The type of operation performed on a resource, such as GET, POST, PUT, or DELETE. |

| Status Code | The API response that indicates the outcome of a request. |

| Status Text | A brief description that accompanies the status code in an API response. |

| x-cap-status-code | A custom response header used in Capillary APIs. |

| Error Message | A message indicating success or failure. |

| x-cap-request-id | A unique identifier for each API request in the Capillary platform. |



## Performance Insight

This is the fourth level of the drill-down. It includes analytics and metrics that assess the efficiency and responsiveness of an API.

### Count (>200ms)

Count (>200ms) is the number of API requests that take more than 200 milliseconds to complete.

### Api Details

API Details refers to specific information about an API request, method, status code, response time, request ID, and other relevant metadata. The following are the fields:

| Field Name | Description |

| --- | --- |

| Timestamp | The date and time when an API call occurs. |

| Api Endpoint | The API URL that receives requests and returns responses. |

| Method | The type of operation performed on a resource, such as GET, POST, PUT, or DELETE. |

| Duration | The total time taken to process an API request |

| Status Code | The API response that indicates the outcome of a request. |

| Status Text | A brief description that accompanies the status code in an API response. |

| x-cap-status-code | A custom response header used in Capillary APIs. |

| x-cap-status-msg | A custom response header that provides a descriptive message corresponding to the x-cap-status-code. |

| x-cap-request-id | A unique identifier for each API request in the Capillary platform. |



## Creating a Custom Dashboard

Creating a custom dashboard is a simple process that requires minimal manual UI development. Follow these steps to set up a dashboard:

1. Identify the data requirements for your desired dashboard. Ensure the necessary metrics are available.

2. Define the dashboard layout and arrange the charts to present information.

3. Determine how many charts your dashboard needs and assign a unique ID to each one.

4. Define the configuration for each chart in a JavaScript array. Specify the following:Chart ID – Assign a unique identifier to the chart.Data Mapping – Link the chart ID to a query in your database. Use dynamic variables (e.g., order IDs, app names) to make the query adaptable.Display Name – Set the header that appears on the dashboard.Chart Type – Choose from scalar, table, line chart, or area chart. Each chart supports only one type.(Optional) Metadata & Customization (Optional) – Configure additional properties:Format timestamps.Convert large numbers into readable formats.Enable pagination for tables with large datasets.

- Chart ID – Assign a unique identifier to the chart.

- Data Mapping – Link the chart ID to a query in your database. Use dynamic variables (e.g., order IDs, app names) to make the query adaptable.

- Display Name – Set the header that appears on the dashboard.

- Chart Type – Choose from scalar, table, line chart, or area chart. Each chart supports only one type.

- (Optional) Metadata & Customization (Optional) – Configure additional properties:Format timestamps.Convert large numbers into readable formats.Enable pagination for tables with large datasets.

- Format timestamps.

- Convert large numbers into readable formats.

- Enable pagination for tables with large datasets.

13. (Optional) Enable filters to let users refine the displayed data. Configure the filter parameters and ensure a query fetches filter options dynamically.

14. Call theinitializeDashboardfunction in your code and pass the chart and filter configurations.

`initializeDashboard`

15. The dashboard automatically generates and displays the charts based on your configurations. You don’t need to make manual XML or CSS changes.

## Using Dashboard Filters

Dashboard filters let users refine the displayed data based on specific criteria. Filters improve data analysis by allowing users to focus on relevant subsets without modifying queries or configurations manually.

### Key Features

- Optional Configuration- Filters are not mandatory for every dashboard. Dashboard creators decide whether to enable them based on the dashboard’s requirements.

- Configurable Availability- Filters appear only if configured. Dashboard designers specify whether to include filters and which data attributes they apply to.

- Dynamic Filter Options- Filter options update dynamically based on real-time data queries. This ensures you always have relevant filtering options instead of predefined, static lists.

- Filtering Purpose- Filters help you refine displayed data, making it easier to analyze specific metrics.For example, you can filter by API endpoint to focus on a specific service's performance.

- Filter Parameter Configuration- During dashboard creation, developers specify which columns or parameters you can filter.

- Query-Based Filtering- Each filter runs a database query to fetch available options. This keeps the filter selections accurate and up to date.

- User-Friendly Interaction- Once configured, filters appear as dropdown menus or selection boxes. You can select filter values, and the dashboard updates automatically to display relevant data.

### How to Use Dashboard Filters

1. If enabled, a filter section appears on the dashboard.

2. Select the desired parameter or column to filter by.

3. Choose a value from the dynamically loaded filter options. For example: a specific API endpoint.

4. The dashboard updates automatically to reflect the selected filter.

Updated9 days ago