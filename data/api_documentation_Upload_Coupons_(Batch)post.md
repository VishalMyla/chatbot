# Upload Coupons (Batch)post

This API helps to upload a batch of coupons to a coupon series. It provides the status of the upload process, organization ID, coupon series ID, job status, timestamps for creation and updates, and file information related to the upload.

# Prerequisites

- Authentication: OAuth authentication details

- Access group: Write access to coupon group resource

# Resource information

|  |  |

| --- | --- |

| URI | coupon/api/v1/upload/file/{couponSeriedId} |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | Yes |



# API endpoint example

https://eu.intouch.capillarytech.com/coupon/api/v1/upload/file/541854

```
https://eu.intouch.capillarytech.com/coupon/api/v1/upload/file/541854
```

# Path parameter

| Parameter | Description |

| --- | --- |

| couponSeriedId* | Unique ID of the coupon series for which you need to upload coupons. |



# Body parameter

| Parameter | Description |

| --- | --- |

| file* | Name of the CSV file with customer and coupon details. There is no limit on the number of coupons you can upload, including externally managed coupons. |

| customerIdentifier* | Customer identifier type used in the CSV file. Use NOT_TAGGED as the identifier to upload only coupon codes. |

| customerIdentifierColumn | Column ID of the customer identifier in the uploaded CSV file. |



# Header Required

| Header | Description |

| --- | --- |

| Content-Type* | multipart/form-data |

| x-cap-api-oauth-token* | Generated authentication token |



# Response parameter

| Parameter | Data Type | Description |

| --- | --- | --- |

| success | Boolean | Indicates whether the API call was successful. |

| status | Integer | HTTP status code of the API response. |

| result | Object | Contains the result data of the API call. |

| result.orgId | Integer | Organization ID associated with the result. |

| result.couponSeriesId | Integer | ID of the coupon series. |

| result.uploadJobStatuses | Array of Objects | List of upload job statuses related to the coupon series. |

| result.uploadJobStatuses.jobId | Integer | Job ID of the upload status. |

| result.uploadJobStatuses.uploadStatus | String | Status of the upload (e.g., STARTED). |

| result.uploadJobStatuses.createdOn | String | Timestamp when the upload job was created. |

| result.uploadJobStatuses.updatedOn | String | Timestamp when the upload job was last updated. |

| result.uploadJobStatuses.errorFileUrl | String or null | URL for the error file if any errors occurred during upload. |

| result.uploadJobStatuses.successFileUrl | String or null | URL for the success file if the upload was successful. |

| result.uploadJobStatuses.uploadedFileUrl | String | URL of the uploaded file. |

| result.uploadJobStatuses.totalUploadedCount | Integer | Total number of uploaded rows. |

| result.uploadJobStatuses.actualRowCount | Integer | Actual number of rows in the uploaded file. |

| result.uploadJobStatuses.errorCount | Integer | Number of errors encountered during upload. |

| result.uploadJobStatuses.uploadTableName | String or null | Name of the table where uploaded data is stored. |

| result.uploadJobStatuses.uploadedFileName | String | Name of the uploaded file. |

| result.uploadJobStatuses.audienceGroupId | Integer | ID of the audience group. |

| result.uploadJobStatuses.audienceGroupVersionId | Integer | Version ID of the audience group. |

| result.fileName | String | Name of the file associated with the result. |



```
{
    "success": true,
    "status": 200,
    "result": {
        "orgId": 100458,
        "couponSeriesId": 541854,
        "uploadJobStatuses": [
            {
                "jobId": 222696,
                "uploadStatus": "STARTED",
                "createdOn": "1717651325445",
                "updatedOn": "1717651325445",
                "errorFileUrl": null,
                "successFileUrl": null,
                "uploadedFileUrl": "couponbatchupload_1717651325326_541854.csv",
                "totalUploadedCount": 0,
                "actualRowCount": 0,
                "errorCount": 0,
                "uploadTableName": null,
                "uploadedFileName": "couponbatchupload.csv",
                "audienceGroupId": 0,
                "audienceGroupVersionId": 0
            }
        ],
        "fileName": "couponbatchupload_1717651325326_541854.csv"
    }
}
```

```
{
    "success": true,
    "status": 200,
    "result": {
        "orgId": 100458,
        "couponSeriesId": 541854,
        "uploadJobStatuses": [
            {
                "jobId": 222696,
                "uploadStatus": "STARTED",
                "createdOn": "1717651325445",
                "updatedOn": "1717651325445",
                "errorFileUrl": null,
                "successFileUrl": null,
                "uploadedFileUrl": "couponbatchupload_1717651325326_541854.csv",
                "totalUploadedCount": 0,
                "actualRowCount": 0,
                "errorCount": 0,
                "uploadTableName": null,
                "uploadedFileName": "couponbatchupload.csv",
                "audienceGroupId": 0,
                "audienceGroupVersionId": 0
            }
        ],
        "fileName": "couponbatchupload_1717651325326_541854.csv"
    }
}
```

`Try It!`