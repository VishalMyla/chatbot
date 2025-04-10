# Authentication configurations

# Enable MFA password flow

Below are the configurations for the password flow in MFA.

| Configuration | Description | Default value | Applicability(MFA/Primary flow - First factor authentication) |

| --- | --- | --- | --- |

| IS_MFA_PASSWORD_ENABLED | Determines if the password flow in MFA is enabled | False | MFA |

| MFA_PASSWORD_REGEX | System verifies the user-entered password against the password in this config. |  | MFA |



Note:The above two configurations are independent and must be enabled separately.

# Configuring validity for the key

For security purposes, you can configure a validity period for thegenerated key while validating the OTP. This prevents a user session from remaining active indefinitely even after they log out.

> 📘NoteTo enable these configurations, you need to raise a ticket. The turnaround time is 5 days.

## 📘Note

Note

To enable these configurations, you need to raise a ticket. The turnaround time is 5 days.

| Configuration | Description | Default value | Applicability(MFA/Primary flow - First factor authentication) |

| --- | --- | --- | --- |

| CONF_ENABLE_EXPIRY_BASED_KEY | Set the value to True to enable the configuration. | False (Disabled) | Both |

| CONF_KEY_EXPIRY_IN_MINUTES | Defines the expiry time. | 60 minutes | Primary |

| CONF_KEY_EXPIRY_MFA_IN_MINUTES | Defines the expiry time for the key generated for the MFA token | 60 minutes | MFA |



# Defining maximum OTP retry attempts

You can define the below configurations and set the maximum OTP/password retry attempts. If the user attempts more than the defined number, the account gets locked for that particular session. To restrict the user from starting a new session and reattempting the OTP or password, it is recommended toactivate the account locking feature.

| Configuration | Description | Default value | Applicability(MFA/Primary flow - First factor authentication) |

| --- | --- | --- | --- |

| CONF_MAX_OTP_RETRY_COUNT | Defines the maximum number of allowed attempts to enter the primary OTP. | 5 | Primary |

| CONF_MAX_PASSWORD_RETRY_COUNT | Defines the maximum allowed attempts to enter the primary password. | 5 | Primary |

| CONF_MFA_MAX_OTP_RETRY_COUNT | Defines the maximum allowed attempts to enter the MFA OTP. | 5 | MFA |

| CONF_MFA_MAX_PASSWORD_RETRY_COUNT | Defines the maximum allowed attempts to enter the MFA password | 5 | MFA |



# Enable API encryption

You can enable encryption for particular APIs using this configuration. Enabling the configuration safeguards the auth-engine from being exploited by triggering OTPs multiple times. If the encryption logic is enabled for a brand,  the APIs to generate OTP have to go through the encryption flow.

| Configuration | Description | Default value | Applicability(MFA/Primary flow - First factor authentication) |

| --- | --- | --- | --- |

| CONF_ENABLE_ENCRYPTION | To enable the encryption. | False (Disabled) | Both |

| CONF_ENCRYPTION_PUBLIC_KEY | To store the org's public key. The keys are encoded in Base64 format and are constant and do not change. |  | Both |

| CONF_ENCRYPTION_PRIVATE_KEY | To store the org's private key. The keys are encoded in Base64 format and are constant and do not change. |  | Both |

| CONF_ENCRYPTION_VALID_IN_SECONDS | To define the time window during which it considers requests as valid. | 120 seconds | Both |

| CONF_ENCRYPTION_ENDPOINTS | To define the API endpoints for which the payload needs to be encrypted. You can encrypt the payload of the APIsotp/generate(OTP) andmfa/otp/generate(MFA_OTP) API | "" | Both |



`otp/generate`

`mfa/otp/generate`

# Account locking feature

You can configure the account-locking feature to lock a user account after several defined unsuccessful attempts to enter the correct OTP. For example, if the OTP maximum attempt is defined as five and the user enters incorrect OTPs more than five times, you can configure the account locking in such a way that the account gets locked for a defined time. The account unlocks after thespecified number.

| Configuration | Description | Default value | Applicability(MFA/Primary flow - First factor authentication) |

| --- | --- | --- | --- |

| CONF_ENABLE_ACCOUNT_LOCKING | Enables the account locking feature for the OTP and password. | False | Primary |

| CONF_LOCK_PERIOD_IN_MINUTES | Defines the duration of account locking after entering the OTP/password incorrectly for the specified number of times. The maximum value allowed is 43,200 minutes. | 30 minutes | Primary |

| CONF_ENABLE_ACCOUNT_LOCKING_MFA | Enables the account locking feature for the MFA OTP/password. | False | MFA |

| CONF_MFA_LOCK_PERIOD_IN_MINUTES | Defines the duration of account locking after entering the MFA OTP/password incorrectly for the specified number of times. The maximum value allowed is 43,200 minutes. | 30 minutes | MFA |

| CONF_INCORRECT_ATTEMPT_INTERVAL | Defines the time interval after which any subsequent attempt is considered a new one, resetting the incorrect OTP/password counter. For more information, refer to the detailed explanation below.Note:This is applicable for both primary/MFA OTP and primary/MFA passwords. | 30 minutes | Both |



# General configurations

Below are some general configurations related to the OTP and token generation in MFA and primary flows.

| Configuration | Description | Default value | Applicability(MFA/Primary flow - First factor authentication) |

| --- | --- | --- | --- |

| CONF_TOKEN_SESSION_EXPIRY_MINUTES | Defines the expiry time of the session created while generating the token in the primary flow | 15 minutes | Primary |

| CONF_MFA_TOKEN_SESSION_EXPIRY_MINUTES | Defines the expiry time of the session created while generating the MFA token in the MFA flow | 15 minutes | MFA |

| CONF_MFA_TOKEN_EXPIRY_IN_MINUTES | Defines the validity of the token created in MFA flow. | 15 minutes | MFA |

| CONF_MFA_SESSION_EXPIRY_MINUTES | Defines the validity of the MFA session. | 15 minutes | MFA |

| CONF_OTP_LENGTH | Defines the length of the One-time password | 6 | Both |

| CONF_REGENERATE_TOKEN | If enabled, a key is generated after validating the OTP/password. This key is used to regenerate the token from the primary flow. | True | Primary |

| CONF_REGENERATE_MFA_TOKEN | If enabled, a key is generated after validating the OTP/password. This key is used to regenerate the token from the MFA flow. | True | MFA |

| MFA_ROLE | Defines the user role for both MFA and primary flows.If the user is not enrolled for MFA, the role is set to USER.If enrolled for MFA, the role is set to MFA_PENDING.After the MFA process, the role is set to USER. | DEFAULT_MFA_ROLE | Both |

| CONF_FORCED_MFA | Defines if all users need to be forced into the MFA role.If set to True, all the users are set to MFA_PENDING and moved to the USER role after the MFA process. | False | Both |

| CONF_EXTERNAL_ID_LOGIN_ENABLED | If enabled, a user is fetched from the Intouch portal if not in the auth-engine. | False | Primary |

| CONF_OTP_SEND_FOR_EXTERNAL_ID | Defines where the OTP is to be sent. Possible values: mobile or email. | Mobile | Both |

| CONFIG_REJECT_NON_CF_CALLS | Enforces validation for CloudFront calls during OTP generate requests.If enabled, the system expects a specific header during the OTP generation call. If the header is missing, the request to generate OTP is rejected. | False | Both |

| CONF_SKIP_OTP_VALIDATE | If enabled, disables the requirement for OTP validation during the MFA password set-up. | False | MFA |

| CONF_SKIP_OTP_VALIDATE_RESET | If enabled, disables the requirement for OTP validation during the MFA password reset. | False | MFA |

| CONF_AUTO_FILL_2ND_FACTOR_IDENTIFIER | If enabled, the identifier type and value are automatically populated for each API of the MFA flow. This occurs for the particular session for which the token is generated from the primary flow. | False | MFA |



## Configuring incorrect attempt time interval

> ❗️AttentionMake sure that you define a time interval so that the user does not misuse the OTP/password attempts. For example, if you define one minute, the user can wait for one minute after an incorrect OTP/password attempt and start fresh OTP/password attempts

## ❗️Attention

Attention

Make sure that you define a time interval so that the user does not misuse the OTP/password attempts. For example, if you define one minute, the user can wait for one minute after an incorrect OTP/password attempt and start fresh OTP/password attempts

This value defines the time interval after which, any subsequent attempt is considered a new one, resetting the incorrect OTP/password counter. The OTP/password attempts within this time interval are counted together.ExampleConsider that the value is set as five minutes.

- User A attempts to log in but enters the wrong OTP.

- The system records this as the first incorrect attempt and starts a 5-minute countdown timer.Within 5 minutes, User A attempts to log in again but enters the wrong OTP once more.

- Since the second attempt is made within the defined interval of five minutes, the system continues to consider the attempts made within this 5-minute window as part of the same attempt count.

- If User A makes another incorrect attempt after the 5-minute interval has elapsed, it will be considered as the first incorrect attempt again, and the process repeat.

# Integrating WhatsApp and Zalo for OTP communication

You can enable and configure the below configs to integrate WhatsApp and Zalo to send OTPs.

| Configuration | Description | Default Value | Applicability(MFA/Primary flow - First factor authentication) |

| --- | --- | --- | --- |

| CONF_MOBILE_SUB_CHANNEL | Channel to send the primary OTP to the user. Values: WHATSAPP or ZALO. | - | Primary |

| CONF_MOBILE_SUB_CHANNEL_PROPERTIES | Properties for each subchannel (WHATSAPP and ZALO) in JSON format. The message will be sent in this format. | {"WHATSAPP": { "template": "OTP generated for whatsapp is {otp}" },"ZALO": { "template": "OTP generated for zalo is {otp}" }} | Primary |

| CONF_MFA_MOBILE_SUB_CHANNEL | Channel to send MFA OTP to the user. Values: WHATSAPP or ZALO. | - | MFA |

| CONF_MFA_MOBILE_SUB_CHANNEL_PROPERTIES | Properties for each subchannel (WHATSAPP and ZALO) in JSON format. The message will be sent in this format. | {"WHATSAPP": { "template": "OTP generated for whatsapp is {otp}" },"ZALO": { "template": "OTP generated for zalo is {otp}" }} | MFA |

| CONF_FALLBACK_CHANNELS | Specifies the fallback communication channel to send the OTP.  Supported values: any channel except the defined primary subchannel. SeeFallback channelfor more details. | - | Both |

| CONF_FALLBACK_CHANNELS_PROPERTIES | Defines the properties for each fallback channel (WHATSAPP, ZALO, SMS) in JSON format. | {"WHATSAPP": { "template": "OTP generated for whatsapp is {otp}" },"ZALO": { "template": "OTP generated for zalo is {otp}" },"SMS": { "template": "OTP generated for sms is {otp}" }} | Both |



[Fallback channel](/reference/authentication-configurations#fallback-channel)

## Fallback channel

A fallback channel is used to skip the defined primary subchannel and send the OTP to the communication channel defined in this config. If you have defined a fallback channel and if you usefallbackChannel={comm channel}as a query parameter in theOTP generate APIURL, the system ignores the defined sub-channel and sends the OTP to the channel defined in the fallback channel configuration. For example,

`fallbackChannel={comm channel}`

if CONF_MOBILE_SUB_CHANNEL = WHATSAPP,

CONF_FALLBACK_CHANNELS = SMS, and

OPT generate URL =https\://{host}/auth/v1/web/otp/generate?fallbackChannel=SMS

```
https\://{host}/auth/v1/web/otp/generate?fallbackChannel=SMS
```

the system always sends the OTP using SMS as the communication channel.

This feature can be used to send OTP to a different channel if the sub-channel is not reachable.

## Error codes

| Error code | Solution |

| --- | --- |

| 1601 Fallback Channel needs identifier mobile | Ensure 'mobile' is passed in the body if fallback channel is set as mobile. |

| 1602 Fallback Channel needs identifier email | Ensure 'email' is passed in the body if fallback channel is set, instead of query params. |

| 1603 Channel is not configured properly, please check and try again | Verify subchannel/fallback channel configuration is valid. |

