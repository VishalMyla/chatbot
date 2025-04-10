# Retrieve Individual Task Detailsget

# Request URL

http://<cluster url>/v1.1/task/get?format=<xml/json>&<params>=<value>

```
http://<cluster url>/v1.1/task/get?format=<xml/json>&<params>=<value>
```

# Request Parameters

| Parameter | Description |

| --- | --- |

| assoc | Returns tasks of all associates of the current store if assoc=true |

| all | Returns all the tasks of the current organization if all=true. If all=false, only the current store tasks are returned. Default value: true |

| action_type | Value: sms, email, call, or none. Returns a particular type of task (SMS/email/call). If action_type is “none”, then the tasks other than SMS, email, or call will be returned. |

| assoc_id | Returns the tasks assigned to a specific associate |

| customer_id | Returns the tasks created for a specific customer |

| status | Returns the tasks by status. Value: OPEN, IN_PROGRESS, CLOSED |

| start_date | Returns the list of tasks created in a specific duration (set in start_date and end_date). If only start_date is mentioned then the list of tasks created on or after the specified date is returned. |

| end_date | Returns the list of tasks created in a specific duration set in start_date and end_date. If only end_date is passed then the list of tasks created on or before the specified date is returned. |

| batch_size | Limits the number of tasks to be displayed. For example, if batch_size=10 then the details of only 10 tasks are returned |



# Response Parameters

| Parameter | Description |

| --- | --- |

| response status success | The success status of the response. |

| response status code | The HTTP status code of the response. |

| response status message | The status message of the response. |

| tasks task type | The type of the task. It could be associated with a customer or cashier, or be a specific customer type. |

| tasks task associate_id | The ID of the associate involved in the task. |

| tasks task customer_id | The ID of the customer associated with the task. |

| tasks task store_id | The ID of the store related to the task. |

| tasks task status | The status of the task. It's "OPEN" for both tasks. |



`Try It!`