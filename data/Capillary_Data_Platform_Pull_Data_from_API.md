# Pull Data from API

This template retrieves data from aNeo API, converts it to CSV, and pushes it to SFTP, FTP, or S3.It also supports paginated APIs by making multiple calls to Neo until a specified termination condition is met. For example, a movie listing API provides a catalog of movies across multiple pages. You can configure the template to call the API multiple times until all movies are retrieved or until only movies from a specific genre or year are listed.

## Use case

#### Scenario:

A service-based company gathers customer reviews, ratings, and survey responses from various platforms. This feedback is crucial for understanding customer satisfaction and identifying areas for improvement. However, the data is stored in different systems, making it time-consuming to compile and analyse manually. ANeo APIis created to get the customer data.

#### Solution:

The Pull Data from API template automates customer feedback collection by retrieving data from the Neo API. It converts the raw feedback data into a clear, standardized format and delivers it to the storage location.

## Configuring pull data from API

To configure the pull data from API template, follow these steps:

1. In theInvoke-Neo-IterativelyBlock, enter the API URL, authorisation details, API method and iteration details. For more information, refer to the document onInvoke Neo Iteratively.

2. In theJson-to-Csv-Converterblock, choose how the API data is converted to CSV format. For more information, refer to the document onConverting JSON to CSV.

3. In thepush-files-to-s3block, enter the S3 details. For more information, refer to the document onPush to S3.

4. In theTriggerblock, configure when the API is triggered. For more information, refer to the document onSchedule trigger.

5. SelectSave and continueto save the changes and create a new data flow.

The dataflow has been created successfully.

Updatedabout 1 month ago