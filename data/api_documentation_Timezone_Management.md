# Timezone Management

# Timezone in Redemptions

This section provides information on how the system handles timezones when customers redeem coupons or points, and when you retrieve redemption data through the API.

| Redemption Time | Stored in DB/Time in API |

| --- | --- |

| 2021-10-22T14:04:23+7:00 | 2021-10-22 00:00:00 |

| 2021-11-10T16:27:09Z | 2021-11-10 21:57:09 |



Notes:

1. When redemption time includes a specific timezone offset (e.g., +7:00):The system stores only the dateTime is set to 00:00:00Original time information is not preserved

When redemption time includes a specific timezone offset (e.g., +7:00):

- The system stores only the date

- Time is set to 00:00:00

- Original time information is not preserved

5. When redemption time is in UTC (indicated by 'Z'):The system converts UTC time to cluster timezone. For example, if the cluster is India, it converts to  IST/UTC+5:30.Both date and time are preservedExample: 16:27:09 UTC → 21:57:09 IST

When redemption time is in UTC (indicated by 'Z'):

- The system converts UTC time to cluster timezone. For example, if the cluster is India, it converts to  IST/UTC+5:30.

- Both date and time are preserved

- Example: 16:27:09 UTC → 21:57:09 IST

# Timezone in a Transaction API response

This section provides you with information on how the system handles the timezone during a transaction request. The time in the API load can differ from the billing time based on the API (V1 or V2) used and the billing time itself.

The below table explains how the transactions are handled in different time zones. The behaviour is the same for extended fields.

| Billing time | V2 POST (Time in the V2 API request payload) | V2 GET (V2 API response) | V1 POST (Time in the V1 API request payload) | V1 GET (V1 API response) |

| --- | --- | --- | --- | --- |

| 10:00:00+07:00 (Time with UTC offset) | With the UTC offset in the billing time, the system identifies the timezone and converts it into the cluster timezone to which the org belongs)India/SG cluster - 08:30:00+05:30 (converts it to IST)EU cluster- 03:00:00+00:00 (converts it to UTC) | Returns the time stored in the database with UTC offsetIndia/SG - 08:30:00+05:30EU - 03:00:00+00:00 | The system ignores the UTC offset in the billing time and assumes that the billing time is the same as the cluster timezone to which the org belongs)India/SG - 10:00:00+05:30 (Assumes that the time in the billing time is in IST and applies a UTC offset of +05:30)EU - 10:00:00+00:00 (Assumes that the time in the billing time is in UTC and applies a UTC offset of +00:00 ) | Returns the time stored in the database without UTC offset.India/SG - 10:00:00EU - 10:00:00 |

| 10:00:00 AM (Time without any timezone offset) | India/SG cluster - 15:30:00+05:30 (The system assumes that the time in the payload is UTC time and converts it to IST)EU - 10:00:00+00:00 (The system assumes that the time in the payload is UTC time and uses the same time) | Returns the time stored in the database with UTC offsetIndia/SG cluster - 15:30:00+05:30EU cluster - 10:00:00+00:00 | India/SG cluster - 10:00:00+5:30 (The system assumes that the time in the payload is in IST and applies a UTC offset of +05:30)EU cluster - 10:00:00+0:00 (The system assumes that the time in the payload is in IST and applies a UTC offset of +00:00 ) | Returns the time stored in the database without UTC offset.India/SG cluster- 10:00:00EU cluster- 10:00:00 |



> 📘NotesThe response of the API will be similar to that of the V1 API response of the above table if you make aPOSTcall using V2 API andGETdetails using a V1 API.For system related events such as service unavailable, errors etc, the system displays the respective cluster timezone.

## 📘Notes

Notes

- The response of the API will be similar to that of the V1 API response of the above table if you make aPOSTcall using V2 API andGETdetails using a V1 API.

- For system related events such as service unavailable, errors etc, the system displays the respective cluster timezone.

## Configuration to Ignore conversion of timezone in transaction

To avoid any confusion related to timezone conversion, you can raise a ticket and enable theCONF_ORG_DISABLE_MACHINE_TIME_CONVconfiguration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. This is applicable only for V2 APIs.

`CONF_ORG_DISABLE_MACHINE_TIME_CONV`

See the below table for an example.

| Billing time | V2 POST (Time in the V2 API request payload) | V2 GET (V2 API response) |

| --- | --- | --- |

| 17:49:41+07:00 | 17:49:41 (for all clusters) | 17:49:41 (for all clusters) |

