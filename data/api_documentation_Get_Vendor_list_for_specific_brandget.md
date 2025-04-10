# Get Vendor list for specific brandget

This API is used to retrieve details of Vendor List of a specific brand using Brand ID.

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

| URI | /api_gateway/rewards/core/v1/vendor/brand/1 |

| HTTP Method | GET |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/brand/1?enabled=false

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/brand/1?enabled=false
```

# Request path parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| brandId* | Integer | Unique identifier of the brand. You can get the brand ID from thisAPI. |



[API](/reference/retrieve-brand-id)

# Request query parameters

| Parameter Name | Data Type | Description |

| --- | --- | --- |

| enabled | Boolean | Filters the vendor list to show only those that are enabled. Supported values: true or false. |



```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/brand/1?enabled=false
```

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/brand/1?enabled=false
```

# Response parameters

| Parameter Name | Description |

| --- | --- |

| success | Indicates whether the request was successful.true: Request was successful.false: Request was unsuccessful. |

| code | Status code of the request. |

| message | Message describing the status of the response. |

| vendorList | Object containing details of the vendors for the organisation. |

| - id | Unique identifier for the vendor. |

| - name | Name of the vendor. |

| - brandId | Identifier for the brand associated with the vendor. |

| - enabled | Indicates whether the vendor is enabled or disabled. |

| - vendorTypes | Type of vendor. These are specialized vendor types for which we have implemented customized solutions in our system to handle reward issuance. Possible types: LINKAJA/AIRSPRING/OVO/BONUSLINK |

| - vendorDetails | Additional details about the vendor/ |

| - type | Type of vendor. Possible Values: REWARDS/POINTS.REWARDS: If the type is set to REWARDS, it refers to a generic vendor used for issuing rewards.POINTS: It is a vendor type that manages the external points system, where each brand can have only one POINTS type vendor. |

| - rank | Rank assigned to the vendor. This can be used for ordering and prioritizing. |

| - code | Unique identification code for the vendor. |

| - description | Description for the vendor. |

| - images | Object containing details on images associated with the vendor |

| --name | Unique name identifier for the image. |

| --id | Unique ID that is generated when creating the image. |

| --altText | Descriptive text that conveys the meaning and context of the image. |

| --url | Direct link to the image. |

| --isExternal | Indicates if the image is from an external source. |

| - videos | Object containing details on videos associated with the vendor |

| --name | Unique name identifier for the video. |

| --id | Unique ID that is generated when creating the video. |

| --altText | Descriptive text that conveys the meaning and context of the video. |

| --url | Direct link to the video. |

| --isExternal | Indicates if the video is from an external source. |

| - lastUpdatedOn | Last updated date and time of the vendor in Epoch format |

| lastUpdatedOnDateTime | Last updated date and time of the vendor in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

| -encryptionRequired | Indicates if encryption is required for transactions with the vendor. |



`true`

`false`

```
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendorList": [
        {
            "id": 51,
            "name": "testVendor-016",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "100737",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777347000,
            "lastUpdatedOnDateTime": "2025-02-17T07:29:07Z",
            "encryptionRequired": false
        },
        {
            "id": 44,
            "name": "Clothing",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "44",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739438226000,
            "lastUpdatedOnDateTime": "2025-02-13T09:17:06Z",
            "encryptionRequired": false
        },
        {
            "id": 47,
            "name": "Nee",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "123": "********************************************"
            },
            "type": "REWARDS",
            "rank": null,
            "code": "47",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739438226000,
            "lastUpdatedOnDateTime": "2025-02-13T09:17:06Z",
            "encryptionRequired": false
        },
        {
            "id": 52,
            "name": "DocVendor",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc001",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777392000,
            "lastUpdatedOnDateTime": "2025-02-17T07:29:52Z",
            "encryptionRequired": false
        },
        {
            "id": 53,
            "name": "DocVendor2",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc002",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777433000,
            "lastUpdatedOnDateTime": "2025-02-17T07:30:33Z",
            "encryptionRequired": false
        },
        {
            "id": 55,
            "name": "DocVendor3",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc003",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739781911000,
            "lastUpdatedOnDateTime": "2025-02-17T08:45:11Z",
            "encryptionRequired": false
        },
        {
            "id": 56,
            "name": "DocVendor4",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc004",
            "description": "thesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcd",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739782052000,
            "lastUpdatedOnDateTime": "2025-02-17T08:47:32Z",
            "encryptionRequired": false
        },
        {
            "id": 57,
            "name": "DocVendor5",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc005",
            "description": "thesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcd",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739782082000,
            "lastUpdatedOnDateTime": "2025-02-17T08:48:02Z",
            "encryptionRequired": false
        },
        {
            "id": 58,
            "name": "DocVendor6",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc006",
            "description": null,
            "images": [
                {
                    "name": "imageName001",
                    "altText": null,
                    "id": null,
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RFSqYEgenJSDc0Wo_eoEKzxd0iXvTOO-LQ&s",
                    "isExternal": true
                }
            ],
            "videos": [],
            "lastUpdatedOn": 1739783325000,
            "lastUpdatedOnDateTime": "2025-02-17T09:08:45Z",
            "encryptionRequired": false
        },
        {
            "id": 59,
            "name": "DocVendor7",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc007",
            "description": null,
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
            "lastUpdatedOn": 1739783601000,
            "lastUpdatedOnDateTime": "2025-02-17T09:13:21Z",
            "encryptionRequired": false
        },
        {
            "id": 61,
            "name": "DocVendor9",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc009",
            "description": null,
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
            "lastUpdatedOn": 1739791885000,
            "lastUpdatedOnDateTime": "2025-02-17T11:31:25Z",
            "encryptionRequired": false
        },
        {
            "id": 63,
            "name": "DocVendor10",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc010",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739855739000,
            "lastUpdatedOnDateTime": "2025-02-18T05:15:39Z",
            "encryptionRequired": false
        },
        {
            "id": 64,
            "name": "DocVendor11",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc011",
            "description": null,
            "images": [
                {
                    "name": "imageName001",
                    "altText": null,
                    "id": "bdacb6a7-d4ce-4dea-bf38-134a1200b8b9",
                    "url": "https://s3.amazonaws.com/fileservice.in/solutions/c3d28860-1e11-4a01-8a7c-ea12b56.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCWV1LXdlc3QtMSJHMEUCIAXwTUz5Dfh2tBPRKcMVkL1xU%2B%2B19fTIZeOPtck2I8QPAiEA%2B9Wp2mvKDbjvbHGQQYVWN3gjzxgAGc4bZ0iEU09wtQkqugIIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MDI4MTI3NzkyNjciDA7ia22iVxU7nAbnhyqOAg4TFHTVxe8xzxyLWPQvBNja45Lwb2ZAL%2F%2BN1VQDXX6cNY5sOiT1%2FGB7cXqAy2xVBOeC9er1mQdWflcrdYJBiTOsLnsG7u5x9NYYSOAfWFEp5xtxTG%2BmdWWl4OdE4BZwyoDEmKjBR%2BR3jm7nBop5ZhYRoWxyOhX%2BVlnX3JmTng%2BPYH6USdEbpfmDw83KAA2QTYrCO463hxEwgsBB6a%2Fus%2BadZjZlyIHBxo%2FmfnGH5qiPgX94S7g5iYRLuwvYxO28sLqTFTAPYY5QPaEWbuT4X4whfNXSsgNVr5tcQa%2B6UoiI0biU0nzr1SJeceK6WUamt6Os6rzw0KDYbHIOxYWnCgFkSzK3MiB1jVRR6H3N0DCErdC9BjqdAQq9nL8BJoImTZ9u00EDqo5uZhySGh7BLpAt4mQO%2Fra%2Bp9g9xjSTtUEXsBzdHa8l0g%2FH02JyHADqqcWisFWuvPONl91PyrYJtbgqO2ojAYvsaHmx%2FzxhYeZ2b5jqBsaIERu0FtxBN05Z1E6mUMWxmCfFMBafnlTz9TYRA8enpo%2FdoKcjgcEuuoRhpefogOHh3qhyG0E0fHeUhd7PuGU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250218T051557Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMBVGDWQZ6R%2F20250218%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dbdc8746ad5823b7f64932ae27783fd6e3cc583e14c44a888484b81c1f0641e2",
                    "isExternal": false
                }
            ],
            "videos": [],
            "lastUpdatedOn": 1739855757000,
            "lastUpdatedOnDateTime": "2025-02-18T05:15:57Z",
            "encryptionRequired": false
        },
        {
            "id": 68,
            "name": "DocVendor12",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc012",
            "description": null,
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
            "lastUpdatedOn": 1740637585000,
            "lastUpdatedOnDateTime": "2025-02-27T06:26:25Z",
            "encryptionRequired": false
        },
        {
            "id": 69,
            "name": "DocVendor13",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc013",
            "description": null,
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
            "lastUpdatedOn": 1740637658000,
            "lastUpdatedOnDateTime": "2025-02-27T06:27:38Z",
            "encryptionRequired": false
        },
        {
            "id": 86,
            "name": "VendorDoc",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc100",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1741171688000,
            "lastUpdatedOnDateTime": "2025-03-05T10:48:08Z",
            "encryptionRequired": false
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendorList": [
        {
            "id": 51,
            "name": "testVendor-016",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "100737",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777347000,
            "lastUpdatedOnDateTime": "2025-02-17T07:29:07Z",
            "encryptionRequired": false
        },
        {
            "id": 44,
            "name": "Clothing",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "44",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739438226000,
            "lastUpdatedOnDateTime": "2025-02-13T09:17:06Z",
            "encryptionRequired": false
        },
        {
            "id": 47,
            "name": "Nee",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "123": "********************************************"
            },
            "type": "REWARDS",
            "rank": null,
            "code": "47",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739438226000,
            "lastUpdatedOnDateTime": "2025-02-13T09:17:06Z",
            "encryptionRequired": false
        },
        {
            "id": 52,
            "name": "DocVendor",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc001",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777392000,
            "lastUpdatedOnDateTime": "2025-02-17T07:29:52Z",
            "encryptionRequired": false
        },
        {
            "id": 53,
            "name": "DocVendor2",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc002",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739777433000,
            "lastUpdatedOnDateTime": "2025-02-17T07:30:33Z",
            "encryptionRequired": false
        },
        {
            "id": 55,
            "name": "DocVendor3",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc003",
            "description": "description",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739781911000,
            "lastUpdatedOnDateTime": "2025-02-17T08:45:11Z",
            "encryptionRequired": false
        },
        {
            "id": 56,
            "name": "DocVendor4",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc004",
            "description": "thesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcd",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739782052000,
            "lastUpdatedOnDateTime": "2025-02-17T08:47:32Z",
            "encryptionRequired": false
        },
        {
            "id": 57,
            "name": "DocVendor5",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": 1,
            "code": "Doc005",
            "description": "thesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcdthesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswithesunwasearlyandbrightlightingupthefieldofgrasswiabcd",
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739782082000,
            "lastUpdatedOnDateTime": "2025-02-17T08:48:02Z",
            "encryptionRequired": false
        },
        {
            "id": 58,
            "name": "DocVendor6",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc006",
            "description": null,
            "images": [
                {
                    "name": "imageName001",
                    "altText": null,
                    "id": null,
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RFSqYEgenJSDc0Wo_eoEKzxd0iXvTOO-LQ&s",
                    "isExternal": true
                }
            ],
            "videos": [],
            "lastUpdatedOn": 1739783325000,
            "lastUpdatedOnDateTime": "2025-02-17T09:08:45Z",
            "encryptionRequired": false
        },
        {
            "id": 59,
            "name": "DocVendor7",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc007",
            "description": null,
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
            "lastUpdatedOn": 1739783601000,
            "lastUpdatedOnDateTime": "2025-02-17T09:13:21Z",
            "encryptionRequired": false
        },
        {
            "id": 61,
            "name": "DocVendor9",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc009",
            "description": null,
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
            "lastUpdatedOn": 1739791885000,
            "lastUpdatedOnDateTime": "2025-02-17T11:31:25Z",
            "encryptionRequired": false
        },
        {
            "id": 63,
            "name": "DocVendor10",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc010",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1739855739000,
            "lastUpdatedOnDateTime": "2025-02-18T05:15:39Z",
            "encryptionRequired": false
        },
        {
            "id": 64,
            "name": "DocVendor11",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc011",
            "description": null,
            "images": [
                {
                    "name": "imageName001",
                    "altText": null,
                    "id": "bdacb6a7-d4ce-4dea-bf38-134a1200b8b9",
                    "url": "https://s3.amazonaws.com/fileservice.in/solutions/c3d28860-1e11-4a01-8a7c-ea12b56.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCWV1LXdlc3QtMSJHMEUCIAXwTUz5Dfh2tBPRKcMVkL1xU%2B%2B19fTIZeOPtck2I8QPAiEA%2B9Wp2mvKDbjvbHGQQYVWN3gjzxgAGc4bZ0iEU09wtQkqugIIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MDI4MTI3NzkyNjciDA7ia22iVxU7nAbnhyqOAg4TFHTVxe8xzxyLWPQvBNja45Lwb2ZAL%2F%2BN1VQDXX6cNY5sOiT1%2FGB7cXqAy2xVBOeC9er1mQdWflcrdYJBiTOsLnsG7u5x9NYYSOAfWFEp5xtxTG%2BmdWWl4OdE4BZwyoDEmKjBR%2BR3jm7nBop5ZhYRoWxyOhX%2BVlnX3JmTng%2BPYH6USdEbpfmDw83KAA2QTYrCO463hxEwgsBB6a%2Fus%2BadZjZlyIHBxo%2FmfnGH5qiPgX94S7g5iYRLuwvYxO28sLqTFTAPYY5QPaEWbuT4X4whfNXSsgNVr5tcQa%2B6UoiI0biU0nzr1SJeceK6WUamt6Os6rzw0KDYbHIOxYWnCgFkSzK3MiB1jVRR6H3N0DCErdC9BjqdAQq9nL8BJoImTZ9u00EDqo5uZhySGh7BLpAt4mQO%2Fra%2Bp9g9xjSTtUEXsBzdHa8l0g%2FH02JyHADqqcWisFWuvPONl91PyrYJtbgqO2ojAYvsaHmx%2FzxhYeZ2b5jqBsaIERu0FtxBN05Z1E6mUMWxmCfFMBafnlTz9TYRA8enpo%2FdoKcjgcEuuoRhpefogOHh3qhyG0E0fHeUhd7PuGU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250218T051557Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMBVGDWQZ6R%2F20250218%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dbdc8746ad5823b7f64932ae27783fd6e3cc583e14c44a888484b81c1f0641e2",
                    "isExternal": false
                }
            ],
            "videos": [],
            "lastUpdatedOn": 1739855757000,
            "lastUpdatedOnDateTime": "2025-02-18T05:15:57Z",
            "encryptionRequired": false
        },
        {
            "id": 68,
            "name": "DocVendor12",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc012",
            "description": null,
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
            "lastUpdatedOn": 1740637585000,
            "lastUpdatedOnDateTime": "2025-02-27T06:26:25Z",
            "encryptionRequired": false
        },
        {
            "id": 69,
            "name": "DocVendor13",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc013",
            "description": null,
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
            "lastUpdatedOn": 1740637658000,
            "lastUpdatedOnDateTime": "2025-02-27T06:27:38Z",
            "encryptionRequired": false
        },
        {
            "id": 86,
            "name": "VendorDoc",
            "brandId": 61,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "rank": null,
            "code": "Doc100",
            "description": null,
            "images": [],
            "videos": [],
            "lastUpdatedOn": 1741171688000,
            "lastUpdatedOnDateTime": "2025-03-05T10:48:08Z",
            "encryptionRequired": false
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendorList": [
        {
            "id": 21,
            "name": "Delta",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1717833026000,
            "encryptionRequired": false
        },
        {
            "id": 32,
            "name": "Dick's Sporting Goods",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1723837313000,
            "encryptionRequired": false
        },
        {
            "id": 31,
            "name": "Marriot",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1723836103000,
            "encryptionRequired": false
        },
        {
            "id": 20,
            "name": "Points for Good",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1717833026000,
            "encryptionRequired": false
        },
        {
            "id": 22,
            "name": "Qwikzozo",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1718002449000,
            "encryptionRequired": false
        },
        {
            "id": 28,
            "name": "Qwikzozoo",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "****************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1721042314000,
            "encryptionRequired": false
        },
        {
            "id": 23,
            "name": "Sweepstakes",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1718004095000,
            "encryptionRequired": false
        },
        {
            "id": 30,
            "name": "Target",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1721722266000,
            "encryptionRequired": false
        },
        {
            "id": 27,
            "name": "test1",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "test": "********************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1721030412000,
            "encryptionRequired": false
        },
        {
            "id": 29,
            "name": "test2",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "****************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1721042619000,
            "encryptionRequired": false
        },
        {
            "id": 35,
            "name": "test5",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "****************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1727331817000,
            "encryptionRequired": false
        },
        {
            "id": 36,
            "name": "test6",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1727331838000,
            "encryptionRequired": false
        },
        {
            "id": 37,
            "name": "test7",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1727332433000,
            "encryptionRequired": false
        },
        {
            "id": 38,
            "name": "test8",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1727339906000,
            "encryptionRequired": false
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 5001,
        "message": "Vendor fetched successfully"
    },
    "vendorList": [
        {
            "id": 21,
            "name": "Delta",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1717833026000,
            "encryptionRequired": false
        },
        {
            "id": 32,
            "name": "Dick's Sporting Goods",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1723837313000,
            "encryptionRequired": false
        },
        {
            "id": 31,
            "name": "Marriot",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1723836103000,
            "encryptionRequired": false
        },
        {
            "id": 20,
            "name": "Points for Good",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1717833026000,
            "encryptionRequired": false
        },
        {
            "id": 22,
            "name": "Qwikzozo",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1718002449000,
            "encryptionRequired": false
        },
        {
            "id": 28,
            "name": "Qwikzozoo",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "****************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1721042314000,
            "encryptionRequired": false
        },
        {
            "id": 23,
            "name": "Sweepstakes",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1718004095000,
            "encryptionRequired": false
        },
        {
            "id": 30,
            "name": "Target",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1721722266000,
            "encryptionRequired": false
        },
        {
            "id": 27,
            "name": "test1",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "test": "********************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1721030412000,
            "encryptionRequired": false
        },
        {
            "id": 29,
            "name": "test2",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "****************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1721042619000,
            "encryptionRequired": false
        },
        {
            "id": 35,
            "name": "test5",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "****************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1727331817000,
            "encryptionRequired": false
        },
        {
            "id": 36,
            "name": "test6",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1727331838000,
            "encryptionRequired": false
        },
        {
            "id": 37,
            "name": "test7",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {
                "clientSecret": "************************************************"
            },
            "type": "REWARDS",
            "lastUpdatedOn": 1727332433000,
            "encryptionRequired": false
        },
        {
            "id": 38,
            "name": "test8",
            "brandId": 1,
            "enabled": true,
            "vendorTypes": null,
            "vendorDetails": {},
            "type": "REWARDS",
            "lastUpdatedOn": 1727339906000,
            "encryptionRequired": false
        }
    ]
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

# API-specific error codes

| Error Code | Description |

| --- | --- |

| 3004 | Invalid Brand ID |



`Try It!`