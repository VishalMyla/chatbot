# Badges

Badges are a visual form of recognition used within loyalty programs to acknowledge customers for their progress, specific actions, or achievements. They serve as a means of gamification, instilling a sense of pride and accomplishment within users, reinforcing targeted behaviors, and enhancing engagement.

# Supported fields and objects

| Object | Field Name | Description | Mandatory/Optional |

| --- | --- | --- | --- |

| General | orgId | Unique ID associated with the brand. | Mandatory |

|  | id | Unique id of the badge. | Mandatory |

|  | name | Name for the badge. | Mandatory |

|  | description | Detailed description of the badge. | Optional |

|  | startOn | Start date of the badge.Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ, where:- YYYY: Year with four digits (e.g., 2024)- MM: Month with two digits (01 for January, 02 for February, and so on)- DD: Day with two digits (01 to 31)- T: Separator between date and time- HH: Hour with two digits in 24-hour format (00 to 23)- MM: Minutes with two digits (00 to 59)- SS: Seconds with two digits (00 to 59)- SSS: Milliseconds with three digits (000 to 999)- Z: Indicates that the timestamp is in UTC (Coordinated Universal Time) timezone | Mandatory |

|  | expiresOn | Expiry of the badge.Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ, where:- YYYY: Year with four digits (e.g., 2024)- MM: Month with two digits (01 for January, 02 for February, and so on)- DD: Day with two digits (01 to 31)- T: Separator between date and time- HH: Hour with two digits in 24-hour format (00 to 23)- MM: Minutes with two digits (00 to 59)- SS: Seconds with two digits (00 to 59)- SSS: Milliseconds with three digits (000 to 999)- Z: Indicates that the timestamp is in UTC (Coordinated Universal Time) timezone | Mandatory |

|  | active | Activation flag on top of status of the badge. | Mandatory |

| Earned Badge Expiry | expiryType | Defines how the badge expiry is calculated. | Mandatory |

|  | type | For ABSOLUTE expiryType. |  |

|  | expiresOn | For FIXED_DATE type. |  |

|  | expireWithBadgeMeta | For WITH_BADGE_META type. |  |

|  | relativeExpiryType | For RELATIVE expiryType. |  |

|  | value | Number of days/weeks/months for RELATIVE expiryType. |  |

| Issued Badge Expiry | Same as Earned Badge Expiry | Same structure as Earned Badge Expiry. | Mandatory |

| Customer Constraints | constraintType | Type of customer constraint. | Optional |

|  | maxEarnLimit | For CUSTOMER_BADGE_FIXED_VALUE. |  |

|  | maxEarnForDays | For CUSTOMER_BADGE_ROLLING_WINDOW. |  |

|  | rollForDays | Rolling window in days. |  |

|  | maxEarnForWeeks | Maximum earn for weeks. |  |

|  | rollForWeeks | Rolling window in weeks. |  |

|  | maxEarnForMonths | Maximum earn for months. |  |

|  | rollForMonths | Rolling window in months. |  |

| Badge Constraints | constraintType | Type of badge constraint. | Optional |

|  | maxEarnLimit | For BADGE_FIXED_VALUE. |  |

|  | rollType | For BADGE_ROLLING_WINDOW. |  |

|  | rollValue | Rolling value for BADGE_ROLLING_WINDOW. |  |

| Images | name | Name of the badge image. | Optional |

|  | fileSvcHandle |  | Optional |

|  | url |  | Optional |

|  | tag | Tag for image state. | Optional |

| Ownership | restrictedToOwners | Defining an owner for the badge is mandatory. | Mandatory |

|  | Claims | Modules that have claimed the badge and the reference ID for the module. | Optional |

| Benefits | benefitType | Type of benefit linked to the badge. | Optional |

|  | seriesId | Required if benefitType is COUPON. |  |

| Tags | name | Name of the custom field. | Optional |

|  | value | Value of the custom field. | Optional |

