# Airmiles Calculator Extension

This extension allows brands from the Airline vertical to perform the following:

- Calculate miles for various origins and destinations based on multiple algorithms and add to theticketed_points_mileageparameter during a transaction addition. The supported mileage calculation algorithms include the Haversine formula and Vincenty’s formula.NOTE:Capillary maintains an up-to-date airport code list based on the Global Airport List, which includes precise latitude and longitude details for each origin and destination. When you input an origin and destination, the system validates and calculates the mile points accurately by utilizing the longitude and latitude data. You can raise a JIRA ticket if any of the origin/destinations are not available.

`ticketed_points_mileage`

- City-pair-based air miles - This feature enables airlines exceptions for air miles in specific routes. At present, the system considers only the origin and destination and excludes layovers and transits.

- Set minimum miles value - If the miles calculated for an origin-destination is less than this value, the minimum miles value set is provided to the customer.

![](https://files.readme.io/2942758-Overview.jpeg)

# Configure airmiles calculator extension

To enable and configure the airmiles calculator extension, perform the following:

1. From Intouch, navigate to theExtensionspage.

2. On theExtensionspage, search and open theAirmiles calculatorextension.

![](https://files.readme.io/dcf79b5-Airmiles.png)

1. ClickEnable.

![](https://files.readme.io/d1f30cc-Enable_airmile_calc.png)

1. Click theConfiguretab.

![](https://files.readme.io/c5ad3d2-Configure.png)

1. Select the desired miles computation algorithm.

2. If required, set the minimum miles. If the miles calculated for an origin-destination is less than this value, the minimum miles value set is provided to the customer.

3. Set the city-pair-based airmiles. To update, clickSample file, download and enter the details and upload the .csv file. You have the option to add to the existing pair or clear the existing city-pair and upload fresh data.

![](https://files.readme.io/530f6af-City-pair.gif)

1. ClickSave.During the next transaction API call, miles are calculated based on the origin and destination and captured in theticketed_points_mileagefield and displayed in the transaction details.

`ticketed_points_mileage`

![](https://files.readme.io/a9df344-Airmile.png)

1. To view the configurations, click theOverviewtab.

![](https://files.readme.io/7ced4b7-Overview.png)

1. To disable, clickDisable.As a result of the next transaction ADD API call, the system will skip miles calculation, and the data will not be captured in theticketed_points_mileageparameter or displayed in the transaction details on the UI. The origin, destination and other extension fields includingticketed_points_mileageare permanent and do not change.

`ticketed_points_mileage`

`ticketed_points_mileage`

Updated13 days ago