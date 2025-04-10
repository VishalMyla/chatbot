# Retrieve points expiry schedule of a groupget

> ❗️Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

# API endpoint

{host}/v2/userGroup2/pointsExpirySchedule

```
{host}/v2/userGroup2/pointsExpirySchedule
```

# Query parameters

| Query Parameter | Description |

| --- | --- |

| externalId | The external identifier for the user group. |

| type | The type of the user group. |

| startDate | The start date for the points expiry schedule. |

| endDate | The end date for the points expiry schedule. |

| getDataForAllPrograms | A boolean indicating whether to get data for all programs or not. |

| fetchEarliestExpiryOnly | A boolean indicating whether to fetch only the earliest expiry data. |

| limits | The maximum number of records to return per page. |

| offsets | The starting point in the list of records. |



# Response parameters

| Parameter | Description |

| --- | --- |

| expirySchedules | This is an array containing objects which each represent a set of points scheduled to expire. |

| points | The number of points that are set to expire. |

| expiryDate | The date when the points will expire. |

| programId | The identifier of the program to which the points are attached. |

| pointsType | The type of points that are set to expire. |

| expiryType | The type of expiry, indicating how the expiry date was determined. |

| warnings | An array of warning messages, if any were generated during the request. |



`Try It!`