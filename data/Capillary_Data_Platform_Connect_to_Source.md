# Connect to Source

This block enables you to define the source location of the data that needs to be ingested. The connect to source block has the following fields:

| Field name | Description |

| --- | --- |

| Hostname | URL (address) of the SFTP/FTP server from where the source file is available. For example,data.capillarydata.com. |

| Username and Password | Credentials to access this SFTP/FTP server. This provides read/write access to the files on the server. |

| Source Directory | The directory path where the source file is available. For example,/APAC2Cluster/A_ConnectConnect+ usually supports any text-based files with a delimiter, irrespective of extensions such as .txt, .csv, or .dat etc. In addition, _.ok _file format is also supported. |

| Filename Pattern | File names in the regex pattern. If you give a filename patternfile.*.csv _, the application takes any file that starts with the file namefile. |

| Processed Directory | The path to save the file to be processed. The data to process is captured from the processed file. Processing is the operation of formatting and transforming a given set of data to extract the required information in the appropriate format. For example,/APAC2Cluster/Process. |

| Unzip Files | If the files are compressed, you can select this option to unzip the file and then select the original file. |

| API Error Filepath | The SFTP/FTP path where you want to save the API error file. This file includes the error details that occurred during the  API calls. This field is applicable only where API endpoints are required (data ingestion). |

| Search Directory Recursively | Select the checkbox, if you want to search for the defined file anywhere in the root folder of the server. For example, if there are multiple folders inside/APAC2-Cluster/A_Connect, it looks for files matching the pattern inside each folder under/APAC2-Cluster/A_Connect. |

| Port | The source SFTP/FTP port number. Generally, 22 for SFTP and 21 for FTP. |



![Source directory file path](https://files.readme.io/59c3232-Source_file_location.png)

Copy directory file path

![](https://files.readme.io/72bfadc-Screenshot_2023-06-15_144958.png)

## Defining column header for transform block

### Adding the source file header information using a CSV file with the column headers

You can upload a CSV file with the column headers of the input source file or define the header data manually. This makes mapping fields in thetransformation blockeasier. Once you define the headings, they are automatically retrieved in the transformation blocks and you can map corresponding API fields against them.

The maximum supported size of a CSV file is 5 MB. After attaching the file, you can delete it by clicking the delete icon. The system allows you to switch to the manual option after uploading the CSV file. The values should be separated by a comma only. Watch the video below for more information on uploading the CSV file and mapping the API fields.

![](https://files.readme.io/9ee491917f4e5e0861a94931859549433dbee10f480df8fc9b3980ac7e045b93-with_header1.gif)

### Adding the header information manually

If you do not have a CSV file for mapping, you can select theAdd manuallyoption and define the headings manually in the transformation block. Watch the video below for more information.

![](https://files.readme.io/5383a4ecb74029e97fc1e8b6f1a36b3de26c6acc06981039cfc2fd750d314761-manualy_header_filling.gif)

If you do not have a CSV file for mapping and the source file is headerless you can select theAdd manuallyoption and choose theIs file headerlessoption to define the headings separated by a comma. These headings are retrieved in the Transformation block, and you can also add additional headings in thetransformation blockitself. Watch the video below for more information.

![](https://files.readme.io/8177e2b331f7806f7017c2dd85c21d4eb0e284c9519291c33286265f58e464dd-add_manually.gif)

## S3 File Service Location as a Source

| Field Name | Description |

| --- | --- |

| Bucket Name | The name of your S3 bucket. Provided by the access team. |

| Region | Region in which your bucket is located. Provided by the access team. |

| Access Key and Secret | These credentials are required to access the S3 bucket. Provided by the access team. |

| Input Path | The location within the S3 bucket is where the input data resides. |

| Output Path (Processed Path) | Defines where the processed data will be placed in the S3 bucket. The output path cannot be the same as the input path or a sub-path of the input path (e.g., you cannot have "input/" and "input/processed/"). Additionally, the output path cannot be the root ("/"); a folder must be created within the root for this purpose. |

| Error Path | Designates the location for storing error files. |



Updated29 days ago