# Audience Reload from FTP

This template allows the refreshing of files in the defined FTP location at specified intervals and enables automatic updating of the audience list on Engage+.

# Prerequisites:

- The audience CSV file from the Databricks should be available in the FTP location.

- An audience list must be created in the Engage+ Audience Manager. The same name should be used when configuring the template. The audience name should not contain any 'whitespace.' For example, FTP Test is an invalid name, instead you should use FTP_Test.

# Configuring the template

1. In theConnect-to-sourceBlock, enter the FTP location where the file is present and the location for saving the processed file. For information on this block. refer to the theConnect to sourcedocumentation.📘NotesThe source directory should be different for each audience list.It is recommended to keep the source FTP location name similar to the audience list name. For example, if the audience list name is INxyz, name the FTP file directory IN_xyz.If the audience list is large, it is recommended to compress the file and upload. Make sure that you enable theUnzip filesoption.

In theConnect-to-sourceBlock, enter the FTP location where the file is present and the location for saving the processed file. For information on this block. refer to the theConnect to sourcedocumentation.

> 📘NotesThe source directory should be different for each audience list.It is recommended to keep the source FTP location name similar to the audience list name. For example, if the audience list name is INxyz, name the FTP file directory IN_xyz.If the audience list is large, it is recommended to compress the file and upload. Make sure that you enable theUnzip filesoption.

## 📘Notes

Notes

- The source directory should be different for each audience list.

- It is recommended to keep the source FTP location name similar to the audience list name. For example, if the audience list name is INxyz, name the FTP file directory IN_xyz.

- If the audience list is large, it is recommended to compress the file and upload. Make sure that you enable theUnzip filesoption.

![](https://files.readme.io/2424000-Concect_to_to_source.png)

1. In thePush-To-S3, enter the S3 block details. For more information, refer toPush to S3.S3 Object name/Filename- For this template, enter the object name in the format<audience_Group_Name>/${filename}, where audience_Group_Name is the audience name used in the Engage+.

In thePush-To-S3, enter the S3 block details. For more information, refer toPush to S3.

S3 Object name/Filename- For this template, enter the object name in the format<audience_Group_Name>/${filename}, where audience_Group_Name is the audience name used in the Engage+.

`<audience_Group_Name>/${filename}`

2. In theDestination-Iris-Audienceblock, enter the API endpoint details. This API enables refreshing and updating the audience list as per the updated file in the FTP. The API used isiris/v2/audience/ftp/reload. Enter the details. as follows:API Method - POSTRemote API URL -{host_url}/iris/v2/audience/ftp/reload. The host URL is cluster-based. For example,https://eu.api.capillarytech.com/iris/v2/audience/ftp/reloadX_CAP_ORG - Organisation IDX_CAP_CT - Capilary API authentication token. The token is not mandatory and you can enter any random string in this field if you do not have token.

In theDestination-Iris-Audienceblock, enter the API endpoint details. This API enables refreshing and updating the audience list as per the updated file in the FTP. The API used isiris/v2/audience/ftp/reload. Enter the details. as follows:

`iris/v2/audience/ftp/reload`

- API Method - POST

- Remote API URL -{host_url}/iris/v2/audience/ftp/reload. The host URL is cluster-based. For example,https://eu.api.capillarytech.com/iris/v2/audience/ftp/reload

`{host_url}/iris/v2/audience/ftp/reload`

```
https://eu.api.capillarytech.com/iris/v2/audience/ftp/reload
```

- X_CAP_ORG - Organisation ID

- X_CAP_CT - Capilary API authentication token. The token is not mandatory and you can enter any random string in this field if you do not have token.

![](https://files.readme.io/e4b2fc9-API_details.png)

7. In theTrigger sectionblock, define the duration at which the system should check the FTP location for the new file and update the audience list. For information on how to define the dataflow trigger duration, refer to the documentation on schedulingTrigger.

In theTrigger sectionblock, define the duration at which the system should check the FTP location for the new file and update the audience list. For information on how to define the dataflow trigger duration, refer to the documentation on schedulingTrigger.

Updatedabout 1 year ago