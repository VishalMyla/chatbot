# Search Customers by Labelget

- Rate limiter controls the number of incoming and outgoing traffic of a network.

- Authentication verifies the identity of the current user or integration.See Introduction > Authentication (Merchant Setup on Admin Portal) for more details.

# Query parameters

| Parameter | Description |

| --- | --- |

| q | Specify the label name by which you want to fetch customers. You can also pass partial string. For examplepreto fetch customers in all labels that starts withpre. |



`pre`

`pre`

# Response parameters

| Parameter | Description |

| --- | --- |

| limit | The limit of items displayed on the current page. |

| offset | The starting point from which items are displayed (used for pagination). |

| total | The total number of items available across all pages. |

| userId | The unique identifier of the user. |

| customerLabels | List of labels associated with the customer. |

| orgId | The organization ID associated with the label. |

| labelId | The unique identifier of the label. |

| userId | The unique identifier of the user associated with the label. |

| labelName | The name of the label. |

| warnings | List of any warnings related to the request/response. |

| errors | List of any errors related to the request/response. |



`Try It!`