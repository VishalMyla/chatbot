# Upload images to file servicepost

This API is upload an image to the file service.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or  OAuth credentials

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/file-service/rewards/{file name with extension} |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/file-service/rewards/test.png

```
https://eucrm.cc.capillarytech.com/api_gateway/file-service/rewards/test.png
```

# Request path parameters

| Parameter | Data type | Description |

| --- | --- | --- |

| filename* | String | The name of the image to be uploaded. All file image extensions are supported.Example: test.png, test.jpg. |



# Request body parameters

| Parameter | Data type | Description |

| --- | --- | --- |

| File path location | String | Location of the image stored in your computer.If the file path is added, the image is stored in s3.Example: @/Users/nikhil/Downloads/IMG_20220730_180352311.jpgNote: If the file path is not given, a placeholder is created in the s3 location to store the image. |



```
@/Users/nikhil/Downloads/IMG_20220730_180352311.jpg
```

```
@/Users/nikhil/Downloads/IMG_20220730_180352311.jpg
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| code | Integer | HTTP status code indicating the outcome of the request. |

| status | String | A Boolean indicating the status of the file upload operation. |

| message | String | A message describing the outcome of the operation. |

| file.name | String | The name of the uploaded file. |

| file.namespace | String | The namespace categorization for the file. |

| file.version | Integer | The version number of the file. |

| file.acl | String | Access control level of the file. |

| file.fileSize | String | The size of the file in bytes. |

| file.file_handle | String | A unique identifier for the file handle. |

| file.content_type | String | The MIME (Multipurpose Internet Mail Extensions) type of the file, e.g., "image/png". |

| file.s3_token | String | A token representing the file in the S3 storage. |

| file.latest_version | Integer | The latest version number of the file. |

| file.last_modified | String | The timestamp of the last modification to the file. |

| file.s3_url | String | The URL to access the file directly from S3 storage. |

| secureFilePath | String | A secure URL to access the file, including authentication tokens and parameters. |



```
{
    "code": 200,
    "status": "true",
    "message": "Successfully uploaded file",
    "file": {
        "name": "test.png",
        "namespace": "rewards",
        "version": 2,
        "acl": "PRIVATE",
        "fileSize": "51",
        "file_handle": "73e78929-1e07-4cc5-a738-b54470a7dc8c",
        "content_type": "image/png",
        "s3_token": "rewards/100606/b21f3aea-ad38-4634-82a4-db2aaa0b.png",
        "latest_version": 2,
        "last_modified": "2024-05-08 09:10:59",
        "s3_url": "s3://eucrm-solutions/rewards/100606/b21f3aea-ad38-4634-82a4-db2aaa0b.png"
    },
    "secureFilePath": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/b21f3aea-ad38-4634-82a4-db2aaa0b.png?X-Amz-Security-Token=FwoGZXIvYXdzEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDPltNW6lwqLl1xXlfyLIAaxPIuF7uCnnmqOoXU72eVlsn0Lut7GRbf7kme0GYrC8dqLV4UeWGGwizdrjT2QcANwqoAJRYQDvHYHndQuRt8Rvs3%2B%2BaXtUaW6YYekA65tkH%2BeSg2YaEoTRGuep7rOxHGSmpCaxJ767Za3vi6B3CpeYh5U1LZOeJHS5v3uLCdTHleIj8mutjwoX1OuWlPxEwxAtOOABU7ISXrJxTwVfMWANzfuxNyN2jR0kKpRNHq%2FozXEsVuw2owTyr9VK6wwCeMS5MDVZjANIKI7k67EGMi0%2F6Je5Y9Alnn8IgGBzdYmeEub7mDk1%2FBzhZwySJ4O1osP2n6iWFi%2FEyeaPeco%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240508T034059Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBVBC5UMM3%2F20240508%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=86c114267239ef985ff81c32ad0fa1d6b0618c70e42c2a74217ea1e5d6eec1a8"
}
```

```
{
    "code": 200,
    "status": "true",
    "message": "Successfully uploaded file",
    "file": {
        "name": "test.png",
        "namespace": "rewards",
        "version": 2,
        "acl": "PRIVATE",
        "fileSize": "51",
        "file_handle": "73e78929-1e07-4cc5-a738-b54470a7dc8c",
        "content_type": "image/png",
        "s3_token": "rewards/100606/b21f3aea-ad38-4634-82a4-db2aaa0b.png",
        "latest_version": 2,
        "last_modified": "2024-05-08 09:10:59",
        "s3_url": "s3://eucrm-solutions/rewards/100606/b21f3aea-ad38-4634-82a4-db2aaa0b.png"
    },
    "secureFilePath": "https://eucrm-solutions.s3-eu-west-1.amazonaws.com/rewards/100606/b21f3aea-ad38-4634-82a4-db2aaa0b.png?X-Amz-Security-Token=FwoGZXIvYXdzEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDPltNW6lwqLl1xXlfyLIAaxPIuF7uCnnmqOoXU72eVlsn0Lut7GRbf7kme0GYrC8dqLV4UeWGGwizdrjT2QcANwqoAJRYQDvHYHndQuRt8Rvs3%2B%2BaXtUaW6YYekA65tkH%2BeSg2YaEoTRGuep7rOxHGSmpCaxJ767Za3vi6B3CpeYh5U1LZOeJHS5v3uLCdTHleIj8mutjwoX1OuWlPxEwxAtOOABU7ISXrJxTwVfMWANzfuxNyN2jR0kKpRNHq%2FozXEsVuw2owTyr9VK6wwCeMS5MDVZjANIKI7k67EGMi0%2F6Je5Y9Alnn8IgGBzdYmeEub7mDk1%2FBzhZwySJ4O1osP2n6iWFi%2FEyeaPeco%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240508T034059Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBVBC5UMM3%2F20240508%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=86c114267239ef985ff81c32ad0fa1d6b0618c70e42c2a74217ea1e5d6eec1a8"
}
```

`Try It!`