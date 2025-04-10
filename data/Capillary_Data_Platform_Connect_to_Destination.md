# Connect to Destination

This block enables you to define the details of the v2 API that will be used for running the dataflow.  The API details are auto-filled. You must enter the API client key and secret key to initiate the API.

The table contains the fields and their descriptions.

| Field name | Description |

| --- | --- |

| Client Key | Enter the API client key. For information on creating an API client key, refer toCreating API client key and secret. |

| Client Secret | Enter the API client secret. For information on creating an API client key, refer toCreating API client key and secret. |

| API EndPoint | API endpoint. For example,/v2/customers. This field is auto-filled for the available templates. |

| API Base Url | API cluster URL of the org. For more information on cluster URLs, refer todocumentation on host URLs. This field is auto-filled. |

| OAuth Base Url | This URL is used when an API uses the OAuth for authentication and authorization, serving as the base address for the authorization server. For example: {host}/v3/oauth/token/generate. This field is auto-filled for the pre-defined templates. |

| API Method | API method. For example, POST. This field is auto-filled for the pre-defined templates. |

| Bulk Support | If set to true, allows for processing multiple records within a single JSON payload. Setting agrouping limit greater than oneindicates that the system can create bulk payloads for downstream API calls. This field is auto-filled for the pre-defined templates. |

| Request Split Path | This is for internal purposes and can be left empty. |

| Response Split Path | Applicable when Bulk spport is set to true. It is used to divide a single API response containing multiple objects into distinct parts. This is particularly useful for APIs that return a collection of results, such as successes and failures, within a single response. For example, using the expression$.result.errors.data._,$.result.success.data._groups the success data under one object and error data under another. Example response below:{"result": {"success": {"data": [{"id": "123","status": true,"message": "Customer created successfully"},{"id": "456","status": true,"message": "Order placed successfully"}]},"errors": {"data": [{"id": "789","status": false,"code": "E101","message": "Invalid address"}]}}} |

| Recoverable Error Codes | Specific error codes that indicate situations in which the system should attempt to retry the failed operation. For example, you can error codes such as - 502 Bad Gateway, 504 Gateway Timeout, 520 Unknown Error, 521 Web Server Is Down etc. |

| Parse Path Map | Lets you define expressions to parse the status message and error code from your API response, and include them in the error file. This is crucial since API responses can have varying structures for error information. This field is auto-filled for the pre-defined templates. Ex:{"status_code": "$.error.code", "error_message": "$.error.message","displayLabel": "$.error.displayLabel"} |

| Yielding Error Codes | Error codes that will be retried an unlimited number of times. This strategy is usually reserved for specific error types where the expectation is that the issue will eventually resolve without intervention, but it might take an indefinite amount of time.Example: When a "429" error (indicating that the request rate is too high) is encountered, the system configured with this strategy will retry the request indefinitely until it is successful. This is because the rate limit is expected to eventually lift, allowing the request to proceed. |

| Max Retries | Defines the maximum number of attempts to make an API request in case of failures. This field is auto-filled for the pre-defined templates. |

| Additional headers | Applicable only for certain templates. This enables the auto-approval for the request. For example, for issuing goodwill points or for tagging customers to an old transaction templates, this enables auto-approval for those requests. |



[Creating API client key and secret](/docs/api-client#creating-an-api-client-key-and-secret)

[Creating API client key and secret](/docs/api-client#creating-an-api-client-key-and-secret)

`/v2/customers`

[documentation on host URLs](/reference/apioverview#host-urls)

[grouping limit greater than one](/docs/convert-csv-to-json#step-3-grouping-limit)

```
$.result.errors.data._,$.result.success.data._
```

```
{"status_code": "$.error.code", "error_message": "$.error.message","displayLabel": "$.error.displayLabel"}
```

Error Handling

In case of any errors connecting to the destination URL, referTroubleshooting guide.

Updated16 days ago