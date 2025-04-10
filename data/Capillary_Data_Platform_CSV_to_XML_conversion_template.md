# CSV to XML conversion template

The CSV to XML conversion template allows you to convert CSV files to XML files. XML (Extensible Markup Language) is a language that uses user-defined tags to store data. Users can select any CSV file and map it to XML.

# Use case:

A data analyst receives data from various departments through CSV files, which include fields like product ID, product name, price, etc.

However, the system ingests data in a specific XML format. XML has a hierarchical structure and incorporates metadata which makes it easy for humans and machines to understand easily.

By using the CSV to XML conversion template, he can convert all the CSV files into XML to facilitate easy data analysis.

# Configuring CSV to XML conversion dataflow

To configure CSV to XML conversion template, perform the below steps/actions:

1. In theConnect-to-sourceBlock, enter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

2. In theDecrypt-datablock, if the files are encrypted, enter the details to decrypt the data. SeeDecrypt data.

3. In theCSV-To-XML-Converterblock, enter the conversion details. SeeCSV-To_XML-Converter.

4. In theEncrypt-datablock, enter the encryption details to encrypt the file. SeeEncrypt Data

5. In theConnect-to-destinationblock, enter the SFTP server details. SeeConnect to destination.

6. In theTrigger-block, enter the details to schedule the trigger. SeeTrigger.

Updatedover 1 year ago