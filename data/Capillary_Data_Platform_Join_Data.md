# Join Data

This block enables the merging of two or more files and adds the merged file to the platform. You need to enter the details of files that need to be identified, compared and merged. Enter the below details:

| Field | Description |

| --- | --- |

| Files 1-2 Join Types | Enables you to select the type of SQL join command.1.Inner join-  An Inner Join returns only the rows that have matching values in both tables being joined.For example, suppose you have two tables: "Line item table" and "Bill level table," and you want to determine which items were purchased in each bill and calculate the total cost of each item in every bill. When you use the Inner Join option, the merged table will include only the records that have matching BillNumbers in both data sources.2.Left outer join- A Left Outer Join returns all the rows from the left table and the matching rows from the right table.For example, consider two tables: "Customers" and "Orders." When you use a Left Outer Join, you retrieve all customer records along with any matching order records. If a customer has no orders, the customer record is still included with NULL values in the order-related columns.3.Right outer join- A Right Outer Join returns all the rows from the right table and the matching rows from the left table.For example, consider two tables: "Orders" and "Customers." When you perform a Right Outer Join, you retrieve all order records along with any matching customer records. If an order has no associated customer, the order record is still included with NULL values in the customer-related columns.4.Outer join- An Outer Join, also known as a Full Outer Join, returns all rows from both tables, including matching rows and those with no matches. |

| All Files Delimiter | Enter the file delimiter (comma or tab) to separate fields in the .csv file. By default, the delimiter is a comma (,). |

| File 1 Regex | Enter the name of your first file here in the formatfilename_.*.fileformat. The asterisk represents the wildcard.For example, for the system to search for files that begin with the name "BILL_LEVEL_MERGE" followed by any sequence of characters you can enter the file name as "BILL_LEVEL_MERGE.*.csv". This will enable the system to locate files that match this pattern.NOTE:The file works in an FCFS manner. The files that are uploaded first and second are merged first. |

| File 2 Regex | Enter the name of your second file in the format:filename.*.fileformat. The asterisk represents the wildcard.For example, for the system to search for files that begin with the name "BILL_LEVEL_MERGE" followed by any sequence of characters you can enter the file name as "BILL_LEVEL_MERGE.*.csv". This will enable the system to locate files that match this pattern.NOTE: The file works in an FCFS manner. The files that are uploaded first and second are merged first. |

| File 1 Headers | Enter the column header name of File 1 that needs to be compared.This is compared with the column headers in the File 2.To match columns based on multiple headers, enter the header names separated by a comma. |

| File 2 Headers | Enter the column header name of File 2 that needs to be compared.This is compared with the column headers in the File 1.To match columns based on multiple headers, enter the header names separated by a comma. |

| File Join Use Case | From the dropdown, select TRANSACTION_LINE_ITEM.This is an inner join operation where one row in the bill maps to multiple line items.**NOTE:**The option None is not applicable. |

| Output Filename | Enter the output filename.By default, the filename format is merge_yyy-mm-dd, where merge is the file name, yyyy-mm-dd is the year month, and date on which the file is created. |

| Alphabetical Sort | Select this check box to ensure accurate sorting of the files in alphanumerical order. By default, this is always enabled.NOTE: It is recommended to always select the checkbox before proceeding further. |

| Merge based on common Name | Make sure that this check box is always selected.This makes sure that the system identifies the correct files to be merged. |

| Merge based on common name Template File One | Enter the filename using thetag.For example, if there are files with namesTktABC.dat, andTktDocument_ABC.dat, and if you enter the value as TktDocument.dat, the system looks for the file and selects TktDocument_ABC.dat for merging.ABC is the common tag among the files. |

| Merge based on common Name Template File Two | Enter the filename using thetag.For example, if there are files with namesTktABC.datandTktDocument_ABC.dat, and if you enter the value as TktDocument.dat, the system looks for the file and selects TktDocument_ABC.dat for merging.ABC is the common tag among the files. |

| File One is Headerless | Select the check box if the columns in file one do not have a header. |

| File Two is Headerless | Select the check box if the columns in file two do not have a header. |

| File One Mention Header names | Define the heading order of the columns in fIle one separated by commas. |

| File Two Mention Header names | Define the heading order of the columns in fIle two separated by commas. |

| Match All Regex | SelectTruefrom the dropdown to keep only the matching files in the server and delete the files that are not matched. By default, the value is set asFalse. |

| All Unique Match | SelectTrueto identify and delete duplicate files. |



## FTP file upload instructions

When uploading files to the FTP path:

- Ensure that all files that need to be merged are added simultaneously.

- If you are adding different sets of files that need to be merged, maintain a minimum gap of at least 10 minutes between each upload. For example, if you want to merge files A and B, and also C and D, do not add files A, B, C, and D together. Add files A and B first, and then add files C and D only after a minimum of 10 minutes.

If you need to re-add any files:

- Remove the existing file from the process folder first.

- Then, add the new files to the input folder for proper handling.

Updated29 days ago