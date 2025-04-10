# Enable or Disable a Vendorput

A vendor is an external third-party brand you can use to fulfil your rewards. This API allows you to enable or disable a vendor.

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

| URI | /api_gateway/rewards/core/v1/vendor/{vendorId}/status/{action}/brand/{brandId} |

| HTTP method | PUT |

| Pagination | NA |

| Rate limit | NA |

| Batch support | NA |



# API endpoint example

Enabling a vendor:https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/5/status/enable/brand/3

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/5/status/enable/brand/3
```

Disabling a vendor:https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/5/status/disable/brand/3

```
https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/5/status/disable/brand/3
```

# Path parameters

| Parameter | DataType | Description |

| --- | --- | --- |

| vendorId | long | Unique identifier of the vendor. |

| brandId | long | Unique identifier of the brand. |

| action | Enum | Enable or disable the vendor. Supported values:enable: enable the vendor.disable: disable the vendor |



`enable`

`disable`

# Response body

```
{
    "status": {
        "success": false,
        "code": 5007,
        "message": "Vendor already exists"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 5007,
        "message": "Vendor already exists"
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 5006,
        "message": "Vendor status updated successfully"
    }
}
```

```
{
    "status": {
        "success": true,
        "code": 5006,
        "message": "Vendor status updated successfully"
    }
}
```

# Response parameters

| Parameter | Description |

| --- | --- |

| status | Object containing details about the status of the request. |

| - success | Indicates whether the request was successful.true: Request was successful.false: Request was unsuccessful. |

| - code | Status code of the request. |

| - message | Status message of the request. |



`true`

`false`

# API error codes

| Code | Description | Reason |

| --- | --- | --- |

| 3004 | Brand not found | brandIdprovided is invalid. |



`brandId`

`Try It!`