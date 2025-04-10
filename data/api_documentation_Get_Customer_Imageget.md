# Get Customer Imageget

> ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

Make sure you have the appropriate access control configured. For more information, seeaccess group documentation.

# API endpoint

https://{host}/v2/customers/{userId}/setImage

# Query parameter

| Query Parameter | Description |

| --- | --- |

| embed | It specifies additional data to be embedded in the API response. In this case, it is set to include the "CUSTOMERIMAGE". |

| source | It indicates the source from which the request originated. Here, the source is identified as "INSTORE". |

| accountId | It is used to specify the account ID in context, presumably the account ID of the customer to be retrieved. |



# Response parameters

| Parameter | Description |

| --- | --- |

| code | The HTTP status code of the response. |

| file | Contains information about the uploaded file. |

| file.acl | The access control level of the file. |

| file.fileHandle | The unique identifier for the file. |

| file.lastModified | The last modified date and time of the file. |

| file.latestVersion | The latest version number of the file. |

| file.name | The name of the file. |

| file.namespace | The namespace in which the file is stored. |

| file.s3Token | The S3 token for the file. |

| file.version | The version number of the file. |

| message | A human-readable message regarding the operation. |

| status | The status of the operation (true/false). |

| warnings | Any warnings that occurred during the operation. |

| errors | Any errors that occurred during the operation. |



`Try It!`