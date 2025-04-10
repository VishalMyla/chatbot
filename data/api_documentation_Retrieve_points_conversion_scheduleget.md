# Retrieve points conversion scheduleget

> ❗️Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

# API endpoint

{host}/v2/userGroup2/promisedPointsSchedule

# Query parameters

| Query Parameter | Description |

| --- | --- |

| primaryUserId | The primary user ID for which the promised points schedule is being requested. |

| type | The type of user group. This query parameter appears to be empty in the provided URL. |

| startDate | The start date for the date range |

| endDate | The end date for the date range. |

| getDataForAllPrograms | A boolean parameter to specify if data for all programs is needed. |

| fetchEarliestExpiryOnly | A boolean parameter to specify if only the earliest expiry data is needed. |

| programId | The ID of the program for which the promised points schedule is requested. |

| limit | The maximum number of records to return per page. |

| offset | The starting point in the list of records. |



# Response parameters

| Parameter | Description |

| --- | --- |

| entityId | ID of the entity. |

| entityType | Type of entity. |

| promisedPointsScheduleList | This is an array containing objects of promised points scheduled for the user. |

| triggerBasedPointsList | This array contains objects of points based on specific triggers or conditions. |

| warnings | This is an array that contains warning messages, if any. |

| points | The number of points either awarded or deducted based on the trigger/action |

| programId | The identifier for the specific program that's causing the trigger. |

| pointsType | The category or reason for these points. |



`Try It!`