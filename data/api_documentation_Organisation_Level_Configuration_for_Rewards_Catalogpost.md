# Organisation Level Configuration for Rewards Catalogpost

This API allows you to set the org's config for Rewards Catalog.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

- For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URI | api_gateway/rewards/core/v1/brand/config |

| HTTP Method | POST |

| Pagination | No |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/config

```
https://eucrm.cc.capillarytech.com/api_gateway/rewards/core/v1/brand/config
```

# Supported Configuration Values

| Config Key Name | Description |

| --- | --- |

| CONF_START_OF_THE_WEEK_FOR_ORG_RESTRICTION | To add the start of the week for the org level restrictions, this will be applied to all org level restrictions with Week configurations. The default values may be:- MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY.By default, the start day will be MONDAY. |

| CONF_SEND_REWARD_EXPIRY_NOTIFICATION_ENABLED | To enable or disable the expiry notification for rewards. If enabled, the system will send expiry notification for rewards after setting the NUMBER_OF_DAYS_BEFORE_EXPIRY. The default value may be True or False |

| CONF_SEND_EXPIRY_NOTIFICATION_FOR_REWARD_TIME | To set the time of the day to send the expiry notification for rewards.The default timing for sending the event is 16:00.(HH:MM) |

| CONF_EXT_POINTS_VENDOR | To enable third party vendor for points redemption. The default value may be True or False. |

| CONF_ENABLE_FEATURE_CATALOG_PROMOTION | To enable catalog promotion feature for a brand or organization. The default value may be True or False. |

| CONF_CATALOG_PROMOTION_BUFFER_END_TIME_MINUTES | To add buffer time in minutes to expiry date of a catalog promotion while issuing a rewardThe integer value representing minutes range from 0 to 30.(MM.) |



# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| configKeyName | String | The name of the configuration setting which you want to enable. |

| configKeyValue | Enum | The value of the configuration setting. |

| brandId | Integer | You can use theAPIand retrieve the brand ID of your brand. |

| label | String | A descriptive note or label regarding the start date of the restriction. |



[API](https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll)

```
{
    "configKeyName": "CONF_START_OF_THE_WEEK_FOR_ORG_RESTRICTION",
    "configKeyValue": "SUNDAY",
    "brandId": 47
}
```

```
{
    "configKeyName": "CONF_START_OF_THE_WEEK_FOR_ORG_RESTRICTION",
    "configKeyValue": "SUNDAY",
    "brandId": 47
}
```

```
{
    "configKeyName": "CONF_SEND_REWARD_EXPIRY_NOTIFICATION_ENABLED",
    "configKeyValue": "true",
    "brandId": 1
}
```

```
{
    "configKeyName": "CONF_SEND_REWARD_EXPIRY_NOTIFICATION_ENABLED",
    "configKeyValue": "true",
    "brandId": 1
}
```

```
{
    "configKeyName": "CONF_SEND_EXPIRY_NOTIFICATION_FOR_REWARD_TIME",
    "configKeyValue": "16:00",
    "brandId": 1
}
```

```
{
    "configKeyName": "CONF_SEND_EXPIRY_NOTIFICATION_FOR_REWARD_TIME",
    "configKeyValue": "16:00",
    "brandId": 1
}
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| success | Boolean | Indicates if the API call was successful. |

| code | Integer | A code representing the API status. |

| message | String | A description of the API call. |

| configKeyName | String | The name of the configuration setting. |

| configKeyValue | String | The value assigned to the configuration setting. |

| brandId | Integer | You can use theAPIand retrieve the brand ID of your brand. |

| label | String | A descriptive label explaining the configuration setting, its implications, and the context where it applies. |



[API](https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll)

```
{
    "status": {
        "success": true,
        "code": 3008,
        "message": "Org config updated successfully"
    },
    "configList": [
        {
            "configKeyName": "CONF_START_OF_THE_WEEK_FOR_ORG_RESTRICTION",
            "configKeyValue": "TUESDAY",
            "brandId": null,
            "label": "Add the start of the week for the org level restrictions, this will be applied to all org level restrictions with Week configurations"
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 3008,
        "message": "Org config updated successfully"
    },
    "configList": [
        {
            "configKeyName": "CONF_START_OF_THE_WEEK_FOR_ORG_RESTRICTION",
            "configKeyValue": "TUESDAY",
            "brandId": null,
            "label": "Add the start of the week for the org level restrictions, this will be applied to all org level restrictions with Week configurations"
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 3008,
        "message": "Org config updated successfully"
    },
    "configList": [
        {
            "configKeyName": "CONF_SEND_REWARD_EXPIRY_NOTIFICATION_ENABLED",
            "configKeyValue": "true",
            "brandId": 1,
            "label": "Key to enable or disable the expiry notification for rewards. If enabled, the system will send expiry notification for rewards after setting the NUMBER_OF_DAYS_BEFORE_EXPIRY."
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 3008,
        "message": "Org config updated successfully"
    },
    "configList": [
        {
            "configKeyName": "CONF_SEND_REWARD_EXPIRY_NOTIFICATION_ENABLED",
            "configKeyValue": "true",
            "brandId": 1,
            "label": "Key to enable or disable the expiry notification for rewards. If enabled, the system will send expiry notification for rewards after setting the NUMBER_OF_DAYS_BEFORE_EXPIRY."
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 3008,
        "message": "Org config updated successfully"
    },
    "configList": [
        {
            "configKeyName": "CONF_SEND_EXPIRY_NOTIFICATION_FOR_REWARD_TIME",
            "configKeyValue": "16:00",
            "brandId": 1,
            "label": "Key to set the time of the day to send the expiry notification for rewards."
        }
    ]
}
```

```
{
    "status": {
        "success": true,
        "code": 3008,
        "message": "Org config updated successfully"
    },
    "configList": [
        {
            "configKeyName": "CONF_SEND_EXPIRY_NOTIFICATION_FOR_REWARD_TIME",
            "configKeyValue": "16:00",
            "brandId": 1,
            "label": "Key to set the time of the day to send the expiry notification for rewards."
        }
    ]
}
```

```
{
    "status": {
        "success": false,
        "code": 3011,
        "message": "Brand or config key not found"
    },
    "configList": [
        {
            "configKeyName": "CONF_SN_ENABLED",
            "configKeyValue": "true",
            "brandId": 1,
            "label": null
        }
    ]
}
```

```
{
    "status": {
        "success": false,
        "code": 3011,
        "message": "Brand or config key not found"
    },
    "configList": [
        {
            "configKeyName": "CONF_SN_ENABLED",
            "configKeyValue": "true",
            "brandId": 1,
            "label": null
        }
    ]
}
```

# API- specific errors

| Error code | Description |

| --- | --- |

| 3004 | Brand not found. Pass a valid brand identifier. |

| 3011 | Brand or config key is incorrect |



`Try It!`