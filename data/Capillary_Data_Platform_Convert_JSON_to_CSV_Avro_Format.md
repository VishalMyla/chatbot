# Convert JSON to CSV/Avro Format

TheJson-to-Csv-Converterblock enables conversion from CSV or Avro formats to JSON and from JSON to CSV.

![](https://files.readme.io/70153f2ba3ed3318ae042b71276f3f130ffbfd60cb1286e83a8e4a73fe7ec423-image.png)

To configure theJson-to-Csv-Converterblock, follow these steps:

i. Select the file format to convert from in theRecord Readerdrop-down.

The available formats are:

| Reader | Description |

| --- | --- |

| CSVReader | Input data is in CSV format. |

| AvroReader | Input data is inAvroformat. |

| JSONTreeReader | Input data is in JSON format |



[Avro](https://avro.apache.org/)

ii. Select the file format to convert to in theRecord Writerdrop-down.

The available formats are:

| Writer | Description |

| --- | --- |

| CSVRecordSetWriter | Export data to CSV format. |

| JsonRecordSetWriter | Export data to JSON. |

| CustomerV2RecordSetWriter | Export data toCustomer V2format. |



[Customer V2](/reference/customer-1)

iii. Enter the parameter to group by under thegroupByfield. For example, if the API has a parameter calledorgId, enter the value in the text field to group the responses by the organisation ID.

`orgId`

Updated29 days ago