# Issue Validation Code (to redeem points)get

Before making points/redeem API call, you need to validate the customer by issuing validation code to the registered mobile number/email id.

This API allows you to issue a dynamic validation code to the customer’s registered mobile number/email id which is required to pass while redeeming points. The validation code is valid only for a specific time period post which it expires automatically. If you try to issue validation code within the validity period, same code will be issued again.

The validity period and communicate via is set on theOTPConfigurationspage ofInTouch > Settings > Organization Setup

- OTP code validity period:The validity of the validation code in minutes

- Communicate OTP Via:Mode of sending the validation code, email/sms/both

> 📘The validation code is issued either to mobile number, or email id or both, based on the configuration set on the page InTouch > Settings > Organization Setup > OTPConfigurations

## 📘

The validation code is issued either to mobile number, or email id or both, based on the configuration set on the page InTouch > Settings > Organization Setup > OTPConfigurations

`Try It!`