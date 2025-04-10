# Invoke Neo Iteratively

TheInvoke-Neo-Iterativelyblock allows you to import data from aNeo APIand configure the number of times the API is invoked.

![](https://files.readme.io/c4bcb487cbb0fe30b9213793897481ca8875ad550b31069009d8a02ec6fe8215-image.png)

The following table lists the fields:

| Field | Description |

| --- | --- |

| Enter url | Select theNeo APIfrom the drop-down menu. The drop-down listsDataflowslabelled asconnectplus. |

| Authorization | Authorisation key for the API, if required. |

| NEO API METHOD | Method of the API. Supported values:GETandPOST.Note:This block supports onlyPOSTcalls that do not require any body parameters. |

| Split Response | Set the value totrueusing the drop-down to separate each array in a response. For example, if an API returns an array of objects, and each object has its own set of properties, setting the value totruewill list each array as an individual response. |

| API Iteration End Condition | Conditions for terminating the API call. You can define a custom condition for terminating the API call. |

| Max retries | Number of times the API is called. There is no limit for the number of retries. |



[Neo API](/reference/introduction-to-extension-platform)

[Dataflows](/reference/dataflows)

`connectplus`

`GET`

`POST`

`POST`

`true`

`true`

Updated29 days ago