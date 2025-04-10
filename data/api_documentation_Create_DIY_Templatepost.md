# Create DIY Templatepost

This API creates a DIY template structure using theworkspace IDandblock names.

# API endpoint example

https://uscrm.connectplus.capillarytech.com/api/workspaces/209/dataflows/diy

# Prerequisites

- Authentication: Access to Connect+

- Keep the Connect+ UI open

- Workspace ID

# Request path parameter

| Field Name (Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| workspaceID* | Integer | Workspace ID where the template is created. |



# Request body parameter

> 🚧Consider the following when preparing the payload:The first block must be a source block that retrieves or pulls data from an FTP or SFTP location. If the first block is not a source block or the blocks are not properly connected, the template is created successfully but becomes unusable.TheblockOrderparameter determines the sequence, defines the connection between blocks and controls the flow of the template. If the order of the blocks is not logical, the template will not function as required.The Trigger is automatically inserted and does not need to be a part of the payload.

## 🚧Consider the following when preparing the payload:

Consider the following when preparing the payload:

- The first block must be a source block that retrieves or pulls data from an FTP or SFTP location. If the first block is not a source block or the blocks are not properly connected, the template is created successfully but becomes unusable.

- TheblockOrderparameter determines the sequence, defines the connection between blocks and controls the flow of the template. If the order of the blocks is not logical, the template will not function as required.

`blockOrder`

- The Trigger is automatically inserted and does not need to be a part of the payload.

| Field Name (Parameters marked with * are mandatory) | Data Type | Description |

| --- | --- | --- |

| name* | String | Name of the template being created. You can name the template as per your requirement. |

| blockList* | Array | Array containing the details of the blocks or processors. |

| blockName* | String | Name of the block in the template. You can name the block as per your requirement. |

| blockType* | String | Defines the type of process the block runs. You cannot change theblockType. - TheblockTypein the request body matches thenameparameter in theGet Processorresponse. If theblockTypeparameter does not match thenameparameter from Get Processor, an error occurs.Example: Thesftp_pullblock matches thenameparameter from the GET Process API.Note: An error occurs if theblockTypedoesn't match thenameparameter from Get Processor API. |

| blockOrder* | String | Specifies the block creation order. - The order mentioned in the parameterblockOrderdecides the connection between one block to another. TheblockOrderof the source or first block is zero.Example: Thesftp_pullblock is a source block, so itsblockOrderis zero. |



`blockType`

`blockType`

`name`

[Get Processor](/reference/post-create-api-diy-template-connectplus)

`blockType`

`name`

`sftp_pull`

`name`

`blockType`

`name`

`blockOrder`

`blockOrder`

`sftp_pull`

`blockOrder`

```
{
  "name": "DIYDEMONEO_TESTDOC",
  "blockList": [
    {
      "blockName": "Connect-to-source",
      "blockType": "sftp_pull",
      "blockOrder": 0
    },
    {
      "blockName": "Transform-Data",
      "blockType": "csv_json_neo_transformer",
      "blockOrder": 1
    },
    {
      "blockName": "Neo-Transformer",
      "blockType": "neo_transformer",
      "blockOrder": 2
    },
    {
      "blockName": "Connect-to-Destination",
      "blockType": "retro_destination",
      "blockOrder": 3
    }
  ]
}
```

```
{
  "name": "DIYDEMONEO_TESTDOC",
  "blockList": [
    {
      "blockName": "Connect-to-source",
      "blockType": "sftp_pull",
      "blockOrder": 0
    },
    {
      "blockName": "Transform-Data",
      "blockType": "csv_json_neo_transformer",
      "blockOrder": 1
    },
    {
      "blockName": "Neo-Transformer",
      "blockType": "neo_transformer",
      "blockOrder": 2
    },
    {
      "blockName": "Connect-to-Destination",
      "blockType": "retro_destination",
      "blockOrder": 3
    }
  ]
}
```

# Response parameters

| Field | Data Type | Description |

| --- | --- | --- |

| name | String | Name of the template. |

| uuid | String | Universally unique identifier (UUID) of the template. |

| blocks | Array | Array contains the details of the created blocks. |

| - blockTypeId | Integer | Identifies the unique ID of the block type. |

| - name | String | Refers to the block's name. |

| - type | String | Specifies the type of block used in the template |

| - hide | String | Determines the visibility of the block. |

| - order | Integer | The block's order in the template. |

| - fields | Array | Array lists the details of the fields in the block. |

| -- name | String | Internal name of the field. |

| -- displayName | String | Name of the field on the User Interface. |

| -- htmlType | String | Type of HTML input used.Values:select,text,checkbox |

| -- possibleValues | Array | List displaying values of the fields. |

| --- label | String | Field name as seen on the UI. |

| --- value | String | Corresponding label value. |

| -- dynamicFieldType | String | Indicates if the field changes behaviour dynamically based on certain conditions. |

| -- value | String | Displays the current value of the field. |

| - connections | Array | Defines how various blocks in a dataflow or template connect. |

| -- relationship | String | Indicates the type of relationship between the blocks.Example:splitsmeans data or tasks are split into multiple paths.failuremeans an error-handling relationship; if the block encounters a failure during execution, the process moves to the block specified under the "failure" relationship. |

| -- destinationBlockName | String | Specifies the block where the data goes after a split or failure occurs. |

| -- loadBalanceStrategy | String | Defines how the system distributes data across multiple connections.ROUND_ROBINevenly distributes the data, ensuring a balanced load among the connections. |

| -- terminated | Boolean | Indicates whether the connection is terminated upon failure. |

| - validationErrors | Array | Array shows the validation errors related to the block. |

| - validationKey | Boolean | Indicates whether the block passes validation. |

| - dummyFieldChecked | Boolean | Shows whether a placeholder or dummy field is selected. |

| - visible | Boolean | States whether the block is visible. |

| - source | Boolean | States whether the block is a source block. |

| - fieldsNotIsAdvanced | Array | Array gives the details of non-advanced fields in the block. |

| status | Array | Array shows the status details of the template. |

| - state | String | Current status of the template.Example:Draft,Live |

| - runningCount | Integer | Indicates how many instances or executions of a workflow are currently running or active. |

| - stoppedCount | Integer | Indicates how many instances or executions of the workflow are currently stopped or terminated. |

| - invalidCount | Integer | Indicates how many instances or executions of the workflow are invalid because of errors or configuration issues. |

| - disabledCount | Integer | Indicates how many instances or executions of the workflow are currently disabled and not running. |

| schedule | Array | Array includes the scheduling details of the template. |

| - cron | String | Cron expression. A cron expression is a time-based job scheduler that allows you to schedule tasks, known as cron jobs, to run automatically at specified intervals, such as every minute, hour, day, or week. |

| - cronFrequencyInSeconds | Integer | Frequency of the cron job schedule in seconds. |



`select`

`text`

`checkbox`

`splits`

`failure`

`ROUND_ROBIN`

`Draft`

`Live`

```
{
    "name": "DIYDEMONEO_TESTDOC",
    "uuid": "28bdca6c-0192-1000-ffff-fffff93a616d",
    "blocks": [
        {
            "blockTypeId": 65,
            "name": "Transform-Data",
            "type": "csv_json_neo_transformer",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "File",
                    "displayName": "File Type",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "csv",
                            "value": "5c5b9607-0173-1000-87ad-a0b9ca44885f"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Sort",
                    "displayName": "Sort headers",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Alphabetical Sort",
                    "displayName": "Alphabetical Sort ? ",
                    "defaultValue": "0",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Group size",
                    "displayName": "Grouping Limit(1-1000)",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "1"
                },
                {
                    "name": "Group By",
                    "displayName": "Group By",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ],
            "connections": [
                {
                    "relationship": "splits",
                    "destinationBlockName": "Neo-Transformer",
                    "loadBalanceStrategy": "ROUND_ROBIN"
                },
                {
                    "relationship": "failure",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                }
            ],
            "validationErrors": [
                "'Record Reader' is invalid because Record Reader is required",
                "'Record Reader' is invalid because Record Reader is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": false,
            "fieldsNotIsAdvanced": [
                {
                    "name": "File",
                    "displayName": "File Type",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "csv",
                            "value": "5c5b9607-0173-1000-87ad-a0b9ca44885f"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Sort",
                    "displayName": "Sort headers",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Alphabetical Sort",
                    "displayName": "Alphabetical Sort ? ",
                    "defaultValue": "0",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Group size",
                    "displayName": "Grouping Limit(1-1000)",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "1"
                },
                {
                    "name": "Group By",
                    "displayName": "Group By",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ]
        },
        {
            "blockTypeId": 61,
            "name": "Neo-Transformer",
            "type": "neo_transformer",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "neoDataFlows",
                    "displayName": "Enter url",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "Demo_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/demoUrl"
                        },
                        {
                            "label": "Automation_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/automation"
                        },
                        {
                            "label": "CustomerAddTransformation",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/customeraddtransformation"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "split response",
                    "displayName": "Split Response",
                    "defaultValue": "false",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "true",
                            "value": "true"
                        },
                        {
                            "label": "false",
                            "value": "false"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Authorization",
                    "displayName": "Authorization",
                    "defaultValue": "Basic ${ten:append('[email protected]'):base64Encode()}",
                    "htmlType": "text",
                    "dynamicFieldType": ""
                }
            ],
            "connections": [
                {
                    "relationship": "success",
                    "destinationBlockName": "Connect-to-Destination",
                    "loadBalanceStrategy": "ROUND_ROBIN"
                }
            ],
            "validationErrors": [
                "'Remote URL' is invalid because Remote URL is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": false,
            "fieldsNotIsAdvanced": [
                {
                    "name": "neoDataFlows",
                    "displayName": "Enter url",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "Demo_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/demoUrl"
                        },
                        {
                            "label": "Automation_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/automation"
                        },
                        {
                            "label": "CustomerAddTransformation",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/customeraddtransformation"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "split response",
                    "displayName": "Split Response",
                    "defaultValue": "false",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "true",
                            "value": "true"
                        },
                        {
                            "label": "false",
                            "value": "false"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Authorization",
                    "displayName": "Authorization",
                    "defaultValue": "Basic ${ten:append('[email protected]'):base64Encode()}",
                    "htmlType": "text",
                    "dynamicFieldType": ""
                }
            ]
        },
        {
            "blockTypeId": 57,
            "name": "Connect-to-Destination",
            "type": "retro_destination",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "clientKey",
                    "displayName": "Client Key",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "clientSecret",
                    "displayName": "Client Secret",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "apiEndPoint",
                    "displayName": "API EndPoint",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiBaseUrl",
                    "displayName": "API Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiMethod",
                    "displayName": "API Method",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "POST",
                            "value": "POST"
                        },
                        {
                            "label": "PUT",
                            "value": "PUT"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "oAuthBaseUrl",
                    "displayName": "OAuth Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "bulkSupport",
                    "displayName": "Bulk Support",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "requestSplitPath",
                    "displayName": "Request Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "responseSplitPath",
                    "displayName": "Response Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "recoverableErrorCodes",
                    "displayName": "Recoverable Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "parsePathMap",
                    "displayName": "Parse Path Map",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "yieldingErrorCodes",
                    "displayName": "Yielding Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "maxRetries",
                    "displayName": "Max Retries",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "0"
                },
                {
                    "name": "additionalHeaders",
                    "displayName": "Additional Headers",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "false",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ],
            "connections": [
                {
                    "relationship": "success",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                },
                {
                    "relationship": "failure",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                },
                {
                    "relationship": "complete",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                }
            ],
            "validationErrors": [
                "'API Method' is invalid because API Method is required",
                "'OAuth Base URL' is invalid because OAuth Base URL is required",
                "'API Base URL' is invalid because API Base URL is required",
                "'API Endpoint' is invalid because API Endpoint is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": false,
            "fieldsNotIsAdvanced": [
                {
                    "name": "clientKey",
                    "displayName": "Client Key",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "clientSecret",
                    "displayName": "Client Secret",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "apiEndPoint",
                    "displayName": "API EndPoint",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiBaseUrl",
                    "displayName": "API Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiMethod",
                    "displayName": "API Method",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "POST",
                            "value": "POST"
                        },
                        {
                            "label": "PUT",
                            "value": "PUT"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "oAuthBaseUrl",
                    "displayName": "OAuth Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "bulkSupport",
                    "displayName": "Bulk Support",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "requestSplitPath",
                    "displayName": "Request Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "responseSplitPath",
                    "displayName": "Response Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "recoverableErrorCodes",
                    "displayName": "Recoverable Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "parsePathMap",
                    "displayName": "Parse Path Map",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "yieldingErrorCodes",
                    "displayName": "Yielding Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "maxRetries",
                    "displayName": "Max Retries",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "0"
                },
                {
                    "name": "additionalHeaders",
                    "displayName": "Additional Headers",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "false",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ]
        },
        {
            "blockTypeId": 6,
            "name": "Connect-to-source",
            "type": "sftp_pull",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "hostname",
                    "displayName": "Hostname",
                    "htmlType": "text",
                    "rules": {
                        "maxLength": {
                            "value": "100",
                            "message": "maximum length can't exceed 100"
                        },
                        "minLength": {
                            "value": "5",
                            "message": "minimum length must be 5"
                        },
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "username",
                    "displayName": "Username",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "password",
                    "displayName": "Password",
                    "htmlType": "password",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "sourceDirectory",
                    "displayName": "Source Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "."
                },
                {
                    "name": "fileRegex",
                    "displayName": "Filename Pattern",
                    "htmlType": "text",
                    "possibleValues": [
                        {
                            "label": ".*.csv",
                            "value": ".*.csv"
                        },
                        {
                            "label": ".*",
                            "value": ".*"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "processedDirectory",
                    "displayName": "Processed Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "unzipFiles",
                    "displayName": "Unzip Files",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "apiErrorFilePath",
                    "displayName": "API Error Filepath",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "searchDirRecursively",
                    "displayName": "Search Directory Recursively",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "port",
                    "displayName": "Port",
                    "defaultValue": "22",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "22"
                }
            ],
            "connections": [
                {
                    "relationship": "validated",
                    "destinationBlockName": "Transform-Data",
                    "loadBalanceStrategy": "SINGLE_NODE"
                }
            ],
            "validationErrors": [
                "'Hostname' is invalid because Hostname is required",
                "'Username' is invalid because Username is required",
                "'Hostname' is invalid because Hostname is required",
                "'Username' is invalid because Username is required",
                "'Hostname' is invalid because Hostname is required",
                "'Username' is invalid because Username is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": true,
            "fieldsNotIsAdvanced": [
                {
                    "name": "hostname",
                    "displayName": "Hostname",
                    "htmlType": "text",
                    "rules": {
                        "maxLength": {
                            "value": "100",
                            "message": "maximum length can't exceed 100"
                        },
                        "minLength": {
                            "value": "5",
                            "message": "minimum length must be 5"
                        },
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "username",
                    "displayName": "Username",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "password",
                    "displayName": "Password",
                    "htmlType": "password",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "sourceDirectory",
                    "displayName": "Source Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "."
                },
                {
                    "name": "fileRegex",
                    "displayName": "Filename Pattern",
                    "htmlType": "text",
                    "possibleValues": [
                        {
                            "label": ".*.csv",
                            "value": ".*.csv"
                        },
                        {
                            "label": ".*",
                            "value": ".*"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "processedDirectory",
                    "displayName": "Processed Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "unzipFiles",
                    "displayName": "Unzip Files",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "apiErrorFilePath",
                    "displayName": "API Error Filepath",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "searchDirRecursively",
                    "displayName": "Search Directory Recursively",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "port",
                    "displayName": "Port",
                    "defaultValue": "22",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "22"
                }
            ]
        }
    ],
    "status": {
        "state": "Draft",
        "runningCount": 1,
        "stoppedCount": 9,
        "invalidCount": 7,
        "disabledCount": 0
    },
    "schedule": {
        "cron": "0 0 12 1 6 ? *",
        "cronFrequencyInSeconds": 31536000
    }
}
```

```
{
    "name": "DIYDEMONEO_TESTDOC",
    "uuid": "28bdca6c-0192-1000-ffff-fffff93a616d",
    "blocks": [
        {
            "blockTypeId": 65,
            "name": "Transform-Data",
            "type": "csv_json_neo_transformer",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "File",
                    "displayName": "File Type",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "csv",
                            "value": "5c5b9607-0173-1000-87ad-a0b9ca44885f"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Sort",
                    "displayName": "Sort headers",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Alphabetical Sort",
                    "displayName": "Alphabetical Sort ? ",
                    "defaultValue": "0",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Group size",
                    "displayName": "Grouping Limit(1-1000)",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "1"
                },
                {
                    "name": "Group By",
                    "displayName": "Group By",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ],
            "connections": [
                {
                    "relationship": "splits",
                    "destinationBlockName": "Neo-Transformer",
                    "loadBalanceStrategy": "ROUND_ROBIN"
                },
                {
                    "relationship": "failure",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                }
            ],
            "validationErrors": [
                "'Record Reader' is invalid because Record Reader is required",
                "'Record Reader' is invalid because Record Reader is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": false,
            "fieldsNotIsAdvanced": [
                {
                    "name": "File",
                    "displayName": "File Type",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "csv",
                            "value": "5c5b9607-0173-1000-87ad-a0b9ca44885f"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Sort",
                    "displayName": "Sort headers",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Alphabetical Sort",
                    "displayName": "Alphabetical Sort ? ",
                    "defaultValue": "0",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Group size",
                    "displayName": "Grouping Limit(1-1000)",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "1"
                },
                {
                    "name": "Group By",
                    "displayName": "Group By",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ]
        },
        {
            "blockTypeId": 61,
            "name": "Neo-Transformer",
            "type": "neo_transformer",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "neoDataFlows",
                    "displayName": "Enter url",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "Demo_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/demoUrl"
                        },
                        {
                            "label": "Automation_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/automation"
                        },
                        {
                            "label": "CustomerAddTransformation",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/customeraddtransformation"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "split response",
                    "displayName": "Split Response",
                    "defaultValue": "false",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "true",
                            "value": "true"
                        },
                        {
                            "label": "false",
                            "value": "false"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Authorization",
                    "displayName": "Authorization",
                    "defaultValue": "Basic ${ten:append('[email protected]'):base64Encode()}",
                    "htmlType": "text",
                    "dynamicFieldType": ""
                }
            ],
            "connections": [
                {
                    "relationship": "success",
                    "destinationBlockName": "Connect-to-Destination",
                    "loadBalanceStrategy": "ROUND_ROBIN"
                }
            ],
            "validationErrors": [
                "'Remote URL' is invalid because Remote URL is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": false,
            "fieldsNotIsAdvanced": [
                {
                    "name": "neoDataFlows",
                    "displayName": "Enter url",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "Demo_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/demoUrl"
                        },
                        {
                            "label": "Automation_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/automation"
                        },
                        {
                            "label": "CustomerAddTransformation",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/customeraddtransformation"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "split response",
                    "displayName": "Split Response",
                    "defaultValue": "false",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "true",
                            "value": "true"
                        },
                        {
                            "label": "false",
                            "value": "false"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Authorization",
                    "displayName": "Authorization",
                    "defaultValue": "Basic ${ten:append('[email protected]'):base64Encode()}",
                    "htmlType": "text",
                    "dynamicFieldType": ""
                }
            ]
        },
        {
            "blockTypeId": 57,
            "name": "Connect-to-Destination",
            "type": "retro_destination",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "clientKey",
                    "displayName": "Client Key",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "clientSecret",
                    "displayName": "Client Secret",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "apiEndPoint",
                    "displayName": "API EndPoint",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiBaseUrl",
                    "displayName": "API Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiMethod",
                    "displayName": "API Method",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "POST",
                            "value": "POST"
                        },
                        {
                            "label": "PUT",
                            "value": "PUT"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "oAuthBaseUrl",
                    "displayName": "OAuth Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "bulkSupport",
                    "displayName": "Bulk Support",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "requestSplitPath",
                    "displayName": "Request Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "responseSplitPath",
                    "displayName": "Response Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "recoverableErrorCodes",
                    "displayName": "Recoverable Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "parsePathMap",
                    "displayName": "Parse Path Map",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "yieldingErrorCodes",
                    "displayName": "Yielding Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "maxRetries",
                    "displayName": "Max Retries",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "0"
                },
                {
                    "name": "additionalHeaders",
                    "displayName": "Additional Headers",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "false",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ],
            "connections": [
                {
                    "relationship": "success",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                },
                {
                    "relationship": "failure",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                },
                {
                    "relationship": "complete",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                }
            ],
            "validationErrors": [
                "'API Method' is invalid because API Method is required",
                "'OAuth Base URL' is invalid because OAuth Base URL is required",
                "'API Base URL' is invalid because API Base URL is required",
                "'API Endpoint' is invalid because API Endpoint is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": false,
            "fieldsNotIsAdvanced": [
                {
                    "name": "clientKey",
                    "displayName": "Client Key",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "clientSecret",
                    "displayName": "Client Secret",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "apiEndPoint",
                    "displayName": "API EndPoint",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiBaseUrl",
                    "displayName": "API Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiMethod",
                    "displayName": "API Method",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "POST",
                            "value": "POST"
                        },
                        {
                            "label": "PUT",
                            "value": "PUT"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "oAuthBaseUrl",
                    "displayName": "OAuth Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "bulkSupport",
                    "displayName": "Bulk Support",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "requestSplitPath",
                    "displayName": "Request Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "responseSplitPath",
                    "displayName": "Response Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "recoverableErrorCodes",
                    "displayName": "Recoverable Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "parsePathMap",
                    "displayName": "Parse Path Map",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "yieldingErrorCodes",
                    "displayName": "Yielding Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "maxRetries",
                    "displayName": "Max Retries",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "0"
                },
                {
                    "name": "additionalHeaders",
                    "displayName": "Additional Headers",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "false",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ]
        },
        {
            "blockTypeId": 6,
            "name": "Connect-to-source",
            "type": "sftp_pull",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "hostname",
                    "displayName": "Hostname",
                    "htmlType": "text",
                    "rules": {
                        "maxLength": {
                            "value": "100",
                            "message": "maximum length can't exceed 100"
                        },
                        "minLength": {
                            "value": "5",
                            "message": "minimum length must be 5"
                        },
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "username",
                    "displayName": "Username",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "password",
                    "displayName": "Password",
                    "htmlType": "password",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "sourceDirectory",
                    "displayName": "Source Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "."
                },
                {
                    "name": "fileRegex",
                    "displayName": "Filename Pattern",
                    "htmlType": "text",
                    "possibleValues": [
                        {
                            "label": ".*.csv",
                            "value": ".*.csv"
                        },
                        {
                            "label": ".*",
                            "value": ".*"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "processedDirectory",
                    "displayName": "Processed Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "unzipFiles",
                    "displayName": "Unzip Files",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "apiErrorFilePath",
                    "displayName": "API Error Filepath",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "searchDirRecursively",
                    "displayName": "Search Directory Recursively",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "port",
                    "displayName": "Port",
                    "defaultValue": "22",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "22"
                }
            ],
            "connections": [
                {
                    "relationship": "validated",
                    "destinationBlockName": "Transform-Data",
                    "loadBalanceStrategy": "SINGLE_NODE"
                }
            ],
            "validationErrors": [
                "'Hostname' is invalid because Hostname is required",
                "'Username' is invalid because Username is required",
                "'Hostname' is invalid because Hostname is required",
                "'Username' is invalid because Username is required",
                "'Hostname' is invalid because Hostname is required",
                "'Username' is invalid because Username is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": true,
            "fieldsNotIsAdvanced": [
                {
                    "name": "hostname",
                    "displayName": "Hostname",
                    "htmlType": "text",
                    "rules": {
                        "maxLength": {
                            "value": "100",
                            "message": "maximum length can't exceed 100"
                        },
                        "minLength": {
                            "value": "5",
                            "message": "minimum length must be 5"
                        },
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "username",
                    "displayName": "Username",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "password",
                    "displayName": "Password",
                    "htmlType": "password",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "sourceDirectory",
                    "displayName": "Source Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "."
                },
                {
                    "name": "fileRegex",
                    "displayName": "Filename Pattern",
                    "htmlType": "text",
                    "possibleValues": [
                        {
                            "label": ".*.csv",
                            "value": ".*.csv"
                        },
                        {
                            "label": ".*",
                            "value": ".*"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "processedDirectory",
                    "displayName": "Processed Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "unzipFiles",
                    "displayName": "Unzip Files",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "apiErrorFilePath",
                    "displayName": "API Error Filepath",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "searchDirRecursively",
                    "displayName": "Search Directory Recursively",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "port",
                    "displayName": "Port",
                    "defaultValue": "22",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "22"
                }
            ]
        }
    ],
    "status": {
        "state": "Draft",
        "runningCount": 1,
        "stoppedCount": 9,
        "invalidCount": 7,
        "disabledCount": 0
    },
    "schedule": {
        "cron": "0 0 12 1 6 ? *",
        "cronFrequencyInSeconds": 31536000
    }
}
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

# API-specific error codes

| Error Code | Description |

| --- | --- |

| 500 | blockType is invalid |



`Try It!`