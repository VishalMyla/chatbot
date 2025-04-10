# SFTP to SFTP with Headers Definition

Use this template to download a single file from the SFTP server, unzip, remap the headers, zip and push to the FTP server.

# Use case

Scenario 1

Consider that you are transferring a file namedabc.csvfrom the Capillary server to a brand's server. The fileabc.csvcolumns have headers namedTransaction_valueandBill_ID. However, the brand requests Capillary to send the file abc.csv with column header namesTAmountandBill_Norespectively.

`abc.csv`

`abc.csv`

`Transaction_value`

`Bill_ID`

`TAmount`

`Bill_No`

With the SFTP to SFTP with Headers Definition template, you can change the column header name in the file during file transfer from one location to another.

Scenario 2

Consider you are transferring a file namedabc.csvfrom the Capillary server to a brand's server. The columns in the fileabc.csvdo not have header names. However, the brand requests Capillary to send the fileabc.csvwith column header names.

`abc.csv`

`abc.csv`

`abc.csv`

With the SFTP to SFTP with Headers Definition template, you can add header names in the file during file transfer from one location to another.

# Configuring SFTP to SFTP with Headers Definition

Below is the screenshot of the template showing the different steps.

![](https://files.readme.io/7aab0a8-template_main.png)

To configure SFTP to SFTP with Headers Definition dataflow, the following are the steps:

1. In theConnect-to-sourceblock, enter the source server details where the source data is present and the location for saving the processed file. SeeConnect to source.

2. In theConnect-to-destinationblock, enter the destination SFTP server details. SeeConnect to destination.

3. In theDefine-headers-and-transform-datablock, enter header mapping. SeeRebuild headers / Define headers and transform data.

4. If the files are encrypted, enter the details to decrypt the data. For information on configuring this block, refer toDecrypt data.

5. In the Encrypt-data block, enter the encryption details to encrypt the file. SeeEncrypt data

6. In theTrigger-block, enter the details to schedule the trigger. SeeTrigger.

# Connect to destination

This block enables you to define the destination server details. Below is the screenshot showing the fields in the Connect to destination step.

![](https://files.readme.io/69594fa-template_connect_to_destination.png)

Below are the fields in the block.

| Field Name | Description |

| --- | --- |

| Hostname | URL (address) of the SFTP server from where the source file is available. For example, data.capillarydata.com. |

| Username and Password | Credentials to access this SFT server. This provides read/write access to the files on the server. |

| Remote Path | Directory path in the destination server where the file is transferred. For example, /APAC2Cluster/A_Connect |

| Create Remote Directory | Choose this option to create a directory at the destination if it does not already exist. |

| Zip Files | Choose this option to zip the output file. |

| Output File Name | Name of the output file with extension. Extensions allowed: .txt, .csv |

| Conflict Resolution | Specifies how to manage conflicts when a file with the same name exists in the destination path.Replace - Replace the old file with the new file.Rename - Rename the old file.Ignore - Retain the new file name. A new file with the same name is created.Fail - Fails the file transfer.None - System decides to either Fail or Ignore. |

| Port | The destination SFTP port number. Generally, 22 for SFTP. |



# Example use case

Requirement:Transfer a file namedtransactions.csvfrom the Capillary server to Brand X's server. The file should be encrypted, the delimiter should be changed from a comma (,) to a pipe (|), and header mapping needs to be done.

`transactions.csv`

`,`

`|`

Steps:

1. Connect-to-source:Hostname:capillary.server.comUsername:cap_userPassword:cap_passwordRemote Path:/source_path/transactions.csv

Connect-to-source:

- Hostname:capillary.server.com

- Username:cap_user

- Password:cap_password

- Remote Path:/source_path/transactions.csv

6. Connect-to-destination:Hostname:brandx.server.comUsername:brandx_userPassword:brandx_passwordRemote Path:/destination_path/Create Remote Directory:YesZip Files:YesOutput File Name:transactions.csvConflict Resolution:ReplacePort:22

Connect-to-destination:

- Hostname:brandx.server.com

- Username:brandx_user

- Password:brandx_password

- Remote Path:/destination_path/

- Create Remote Directory:Yes

- Zip Files:Yes

- Output File Name:transactions.csv

- Conflict Resolution:Replace

- Port:22

16. Define-headers-and-transform-data:Headers Mapping:JSON{
  "TransAmount": "Transaction_value",
  "BillNumber": "Bill_ID"
}Output Headers Order:TransAmount,BillNumberInput File Delimiter:,Output File Delimiter:|Output Filename:transactions.csvIs the file headerless?:No

Define-headers-and-transform-data:

- Headers Mapping:JSON{
  "TransAmount": "Transaction_value",
  "BillNumber": "Bill_ID"
}

```
{
  "TransAmount": "Transaction_value",
  "BillNumber": "Bill_ID"
}
```

```
{
  "TransAmount": "Transaction_value",
  "BillNumber": "Bill_ID"
}
```

- Output Headers Order:

`TransAmount,BillNumber`

`TransAmount,BillNumber`

- Input File Delimiter:,

`,`

`,`

- Output File Delimiter:|

`|`

`|`

- Output Filename:transactions.csv

`transactions.csv`

`transactions.csv`

- Is the file headerless?:No

`No`

`No`

23. Encrypt-data:Encryption Method:AES-256Encryption Key:brandx_encryption_key

Encrypt-data:

- Encryption Method:AES-256

- Encryption Key:brandx_encryption_key

26. Trigger:Schedule:Daily at 12:00 AMTrigger Condition:File presence in the source directory

Trigger:

- Schedule:Daily at 12:00 AM

- Trigger Condition:File presence in the source directory

### Example Configuration

1. Connect-to-source block:YAMLHostname: capillary.server.com
Username: cap_user
Password: cap_password
Remote Path: /source_path/transactions.csv

Connect-to-source block:

```
Hostname: capillary.server.com
Username: cap_user
Password: cap_password
Remote Path: /source_path/transactions.csv
```

```
Hostname: capillary.server.com
Username: cap_user
Password: cap_password
Remote Path: /source_path/transactions.csv
```

2. Connect-to-destination block:YAMLHostname: brandx.server.com
Username: brandx_user
Password: brandx_password
Remote Path: /destination_path/
Create Remote Directory: Yes
Zip Files: Yes
Output File Name: transactions.csv
Conflict Resolution: Replace
Port: 22

Connect-to-destination block:

```
Hostname: brandx.server.com
Username: brandx_user
Password: brandx_password
Remote Path: /destination_path/
Create Remote Directory: Yes
Zip Files: Yes
Output File Name: transactions.csv
Conflict Resolution: Replace
Port: 22
```

```
Hostname: brandx.server.com
Username: brandx_user
Password: brandx_password
Remote Path: /destination_path/
Create Remote Directory: Yes
Zip Files: Yes
Output File Name: transactions.csv
Conflict Resolution: Replace
Port: 22
```

3. Define-headers-and-transform-data block:YAMLHeaders Mapping: {"TransAmount": "Transaction_value", "BillNumber": "Bill_ID"}
Expressions: {"TransAmount": "exp{hdr'Transaction_value'+1}"}
Output Headers Order: TransAmount,BillNumber
Input File Delimiter: ,
Output File Delimiter: |
Output Filename: transactions.csv
Is the file headerless?: No

Define-headers-and-transform-data block:

```
Headers Mapping: {"TransAmount": "Transaction_value", "BillNumber": "Bill_ID"}
Expressions: {"TransAmount": "exp{hdr'Transaction_value'+1}"}
Output Headers Order: TransAmount,BillNumber
Input File Delimiter: ,
Output File Delimiter: |
Output Filename: transactions.csv
Is the file headerless?: No
```

```
Headers Mapping: {"TransAmount": "Transaction_value", "BillNumber": "Bill_ID"}
Expressions: {"TransAmount": "exp{hdr'Transaction_value'+1}"}
Output Headers Order: TransAmount,BillNumber
Input File Delimiter: ,
Output File Delimiter: |
Output Filename: transactions.csv
Is the file headerless?: No
```

4. Encrypt-data block:YAMLEncryption Method: AES-256
Encryption Key: brandx_encryption_key

Encrypt-data block:

```
Encryption Method: AES-256
Encryption Key: brandx_encryption_key
```

```
Encryption Method: AES-256
Encryption Key: brandx_encryption_key
```

5. Trigger block:YAMLSchedule: Daily at 12:00 AM
Trigger Condition: File presence in the source directory

Trigger block:

```
Schedule: Daily at 12:00 AM
Trigger Condition: File presence in the source directory
```

```
Schedule: Daily at 12:00 AM
Trigger Condition: File presence in the source directory
```

### Detailed Explanation:

- Connect-to-source:This block configures the details of the source SFTP server where the file is located.

- Connect-to-destination:This block configures the details of the destination SFTP server where the file will be transferred. It includes options for creating directories, zipping files, and handling file conflicts.

- Define-headers-and-transform-data:This block handles the header mapping and data transformation. It changes column headers, modifies data using expressions, and sets the file delimiters.

- Encrypt-data:This block encrypts the file using the specified encryption method and key.

- Trigger:This block schedules the file transfer to occur daily and checks for the file's presence in the source directory.

This configuration ensures that the file is transferred securely, with the specified header mappings and delimiter changes, meeting Brand X's requirements.

Updated10 months ago