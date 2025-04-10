# API Request Block

The API Request Block allows you to make API calls within a dataflow. You can configure it by specifying the HTTP method, API endpoint, headers, query, body, and path parameters. The methods supported are GET, POST, PUT, DELETE, and PATCH.

# Example Scenario

RequirementConsider a scenario where, during the creation of adataflow, you need to retrieve customer details using theGet Customer DetailsAPI.

SolutionYou can add an API Request Block with the following details.

- Method: GET

- URL:https://{host}/v2/customers/lookup/customerDetails

```
https://{host}/v2/customers/lookup/customerDetails
```

- Query Parameters:Key: embedValue: points, mlp

- Key: embed

- Value: points, mlp

# Configuring the API Request Block

To configure the API Request block, perform the following:

1. From the dataflow canvas, click on the connector.

2. Select theAPI Requestblock from the pop-up window.

3. In theBlock namesection, enter the block name.Note: Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

4. In theMethodsection, select a method from the drop-down menu. The available methods are GET, POST, PUT, DELETE, and PATCH.

5. In theURLsection, enter the API URL.Syntax:https://{host}/{URL}Example:https://{host}/v2/customers/lookup/customerDetails

`https://{host}/{URL}`

```
https://{host}/v2/customers/lookup/customerDetails
```

6. In theQuery Parameterssection, enter the key and its corresponding value. The entries into theKeyand theValuefields depend on the API parameters.Example: For the API endpointhttps://{host}/v2/customers/lookup/customerDetails, some of the query parameters aresource,embed, andidentifierName. The query parameters are set asKey, and their corresponding values are provided asValue.Consider the parameterembed. Some possible values forembedarepoints,subscriptions, andmlp. So, if theKeyisembed, theValuecan bepoints,subscriptions, ormlp.

```
https://{host}/v2/customers/lookup/customerDetails
```

`source`

`embed`

`identifierName`

`embed`

`embed`

`points`

`subscriptions`

`mlp`

`embed`

`points`

`subscriptions`

`mlp`

7. If applicable, in thePath Parameterssection, enter theKeyand its correspondingValue. The entries into theKeyand theValuefields depend on the API parameters.Example: For the API endpoint,https://{host}/api_gateway/loyalty/v1/programs/{programs}/promotions/{promotions}/get, the path parameters areprogramandpromotion. Here,programandpromotionare set asKey, and their respective values should be provided in theValuesection.

```
https://{host}/api_gateway/loyalty/v1/programs/{programs}/promotions/{promotions}/get
```

`program`

`promotion`

`program`

`promotion`

8. If applicable, in theHeaderssection, enter theKeyand its correspondingValue. For more information on headers, seeHeader Management in Neo.

9. Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

10. ClickDone.

![Configuring API Request block](https://files.readme.io/2723631b86d71f8c1f3dc293cd0438826924f4a8db684c94f2f5e3ff9f0c8423-13.02.2025_19.48.10_REC_configuring_API_Request.gif)

Configuring API Request block

## Header Management in Neo

Request headers are key-value pairs in an HTTP request that provide essential information about the request context. They help the server understand how to process the request and respond appropriately.

Below is a list of headers available in Neo. Additionally, you can create custom headers according to your requirements.

| Key | Description | Possible Values & Default Value | Modifiable in  the dataflow |

| --- | --- | --- | --- |

| Content-Type | The Content-Type header specifies the format of the request or response body. It tells the server or client how to process the transmitted data. | Default: application/json | Yes |

| Accept-Encoding | The Accept-Encoding header informs the server about the compression methods supported by the client. This helps reduce the response size and speeds up data transfer. | Default: gzip, deflate, br | No |

| User-Agent | The User-Agent header identifies the API client for the server. It helps the server customize responses based on the client’s software, operating system, or device type. | Default: neo | No |

| Referrer | A header that indicates the source of a request. It helps Neo identify where the request originates. | URL of the Neo dataflow that is triggered. | No |

| Authorization | Applicable for API requests that come directly from POS terminal to the Capillary Server.TheAuthorization headervalue is constructed using the below format:Basic <Base64 encoded (username:md5(password))> | If the incoming request to the dataflow includes a value, Neo sets the header with that value. If no value is provided, the header is excluded. | Modifiable in a hierarchical organization using theOrgContextSwitchblock to switch the dataflow execution context from the parent organization to the child organization. |

| x-cap-api-oauth-token | A custom authentication header for Capillary internal APIs. Applicable for POS server-to-server integration, FTP server-to-server integration, Server-to-server custom integration and Prebuilt server-to-server integrations.OAuthtoken generated using the API key and secret. | If the incoming request to the dataflow includes a value, Neo sets the header with that value. If no value is provided, the header is excluded. | Modifiable in a hierarchical organization using theOrgContextSwitchblock to switch the dataflow execution context from the parent organization to the child organization. |

| x-cap-api-auth-key | A custom authentication header for Capillary internal APIs. It adds an extra security layer to verify API requests and ensures that only authorized clients can access Capillary’s services. | If the incoming request to the dataflow includes a value, Neo sets the header with that value. If no value is provided, the header is excluded. | Modifiable in a hierarchical organization using theOrgContextSwitchblock to switch the dataflow execution context from the parent organization to the child organization. |

| x-cap-api-auth-org-id | A custom authentication header for Capillary internal APIs. It identifies the organization making the API request. | If the incoming request to the dataflow includes a value, Neo sets the header with that value. If no value is provided, the header is excluded. | Modifiable in a hierarchical organization using theOrgContextSwitchblock to switch the dataflow execution context from the parent organization to the child organization. |

| x-cap-neo-block-log-level | A custom header for Capillary internal APIs that defines the log level for the Neo platform, similar to the logger in the Script block. Logs are generated according to the specified level. | debug, info, warn, errorDefault: Debug | Yes |

| x-cap-neo-debug-enabled | A custom header for Capillary internal APIs, when set totrue, captures platform logs from all services processing the request, not just Neo. | True or falseDefault: False | YesYou can also use the Dev Console to set or change the value of this header. |

| x-cap-neo-dag-scope | A custom header in Capillary’s Neo platform that defines the scope of execution. | Org, global, parentDefault: org | Yes |

| x-cap-api-attribution-entity-code | A custom header for Capillary internal APIs used to specify the code associated with a particular entity type. | If the value is in the incoming request, Neo uses it. If not, Neo ignores it. However, setting a value in theblock propertiesoverrides the request value. | Yes |

| x-cap-api-attribution-entity-type | A custom header for Capillary internal APIs that specifies the type of entity posting the data. | If the value is in the incoming request, Neo uses it. If not, Neo ignores it. However, setting a value in theblock propertiesoverrides the request value. | Yes |

| x-cap-request-id | A custom header that uniquely identifies each request. The system uses this header for tracking and logging. This is applicable for Capillary internal APIs. | If the value is in the incoming request, Neo uses it. If not, Neo ignores it. However, setting a value in theblock propertiesoverrides the request value. | Yes |

| x-cap-direct-replay | A custom header that determines whether the system processes the request synchronously or asynchronously. This is applicable for Capillary internal APIs. | If the value is in the incoming request, Neo uses it. If not, Neo ignores it. However, setting a value in theblock propertiesoverrides the request value. | Yes |



[Authorization header](/reference/basic-authentication#using-authorization-header)

```
Basic <Base64 encoded (username:md5(password))>
```

[OAuth](/docs/api-client#oauth-authentication)

[block properties](/docs/dataflows#field-values-in-a-block-block-properties)

[block properties](/docs/dataflows#field-values-in-a-block-block-properties)

[block properties](/docs/dataflows#field-values-in-a-block-block-properties)

[block properties](/docs/dataflows#field-values-in-a-block-block-properties)

Updated6 days ago