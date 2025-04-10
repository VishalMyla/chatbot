# Get Uploaded Coupons' Statusget

This API retrieves the status of a coupon upload job, providing detailed information about the upload process, organization ID, coupon series ID, job status, timestamps for creation and updates, URLs for error and uploaded files, and counts of uploaded, actual, and error rows.

# Prerequisites

- Authentication: OAuth authentication details

- Access group resource: Read access to coupon group resource

# Resource information

|  |  |

| --- | --- |

| URI | /coupon/api/v1/upload/getUploadStatus/{couponSeriesId} |

| HTTP method | GET |

| Pagination supported? | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eu.api.capillarytech.com/coupon/api/v1/upload/getUploadStatus/535521

```
https://eu.api.capillarytech.com/coupon/api/v1/upload/getUploadStatus/535521
```

# Query parameter

| Parameter | Description |

| --- | --- |

| couponSeriesId* | The unique ID of the coupon series to get the status. |



# Response parameter

| Parameter | Datatype | Description |

| --- | --- | --- |

| success | Boolean | Indicates whether the request was successful. |

| status | Integer | HTTP status code. |

| result | Object | Object containing the result of the request. |

| result.orgId | Integer | Organization ID associated with the result. |

| result.couponSeriesId | Integer | ID of the coupon series. |

| result.uploadJobStatuses | Array of Objects | List of upload job status objects. |

| result.uploadJobStatuses.jobId | Integer | Job ID for the upload status. |

| result.uploadJobStatuses.uploadStatus | String | Status of the upload. |

| result.uploadJobStatuses.createdOn | String (Timestamp) | Timestamp when the job was created. |

| result.uploadJobStatuses.updatedOn | String (Timestamp) | Timestamp when the upload job was last updated. |

| result.uploadJobStatuses.errorFileUrl | String | URL for the error file if any errors occurred during upload. |

| result.uploadJobStatuses.successFileUrl | String or Null | URL for the success file if the upload was successful. |

| result.uploadJobStatuses.uploadedFileUrl | String | URL of the uploaded file. |

| result.uploadJobStatuses.totalUploadedCount | Integer | Total number of uploaded rows. |

| result.uploadJobStatuses.actualRowCount | Integer | Actual number of rows in the uploaded file. |

| result.uploadJobStatuses.errorCount | Integer | Number of errors encountered during upload. |

| result.uploadJobStatuses.uploadTableName | String | Name of the table where uploaded data is stored. |

| result.uploadJobStatuses.uploadedFileName | String | Name of the uploaded file. |

| result.uploadJobStatuses.audienceGroupId | Integer | Audience group ID associated with the upload job. |

| result.uploadJobStatuses.audienceGroupVersionId | Integer | Version ID of the audience group associated with the upload job. |



```
{
    "success": true,
    "status": 200,
    "result": {
        "orgId": 100458,
        "couponSeriesId": 535521,
        "uploadJobStatuses": [
            {
                "jobId": 220605,
                "uploadStatus": "FINISHED",
                "createdOn": "1716811570000",
                "updatedOn": "1716811574000",
                "errorFileUrl": "error_100458_5355212024_05_27_12_06_14",
                "successFileUrl": null,
                "uploadedFileUrl": "couponbatchupload_1716811569557_535521.csv",
                "totalUploadedCount": 2,
                "actualRowCount": 2,
                "errorCount": 2,
                "uploadTableName": "temp_100458_20240527_120613638",
                "uploadedFileName": "couponbatchupload.csv",
                "audienceGroupId": 0,
                "audienceGroupVersionId": 0
            }
        ]
    }
}
```

```
{
    "success": true,
    "status": 200,
    "result": {
        "orgId": 100458,
        "couponSeriesId": 535521,
        "uploadJobStatuses": [
            {
                "jobId": 220605,
                "uploadStatus": "FINISHED",
                "createdOn": "1716811570000",
                "updatedOn": "1716811574000",
                "errorFileUrl": "error_100458_5355212024_05_27_12_06_14",
                "successFileUrl": null,
                "uploadedFileUrl": "couponbatchupload_1716811569557_535521.csv",
                "totalUploadedCount": 2,
                "actualRowCount": 2,
                "errorCount": 2,
                "uploadTableName": "temp_100458_20240527_120613638",
                "uploadedFileName": "couponbatchupload.csv",
                "audienceGroupId": 0,
                "audienceGroupVersionId": 0
            }
        ]
    }
}
```

`Try It!`