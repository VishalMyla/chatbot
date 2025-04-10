# Get Vendor Detailsget

This API enables you retrieve vendor details using Vendor ID

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# API Specification

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/vendor/{vendorId}/details |

| HTTP Method | GET |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/36/details

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/36/details
```

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| vendorId* | Integer | Unique identifier of the vendor. You can get the vendorID from UI. |



# Response parameters

| Parameter Name | Description |

| --- | --- |

| success | Object containing details about the status of the request. |

| code | Status code of the request. |

| message | Status message of the request. |

| vendor | Object containing details on the vendor that is created. |

| - id | Unique ID generated for the vendor upon successful creation. |

| - name | Unique name of the vendor. |

| - code | Unique identification code for the vendor. |

| - brandId | Unique brand ID of the organisation. |

| - rank | Rank assigned to the vendor. This can be used for ordering and prioritizing. |

| - description | Description for the vendor. |

| enabled | Indicates whether the vendor is enabled or disabled. |

| vendorDetails | Object containing details on the vendor, if any. |

| vendorTypes | Type of vendor. These are specialized vendor types for which we have implemented customized solutions in our system to handle reward issuance. Supported types: LINKAJA/AIRSPRING/OVO/BONUSLINK |

| - images | Object containing details on the images for the vendor, if any. |

| --name | Unique name identifier for the image. |

| --id | Unique ID that is generated when an image is created. This ID is thefile_handlefor the associated image in the Capillary system. To add an image, raise a ticket to the support team. |

| --altText | Descriptive text that conveys the meaning and context of the image. |

| --url | Direct link to the image. |

| --isExternal | Indicates if the image is from an external source. |

| - videos | Object containing details on videos associated with the vendor |

| --name | Unique name identifier for the video. |

| --id | Unique ID that is generated when a video is created. This ID is thefile_handlefor the associated video in the Capillary system. To add a video, raise a ticket to the support team. |

| --altText | Descriptive text that conveys the meaning and context of the video. |

| --url | Direct link to the video. |

| --isExternal | Indicates if the video is from an external source. |

| type | Type of vendor. Supported Values: REWARDSREWARDS: If the type is set to REWARDS, it refers to a generic vendor used for issuing rewards. |

| redemptionsConfigured | Specifies the number of redemptions which has been configured. |

| lastUpdatedOn | Last updated date and time of the vendor in Epoch time format |

| lastUpdatedOnDateTime | Last updated date and time of the vendor in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| encryptionRequired | Indicates if encryption is required for transactions with the vendor. |



`file_handle`

`file_handle`

```
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendor": {
        "id": 59,
        "name": "DocVendor7",
        "code": "Doc007",
        "brandId": 61,
        "rank": null,
        "description": null,
        "enabled": true,
        "vendorTypes": null,
        "vendorDetails": {},
        "images": [
            {
                "name": "imageName001",
                "altText": null,
                "id": null,
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RFSqYEgenJSDc0Wo_eoEKzxd0iXvTOO-LQ&s",
                "isExternal": true
            }
        ],
        "videos": [
            {
                "name": "videoName001",
                "altText": null,
                "id": null,
                "url": "https://videos.pexels.com/video-files/6265096/6265096-uhd_1440_2560_30fps.mp4",
                "isExternal": true
            }
        ],
        "type": "REWARDS",
        "redemptionsConfigured": 0,
        "lastUpdatedOn": 1739783601000,
        "lastUpdatedOnDateTime": "2025-02-17T09:13:21Z",
        "encryptionRequired": false
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendor": {
        "id": 59,
        "name": "DocVendor7",
        "code": "Doc007",
        "brandId": 61,
        "rank": null,
        "description": null,
        "enabled": true,
        "vendorTypes": null,
        "vendorDetails": {},
        "images": [
            {
                "name": "imageName001",
                "altText": null,
                "id": null,
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RFSqYEgenJSDc0Wo_eoEKzxd0iXvTOO-LQ&s",
                "isExternal": true
            }
        ],
        "videos": [
            {
                "name": "videoName001",
                "altText": null,
                "id": null,
                "url": "https://videos.pexels.com/video-files/6265096/6265096-uhd_1440_2560_30fps.mp4",
                "isExternal": true
            }
        ],
        "type": "REWARDS",
        "redemptionsConfigured": 0,
        "lastUpdatedOn": 1739783601000,
        "lastUpdatedOnDateTime": "2025-02-17T09:13:21Z",
        "encryptionRequired": false
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 5004,
        "message": "Vendor not found"
    },
    "vendor": null
}
```

```
{
    "status": {
        "success": false,
        "code": 5004,
        "message": "Vendor not found"
    },
    "vendor": null
}
```

# API-specific error codes

| Error Code | Description |

| --- | --- |

| 5004 | Invalid Vendor ID |



`Try It!`