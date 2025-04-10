# File transfer templates

This template allows you to download files from SFTP, FTP server, perform operations on the files and push it to SFTP, FTP server or S3.

# Configuring file transfer templates

To configure the file transfer templates, perform the below steps/actions:

1. In theConnect-to-sourceBlock, enter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

2. In theDecrypt datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

3. In theJoin-Datablock, enter the required details and define the conditions to merge the two files and join the data. SeeJoin Data.

4. Configurehash-csv-fieldsblock if you want to mask the data present in the CSV file.

5. In theRebuild-HeadersorDefine headers and transform datasections, enter the required details and define the conditions to transform the headers. SeeRebuild headers / Define headers and transform data.NOTE:The headers for rebuilding, defining, and transforming data are identical except for their names in the user interface.

6. In theEncrypt-datablock, enter the encryption details to encrypt the file. SeeEncrypt Data.

7. In theConnect-to-destinationblock, enter the SFTP server details. SeeConnect to destination.

8. In theTriggerblock, enter the details to schedule the trigger. SeeTrigger.

Updated3 months ago