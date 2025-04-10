# Get Goodwill Requestsget

# Query parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| currencyId* | long | Pass the unique ID of the customer whose goodwill request details you want to fetch. |

| requestId | long | Unique id of the goodwill request that you want to fetch. |

| is_one_step_change | boolean | Pass true to fetch goodwill points or coupon requests that are issued instantly (one step issual). |

| programId | int | Get requests of a specific loyalty program. Pass the unique loyalty program ID. |

| autoApprove | boolean | Pass true to fetch requests that are auto-approved - without the involvement of the back-end team. |



# Response parameters

| Parameter | Description |

| --- | --- |

| limit | The limit of items displayed on the current page. |

| offset | The starting point from which items are displayed (used for pagination). |

| total | The total number of items available across all pages. |

| id | The unique identifier of the item. |

| addedBy | Information about the user who added the item. |

| updatedBy | Information about the user who last updated the item. |

| enteredBy | Information about the user who entered the item (may not be present in all items). |

| addedOn | Timestamp of when the item was added. |

| updatedOn | Timestamp of when the item was last updated. |

| userId | The unique identifier of the user associated with the item. |

| requestId | The unique identifier of the request associated with the item. |

| goodwillType | The type of goodwill. |

| goodwillStatus | The current status of the goodwill request. |

| comments | Comments or remarks associated with the item. |

| reason | Reason associated with the goodwill request. |

| approvedValue | Value that was approved (only available if the goodwillStatus is "APPROVED"). |

| updatedComments | Updated comments or remarks associated with the item. |

| oneStep | Boolean value indicating if the request is one step or not. |

| warnings | List of any warnings related to the request/response. |

| errors | List of any errors related to the request/response. |



`Try It!`