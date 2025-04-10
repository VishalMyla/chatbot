# Generate Card/customer External IDget

This API lets you generate external IDs manually which can be tagged to a customer while registering. A unique external ID is generated every time you call this API. The maximum allowed character is 50.

When a customer is registered without an external ID, this API is called in the back end and the unique external ID is tagged to the customer automatically. However, it does not override the existing external ID.

> 👍For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

Navigate to InTouch > Settings > Miscellaneous> Registration Configuration page to:

- EnableCONF_CARD_NUMBER_GENERATION_ENABLED.

`CONF_CARD_NUMBER_GENERATION_ENABLED`

- SEnableCONF_CLIENT_V2_API_ENABLED.

`CONF_CLIENT_V2_API_ENABLED`

- Valid only for account IDs configured onSOURCE_ACCOUNTS_EXTERNALID_ENABLED.

`SOURCE_ACCOUNTS_EXTERNALID_ENABLED`

- SetCONF_CARD_CHECKSUM_DIGIT_ALGO

`CONF_CARD_CHECKSUM_DIGIT_ALGO`

- SetCONF_CARD_NUMBER_LENGTH

`CONF_CARD_NUMBER_LENGTH`

For more information and other optional configurations available, refer toExternal ID configuration.

> 📘In response,entityis the generated external ID.

## 📘

In response,entityis the generated external ID.

`entity`

# API endpoint example

https://us.api.capillarytech.com/v2/cardNumber

```
https://us.api.capillarytech.com/v2/cardNumber
```

# Response parameters

| Parameter | Description |

| --- | --- |

| entity | The external ID generated |

| warnings | Array of any warnings |



```
{
  "entity": "BUK003870381",
  "warnings": []
}
```

```
{
  "entity": "BUK003870381",
  "warnings": []
}
```

`Try It!`