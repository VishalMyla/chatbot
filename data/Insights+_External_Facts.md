# External Facts

# Overview

External Facts are a type of fact table that allow us to import and work with the data that doesn’t fit into the predefined schemas of the exiting system. This enables brands to directly ingest the data into the Insights database and report on them based on the dimensions existing in the system.For example, consider a watch manufacturer that requires customers to register their purchase on the brand's website to activate the warranty. To track how many of these customers completed the registration, the brand can ingest this data into the Insights database as External Facts, since it isn't stored in the existing system.

# Prerequisites to create an external fact

- Ensure you have the necessary permissions to create external facts. If you need these rights, please raise a Jira ticket with the Access Team.

- External fact data file.

# Steps to create an external fact

1. Navigate to Insights+ and clickData Connectors.

![](https://files.readme.io/2802561-Data_connectors.png)

1. ClickExternal Facts.

![](https://files.readme.io/79c2a5c-External_facts.png)

This will show the list of existing external facts for your org.

1. ClickCreate New.

![](https://files.readme.io/6c7292d-Create_New.png)

1. Provide a name and description for the external fact.

> 🚧WarningOnce the template is uploaded, avoid changing the fact name. Changing the fact name for an existing fact will result in loss of all historical data.

## 🚧Warning

Warning

Once the template is uploaded, avoid changing the fact name. Changing the fact name for an existing fact will result in loss of all historical data.

![](https://files.readme.io/06c9fd3-Name_and_Desc.png)

1. Choose theFact Type. There are 2 options.Snapshot- Snapshot Fact Tables are used to capture the state of data at a specific point in time. These are used in scenarios where the change affects the complete table. For example, a change in the city of residence of a customer can impact multiple data entries.Incremental- Incremental Fact Tables store only the changes or additions made to the data since the last update. These are used in scenarios where additional data is added to the existing data. For example, a new entry to the bill data table.

![](https://files.readme.io/f0e7c6d-Snapshot.png)

1. Upload the schema template.

ClickUploadand select the excel file containing the data that you want to upload. The headers in this file are used for creating the schema.

![](https://files.readme.io/709e172-Upload.png)

After the file is uploaded, a green tick appears near the Upload tab and the extracted headers are displayed.

![](https://files.readme.io/096b3fa-Green_tick_headers.png)

1. ClickNext. If you want to reset the details, clickResetand refill the data.

2. Add Measures and Dimensions:

- Define measures (quantitative data) and dimensions (categorical data).

- Specify if each field is an internal dimension (mapped to existing Capillary data) or an external dimension (unique to the external fact).

i. To add the measures, clickAdd.

![](https://files.readme.io/6fe6cc9-Measures.png)

ii. Select theColumn Namefrom the dropdown box. Select theData Typeof the measure (fromText,Integer, andDouble).

> 📘NoteOnly the fields uploaded in the template are available for selection.

## 📘Note

Note

Only the fields uploaded in the template are available for selection.

![](https://files.readme.io/46fec16-Column_name_data_type.png)

If the measure is a primary key (to uniquely identify rows) of the table, clickIs Primarycheckbox. Add the remaining measures.iii. To delete a measure, click theSelectedcheckbox and clickRemove.

> 📘NoteMake sure to add thePrimary Key, else theNexttab will not be activated.

## 📘Note

Note

Make sure to add thePrimary Key, else theNexttab will not be activated.

iv. ClickNext.

![](https://files.readme.io/51016f5-Primary_Key.png)

v. To add theExternal Dimensions, clickAddand fill theDimension NameandPossible valuesfor the external dimensions.

> 📘NoteInternal dimensions are mapped to existing dimensions at Capillary. External dimensions are the new dimensions that need to be created.

## 📘Note

Note

Internal dimensions are mapped to existing dimensions at Capillary. External dimensions are the new dimensions that need to be created.

![](https://files.readme.io/96505cf-External_dimensions1.png)

> 📘NotePossible Valuesshould be separated by commas, without any space or gaps.

## 📘Note

Note

Possible Valuesshould be separated by commas, without any space or gaps.

Once created, the possible values cannot be changed. Attempting to edit and modify the possible values will result in the loss of all previous data.

vi. ClickNext.

vii. ToDefine Dimensions, clickAddto map all the dimensions present in your template (excel file).

![](https://files.readme.io/310c0bd-Define_dimensions.png)

viii. Select theColumn Namefrom the dropdown box. In theDimension Name, select the respective dimension from the dropdown box. Accordingly select theJoin Columnfrom the dropdown box andFormatter.

> 📘NoteFormatter is used only in the case of date dimension, such as YYYY-MM-DD.

## 📘Note

Note

Formatter is used only in the case of date dimension, such as YYYY-MM-DD.

Any external dimension you create, theJoin Columndropdown will showValue.In case of primary dimensions, select theIs Primarycheckbox.

![](https://files.readme.io/657ff37-Create_under_define_dimensions.png)

ix. ClickCreate. Upon successful creation of the external fact, the system will display the message: ‘External fact created successfully’.

![](https://files.readme.io/6eb16ef-External_fact_created_successfully.png)

The external fact is displayed in the list. This list can be sorted byName,Type,Last Sync DateandLast Updated Date.

![](https://files.readme.io/bfd5b21-FInal.png)

1. Click on the external fact to view its details.

![](https://files.readme.io/057fa70-Last_page.png)

You can view details, edit, upload files and view status of the external fact by clicking on the ellipsis.

> 🚧WarningEditing the external fact resets the entire fact table.

## 🚧Warning

Warning

Editing the external fact resets the entire fact table.

![](https://files.readme.io/bbac40e-View_details.png)

1. Uploading the data.There are 2 types of data upload: ThroughFTPand throughFile.i. To upload data, clickUpload Files.

![](https://files.readme.io/28e6387-Upload_files.png)

ii. SelectUpload type - Fileto upload the file directly. ClickSelectto locate and upload the file.

> 📘NoteFiles lesser than 15 MB can be uploaded through direct file upload. For files larger than 15 MB, FTP upload can be used.

## 📘Note

Note

Files lesser than 15 MB can be uploaded through direct file upload. For files larger than 15 MB, FTP upload can be used.

![](https://files.readme.io/004c333-File_upload_FTP_and_file.png)

iii. To upload the file usingFTP, select FTP and choose the desired FTP location from the dropdown list and clickSave FTP Settings.

![](https://files.readme.io/67f71c6-FTP.png)

After the file is uploaded, a success message appears sayingFTP details set for fact successfully.The external fact is now ready for use.

# Example

## Airline Destination Propensity

Consider an airline that uses historical transaction data to predict customer travel preferences. This predictive data includes:

- Customer ID (Frequent Flyer ID)

- Predicted destinations based on customer travel history

- Additional attributes like score and inclination

Since this data cannot be processed by the existing schema, you can use the External Fact option to process this data and to assist in prediction of customer travel preferences. The airline can create tailored offers and reports based on the predicted travel preferences, enhancing customer engagement and loyalty programs.

For this particular example, lets say the airline has the data given below:

![](https://files.readme.io/b7618be-Airline_customer_excel.png)

In this sheet, the first 5 rows data (excluding the headers) belongs to one customer.

The following table describes each of the column types.

| Column Name | Description |

| --- | --- |

| External Id | It is the Frequent Flyer ID of the customer at the airline end. |

| Date | Date when the data is added, at the Capillary end. |

| Rank | Ranking based on the inclination of the customer to travel to the location given in column D. 1 being the highest and 5 being the lowest. |

| Location | Locations to which the customer flies (based on his travel history). |

| Id | Unique identifier for the table (based on the number of rows, for example, 1 to 100). It is very important to have a unique identifier for the table as it acts as the primary key of the table. |

| Score | Value of an attribute used at the airline end. |

| Inclination | Shows the inclination of the customer to fly to the respective location, ranging from very high to very low. |



So, in this example, this particular customer (with external Id AA22916410) is very much inclined to fly to the DFW location, in comparison to the other locations he has previously flown (ADD, LAX, SEA, BLQ). So the brand can give specific bonus points if the customer checks-in to a lounge at the DFW airport.Similarly, data of all the customers is ready in this format to be added in Insights+. Perform the following to create the external fact.

1. Navigate to Insights+ and clickData Connectors.

2. ClickExternal Facts.

3. ClickCreate New.

4. Enter theFact NameandDescription. This name will be the Fact table name in Databricks.

5. Select theFact Type. In this case, selectSNAPSHOT. In cases where bill or transaction data is involved, use INCREMENTAL.

6. ClickUploadTemplate and select the excel file having the airline data. The system will extract the first row of the sheet. Once uploaded, the headers of the columns will be displayed.

7. ClickNext.

8. In theDefine Measurestab, clickAdd. In this use case, Id and Score are measures.

i. Select Id as Column Name by selecting it from the dropdown list.ii. Select Int as Data Type from the dropdown list (as Id is a number, we select Int).iii. As Id is a unique identifier for the table (having different values for each row), select Is Primary checkbox. This is the primary key for the fact table.iv. Select Score as Column Name by selecting it from the dropdown list.v. Select Int as Data Type from the dropdown list (as Score is a number, we select Int).

You must select the primary key to proceed. Once you select the primary key, the Next tab will be enabled.

vi. ClickNext.

1. In the Define External Dimensions tab, clickAdd.

> 📘NoteInternal dimensions are mapped to existing dimensions at Capillary. External dimensions are the new dimensions that need to be created.

## 📘Note

Note

Internal dimensions are mapped to existing dimensions at Capillary. External dimensions are the new dimensions that need to be created.

In this use case, External Id (column A), and Date (column B) will be Internal Dimensions as they are mapped to Capillarys existing dimensions. While Rank (column C), Location (column D), and Inclination (column G) will be External Dimensions (as they are new and need to be mapped).

i. After clickingAdd, fill in theDimension NameandPossible Valuesfor the three external dimensions.

| External Dimension | Dimension Name | Possible Values |

| --- | --- | --- |

| Rank | ranking_preference | 1,2,3,4,5 |

| Location | city_location | DFW,LAX,SEA,BLQ,JFK,MCO,BOS,NRT,BOM,MNL,JNB,ORD,ICN,JKT,CMN,MSP,LHR |

| Inclination | incline | VERY HIGH,HIGH,MEDIUM,LOW,VERY LOW |



> 📘NotePossible Valuesshould be separated by commas, without any space or gaps.

## 📘Note

Note

Possible Valuesshould be separated by commas, without any space or gaps.

ii. ClickNext.

1. In theDefine Dimensionstab, clickAdd.

Here, we map the data from the excel sheet to the dimensions that we added.i. Select theColumn Name, respectiveDimension Name, andJoin Columnfrom the dropdown list.ii. Select theFormatter(applicable only in case of Date)In this use case following will be the values for our dimensions:

| Column Name | Dimension Name | Join Column | Formatter |

| --- | --- | --- | --- |

| external_id | users | customer_external_id |  |

| date | date | date | yyyy-mm-dd |

| rank | ranking_preference | value |  |

| location | city_location | value |  |

| inclination | incline | value |  |



> 📘NoteAny external dimension you create, theJoin Columndropdown will show Value.

## 📘Note

Note

Any external dimension you create, theJoin Columndropdown will show Value.

iii. Select theIs Primarycheckbox if the dimension is a primary dimension.iv. ClickNext. The external fact will be created and will be displayed in the list of external facts.

1. To upload data to the external fact, click ellipsis next to the external fact that you created.

i. ClickUpload. InFile TypeSelectFileand choose the excel file having the airline data.ii. ClickUpload files. Once the file is uploaded, a success message appears.This ensures that the data is added to the external fact.

> 📘NoteIf you want to create reports based on these external facts, you will have to create KPIs separately. Similarly, If you want to use filters based on external facts, you will have to create the filters separately, by contacting the Insights+ sustenance team.

## 📘Note

Note

If you want to create reports based on these external facts, you will have to create KPIs separately. Similarly, If you want to use filters based on external facts, you will have to create the filters separately, by contacting the Insights+ sustenance team.

# FAQs

1. What are External Facts?External Facts allow for capturing and reporting on data that doesn't fit into the predefined schema. They are used when data needs to be imported into Databricks through Insights+ without relying on the standard schema fields. This data can be queried on Databricks.

2. When should External Facts be used?External Facts should be used when:

- Data doesn't align with the existing schemas.

- There is a need to track data not supported by the standard schema.

- You need to create reports or filters based on non-standard data.

1. What is the difference between Snapshot and Incremental Fact Types?

- Snapshot: Reloads the entire dataset each time. Suitable for data that changes infrequently or needs a complete refresh.

- Incremental: Only adds new or updated data. Suitable for data that changes frequently and can be appended or updated.

1. What is a primary key in External Facts?A primary key is a unique identifier for each row in the data table. It is essential for uniquely identifying and managing data rows within the external fact.

2. Can I use an existing dimension from the system in External Facts?Yes, you can map an External Fact dimension to an existing internal dimension if the values match. If not, you will need to create a new external dimension.

3. How do I handle data columns in External Facts?Measures: Quantitative data used for calculations or aggregations (e.g., Score).Dimensions: Qualitative data used for filtering or grouping (e.g., External ID, Location).

4. Are there limitations on the number of measures or dimensions?There is no strict limitation on the number of measures or dimensions, but there may be practical upper limits. It's advisable to stay within manageable numbers to ensure performance and usability.

5. What happens if I don't select a primary key?If a primary key is not selected, you may not be able to proceed with creating or updating the External Fact. The primary key is crucial for identifying and managing rows uniquely.

Updated8 months ago