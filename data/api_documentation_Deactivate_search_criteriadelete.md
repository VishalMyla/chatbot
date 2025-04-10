# Deactivate search criteriadelete

> 👍NotesMake sure that you have appropriate access control configured. For more information, seeaccess group documentation.Once a criteria is deactivated, you cannot reactivate it.

## 👍Notes

Notes

- Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

- Once a criteria is deactivated, you cannot reactivate it.

# API endpoint

{host}/api_gateway/cortex/v1/criteria/{id}

```
{host}/api_gateway/cortex/v1/criteria/{id}
```

# Response parameters

| Parameter | Type | Description |

| --- | --- | --- |

| id | STRING | The unique identifier of the search criteria |

| orgId | INTEGER | The organization ID associated with the search criteria |

| name | STRING | The name of the search criteria |

| entityType | STRING | The type of entity (TRANSACTION in this case) |

| fieldDefinitions | ARRAY | An array of field definitions for the search criteria |

| searchDataPolicy | OBJECT | The data retention policy and expiration details |

| active | BOOLEAN | Indicates whether the criteria is active or not |

| bulkJobStatus | STRING | The status of any bulk job associated with the search criteria |

| auditInfo | OBJECT | Information about the creation and last update of the search criteria |



`Try It!`