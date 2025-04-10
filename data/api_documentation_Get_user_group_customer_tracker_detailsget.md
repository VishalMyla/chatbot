# Get user group customer tracker detailsget

# API endpoint

{host}/v2/customers/userEntityTrackers?{query parameters}

Example:https://crm-nightly-new.cc.capillarytech.com/v2/customers/userEntityTrackers?type=USERGROUP2&identifierType=id&identifierValue=93257&source=INSTORE

```
https://crm-nightly-new.cc.capillarytech.com/v2/customers/userEntityTrackers?type=USERGROUP2&identifierType=id&identifierValue=93257&source=INSTORE
```

# Query parameters

| Parameter | Type | Description |

| --- | --- | --- |

| type | string | Type of entity tracker. In this case, it is always USERGROUP2. |

| identifierType | string | Type of identifier. |

| identifierValue | string | Value of the identifier. |

| source | string | Source on which the customer is available. |



# Response parameters

| Parameter | Description |

| --- | --- |

| pagination | Pagination details for the data. |

| data | Array containing tracked entity data. |

| id | Unique identifier for the tracked entity. |

| name | Name of the tracked entity. |

| conditionId | Identifier for the condition associated with the tracker. |

| value | Value associated with the tracker. |

| updatedOn | Date when the tracker was last updated. |

| conditionName | Name of the associated condition. |

| periodStartDate | Start date of the tracking period. |

| periodEndDate | End date of the tracking period. |

| warnings | Array containing warning messages. |

| errors | Array containing error messages. |



`Try It!`