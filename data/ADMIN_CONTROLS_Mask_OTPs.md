# Mask OTPs

When enabled, OTPs will be hidden in the following GET API calls:

- v1.1/customer/interactions

- v2/customers/interactions

![](https://files.readme.io/feaf34a-SMS.png)

Simultaneously, you have the option to configure it in a manner where users with specific access privileges can still access and view the OTPs. In such cases, an internal APIv2/internal/customers/interactionsis employed.

`v2/internal/customers/interactions`

Updatedover 1 year ago