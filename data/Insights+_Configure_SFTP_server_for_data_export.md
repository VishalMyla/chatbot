# Configure SFTP server for data export

You can export data only to an SFTP server. Insights+  supports configuring up to five SFTP servers and using the desired one while configuring an export job.  For example, you can have one dedicated to Capillary internal exports and others for org exports based on the location. From the SFTP location, you can then download data to your local machine.

> 📘NoteAn SFTP once added you cannot be deleted or renamed. However, you can change server details and the path within that SFTP.

## 📘Note

Note

An SFTP once added you cannot be deleted or renamed. However, you can change server details and the path within that SFTP.

# Prerequisites

- Destination SFTP server for data storage

- Source Host server IP for data retrieval

- FTP Configuration Details:HostnamePort numberUsername and PasswordPath to the folder

- Hostname

- Port number

- Username and Password

- Path to the folder

# Configuring SFTP

To configure the SFTP server, follow these steps.

1. Whitelist the below Capillary's IP addresses to allow connections to the brand's SFTP server.ClusterIPsAPAC1/INCRM54.235.251.853.227.110.70APAC2/SGCRM3.0.242.1343.1.68.245EUCRM54.247.60.16252.214.98.25USCRM18.224.36.12118.189.151.155

Whitelist the below Capillary's IP addresses to allow connections to the brand's SFTP server.

| Cluster | IPs |

| --- | --- |

| APAC1/INCRM | 54.235.251.853.227.110.70 |

| APAC2/SGCRM | 3.0.242.1343.1.68.245 |

| EUCRM | 54.247.60.16252.214.98.25 |

| USCRM | 18.224.36.12118.189.151.155 |



2. On Insights+ UI navigate toSettings>FTPand clickAdd FTP Server.

On Insights+ UI navigate toSettings>FTPand clickAdd FTP Server.

![1312](https://files.readme.io/1ef2a10-561QTm2H7KBGG3xmQCq3paXYogNxh9D7WQ.png)

1. Enter the following details:Ftp name- Specify a name for the SFTP Server. The name will be displayed when configuring an export job (in Select FTP).Server Address- enter the URL of the SFTP. If the default port (22) is being used, then enter the URL of the client SFTP server. For example,abc.def.com.  If custom port 82 is used, then enter the URL with the port number of the client SFTP server.  For example,abc.def.com:82Username- Enter the username of the SFTP server.Password- Enter the password of the SFTP server.Default Target Folder box- Specify the path in the SFTP server to which you want the data to be saved. For example, '/export'. If the path is not specified, data will be saved in the root directory of the SFTP server.Enable Password Protection- SelectYesto enable password protection for the files that will be exported to the current server.

Enter the following details:

![](https://files.readme.io/2b5fc46-Sample_config.png)

1. Ftp name- Specify a name for the SFTP Server. The name will be displayed when configuring an export job (in Select FTP).

2. Server Address- enter the URL of the SFTP. If the default port (22) is being used, then enter the URL of the client SFTP server. For example,abc.def.com.  If custom port 82 is used, then enter the URL with the port number of the client SFTP server.  For example,abc.def.com:82

`abc.def.com`

`abc.def.com:82`

3. Username- Enter the username of the SFTP server.

4. Password- Enter the password of the SFTP server.

5. Default Target Folder box- Specify the path in the SFTP server to which you want the data to be saved. For example, '/export'. If the path is not specified, data will be saved in the root directory of the SFTP server.

6. Enable Password Protection- SelectYesto enable password protection for the files that will be exported to the current server.

8. ClickSubmit.

ClickSubmit.

> 🚧NoteIf the specified folder is not identified in the Target Path of the SFTP server, the configuration fails.The file name of an exported file will have the following naming convention.* schedulenametemplateName_timestamp. For example, DailySlabChangeSlabChangeLog2019-10-29-12-30-021572356331802.

## 🚧Note

Note

- If the specified folder is not identified in the Target Path of the SFTP server, the configuration fails.

- The file name of an exported file will have the following naming convention.* schedulenametemplateName_timestamp. For example, DailySlabChangeSlabChangeLog2019-10-29-12-30-021572356331802.

# Testing SFTP configuration

You can either export a test file from Insights and test if the file is exported successfully or can also check the connection using Wetty.

To check the connection using Wetty,

1. Run the commandnmap <hostname>to check the open port for a host.

`nmap <hostname>`

![](https://files.readme.io/bb8deed-check_port.png)

1. Run the commandtelnet <hostname> <port>.

`telnet <hostname> <port>`

![](https://files.readme.io/827c7c6-check_whitelist.png)

Updatedabout 1 year ago