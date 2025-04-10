# Create a Vendorpost

A vendor is an external third-party brand that you can use to fulfil your rewards. This API allows you to define vendor details, add images and videos, and display them in your reward catalogue.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic/OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | /api_gateway/rewards/core/v1/vendor/create |

| HTTP method | POST |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/create

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/create
```

# Request body

```
{
    "name": "DocVendor",
    "code": "Doc001",
    "brandId": 61,
    "type": "REWARDS",
    "rank": 1,
    "description": "The top priority vendor"
}
```

```
{
    "name": "DocVendor",
    "code": "Doc001",
    "brandId": 61,
    "type": "REWARDS",
    "rank": 1,
    "description": "The top priority vendor"
}
```

```
{
    "name": "DocVendor2",
    "code": "Doc002",
    "brandId": 61,
    "type": "REWARDS",
    "images": [
        {
            "name": "imageName001",
            "altText": null,
            "id": "Img1",
            "isExternal": false
        }
    ],
    "videos": [
        {
            "name": "videoName001",
            "altText": null,
            "id": "Vid1",
            "isExternal": false
        }
     ],
    "rank": 1,
    "description": "The top priority vendor"
}
```

```
{
    "name": "DocVendor2",
    "code": "Doc002",
    "brandId": 61,
    "type": "REWARDS",
    "images": [
        {
            "name": "imageName001",
            "altText": null,
            "id": "Img1",
            "isExternal": false
        }
    ],
    "videos": [
        {
            "name": "videoName001",
            "altText": null,
            "id": "Vid1",
            "isExternal": false
        }
     ],
    "rank": 1,
    "description": "The top priority vendor"
}
```

```
{
    "name": "DocVendor3",
    "code": "Doc003",
    "brandId": 61,
    "type": "REWARDS",
    "images": [
        {
            "name": "imageName001",
            "altText": null,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RFSqYEgenJSDc0Wo_eoEKzxd0iXvTOO-LQ&s",
            "isExternal": true
        }
    ],
    "videos": [
        {
            "name": "videoName001",
            "altText": null,
            "url": "https://videos.pexels.com/video-files/6265096/6265096-uhd_1440_2560_30fps.mp4",
            "isExternal": true
        }
    ],
    "rank": 1,
    "description": "The top priority vendor"
}
```

```
{
    "name": "DocVendor3",
    "code": "Doc003",
    "brandId": 61,
    "type": "REWARDS",
    "images": [
        {
            "name": "imageName001",
            "altText": null,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RFSqYEgenJSDc0Wo_eoEKzxd0iXvTOO-LQ&s",
            "isExternal": true
        }
    ],
    "videos": [
        {
            "name": "videoName001",
            "altText": null,
            "url": "https://videos.pexels.com/video-files/6265096/6265096-uhd_1440_2560_30fps.mp4",
            "isExternal": true
        }
    ],
    "rank": 1,
    "description": "The top priority vendor"
}
```

# Request body parameters

| Parameter(Parameters marked with * are mandatory) | DataType | Description |

| --- | --- | --- |

| name* | String | Unique name for the vendor. The maximum character limit is 255. |

| code | String | Unique identification code for the vendor. A random, unique code is assigned to the vendor if the code is null or not provided. The maximum character limit is 255. |

| brandId* | Long | Unique brand ID of the organisation. This value must be greater than 0. |

| type* | Enum | Type of vendor. Supported value:REWARDS |

| images | Object | Object containing details of images associated with the vendor. You can add up to 5 images for a vendor. Any image format is supported. |

| - name* | String | Unique name identifier for the image. |

| - altText | String | Descriptive text that conveys the meaning and context of the image. |

| - id | String | Unique ID that is generated when an image is created. This ID is thefile_handlefor the associated image in the Capillary system. IfisExternalis false, then this parameter is required. To add an image, to the file service location raise a ticket to the support team. |

| - url | String | Direct link to the image. IfisExternalis true, then this parameter is required. |

| - isExternal | Boolean | Indicate if the image is from an external source. |

| videos | Object | Object containing details of videos associated with the vendor. You can add up to 2 videos for a vendor. |

| - name* | String | Unique name identifier for the video. |

| - altText | String | Descriptive text that conveys the meaning and context of the video. |

| - id | String | Unique ID that is generated when a video is created. This ID is thefile_handlefor the associated video in the Capillary system. IfisExternalis false, then this parameter is required. To add a video to the file service location, raise a ticket to the support team. Any video format is supported. |

| - url | String | Direct link to the video. IfisExternalis true, then this parameter is required. |

| - isExternal | Boolean | Indicate if the video is from an external source. |

| rank | Integer | Assign a rank to the vendor. This can be used for ordering and prioritizing. This value must be greater than 0. |

| description | String | Description for the vendor. The maximum character limit is 1034. |



`REWARDS`

`file_handle`

`isExternal`

`isExternal`

`file_handle`

`isExternal`

`isExternal`

# Response body

```
{
  "status": {
    "success": true,
    "code": 5002,
    "message": "Vendor created successfully"
  },
  "vendor": {
    "id": 55,
    "name": "DocVendor3",
    "brandId": 61,
    "enabled": true,
    "isEncryptionRequired": false,
    "vendorTypes": null,
    "vendorDetails": null,
    "type": "REWARDS",
    "rank": 1,
    "code": "Doc003",
    "description": "description",
    "images": null,
    "videos": null,
    "encryptionRequired": false
  }
}
```

```
{
  "status": {
    "success": true,
    "code": 5002,
    "message": "Vendor created successfully"
  },
  "vendor": {
    "id": 55,
    "name": "DocVendor3",
    "brandId": 61,
    "enabled": true,
    "isEncryptionRequired": false,
    "vendorTypes": null,
    "vendorDetails": null,
    "type": "REWARDS",
    "rank": 1,
    "code": "Doc003",
    "description": "description",
    "images": null,
    "videos": null,
    "encryptionRequired": false
  }
}
```

```
{
  "status": {
    "success": false,
    "code": 400,
    "message": "Cannot deserialize value of type com.capillary.solutions.rewards.domain.Type from String \"REWARD\": value not one of declared Enum instance names: [POINTS, REWARDS]"
  }
}
```

```
{
  "status": {
    "success": false,
    "code": 400,
    "message": "Cannot deserialize value of type com.capillary.solutions.rewards.domain.Type from String \"REWARD\": value not one of declared Enum instance names: [POINTS, REWARDS]"
  }
}
```

```
{
  "status": {
    "success": false,
    "code": 400,
    "message": "rank must be greater than zero"
  }
}
```

```
{
  "status": {
    "success": false,
    "code": 400,
    "message": "rank must be greater than zero"
  }
}
```

```
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 3004,
        "message": "Brand not found"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 5007,
        "message": "Vendor already exists"
    },
    "vendor": null
}
```

```
{
    "status": {
        "success": false,
        "code": 5007,
        "message": "Vendor already exists"
    },
    "vendor": null
}
```

# Response parameters

| Parameter | Description |

| --- | --- |

| status | Object containing details about the status of the request. |

| - success | Indicates whether the request was successful.true: Request was successful.false: Request was unsuccessful. |

| - code | Status code of the request. |

| - message | Status message of the request. |

| vendor | Object containing details on the vendor that is created. |

| - id | Unique ID generated for the vendor upon successful creation. |

| - name | Unique name of the vendor. |

| - brandId | Unique brand ID of the organisation. |

| - enabled | Indicates if the vendor is currently enabled or disabled.true: Vendor is enabled.false: Vendor is disabled. |

| - isEncryptionRequired | Indicates if the vendor requires encryption.true: Vendor requires encryption.false: Vendor does not require encryption. |

| - vendorTypes | Type of vendor. These are specialized vendor types for which we have implemented customized solutions in our system to handle reward issuance. Supported types: LINKAJA/AIRSPRING/OVO/BONUSLINK |

| - vendorDetails | Object containing details on the vendor, if any. |

| - type | Type of vendor. Possible value:REWARDS |

| - rank | Rank assigned to the vendor. This can be used for ordering and prioritizing. |

| - code | Unique identification code of the vendor. |

| - description | Description for the vendor. |

| - images | Object containing details on the images for the vendor, if any. |

| - videos | Object containing details on the videos for the vendor, if any. |

| - encryptionRequired | Indicates if encryption is required for transactions with the vendor.true: Vendor requires encryption.false: Vendor does not require encryption. |



`true`

`false`

`true`

`false`

`true`

`false`

`REWARDS`

`true`

`false`

# API error codes

| Code | Description | Reason |

| --- | --- | --- |

| 5007 | Vendor already exists | Vendor with the same name already exists. |

| 3004 | Brand not found | brandIdprovided is invalid. |

| 400 | Cannot deserialize value of type com.capillary.solutions.rewards.domain.Type from String "REWARD": value not one of declared Enum instance names: [POINTS, REWARDS] | typeis invalid. |

| 400 | rank must be greater than zero | Value forrankprovided is 0. |



`brandId`

`type`

`rank`

`Try It!`