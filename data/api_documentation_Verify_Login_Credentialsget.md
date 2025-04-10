# Verify Login Credentialsget

> ❗️Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

# API endpoint

https://{host}/v1/1store/login.json

# Response parameters

| Parameter | Description |

| --- | --- |

| response | Contains the main structure of the response. |

| response.status | Contains the status details of the response. |

| response.status.success | Indicates if the response was a success. Returns "true" or "false" as a string. |

| response.status.code | The HTTP response code. Typically, "200" indicates success. |

| response.status.message | Message describing the status. |

| response.store | Contains information about the store. |

| response.store.user | Contains details of the user associated with the store. |

| response.store.user.username | The username of the user associated with the store. |

| response.store.user.first_name | The first name of the user. |

| response.store.user.last_name | The last name of the user. |

| response.store.user.org_name | The organization name associated with the user. |

| response.store.user.user_id | The unique identifier of the user. |

| response.store.user.type | Type of the user, e.g., "STR_SERVER". |

| response.store.user.org_id | The unique identifier of the organization. |

| response.store.user.server_time | The server timestamp at the time of the response. |

| response.store.user.associate_login_enabled | Indicates if the associate login is enabled. Returns "true" or "false" as a string. |



`Try It!`