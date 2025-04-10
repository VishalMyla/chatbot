# Retrieve Workspacesget

TheWorkspaceID identifies the specific workspace in Connect+ where you create the template. The API retrieves the Workspace ID, which you use in theCreate DIY templateAPI to create a DIY template. Theidparameter in the response payload is the Workspace ID.

`id`

# API endpoint example

https://uscrm.connectplus.capillarytech.com/api/workspaces

# Prerequisites

- Access to Connect+

- Keep the Connect+ UI open

# Response parameters

| Field | Data Type | Description |

| --- | --- | --- |

| id | Integer | Unique identifier for theworkspace. |

| name | String | Name of the workspace. |

| uuid | String | Universally unique identifier of the workspace (organisation). |

| enabled | Boolean | Indicates if you can access, make changes, run processes, and perform any operations within the workspace. |

| organisations | Array | List of organisation details associated with the workspace. |

| - id | Integer | Unique identifier for the organisation. |

| - name | String | Name of the organisation. |

| - cluster | String | Cluster region of the organisation.Example: US cluster, India cluster |

| locked | Boolean | Indicates if the workspace is locked |



[workspace](/docs/connectplus_overview#workspace)

```
[
    {
        "id": 209,
        "name": "8_uscrm_Automation",
        "uuid": "e1bc9b40-018e-1000-ffff-fffff0638f69",
        "enabled": true,
        "organisations": [
            {
                "id": 8,
                "name": "EventNotification_Automation",
                "cluster": "us"
            }
        ],
        "locked": false
    }
]
```

```
[
    {
        "id": 209,
        "name": "8_uscrm_Automation",
        "uuid": "e1bc9b40-018e-1000-ffff-fffff0638f69",
        "enabled": true,
        "organisations": [
            {
                "id": 8,
                "name": "EventNotification_Automation",
                "cluster": "us"
            }
        ],
        "locked": false
    }
]
```

`Try It!`