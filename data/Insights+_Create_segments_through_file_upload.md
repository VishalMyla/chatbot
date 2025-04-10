# Create segments through file upload

There are two ways of uploading a file -

1. Upload a file directly,

2. Upload the file through an FTP server.

![](https://files.readme.io/395bb5af6530719d8ed6f866f647eb054db692eff75450c2877948b99be58884-Segmentation_file_upload_flowchart.drawio_1.png)

The segments created through upload are static as the customers/values in a partition do not change automatically. However, you can edit a segment to update details manually, i.e., you can add new customers or update existing segment values  (partition name) of customers.

Your CSV file should have the following headers:

1st column header: user_id, mobile, email or external_id2nd column header: value

You can also track customer activities manually by making the respective segment SCD and specifying the date of the tracked values every time you update the segment.

### To create a segment through file upload:

1. On the EI navigation pane, clickUser Segments.

![1358](https://files.readme.io/170bff3-iAOxImIbcJCxdR19mFnrv1DAXGIPol0dJA.png)

1. ClickCreate Segment.

![1343](https://files.readme.io/13aacdb-H6GXkzJgSXYXcL6l8OX5i9R9Ahr-KjPOcQ.png)

1. InSegment Name, specify a name for the group.

2. InDescription, specify a short description of the segment.

3. InType, selectSCDto keep a track of customer behavior for the current segment. SelectNon-SCDto save only the current snapshot.

4. InMethod, choose Upload for list creation through file upload.

5. ClickNextto continue.

![868](https://files.readme.io/2e523ac-mzKe0PB182l8A0aWn_uxHuglZ-dGdr3sEQ.png)

| OPTION | DESCRIPTION |

| --- | --- |

| Valid from | You need to manually specify the date when the events specified in the CSV file have happened (for SCD). Hence, whenever you upload a new file, it is required to specify the date on which the values are tracked |

| Upload Type - Upload | SelectUploadto directly upload the CSV file and click Choose File to upload the filSample contents of a .csv file with customer id and loyalty value: mobile,value44700900000,High 44700915020,Low44700911011,High |

| Upload Type - FTP | SelectFTPto upload through an FTP server >specify the path in the FTP server where the file is available and > clickUploadNote:Enter a valid FTP path. FTP path must be relative to the configured root folder. For example, rootfolder/FTP path such as ftp://demo_apac/demo_master/demo_path/demo**points.csv. Here, demo_apac/demo_master/ is the root folder and /demo_path/ is the FTP path.To use FTP, you should have configured the FTP  address and access credentials as explained below1. Navigate toSegments>Settings.2. SpecifyServer Address(FTP server URL),Username, andPassword.Notes:1. The file name should adhere to the following format: "_segment name__suffix**"For instance, take 'demo__points.csv' as an example. Here, 'demo' represents the segment name, separated by a double underscore from the 'points' suffix.2. The FTP path must point to the correct CSV file.3. The first row of the CSV sheet must be a column header.4. The first column header must be a user identifier such as user id, mobile, email, and external_ID.If the identifier is mobile(mobile number), country code is mandatory (without the "+" sign). For example, 919972752991.5. The second column header must have a partition value. For example, If the first column header is the user_id(1,2,3, and so on) then the second column header must hold the partition value( high, medium, or low). |



1. ClickUpload & Proceed. You will see the segment with the list of partitions as shown below

- Partitions: Partitions are different values of a segment. For example, if a segment has high loyal, low loyal, and medium loyal as segment values, then three partitions will be created (one for each value)

![1346](https://files.readme.io/1169896-0Q6zvkGQanticR3gM_EQM3JcsOSUGo44Vg.png)

1. Once the processing is completed, review the details and clickCreate

![910](https://files.readme.io/c598a33-BddAi_6RbjcbweODdxEQhmCE-utHlUvO0g.jpg)

The segment will be in Inprogress status initially and once processed, the status label will disappear automatically.

- Inprogress: The segment creation is being processed

- Draft: Signifies draft state where the recent changes were not saved. If you open the segment, you will see Draft available: Save changes to see the partition values. You can save or Deactivate draft segments

## Editing an existing upload-based segment

You can modify a segment to add or modify existing details. During editing the upload-based segment, the existing segment details will be completely replaced with the new details that you upload. So, make sure you create a new file accordingly.

> 📘NoteEach time you upload or import a file using the upload-based segmentation, the data from the new file replaces the existing data.

## 📘Note

Note

Each time you upload or import a file using the upload-based segmentation, the data from the new file replaces the existing data.

### To edit a segment

1. On the Segments summary page, click on the segment that you want to edit.  You can filter the summary list by Type (SCD, Non-SCD, or All) and Method (Conditions, Upload, or All) and also search for a specific filter in theSearchbox.

2. ClickEdit Segment.

![965](https://files.readme.io/f89bc7f-9X2i2p7N5DztcxW2Zg216Zyp_s-UKVO_Ng.png)

1. Choose your preferredUpload Typeand upload the new file

2. ClickUpload & Proceed. Wait until the file is processed successfully

3. ClickUpdate.

Updated6 months ago